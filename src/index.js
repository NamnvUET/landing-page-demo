import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Import Redux
import { Provider } from 'react-redux';
import store from './store/store.js';
// Import React Router v6
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Import Routers List
import Routers from './Routers';
//Import Pages
import App from './App';
import Home from './components/Pages/home';
import AboutUs from './components/Pages/about_us';
import NotFound from './components/Pages/notfound';
import Schedules from './components/Pages/schedules';
import RegisterCourses from './components/Pages/register_courses';
import News from './components/Pages/news';
import Contact from './components/Pages/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route index element={ <Home />} />
            <Route path={Routers.Pages.AboutUs} element={<AboutUs />}></Route>
            <Route path={Routers.Pages.Schedules} element={<Schedules />}></Route>
            <Route path={Routers.Pages.RegisterCourses} element={<RegisterCourses />}></Route>
            <Route path={Routers.Pages.News} element={<News />}></Route>
            <Route path={Routers.Pages.Contacts} element={<Contact />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
