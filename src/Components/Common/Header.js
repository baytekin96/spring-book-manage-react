import React from 'react';
import Link from '../../../node_modules/react-router-dom/Link';
class Header extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to={"/admin"}>Books System</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><Link class="nav-link" to={"/admin"}>Books</Link></li>
                        <li className="nav-item"><Link class="nav-link" to={"/admin/books/book/add"}>Add Book</Link></li>
                        <li className="nav-item"><Link class="nav-link" to={"/admin/authors"}>Authors</Link></li>
                        <li className="nav-item"><Link class="nav-link" to={"/admin/authors/author/add"}>Add Author</Link></li>
                        <li className="nav-item"><Link class="nav-link" to={"/admin/users"}>Users</Link></li>
                        <li className="nav-item"><Link class="nav-link" to={"/admin/users/user/add"}>Add User</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Header;