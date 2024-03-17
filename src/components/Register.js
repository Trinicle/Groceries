import { useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import { Listbox, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faCircleExclamation, faCamera, faUtensils, faCheck, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import classNames from 'classnames';

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
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [lastname, setLastName] = useState('')
  const [firstname, setFirstName] = useState('')
  const [picture, setPicture] = useState('')
  const [title, setTitle] = useState(people[0])
  const [usernameError, setUsernameError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [pictureError, setPictureError] = useState(false)

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

  const onButtonClick = async (e) => {
    e.preventDefault();
    let error = false
    let temp = await isImgUrl(picture);
    if (temp != picture) {
      setPicture(temp)
      setPictureError(true)
      error = true
    } else {
      setPictureError(false);
    }
    if (firstname === "" || lastname === "") {
      setNameError(true)
      error = true
    }
    if (password == "") {
      setPasswordError(true)
      error = true
    }
    if (username === "") {
      setUsernameError(true)
      error = true
    }
    let result = await fetch(
      'http://localhost:5000/register', {
      method: "post",
      body: JSON.stringify({ username, password, firstname, lastname, picture, title, error }),
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
    <div className='h-screen bg-slate-50'>
      <div className="text-5xl font-black text-black mx-12 pt-8">PLUH</div>
      <div className='fixed inset-0 flex items-center justify-center'>
        <div className='grid w-600 shadow-2xl bg-white rounded-2xl border-inherit p-10'>
          <div>
            <div className="pb-4">
              <h1 className="text-4xl font-semibold pb-2">Sign up</h1>
              <p>Stay updated on your shopping</p>
            </div>
            <p className={classNames(usernameError ? "text-red-500 font-semibold" : "hidden", " right-40")}>Invalid name</p>
            <form action="" className="grid gap-5 grid-rows-3 grid-cols-2 items-center text-black">
              <div>
                <p className="pb-2 font-semibold">First Name</p>
                <div className="relative flex items-center">
                  <div className="absolute px-4 right-1">
                    {nameError && <FontAwesomeIcon icon={faCircleExclamation} style={{ color: "red" }} />}
                  </div>
                  <input value={firstname} placeholder="First Name" onChange={(ev) => setFirstName(ev.target.value)}
                    className={classNames(
                      nameError ? 'focus:ring-red-500 border-red-500 border-2' : 'border-black focus:ring-forest border', 
                        'w-full text-2xl rounded-lg py-3 px-3 focus:outline-none focus:ring-2'
                    )}
                  />
                </div>
              </div>
              <div>
                <p className="pb-2 font-semibold">Last Name</p>
                <div className="relative flex items-center">
                  <div className="absolute px-4 right-1">
                    {nameError && <FontAwesomeIcon icon={faCircleExclamation} style={{ color: "red" }} />}
                  </div>
                  <input value={lastname} placeholder="Last Name" onChange={(ev) => setLastName(ev.target.value)}
                    className={classNames(
                      nameError ? 'focus:ring-red-500 border-red-500 border-2' : 'border-black focus:ring-forest border', 
                        'w-full text-2xl rounded-lg py-3 px-3 focus:outline-none focus:ring-2'
                    )}
                  />
                </div>
              </div>
              <div className="col-span-2">
                <Listbox value={title} onChange={setTitle}>
                  <div className="relative mt-1">
                    <Listbox.Button className="border-black focus:ring-forest border w-full text-2xl rounded-lg py-3 px-3 focus:outline-none focus:ring-2">
                      <span>{title.name}</span>
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
                  <p className={classNames(usernameError ? "text-red-500 font-semibold" : "hidden", " right-1 absolute")}>Username already exists</p>
                  <p className="pb-2 font-semibold">Username</p>
                </div>
                <div className="relative flex items-center">
                  <div className="absolute left-1 px-4">
                    <FontAwesomeIcon icon={faUser} style={{ color: "black" }} />
                  </div>
                  <div className="absolute px-4 right-1">
                    {usernameError && <FontAwesomeIcon icon={faCircleExclamation} style={{ color: "red" }} />}
                  </div>
                  <input value={username} placeholder="Username" onChange={(ev) => setUsername(ev.target.value)}
                    className={classNames(
                      usernameError ? 'focus:ring-red-500 border-red-500 border-2' : 'border-black focus:ring-forest border', 
                        'w-full text-2xl rounded-lg py-3 px-10 focus:outline-none focus:ring-2'
                    )}
                  />
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex relative">
                  <p className={classNames(usernameError ? "text-red-500 font-semibold" : "hidden", " right-1 absolute")}>Invalid password</p>
                  <p className="pb-2 font-semibold">Password</p>
                </div>
                <div className="relative flex items-center">
                  <div className="absolute left-1 px-4">
                    <FontAwesomeIcon icon={faLock} style={{ color: "black" }} />
                  </div>
                  <div className="absolute px-4 right-1">
                    {passwordError && <FontAwesomeIcon icon={faCircleExclamation} style={{ color: "red" }} />}
                  </div>
                  <input value={password} placeholder="Password" onChange={(ev) => setPassword(ev.target.value)}
                    className={classNames(
                      passwordError ? 'focus:ring-red-500 border-red-500 border-2' : 'border-black focus:ring-forest border', 
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
                    {pictureError && <FontAwesomeIcon icon={faCircleExclamation} style={{ color: "red" }} />}
                  </div>
                  <input value={picture} placeholder="Picture Link" onChange={(ev) => setPicture(ev.target.value)}
                    className={classNames(
                      pictureError ? 'focus:ring-red-500 border-red-500 border-2' : 'border-black focus:ring-forest border', 
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