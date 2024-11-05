import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clean_detail, get_detail } from "../redux/actions";

export const useGetClientOrder = (OrderId) => {

    const dispatch = useDispatch();

    const orders = useSelector((state) => state.clientOrders);

    useEffect(() => {
        const order = orders.find((ord) => ord.id === OrderId);

        dispatch(get_detail(order));

        return () => clean_detail();
    }, []);
};