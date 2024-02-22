import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import classNames from 'classnames';



export default function Login(props) {
    const { setLoggedIn, setUser } = props

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState("password")
    const [show, setShow] = useState('show')
    const [guest, setGuest] = useState(true)
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    
    const login = async (e) => {
        e.preventDefault();
        setGuest(false)
        let result = await fetch(
            'http://localhost:5000/login', {
                method: "post",
                body: JSON.stringify({ username, password, guest }),
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
            setUser(username);
            setError(false)
            navigate("/home");
        } else {
            setError(true);
            setPassword("");
        }
    }

    const guestLogin = async (e) => {
        e.preventDefault();
        setGuest(true)
        setUsername("");
        setPassword("");
        setLoggedIn(true);
        setUser("");
        setError(false)
        navigate("/home");
    }

    const showPassword = () => {
        showPass === "password" ? setShowPass("") : setShowPass("password")
        show === "show" ? setShow("hide") : setShow("show")
    }
    
    return (
        <div className="h-screen bg-slate-50">
            <div className="text-5xl font-black text-black mx-12 pt-8">PLUH</div>
            <div className="flex h-full justify-center items-center">
                <div className='grid gap-5'>
                    <div className='grid gap-10 w-96 shadow-2xl bg-white rounded-2xl border-inherit p-6'>    
                        <div className="">
                            <div className="pb-2">
                                <h1 className="text-4xl font-semibold pb-2">Sign in</h1>
                                <p>Stay updated on your shopping</p>
                            </div>
                            <form action="" className="grid gap-5 items-center pt-2">
                                <div className="pb-2">
                                    <div className="text-xl font-bold pb-3">
                                        {error && <p className="text-sm text-red-500 font-semibold">Please enter a valid username</p>}
                                    </div>
                                    <div className="relative flex items-center">
                                        <div className="absolute px-4">
                                            <FontAwesomeIcon icon={faUser} style={{color: "black"}}/>
                                        </div>
                                        <div className="absolute px-4 right-1">
                                            {error && <FontAwesomeIcon icon={faCircleExclamation} style={{color: "red"}}/>}
                                        </div>
                                        <input value={username} placeholder="Username" onChange={(ev) => setUsername(ev.target.value)}
                                        className={classNames(
                                            error ? 'focus:ring-red-500 border-red-500 border-2' : 'border-black focus:ring-forest border', 'w-full text-2xl rounded-lg py-3 px-10 focus:outline-none focus:ring-2'
                                        )}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="relative flex items-center">
                                        <div className="absolute px-4">
                                            <FontAwesomeIcon icon={faLock} style={{color: "black"}}/>
                                        </div>
                                        <div className="absolute right-1">
                                            <input type="button" className="font-semibold rounded-full hover:bg-forest hover:bg-opacity-50 px-2 py-1" onClick={showPassword} value={show}/>
                                        </div>
                                        <input type={showPass} value={password} placeholder="Password" onChange={(ev) => setPassword(ev.target.value)} 
                                        className='border w-full text-2xl rounded-lg py-3 px-10 border-black focus:outline-none focus:ring-2 focus:ring-forest'
                                        />
                                    </div>
                                </div>
                                <input className='rounded-full border-2 border-cyan-900 bg-forest text-white w-full text-xl p-4 font-semibold' type="button" onClick={login} value={'Sign in'} />
                                <div class="flex items-center text-lg">
                                    <div class="flex-1 border-t-2 border-gray-200"></div>
                                    <span class="px-3 text-gray-500">or</span>
                                    <div class="flex-1 border-t-2 border-gray-200"></div>
                                </div>
                                <input className='rounded-full border-2 border-cyan-900 bg-forest text-white w-full text-xl p-4 font-semibold' type="button" onClick={guestLogin} value={'Continue as guest'} />
                            </form>
                        </div>
                    </div>
                    <div className="text-center text-lg font-semibold">
                        New to ___? <a href="/register" className="text-sky-600">Sign up</a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}