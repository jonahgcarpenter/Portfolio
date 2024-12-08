import React, { useState, useEffect } from 'react';
import '../styles/BatComputer.css';
import Folders from './Folders';
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

  const handleFolderSelect = (folder: keyof FolderType) => {
    setMessages([]);
    setCurrentIndex(0);
    setShowFolders(false);
    setShowComponent(false);
    setSelectedFolder(folder);
  };

  const handleBack = () => {
    setMessages([]);
    setCurrentIndex(0);
    setShowComponent(false);
    setSelectedFolder(null);
    setShowFolders(false);  // Set to false so the initial typing animation plays again
  };

  const renderSelectedComponent = () => {
    switch(selectedFolder) {
      case 'ABOUT_ME':
        return <AboutMe onBack={handleBack} />;
      case 'PROJECTS':
        return <Projects />;
      case 'EXPERIENCE':
        return <Experience/>;
      case 'EDUCATION':
        return <Education/>;
      case 'CONTACT':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="batcomputer-ui">
      <div className="terminal-header">
        <h1>JONAH-COMPUTER INTERFACE</h1>
      </div>
      <div className="terminal-content">
        {selectedFolder && <button onClick={handleBack} className="back-button">← Back</button>}
        {(!showComponent || !selectedFolder) && (
          <>
            {messages.map((message, index) => (
              <div key={index} className="command-line">
                <span className="prompt">{'>>'}</span>
                <span className="typed-text">{message}</span>
              </div>
            ))}
            {showFolders && !selectedFolder && <Folders onSelectFolder={handleFolderSelect} />}
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