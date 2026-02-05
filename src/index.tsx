import React from 'react';
import ReactDOM from 'react-dom/client';
import 'leaflet/dist/leaflet.css';
import App from './app/App';
import offers from './mocks/offers';
import { Provider } from 'react-redux';
import { store } from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} onFavoriteClick={() => { }} />
    </Provider>
  </React.StrictMode>
);
