import './style.css'
export function Watch(props){
    function box(){
        return (
            props.first.map(function(question,i){
                return(
                <li key={i}>
                    <a href={question.link}>
                        <img src={question.image}/>
                        <h5>{question.caption}</h5>
                    </a>
                </li>
                )
    }))}

    return(
        <div className="tamasha">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <div className="info" >
                <span className="more-info">{props.info}</span>
                <i class="fa-solid fa-arrow-left-long"></i>
            </div>
            <ul>
                {box()}
            </ul>
        </div>
    )
}