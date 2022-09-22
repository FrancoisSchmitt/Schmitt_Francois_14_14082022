import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { Provider } from 'react-redux';
import { store, persistor } from './Store';

import Header from '../../my-app/src/Components/Layout/Header';
import Footer from '../../my-app/src/Components/Layout/Footer';
import EmpoyeeCreate from './Pages/EmployeeCreate';
import EmployeeList from './Pages/EmployeeList';
import Error404 from './Pages/Error404';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
            <Provider store={store}>
                  <PersistGate loading={null} persistor={persistor}>
                        <BrowserRouter>
                              <Header />
                              <Routes>
                                    <Route
                                          path="/"
                                          element={<EmpoyeeCreate />}
                                    />
                                    <Route
                                          path="/Employee-list"
                                          element={<EmployeeList />}
                                    />
                                    <Route path="*" element={<Error404 />} />
                                    <Route path="/404" element={<Error404 />} />
                              </Routes>
                              <Footer />
                              {/* <Footer /> */}
                        </BrowserRouter>
                  </PersistGate>
            </Provider>
      </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
