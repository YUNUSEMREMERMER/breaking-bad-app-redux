import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import { fetchAllQuotes, quotesSelector, statusSelector, errorSelector } from "../../redux/quotesSlice"
import Item from "./Item"
import "./style.css"

function Quotes() {
    const dispatch = useDispatch();
    const data = useSelector(quotesSelector);
    const status = useSelector(statusSelector);
    const error = useSelector(errorSelector);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchAllQuotes());
        }
        // eslint-disable-next-line
    }, [])


    if (error) {
        return <Error message={error} />
    }

    return (
        <div>
            <h1>Quotes</h1>
            {status === "loading" && <Loading />}
            {status === "succeeded" && data.map((item) => <Item key={item.quote_id} item={item} />)}
        </div>
    )
}

export default Quotes