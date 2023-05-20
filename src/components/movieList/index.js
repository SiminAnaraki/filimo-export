import './style.css'
export default function Movies(props){
    function makeList(){
        return (
            props.films.map(function(movie,i){
                return (
                <li key = {i}>
                    <div className="layer">
                        <a href= {movie.url}>
                        <img src = {movie.imageUrl}/>
                        </a>
                    </div>
                </li>
                )
            })

        )
    }
    return (
        <div className = "list">
        <h1 className = "title">{props.title}</h1>
        <ul>
            {makeList()}
        </ul>
        </div>
    )
}
