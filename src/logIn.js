import React, { Component } from 'react';
import Facebook from './asset/Facebook'

class Login extends Component {


    render() {

        return (

            <div>
                <div style={{position:'absolute',backgroundColor:'#f2f2f2',height:'100%',width:'100%'}} class="d-flex justify-content-center align-items-center">
                <Facebook />
                </div>
                



            </div>
        );
    }
}

export default Login;
