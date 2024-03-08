import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell, faBars, faHouseChimney, faMagnifyingGlass, faBook, faBookOpenReader } from "@fortawesome/free-solid-svg-icons"
import classNames from 'classnames';


export default function Navbar(props) {
  const { user, setLoggedIn, setUser } = props

  const navigation = [
    { name: 'Home', href: 'home', current: true, icon: faHouseChimney },
    { name: 'Recipes', href: 'home/recipes', current: false, icon: faBook },
    { name: 'Your Recipes', href: 'home/my-recipes', current: false, icon: faBookOpenReader }
  ]

  const navigate = useNavigate()

  const defaultPicture = "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"

  const signOut = (e) => {
    e.preventDefault()
    setLoggedIn(false)
    setUser("")
    navigate('/login')
  }

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="fixed w-dvw bg-white ">
            <div className="flex items-center px-8 max-w-6xl mx-auto">
              <div className="flex flex-shrink-0 font-bold text-3xl flex-start">
                QWIK Recipes
              </div>
              <div className="flex text-center ml-auto pt-1">
                {user && navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'border-b-2 border-black' : 'text-gray-400 hover:text-black',
                      'pt-2 pb-1 text-xs flex flex-col min-w-24'
                    )}
                  >
                    <div>
                      <FontAwesomeIcon icon={item.icon} className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      {item.name}
                    </div>
                  </a>
                ))}
                <Menu as="div" className="relative min-w-20 flex items-center justify-center">
                  <Menu.Button className="flex rounded-full flex-col items-center text-gray-400 hover:text-black text-xs">
                    <img
                      className="h-6 w-6 rounded-full"
                      src={user ? user.Picture : defaultPicture}
                    />
                    <div>
                      Me
                    </div>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="flex flex-col items-start absolute right-0 top-14 z-10 w-48 rounded-md bg-white 
                      py-1 shadow-lg ring-1 ring-black ring-opacity-5 ">
                      {user && <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? '' : '', 'px-2 py-2 text-sm text-gray-500 w-full')}
                          >
                            <div className='flex'>
                              <div className='pr-2'>
                                <img
                                  className="h-12 w-12 rounded-full"
                                  src={user ? user.Picture : defaultPicture}
                                />
                              </div>
                              <div className='self-end flex flex-col items-start'>
                                <div className='font-bold text-black text-base'>
                                  {user.FirstName} {user.LastName}
                                </div>
                                <div className='text-black'>
                                  {user.Title}
                                </div>
                              </div>
                            </div>
                            <button className='flex justify-center w-full mt-4 mb-2 rounded-full text-forest px-2 ring-1 
                              ring-forest hover:ring-2 font-bold'>
                              Profile
                            </button>
                            <hr />
                          </a>
                        )}
                      </Menu.Item>}
                      {user && <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'underline underline-offset-2' : '', 'py-2 text-sm text-gray-500 px-4')}
                          >
                            Settings
                          </a>

                        )}
                      </Menu.Item>}
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'underline underline-offset-2' : '', 'block py-2 text-sm text-gray-500 px-4')}
                            onClick={signOut}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  )
}