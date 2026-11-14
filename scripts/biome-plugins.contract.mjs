// Contract test for the Biome GritQL plugins in biome/plugins/.
// Each plugin <name>.grit must report on fixtures/<name>/invalid.tsx and stay
// silent on fixtures/<name>/valid.tsx. Every fixture must also parse cleanly.
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
	copyFileSync,
	mkdtempSync,
	readdirSync,
	rmSync,
	writeFileSync,
} from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pluginDir = join(root, "biome", "plugins");
const biomeBin = createRequire(join(root, "package.json")).resolve(
	"@biomejs/biome/bin/biome",
);

function lintWithPlugin(plugin, fixture) {
	const workDir = mkdtempSync(join(tmpdir(), "biome-plugin-"));
	try {
		const config = {
			plugins: [join(pluginDir, `${plugin}.grit`).replaceAll("\\", "/")],
			linter: { rules: { preset: "none" } },
			formatter: { enabled: false },
			assist: { enabled: false },
		};
		writeFileSync(join(workDir, "biome.json"), JSON.stringify(config));
		copyFileSync(
			join(pluginDir, "fixtures", plugin, fixture),
			join(workDir, fixture),
		);
		const result = spawnSync(
			process.execPath,
			[biomeBin, "lint", "--reporter=json", fixture],
			{
				cwd: workDir,
				encoding: "utf8",
			},
		);
		const report = JSON.parse(result.stdout);
		return report.diagnostics;
	} finally {
		rmSync(workDir, { recursive: true, force: true });
	}
}

const plugins = readdirSync(pluginDir)
	.filter((file) => file.endsWith(".grit"))
	.map((file) => file.slice(0, -".grit".length));

test("every plugin has fixtures", () => {
	assert.ok(plugins.length > 0);
	const fixtureDirs = readdirSync(join(pluginDir, "fixtures"));
	assert.deepEqual([...fixtureDirs].sort(), [...plugins].sort());
});

for (const plugin of plugins) {
	test(`${plugin} reports the invalid fixture`, () => {
		const diagnostics = lintWithPlugin(plugin, "invalid.tsx");
		assert.deepEqual(
			diagnostics.filter((d) => d.category !== "plugin"),
			[],
		);
		assert.ok(diagnostics.length > 0, `${plugin} did not report invalid.tsx`);
	});

	test(`${plugin} accepts the valid fixture`, () => {
		assert.deepEqual(lintWithPlugin(plugin, "valid.tsx"), []);
	});
}
