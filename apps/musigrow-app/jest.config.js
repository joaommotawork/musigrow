/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	displayName: { name: 'MUSIGROW-APP', color: 'blue' },
	preset: 'ts-jest',
	testEnvironment: 'node',
	collectCoverageFrom: [
		'**/*.{js,jsx,ts,tsx}',
		'!**/*.d.ts',
		'!**/node_modules/**',
	],
	moduleNameMapper: {
		/* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
		'^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

		// Handle CSS imports (without CSS modules)
		'^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

		/* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
		'^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
			'<rootDir>/__mocks__/fileMock.js',
		'^@app(.*)$': '<rootDir>/src/app$1',
		'^@features(.*)$': '<rootDir>/src/features$1',
		'^@services(.*)$': '<rootDir>/src/services$1',
		'^@components(.*)$': '<rootDir>/src/components$1',
		'^@pages(.*)$': '<rootDir>/src/pages$1',
		'^@public(.*)$': '<rootDir>/src/public$1',
		'^@hooks(.*)$': '<rootDir>/src/hooks$1',
		'^@types(.*)$': '<rootDir>/src/types$1',
		'^@utils(.*)$': '<rootDir>/src/utils$1',
		'^@constants(.*)$': '<rootDir>/src/constants$1',
		'^@styles(.*)$': '<rootDir>/src/styles$1',
	},
	testPathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/.next/',
		'<rootDir>/e2e/',
	],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coveragePathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/.next/',
		'<rootDir>/e2e/',
	],
};
