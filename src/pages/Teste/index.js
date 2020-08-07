import React from 'react'

export default function Teste({ history }) {

    async function handleSubmit(event){
        event.preventDefault();
        //localStorage.setItem('user',_id);
        history.push('/')
    }

    return (
        <>
        <p>Teste</p>
        <button className='btn' type='submit' onClick={handleSubmit}>Main</button>
        </>
    )
};