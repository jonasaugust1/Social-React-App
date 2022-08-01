import { useState } from "react"
import Feed from '../components/Feed'
import PostForm from '../components/PostForm'

export default function Home() {
    const [posts, setPosts] = useState([])

    // Enviamos essa função para o componente filho através do onSubmit={handleSubmit}
    function handleSubmit({history, userName}) {
       
        setPosts([
            ...posts,
            {
                id: Math.random(),
                content: history,
                userName, //Como o nome da constante é o mesmo nome da chave podemos definir o userName assim
                publishedAt: new Date(),
            }
        ])
    }

    return (
        <>
            <PostForm onSubmit={handleSubmit}/>
            <main>
            <Feed posts={posts} title='Seu Feed' subTitle='Acompanhe o que os seus amigos estão pensando em
            tempo real'/> {/*Para enviar as propriedades para o Feed component nó usamos as props */}
            </main>
        </>
        
)
}