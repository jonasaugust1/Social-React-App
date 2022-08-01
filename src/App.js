import { useState } from 'react'
import userIcon from './images/user.svg'
import paperPlaneIcon from './images/paper-plane.svg'
import clockIcon from './images/clock.svg'
import emptyFolderIcon from './images/empty-folder.svg'
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
                <input value={history} placeholder="Escreva uma nova história..." onChange={(e) => setHistory(e.target.value)}/> {/* onChange para capturar o que o usuário está preenchendo no input*/}
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
                {
                    posts && (
                        <>
                            <header>
                                <h1>Seu Feed</h1>
                                <h2>Acompanhe o que seus amigos estão pennsandoo em tempo real</h2>
                            </header>

                            <section className='feed'>
                                {posts.map(post => (
                                    <article key={post.id}>
                                        <p>{post.content}</p>
                                        <footer>
                                            <div className='user-details'>
                                                <img src={userIcon} alt="Usuário" />
                                                <strong>{post.userName}</strong>
                                            </div>

                                            <div className='time'>
                                                <img src={clockIcon} alt="Relógio" />
                                                <span>{post.publishedAt.toLocaleDateString('pt-br')}</span>
                                            </div>
                                        </footer>
                                    </article>
                                ))}
                            </section>
                        </>
                )}

                {
                    !posts && (
                    <div className='feed-status'>
                        <img src={emptyFolderIcon} alt="Pasta Vazia" />
                        <h1>Não encontramos nada</h1>
                        <h2>Parece que você e seus amigos não postaram nada. Comece a escrever uma história!</h2>
                    </div>
                )}

                
            </main>
        </div>
        )
}