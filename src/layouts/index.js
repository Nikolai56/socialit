import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './reset.css';
import './stylesheet.scss';
import './modal.css';
import './media.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Главная | COLORFAST design" />
    <Header />
    <Navbar />
    {children()}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
