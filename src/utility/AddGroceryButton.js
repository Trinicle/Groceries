import { useState } from 'react'
import GroceryModal from './AddGroceryModal.js'

export default function AddGrocery(props) {
	const { username } = props;
	const [open, setOpen] = useState(false);

	return (
		<div className='pb-3 px-3'>
			<button className='flex justify-center w-full rounded-full text-forest ring-1 ring-forest hover:ring-2 font-bold' onClick={() => setOpen(true)}>
				Add Grocery
			</button>
			<GroceryModal setOpen={setOpen} open={open} username={username} />
		</div>
	)
}