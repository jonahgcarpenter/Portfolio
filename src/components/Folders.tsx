import React from 'react';

interface FoldersProps {
  onSelectFolder: (folder: string) => void;
}

const Folders: React.FC<FoldersProps> = ({ onSelectFolder }) => {
  const folders = [
    'ABOUT_ME',
    'PROJECTS',
    'EXPERIENCE',
    'EDUCATION',
    'CONTACT'
  ];

  return (
    <div className="folders">
      {folders.map((folder, index) => (
        <div 
          key={folder} 
          className="folder-item"
          onClick={() => onSelectFolder(folder)}
          style={{ cursor: 'pointer' }}
        >
          <span className="prompt">{'>>'}</span>
          <span>{folder}</span>
        </div>
      ))}
    </div>
  );
};

export default Folders;