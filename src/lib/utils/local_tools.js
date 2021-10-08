const fs = require('fs');

const func = (name) => `
import { Container } from './${name}.styles';
interface IProps {};

export const ${name} = (props: IProps) => {
  return (<Container></Container>)
}
`;

const styleSheet = `
import { styled } from 'goober';

export const Container = styled('div')\`\`;
`;

const fixture = (name) => `
import React from 'react';
import { setup } from 'goober';
import { ${name} } from './${name}';

setup(React.createElement);

export default <${name} />;
`;

const test = (name) => `
/**
 * @jest-environment jsdom
 */

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ${name} } from './${name}';

describe('${name}', () => {
  it('renders flat', () => {
    render(
      <${name} />
    );

    expect(screen.getByText('')).toBeInTheDocument();
  });
});
`;

function generateComponent(name) {
  fs.mkdir(name, console.log);

  fs.writeFile(`./${name}/${name}.tsx`, func(name), console.log);
  fs.writeFile(`./${name}/${name}.styles.ts`, styleSheet, console.log);
  fs.writeFile(`./${name}/${name}.fixture.tsx`, fixture(name), console.log);
  fs.writeFile(`./${name}/${name}.test.tsx`, test(name), console.log);
}

generateComponent('Notification');
