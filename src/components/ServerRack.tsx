import DragDrives from './DragDrives';
import '../styles/ServerRack.css';

function ServerRack() {
  const driveLinks = [
    { id: 1, title: 'Projects', path: '/projects' },
    { id: 2, title: 'About', path: '/about' },
    { id: 3, title: 'Contact', path: '/contact' },
    { id: 4, title: 'Skills', path: '/skills' }
  ];

  return (
    <div className="server-rack">
      <div className="rack-frame">
        {driveLinks.map(link => (
          <div key={link.id} className="drive-slot">
            <DragDrives>
              <div className="drive">
                {link.title}
              </div>
            </DragDrives>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServerRack;