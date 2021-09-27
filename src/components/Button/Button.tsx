import { memo } from 'react';
import { Button } from './Button.style';

interface IButton {
  label: string;
  fn?: () => void;
  disable?: boolean;
  loading?: boolean;
}

export const ActionButton = memo(({ label, fn }: IButton) => {
  return <Button onClick={fn && fn}>{label}</Button>;
});
