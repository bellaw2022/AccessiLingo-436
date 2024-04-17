import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SideBar from './components/SideBar';
import LoginPage from './routes/LoginPage'; 
import Classroom from './routes/Classroom'; 
import Profile from './routes/Profile';
import Community from './routes/Community';
import Explore from './routes/Explore';
import ClassroomPrac from './routes/ClassroomPrac';
import { useTheme } from './ThemeContext'; 

function App() {
  const { theme } = useTheme();  

  return (
    <Router>
      <div className="App">
        <SideBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/classroom" element={<Classroom />} />
            <Route path="/classroompractice" element={<ClassroomPrac />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
