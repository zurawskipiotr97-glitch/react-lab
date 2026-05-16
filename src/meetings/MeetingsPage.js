import {useState} from "react";
import NewMeetingForm from "./NewMeetingForm";
import MeetingsList from "./MeetingsList";

export default function MeetingsPage() {
    const [meetings, setMeetings] = useState([]);

    const [addNewClick, setAddNewClick] = useState(false)

    function handleNewMeeting(meeting) {
        const nextMeetings = [...meetings, meeting];
        setMeetings(nextMeetings);
    }

    function handleClick() {
        setAddNewClick(true)

    }

    return (
        <div>
            {
                addNewClick
                    ?   <div>
                        {/*<h2>Dodaj nowe spotkanie</h2>*/}
                        <NewMeetingForm onSubmit={(meeting) => handleNewMeeting(meeting)}/>

                        {
                            meetings.length===0
                                ?   <p>Brak zaplanowanych spotkań</p>
                                :   <>
                                    <h3>Zaplanowane spotkania ({meetings.length})</h3>
                                    <MeetingsList meetings={meetings}/>

                                </>
                            }
                    </div>
                    :   <div>
                        <button onClick={() => handleClick()}>
                            Dodaj nowe spotkanie
                        </button>
                        {
                            meetings.length===0
                                ?   <p>Brak zaplanowanych spotkań</p>
                                :   <>
                                    <h3>Zaplanowane spotkania ({meetings.length})</h3>
                                    <MeetingsList meetings={meetings}/>

                                </>
                        }

                    </div>

            }

        </div>


    )
}