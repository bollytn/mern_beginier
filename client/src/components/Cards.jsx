import { useState, useEffect } from 'react'
import Axios from 'axios'

/*
const users = [
    {
        name: "mahjoubi bilel",
        age: 40,
        email: "mahjoubi.bilel@gmail.com"
    }
]
*/

const Cards = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/users')
            .then((response) => {
                setUsers(response.data)
            })
            .catch((error) => {
                console.error("There was an error fetching the users!", error);
            });
    }, [])


    return (
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user, index) => {
                return (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h1 className="text-xl font-bold text-gray-800">{user.name}</h1>
                        <p className="text-gray-600 mt-2">Age: {user.age}</p>
                        <p className="text-gray-600 mt-1">{user.email}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards