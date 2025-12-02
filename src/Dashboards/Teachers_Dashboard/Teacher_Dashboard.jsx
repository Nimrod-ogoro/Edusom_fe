import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Landing from './Landing.jsx';
import Profile from './Profile.jsx';
import Upload from './Upload.jsx';
import Overview from './Overview.jsx';
import Analytics from './Analytics.jsx';
import Planner from './Planner.jsx';

function TeacherDashboard() {
  const location = useLocation();

  const menu = [
    { label: '🏠 Landing', path: '/teacher' },
    { label: '👤 Profile', path: '/teacher/profile' },
    { label: '📤 Upload', path: '/teacher/upload' },
    { label: '📚 Overview', path: '/teacher/overview' },
    { label: '📈 Analytics', path: '/teacher/analytics' },
    { label: '🗓️ Planner', path: '/teacher/planner' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '250px', background: '#00b894', color: 'white', padding: '1rem' }}>
        <h2>Teacher Panel</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {menu.map(item => (
            <li key={item.path} style={{ margin: '1rem 0' }}>
              <Link
                to={item.path}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <main style={{ flex: 1, padding: '2rem', backgroundColor: '#fdf6e3' }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="profile" element={<Profile />} />
          <Route path="upload" element={<Upload />} />
          <Route path="overview" element={<Overview />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="planner" element={<Planner />} />
        </Routes>
      </main>
    </div>
  );
}

export default TeacherDashboard;