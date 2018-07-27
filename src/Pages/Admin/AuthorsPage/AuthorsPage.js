import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../../Components/Common/Header';
import Link from '../../../../node_modules/react-router-dom/Link';
import { getAllAuthors, deleteAuthor } from '../../../Services/AuthorsService';
class AuthorsPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {authors:[],success:false}
        this.deleteHandle = this.deleteHandle.bind(this);
    }
    deleteHandle(id){
        deleteAuthor(id).then(
            data => {
                if(data.statu && data.statu===true){
                    this.loadAuthors();
                }
            }   
        );
    }
    componentDidMount(){
        this.loadAuthors();
    }
    loadAuthors(){
        getAllAuthors().then(
            data => {
                if(data.statu && data.statu===true){
                    this.setState({ authors:data.data.authors });
                }
            }
        );
    }
    render(){
        return [
            <Header />,
            <div className="container">
                <div className="row">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Author Firstname</th>
                                <th scope="col">Author Lastname</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.authors.map((item,i) => {
                                return (
                                    <tr key={i}>
                                        <td>{item.author_name}</td>
                                        <td>{item.author_surname}</td>
                                        <td>
                                            <Link class="btn btn-warning" to={"/admin/authors/author/"+item.author_id+"/edit"}>Edit</Link>
                                            <button className="btn btn-danger ml-1" onClick={()=>{this.deleteHandle(item.author_id)}}>Delete</button>
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
export default AuthorsPage