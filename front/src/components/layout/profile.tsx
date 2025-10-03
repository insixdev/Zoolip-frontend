import { useAuth } from '../../features/auth';
import { useNavigate, Link } from 'react-router-dom';
import './profile.css';
import { useEffect } from 'react';

export const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-info">
        <p>Welcome, {user.headers.Username}!</p>
        <p>User ID: {user.headers.idUsuario}</p>
        <p>Status: {user.body.status}</p>
      </div>
      <div className="profile-actions">
        <button 
          onClick={handleLogout}
          className="logout-button"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
