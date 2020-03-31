import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route ,BrowserRouter } from 'react-router-dom';
import { UserProvider } from './utils/UserContext.js';

import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Page404 from './pages/Page404';

const App = () => {

    return (
        <main className="bg-primaryLight">
            <Switch>
                <Route exact path='/' render={(props) => <Login {...props} agencyName="Wink Strategies" />} />
                <Route path='/dashboard' render={(props) => <Homepage {...props} />} />
                <Route component={Page404} />
            </Switch>
        </main>
    );
}

export default App;

ReactDOM.render(
<BrowserRouter>
    <UserProvider>
        <App /> 
    </UserProvider>
</BrowserRouter>
, document.getElementById('App'));
