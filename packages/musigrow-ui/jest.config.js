/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	displayName: { name: 'MUSIGROW-UI', color: 'green' },
	preset: 'ts-jest',
	testEnvironment: 'node',
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx}',
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
		'^@atoms(.*)$': '<rootDir>/src/library/atoms$1',
		'^@molecules(.*)$': '<rootDir>/src/library/molecules$1',
		'^@organisms(.*)$': '<rootDir>/src/library/organisms$1',
		'^@constants(.*)$': '<rootDir>/src/constants$1',
		'^@hooks(.*)$': '<rootDir>/src/hooks$1',
		'^@styles(.*)$': '<rootDir>/src/styles$1',
		'^@types(.*)$': '<rootDir>/src/types$1',
		'^@utils(.*)$': '<rootDir>/src/utils$1',
	},
	testPathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/.next/',
		'<rootDir>/e2e/',
		'<rootDir>/cypress/',
		'<rootDir>/coverage/',
	],
	setupFilesAfterEnv: ['jest-extended/all', '<rootDir>/jest.setup.js'],
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coveragePathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/.next/',
		'<rootDir>/e2e/',
		'<rootDir>/cypress/',
		'<rootDir>/coverage/',
	],
};
