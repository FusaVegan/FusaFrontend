import { useSelector } from "react-redux";
import { useFetchAllClientOrders } from "../../../hooks/useFetchAllClientOrders";
import { useEffect, useState } from "react";
import "./GeneralStadistics.css";

const GeneralStadistics = () => {
  const orders = useSelector((state) => state.clientOrders);

  //const [input, setInput] = useState(0);

  orders?.length == 0 && useFetchAllClientOrders();

  const sum = orders.reduce((sum, order) => sum + parseFloat(order.total), 0);
  const digitalMoney = orders.reduce(
    (digAmount, order) =>
      digAmount +
      order.payments.reduce(
        (acc, payment) =>
          acc + (payment.type.toLowerCase().includes(`digital`) ? parseFloat(payment.amount) : 0),
        0
      ),
    0
  );
  const fisicalMoney = orders.reduce(
    (digAmount, order) =>
      digAmount +
      order.payments.reduce(
        (acc, payment) =>
          acc + (payment.type.toLowerCase().includes(`fisico`) ? parseFloat(payment.amount) : 0),
        0
      ),
    0
  );
  const totalUnitsSold = orders.reduce(
    (unitsSold, order) =>
      unitsSold +
      order.products.reduce(
        (unitsPerOrder, product) => unitsPerOrder + product.count,
        0
      ),
    0
  );

  const totalCollected = digitalMoney + fisicalMoney;

  const percentageDigital = (
    (digitalMoney / totalCollected) *
    100
  ).toLocaleString(`es-ES`, {
    minimunFractionDigits: 2,
    maximunFractionDigits: 2,
  });
  const percentageFisical = (
    (fisicalMoney / totalCollected) *
    100
  ).toLocaleString(`es-ES`, {
    minimunFractionDigits: 2,
    maximunFractionDigits: 2,
  });
  const unCollectedMoney = (sum - digitalMoney - fisicalMoney).toLocaleString(
    `es-ES`,
    { minimunFractionDigits: 2, maximunFractionDigits: 2 }
  );
  const promAmount = (sum / orders.length).toLocaleString(`es-ES`, {
    minimunFractionDigits: 2,
    maximunFractionDigits: 2,
  });
  const formattedSum = sum.toLocaleString(`es-ES`, {
    minimunFractionDigits: 2,
    maximunFractionDigits: 2,
  });
  const formattedPromAmount = promAmount.toLocaleString(`es-ES`, {
    minimunFractionDigits: 2,
    maximunFractionDigits: 2,
  });

  /*
    const totalUnitsSold = orders.reduce((total, order) => {
        const orderTotal = order.products.reduce((sum, product) => sum + product.quantity, 0);
        return total + orderTotal;
    }, 0);

    const unitsSold = orders.forEach((quantity, order) => quantity + order?.products?.reduce((sum, element) =>
        element?.rec((product)=> product.quantity)
    ));
    */

  console.log(orders);

  return (
    <section className="section-stadistics">
      <div className="numbers">
        <p>Cant. de ordenes generadas: {orders?.length}</p>
        <p>Total vendido historico: ${formattedSum}</p>
        <p>Promedio de ganancia por orden: ${formattedPromAmount}</p>
        <p>Porcentaje de pagos recibidos en fisico: %{percentageFisical}</p>
        <p>Porcentaje de pagos recibidos en digital: %{percentageDigital}</p>
        <p>Cantidad de dinero sin cobrar: ${unCollectedMoney}</p>
        <p>Unidades vendidas: {totalUnitsSold}</p>
      </div>
    </section>
  );
};

export default GeneralStadistics;
