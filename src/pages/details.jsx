import { useParams } from "react-router-dom";


function Details () {
    const { name } = useParams();
    return (
        <h1>Details of Products { name }</h1>
    )
    
}

export default Details;