import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store'; // импорт нового редукса
import { Provider } from 'react-redux';

console.log('Store:', store);
console.log('State:', store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
      <BrowserRouter>
        <Provider store={store} >
          <App />
        </Provider>
      </BrowserRouter>

  );
  // Внутри state будет сидеть redux
  reportWebVitals();
// создаем тут rerender функицю, отдаем в state => функция subscribe ее принимает и забирает в state