import React, { useEffect } from 'react'
import { Redirect, useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import Pool from "./Pool";
const PoolContainer = () => {
    const { id } = useParams(); 
    const {
        get: {state, fetch},
    } = useApi("/pools/" + id)

    useEffect(()=> {
        fetch();
    }, [id, fetch]);

    if(state.loading){
        return null;
    }
    if (state.error){
        return <Redirect to="/error/500"/>;
    }

    return <Pool {...state.value.data}/>;
};

export default PoolContainer
