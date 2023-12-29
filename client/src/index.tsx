import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './reducers';
import App from './App';
import { theme } from './styles/theme';
import { GlobalFonts } from './assets/fonts/fonts';
import { GlobalStyle } from './styles/global';

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <GlobalFonts />
            <GlobalStyle />
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
