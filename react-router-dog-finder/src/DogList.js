import DogDetails from "./DogDetails"

const DogList = ({dogs}) => {
    return (
        <div>
            {dogs.map(dog=> (
                <div>
                    <DogDetails dog={dog} />
                </div>
            ))}
        </div>
    )
}

export default DogList