export default function UserPanel(props) {
    return (
        <div className="clearfix">
            <h2 className="float-left " >Witaj {props.username}!</h2>
            <button className="float-right button button-outline" type="button" onClick={props.onLogout}>
                Wyloguj
            </button>
        </div>
    );
}