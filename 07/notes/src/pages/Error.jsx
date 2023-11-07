import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/not-found.svg';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <section className="error-section">
        <div className="error-container">
          <img src={img} alt="not found" className="error-img" />
          <h3>Ohh!</h3>
          <p>We can't seem to find page you are looking for</p>
          <Link to="/">back home</Link>
        </div>
      </section>
    );
  }
  return (
    <section className="error-section">
      <div className="error-container">
        <h3>something went wrong </h3>
      </div>
    </section>
  );
};

export default Error;
