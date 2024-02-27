import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card.js"
import AddRecipe from "./AddRecipe.js"
import Navbar from "./Navbar.js";
import GroceryHomeList from "./GroceryHomeList.js"

export default function Home(props) {
    const { loggedIn, setLoggedIn, user, setUser } = props
    const [userData, setUserData] = useState()
    const [recipeData, setRecipeData] = useState([])
    const [groceryData, setGroceryData] = useState([])
    const guestPicture = 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'

    const navigate = useNavigate()
    useEffect(() => {
        const isLoggedIn = window.localStorage.getItem('loggedIn');
        setLoggedIn(JSON.parse(isLoggedIn))
        if(!loggedIn) navigate('/login')

        if(user === "") {

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
                setGroceryData(data.Groceries)
                console.log(data)
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
            <Navbar user={userData} guest={user === ""} setLoggedIn={setLoggedIn} setUser={setUser}/>
            {recipeData.forEach(recipe => {
                <Card recipe={recipe}/>
            })}
            <div className="pt-52px">
                <div className="max-w-4xl mx-auto">
                    <div className="mt-8 grid grid-cols-3-6 gap-6">
                        <div>
                            {/*   Groceries and add Groceries                           */}
                            <GroceryHomeList groceryData={groceryData} username={userData ? userData.Username : null }/>
                        </div>
                        <div>
                             {/*      All recipes                        */}
                             <AddRecipe recipeData={recipeData} setRecipeSData={setRecipeData}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}