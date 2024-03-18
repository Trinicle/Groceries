import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons"
import classNames from 'classnames';

export default function GroceryHomeList(props) {
  const { listData, setListData, username } = props;
  const [checked, setChecked] = useState(Array(listData.length).fill(false));
  const [listClicked, setListClicked] = useState({})
  const [groceryName, setGroceryName] = useState("")

  const handleCheck = (index) => {
    setChecked(prevChecked => {
      const newChecked = [...prevChecked];
      newChecked[index] = !newChecked[index];
      return newChecked;
    })
  }

  const handleListClick = (item) => {
    setListClicked(listClicked == item ? {} : item);
  }

  return (
    <div className="flex flex-col">
      <div className="bg-white rounded-lg ring-1 ring-gray-300">
        <h1 className="text-2xl p-3 text-center font-paytone">GROCERY LISTS</h1>
        <hr />
        <ul className="pt-3 px-7">
          {listData.map((item) => (
            <li key={item.Name} className='flex pb-2 items-center'>
              <div className='flex flex-col w-full'>
                <div className='flex items-center' onClick={() => handleListClick(item)}>
                  <FontAwesomeIcon icon={listClicked == item ? faCaretUp : faCaretDown} style={{ color: "black" }} className='text-lg pr-2' />
                  <div className='text-lg font-extrabold'>
                    {item.Name.toUpperCase()}
                  </div>
                  <span className='flex ml-auto bg-gray-300 px-2 rounded-full font-semibold text-white text-sm justify-center items-center'>
                    {item.Groceries.length}
                  </span>
                </div>
                {<ul className={classNames(listClicked == item ? '' : 'hidden', 'pt-2 none')}>
                  {item.Groceries.map((grocery, index) => (
                    <li key={grocery.S} className="flex items-center">
                      <input id="default-checkbox" type="checkbox" onClick={() => handleCheck(index)} className="w-4 h-4 text-forest bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 mr-2" />
                      <p className={classNames(checked[index] ? 'line-through text-gray-400' : '', 'pl-3')}>{grocery.S}</p>
                    </li>
                  ))}
                </ul>}
                <div className={classNames(listClicked == item ? '' : 'hidden', 'w-full pt-4 pb-2')}>
                  <input value={groceryName} placeholder="Add a grocery item" onChange={(ev) => setGroceryName(ev.target.value)}
                    className='border-gray-400 border text-md rounded-full py-1 px-3 focus:outline-none focus:ring-1 focus:ring-forest w-full'
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <hr/>
        <div className='w-full p-3'>
          <input value={groceryName} placeholder="Add a list" onChange={(ev) => setGroceryName(ev.target.value)}
            className='border-gray-400 border text-md rounded-full py-1 px-3 focus:outline-none focus:ring-1 focus:ring-forest w-full'
          />
        </div>
      </div>
    </div>
  )
}