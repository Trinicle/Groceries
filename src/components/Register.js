import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()

const onButtonClick = async (e) => {
    e.preventDefault();

    let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    result = await result.json();
    console.log(result);
    if (result) {
        setUsername("");
        setPassword("");
        navigate("/login")
    }
}

return (
    <div className='flex justify-center items-center h-screen bg-green-600'>
        <div className='w-96 p-10 shadow-lg bg-white rounded-md'>
            <h1 className="text-3xl mb-3">Register</h1>
            <hr/>
            <div className="pb-1">
                <label for="username" className="block text-2xl mb-2 mt-2" >Username</label>
                <input
                value={username}
                placeholder="Enter your username here"
                onChange={(ev) => setUsername(ev.target.value)}
                className='border w-full text-lg rounded-md p-1 px-2'
                />
            </div>
            <div>
                <label for="username" className="block text-2xl mb-2 mt-2" >Password</label>
                <input
                value={password}
                placeholder="Enter your password here"
                onChange={(ev) => setPassword(ev.target.value)}
                className='border w-full text-lg rounded-md p-1 px-2'
                />
            </div>
            <br />
            <div>
                <input className='rounded-md border-green-400 bg-green-700 text-white w-full text-2xl p-2' type="button" onClick={onButtonClick} value={'Register'} />
            </div>
        </div>
      
    </div>
)
}