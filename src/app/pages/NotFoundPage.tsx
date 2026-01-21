import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => (
  <div style={{ padding: '40px', textAlign: 'center' }}>
    <h1>404 Not Found</h1>
    <p>Страница не существует, вернуться на главную</p>
    <Link className="header__logo-link" to="/">
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width="81"
        height="41"
      />
    </Link>
  </div>
);

export default NotFoundPage;
