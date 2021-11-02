import initializeAuthentication from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
initializeAuthentication();

const auth = getAuth();
const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, provider)
    }

     //  logout
     const Logout = () => {
        // setIsLoading(true)
       signOut(auth).then(() => {
           setUser({})
         }).catch((err) => {
           setError(error.logout)
         })
         .finally(() => {
           setIsLoading(false)
       })
    }

   //  tracker for crurent user
   useEffect(()=>{
    onAuthStateChanged(auth, (Signeduser) => {
        if (Signeduser) {
           setUser(Signeduser)
        }
        else{
            setUser({})
        }
        setIsLoading(false)
      });
 }, [])

    return{
        signInWithGoogle,
        user,
        error,
        Logout,
        isLoading,
        setIsLoading,
        setUser,
        setError
    }
   
};

export default UseFirebase;