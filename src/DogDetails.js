import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"


const DogDetails = ({dogs}) => {
    const {name} = useParams()
    const dog = dogs.find(dog => dog.name.toLowerCase() === `${name}`)
    const {src, age, facts} = dog
    const pic = require(`${src}`)

    return (
        <div>
            <h2>Name: {dog.name}</h2>
            <h3>Age: {age}</h3>
            <ul>
                {facts.map(f => <li>{f}</li>)}
            </ul>
            <div><img src={pic}/></div>
            <Link to="/dogs">Go Back</Link>
        </div>
    )
}

export default DogDetails