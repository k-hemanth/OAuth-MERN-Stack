import React, { Component } from 'react'
import axios from "axios"


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      previousLogin: false
    }
  }


  componentDidMount() {
    document.addEventListener('FBObjectReady', this.initializeFacebookLogin);
  }

  componentWillUnmount() {
    document.removeEventListener('FBObjectReady', this.initializeFacebookLogin);
  }

  initializeFacebookLogin = () => {
    this.FB = window.FB;
    this.checkLoginStatus();
  }

  checkLoginStatus = () => {
    this.FB.getLoginStatus(this.facebookLoginHandler);
  }


  facebookLogin = () => {
    if (!this.FB) return;

    this.FB.getLoginStatus(response => {
      if (response.status === 'connected') {
        this.facebookLoginHandler(response);
      } else {
        this.FB.login(this.facebookLoginHandler, { scope: 'public_profile' });
      }
    });
  }


  facebookLoginHandler = response => {
    if (response.status === 'connected') {
      this.FB.api('/me', userData => {
        axios.post("http://localhost:5000/api/login", userData).then((data) => {
          this.setState({ username: data.data.message.name, previousLogin: data.data.message.previousLogin })
        })
      });
    } else {
      //Throw Error
    }
  }



  render() {
    const { username, previousLogin } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Social Media Login</h1>
        </header>

        <div className="App-intro">
          {!username &&
            <div>
              <p>Click on one of any button below to login</p>
              <button onClick={this.facebookLogin}>Facebook</button>
            </div>
          }
          {(username && previousLogin) &&
            <p>Hi {username}, Welcome back</p>
          }

          {(username && !previousLogin) &&
            <p>Hi {username}</p>
          }
        </div>
      </div>
    );
  }
}
