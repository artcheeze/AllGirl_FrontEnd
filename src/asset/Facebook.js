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

                    <div class="card animated bounceInLeft delay-0.5s" style={{ width: '5rem' }}>
                        <img class="card-img-top" src={this.state.picture} alt={this.state.name} />
                        <div class="card-body">
                            <p class="card-text">{this.state.name}</p>
                        </div>
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
