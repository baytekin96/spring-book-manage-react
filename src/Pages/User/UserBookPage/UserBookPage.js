import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllBook, deleteBook } from '../../../Services/BooksService';
import Link from '../../../../node_modules/react-router-dom/Link';
import UserHeader from '../../../Components/User/UserHeader';
class UserBookPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {books:[],success:false}
        this.deleteHandle = this.deleteHandle.bind(this);
    }
    deleteHandle(id){
        deleteBook(id).then(
            data => {
                if(data.statu && data.statu===true){
                    this.loadBooks();
                }
            }   
        );
    }
    componentDidMount(){
        this.loadBooks();
    }
    loadBooks(){
        getAllBook().then(
            data => {
                if(data.statu && data.statu===true){
                    this.setState({ books:data.data.books });
                }
            }
        );
    }
    render(){
        return [
            <UserHeader />,
            <div className="container">
                <div className="row">
                    {
                        this.state.books.map((item,i) => {
                            return (
                                <div key={i} className="col-md-4">
                                    <div class="card">
                                        {/*<img class="card-img-top" src="..." alt="Card image cap" />*/}
                                        <div class="card-body">
                                            <h5 class="card-title">{item.book_name}</h5>
                                            <p class="card-text">
                                                Author: {item.author_name} {item.author_surname}
                                            </p>
                                            <a href="#" class="btn btn-primary">Add Favorite</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        ]
    }
}
export default UserBookPage