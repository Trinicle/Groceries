import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons"


export default function Login(props) {
    const { setLoggedIn } = props

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    const login = async (e) => {
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

    const signup = (e) => {
        e.preventDefault();
        navigate("/register")
    }
    
    return (
        <div className='flex justify-center items-center h-screen bg-emerald-900'>
            <div className='grid lg:grid-cols-2 gap-10 2xl:w-1200 lg:w-1000 w-3/4 h-3/5 shadow-2xl bg-white rounded-2xl border-inherit items-center p-10'>    
                <div className="text-cyan-900">
                    <form action="" className="grid gap-10">
                        <div className="mb-3 text-5xl font-black">PLUH</div>
                        <div className="text-xl font-bold">
                            USER LOGIN
                        </div>
                            <div className="relative flex items-center">
                                <div className="absolute float-start px-5">
                                    <FontAwesomeIcon icon={faUser} style={{color: "rgb(22 78 99 / 1)"}}/>
                                </div>
                                <input value={username} placeholder="Username" onChange={(ev) => setUsername(ev.target.value)}
                                className='border w-full text-lg rounded-full py-3 px-10 bg-slate-300 border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-900 focus:shadow-black text-cyan-900 placeholder:text-cyan-900'
                                />
                            </div>
                            <div className="relative flex items-center">
                                <div className="absolute float-start px-5">
                                    <FontAwesomeIcon icon={faLock} style={{color: "rgb(22 78 99 / 1)"}}/>
                                </div>
                                <input type="password" value={password} placeholder="Password" onChange={(ev) => setPassword(ev.target.value)} 
                                className='border w-full text-lg rounded-full py-3 px-10 bg-slate-300 border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-900 focus:shadow-black text-cyan-900 placeholder:text-cyan-900'
                                />
                            </div>
                        <div className="flex">
                            <div className="w-full pr-2">
                                <input className='rounded-full border-2 border-cyan-900 bg-emerald-600 text-white w-full text-2xl p-2' type="button" onClick={login} value={'Login'} />
                            </div>
                            <div className="w-full pl-2">
                                <input className='rounded-full border-2 border-cyan-900 bg-emerald-600 text-white w-full text-2xl p-2' type="button" onClick={signup} value={'Sign Up'} />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="h-full hidden lg:block">
                    <img src="https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/02/USAT/71425670007-getty-images-1310147575.jpg" className="h-full rounded-2xl"></img>
                </div>
            </div>
        </div>
    )
}