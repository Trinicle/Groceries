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
    <div className='flex justify-center items-center h-screen bg-emerald-900'>
    <div className='grid lg:w-600 w-3/4 h-3/5 shadow-2xl bg-white rounded-2xl border-inherit items-center p-10'>    
        <div className="text-cyan-900">
            <form action="" className="grid gap-8">
                <div className="mb-3 text-5xl font-black">PLUH</div>
                <div className="text-xl font-bold">
                    USER REGISTRATION
                </div>
                <div className="relative flex items-center">
                    <div className="absolute float-start px-5">
                        <FontAwesomeIcon icon={faUser} style={{color: "rgb(22 78 99 / 1)"}}/>
                    </div>
                    <input value={username} placeholder="Username" onChange={(ev) => setUsername(ev.target.value)}
                    className='border w-full text-lg rounded-full py-3 px-10 border-transparent bg-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-900 focus:shadow-black text-cyan-900 placeholder:text-cyan-900'
                    />
                </div>
                <div className="relative flex items-center">
                    <div className="absolute float-start px-5">
                        <FontAwesomeIcon icon={faLock} style={{color: "rgb(22 78 99 / 1)"}}/>
                    </div>
                    <input value={username} placeholder="Password" onChange={(ev) => setPassword(ev.target.value)}
                    className='border w-full text-lg rounded-full py-3 px-10 border-transparent bg-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-900 focus:shadow-black text-cyan-900 placeholder:text-cyan-900'
                    />
                </div>
                <div className="flex">
                    <div className="w-full pr-2">
                        <input className='rounded-full border-2 border-cyan-900 bg-emerald-600 text-white w-full text-2xl p-2' type="button" onClick={onButtonClick} value={'Sign Up'} />
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
)
}