import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { CiLogin } from "react-icons/ci";
import { auth, provider } from './Firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {

    const login = async () => {
        try {
            provider.setCustomParameters({ prompt: 'select_account' });
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("User logged in Successfully: ", user.displayName);
            if (user) {
                toast.success(`Welcome, ${user.displayName}`, {
                    position: "top-center",
                    toastId: "login-toast", // Unique ID to allow repeated display
                    autoClose: 3000,
                    theme: "colored", 
                });
            }

        } catch (err) {
            toast.error(`Error: ${err.message}`, {
                position: "top-center",
                autoClose: 3000,
                theme: "colored",
            });
            console.log("Error logging in the user", err.message)
            
        }
    }

    return (
        <button onClick={login} className="signup"><CiLogin />  Sign in</button>
    )
}

export default Signin