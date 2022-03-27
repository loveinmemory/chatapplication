import Chat from "./chat/chat";
import Process from "./process/process";
import Home from "./home/home";
import Form from "./register/register";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import React from "react";
import io from "socket.io-client";

const socket = io.connect('/');
function Appmain(props) {
  return (
    <React.Fragment>
      <div className="right">
        <Chat
          username={props.match.params.username}
          roomname={props.match.params.roomname}
          socket={socket}
        />
      </div>
      <div className="left">
        <Process />
      </div>
    </React.Fragment>
  );
}
function Registermain(props) {
  return (
    <React.Fragment>
        <div>
          <Form socket={socket}/>
        </div>
    </React.Fragment>
  );
}
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home socket={socket} />
          </Route>
          <Route path="/chat/:roomname/:username" component={Appmain} />
          <Route path="/chat/register" component={Registermain} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
