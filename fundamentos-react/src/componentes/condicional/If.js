/*

    <If test={aluno.nota >= 7}>
        <span>...</span>
        <span>...</span>
        <span>...</span>
    </If>

 */

export default props => {
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]
    //Ne caso o return estará devolvendo um array
    //e iremos utilizar somente o 1o elemento

    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })
    //Pegar os demais elementos, diferente do elemento elseChild

    if(props.test) {
        return ifChildren //retornar todos os elementos diferentes de elseChild
    } else if(elseChild) {
            return elseChild
        } else {
            return false
        }
}

export const Else = props => props.children