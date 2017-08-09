import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LinkedIn from 'react-linkedin-login'

const Home = () =>
  <div>
    <h2>Home</h2>
  </div>

const About = () =>
  <div>
    <h2>About</h2>
  </div>

class Signin extends Component {
  callbackLinkedIn = code => {
    console.log(1, code)
  }
  render() {
    return (
      <div>
        <h2>Signin</h2>
        <LinkedIn
          clientId="86mqkavfnrp30f"
          text="LinkedIn Signin"
          scope={['r_basicprofile', 'r_emailaddress']}
          callback={this.callbackLinkedIn}
        />
      </div>
    )
  }
}

const BasicExample = () =>
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/signin">Signin</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/signin" component={Signin} />
    </div>
  </Router>
export default BasicExample
