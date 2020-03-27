import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';

const App = () => {
    return (
        <main>
            <Header />
            <div className="container allo">
                <div className="flex">
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
