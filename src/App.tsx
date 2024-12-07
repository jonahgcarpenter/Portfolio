import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ServerRack from './components/ServerRack';
import ProjectsDrive from './components/drives/ProjectsDrive';
import ExperienceDrive from './components/drives/ExperienceDrive';
import AboutDrive from './components/drives/AboutDrive';
import EducationDrive from './components/drives/EducationDrive';
import './styles/App.css';

function App() {
  const driveTitles = ['About', 'Projects', 'Experience', 'Education'];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ServerRack />} />
        <Route path="/projects" element={<ProjectsDrive isOpen title={driveTitles[1]} />} />
        <Route path="/experience" element={<ExperienceDrive isOpen title={driveTitles[2]} />} />
        <Route path="/about" element={<AboutDrive isOpen title={driveTitles[0]} />} />
        <Route path="/education" element={<EducationDrive isOpen title={driveTitles[3]} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;