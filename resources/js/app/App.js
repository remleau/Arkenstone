import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
    return (
        <main className="bg-primaryLight">
            <Sidebar />
            <div className="wrapper">
                <Header />
                <div className="flex pt-8 pl-4">
                    allo
                </div>
            </div>
        </main>
    );
}

export default App;

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>
, document.getElementById('App'));
