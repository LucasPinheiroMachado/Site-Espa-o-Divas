import { NavLink, useLocation } from 'react-router-dom';

const Botao = (props) => {
  const location = useLocation();

  const isActive =
    (props.link === '/' && location.pathname === '/') ||
    (props.link === '/services' && location.pathname === '/services') ||
    (props.link === '/social' && location.pathname === '/social');

  return (
    <NavLink
      to={props.link || '#'}
      onClick={props.onClick}
      style={{
        color: isActive ? '#333' : 'white',
        textDecoration: 'none',
        display: 'inline-block',
        borderBottom: isActive ? '2px solid #333' : 'none',
        borderRadius: '0',
        cursor: 'pointer',
        marginLeft: '1vw',
        textShadow: isActive
          ? '1px 1px 2px rgba(0, 0, 0, 0.2)'
          : '1px 1px 2px rgba(0, 0, 0, 0.8)',
        ...props.style,
      }}
      className={isActive ? 'active' : ''}
    >
      {props.nome}
    </NavLink>
  );
};

export default Botao;
