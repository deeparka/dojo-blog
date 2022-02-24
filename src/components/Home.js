import { useState } from "react";

const Home = () => {
    const [name, setName] = useState("Arkadeep");
    const [age, setAge] = useState(22);

    const handleClick = () => {
        setName("Labu");
        setAge(21);
    };

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>
                {name} is {age} years old
            </p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default Home;
