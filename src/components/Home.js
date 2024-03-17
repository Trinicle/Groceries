import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeFeed from "../views/RecipeFeed.js"
import Navbar from "./Navbar.js";
import GroceryHomeList from "../views/GroceryHomeList.js"
import Lists from "../views/Lists.js"

const guestPicture = 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'

export default function Home(props) {
	const { loggedIn, setLoggedIn, user, setUser } = props

	const [userData, setUserData] = useState()
	const [recipeData, setRecipeData] = useState([])
	const [listData, setListData] = useState([])
	const navigate = useNavigate()

	useEffect(() => {
		const isLoggedIn = window.localStorage.getItem('loggedIn');
		setLoggedIn(JSON.parse(isLoggedIn))
		if (!loggedIn) navigate('/login')

		if (user === "") {

		} else {
			const fetchData = async (user) => {
				let result = await fetch(
					`http://localhost:5000/home/${user}`, {
					method: "get",
					headers: {
						'Content-Type': 'application/json'
					}
				})
				result = await result.json()
				const data = result.Response
				setUserData(data)
				setRecipeData(data.Recipes)
				setListData(data.Lists)
			}
			fetchData(user)
		}
	}, [])

	const onButtonClick = () => {
		setLoggedIn(false);
		navigate('/login')
	}

	return (
		<div className="bg-warm-gray h-dvh">
			<Navbar user={userData} guest={user === ""} setLoggedIn={setLoggedIn} setUser={setUser} />
			<div className="pt-52px">
				<div className="max-w-[100rem] mx-auto">
					<div className="mt-8 grid grid-cols-home gap-6">
						<GroceryHomeList listData={listData} setListData={setListData} username={userData?.Username} />
						<RecipeFeed recipeData={recipeData} setRecipeSData={setRecipeData} />
					</div>
				</div>
			</div>
		</div>
	)
}