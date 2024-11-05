import React from 'react';
import { useGetClientOrder } from '../../../hooks/useGetClientOrder';
import { useParams } from 'react-router-dom';
//import OrderDetailAdmin from '../OrderDetailAdmin/OrderDetailAdmin';
import ClientOrderDetail from '../ClientOrderDetail/ClientOrderDetail';
import { useSelector } from 'react-redux';

const ClientOrderDetailContainer = () => {
    const { id } = useParams();
    useGetClientOrder(id);

    const detail = useSelector((state) => state.detail);



    return (
        <section className='section-order-admin'>

            {detail && <ClientOrderDetail {...detail} />}

        </section>
    );
};

export default ClientOrderDetailContainer;