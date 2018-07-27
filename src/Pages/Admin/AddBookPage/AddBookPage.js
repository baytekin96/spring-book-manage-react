import React from 'react'
import { addBook } from '../../../Services/BooksService';
import Header from '../../../Components/Common/Header';
import { getAllAuthors } from '../../../Services/AuthorsService';
import Redirect from '../../../../node_modules/react-router-dom/Redirect';

class AddBookPage extends React.Component {
    constructor(props){
        super(props)
        this.state = { book:{author_id:0,book_name:""},message:"", authors:[],redirect:false};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        var newBook = this.state.book;
        newBook[event.target.name]=event.target.value;
        this.setState({book:newBook})
    }
    handleClick(){
        this.setState({message:""});
        let that = this;
        var check = true;
        if(that.state.book["author_id"] === undefined || that.state.book["author_id"] ===0){
            that.setState({message:"Please fill author field"});
            check = false;
        }
        if(that.state.book["book_name"] === undefined || that.state.book["book_name"] ===""){
            that.setState({message:"Please fill book name field"});
            check = false;
        }
        if(check){
            addBook(this.state.book).then(data => {
                if(data.statu && data.statu===true){
                    this.setState({redirect:true});  
                }else{
                    that.setState({message:data.message});
                }
            });
        }
    }
    componentDidMount(){       
        getAllAuthors().then((data) => {
            if(data.statu && data.statu===true){
                this.setState({ authors:data.data.authors });
            }
        });
    }

    render() {
        if(this.state.redirect)
            return <Redirect replace to="/admin/books" />
        return [
            <Header />,
            <div className="container">
                <form style={{border:'1px solid #ccc', padding:'20px', borderRadius:'5px',marginBottom:'150px', Background:'#fff'}} method="post">
                    <div class="alert alert-danger" style={{display:(this.state.message==="")?'none':'block'}}>
                        {this.state.message}
                    </div>
                    <div class="form-group">
                        <label>Book Name: </label> 
                        <input type="text"  className="form-control" placeholder="Book Name" name="book_name" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Author: </label> 
                        <select className="form-control" name="author_id" onChange={this.handleChange}>
                            <option value="0">Select an Author</option>
                        {
                            this.state.authors.map(function(item,i){
                                return (
                                    <option value={item.author_id}>{item.author_name} {item.author_surname}</option>
                                )
                            })
                        }
                        </select>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.handleClick}>Kaydet</button>
                </form>
            </div>
        ]
    }
}
export default AddBookPage;