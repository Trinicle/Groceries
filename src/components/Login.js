import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Login(props) {
    const { setLoggedIn } = props

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    const onButtonClick = async (e) => {
        e.preventDefault();
    
        let result = await fetch(
            'http://localhost:5000/login', {
                method: "post",
                body: JSON.stringify({ username, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        result = await result.json();
        if (result.matched) {
            setUsername("");
            setPassword("");
            setLoggedIn(true);
            navigate("/");
        } else {
            setPassword("");
        }
    }
    
    return (
        <div className={'mainContainer'}>
        <div className={'titleContainer'}>
            <div>Login</div>
        </div>
        <br />
        <div className={'inputContainer'}>
            <input
            value={username}
            placeholder="Enter your username here"
            onChange={(ev) => setUsername(ev.target.value)}
            className={'inputBox'}
            />
        </div>
        <br />
        <div className={'inputContainer'}>
            <input
            value={password}
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className={'inputBox'}
            />
        </div>
        <br />
        <div className={'inputContainer'}>
            <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
        </div>
        </div>
    )
}