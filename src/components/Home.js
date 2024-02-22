import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card.js"
import Navbar from "./Navbar.js";

export default function Home(props) {
    const { loggedIn, setLoggedIn, user, setUser } = props
    const [userData, setUserData] = useState()
    const [recipeData, setRecipeData] = useState([])
    const [groceryData, setGroceryData] = useState([])

    const navigate = useNavigate()
    useEffect(() => {
        const data = window.localStorage.getItem('loggedIn');
        setLoggedIn(JSON.parse(data))
        if(!loggedIn) navigate('/login')
        const fetchData = async (user) => {
            let result = await fetch(
                'http://localhost:5000/', {
                    method: "post",
                    body: JSON.stringify({ user }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            result = await result.json()
            setUserData(result.userData)
            setRecipeData(result.userData.Recipe)
            setGroceryData(result.userData.Grocery)
        }
        fetchData(user)
    }, [])
    const onButtonClick = () => {
        setLoggedIn(false);
        navigate('/login')
    }

    return (
        <Navbar picture={userData.Picture}/>
    )
}