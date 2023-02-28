import { Link } from 'react-router-dom';

const Missing = () => (
  <main className="Missing">
    <h2>Page Not Found</h2>
    <p>Well, that is disappointing.</p>
    <p>
      <Link to="/">Visit Our Homepage</Link>
    </p>
  </main>
);

export default Missing;
