import {useState} from 'react'
import errors from '../config/errors';
import '../styles/PostForm.css'
import loader from '../images/loader-white.svg'
import userIcon from '../images/user.svg'
import paperPlaneIcon from '../images/paper-plane.svg'

export default function PostForm(props) {

    const [history, setHistory] = useState('')
    const [userName, setUserName] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    // Essa função pega o onsubmit do component pai e envia o objeto enviando o state de history e userName
    async function handleSubmit(e){
        
        try {
            e.preventDefault()

            setIsLoading(true)
            setErrorMessage(null)

            const response = await fetch('https://jonasaugusto-react-app.surge.sh/posts', {
                method: 'POST',
                body: JSON.stringify({
                    content: history,
                    userName,
                }),
                headers: {
                    'Content-Type': 'application/json'
                } 
            })

            if(!response.ok) {
                const body = await response.json()
                
                setErrorMessage(
                    errors[body.code] || 'Ocorreu um erro ao publicar uma mensagem!'
                    )
                return
                }

            props.onSubmit({history, userName})

            setHistory('')
            setUserName('')
            
            
        } catch {
            setErrorMessage('Ocorreu um erro ao publicar uma mensagem!')
        } finally {
            setIsLoading(false)
        }
    }
    
    return (
        <form className='post-form' onSubmit={handleSubmit}>

            {errorMessage && (
                <div className="error-container">
                    <strong>{errorMessage}</strong>
                </div>
            )}

            <input 
            value={history} 
            placeholder="Escreva uma nova história..." 
            onChange={(e) => setHistory(e.target.value)}
            /> 

            <div>
                <img src={userIcon} alt="Ícone de usuário"/>
                <input
                 value={userName}
                 placeholder="Digite seu nome..." 
                 onChange={(e) => setUserName(e.target.value)}/> {/*Para controlar o valor que está no compo do input através do React, o valor que está lá dentro é o nosso estado usamos o value={state} */}

                <button type="submit" disabled={isLoading}>
                    {!isLoading && <img src={paperPlaneIcon} alt="Paper plane" />}
                    {isLoading && <img src={loader} alt='Loading' className='spin'/>}
                    Publicar
                </button>
            </div>
        </form>
    )
}