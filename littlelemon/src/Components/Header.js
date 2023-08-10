import { useNavigate } from "react-router-dom"


const Header=()=>{
    const Navigate=useNavigate();
    const reserve=()=>{Navigate("/BookingPage")}
    return(
        <header>
            <div className="hero">
                <div className="hero-text-wrap">
                    <div>
                    <h1 className="title">Little Lemon</h1>
                    <h3 className="tag">Chicago</h3>
                    </div>
                    <div>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="btn" onClick={reserve}>Reserve a Table</button>
                    </div>

                </div>
                <div className="hero-img-wrap">
                    <img src="./images/restauranfood.jpg" alt="restaurant food" className="hreo-img"/>

                </div>
            </div>
        </header>
    )
}
export default Header