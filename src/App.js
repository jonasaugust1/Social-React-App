import { useState } from 'react'
import Feed from './components/Feed'
import userIcon from './images/user.svg'
import paperPlaneIcon from './images/paper-plane.svg'
import './styles/PostForm.css'
import './styles/Feed.css'
import './styles/App.css'


export default function App() {

    const [history, setHistory] = useState('')

    const [userName, setUserName] = useState('')

    const [posts, setPosts] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        
        setPosts([
            ...posts,
            {
                id: Math.random(),
                content: history,
                userName, //Como o nome da constante é o mesmo nome da chave podemos definir o userName assim
                publishedAt: new Date(),
            }
        ])

        setHistory('')
        setUserName('')
    }

    return (
        <div className='wrapper'>
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

            <main>
               <Feed posts={posts}/> {/*Para enviar as propriedades para o Feed component nó usamos as props */}
            </main>
        </div>
        )
}