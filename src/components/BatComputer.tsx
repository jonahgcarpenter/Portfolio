import React, { useState, useEffect, useRef } from 'react';
import '../styles/BatComputer.css';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Experience from './Experience';
import Education from './Education';

interface FolderType {
  ABOUT_ME: string;
  PROJECTS: string;
  EXPERIENCE: string;
  EDUCATION: string;
  CONTACT: string;
}

const BatComputer: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showFolders, setShowFolders] = useState<boolean>(false);
  const [selectedFolder, setSelectedFolder] = useState<keyof FolderType | null>(null);
  const [showComponent, setShowComponent] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const terminalContentRef = useRef<HTMLDivElement>(null);

  const folders: (keyof FolderType)[] = [
    'ABOUT_ME',
    'PROJECTS',
    'EXPERIENCE',
    'EDUCATION',
    'CONTACT'
  ];

  const getTerminalMessages = (folder?: keyof FolderType) => {
    if (!folder) {
      return [
        'WELCOME TO THE JONAH COMPUTER TERMINAL v1.0',
        'INITIALIZING SYSTEMS...',
        'SECURITY PROTOCOLS ACTIVE',
        'LOADING USER INTERFACE...'
      ];
    }
    return [
      'ACCESSING DATABASE...',
      `LOADING ${folder} MODULE...`,
      'DECRYPTING DATA...',
      'RENDERING INTERFACE...'
    ];
  };

  useEffect(() => {
    const messages = getTerminalMessages(selectedFolder);
    if (currentIndex < messages.length) {
      let currentText = '';
      const message = messages[currentIndex];
      
      const typeText = () => {
        if (currentText.length < message.length) {
          currentText = message.slice(0, currentText.length + 1);
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[currentIndex] = currentText;
            return newMessages;
          });
          setTimeout(typeText, 50);
        } else {
          setTimeout(() => {
            setCurrentIndex(prev => prev + 1);
          }, 500);
        }
      };
      
      typeText();
    } else if (currentIndex === messages.length) {
      if (selectedFolder) {
        setTimeout(() => {
          setShowComponent(true);
        }, 1000);
      } else {
        setTimeout(() => setShowFolders(true), 1000);
      }
    }
  }, [currentIndex, selectedFolder]);

  useEffect(() => {
    if (showComponent && terminalContentRef.current) {
      terminalContentRef.current.scrollTop = 0;
    }
  }, [showComponent, selectedFolder, selectedProject]);

  const handleFolderSelect = (folder: keyof FolderType) => {
    setMessages([]);
    setCurrentIndex(0);
    setShowFolders(false);
    setShowComponent(false);
    setSelectedFolder(folder);
  };

  const handleBack = () => {
    if (selectedProject && selectedFolder === 'PROJECTS') {
      setSelectedProject(false);
      setCurrentProject(null);
    } else {
      setMessages([]);
      setCurrentIndex(0);
      setShowComponent(false);
      setSelectedFolder(null);
      setShowFolders(false);
      setSelectedProject(false);
      setCurrentProject(null);
    }
  };

  const renderSelectedComponent = () => {
    switch(selectedFolder) {
      case 'ABOUT_ME':
        return <AboutMe onBack={handleBack} />;
      case 'PROJECTS':
        return <Projects 
          onBack={handleBack} 
          onProjectSelect={() => setSelectedProject(true)} 
          selectedProject={currentProject}
          setSelectedProject={setCurrentProject}
        />;
      case 'EXPERIENCE':
        return <Experience onBack={handleBack} />;
      case 'EDUCATION':
        return <Education onBack={handleBack} />;
      case 'CONTACT':
        return <Contact onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <div className="batcomputer-ui">
      <div className="terminal-header">
        <h1>JONAH-COMPUTER INTERFACE</h1>
      </div>
      <div className="terminal-content" ref={terminalContentRef}>
        {(selectedFolder || selectedProject) && (
          <button onClick={handleBack} className="back-button">
            {selectedProject ? '← Back to Projects' : '← Back to Main'}
          </button>
        )}
        {(!showComponent || !selectedFolder) && (
          <>
            {messages.map((message, index) => (
              <div key={index} className="command-line">
                <span className="prompt">{'>>'}</span>
                <span className="typed-text">{message}</span>
              </div>
            ))}
            {showFolders && !selectedFolder && (
              <div className="folders">
                {folders.map((folder) => (
                  <div 
                    key={folder} 
                    className="folder-item"
                    onClick={() => handleFolderSelect(folder)}
                    style={{ cursor: 'pointer' }}
                  >
                    <span className="prompt">{'>>'}</span>
                    <span>{folder}</span>
                  </div>
                ))}
              </div>
            )}
            {!showFolders && currentIndex < getTerminalMessages(selectedFolder).length && (
              <span className="cursor"></span>
            )}
          </>
        )}
        {showComponent && selectedFolder && renderSelectedComponent()}
      </div>
    </div>
  );
};

export default BatComputer;