import { Routes, Route, Navigate } from 'react-router-dom';
import TeacherDashboard from './Dashboards/Teachers_Dashboard/Teacher_Dashboard.jsx';
import StudentPage from './Dashboards/Student_Dashboard/SD_Homepage.jsx';
import ParentPage from './Dashboards/Parents_Dashboard/PD_Homepage.jsx';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/student" />} />
      <Route path="/teacher/*" element={<TeacherDashboard />} />
      <Route path="/student/*" element={<StudentPage />} />
      <Route path="/parent/*" element={<ParentPage />} />
    </Routes>
  );
}

export default App;

