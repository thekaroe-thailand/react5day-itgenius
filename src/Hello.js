import { useState, useEffect } from 'react';
import './index.css'; // import css file

const Hello = () => {
    const [name, setName] = useState('Kob');
    const [phone, setPhone] = useState('081234567890');
    const [agree, setAgree] = useState(false); // checkbox
    const [products, setProducts] = useState([
        'java',
        'php',
        'python',
        'javascript',
        'golang'
    ]);

    useEffect(() => { // on load event
        setProducts([
            'java',
            'php',
            'python',
            'javascript',
            'golang',
            'c#',
            'c++',
            'c',
            'c#',
            'c++',
            'c',
        ]);
        const date = new Date();
        console.log('useEffect doing', date);
    }, [name]);

    const changeName = () => {
        setName('Tavon');
    }

    const changePhone = () => {
        setPhone('081234567890');
        changeName('java');
        // setAge(20);
    }

    return (
        <div>
            <h1>Agree: {agree ? 'Yes' : 'No'}</h1>
            <input type="checkbox" onChange={(e) => setAgree(e.target.checked)} />
            ยอมรับเงื่อนไข

            {products.length > 0 ? products.map((product, index) => (
                <h1 key={index}>
                    {product}
                </h1>
            )) : <h1>No products</h1>}

            <h1 className='myStyle'>
                <i className='fa fa-home'></i>
                Hello React {name}
            </h1>
            <button onClick={() => setName('Tavon')}>
                Change Name
            </button>
            <button onClick={changeName}>
                Change Name
            </button>
            <button onClick={changePhone}>
                Change Phone
            </button>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <select onChange={(e) => setName(e.target.value)}>
                <option value="java">Java</option>
                <option value="php">PHP</option>
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
                <option value="golang">Golang</option>
            </select>
            <select onChange={(e) => setName(e.target.value)}>
                {products.map((product, index) => (
                    <option value={product} key={index}>
                        {product}
                    </option>
                ))}
            </select>
        </div>
    )
}
export default Hello;