import errors from "../config/errors"

export async function getPostsList() {

    const response = await  fetch('https://jonasaugusto-react-app.surge.sh/posts')

    if(!response.ok){
        return false
      }

    const body = await response.json()

    return(body.map(post => ({
        ...post,
        publishedAt: new Date(post.publishedAt)
      })))

}

export async function getMostViewedPostsList() {

    const response = await  fetch('https://jonasaugusto-react-app.surge.sh/posts/most-viewed')

    if(!response.ok){
        return false
      }

    const body = await response.json()

    return(body.map(post => ({
        ...post,
        publishedAt: new Date(post.publishedAt)
      })))

}

export async function create({history, userName}) {

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
        
        return errors[body.code] || 'Ocorreu um erro ao publicar uma mensagem!'
        
        }
    
    return true
}