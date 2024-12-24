import axios from 'axios';
export const UseHeaders = () => {
    const sendData = async () => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer kobtokentest'
        }
        const payload = {
            name: 'John',
            age: 30
        }
        await axios.post('http://localhost:3000/headers', payload, { headers: headers });
    }
    return (
        <>
            <h1>Use Headers</h1>
            <button onClick={sendData}>Send Data</button>
        </>
    )
}

