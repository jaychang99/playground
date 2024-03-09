import { ROUTES } from '@/constants/routes';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  // get current route
  const { pathname: currentPathname } = useLocation();

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '8px',
        alignItems: 'flex-start',
        backgroundColor: '#1b1b1b',
        borderRadius: '8px',
      }}
    >
      {ROUTES.map((route) => {
        const { path, title } = route;
        const isCurrentPage = currentPathname === path;
        return (
          <Link
            key={path}
            to={path}
            style={{
              color: isCurrentPage ? 'white' : 'gray',
              textDecoration: 'none',
            }}
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
};
