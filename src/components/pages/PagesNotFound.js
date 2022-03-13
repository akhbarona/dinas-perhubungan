import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function PagesNotFound() {
  return (
    <section className="section">
      <Container>
        <h1>404 Error Page</h1>
        <p className="zoom-area">
          <b>Page Not Found</b>
        </p>
        <section className="error-container">
          <span className="four">
            <span className="screen-reader-text">4</span>
          </span>
          <span className="zero">
            <span className="screen-reader-text">0</span>
          </span>
          <span className="four">
            <span className="screen-reader-text">4</span>
          </span>
        </section>
        <div className="link-container">
          <Link target="_blank" to="/" className="more-link">
            Back To Home
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default PagesNotFound;
