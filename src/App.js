import './styles/App.css'
import userIcon from './images/user.svg'
import paperPlaneIcon from './images/paper-plane.svg'
import clockIcon from './images/clock.svg'
import emptyFolderIcon from './images/empty-folder.svg'
import './styles/PostForm.css'
import './styles/Feed.css'


export default function App() {

    const posts = [
        {
            id: Math.random(),
            content: 'Conteudo do Post',
            userName: 'Jonas Augusto',
            publishedAt: new Date(),
        },
        {
            id: Math.random(),
            content: 'Conteudo do Post',
            userName: 'Miguel Joab',
            publishedAt: new Date(),
        },
    ]

    // const posts = []

    return (
        <div className='wrapper'>
            <form className='post-form' onSubmit={() => alert('Formulário submetido')}>
                <input placeholder="Escreva uma nova história..."/>
                <div>
                    <img src={userIcon} alt="Ícone de usuário"/>
                    <input placeholder="Digite seu nome..." />
                    <button type="submit">
                        <img src={paperPlaneIcon} alt="Enviar"/>
                        Publicar
                    </button>
                </div>
            </form>

            <main>
                {
                    posts.length > 0 && (
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
                    posts.length === 0 && (
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