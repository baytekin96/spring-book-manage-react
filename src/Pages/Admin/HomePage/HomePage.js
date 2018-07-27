import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../../Components/Common/Header';
import { getAllBook, deleteBook } from '../../../Services/BooksService';
import Link from '../../../../node_modules/react-router-dom/Link';
class HomePage extends React.Component{
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
            <Header />,
            <div className="container">
                <div className="row">
                    <table class="table table-bordered col-md-12">
                        <thead>
                            <tr>
                                <th scope="col">Book Name</th>
                                <th scope="col">Author Name</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.books.map((item,i) => {
                                return (
                                    <tr key={i}>
                                        <td>{item.book_name}</td>
                                        <td>{item.author_name} {item.author_surname}</td>
                                        <td>
                                            <Link class="btn btn-warning" to={"/admin/books/book/"+item.book_id+"/edit"}>Edit</Link>
                                            <button className="btn btn-danger ml-1" onClick={()=>{this.deleteHandle(item.book_id)}}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        ]
    }
}
export default HomePage