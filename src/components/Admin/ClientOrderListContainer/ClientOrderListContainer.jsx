import React, { useEffect } from 'react';
import ClientOrderList from '../ClientOrderList/ClientOrderList';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './ClientOrderListContainer.css';
import { useFetchAllClientOrders } from '../../../hooks/useFetchAllClientOrders';

const ClientOrderListContainer = ()=>{
    const {id} = useParams();
    const orders = useSelector((state) => state.clientOrders);
    const clients = useSelector((state)=> state.shops);
    const [client, setClient] = useState(undefined);

    orders?.length == 0 && useFetchAllClientOrders(); 

    useEffect(()=>{
        clients && setClient(clients.find((e) => e.id === id));
    },[id, clients]);
    
    return (
        <section className='section-order-admin'>
            <h2>Lista de ordenes del cliente: {client?.localName}</h2>
            <ClientOrderList id={id} />
        </section>
    );
}

export default ClientOrderListContainer;