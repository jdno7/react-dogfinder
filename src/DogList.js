import DogThumbnail from "./DogThumbnail";

const DogList = ({dogs}) => {

    const makeDogs = dogs.map(dog => <DogThumbnail src={dog.src} name={dog.name} />)

    return (
        <div>
            {makeDogs}
        </div>
    )
}

export default DogList;