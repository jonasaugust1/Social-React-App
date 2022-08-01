import Feed from "../components/Feed"

export default function MostViewed() {

    const posts = []

    return (
        <main className="most-viewed">
            <Feed posts={posts} title='Mais Vistos' subTitle='Acompanhe os assuntos mais comentados no momento
             e fique por dentro de qualquer novidade'/> 
        </main>
    )
}