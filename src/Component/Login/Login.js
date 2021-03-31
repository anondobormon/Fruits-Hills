import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState({
        isSignIn: false,
        name: '',
        email: ''
    })

    const history = useHistory();
    const location = useLocation();
    let {from} = location.state || {from: {pathname: "/"}}

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const {displayName, email} = result.user;
                const signedInUser = {
                    name: displayName,
                    email: email,
                    isSignIn: true
                };
                console.log(result);
                setNewUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
               
            });
    }


    return (
        <div>
            <h4>This is login page</h4>
            <button onClick={handleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;