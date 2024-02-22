import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faCircleExclamation, faCamera } from "@fortawesome/free-solid-svg-icons"

export default function Register() {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [lastname, setLastName] = useState('')
const [firstname, setFirstName] = useState('')
const [picture, setPicture] = useState('')
const [error, setError] = useState(false)
const navigate = useNavigate()

const onButtonClick = async (e) => {
    e.preventDefault();
    let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ username, password, firstname, lastname, picture }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    result = await result.json();
    if (!result.error) {
        setUsername("");
        setPassword("");
        setLastName("");
        setFirstName("");
        setPicture("");
        navigate("/login")
    } else {
        setError(true)
    }
}

return (
    <div className='flex justify-center items-center h-screen bg-emerald-900'>
    <div className='grid lg:w-600 w-3/4 shadow-2xl bg-white rounded-2xl border-inherit p-10'>    
        <div className="text-cyan-900">
            <div>
                <div className="text-xl font-bold pb-3 ">
                    USER REGISTRATION
                </div>
                {error && <p className="text-sm text-red-500 font-semibold pb-3">Username already exists!</p>}
            </div>
            <form action="" className="grid gap-5 grid-rows-3 grid-cols-2 items-center text-black">
                <div>
                    <p className="pb-2 font-semibold">First Name</p>
                    <div className="relative flex items-center">
                        <div className="absolute px-4 right-1">
                            {error && <FontAwesomeIcon icon={faCircleExclamation} style={{color: "red"}}/>}
                        </div>
                        <input value={firstname} placeholder="First Name" onChange={(ev) => setFirstName(ev.target.value)}
                        className='border w-full text-lg rounded-full py-2 px-6 bg-slate-300 border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-900 focus:shadow-black text-cyan-900 placeholder:text-cyan-900'
                        />
                    </div>
                </div>
                <div>
                    <p className="pb-2 font-semibold">Last Name</p>
                    <div className="relative flex items-center">
                        <div className="absolute px-4 right-1">
                            {error && <FontAwesomeIcon icon={faCircleExclamation} style={{color: "red"}}/>}
                        </div>
                        <input value={lastname} placeholder="Last Name" onChange={(ev) => setLastName(ev.target.value)}
                        className='border w-full text-lg rounded-full py-2 px-6 bg-slate-300 border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-900 focus:shadow-black text-cyan-900 placeholder:text-cyan-900'
                        />
                    </div>
                </div>
                <div className="col-span-2">
                    <p className="pb-2 font-semibold">Username</p>
                    <div className="relative flex items-center">
                        <div className="absolute left-1 px-4">
                            <FontAwesomeIcon icon={faUser} style={{color: "rgb(22 78 99 / 1)"}}/>
                        </div>
                        <div className="absolute px-4 right-1">
                            {error && <FontAwesomeIcon icon={faCircleExclamation} style={{color: "red"}}/>}
                        </div>
                        <input value={username} placeholder="Username" onChange={(ev) => setUsername(ev.target.value)}
                        className='border w-full text-lg rounded-full py-2 px-10 bg-slate-300 border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-900 focus:shadow-black text-cyan-900 placeholder:text-cyan-900'
                        />
                    </div>
                </div>
                <div className="col-span-2">
                    <p className="pb-2 font-semibold">Password</p>
                    <div className="relative flex items-center">
                        <div className="absolute left-1 px-4">
                            <FontAwesomeIcon icon={faLock} style={{color: "rgb(22 78 99 / 1)"}}/>
                        </div>
                        <div className="absolute px-4 right-1">
                            {error && <FontAwesomeIcon icon={faCircleExclamation} style={{color: "red"}}/>}
                        </div>
                        <input  value={password} placeholder="Password" onChange={(ev) => setPassword(ev.target.value)} 
                        className='border w-full text-lg rounded-full py-2 px-10 bg-slate-300 border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-900 focus:shadow-black text-cyan-900 placeholder:text-cyan-900'
                        />
                    </div>
                </div>
                <div className="col-span-2">
                    <p className="pb-2 font-semibold">Picture Link</p>
                    <div className="relative flex items-center">
                        <div className="absolute left-1 px-4">
                            <FontAwesomeIcon icon={faCamera} style={{color: "rgb(22 78 99 / 1)"}}/>
                        </div>
                        <div className="absolute px-4 right-1">
                            {error && <FontAwesomeIcon icon={faCircleExclamation} style={{color: "red"}}/>}
                        </div>
                        <input  value={picture} placeholder="Picture Link" onChange={(ev) => setPicture(ev.target.value)} 
                        className='border w-full text-lg rounded-full py-2 px-10 bg-slate-300 border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-900 focus:shadow-black text-cyan-900 placeholder:text-cyan-900'
                        />
                    </div>
                </div>
                <div className="flex col-span-2">
                    <div className="w-full">
                        <input className='rounded-full border-2 border-cyan-900 bg-emerald-600 text-white w-full text-2xl p-2' type="button" onClick={onButtonClick} value={'Sign Up'} />
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
)
}