import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import HomePage from './Pages/Admin/HomePage/HomePage';
import AddBookPage from './Pages/Admin/AddBookPage/AddBookPage';
import EditBookPage from './Pages/Admin/EditBookPage/EditBookPage';
import UserBookPage from './Pages/User/UserBookPage/UserBookPage';
import AuthorsPage from './Pages/Admin/AuthorsPage/AuthorsPage';
import AddAuthorPage from './Pages/Admin/AddAuthorPage/AddAuthorPage';
import EditAuthorPage from './Pages/Admin/EditAuthorPage/EditAuthorPage';
import UsersPage from './Pages/Admin/UsersPage/UsersPage';
import EditUserPage from './Pages/Admin/EditUserPage/EditUserPage';
import AddUserPage from './Pages/Admin/AddUserPage/AddUserPage';

const AppRouter = () =>(
    <Switch>
        <Route exact path="/admin" component={HomePage} />
        <Route exact path="/admin/books" component={HomePage} />
        <Route exact path="/admin/books/book/add" component={AddBookPage} />
        <Route exact path="/admin/books/book/:id/edit" component={EditBookPage} />
        <Route exact path="/admin/authors" component={AuthorsPage} />
        <Route exact path="/admin/authors/author/add" component={AddAuthorPage} />
        <Route exact path="/admin/authors/author/:id/edit" component={EditAuthorPage} />
        <Route exact path="/admin/users" component={UsersPage} />
        <Route exact path="/admin/users/user/add" component={AddUserPage} />
        <Route exact path="/admin/users/user/:id/edit" component={EditUserPage} />        
        <Route exact path="/" component={UserBookPage} />
        
    </Switch>
);
export default AppRouter;