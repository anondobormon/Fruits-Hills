import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser);
    return (
        <div className='headers'>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <p className="navbar-brand logo" >FRUIT'S HILLS</p>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <p><Link className="nav-link active" to="/home">Home</Link></p>
                            </li>
                            <li className="nav-item">
                                <p><Link className="nav-link active" to="/order">Order</Link></p>
                            </li>
                            <li className="nav-item">
                                <p><Link className="nav-link active" to="/addProduct">Admin</Link></p>
                            </li>
                            <li className="nav-item">
                                {loggedInUser.isSignIn ? <p className='username'>{loggedInUser.name}</p> : <p><Link className="nav-link active" to="/login">Login</Link></p>}
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>








        </div>
    );
};

export default Header;