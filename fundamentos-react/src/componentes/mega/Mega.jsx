import "./Mega.css";
import React, {Component} from "react";

class Mega extends Component {

    state = {
        numerosSorteados: 0
    };

    setSorteio = (qtdeNumeros) => {
        this.setState({
           numerosSorteados: 10,
        });
    }

    render() {
        return (
            <div className={"Mega"}>
                <h2>Mega</h2>
                <h3>Números da Sorte: {this.state.numerosSorteados}</h3>
                <div>
                    <label htmlFor="qtdeNumerosInput">Qtde Números: </label>
                    <input id="qtdeNumerosInput" type="number"
                            value={this.props.qtdeNumeros}
                            onChange={e => this.props.setSorteio(+e.target.value)}/>
                </div>
            </div>
        )
    }

}

export default Mega