import React, { Component } from 'react';
import { getJWT } from '../helper/helper';
import axios from 'axios';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: undefined
        }
    }

    componentDidMount() {
        const jwt = getJWT();
        console.log('getting jwt', jwt);
        if (!jwt) {
            this.props.history.push('/login');
        } else {
            axios.post('http://localhost:3001/api/post', {}, {
                headers: {
                    'auth-token': jwt
                }
            }).then(res => {
                this.setState({
                    user: res.data
                })
            }).catch(e => {
                console.log(e);
                this.props.history.push('/login');
            })
        }
    }



    render() {
        if (this.state.user === undefined) {
            return (
                <div><h1>Loading</h1></div>
            );
        }
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Profile;
