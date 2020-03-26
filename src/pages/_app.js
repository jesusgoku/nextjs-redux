import NextApp from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import store from '../store';

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}
    ;

    return { pageProps };
  }

  render() {
    // eslint-disable-next-line no-shadow
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

const makeStore = () => store;

export default withRedux(makeStore)(App);
