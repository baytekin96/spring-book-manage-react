import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../../Components/Common/Header';
import Link from '../../../../node_modules/react-router-dom/Link';
import { getAllUsers, deleteUser } from '../../../Services/UsersService';
class UsersPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {users:[],success:false}
        this.deleteHandle = this.deleteHandle.bind(this);
    }
    deleteHandle(id){
        deleteUser(id).then(
            data => {
                if(data.statu && data.statu===true){
                    this.loadUsers();
                }
            }   
        );
    }
    componentDidMount(){
        this.loadUsers();
    }
    loadUsers(){
        getAllUsers().then(
            data => {
                if(data.statu && data.statu===true){
                    this.setState({ users:data.data.users });
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
                                <th scope="col">User Firstname</th>
                                <th scope="col">User Lastname</th>
                                <th scope="col">User Email</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users.map((item,i) => {
                                return (
                                    <tr key={i}>
                                        <td>{item.user_name}</td>
                                        <td>{item.user_surname}</td>
                                        <td>{item.user_email}</td>
                                        <td>
                                            <Link class="btn btn-warning" to={"/admin/users/user/"+item.user_id+"/edit"}>Edit</Link>
                                            <button className="btn btn-danger ml-1" onClick={()=>{this.deleteHandle(item.user_id)}}>Delete</button>
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
export default UsersPage