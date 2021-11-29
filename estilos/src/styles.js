import styled from 'styled-components';

export const Container = styled.div `
    display:flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
    
`;

export const Head = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: brown;      
`;

export const Titulo = styled.a`
    font-size:25px;
    color: #00ff00
`;

export const BemVindo = styled.h1`
    font-size: ${props => `${props.tamanho}px`};
    color: ${props => `#${props.cor}`};
`;

/*
    NESTE CASO A TAG <a> PASSA A SER UMA PROPRIEDADE
    DO COMPONENTE HEAD

export const Head = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: brown;

  a{
      font-size: 35px;
      color: white;
  }
`;

 */

/*
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: brown;
}

.titulo {
  font-size: 35px;
  color: white;
}
 */