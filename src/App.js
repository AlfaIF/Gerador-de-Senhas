import './App.css';

function App() {
  return (
    <div className="App">
     <div className = "container">
       <div className = "generator">
         <h2 className = "generator_header">
           Gerador de senhas
         </h2>
        <div className = "generator_password">
          <h3>Senha</h3>
          <button className = "copy_btn">
            <i className = 'far fa-clipboard'>

            </i>
          </button>
        </div>
        <div className = "form-group">
          <label htmlFor = "password-strangth">Password strenght</label>
          <imput type = "Número" id = "password-strength" name = "password-strength" max = "20" min = "10"/>
        </div>
        <div className = "form-group">
        <label htmlFor = 'uppercase-latters'>Include Uppercase Letters</label>
          <imput type = 'checkbox' id = 'uppercase-latters' name = 'uppercase-latters' />
          </div>
          <div className = "form-group">
        <label htmlFor = 'lowercase-latters'>Include Lowercase Letters</label>
          <imput type = 'checkbox' id = 'lowercase-latters' name = 'lowercase-latters'/>
          </div>
          <div className = "form-group">
        <label htmlFor = 'include-numbers'>Include numbers</label>
          <imput type = 'checkbox' id = 'include-numbers' name = 'include-numbers'/>
          </div>
          <div className = "form-group">
        <label htmlFor = 'include-symbols'>Include symbols</label>
          <imput type = 'checkbox' id = 'include-symbols' name = 'include-symbols'/>
          </div>
          <button className = "generator_btn">
            Generate button
          </button>
       </div>
     </div>
    </div>
  );
}

export default App;
