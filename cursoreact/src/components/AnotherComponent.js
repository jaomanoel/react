const AnotherComponent = () => {

    const handleClick = () => {
        console.log('Clickou');
    }

    return (
        <div>
            <h1>Segundo componente</h1>
            <button onClick={handleClick}>Evento de click</button>
            <hr></hr>
            <button onClick={() => console.log('clickou no elemento')}>Evento de elemento</button>
        </div>
    )
}

export default AnotherComponent