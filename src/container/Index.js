
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from '../component/Header';
import Home from "../component/Home";
import ProductDetails from '../component/ProjectDetails';
const WrapperContainer =()=>{
  
    return(
        <div>
            <Router>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/manageProducts" component={ProductDetails}/>
            </Router>
        </div>
    )
}
export default WrapperContainer;