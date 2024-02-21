import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faCircleExclamation } from "@fortawesome/free-solid-svg-icons"


export default function Login(props) {
    const { setLoggedIn } = props

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState("password")
    const [error, setError] = useState(false)
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
            setError(false)
            navigate("/");
        } else {
            setError(true);
            setPassword("");
        }
    }

    const signup = (e) => {
        e.preventDefault();
        navigate("/register")
    }

    const showPassword = () => {
        showPass === "password" ? setShowPass("") : setShowPass("password")
    }
    
    return (
        <div className='flex justify-center items-center h-screen bg-emerald-900'>
            <div className='grid lg:grid-cols-2 gap-10 2xl:w-1200 lg:w-1000 w-3/4 h-3/5 shadow-2xl bg-white rounded-2xl border-inherit p-10'>    
                <div className="text-cyan-900">
                    <div className="mb-3 text-5xl font-black text-black pb-36">PLUH</div>
                    <form action="" className="grid gap-2 items-center">
                        <div className="pb-2">
                            <div className="text-xl font-bold pb-3 ">
                                USER LOGIN
                                {error && <p className="text-sm text-red-500 font-semibold">Invalid username or password</p>}
                            </div>
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
                        <div>
                            <div className="relative flex items-center">
                                <div className="absolute left-1 px-4">
                                    <FontAwesomeIcon icon={faLock} style={{color: "rgb(22 78 99 / 1)"}}/>
                                </div>
                                <div className="absolute px-4 right-1">
                                    {error && <FontAwesomeIcon icon={faCircleExclamation} style={{color: "red"}}/>}
                                </div>
                                <input type={showPass} value={password} placeholder="Password" onChange={(ev) => setPassword(ev.target.value)} 
                                className='border w-full text-lg rounded-full py-2 px-10 bg-slate-300 border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-900 focus:shadow-black text-cyan-900 placeholder:text-cyan-900'
                                />
                            </div>
                            <div className="flex items-center mb-4 pt-3 pl-5">
                                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" onClick={showPassword}/>
                                <label for="default-checkbox" class="ms-2 text-sm text-black font-bold dark:text-gray-300">Show Password</label>
                            </div>
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