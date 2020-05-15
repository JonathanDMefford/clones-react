import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Homepage from './components/homepage';
import Navbar from './components/navbar';
import Browse from './components/browse';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App(props) {

  const [channelData, setChannelData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/channels/promoted')
      .then(function (response) {
        console.log(response.data.data, 'channel data');
        setChannelData(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage
            channelData={channelData}
            />
          </Route>
          <Route path="/browse">
            <Browse />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
