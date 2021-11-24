import './App.css';
import React from "react";

import Primeiro from "./componentes/basicos/Primeiro";
import ComParametro from "./componentes/basicos/ComParametro";
import Fragamento from "./componentes/basicos/Fragamento";
import Aleatorio from "./componentes/basicos/Aleatorio";
import Card from "./componentes/layout/Card";
import Familia from "./componentes/basicos/Familia";
import FamiliaMembro from "./componentes/basicos/FamiliaMembro";
import ListaAlunos from "./componentes/repeticao/ListaAlunos";
import TabelaProdutos from "./componentes/repeticao/TabelaProdutos";
import ParOuImpar from "./componentes/condicional/ParOuImpar";
import UsuarioInfo from "./componentes/condicional/UsuarioInfo";
import DiretaPai from "./componentes/comunicacao/DiretaPai";
import IndiretaPai from "./componentes/comunicacao/IndiretaPai";
import Input from "./componentes/formulario/Input";
import Contador from "./componentes/contador/Contador";
import Mega from "./componentes/mega/Mega";

export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo="#13 - Desafio"
                      color={"#424242"}>
                    <Mega qtdeNumeros={6}/>
                </Card>

                <Card titulo="#12 - Contador"
                      color={"#424242"}>
                    <Contador numeroInicial={30} passoInicial={3}/>
                </Card>

                <Card titulo="#11 - Componente Controlado (Input)"
                      color={"#E45F56"}>
                    <Input />
                </Card>

                <Card titulo="#10 - Comunicação Indireta"
                      color={"#8BAD39"}>
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo="#09 - Comunicação Direta"
                      color={"#59323C"}>
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo="#08 - Renderização Condicional"
                      color={"#982395"}>
                    <ParOuImpar numero={21}/>
                    <UsuarioInfo usuario={{ nome: 'Fernando'}} />
                    <UsuarioInfo usuario={{ }} />
                    <UsuarioInfo />
                    {/*<UsuarioInfo usuario={{ email: 'fer@nando.com'}} />*/}
                </Card>

                <Card titulo="#07 - Desafio Repetição"
                      color={"#3A9AD9"}>
                    <TabelaProdutos />
                </Card>

                <Card titulo="#06 - Repetição"
                      color={"#FF4C65"}>
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Componente com Filhos"
                      color={"#00C8F8"}>
                    <Familia sobrenome={"Bispo"}>
                        <FamiliaMembro nome={"Pedro"} />
                        <FamiliaMembro nome={"Ana"} />
                        <FamiliaMembro nome={"Gustavo"} />
                        {/*
                        <FamiliaMembro nome={"Ana"} />
                        <FamiliaMembro nome={"Gustavo"} />
                        */}
                    </Familia>
                </Card>

                <Card titulo="#04 - Exemplo de Card"
                      color={"#FA6900"}>
                    <Aleatorio min={1} max={60}/>
                </Card>

                <Card titulo={"#03 - Fragmento"}
                      color={"#E94C6F"}>
                    <Fragamento/>
                </Card>

                <Card titulo={"#02 - Com Parâmetro"}
                      color={"#E8871A"}>
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Pedro Silva"
                        nota={9.3}/>
                </Card>

                <Card titulo={"#01 - Primeiro Componente"}
                      color={"#588C73"}>
                    <Primeiro/>
                </Card>

            </div>

        </div>
    );
}