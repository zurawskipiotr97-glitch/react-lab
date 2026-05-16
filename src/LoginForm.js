import {useState} from "react";

export default function LoginForm(props) {
    const [email, setEmail] = useState('');

    let message;
    if (email.length === 0) {
        message = <div>Wpisz cokolwiek, żeby przejść dalej!</div>
    }
    else if (email.length < 10) {
        message = <div>Ale masz małego e-maila!</div>;
    } else if (email.length < 20) {
        message = <div>Twój adres e-mail jest w sam raz.</div>;
    } else {
        message = <div>Nie zapychaj serwerów, skróć!.</div>;
    }

    return <div>
        <label>Zaloguj się e-mailem</label>
        <input type="text" value={email} onChange={
            (e) => setEmail(e.target.value)}/>
        {/*<p>{message}</p>*/}
        <button type="button" onClick={
            () => props.onLogin(email)}>
            Wchodzę
        </button>
    </div>;
}