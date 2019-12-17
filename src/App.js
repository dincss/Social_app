import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route} from "react-router-dom";

const App = (props) => {


    return (

            <div className="app-wrapper">

                <Header/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <Dialogs
                               store={props.store}
                               // states={props.state.dialogsPage}
                           />}/>
                    <Route path="/profile"
                           render={() => <Profile
                               states={props.state.profilePage}
                               // statess={props.state}
                               dispatch={props.dispatch}
                           />}/>
                    {/*<Route path="/news" component={Profile}/>*/}
                    {/*<Route path="/music" component={Profile}/>*/}
                    {/*<Route path="/settings" component={Profile}/>*/}

                </div>

            </div>


    );
}

export default App;

