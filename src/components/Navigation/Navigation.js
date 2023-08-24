import React , {Component} from "react";
import Logo from "../Logo/Logo";


class Navigation extends Component {
    render(){
        return (<nav className="ma1" style={{display:"flex",justifyContent:"space-between"}}>
            <Logo />
            <p className='f3 link dim black underline pa3 pointer '>Sign Out</p>
        </nav>);
    }
}
export default Navigation;