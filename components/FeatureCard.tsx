'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  color: string
  delay: number
}

export default function FeatureCard({ icon, title, description, color, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`inline-flex p-4 rounded-2xl bg-linear-to-br ${color} mb-6 shadow-lg`}
        >
          <div className="text-white">
            {icon}
          </div>
        </motion.div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Hover Effect */}
        <div className={`absolute inset-0 bg-linear-to-br ${color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
      </div>
    </motion.div>
  )
}