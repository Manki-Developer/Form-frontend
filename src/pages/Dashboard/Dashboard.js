import React from 'react';
import Thread from '../../components/Thread/Thread';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div>
    <div className='form'><h1>test</h1></div>
      <h1>Dashboard</h1>
      <div className='thread-container'>
        <Thread />
      </div>
    </div>
  );
}

export default Dashboard