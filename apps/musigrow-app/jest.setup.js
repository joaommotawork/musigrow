import '@testing-library/jest-dom/extend-expect';
import * as matchers from 'jest-extended';
const { axe, toHaveNoViolations } = require('jest-axe');

expect.extend(toHaveNoViolations);
expect.extend(matchers);
