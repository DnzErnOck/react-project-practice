import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from './Home';

export const Detail = () => {
    const { id } = useParams();
    const [getData, setGetData] = useState(null);

    useEffect(() => {
        if (id !== undefined) {
            const foundData = data.find(dt => dt.id === Number(id));
            setGetData(foundData);
        }
    }, [id]);

    return (
        <>
            <div>{getData?.name}</div>
        </>
    );
};
