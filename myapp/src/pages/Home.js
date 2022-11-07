import React from 'react';
import Dashboard from './dashboard/Dashboard';
import From from './from/From';

function Home(props) {
    return (
        <div>
           <From/> 
           <Dashboard/>
        </div>
    );
}

export default Home;