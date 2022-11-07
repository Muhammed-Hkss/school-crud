import React from "react";
import './App.css'
import { useAuth } from "./providers/useAuth";
import AuthRoutes from "./pages/AuthRoutes";
import LeyoutRoutes from "./pages/LeyoutRoutes";
import Loader from "./conponents/Loader";

 
export const App = () =>{
  const { teachers , loading } = useAuth()

  
  if(loading) return <Loader />

  return teachers ? <LeyoutRoutes /> : <AuthRoutes />

}

export default App;


