import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

interface DragDrivesProps {
  children: React.ReactNode;
}

const DragDrives: React.FC<DragDrivesProps> = ({ children }) => {
  const navigate = useNavigate();

  const getDriveName = (child: React.ReactElement) => {
    const componentType = child.type;
    if (typeof componentType === 'function') {
      return componentType.name.toLowerCase();
    }
    // Fallback if component name can't be determined
    return '';
  };

  const createDriveElement = (child: React.ReactElement, index: number) => {
    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

    const bind = useDrag(({ active, movement: [mx, my], last }) => {
      api.start({ x: active ? mx : 0, y: active ? my : 0, immediate: active })
      
      if (last) {
        const driveSlot = document.querySelector('.drive-slot');
        if (driveSlot) {
          const rect = driveSlot.getBoundingClientRect();
          const currentX = window.innerWidth / 2 + mx;
          const currentY = window.innerHeight / 2 + my;
          
          if (
            currentX < rect.left ||
            currentX > rect.right ||
            currentY < rect.top ||
            currentY > rect.bottom
          ) {
            const driveName = getDriveName(child);
            if (driveName) {
              navigate(`/${driveName}`);
            }
          }
        }
      }
    })

    return (
      <animated.div
        key={index}
        style={{
          x,
          y,
          touchAction: 'none',
          marginBottom: '10px'
        }}
        {...bind()}
      >
        {child}
      </animated.div>
    );
  };

  return (
    <div>
      {React.Children.map(children, (child, index) => 
        createDriveElement(child as React.ReactElement, index)
      )}
    </div>
  );
};

export default DragDrives;