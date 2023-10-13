/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset : 'ts-jest',
  testEnvironment : 'jest-environment-jsdom',
  setupFileAfterEnv : ["./jest.setup.ts"]
}