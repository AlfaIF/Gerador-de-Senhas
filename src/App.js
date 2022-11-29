import { useState } from 'react';
import './App.css';
import {numeros, letras_maiusculas, letras_minusculas, caracteres_especiais} from './Caracteres'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {COPIA_SUCESSO} from './mensagem'
function App() {
  const [senha, criarSenha] = useState('')
  const [tamanhoSenha, criarTamanhoSenha] = useState(8)
  const [incluirUppercase, criarComUppercase] = useState(false)
  const [incluirLowercase, criarComLowercase] = useState(false)
  const [incluirNumeros, criarComNumeros] = useState(false)
  const [incluirSimbolos, criarComSimbolos] = useState(false)

  const gerarSenha = (e) => {
    if (!incluirLowercase && !incluirUppercase && !incluirNumeros && !incluirSimbolos ) {
      notificacao('Você precisa incluir alguma das opções',true)
    }
    let listaCaracteres = ''

    if(incluirLowercase){
      listaCaracteres = listaCaracteres + letras_minusculas
    }

    if(incluirUppercase){
      listaCaracteres = listaCaracteres + letras_maiusculas
    }

    if(incluirNumeros){
      listaCaracteres = listaCaracteres + numeros
    }

    if(incluirSimbolos) {
      listaCaracteres = listaCaracteres + caracteres_especiais
    }

    criarSenha(criarSenhaPersonalizada(listaCaracteres))

  }

  const criarSenhaPersonalizada = (listaCaracteres) => {
      let senhaPersonalizada = ''
      const tamanhoListaCaracteres = listaCaracteres.length


      for(let i=0; i < tamanhoSenha; i++){
        const indexCaracter = Math.round(Math.random() * tamanhoListaCaracteres)
        senhaPersonalizada = senhaPersonalizada + listaCaracteres.charAt(indexCaracter)
      }
      return senhaPersonalizada
  }

  const copiar = () => {
    const novaTextarea = document.createElement('textarea')
    novaTextarea.innerText = senha
    document.body.appendChild(novaTextarea)
    novaTextarea.select()
    document.execCommand('copy')
    novaTextarea.remove()
  }

  const notificacao = (mensagem, erro = false) => {
    if (erro) {
      toast.error(mensagem, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
    }else{
    toast.success(mensagem, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    }
  }

  const HadlercopiarSenha = (e) => {
    if (senha=== '') {
      notificacao('Não é possível copiar',true)
      
    }else{
      copiar()
      notificacao(COPIA_SUCESSO)
    }
  }

  return <div className="App">
    <div className="container">
      <div className="gerador">
        <h2 className="cabeçalho">
          Gerador de Senhas
        </h2>

        <div className="gerador-de-senhas">
          <h3>{senha}</h3>
          <button onClick={HadlercopiarSenha} className="btn_copia">
            <i className='far fa-clipboard'></i>
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="tamanho-senha">Tamanho da senha</label>
          <input 
            defaultValue={tamanhoSenha}
            onChange={(e) => { 
              if (e.target.value >32 || e.target.value < 8 ){
                criarTamanhoSenha(8) 
              }else{
                criarTamanhoSenha(e.target.value) 
              }

            }}
            type="number"
            id="tamanho-senha"
            name="tamanho-senha"
            value={tamanhoSenha}
            max={32} min={8}/>
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
        <button onClick={gerarSenha} className="btn_gerador">Gerar senha</button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <div />
    </div>
  </div>

}

export default App;