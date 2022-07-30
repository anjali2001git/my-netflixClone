import React,{useEffect} from 'react';
import './App.css';
import ProfileScreen from './screens/ProfileScreen'; 
import { useDispatch , useSelector } from 'react-redux';
import HomeScreen  from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"; 
import { auth } from './firebase';
import { login ,logout, selectUser } from './features/userSlice';

function App() {

  const user=useSelector(selectUser);
  
  console.log(user);
  const dispatch = useDispatch();

  useEffect(() => {
      const unsubscribe= auth.onAuthStateChanged((userAuth)=>{
         if(userAuth){
            console.log(userAuth);
             //logged in
            dispatch(login({
               uid:userAuth.uid,
               email:userAuth.email,
             })
            );
            console.log(userAuth.email);
            console.log(userAuth.uid);
          }else{
           //logged out
           dispatch(logout());
          }
        });
    return unsubscribe;
  },[dispatch]);

  return (
    <div className="app">   
   <Router>
     {!user?(<LoginScreen/>)
      :(<Switch>
        <Route exact path="/profile">
          <ProfileScreen/>
        </Route>
        <Route exact path="/">
        <HomeScreen/>
        </Route>
     </Switch>
    )}    
   </Router>
    </div>
  );
}

export default App;