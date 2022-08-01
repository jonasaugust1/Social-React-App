import {useState} from 'react'
import '../styles/PostForm.css'
import userIcon from '../images/user.svg'
import paperPlaneIcon from '../images/paper-plane.svg'

export default function PostForm(props) {

    const [history, setHistory] = useState('')

    const [userName, setUserName] = useState('')

    // Essa função pega o onsubmit do component pai e envia o objeto enviando o state de history e userName
    function handleSubmit(e){
        e.preventDefault()

        props.onSubmit({history, userName})

        setHistory('')
        setUserName('')
    }
    
    return (
        <form className='post-form' onSubmit={handleSubmit}>
        <input value={history} placeholder="Escreva uma nova história..." onChange={(e) => setHistory(e.target.value)}/> 
        <div>
            <img src={userIcon} alt="Ícone de usuário"/>
            <input value={userName} placeholder="Digite seu nome..." onChange={(e) => setUserName(e.target.value)}/> {/*Para controlar o valor que está no compo do input através do React, o valor que está lá dentro é o nosso estado usamos o value={state} */}
            <button type="submit">
                <img src={paperPlaneIcon} alt="Enviar"/>
                Publicar
            </button>
        </div>
    </form>
    )
}