import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

interface DragDrivesProps {
  children: React.ReactNode;
}

const DragDrives: React.FC<DragDrivesProps> = ({ children }) => {
  const navigate = useNavigate();

  const createDriveElement = (child: React.ReactElement, index: number) => {
    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

    const bind = useDrag(({ down, movement: [mx, my], last }) => {
      api.start({ 
        x: down ? mx : 0, 
        y: down ? my : 0, 
        immediate: down 
      });

      if (last) {
        const path = (child as React.ReactElement).props['data-path'];
        const threshold = 100; // pixels to trigger navigation

        if (Math.abs(mx) > threshold || Math.abs(my) > threshold) {
          if (path) navigate(`/${path}`);
        }
      }
    });

    return (
      <animated.div
        key={index}
        {...bind()}
        style={{ 
          x, y,
          position: 'relative',
          touchAction: 'none',
        }}
        className="drive-item"
      >
        {child}
      </animated.div>
    );
  };

  return (
    <div className="drives-grid">
      {React.Children.map(children, (child, index) => 
        createDriveElement(child as React.ReactElement, index)
      )}
    </div>
  );
};

export default DragDrives;