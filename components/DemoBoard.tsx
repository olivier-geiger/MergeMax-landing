'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, startTransition } from 'react'

interface Tile {
  id: number
  value: number
  position: { row: number; col: number }
  isNew?: boolean
  isMerging?: boolean
  isHighlighted?: boolean
}

type DemoMode = 'swipe' | 'merge' | 'powerup' | 'modes' | 'quest'

export default function DemoBoard() {
  const [tiles, setTiles] = useState<Tile[]>([])
  const [score, setScore] = useState(0)
  const [demoMode, setDemoMode] = useState<DemoMode>('swipe')
  const [powerUpActive, setPowerUpActive] = useState<string | null>(null)
  const [modeText, setModeText] = useState('Swipe to Move')

  useEffect(() => {
    const demoSwipe = async () => {
      startTransition(() => {
        setModeText('Swipe to Move')
        setScore(0)
        setPowerUpActive(null)
        
        setTiles([
          { id: 1, value: 2, position: { row: 0, col: 0 } },
          { id: 2, value: 2, position: { row: 0, col: 3 } },
          { id: 3, value: 4, position: { row: 2, col: 1 } },
          { id: 4, value: 4, position: { row: 2, col: 2 } },
        ])
      })

      await new Promise(resolve => setTimeout(resolve, 800))

      startTransition(() => {
        setTiles(prev => prev.map(t => ({ ...t, isHighlighted: true })))
      })
      await new Promise(resolve => setTimeout(resolve, 300))
      
      startTransition(() => {
        setTiles(prev => prev.map(t => ({ ...t, position: { ...t.position, col: 3 }, isHighlighted: false })))
      })
      await new Promise(resolve => setTimeout(resolve, 600))

      startTransition(() => {
        setTiles(prev => prev.map(t => ({ ...t, position: { row: 3, col: t.position.col } })))
      })
      await new Promise(resolve => setTimeout(resolve, 600))

      startTransition(() => {
        setTiles(prev => prev.map(t => ({ ...t, position: { ...t.position, col: 0 } })))
      })
      await new Promise(resolve => setTimeout(resolve, 600))

      startTransition(() => {
        setTiles(prev => prev.map(t => ({ ...t, position: { row: 0, col: t.position.col } })))
      })
    }

    const demoMergeSequence = async () => {
      startTransition(() => {
        setModeText('Merge to 2048')
        setScore(0)
        setPowerUpActive(null)
      })

      const sequence = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048]
      
      for (let i = 0; i < sequence.length - 1; i++) {
        startTransition(() => {
          setTiles([
            { id: Date.now(), value: sequence[i], position: { row: 1, col: 1 } },
            { id: Date.now() + 1, value: sequence[i], position: { row: 1, col: 2 } },
          ])
        })

        await new Promise(resolve => setTimeout(resolve, 400))

        startTransition(() => {
          setTiles([
            { id: Date.now(), value: sequence[i + 1], position: { row: 1, col: 1 }, isMerging: true }
          ])
          setScore(sequence[i + 1])
        })

        await new Promise(resolve => setTimeout(resolve, 300))
        
        startTransition(() => {
          setTiles(prev => prev.map(t => ({ ...t, isMerging: false })))
        })

        if (i === sequence.length - 2) {
          await new Promise(resolve => setTimeout(resolve, 800))
        }
      }
    }

    const demoPowerUps = async () => {
      const currentTiles = [
        { id: 1, value: 2, position: { row: 0, col: 0 } },
        { id: 2, value: 4, position: { row: 0, col: 1 } },
        { id: 3, value: 2, position: { row: 1, col: 0 } },
        { id: 4, value: 8, position: { row: 1, col: 1 } },
        { id: 5, value: 16, position: { row: 2, col: 0 } },
        { id: 6, value: 4, position: { row: 2, col: 1 } },
      ]

      startTransition(() => {
        setModeText('Power-Ups')
        setPowerUpActive(null)
        setTiles(currentTiles)
        setScore(50)
      })

      await new Promise(resolve => setTimeout(resolve, 600))

      startTransition(() => {
        setPowerUpActive('undo')
      })
      await new Promise(resolve => setTimeout(resolve, 400))
      startTransition(() => {
        setTiles(prev => prev.map(t => ({ ...t, position: { ...t.position, col: t.position.col + 1 } })))
      })
      await new Promise(resolve => setTimeout(resolve, 400))
      startTransition(() => {
        setTiles(prev => prev.map(t => ({ ...t, position: { ...t.position, col: t.position.col - 1 } })))
      })
      await new Promise(resolve => setTimeout(resolve, 600))
      startTransition(() => {
        setPowerUpActive(null)
      })

      startTransition(() => {
        setPowerUpActive('shuffle')
      })
      await new Promise(resolve => setTimeout(resolve, 400))
      const shuffled = [...currentTiles].sort(() => Math.random() - 0.5)
      startTransition(() => {
        setTiles(shuffled.map((t, i) => ({ 
          ...t, 
          position: { row: Math.floor(i / 2), col: i % 2 },
          isNew: true 
        })))
      })
      await new Promise(resolve => setTimeout(resolve, 600))
      startTransition(() => {
        setTiles(prev => prev.map(t => ({ ...t, isNew: false })))
        setPowerUpActive(null)
      })
      await new Promise(resolve => setTimeout(resolve, 400))

      startTransition(() => {
        setPowerUpActive('rocket')
      })
      await new Promise(resolve => setTimeout(resolve, 400))
      startTransition(() => {
        setTiles(prev => prev.filter(t => t.position.row !== 1))
      })
      await new Promise(resolve => setTimeout(resolve, 600))
      startTransition(() => {
        setPowerUpActive(null)
      })
    }

    const demoModes = async () => {
      startTransition(() => {
        setPowerUpActive(null)
      })
      
      const modes = [
        { name: 'Classic Mode', tiles: 4 },
        { name: 'Time Attack', tiles: 6 },
        { name: 'Survival', tiles: 5 },
        { name: 'Adventure', tiles: 4 },
      ]

      for (const mode of modes) {
        startTransition(() => {
          setModeText(mode.name)
          setScore(0)
        })

        const newTiles: Tile[] = []
        for (let i = 0; i < mode.tiles; i++) {
          newTiles.push({
            id: Date.now() + i,
            value: Math.pow(2, Math.floor(Math.random() * 4) + 1),
            position: { 
              row: Math.floor(i / 2), 
              col: i % 2 
            },
            isNew: true
          })
        }
        startTransition(() => {
          setTiles(newTiles)
        })

        await new Promise(resolve => setTimeout(resolve, 300))
        startTransition(() => {
          setTiles(prev => prev.map(t => ({ ...t, isNew: false })))
        })
        await new Promise(resolve => setTimeout(resolve, 1200))
      }
    }

    const demoQuest = async () => {
      startTransition(() => {
        setModeText('Daily Quest')
        setPowerUpActive(null)
        
        setTiles([
          { id: 1, value: 2, position: { row: 1, col: 1 }, isHighlighted: true },
          { id: 2, value: 2, position: { row: 1, col: 2 }, isHighlighted: true },
        ])
        setScore(0)
      })

      const merges = [4, 8, 16, 32, 64]
      
      for (const value of merges) {
        await new Promise(resolve => setTimeout(resolve, 600))
        
        startTransition(() => {
          setTiles([
            { id: Date.now(), value, position: { row: 1, col: 1 }, isMerging: true, isHighlighted: true }
          ])
          setScore(prev => prev + value)
        })

        await new Promise(resolve => setTimeout(resolve, 300))
        startTransition(() => {
          setTiles(prev => prev.map(t => ({ ...t, isMerging: false })))
        })
        
        if (value < 64) {
          startTransition(() => {
            setTiles(prev => [
              ...prev,
              { id: Date.now() + 1, value, position: { row: 1, col: 2 }, isNew: true, isHighlighted: true }
            ])
          })
          await new Promise(resolve => setTimeout(resolve, 200))
          startTransition(() => {
            setTiles(prev => prev.map(t => ({ ...t, isNew: false })))
          })
        }
      }
    }

    const runDemo = async () => {
      const demos: DemoMode[] = ['swipe', 'merge', 'powerup', 'modes', 'quest']
      let currentIndex = 0

      while (true) {
        const mode = demos[currentIndex]
        startTransition(() => {
          setDemoMode(mode)
        })

        switch (mode) {
          case 'swipe':
            await demoSwipe()
            break
          case 'merge':
            await demoMergeSequence()
            break
          case 'powerup':
            await demoPowerUps()
            break
          case 'modes':
            await demoModes()
            break
          case 'quest':
            await demoQuest()
            break
        }

        await new Promise(resolve => setTimeout(resolve, 2000))
        currentIndex = (currentIndex + 1) % demos.length
      }
    }

    runDemo()
  }, [])

  const getTileColor = (value: number) => {
    const colors: Record<number, string> = {
      2: 'bg-[#eee4da] text-[#776e65]',
      4: 'bg-[#ede0c8] text-[#776e65]',
      8: 'bg-[#f2b179] text-white',
      16: 'bg-[#f59563] text-white',
      32: 'bg-[#f67c5f] text-white',
      64: 'bg-[#f65e3b] text-white',
      128: 'bg-[#edcf72] text-white',
      256: 'bg-[#edcc61] text-white',
      512: 'bg-[#edc850] text-white',
      1024: 'bg-[#edc53f] text-white',
      2048: 'bg-[#edc22e] text-white',
    }
    return colors[value] || 'bg-[#3c3a32] text-white'
  }

  const getFontSize = (value: number) => {
    if (value >= 1000) return 'text-xl md:text-2xl'
    if (value >= 100) return 'text-2xl md:text-3xl'
    return 'text-3xl md:text-4xl'
  }

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Mode Indicator */}
      <motion.div
        key={modeText}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center mb-4"
      >
        <div className="bg-linear-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full font-bold text-sm">
          {modeText}
        </div>
      </motion.div>

      {/* Score Display */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center mb-6"
      >
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-4">
          <div className="text-gray-400 text-sm font-semibold mb-1 text-center">SCORE</div>
          <motion.div
            key={score}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="text-4xl font-black text-white text-center"
          >
            {score}
          </motion.div>
        </div>
      </motion.div>

      {/* Power-Up Indicator */}
      <AnimatePresence>
        {powerUpActive && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute top-0 right-0 z-20"
          >
            <div className={`
              px-4 py-2 rounded-xl font-bold text-white text-sm shadow-lg
              ${powerUpActive === 'undo' ? 'bg-purple-500' : ''}
              ${powerUpActive === 'shuffle' ? 'bg-pink-500' : ''}
              ${powerUpActive === 'rocket' ? 'bg-red-500' : ''}
            `}>
              {powerUpActive === 'undo' && '↩️ UNDO'}
              {powerUpActive === 'shuffle' && '🔀 SHUFFLE'}
              {powerUpActive === 'rocket' && '🚀 ROCKET'}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Game Board Container */}
      <div className="relative w-full aspect-square bg-[#2d2d44] rounded-3xl p-3 shadow-2xl">
        {/* Background Grid */}
        <div className="absolute inset-3 grid grid-cols-4 grid-rows-4 gap-3">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="bg-[#1a1a2e] rounded-xl" />
          ))}
        </div>

        {/* Tiles Layer */}
        <div className="absolute inset-3">
          <AnimatePresence>
            {tiles.map((tile) => {
              const { row, col } = tile.position
              // Calculer la position exacte en pourcentage
              const cellSize = (100 - (3 * 0.75)) / 4 // 4 cellules avec 3 gaps
              const gapSize = 0.75
              
              const left = col * (cellSize + gapSize)
              const top = row * (cellSize + gapSize)

              return (
                <motion.div
                  key={tile.id}
                  layout
                  initial={{ 
                    scale: tile.isNew ? 0 : 1, 
                    opacity: tile.isNew ? 0 : 1,
                    left: `${left}%`,
                    top: `${top}%`,
                  }}
                  animate={{ 
                    scale: tile.isMerging ? 1.15 : 1,
                    opacity: 1,
                    left: `${left}%`,
                    top: `${top}%`,
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 25,
                    layout: { duration: 0.3 }
                  }}
                  style={{
                    position: 'absolute',
                    width: `${cellSize}%`,
                    height: `${cellSize}%`,
                  }}
                  className={`
                    ${getTileColor(tile.value)}
                    rounded-xl flex items-center justify-center
                    font-black ${getFontSize(tile.value)} shadow-lg
                    ${tile.isHighlighted ? 'ring-4 ring-yellow-400' : ''}
                    transition-shadow
                  `}
                >
                  {tile.value}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Demo Progress Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {['swipe', 'merge', 'powerup', 'modes', 'quest'].map((mode) => (
          <div
            key={mode}
            className={`
              h-2 rounded-full transition-all duration-300
              ${demoMode === mode ? 'bg-orange-400 w-8' : 'bg-white/30 w-2'}
            `}
          />
        ))}
      </div>

      {/* Interactive Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-6 text-gray-400 text-sm"
      >
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="inline-flex items-center gap-2"
        >
          <span>Interactive demo</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}