import { useState, Fragment } from 'react'
import classNames from 'classnames';
import AddGrocery from '../utility/AddGroceryButton.js';

export default function GroceryHomeList(props) {
  const { groceryData, username } = props;
  const [checked, setChecked] = useState(Array(groceryData.length).fill(false));
  console.log(groceryData)

  //TODO dynamoDB streams? something like that

  return (
    <div className="flex flex-col">
      <div className="bg-white rounded-lg ring-1 ring-gray-300">
        <h1 className="text-2xl p-3">Grocery List</h1>
        <hr />
        <ul className="p-3">
          {groceryData.map((item, index) => (
            index < 15 && <li key={item} className="flex items-center">
              <input id="default-checkbox" type="checkbox" onClick={() => {
                setChecked(prevChecked => {
                  const newChecked = [...prevChecked];
                  newChecked[index] = !newChecked[index];
                  return newChecked;
                })
              }} className="w-4 h-4 text-forest bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 mr-2" />
              <p className={classNames(checked[index] ? 'line-through text-gray-400' : '')}>{item.M.GroceryName.S}, {item.M.GroceryQuantity.S}</p>
            </li>
          ))}
        </ul>
        <div className="p-3">
          <AddGrocery username={username} />
        </div>
      </div>
    </div>
  )
}