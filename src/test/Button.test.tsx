/**
 * @jest-environment jsdom
 */

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ActionButton } from '../components/Button/Button';
import { Provider } from 'react-redux';
import { makeTestStore } from './store';

describe('Button', () => {
  const store = makeTestStore();
  const consoleOutput: any[] = [];
  const mockedWarn = (output: any) => consoleOutput.push(output);

  beforeEach(() => (console.log = mockedWarn));

  it('renders flat', () => {
    render(
      <Provider store={store}>
        <ActionButton label="Button Label" fn={() => console.log('pressed')} />
      </Provider>,
    );

    expect(screen.getByText('Button Label')).toBeInTheDocument();
  });

  it('clicks and works', () => {
    render(
      <Provider store={store}>
        <ActionButton label="Button Label" fn={() => console.log('pressed')} />
      </Provider>,
    );

    fireEvent.click(screen.getByRole('button'));

    expect(consoleOutput).toEqual(['pressed']);
  });
});
