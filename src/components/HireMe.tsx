interface HireMeProps {
  isOpen: boolean;
  position: { top: number; right: number };
}

function HireMe({ isOpen, position }: HireMeProps) {
  if (!isOpen) return null;

  return (
    <div className="hire-dropdown" style={{ position: 'absolute', ...position }}>
      <div className="dropdown-content">
        <a href="mailto:your.email@example.com">Email Me</a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="/resume.pdf" target="_blank">View Resume</a>
        <button onClick={() => window.location.href = 'mailto:your.email@example.com'}>
          Contact Now
        </button>
      </div>
    </div>
  );
}

export default HireMe;