import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { ReactNode } from 'react'

interface DragDrivesProps {
  children: ReactNode
}

function DragDrives({ children }: DragDrivesProps) {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
  })

  return (
    <animated.div {...bind()} style={{ x, y, touchAction: 'none' }}>
      {children}
    </animated.div>
  )
}

export default DragDrives