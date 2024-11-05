import React from 'react';
import { Link } from 'react-router-dom';

const NavBarAdmin = () => {
  return (
    <>
      <li>
        <Link to={'/Analisis'} className='linkNav'>Analisis</Link>
      </li>
      <li>
        <Link to={'/Administrar-usuarios'} className='linkNav'>Administrar usuarios</Link>
      </li>
      <li>
        <Link to={'/Administrar-clientes'} className='linkNav'>Administrar locales</Link>
      </li>
      <li>
        <Link to={'/Ordenes-admin'} className='linkNav'>Ordenes</Link>
      </li>
      <li>
        <Link to={'/Crear-producto'} className='linkNav'>Crear producto</Link>
      </li>
    </>
  );
};

export default NavBarAdmin;