import { useState } from 'react'
import classNames from 'classnames';

export default function GroceryHomeList(props) {
  const { listData, setListData, username } = props;
  const [checked, setChecked] = useState(Array(listData.length).fill(false));
  const [groceryName, setGroceryName] = useState("")

  const handleCheck = (index) => {
    setChecked(prevChecked => {
      const newChecked = [...prevChecked];
      newChecked[index] = !newChecked[index];
      return newChecked;
    })
  }

  return (
    <div className="flex flex-col">
      <div className="bg-white rounded-lg ring-1 ring-gray-300">
        <h1 className="text-2xl p-3 text-center font-paytone">GROCERY LISTS</h1>
        <hr />
        <ul className="py-3 px-7">
          {listData.map((item) => (
            <li className='font-bold'>{item.Name.toUpperCase()}</li>
          ))}
          {/* {listData.map((item, index) => (
            index < 40 && <li key={item} className="flex items-center">
              <input id="default-checkbox" type="checkbox" onClick={handleCheck(index)} className="w-4 h-4 text-forest bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 mr-2" />
              <p className={classNames(checked[index] ? 'line-through text-gray-400' : '')}>{item.M.GroceryName.S}, {item.M.GroceryQuantity.S}</p>
            </li>
          ))} */}
        </ul>
        <div className='w-full p-3'>
          <input value={groceryName} placeholder="Add a grocery item" onChange={(ev) => setGroceryName(ev.target.value)}
            className='border-gray-400 border text-md rounded-full py-1 px-3 focus:outline-none focus:ring-1 focus:ring-forest w-full'
          />
        </div>
      </div>
    </div>
  )
}