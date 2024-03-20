import { useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import { Listbox, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faCircleExclamation, faCamera, faUtensils, faCheck, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import classNames from 'classnames';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations';
const bcrypt = require('bcryptjs');
const client = generateClient();
const saltENV = Number(process.env.REACT_APP_SALT);

const people = [
  { name: 'N/A' },
  { name: 'Home Cook' },
  { name: 'Commis Chef' },
  { name: 'Junior Chef' },
  { name: 'Station Chef' },
  { name: 'Saucier' },
  { name: 'Grill Chef' },
  { name: 'Chef de Tournant' },
  { name: 'Fish Chef' },
  { name: 'Entremetier' },
  { name: 'Friturier' },
  { name: 'Pastry Chef' },
  { name: 'Boucher' },
  { name: 'Fry Chef' },
  { name: 'Head Chef' },
]

export default function Register() {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    picture: '',
    title: people[0].name
  })

  const [registerError, setRegisterError] = useState({
    usernameError: false,
    nameError: false,
    passwordError: false,
    pictureError: false,
  })

  const navigate = useNavigate()

  const isImgUrl = (url) => {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.onload = function () {
        resolve(url);
      };
      img.onerror = function () {
        resolve("");
      };
      img.src = url;
    });
  }

  const checkErrors = async () => {
    let areErrors = false;
    if (userInfo.username === "") {
      setRegisterError({ ...registerError, usernameError: true })
      areErrors = true
    }
    if (userInfo.firstname === "" || userInfo.lastname === "") {
      setRegisterError({ ...registerError, nameError: true })
      areErrors = true
    }
    let temp = await isImgUrl(userInfo.picture);
    if (temp != userInfo.picture) {
      setUserInfo({ ...userInfo, picture: "" })
      setRegisterError({ ...registerError, pictureError: true })
    } 
    if (userInfo.password === "") {
      setRegisterError({ ...registerError, passwordError: true })
      areErrors = true
    }
    return areErrors
  }

  const onButtonClick = async (e) => {
    e.preventDefault();

    const salt = bcrypt.genSaltSync(saltENV);
    const hash = bcrypt.hashSync(userInfo.password, salt);

    const userDetails = {
      username: userInfo.username,
      hashedpassword: hash,
      firstname: userInfo.firstname,
      lastname: userInfo.lastname,
      picture: userInfo.picture,
      title: userInfo.title
    }

    const errors = await checkErrors()
    if(!errors) {
      try {
        const newUser = await client.graphql({    //ERR_NAME_NOT_RESOLVED for localhost:3000 but works for http://127.0.0.1:3000/
          query: mutations.createUser,
          variables: { input: userDetails }
        })
        console.log(newUser);
      } catch (err) {
        console.log(err);
      } finally {
        setUserInfo({
          username: '',
          password: '',
          firstname: '',
          lastname: '',
          picture: '',
          title: people[0]
        })
        setRegisterError({
          usernameError: false,
          nameError: false,
          passwordError: false,
          pictureError: false,
        })
        navigate("/login")
      }
    } else {
      console.log("Error when registering")
    }
  }

  const handleChange = (e) => {
    if(!e.target?.name) {
      setUserInfo({ ...userInfo, title: e.name })
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }
    console.log(userInfo)
  }

  return (
    <div className='h-screen bg-slate-50'>
      <div className="text-5xl font-black text-black mx-12 pt-8">PLUH</div>
      <div className='fixed inset-0 flex items-center justify-center'>
        <div className='grid w-600 shadow-2xl bg-white rounded-2xl border-inherit p-10'>
          <div>
            <div className="pb-4">
              <h1 className="text-4xl font-semibold pb-2">Sign up</h1>
              <p>Stay updated on your shopping</p>
            </div>
            <p className={classNames(registerError.usernameError ? "text-red-500 font-semibold" : "hidden", " right-40")}>Invalid name</p>
            <form action="" className="grid gap-5 grid-rows-3 grid-cols-2 items-center text-black">
              <div>
                <p className="pb-2 font-semibold">First Name</p>
                <div className="relative flex items-center">
                  <div className="absolute px-4 right-1">
                    {registerError.nameError && <FontAwesomeIcon icon={faCircleExclamation} style={{ color: "red" }} />}
                  </div>
                  <input
                    name="firstname"
                    value={userInfo.firstname} 
                    placeholder="First Name" 
                    onChange={handleChange}
                    className={classNames(
                      registerError.nameError ? 'focus:ring-red-500 border-red-500 border-2' : 'border-black focus:ring-forest border', 
                        'w-full text-2xl rounded-lg py-3 px-3 focus:outline-none focus:ring-2'
                    )}
                  />
                </div>
              </div>
              <div>
                <p className="pb-2 font-semibold">Last Name</p>
                <div className="relative flex items-center">
                  <div className="absolute px-4 right-1">
                    {registerError.nameError && <FontAwesomeIcon icon={faCircleExclamation} style={{ color: "red" }} />}
                  </div>
                  <input
                    name="lastname"
                    value={userInfo.lastname} 
                    placeholder="Last Name" 
                    onChange={handleChange}
                    className={classNames(
                      registerError.nameError ? 'focus:ring-red-500 border-red-500 border-2' : 'border-black focus:ring-forest border', 
                        'w-full text-2xl rounded-lg py-3 px-3 focus:outline-none focus:ring-2'
                    )}
                  />
                </div>
              </div>
              <div className="col-span-2">
                <Listbox value={userInfo.title} onChange={handleChange}>
                  <div className="relative mt-1">
                    <Listbox.Button className="border-black focus:ring-forest border w-full text-2xl rounded-lg py-3 px-3 focus:outline-none focus:ring-2">
                      <span>{userInfo.title}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <FontAwesomeIcon icon={faCaretDown} style={{ color: "black" }} />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 
                        text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-10">
                        {people.map((person, personIdx) => (
                          <Listbox.Option
                            key={personIdx}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 text-lg ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                              }`
                            }
                            value={person}
                          >
                            {({ selected }) => (
                              <>
                                <span 
                                  className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                    }`}
                                >
                                  {person.name}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <FontAwesomeIcon icon={faCheck} style={{ color: "black" }} />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
              <div className="col-span-2">
                <div className="flex relative">
                  <p className={classNames(registerError.usernameError ? "text-red-500 font-semibold" : "hidden", " right-1 absolute")}>Username already exists</p>
                  <p className="pb-2 font-semibold">Username</p>
                </div>
                <div className="relative flex items-center">
                  <div className="absolute left-1 px-4">
                    <FontAwesomeIcon icon={faUser} style={{ color: "black" }} />
                  </div>
                  <div className="absolute px-4 right-1">
                    {registerError.usernameError && <FontAwesomeIcon icon={faCircleExclamation} style={{ color: "red" }} />}
                  </div>
                  <input
                    name="username"
                    value={userInfo.username} 
                    placeholder="Username" 
                    onChange={handleChange}
                    className={classNames(
                      registerError.usernameError ? 'focus:ring-red-500 border-red-500 border-2' : 'border-black focus:ring-forest border', 
                        'w-full text-2xl rounded-lg py-3 px-10 focus:outline-none focus:ring-2'
                    )}
                  />
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex relative">
                  <p className={classNames(registerError.passwordError ? "text-red-500 font-semibold" : "hidden", " right-1 absolute")}>Invalid password</p>
                  <p className="pb-2 font-semibold">Password</p>
                </div>
                <div className="relative flex items-center">
                  <div className="absolute left-1 px-4">
                    <FontAwesomeIcon icon={faLock} style={{ color: "black" }} />
                  </div>
                  <div className="absolute px-4 right-1">
                    {registerError.passwordError && <FontAwesomeIcon icon={faCircleExclamation} style={{ color: "red" }} />}
                  </div>
                  <input
                    name="password"
                    value={userInfo.password} 
                    placeholder="Password" 
                    onChange={handleChange}
                    className={classNames(
                      registerError.passwordError ? 'focus:ring-red-500 border-red-500 border-2' : 'border-black focus:ring-forest border', 
                        'w-full text-2xl rounded-lg py-3 px-10 focus:outline-none focus:ring-2'
                    )}
                  />
                </div>
              </div>
              <div className="col-span-2">
                <p className="pb-2 font-semibold">Picture Link</p>
                <div className="relative flex items-center">
                  <div className="absolute left-1 px-4">
                    <FontAwesomeIcon icon={faCamera} style={{ color: "black" }} />
                  </div>
                  <div className="absolute px-4 right-1">
                    {registerError.pictureError && <FontAwesomeIcon icon={faCircleExclamation} style={{ color: "red" }} />}
                  </div>
                  <input 
                    name="picture" 
                    value={userInfo.picture}
                    placeholder="Picture Link" 
                    onChange={handleChange}
                    className={classNames(
                      registerError.pictureError ? 'focus:ring-red-500 border-red-500 border-2' : 'border-black focus:ring-forest border', 
                        'w-full text-2xl rounded-lg py-3 px-10 focus:outline-none focus:ring-2'
                    )}
                  />
                </div>
              </div>
              <div className="flex col-span-2">
                <div className="w-full">
                  <input className='rounded-full border-2 border-black bg-forest text-white w-full text-xl p-4 font-semibold' type="button" onClick={onButtonClick} value={'Sign Up'} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}