import { useState } from "react";
const BookingPage = () => {
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");
    const [guests,setGuests]=useState("");
    const [occation,setOccation]=useState("")
    const[availableTimes,setAvailabletimes]=useState([]);
    // console.log(date,time,guests,occation)
    return (
        <>
            {/* <h1>BookingPage</h1> */}
            <div className="container">
            <form style={{display: 'grid',maxWidth: '200px', gap: '20px'}}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" onChange={async(e)=>{setDate(e.target.value)}}/>
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time " onChange={(e)=>{setTime(e.target.value)}}>
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e)=>{setGuests(e.target.value)}}/>
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" onChange={(e)=>{setOccation(e.target.value)}}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                        <input type="submit" value="Make Your reservation"/>
                        </form>
                        </div>
                    </>
                    )
}
                    export default BookingPage;