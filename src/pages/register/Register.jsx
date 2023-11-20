import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>SST Social.</h1>
          <p>
          Swipe right into a world of endless posts 
            and endless grins. Where selfies are epic and
             memories, oh, so sweet. Follow the hashtags,
              share the love, be a part of the beat. Your social 
              media passport to happiness is here, ready to
              make your moments complete.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <Link to="/">
            <button>Register</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
