import React from 'react';
import Link from '../../../node_modules/react-router-dom/Link';
class UserHeader extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to={"/"}>Books System</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link class="nav-link" to={"/"}>Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link" to={"/admin/"}>Admin</Link>
                        </li>                        
                    </ul>
                </div>
            </nav>
        )
    }
}
export default UserHeader;