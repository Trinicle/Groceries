import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faCircleExclamation, faCamera } from "@fortawesome/free-solid-svg-icons"
import classNames from 'classnames';

export default function Register() {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [lastname, setLastName] = useState('')
const [firstname, setFirstName] = useState('')
const [picture, setPicture] = useState('')
const [usernameError, setUsernameError] = useState(false)
const [nameError, setNameError] = useState(false)
const [passwordError, setPasswordError] = useState(false)
const [pictureError, setPictureError] = useState(false)


const navigate = useNavigate()

const isImgUrl = (url) => {
    return new Promise(function(resolve, reject) {
        var img = new Image();
        img.onload = function() {
            resolve(url);
        };
        img.onerror = function() {
            resolve("");
        };
        img.src = url;
    });
  }

const onButtonClick = async (e) => {
    e.preventDefault();
    let error = false
    let temp = await isImgUrl(picture);
    if(temp != picture) {
        setPicture(temp)
        setPictureError(true)
        error = true
    } else {
        setPictureError(false);
    }
    if(firstname === "" || lastname === "") {
        setNameError(true)
        error = true
    }
    if(password == "") {
        setPasswordError(true)
        error = true
    }
    if(username === "") {
        setUsernameError(true)
        error = true
    }
    let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ username, password, firstname, lastname, picture, error }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    result = await result.json();
    if (!result.error && !error) {
        setUsername("");
        setPassword("");
        setLastName("");
        setFirstName("");
        setPicture("");
        setUsernameError(false);
        setNameError(false);
        setPasswordError(false);
        setPictureError(false);
        navigate("/login")
    } else {
        setUsernameError(result.error)
    }
}

return (
    <div className='flex justify-center items-center h-screen bg-emerald-900'>
    <div className='grid lg:w-600 w-3/4 shadow-2xl bg-white rounded-2xl border-inherit p-10'>    
        <div className="text-cyan-900">
            <div className="text-xl font-bold pb-3 ">
                USER REGISTRATION
            </div>
            <p className={classNames(usernameError ? "text-red-500 font-semibold": "hidden", " right-40")}>Invalid name</p>
            <form action="" className="grid gap-5 grid-rows-3 grid-cols-2 items-center text-black">
                <div>
                    <p className="pb-2 font-semibold">First Name</p>
                    <div className="relative flex items-center">
                        <div className="absolute px-4 right-1">
                            {nameError && <FontAwesomeIcon icon={faCircleExclamation} style={{color: "red"}}/>}
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
                            {nameError && <FontAwesomeIcon icon={faCircleExclamation} style={{color: "red"}}/>}
                        </div>
                        <input value={lastname} placeholder="Last Name" onChange={(ev) => setLastName(ev.target.value)}
                        className='border w-full text-lg rounded-full py-2 px-6 bg-slate-300 border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-900 focus:shadow-black text-cyan-900 placeholder:text-cyan-900'
                        />
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="flex relative">
                        <p className={classNames(usernameError ? "text-red-500 font-semibold": "hidden", " right-1 absolute")}>Username already exists</p>
                        <p className="pb-2 font-semibold">Username</p>
                    </div>
                    <div className="relative flex items-center">
                        <div className="absolute left-1 px-4">
                            <FontAwesomeIcon icon={faUser} style={{color: "rgb(22 78 99 / 1)"}}/>
                        </div>
                        <div className="absolute px-4 right-1">
                            {usernameError && <FontAwesomeIcon icon={faCircleExclamation} style={{color: "red"}}/>}
                        </div>
                        <input value={username} placeholder="Username" onChange={(ev) => setUsername(ev.target.value)}
                        className='border w-full text-lg rounded-full py-2 px-10 bg-slate-300 border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-900 focus:shadow-black text-cyan-900 placeholder:text-cyan-900'
                        />
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="flex relative">
                        <p className={classNames(usernameError ? "text-red-500 font-semibold": "hidden", " right-1 absolute")}>Invalid password</p>
                        <p className="pb-2 font-semibold">Password</p>
                    </div>
                    <div className="relative flex items-center">
                        <div className="absolute left-1 px-4">
                            <FontAwesomeIcon icon={faLock} style={{color: "rgb(22 78 99 / 1)"}}/>
                        </div>
                        <div className="absolute px-4 right-1">
                            {passwordError && <FontAwesomeIcon icon={faCircleExclamation} style={{color: "red"}}/>}
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
                            {pictureError && <FontAwesomeIcon icon={faCircleExclamation} style={{color: "red"}}/>}
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