import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])

  useEffect(() => {
    let trailId = 0

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      // Adicionar ponto na trilha
      setTrail((prev) => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: trailId++ }]
        return newTrail.slice(-8) // Manter apenas os últimos 8 pontos
      })

      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      )
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
      setTrail([])
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Trilha de partículas */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-[9997]"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            transform: 'translate(-50%, -50%)',
            opacity: (index + 1) / trail.length * 0.3,
          }}
        >
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            style={{
              width: `${4 + index * 2}px`,
              height: `${4 + index * 2}px`,
            }}
          />
        </div>
      ))}

      {/* Cursor Principal com Gradiente */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full transition-all duration-150 bg-gradient-to-r from-blue-500 to-purple-500 ${
            isPointer ? 'w-12 h-12 opacity-20' : 'w-4 h-4 opacity-80'
          }`}
        />
      </div>

      {/* Anel Externo */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <div
          className={`border-2 border-blue-500 rounded-full transition-all duration-300 ${
            isPointer ? 'w-16 h-16 opacity-60' : 'w-8 h-8 opacity-40'
          }`}
          style={{
            boxShadow: isPointer ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none',
          }}
        />
      </div>

      {/* Efeito de Click */}
      {isPointer && (
        <div
          className="fixed pointer-events-none z-[9996]"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-20 h-20 border border-purple-500 rounded-full opacity-20 animate-ping" />
        </div>
      )}
    </>
  )
}