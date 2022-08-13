const List = () => {
    const lista = [{
        id: 1,
        name: 'John',
    },
    {
        id: 2,
        name: 'Peter',
    },
    {
        id: 3,
        name: 'Adam',
    }]
   
    return(
        <di>
            {lista.map((item) => (
                <p key={item.id}>{item.id} - {item.name}</p>
            ))}
        </di>
    )
}

export default List