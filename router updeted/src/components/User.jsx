import { Link, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function User() {
    let { userId } = useParams();
    userId = parseInt(userId);
    console.log(userId);
    let [usersArray, setUsersArray] = useState([])
    let location  = useLocation()
    console.log(location)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setUsersArray(data))
      },[])

    const user = usersArray && usersArray.length > userId ? usersArray[userId] : null;

    return (
        <section className='user-container'>
            <h1>USER</h1>
            <p>{location.pathname}</p>
            {!user ? <h1>User data is not available or loading.</h1> :
            <ul>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
            </ul>}
        </section>
    );
}

export default User;
