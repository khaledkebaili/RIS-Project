import './login.css';
import { useNavigate } from 'react-router-dom';
import userIcon from './assets/user.png';
import passwordIcon from './assets/padlock.png';
import facebookIcon from './assets/facebook.png';
import linkedinIcon from './assets/linkedin.png';
import instagramIcon from './assets/social.png';
import loginImage from './assets/login.png';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Add login logic here

    // Navigate to the dashboard upon successful login
    navigate('dashboard');
  };

  return (
    <div className="container m-0 p-0">
      <div className="row">
        <div className="col-md-8 d-none d-md-block">
          <img src={loginImage} className="img-fluid" alt="Radiology Information System login" />
          <div className="overlay-text">
            <h1>Radiology Information System</h1>
            <p>Welcome to the Radiology Information System (RIS). This comprehensive platform is designed to streamline the workflow of radiology departments and improve patient care.</p>
          </div>
        </div>

        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <div className="login-form p-4">
            <h1 className="login-header">Sign in</h1>
            <form onSubmit={handleLogin}>
              <div className="position-relative mt-5">
                <img src={userIcon} className="user-icon" alt="User" />
                <input
                  type="email"
                  className="login-input"
                  id="username"
                  placeholder="Username"
                  aria-label="Username"
                  required
                />
              </div>

              <div className="mb-3 position-relative mt-4">
                <img src={passwordIcon} className="user-icon" alt="Password" />
                <input
                  type="password"
                  className="login-input pr-3"
                  id="password"
                  placeholder="Password"
                  aria-label="Password"
                  required
                />
              </div>
              <button type="submit" className="submit w-50 mt-4">Login</button>
            </form>

            <div className="login-comment mt-5 d-flex flex-column align-items-center">
              <p className="fs-5 mb-3">Or Sign in with other platforms</p>
              <div className="social-icons">
                <a href="https://facebook.com"><img src={facebookIcon} alt="Facebook" className="social-icon" /></a>
                <a href="https://linkedin.com"><img src={linkedinIcon} alt="LinkedIn" className="social-icon" /></a>
                <a href="https://instagram.com"><img src={instagramIcon} alt="Instagram" className="social-icon" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
