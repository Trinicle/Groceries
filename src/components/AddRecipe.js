import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faCircleExclamation } from "@fortawesome/free-solid-svg-icons"

import classNames from 'classnames';

export default function AddRecipe(props) {
    const {recipeData, setRecipeData } = props
    const [isOpen, setIsOpen] = useState(false)
    const [recipeDescription, setRecipeDescription] = useState("")
    const [recipeName, setRecipeName] = useState("")
    const [recipeInstructions, setRecipeInstructions] = useState("")
    const [error, setError] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
  
    return (
      <>
        <div className="flex items-center p-8">
          <button
            type="button"
            onClick={openModal}
            className="rounded-md hover:bg-emerald-900 px-4 py-2 text-sm font-medium text-white bg-forest focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            Create Recipe
          </button>
        </div>
  
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>
  
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-lg leading-6 text-gray-900 font-semibold"
                    >
                      Create Recipe
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                      </p>
                    </div>
                        <form action="" className="grid gap-5 items-center pt-2">
                            <div>
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
                                    <input value={recipeName} placeholder="Username" onChange={(ev) => setRecipeName(ev.target.value)}
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
                                    <input value={recipeDescription} placeholder="Password" onChange={(ev) => setRecipeDescription(ev.target.value)} 
                                    className='border w-full text-2xl rounded-lg py-3 px-10 border-black focus:outline-none focus:ring-2 focus:ring-forest'
                                    />
                                </div>
                            </div>
                        </form>
  
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    )
}