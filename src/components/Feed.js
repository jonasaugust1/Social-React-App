import userIcon from '../images/user.svg'
import clockIcon from '../images/clock.svg'
import emptyFolderIcon from '../images/empty-folder.svg'
import loader from '../images/loader-primary.svg'
import cloudError from '../images/cloud-error.svg'

import FeedStatus from './FeedStatus';
import '../styles/Feed.css'

// Para receber as props a passamos no parâmetro da função
export default function Feed(props) { 

    if(props.isLoading) {
        return <img src={loader} alt='Loading' className='spin'/>
      }
    
      if(props.hasError) {
        return <FeedStatus 
                image={cloudError}
                title='Algo deu errado'
                subTitle='Não foi possível carregar o seu feed. Tente novamente mais tarde.'
                />  
      }
    
      if (props.posts.length === 0) {
        return <FeedStatus 
                image={emptyFolderIcon}
                title='Não encontramos nada'
                subtitle='Parece que você e seus amigos não postaram nada. Comece a escrever uma nova história!'
                />
      }

    return (
        <>
            <header>
                <h1>{props.title}</h1>
                <h2>{props.subTitle}</h2>
            </header>

            <section className='feed'>
                {props.posts.map(post => (
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
    )
}