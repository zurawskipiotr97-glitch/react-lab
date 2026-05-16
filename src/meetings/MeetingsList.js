import {useState} from "react";

export default function MeetingsList({meetings}) {
    const [contestants, setContestants] = useState([])

    function handleNewContestatn() {

    }

    function handleDeleteContestant() {

    }

    function handleDeleteMeeting() {

    }

    return (
        <table>
            <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
                <th>Uczestnicy</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                meetings.map((meeting, index) => <tr key={index}>
                    <td>{meeting.title}</td>
                    <td>{meeting.description}</td>
                    <td>{meeting.contestants}</td>
                    <td float-left>
                        {<div className="float-right">
                            {
                               true
                            //        dopisz jakiś sensowny warunek

                            ? <button className="button button-outline">Zapisz się</button>
                            : <button className="button button-outline">Wypisz się</button>
                            }

                            {contestants.length === 0 && (
                                <button className="button" style={{ marginLeft: '5px' }}>
                                    Usuń puste spotkanie
                                </button>
                            )}
                        </div>
                            }

                        </td>
                        {/*    opcje do wyboru, zapisz, wypisz usuń puste*/}
                            </tr>)
                        }
                    </tbody>
                </table>
    );
}