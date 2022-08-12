import '@testing-library/jest-dom/extend-expect';
const { toHaveNoViolations } = require('jest-axe');
import { setGlobalConfig } from '@storybook/testing-react';
import * as globalStorybookConfig from './.storybook/preview';

setGlobalConfig(globalStorybookConfig);

expect.extend(toHaveNoViolations);
