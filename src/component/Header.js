import { Link } from "react-router-dom";
const Header =()=>{
    return(
        <div className="headersection">
            <div className="header container p-1" style={{padding:'0px'}}>
                <div>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/23-animals-and-nature/monkey-face-animal.png" alt="loading...."
                        style={{width:"30px",height:"30px"}} >
                    </img>
                </div>
                <div>
                    <Link style={{marginRight:"15px",color:"black"}} to="/">Home </Link>
                    <Link style={{color:"black"}} to="/manageProducts"> Manage products </Link>
                </div>
                <div>Shoping cart</div>
            </div>
        </div>
    )
}
export default Header;