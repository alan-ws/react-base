import { memo } from 'react';
import { H1 } from './Typography.style';

interface ITitle {
  title: string;
}

export const Title = memo(({ title }: ITitle) => {
  return <H1>{title}</H1>;
});

export default Title;
