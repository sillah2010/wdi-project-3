import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import SignUpForm from './SignUpForm'
import styled from 'styled-components';

const LoginPageStyle = styled.div`
text-align: center;
a {
    padding: 20px
    color: black
}
`

class LoginPage extends Component {
    state = {
        users: []
    }

    componentWillMount() {
        this.getAllUsers()
    }

    getAllUsers = async () => {
        try {
            const res = await axios.get('/api/users')
            this.setState({ users: res.data })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <LoginPageStyle>
                <h1>Log-In</h1>
                <h3>Please Select an Existing User or Create A New Account</h3>
                {this.state.users.map(user => {
                    return (<Link key={user._id} to={`/users/${user._id}`}>{user.username}</Link>)
                })}
                <SignUpForm />
            </LoginPageStyle>
        );
    }
}

export default LoginPage;