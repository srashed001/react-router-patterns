

const DogDetails = ({dog}) => {
    return (
        <div> 
            <h1>{dog.name}</h1>
            <img src={dog.src} alt={dog.name} />
            <p>age: {dog.age}</p>
            <ul>
                <p>facts</p>
                {dog.facts.map(fact => (
                    <li>{fact}</li>
                ))}
            </ul>
        </div>
    )
}

export default DogDetails