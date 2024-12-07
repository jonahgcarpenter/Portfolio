import '../styles/ServerRack.css';
import ProjectsDrive from './drives/ProjectsDrive';
import ExperienceDrive from './drives/ExperienceDrive';
import AboutDrive from './drives/AboutDrive';
import DragDrives from './DragDrives';
import EducationDrive from './drives/EducationDrive';

function ServerRack() {
  const drives = [
    { path: 'about', title: 'About', component: AboutDrive },
    { path: 'projects', title: 'Projects', component: ProjectsDrive },
    { path: 'experience', title: 'Experience', component: ExperienceDrive },
    { path: 'education', title: 'Education', component: EducationDrive }
  ];

  return (
    <div className="server-rack">
      <div className="rack-container">
        <div className="rack-leds">
          <div className="led" style={{"--led-current-color": "var(--led-success)"} as React.CSSProperties}></div>
          <div className="led" style={{"--led-current-color": "var(--led-error)"} as React.CSSProperties}></div>
          <div className="led" style={{"--led-current-color": "var(--led-warning)"} as React.CSSProperties}></div>
        </div>
        <DragDrives>
          {drives.map((drive, index) => (
            <div 
              key={index} 
              data-path={drive.path}
              className="drive"
            >
              <div className="drive-container">
                <div className="drive-content">
                  <h3>{drive.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </DragDrives>
      </div>
    </div>
  );
}

export default ServerRack;