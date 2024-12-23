import Button from './components/Button';
import { useState } from 'react';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({}); // define object
    const getData = () => {
        console.log(user);
    }

    return (
        <div>
            <h1>Sign In</h1>
            <div>
                <div>Username</div>
                <input type="text"
                    onChange={(e) => setUser({ ...user, username: e.target.value })} />
            </div>
            <div>
                <div>Password</div>
                <input type="password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })} />
            </div>
            <Button text="Sign In" icon="fa fa-sign-in" />
            <Button text="Register" icon="fa fa-user-plus" />
            <button onClick={getData}>Get Data</button>
        </div>
    );
}

export default SignIn;
