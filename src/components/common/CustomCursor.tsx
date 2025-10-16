import { useEffect, useState, useCallback } from 'react'

type Position = { x: number; y: number }

export function CustomCursor() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const [targetPosition, setTargetPosition] = useState<Position>({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  // Smooth follow effect
  useEffect(() => {
    let animationFrameId: number

    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.15,
        y: prev.y + (targetPosition.y - prev.y) * 0.15,
      }))
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [targetPosition])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setTargetPosition({ x: e.clientX, y: e.clientY })
    setIsVisible(true)

    const target = e.target as HTMLElement
    const isInteractive =
      window.getComputedStyle(target).cursor === 'pointer' ||
      target.tagName === 'A' ||
      target.tagName === 'BUTTON' ||
      target.closest('a') !== null ||
      target.closest('button') !== null ||
      target.hasAttribute('data-cursor-hover')

    setIsPointer(isInteractive)
  }, [])

  const handleMouseDown = useCallback(() => {
    setIsClicking(true)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsClicking(false)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false)
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseDown, handleMouseUp, handleMouseLeave])

  if (!isVisible) return null

  return (
    <>
      {/* Cursor Principal - Inner Dot */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-75"
        style={{
          left: `${targetPosition.x}px`,
          top: `${targetPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
        }}
      >
        <div
          className={`rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-200 ${
            isPointer ? 'w-3 h-3 opacity-60' : 'w-2 h-2 opacity-100'
          }`}
          style={{
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)',
          }}
        />
      </div>

      {/* Cursor Externo - Outer Ring (com delay suave) */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full border-2 transition-all duration-500 ease-out ${
            isPointer
              ? 'w-12 h-12 border-blue-400 opacity-60'
              : 'w-8 h-8 border-purple-400/40 opacity-40'
          } ${isClicking ? 'scale-90' : 'scale-100'}`}
          style={{
            boxShadow: isPointer
              ? '0 0 30px rgba(59, 130, 246, 0.3)'
              : '0 0 15px rgba(139, 92, 246, 0.2)',
          }}
        />
      </div>

      {/* Efeito Ripple ao Clicar */}
      {isClicking && (
        <div
          className="fixed pointer-events-none z-[9997]"
          style={{
            left: `${targetPosition.x}px`,
            top: `${targetPosition.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-16 h-16 border-2 border-blue-400/50 rounded-full animate-ping" />
        </div>
      )}

      {/* Glow Effect on Hover */}
      {isPointer && (
        <div
          className="fixed pointer-events-none z-[9996]"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className="w-20 h-20 rounded-full opacity-20 blur-xl"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
            }}
          />
        </div>
      )}
    </>
  )
}