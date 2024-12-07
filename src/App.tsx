import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ServerRack from './components/ServerRack';
import ProjectsDrive from './components/drives/ProjectsDrive';
import ExperienceDrive from './components/drives/ExperienceDrive';
import AboutDrive from './components/drives/AboutDrive';
import EducationDrive from './components/drives/EducationDrive';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ServerRack />} />
        <Route path="/projects" element={<ProjectsDrive isOpen />} />
        <Route path="/experience" element={<ExperienceDrive isOpen />} />
        <Route path="/about" element={<AboutDrive isOpen />} />
        <Route path="/education" element={<EducationDrive isOpen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;