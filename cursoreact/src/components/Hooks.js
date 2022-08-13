import { useState, useEffect } from 'react'

const Hooks = () => {
    let idade = 15

    const [novaIdade, setNovaIdade] = useState(15)

    function ChargeAge () {
        idade += 1
    }

    const ChargeNewAge = () => {
        setNovaIdade(novaIdade + 1)
    }

    useEffect(() => {
        console.log('testing')
    })

    return(
        <div>
            <p>Idade: {idade}</p>
            <button onClick={ChargeAge}>Aumentar um ano</button>
            <p>Idade: {novaIdade}</p>
            <button onClick={ChargeNewAge}>Mudar idade</button>
        </div>
    )
}

export default Hooks;