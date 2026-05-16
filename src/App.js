// import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";

function App() {
    const [email, setEmail] =
        useState('zurawskipiotr97@gmail.com');

    let message;
    if (email.length < 10) {
        message = <div>Ale masz małego e-maila!</div>;
    } else if (email.length < 20) {
        message = <div>Twój adres e-mail jest w sam raz.</div>;
    } else {
        message = <div>Nie zapychaj serwerów, skróć!.</div>;
    }

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function handleChangeScreen(value) {
        setScreen(value)
    }

    const [screen, setScreen] =
        useState('start')

    return (
        <div>
            <h1>Witaj w systemie do zapisów na zajęcia</h1>
            { screen==='start' && <div>
                <p>Zaloguj się e-mailem: <input type="text" value={email} onChange={handleChange}/>
                    <button type="button" onClick={() => handleChangeScreen('welcome')}>
                        Wchodzę
                    </button></p>
                {/*<p>{message}</p>*/}
            </div>}
            { screen==='welcome' && <div>
                <h2>Witaj {email}</h2>
                <button type="button" onClick={() => handleChangeScreen('start')}>
                    Wyloguj
                </button>
            </div> }
        </div>

    );
}

export default App;
