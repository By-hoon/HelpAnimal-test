import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/Header.scss';

const Header = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsDark(true);
    }
  }, []);

  return (
    <div className={classNames('header__navigation')}>
      <Link to="/" className={classNames('header__navigation--logo', { isDark: isDark })}>
        헬프애니멍
      </Link>
    </div>
  );
};

export default Header;
