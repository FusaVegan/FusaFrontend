import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from '../../General/Modal/Modal';
import axios from 'axios';
import { uriBack } from '../../../utils/const';
import './ManageShop.css';
import { useDispatch } from 'react-redux';
import { get_shops } from '../../../redux/actions'

const ManageShop = ({ id, localName, timeTable, zone, adress, managerName, phone, description, date, state}) => {

    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    const closeModal = () => setBoolean(!boolean);
 

    return (
        <section className='card-grid'>
            <NavLink to={`/Detalle-cliente/${id}`}>
                <article className='card-user'>
                    <div className='box-info-user'>
                        <p className='p'>Codigo: {zone}</p>
                        <p className='p'>Fecha de creacion: {date}</p>
                    </div>
                    <div className='box-update-type-admin'>
                        <p className='p'>Local: {localName}</p>
                        <p className='p'>Direccion: {adress}</p>
                        <p className='p'>Telefonos: {phone.map((e)=> <p>{e.number}</p>)}</p>
                        <p className='p'>Estado del cliente: {state}</p>
                    </div>

                    
                </article>
            </NavLink>
        </section>
    )
}

export default ManageShop