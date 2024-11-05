import React from 'react';
import { Link } from 'react-router-dom';
import './ClientOrderItem.css';

const ClientOrderItem = ({ id, date, total }) => {

    return (
        <article className='card-order'>
            <div className='box-first'>
                <p className='date'>Fecha: {date}</p>
                <Link className='link-detail' to={`/Detalle-pedido-cliente/${id}`}>Detalle del pedido</Link>
            </div>
            <div className='box-id-order-admin'>
                <p className='p'>ID de la orden: {id}</p>
                <p className='p'>Total: ${total}</p>
            </div>
            <div className='box-state'>
                <p className='p'>Estado del pedido:</p>
                <p className={`p`}>Pendiente</p>
            </div>
        </article>
    );
};

export default ClientOrderItem;