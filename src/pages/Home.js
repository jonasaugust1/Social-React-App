import { useState, useEffect } from "react"
import Feed from '../components/Feed'
import PostForm from '../components/PostForm'
import { getPostsList } from "../services/postService"

export default function Home() {

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        async function loadPosts(){

            try {
                const postsList = await getPostsList()

                if(!postsList){
                    setHasError(true)
                    return
                  }
          
                  setPosts(postsList)

            } catch {
                setHasError(true)
            } finally {
                setIsLoading(false)
            }
        }

        loadPosts()
    
      }, [])

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
                <Feed
                hasError={hasError}
                isLoading={isLoading}
                posts={posts}
                title='Seu Feed' 
                subTitle='Acompanhe o que os seus amigos estão pensando em
                tempo real'/> {/*Para enviar as propriedades para o Feed component nó usamos as props */}
            </main>
        </>
        
)
}