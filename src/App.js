import logo from './logo.svg';
import './App.css';
import {useState} from "react";

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

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój email to {email}</h2>
            <p>{message}</p>
            <input type="text" value={email} onChange={handleChange}/>
            <button type="button" onClick={() => alert(email)}>
                Wyświetl mój e-mail w alercie
            </button>        </div>
    );
}

export default App;
