import { Link } from "react-router-dom"
const Footer=()=>{
    return(
        <footer>
            <div className="footer">
                <div className="footer-items">
                    <h3>Navigation</h3>
                <Link className="link" to={"/"}>Home</Link>
                <Link className="link">About</Link>
                <Link className="link">Menu</Link>
                <Link className="link" to={"/BookingPage"}>Reservations</Link>
                <Link className="link">Order online</Link>
                <Link className="link">Login</Link>
                </div>
                <div className="footer-items">
                    <h3>Contact</h3>
                    <p>Little Lemon</p>
                    <p>123456789</p>
                    <p>littlelemon@gmail.com</p>
                </div>
                <div className="footer-items">
                    <h3>Social Media</h3>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer