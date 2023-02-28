import { Outlet } from 'react-router-dom';
import propTypes from 'prop-types';
import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ search, setSearch }) => (
  <div className="App">
    <Header title="React.JS Blog" />
    <Nav search={search} setSearch={setSearch} />
    <Outlet />
    <Footer />
  </div>
);

Layout.propTypes = {
  search: propTypes.string.isRequired,
  setSearch: propTypes.string.isRequired,
};

export default Layout;
