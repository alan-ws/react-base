import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from '../components/Typography/Typography';
import { ActionButton } from '../components/Button/Button';
import { uiSlice } from '../lib/state/ui/ui.slice';
import { RootState } from '../lib/state/store';
import { withProfiler } from '../lib/utils/enhancers';
import AppLayoutLoader from '../components/Loading/AppLayoutLoader';

function Home() {
  const dispatch = useDispatch();
  const { consoleLogValue } = useSelector((state: RootState) => state.ui);

  useEffect(() => {
    console.log('App loaded');
  }, []);

  useEffect(() => {
    if (!!consoleLogValue) console.log(consoleLogValue);

    return;
  }, [consoleLogValue]);

  const handleOnClick = () => {
    dispatch(uiSlice.actions.initiateConsoleLog());
  };

  return (
    <AppLayoutLoader>
      <div>
        <Title title="Placeholder" />
        <ActionButton label="ConsoleLog" fn={handleOnClick} />
      </div>
    </AppLayoutLoader>
  );
}

export default withProfiler(Home, 'home');
