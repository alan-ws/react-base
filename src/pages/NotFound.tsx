import { withMetaTags } from '../lib/utils/enhancers';

function NotFound() {
  return <h1>Page not found</h1>;
}

export default withMetaTags(NotFound, { title: 'PAGE NOT FOUND' });
