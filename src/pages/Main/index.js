import React from 'react'

export default function Main({ history }) {

    async function handleSubmit(event){
        event.preventDefault();
        //localStorage.setItem('user',_id);
        history.push('/teste')
    }

    return (
        <>
        <p>Main</p>
        <button className='btn' type='submit' onClick={handleSubmit}>Teste</button>
        </>
    )
};