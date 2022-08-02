import { useState, useEffect } from "react"
import Feed from '../components/Feed'
import PostForm from '../components/PostForm'

export default function Home() {

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3001/posts')
          .then(async response => {
    
            if(!response.ok){
              setHasError(true)
              return
            }
    
            const body = await response.json()
    
            setPosts(body.map(post => ({
              ...post,
              publishedAt: new Date(post.publishedAt)
            })))
          })
        .catch(() => {
          setHasError(true)
          })
        .finally(() => {
          setIsLoading(false)
        })
    
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