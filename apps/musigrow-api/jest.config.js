/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	displayName: { name: 'MUSIGROW-API', color: 'red' },
	preset: 'ts-jest',
	testEnvironment: 'node',
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx}',
		'!**/*.d.ts',
		'!**/node_modules/**',
	],
	moduleNameMapper: {
		/* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
		'^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
			'<rootDir>/__mocks__/fileMock.js',
		'^@src(.*)$': '<rootDir>/src$1',
		'^@models(.*)$': '<rootDir>/src/models$1',
		'^@routes(.*)$': '<rootDir>/src/routes$1',
	},
	testPathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/.next/',
		'<rootDir>/e2e/',
		'<rootDir>/cypress/',
		'<rootDir>/coverage/',
	],
	setupFilesAfterEnv: ['jest-extended/all'],
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
