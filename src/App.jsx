import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ContactPage from './pages/ContactPage/ContactPage';
import GlobalStyle from './styles/GlobalStyle.ts';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ContactPage />
    </Provider>
  );
};

export default App;
