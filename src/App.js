// import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";
import MeetingsPage from "./meetings/MeetingsPage";

function App() {
    const [loggedIn, setLoggedIn] =
        useState(null);

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
                    ? <>
                        <UserPanel username={loggedIn} onLogout={logout}/>
                        <MeetingsPage username={loggedIn} onLogout={logout}/>
                    </>
                    : <div> <LoginForm onLogin={login}/>
                </div>

            }
        </div>
    );
}

export default App;
