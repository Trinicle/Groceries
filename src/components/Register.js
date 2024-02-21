import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons"

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
    <div className='flex justify-center items-center h-screen bg-gradient-to-br from-emerald-900 via-emerald-600 to-green-400'>
    <div className='grid lg:w-600 w-3/4 h-3/5 shadow-2xl bg-gray-600/50 rounded-2xl border-inherit items-center p-10'>    
        <div className="">
            <form action="" className="grid gap-10">
                <div className="mb-3 font-bold text-white text-5xl">PLUH</div>
                <div className="text-xl text-dull-white">
                    Register
                </div>
                <div>
                    <label for="username" className="block text-md mb-2 mt-2 text-white" >Username</label>
                    <div className="relative flex items-center">
                        <div className="absolute float-start px-3">
                            <FontAwesomeIcon icon={faUser} style={{color: "white"}}/>
                        </div>
                        <input value={username} placeholder="Username" onChange={(ev) => setUsername(ev.target.value)}
                        className='border w-full text-lg rounded-full py-1 px-8 bg-white-light border-transparent focus:bg-gray-600/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:drop-shadow-xl text-dull-white placeholder:text-dull-white'
                        />
                    </div>
                    <br/>
                    <label for="password" className="block text-md mb-2 mt-2 text-white">Password</label>
                    <div className="relative flex items-center">
                        <div className="absolute float-start px-3">
                            <FontAwesomeIcon icon={faLock} style={{color: "white"}}/>
                        </div>
                        <input type="password" value={password} placeholder="Password" onChange={(ev) => setPassword(ev.target.value)} 
                        className='border w-full text-lg rounded-full py-1 px-8 bg-white-light border-transparent focus:bg-gray-600/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:drop-shadow-xl text-dull-white placeholder:text-dull-white'
                        />
                    </div>
                </div>
                <div className="flex">
                    <div className="w-full pr-2">
                        <input className='rounded-full border-2 border-emerald-600 bg-gradient-to-l from-emerald-900 to-emerald-600 text-white w-full text-2xl p-2 shadow-xl' type="button" onClick={onButtonClick} value={'Sign Up'} />
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
)
}