import '../styles/ServerRack.css';
import ProjectsDrive from './drives/ProjectsDrive';
import ExperienceDrive from './drives/ExperienceDrive';
import AboutDrive from './drives/AboutDrive';
import DragDrives from './DragDrives';
import EducationDrive from './drives/EducationDrive';

function ServerRack() {
  return (
    <div className="server-rack">
      <div className="drive-slot" style={{ position: 'relative' }}>
        <div className="drive">
          <DragDrives>
            <AboutDrive />
            <ProjectsDrive />
            <ExperienceDrive />
            <EducationDrive />
          </DragDrives>
        </div>
      </div>
    </div>
  );
}

export default ServerRack;