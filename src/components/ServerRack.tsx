import '../styles/ServerRack.css';
import ProjectsDrive from './drives/ProjectsDrive';
import ExperienceDrive from './drives/ExperienceDrive';
import AboutDrive from './drives/AboutDrive';
import DragDrives from './DragDrives';
import EducationDrive from './drives/EducationDrive';

function ServerRack() {
  const driveTitles = ['About Drive', 'Projects Drive', 'Experience Drive', 'Education Drive'];

  return (
    <div className="server-rack">
      <div className="drive-slot">
        <div className="drive">
          <DragDrives titles={driveTitles}>
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