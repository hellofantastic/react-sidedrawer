import * as React from 'react';
import { render } from '@testing-library/react';

import 'jest-canvas-mock';

import { SideDrawer } from './src';

describe('Simple common render', () => {
  it('renders without crashing', () => {
    render(<SideDrawer />);
  });
});
