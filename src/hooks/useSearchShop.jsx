import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


export const useSearchShop = (zone) => {
    const [shop, setShop] = useState([]);

    const clients = useSelector((state) => state.shops);

    useEffect(() => {
        const client = clients.filter((shop) => {
            const search = zone.toLowerCase();
            const zonesFound = shop.zone.toLowerCase().includes(search);
            const response = search.length > 1 ? zonesFound + shop.localName.toLowerCase().includes(search) :  zonesFound;
            return response;
        });
        client.length > 0 ? setShop(client) : setShop(clients);
    }, [zone, clients]);

    return shop;
};