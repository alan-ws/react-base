/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Icon } from './Iconology';
import { makeTestStore } from '../../lib/testing/store';
import { Provider } from 'react-redux';
import { ActionButton } from '../Button/Button';
import { uiSlice } from '../../lib/state/ui/ui.slice';
import userEvent from '@testing-library/user-event';

describe('Icon', () => {
  const store = makeTestStore();

  it('clicks and works', async () => {
    render(
      <Provider store={store}>
        <ActionButton
          label="Button Label"
          fn={() => store.dispatch(uiSlice.actions.setIconUri('DD'))}
        />
        <Icon />
      </Provider>,
    );

    expect(screen.getByText('Appear here'));
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('img'));
  });
});
