import React, { useState } from 'react';
import './HomePage.css';
import SideBar from '../components/SideBar';
import ChatContainer from '../components/ChatContainer';
import RightSidebar from '../components/RightSidebar';

const HomePage = () => {
  const [selectedUser, setSelectedUser] = useState(false);

  return (
    <div className='home-page'>
      <div className={`home-container ${selectedUser ? 'with-right-sidebar' : ''}`}>
        <SideBar
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
        <ChatContainer />
        <RightSidebar />
      </div>
    </div>
  );
};

export default HomePage;