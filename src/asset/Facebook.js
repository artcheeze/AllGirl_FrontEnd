import React, { Component } from 'react';
import FacebookLogin from "react-facebook-login";

class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
    };

    responseFacebook = res => {
        this.setState({
            isLoggedIn: true,
            userID: res.id,
            name: res.name,
            email: res.email,
            picture: res.picture.data.url

        })
    }



    render() {
        let fbContent;
     
        if (this.state.isLoggedIn) {
            fbContent = (
                <div>
                    <div class="animated bounceInLeft delay-0.5s text-center" style={{ width: '5rem' }}>
                        <img class="card-img-top rounded-circle" src={this.state.picture} alt={this.state.name}  />
                       
                            <h3 style={{color:'#395d96',marginTop:'10px'}}>{this.state.name}</h3>
                      
                    </div>

                </div>

            );
        } else {
            fbContent = (
                <FacebookLogin
                    appId="2214975425490479"
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                 
                />
            );
        }
        return <div className="animated bounceIn">{fbContent}</div>;
    }
}

export default Facebook;
