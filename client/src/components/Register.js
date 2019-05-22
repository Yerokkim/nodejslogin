import React ,{Component} from 'react'
import {register} from './UserFunction'
//import { Button } from 'react-bootstrap';

class Register extends Component{

    constructor(){
        super()
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            password:''
        }

        this.onChange =this.onChange.bind(this)
        this.onSubmit = this.onChange.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const user={
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            email:this.state.email,
            password:this.state.password
        }

        register(user).then(res=>{
            if(res){
                this.props.history.push('/login')
            }
        })
    }

    render(){
        return(
           
            <div>
             < h1> heoooo </h1>
            <div className="row">
            <div className="col-md-6 mt-5 max-auto">
            <form noValidate onSubmit ={this.onSubmit}>
            <h1>Sign in</h1>
            <div className="form-group">
                <label htmlFor="first_name"> first_name</label>
                < input type = "first_name"
                className = "form-control"
                name = "first_name"
                value={this.state.first_name}
                onChange={this.onChange}/>
            </div>
             <div className="form-group">
                <label htmlFor="last_name"> lastname</label>
                < input type = "last_name"
                className = "form-control"
                name = "last_name"
                value={this.state.last_name}
                onChange={this.onChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" className="form-control"
                name="email" 
                value={this.state.email}
                onChange={this.onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">password</label>
                <input type="password" className="form-control"
                name="password" 
                value={this.state.password}
                onChange={this.onChange}/>
            </div>
            <button type="submit" className="btn btn-lg btn-primary">
                    Join us!
            </button>

            </form>
            </div>
            </div>
            </div>
        )
    }
}

export default Register