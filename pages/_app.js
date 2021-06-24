import { Provider } from 'react-redux';
import { store } from '../app/store';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
