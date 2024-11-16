/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";

 export  const AuthContex = createContext(); 

 const auth = getAuth(app);
 const  createNewuser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
 } 

const Authprovider = ({children}) => {
    const [user,setUser]=useState(null)
    console.log(user)
    const authInfo ={
        user,
        setUser,
        createNewuser,
    }

 useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    });
    return () =>{
        unsubscribe();
    }
 },[])

    return (
      <AuthContex.Provider value={authInfo}>
        {children}
      </AuthContex.Provider>
    );
};

export default Authprovider;
