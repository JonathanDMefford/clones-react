import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Homepage from './components/homepage';
import Navbarmenu from './components/navbar';
import Browse from './components/browse';
import Profile from './components/profilepage';
import AdminPage from './components/adminpage';
import CategoryPage from './components/categorypage';
import ChannelPage from './components/channelpage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App(props) {

  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  const [channelData, setChannelData] = useState([]);
  const [catData, setCatData] = useState([]);
  const [categoryPage, setCategoryPage] = useState(0);
  const [channelPage, setChannelPage] = useState(0);
  const API_ENDPOINT = "https://twitch-clone-277819.uc.r.appspot.com";

  useEffect(() => {
    axios.get(API_ENDPOINT + '/api/channels')
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
    axios.get(API_ENDPOINT + '/api/categories')
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
        <Navbarmenu
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
              setChannelPage={setChannelPage}
            />
          </Route>
          <Route path="/browse">
            <Browse
              categories={catData}
              data={channelData}
              setCategoryPage={setCategoryPage}
            />
          </Route>
          <Route path="/category">
            <CategoryPage
              catData={catData}
              data={channelData}
              setChannelPage={setChannelPage}
              categoryPage={categoryPage}
            />
          </Route>
          <Route path="/channel">
            <ChannelPage
              data={channelData}
              setCategoryPage={setCategoryPage}
              categoryPage={categoryPage}
              channelPage={channelPage}
            />
          </Route>
          <Route path="/profile">
            <Profile
              user={user}
              data={channelData}
            />
          </Route>
          <Route path="/admin">
            <AdminPage
              data={channelData}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
