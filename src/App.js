import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Homepage from './components/homepage';
import Navbar from './components/navbar';
import Browse from './components/browse';
import Profile from './components/profilepage';
import CategoryPage from './components/categorypage';
import ChannelPage from './components/channelpage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App(props) {

  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  const [channelData, setChannelData] = useState([]);
  const [catData, setCatData] = useState([]);
  const [categoryPage, setCategoryPage] = useState(0);
  const [channelPage, setChannelPage] = useState(0);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/channels')
      .then(function (response) {
        console.log(response.data.data, 'channel data');
        setChannelData(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, []);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/categories')
      .then(function (response) {
        console.log(response.data.data, 'category data');
        setCatData(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, []);

  return (
    <Router>
      <div>
        <Navbar
          user={user}
          setUser={setUser}
          token={token}
          setToken={setToken}
        />
        <Switch>
          <Route exact path="/">
            <Homepage
            catData={catData}
            channelData={channelData}
            setCategoryPage={setCategoryPage}
            />
          </Route>
          <Route path="/browse">
            <Browse
            categories={catData}
            data={channelData}
            setCategoryPage={setCategoryPage}
            />
          </Route>
          <Route path ="/category">
            <CategoryPage
              catData={catData}
              data={channelData}
              categoryPage={categoryPage}
            />
          </Route>
          <Route path="/profile">
            <Profile
              user={user}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
