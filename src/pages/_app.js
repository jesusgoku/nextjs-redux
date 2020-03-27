/* eslint-disable react/prop-types */
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import store from '@app/store';

import '@app/styles/index.css';

// eslint-disable-next-line no-shadow
function App({ Component, pageProps, store }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

const makeStore = () => store;

export default withRedux(makeStore)(App);
