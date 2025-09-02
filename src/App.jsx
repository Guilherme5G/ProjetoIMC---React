import { useState } from "react"
import Header from "./components/Header"
import Resultado from "./components/Resultado"
import './css/style.css'
import Footer from "./components/Footer"

function App() {

  //HOOK - useState - Maniula o estado da variavel
  const [altura, setAltura] = useState();
  const [peso, setPeso] = useState();
  const [resultado, setResultado] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  //CRIANDO A FUNCAO CALCULAR IMC
  const calcularImc = (e) => {
    e.preventDefault(); //evita o recarregamento da pagina
    if (altura > 0 && peso > 0) {
      const imc = peso / (altura * altura)
      setResultado(imc.toFixed(2)); //arredonda para 2 casas decimais
      setMostrarResultado(true);
    } else {
      alert("Por favor digite valores válidos")
      setMostrarResultado(false);
    }
  }

  return (
    <div className="app">
      <Header />
      <div className="hero">
        <div className="apresentacao">
          <h1>Descubra se você está no peso ideal!</h1>
          <h2>A calculadora de IMC é uma ferramenta simples para descobrir se seu peso está adequado à sua altura.
            Basta inserir seus dados (peso, altura) e você descobrirá sua classificação.</h2>
        </div>
        <div className="cards">
          <form>
            <div className="box-height">
              <label htmlFor="altura"><span>(exemplo: 1.80)</span></label>
              <input
                type="number"
                id="altura"
                placeholder="Digite sua altura"
                value={altura}
                onChange={(e) => setAltura(parseFloat(e.target.value))}
              />
            </div>

            <div className="box-width">
              <label htmlFor="peso"><span>(exemplo: 80)</span></label>
              <input
                type="number"
                id="peso"
                placeholder="Digite seu peso"
                value={peso}
                onChange={(e) => setPeso(parseFloat(e.target.value))}
              />
            </div>
            <button onClick={calcularImc}>Calcular</button>
          </form>
          {mostrarResultado && (
          <Resultado resultado={resultado} />
        )}
        </div>
        
      </div>
      <Footer />
    </div>
  )
}
export default App
