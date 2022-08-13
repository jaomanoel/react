const RenderCond = ({ x, y}) => {
    return(
        <div>
            {x > 5 && <p>X e maior que 5</p>}
            {x > 5 ? <p>X e um numero auto</p> : <p>X e um numero baixo</p>}
            <p>O valor de y e: {y}</p>
        </div>
    )
}

export default RenderCond;