import './SideBar.css';
import assets from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { userDummyData } from '../utils/dummyData';

const SideBar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate();

  return (
    <div className={`sidebar ${selectedUser ? 'hidden' : ''}`}>

      {/* Header */}
      <div className='sidebar-header'>
        <img src={assets.logo} alt='logo' className='sidebar-logo' />
        <div className='menu-wrapper'>
          <img src={assets.menu_icon} alt='menu' className='menu-icon' />
          <div className='dropdown-menu'>
            <p onClick={() => navigate('/profile')}>Edit Profile</p>
            <hr />
            <p>Logout</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className='search-bar'>
        <img src={assets.search_icon} alt='Search' className='search-icon' />
        <input
          type='text'
          placeholder='Search user...'
          className='search-input'
        />
      </div>

      {/* User List */}
      <div className='user-list'>
        {userDummyData.map((user, index) => (
          <div
            key={index}
            onClick={() => setSelectedUser(user)}
            className={`user-item ${selectedUser?._id === user._id ? 'active' : ''}`}
          >
            <div className='avatar-wrapper'>
              <img
                src={user?.profilePic || assets.avatar_icon}
                alt=''
                className='avatar'
              />
              {index < 3 && <span className='online-dot' />}
            </div>

            <div className='user-info'>
              <p className='user-name'>{user.fullName}</p>
              <span className={`user-status ${index < 3 ? 'online' : 'offline'}`}>
                {index < 3 ? 'Online' : 'Offline'}
              </span>
            </div>

            {index > 2 && (
              <span className='unread-badge'>{index}</span>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default SideBar;