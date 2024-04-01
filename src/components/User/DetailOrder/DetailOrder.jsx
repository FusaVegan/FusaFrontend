import React from 'react';
import ItemOrder from '../ItemOrder/ItemOrder';
import { useGetDateOrder } from '../../../hooks/useGetDateOrder';
import './DetailOrder.css';

const DetailOrder = ({ adress, createdAt, id, state, total, products }) => {

    const style = state === 'Creado' ? 'red' : 'green';

    const date = useGetDateOrder(createdAt);

    return (
        <article className='card-detail-order'>
            <div className='box-date-id'>

                <p className='p'>{date}</p>

                <div className='box-id-order'>
                    <p className='p'>ID de la orden:</p>
                    <p className='p-id-order'>{id}</p>
                </div>

            </div>

            <div className='box-products-order'>
                <span className='span-products'>Productos pedidos</span>
                <div className='box-products-order-list'>
                    {
                        products.map((prod) => <ItemOrder key={prod.id} {...prod} />)
                    }
                </div>
            </div>

            <div className='box-info-order'>
                <p className='p'>Estado del pedido: <span className={style}>{state}</span></p>
                <p className='p'>Dirección del envio: {adress}</p>
                <p className='p'>Total del pedido: <span className='price'>${total.slice(0, -3)}</span></p>
            </div>
        </article>
    );
};

export default DetailOrder;