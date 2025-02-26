// user context provider
import React from "react";
import UseContext from "./LocationContext";

const UserContextProvider = ({children})=>{
    const [location, setLocation] = React.useState(null);
    return (
        <UseContext.Provider value={{location, setLocation}}>
            {children}
        </UseContext.Provider>
    )
}

export default UserContextProvider;