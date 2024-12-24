import { useState } from "react";

export const MyLocalStorage = () => {
    const [data, setData] = useState(null); // state to store the data
    const writeData = () => {
        localStorage.setItem('myData', 'Hello World'); // (key, value)
    }
    const readData = () => {
        const data = localStorage.getItem('myData'); // get the value of the key
        setData(data);
    }
    const deleteData = () => {
        localStorage.removeItem('myData'); // delete the key
        setData(null);
    }
    return (
        <>
            <h1>My Local Storage</h1>
            <button onClick={writeData}>Write Data</button>
            <button onClick={readData}>Read Data</button>
            <button onClick={deleteData}>Delete Data</button>
            <div>{data}</div>
        </>
    )
}

