import { useState } from 'react';
import './App.css';

function App() {
  const [senha, criarSenha] = useState('')
  const [tamanhoSenha, criarTamanhoSenha] = useState(20)
  const [incluirUppercase, criarComUppercase] = useState(false)
  const [incluirLowercase, criarComLowercase] = useState(false)
  const [incluirNumeros, criarComNumeros] = useState(false)
  const [incluirSimbolos, criarComSimbolos] = useState(false)

  return <div className="App">
    <div className="container">
      <div className="gerador">
        <h2 className="cabeçalho">
          Gerador de Senhas
        </h2>

        <div className="gerador-de-senhas">
          <h3>senha</h3>
          <button className="btn_copia">
            <i className='far fa-clipboard'></i>
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="tamanho-senha">Tamanho da senha</label>
          <input 
            defaultValue={criarTamanhoSenha}
            onChange={(e) => criarTamanhoSenha(e.target.value)}
            type="number"
            id="tamanho-senha"
            name="tamanho-senha"
            max={32} min={10} />
        </div>

        <div className="form-group">
          <label htmlFor="letra-maiuscula">Letras maiúsculas</label>
          <input 
            checked={incluirUppercase}
            onChange={(e) => criarComUppercase(e.target.checked)}
            type="checkbox"
            id="letra-maiuscula"
            name="letra-maiuscula"/>
        </div>

        <div className="form-group">
          <label htmlFor="letra-minúscula">Letras minúsculas</label>
          <input 
            checked={incluirLowercase}
            onChange={(e) => criarComLowercase(e.target.checked)}
            type="checkbox"
            id="letra-minúscula"
            name="letra-minúscula"/>
        </div>

        <div className="form-group">
          <label htmlFor="números">Números</label>
          <input 
            checked={incluirNumeros}
            onChange={(e) => criarComNumeros(e.target.checked)}
            type="checkbox" 
            id="números" 
            name="números"/>
        </div>

        <div className="form-group">
          <label htmlFor="símbolos">Símbolos</label>
          <input
            checked={incluirSimbolos}
            onChange={(e) => criarComSimbolos(e.target.checked)} 
            type="checkbox" 
            id="símbolos" 
            name="símbolos"/>
        </div>

        <button className="btn_gerador">Gerar senha</button>
      </div>

      <div />
    </div>
  </div>

}

export default App;