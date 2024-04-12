import { KeyboardEvent, useEffect, useRef } from 'react'
import '../../style/Controls.css'

export default function Controls({
  onPaginate,
}: {
  onPaginate: (direction: number) => void
}): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current?.focus()
  }, [])

  const handleKey = (event: KeyboardEvent<HTMLDivElement>) => {
    const { key } = event

    if (key === 'ArrowRight' || key === 'ArrowUp') {
      onPaginate(1)
    } else if (key === 'ArrowLeft' || key === 'ArrowDown') {
      onPaginate(-1)
    }
  }

  return (
    <div ref={ref} className='controls flex' tabIndex={0} onKeyDown={handleKey}>
      <div className='next' onClick={() => onPaginate(1)}>
        {'‣'}
      </div>
      <div className='prev' onClick={() => onPaginate(-1)}>
        {'‣'}
      </div>
    </div>
  )
}
