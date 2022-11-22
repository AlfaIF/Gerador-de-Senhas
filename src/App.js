import './App.css';

function App() {
  return <div className="App">
    <div className="container">
      <div className="gerador">
        <h2 className="cabeçalho">
          Gerador de Senhas
        </h2>
        <div className="gerador-de-senhas">
          <h3>Senha</h3>
          <button className="btn_copia">
            <i className='far fa-clipboard'></i>
          </button>
        </div>
        <div className="form-group">
          <label htmlFor="tamanho-senha">Tamanho da senha</label>
          <input type="number" id="tamanho-senha" name="tamanho-senha" max={32} min={10} />
        </div>
        <div className="form-group">
          <label htmlFor="letra-maiuscula">Letras maiúsculas</label>
          <input type="checkbox" id="letra-maiuscula" name="letra-maiuscula"/>
        </div>
        <div className="form-group">
          <label htmlFor="letra-minúscula">Letras minúsculas</label>
          <input type="checkbox" id="letra-minúscula" name="letra-minúscula"/>
        </div>
        <div className="form-group">
          <label htmlFor="números">Números</label>
          <input type="checkbox" id="números" name="números"/>
        </div>
        <div className="form-group">
          <label htmlFor="símbolos">Símbolos</label>
          <input type="checkbox" id="símbolos" name="símbolos"/>
        </div>
        <button className="btn_gerador">Gerar senha</button>
      </div>
      <div />
    </div>
  </div>

}

export default App;
