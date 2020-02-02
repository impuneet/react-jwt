import React, { Component } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
class Login extends Component {

    
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.change = this.change.bind(this);
    }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submit(e) {
        e.preventDefault();
        axios.post('http://localhost:3001/api/user/login/', {
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            cookies.set('auth-token', res.data.token);
            cookies.set('_id', res.data._id);
            this.props.history.push('/profile');
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.submit(e)}>
                    <label>Email</label>
                    <input type="text" name="email" value={this.state.email} onChange={e => this.change(e)} />
                    <label>password</label>
                    <input type="password" name="password" value={this.state.password} onChange={e => this.change(e)} />
                    <input type="submit" name="submit"></input>
                </form>
            </div>
        );
    }
}

export default Login;