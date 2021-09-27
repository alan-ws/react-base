/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Title } from '../components/Typography/Typography';
import { style } from '../lib/styleTheme';

describe('Title', () => {
  it('renders title', async () => {
    render(<Title title="Title to test" />);

    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: style.bp.sm,
    });

    await waitFor(
      () => {
        expect(screen.getByText('Title to test')).toBeInTheDocument();
      },
      { timeout: 1000 },
    );
  });
});
