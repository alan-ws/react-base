import { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { kernelSlice } from '../../lib/state/kernel/kernel.slice';
import { RootState } from '../../lib/state/store';
import { Title } from '../Typography/Typography';

interface IProps {
  children?: ReactNode | ReactNode[];
}

function AppLayoutLoader(props: IProps) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.kernel);

  useEffect(() => {
    setTimeout(() => {
      dispatch(kernelSlice.actions.setLoadingState(false));
    }, 500);
  }, []);

  return <>{loading ? <Title title="Loading..." /> : props.children}</>;
}

export default AppLayoutLoader;
