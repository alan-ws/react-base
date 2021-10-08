import { useSelector } from 'react-redux';
import { RootState } from '../../lib/state/store';

export const Icon = () => {
  const { iconUri } = useSelector((state: RootState) => state.ui);
  const { requesting } = useSelector((state: RootState) => state.request);

  if (requesting.icon && !iconUri) return <h1>Fetching Icon</h1>;

  return (
    <>
      {!iconUri ? (
        <h1>Appear here</h1>
      ) : (
        <div>
          <img src={iconUri} />
        </div>
      )}
    </>
  );
};
export default Icon;
