import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from '../components/Typography/Typography';
import { ActionButton } from '../components/Button/Button';
import { uiSlice } from '../lib/state/ui/ui.slice';
import { withMetaTags, withProfiler } from '../lib/utils/enhancers';
import { Icon } from '../components/Iconology/Iconology';
import AppLayoutLoader from '../components/Loading/AppLayoutLoader';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('App loaded');
  }, []);

  const handleOnClick = () => {
    dispatch(uiSlice.actions.getIcon({}));
  };

  return (
    <AppLayoutLoader>
      <Title title="Placeholder" />
      <ActionButton label="Get Icon" fn={handleOnClick} />
      <Icon />
    </AppLayoutLoader>
  );
}

export default withMetaTags(withProfiler(Home, 'home'), { title: 'Home' });
