import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ServerRack from './components/ServerRack';
import ProjectsDrive from './components/drives/ProjectsDrive';
import ExperienceDrive from './components/drives/ExperienceDrive';
import AboutDrive from './components/drives/AboutDrive';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ServerRack />} />
        <Route path="/projects" element={<ProjectsDrive isOpen />} />
        <Route path="/experience" element={<ExperienceDrive isOpen />} />
        <Route path="/about" element={<AboutDrive isOpen />} />
        <Route path="/education" element={<AboutDrive isOpen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;