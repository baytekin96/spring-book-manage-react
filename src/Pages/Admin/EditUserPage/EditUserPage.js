import React from 'react'
import Header from '../../../Components/Common/Header';
import Redirect from '../../../../node_modules/react-router-dom/Redirect';
import { updateUser, getUser } from '../../../Services/UsersService';

class EditUserPage extends React.Component {
    constructor(props){
        super(props)
        this.state = { user:{user_name:"",user_surname:"",user_email:"",user_password:"",user_role:""},message:"",redirect:false};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        var newUser = this.state.user;
        newUser[event.target.name]=event.target.value;
        this.setState({user:newUser})
    }
    handleClick(){
        this.setState({message:""});
        var inputs = ["user_role","user_password","user_email","user_surname","user_name"]
        let that = this;
        var check = true;
        inputs.forEach(function(input) {
            if(that.state.user[input] === undefined || that.state.user[input] ===""){
                 that.setState({message:"Please fill "+input+" field"});
                 check = false;
            }
        });
        if(check){
            updateUser(this.state.user).then(data => {
                if(data.statu && data.statu===true){
                    this.setState({redirect:true});  
                }else{
                    that.setState({message:data.message});
                }
            });
        }
    }
    componentDidMount(){       
        getUser(this.props.match.params.id).then((data) => {
            if(data.statu && data.statu===true){
                this.setState({ user:data.data.user });
            }else{
                this.setState({redirect:true});
            }
        });
    }

    render() {
        if(this.state.redirect)
            return <Redirect replace to="/admin/users" />
        return [
            <Header />,
            <div className="container">
                <form style={{border:'1px solid #ccc', padding:'20px', borderRadius:'5px',marginBottom:'150px', Background:'#fff'}} method="post">
                    <div class="alert alert-danger" style={{display:(this.state.message==="")?'none':'block'}}>
                        {this.state.message}
                    </div>
                    <div class="form-group">
                        <label>User Name: </label> 
                        <input type="text"  className="form-control" placeholder="User Name" name="user_name" value={this.state.user.user_name} onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label>User Surname: </label> 
                        <input type="text"  className="form-control" placeholder="User Surname" name="user_surname" value={this.state.user.user_surname} onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label>User Email: </label> 
                        <input type="text"  className="form-control" placeholder="User Email" name="user_email" value={this.state.user.user_email} onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label>User Password: </label> 
                        <input type="text"  className="form-control" placeholder="User Password" name="user_password" value={this.state.user.user_password} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Role: </label> 
                        <select className="form-control" name="user_role" value={this.state.user.user_role} onChange={this.handleChange}>
                            <option value="">Select a role</option>
                            <option value="ROLE_ADMIN">Admin</option>
                            <option value="ROLE_USER">User</option>
                        </select>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.handleClick}>Edit User</button>
                </form>
            </div>
        ]
    }
}
export default EditUserPage;