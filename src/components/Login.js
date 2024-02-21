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
        <div className='flex justify-center items-center h-screen bg-green-600'>
            <div className='grid w-5/6 shadow-lg bg-white rounded-md grid-cols-2'>
                <div className="p-10">
                    <h1 className="text-3xl mb-3">Login</h1>
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
                    <div className="pb-2">
                        <h1>Don't have an account? <a href="/register" className="font-medium">Join Now</a></h1>
                    </div>
                    <div>
                        <input className='rounded-md border-green-400 bg-green-700 text-white w-full text-2xl p-2' type="button" onClick={onButtonClick} value={'Login'} />
                    </div>
                </div>
                <div>
                    <img src="https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/02/USAT/71425670007-getty-images-1310147575.jpg" className="h-full rounded-r-md"></img>
                </div>
            </div>
        </div>
    )
}