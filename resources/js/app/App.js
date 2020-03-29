import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {

    const [invite, setInvite] = useState([invite]);

    useEffect(() => {
        window.Echo.channel('message')
            .listen('.message.created', (e) => {
                setInvite(e.invite);
            });
    });

    return (
        <main className="bg-primaryLight">
            <Login agencyName="Wink Strategies"/>
            {/* <Sidebar />
            <div className="wrapper">
                <Header />
                <div className="flex pt-8 pl-4">
                    {invite}
                </div>
            </div> */}
        </main>
    );
}

export default App;

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>
, document.getElementById('App'));
