import React from 'react';
import './login.css'

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return ( 
      <div>
        <div className='form-container'>
          <div className='label-wrapper'>
            <label className='login-label'>LOG IN</label>
          </div>
          <form onSubmit={this.handleSubmit} className="login-form">
            <div className='input-wrapper'>
              <input
                prefix={<icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />
            </div>
            <div className='input-wrapper'>
              <input
                prefix={<icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />
            </div>
            <div>
              <button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </button>
              <a href="#" className='forgot-text'>Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
     );
  }
}
 
export default Login;