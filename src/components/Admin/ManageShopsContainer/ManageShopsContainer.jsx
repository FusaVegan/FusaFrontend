import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './ManageShopContainer.css';
import { useFetchShops } from '../../../hooks/useFetchShops';
import ManageShopList from '../ManageShopList/ManageShopList';
import { useSearchShop } from '../../../hooks/useSearchShop';

const ManageShopsContainer = () => {

    useFetchShops();

    const [input, setInput] = useState("");

    const shops = useSearchShop(input);

    const cleanInput = () => setInput("");

    return (
        <section className='section-manage-user'>
            <section className='section-header'>
                <h2>Lista de clientes</h2>
                <NavLink to={`/Crear-cliente`}><h2>Agregar cliente</h2></NavLink>
            </section>
            <div className='box-search-user'>
                <label htmlFor="user" className='label-form'>Buscar cliente por codigo / zona:</label>
                <div className='box-input-search-user'>
                    <input
                        type="text"
                        className='input-search'
                        value={input}
                        name='user'
                        id='user'
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={cleanInput}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </div>
            </div>

            <ManageShopList shops={shops} />
        </section>
    );
};

export default ManageShopsContainer;