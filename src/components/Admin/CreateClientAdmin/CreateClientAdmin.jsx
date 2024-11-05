import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFetchTypes } from "../../../hooks/useFetchTypes";
import { uriBack } from "../../../utils/const";
import { put_error } from "../../../redux/actions";
import { Shop } from "../../../utils/classShop";
import Input from "../../General/Input/Input";
import { useFetchShops } from "../../../hooks/useFetchShops";
import './CreateClientAdmin.css';

const CreateProductAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputBase = {
    timeTable: "",
    description: "",
    localName: "",
    state: "",
    managerName: "",
    zone: "",
    adress: "",
    phoneNumber: "",
    phone: [],
    date: undefined,
  };

  const [input, setInput] = useState(inputBase);
  const [error, setError] = useState(inputBase);

  // Validate
  const validate = (input, error) => {
    const errors = { ...error };

    if (
      input.localName.length > 0 &&
      !/^[\w\d\sáéíóúÁÉÍÓÚüÜñÑ.,:;¡!¿?(){}[\]\-\/&%$@#"'+=*<>|_]{4,50}$/.test(
        input.localName
      )
    ) {
      errors.localName = `Necesita un nombre de 4 a 50 caracteres. Actual(${input.localName.length})`;
    } else errors.localName = "";

    if (
      input.zone.length > 0 &&
      !/^[\w\d\sáéíóúÁÉÍÓÚüÜñÑ.,:;¡!¿?(){}[\]\-\/&%$@#"'+=*<>|_]{2,10}$/.test(
        input.zone
      )
    ) {
      errors.zone = `Necesita un codigo de zona de 2 a 10 caracteres. Actual(${input.zone.length})`;
    } else errors.zone = "";

    if (
      input.managerName.length > 0 &&
      !/^[\w\d\sáéíóúÁÉÍÓÚüÜñÑ.,:;¡!¿?(){}[\]\-\/&%$@#"'+=*<>|_]{4,40}$/.test(
        input.managerName
      )
    ) {
      errors.managerName = `Necesita un nombre de 4 a 40 caracteres. Actual(${input.managerName.length})`;
    } else errors.managerName = "";


    if (
      input.timeTable.length > 0 &&
      !/^[\w\d\sáéíóúÁÉÍÓÚüÜñÑ.,:;¡!¿?(){}[\]\-\/&%$@#"'+=*<>|_]{4,40}$/.test(
        input.timeTable
      )
    ) {
      errors.timeTable = `Necesita un horario de 4 a 40 caracteres. Actual(${input.timeTable.length})`;
    } else errors.timeTable = "";


    if (
      input.phoneNumber.length > 0 &&
      !/^(?=[\d\s\+-]{7,30}$)[\d\s\+-]+$/.test(
        input.phoneNumber
      )
    ) {
      errors.phoneNumber = `Necesita un numero de telefono de 7 a 30 caracteres. Actual(${input.phoneNumber.length})`;
    } else errors.phoneNumber = "";

    
    if (
      input.description.length > 0 &&
      !/^[\w\d\sáéíóúÁÉÍÓÚüÜñÑ.,:;¡!¿?(){}[\]\-\/&%$@#"'+=*<>|_]{4,80}$/.test(
        input.description
      )
    ) {
      errors.description = `Necesita una descripcion de 4 a 80 caracteres. Actual(${input.description.length})`;
    } else errors.description = "";

    if (!input.state) errors.state = "*Este campo es obligatorio.";
    else if (
      !/^[\w\d\sáéíóúÁÉÍÓÚüÜñÑ.,:;¡!¿?(){}[\]\-\/&%$@#"'+=*<>|_]{4,20}$/.test(
        input.state
      )
    ) {
      errors.state = `Necesita un estado de 4 a 20 caracteres. Actual(${input.state.length})`;
    } else errors.state = "";

    if (!input.adress) errors.adress = "*Este campo es obligatorio.";
    else if (
      !/^[\w\d\sáéíóúÁÉÍÓÚüÜñÑ.,:;¡!¿?(){}[\]\-\/&%$@#"'+=*<>|_]{6,80}$/.test(
        input.adress
      )
    ) {
      errors.adress = `Necesita una direccion de 6 a 80 caracteres. Actual(${input.adress.length})`;
    } else errors.adress = "";
    /*
        if (input.phone.lenght > 0 && !/^[\w\d\sáéíóúÁÉÍÓÚüÜñÑ.,:;¡!¿?(){}[\]\-\/&%$@#"'+=*<>|_]{6,20}$/.test(input.phone)) {
            errors.adress = `Necesita una descripcion de 6 a 20 caracteres. Actual(${input.adress.length})`;
        } else errors.adress = '';
         
        if (!input.phone)
         */

    return errors;
  };

  // Fin del validate

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(validate({ ...input, [e.target.name]: e.target.value }, error));
  };

  ////////////////////////////////

  //handleChangePhone
  const handleAddPhone = (e) => {
    e.preventDefault();
    const phoneNumber = input.phoneNumber;
    const numberExists = input.phone.some((phone) => phone.number === phoneNumber);

    if (!numberExists) {
      input.phone.lenght == 0
        ? setInput({
            ...input,
            phone: [{ number: phoneNumber }],
            phoneNumber: "",
          })
        : setInput({
            ...input,
            phone: [...input.phone, { number: phoneNumber }],
            phoneNumber: "",
          });
      setError(validate(input, error));
    }else{
      setInput({...input, phoneNumber: ""});
      alert(`El telefono ${phoneNumber} ya esta agregado.`);
    }
  };
  const hanldeClear = () => {
    setInput({
      ...input,
      phone: [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const shop = new Shop(
        input.timeTable,
        input.localName,
        input.zone,
        input.adress,
        input.managerName,
        input.state,
        input.phone,
        input.description,
        input.date
      );
      await axios
        .post(`${uriBack}/client/createClient`, shop)
        .then((res) => navigate("/Administrar-clientes"));
    } catch (error) {
      dispatch(put_error(error));
    }
  };

  return (
    <section className="section-create-product">
      <h2>Agregar cliente</h2>
      <form className="form" onSubmit={handleSubmit}>
        {/*
                <Input
                    button={false}
                    errorInput={error.date}
                    handleInput={handleChange}
                    id={'date'}
                    label={'Fecha:'}
                    name={'date'}
                    style={''}
                    type={'date'}
                    value={input.date}
                    key={'date'}
                />
                */}
        <input
          type="date"
          id="date"
          name="date"
          min="2024-01-01"
          onChange={handleChange}
          className="input-date"
        />
        <Input
          button={false}
          errorInput={error.localName}
          handleInput={handleChange}
          id={"localName"}
          label={"Nombre del cliente:"}
          name={"localName"}
          style={"input-localName"}
          type={"text"}
          value={input.localName}
          key={"localName"}
        />

        <Input
          button={false}
          errorInput={error.description}
          handleInput={handleChange}
          id={"description"}
          label={"Descripcion:"}
          name={"description"}
          style={"input-description"}
          type={"text"}
          value={input.description}
        />
        <Input
          button={false}
          errorInput={error.state}
          handleInput={handleChange}
          id={"state"}
          label={"Estado del cliente:"}
          name={"state"}
          style={"input-state"}
          type={"text"}
          value={input.state}
        />
        <Input
          button={false}
          errorInput={error.managerName}
          handleInput={handleChange}
          id={"managerName"}
          label={"Vendedor a cargo:"}
          name={"managerName"}
          style={"input-managerName"}
          type={"text"}
          value={input.managerName}
        />
        <Input
          button={false}
          errorInput={error.zone}
          handleInput={handleChange}
          id={"zone"}
          label={"Zona:"}
          name={"zone"}
          style={"input-zone"}
          type={"text"}
          value={input.zone}
        />

        <Input
          button={false}
          errorInput={error.adress}
          handleInput={handleChange}
          id={"adress"}
          label={"Direccion:"}
          name={"adress"}
          style={"input-adress"}
          type={"text"}
          value={input.adress}
          key={"adress"}
        />

        <Input
          button={false}
          errorInput={error.timeTable}
          handleInput={handleChange}
          id={"timeTable"}
          label={"Horarios:"}
          name={"timeTable"}
          style={"input-timeTable"}
          type={"text"}
          value={input.timeTable}
          key={"timeTable"}
        />
        <Input
          button={false}
          errorInput={error.phoneNumber}
          handleInput={handleChange}
          id={"phoneNumber"}
          label={"Telefono:"}
          name={"phoneNumber"}
          style={"input-phoneNumber"}
          type={"text"}
          value={input.phoneNumber}
          key={"phoneNumber"}
        />

        {/*
          <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          onChange={handleChange}
          ></input>
          <span className="span--form">{error.phone}</span>
          */}
        <section className="phone-container">
          {input.phoneNumber.length > 0 && (
            <button
              type="button"
              className="button-form"
              onClick={handleAddPhone}
            >
              Agregar telefono
            </button>
          )}
          {input.phone.length > 0 && (
            <button type="button" className="button-form" onClick={hanldeClear}>
              Borrar todos
            </button>
          )}
        </section>
        <section className="phones">
          {
            //////////////////////////////////////////////////////////
          }
          {input.phone.length > 0 &&
            input.phone.map((e) => (
              // <Box text={e} callback={setInput} input={input} />
              <h5 key={e.number}>{e.number}</h5>
            ))}
        </section>

        {error.state || error.adress ? (
          <h3>Se encontraron errores.</h3>
        ) : (
          <button type="submit" className="button-form">
            Crear cliente
          </button>
        )}
      </form>
    </section>
  );
};

export default CreateProductAdmin;
