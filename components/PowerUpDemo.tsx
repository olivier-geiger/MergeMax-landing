'use client'

import { motion } from 'framer-motion'
import { RotateCcw, Shuffle, Flame } from 'lucide-react'
import { useState } from 'react'

export default function PowerUpDemo() {
  const [activePowerUp, setActivePowerUp] = useState<number | null>(null)

  const powerUps = [
    {
      icon: <RotateCcw className="w-8 h-8" />,
      name: 'Undo',
      description: 'Take back your last move',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Shuffle className="w-8 h-8" />,
      name: 'Shuffle',
      description: 'Randomize all tiles',
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: <Flame className="w-8 h-8" />,
      name: 'Rocket',
      description: 'Clear an entire row or column',
      color: 'from-red-500 to-orange-500',
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {powerUps.map((powerUp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          onMouseEnter={() => setActivePowerUp(index)}
          onMouseLeave={() => setActivePowerUp(null)}
          className="relative group"
        >
          <div className={`
            relative bg-white/5 backdrop-blur-sm border border-white/10 
            rounded-3xl p-8 h-full transition-all duration-300
            ${activePowerUp === index ? 'bg-white/10 border-white/30 scale-105' : ''}
          `}>
            {/* Icon Container */}
            <motion.div
              animate={{ 
                scale: activePowerUp === index ? 1.1 : 1,
                rotate: activePowerUp === index ? 5 : 0,
              }}
              className={`
                inline-flex p-6 rounded-3xl bg-linear-to-br ${powerUp.color} 
                mb-6 shadow-2xl relative overflow-hidden
              `}
            >
              <div className="text-white relative z-10">
                {powerUp.icon}
              </div>

              {/* Animated Background */}
              {activePowerUp === index && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute inset-0 bg-white/30 rounded-full"
                />
              )}
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl font-black text-white mb-3">
              {powerUp.name}
            </h3>

            {/* Description */}
            <p className="text-gray-400">
              {powerUp.description}
            </p>

            {/* Hover Glow */}
            <div 
              className={`
                absolute inset-0 bg-linear-to-br ${powerUp.color} 
                opacity-0 group-hover:opacity-10 rounded-3xl 
                transition-opacity duration-300
              `} 
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}