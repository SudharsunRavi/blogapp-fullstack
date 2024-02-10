import axios from "axios";

const { createContext, useState, useEffect } = require("react");

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [currentUser, setCurrentUser]=useState(
        JSON.parse(localStorage.getItem("currentUser")) || null
    ); // items are objects in localstorage so we need to parse it

    const login=async(input)=>{
        const res=await axios.post("/auth/login", input);
        setCurrentUser(res.data);
    };

    const logout=async(input)=>{
        await axios.post("/auth/logout");
        setCurrentUser(null);
    }

    useEffect(()=>{
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }, [currentUser]);

    return(
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

