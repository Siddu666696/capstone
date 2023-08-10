import { Link } from "react-router-dom"
// import BookingPage from "./BookingPage"
const Nav=()=>{

    return(
        <nav>
            <div><Link to={"/"}><img src={"./images/logo-1.jpg"} alt="logo" className="logo"/></Link></div>
            <div className="menu">
                <Link className="link" to={"/"}>Home</Link>
                <Link className="link">About</Link>
                <Link className="link">Menu</Link>
                <Link className="link" to={"/BookingPage"}>Reservations</Link>
                <Link className="link">Order online</Link>
                <Link className="link">Login</Link>
            </div>
        </nav>
    )

}
export default Nav