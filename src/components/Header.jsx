import propTypes from 'prop-types';

const Header = ({ title }) => (
  <header className="Header">
    <h1>{title}</h1>
  </header>
);

Header.propTypes = {
  title: propTypes.string.isRequired,
};

export default Header;
