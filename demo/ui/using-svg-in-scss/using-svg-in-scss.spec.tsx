import React from 'react';
import { render } from '@testing-library/react';
import { BasicUsingSvgInScss } from './using-svg-in-scss.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicUsingSvgInScss />);
  const rendered = getByText('hello from UsingSvgInScss');
  expect(rendered).toBeTruthy();
});
