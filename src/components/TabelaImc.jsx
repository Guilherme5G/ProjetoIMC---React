const TabelaImc=(resultado)=> {
    if(resultado < 18){
        return(
            <tr>
            <th>Abaixo do peso</th>
            <th>Menor ou igual a 18</th>
            </tr>
        );
    }else if(resultado > 18 && resultado < 25){
        return(
            <tr>
            <th>Peso normal</th>
            <th>18 - 24.9</th>
            </tr>
        );
    }else if(resultado > 24 && resultado < 30){
        return(
            <tr>
            <th>Sobre Peso</th>
            <th>25 - 29.9</th>
            </tr>
        );
    }else if(resultado > 29 && resultado < 35){
        return(
            <tr>
            <th>Obesidade Grau-I</th>
            <th>30 - 34.9</th>
            </tr>
        );
    }else{
        return(
            <tr>
            <th>Obesidade Mórbida</th>
            <th>Maior ou igual a 40</th>
            </tr>
        );
    }
}

export default TabelaImc