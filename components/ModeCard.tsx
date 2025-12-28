'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ModeCardProps {
  icon: ReactNode
  title: string
  description: string
  color: string
  delay: number
}

export default function ModeCard({ icon, title, description, color, delay }: ModeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
      className="group cursor-pointer"
    >
      <div className={`relative bg-linear-to-br ${color} rounded-3xl p-8 h-full shadow-xl overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            whileHover={{ rotate: 10 }}
            className="text-white mb-4"
          >
            {icon}
          </motion.div>
          
          <h3 className="text-2xl font-black text-white mb-3">
            {title}
          </h3>
          
          <p className="text-white/80 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </motion.div>
  )
}