import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// import PropTypes from 'prop-types';

// interface WelcomeProps {
//   name: string;
// }

// const Welcome = (props: WelcomeProps): JSX.Element => {
//   return <h1>Hello, {props.name} </h1>;
// };

// Welcome.propTypes = {
//   name: PropTypes.string,
// };

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <Welcome name="Sarah" />
);
