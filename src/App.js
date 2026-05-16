// import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";

function App() {
    const [loggedIn, setLoggedIn] =
        useState(null);

    // let message;
    // if (email.length < 10) {
    //     message = <div>Ale masz małego e-maila!</div>;
    // } else if (email.length < 20) {
    //     message = <div>Twój adres e-mail jest w sam raz.</div>;
    // } else {
    //     message = <div>Nie zapychaj serwerów, skróć!.</div>;
    // }

    // function handleChange(event) {
    //     setEmail(event.target.value);
    // }

    function login(userEmail) {
        setLoggedIn(userEmail);
    }

    function logout() {
        setLoggedIn(null)
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {
                loggedIn
                    ? <UserPanel username={loggedIn} onLogout={logout}/>
                    : <LoginForm onLogin={login}/>
            }
        </div>
    );
}

export default App;
