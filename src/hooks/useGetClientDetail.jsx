import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_detail, clean_detail } from "../redux/actions";

export const useGetClientDetail = (id, clients) => {

    const dispatch = useDispatch();

    useEffect(() => {
        const client = clients.find((c) => c.id === id);

        dispatch(get_detail(client));

        document.title = `Fusa Food | ${client.name}`;

        return () => {
            dispatch(clean_detail());
            document.title = 'Fusa Food';
        };
    }, []);
};