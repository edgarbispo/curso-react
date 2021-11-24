import React from "react";

export default props => {

    const { min, max} = props;
    const aleatorio = parseInt( Math.random() * (max - min)) + min;

    return(

        <div>
            <h2>Valor Aletório</h2>
            <p><strong>Valor Mínimo: { min}</strong></p>
            <p><strong>Valor Máximo: { max}</strong></p>
            <p><strong>Valor Escolhido: { aleatorio  }</strong></p>
        </div>
    );
};
