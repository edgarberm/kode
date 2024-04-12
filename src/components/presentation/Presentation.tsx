import { AnimatePresence, motion, wrap } from 'framer-motion'
import { useState } from 'react'
import '../../style/Presentation.css'
import slides from '../../config'
import Controls from './Controls'

export type PresentationProps = {
  index: number
}

const variants = {
  enter: () => {
    return {
      // x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    // x: 0,
    opacity: 1,
  },
  exit: () => {
    return {
      zIndex: 0,
      // x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

export default function Presentation(): JSX.Element {
  const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = wrap(0, slides.length, page)

  const paginate = (newDirection: number) => {
    console.log('sisisis');
    
    setPage([page + newDirection, newDirection])
  }

  return (
    <div className='presentation'>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            // x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          {slides[imageIndex].component()}
        </motion.div>
      </AnimatePresence>

      <Controls onPaginate={paginate} />
    </div>
  )
}
