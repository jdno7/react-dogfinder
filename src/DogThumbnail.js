import {Link} from "react-router-dom"


const DogThumbnail = ({name, src}) => {
    const img = require(`${src}`)
    return (
        <div>
            <img src={img}></img>
            <h2>{name}</h2>
            <Link to={`/dogs/${name.toLowerCase()}`}>Details</Link>
            
        </div>
    )
}

export default DogThumbnail