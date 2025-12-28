'use client'

import { motion } from 'framer-motion'
import { 
  Gamepad2, 
  Trophy, 
  Zap, 
  Target, 
  Star, 
  Download,
  ChevronRight,
  Sparkles,
  Timer,
  Heart,
  Map,
  Calendar,
  TrendingUp,
} from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import DemoBoard from '@/components/DemoBoard'
import FeatureCard from '@/components/FeatureCard'
import ModeCard from '@/components/ModeCard'
import PowerUpDemo from '@/components/PowerUpDemo'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Générer les particules une seule fois côté client
    const newParticles = [...Array(20)].map(() => ({
      initialX: Math.random() * window.innerWidth,
      initialY: Math.random() * window.innerHeight,
      targetX: Math.random() * window.innerWidth,
      targetY: Math.random() * window.innerHeight,
      duration: Math.random() * 10 + 10,
    }))
    
    // Utiliser setTimeout pour éviter les warnings
    setTimeout(() => {
      setParticles(newParticles)
      setMounted(true)
    }, 0)
  }, [])

  return (
    <main className="min-h-screen bg-linear-to-br from-[#1a1a2e] via-[#16213e] to-[#1a1a2e]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        {mounted && particles.length > 0 && (
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-orange-500/20 rounded-full"
                initial={{ 
                  x: particle.initialX, 
                  y: particle.initialY 
                }}
                animate={{ 
                  y: particle.targetY,
                  x: particle.targetX,
                }}
                transition={{ 
                  duration: particle.duration, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
              />
            ))}
          </div>
        )}

        <div className="container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-linear-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6"
              >
                <Sparkles className="w-4 h-4" />
                Now Available on iOS
              </motion.div>

              <h1 className="text-6xl lg:text-7xl font-black mb-6">
                <span className="bg-linear-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  MERGE MAX
                </span>
                <br />
                <span className="text-white text-5xl lg:text-6xl">
                  The Ultimate 2048
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                Experience the most addictive puzzle game with stunning animations, 
                multiple game modes, and exciting power-ups. Merge tiles, reach 2048, 
                and become a puzzle master!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="#download"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all"
                >
                  <Download className="w-5 h-5" />
                  Download Now
                </motion.a>

                <motion.a
                  href="#features"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  Learn More
                  <ChevronRight className="w-5 h-5" />
                </motion.a>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-6 mt-12"
              >
                {[
                  { label: 'Adventure Levels', value: '250+' },
                  { label: 'Achievements', value: '30+' },
                  { label: 'Game Modes', value: '4' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-black text-orange-400">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Demo Board */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <DemoBoard />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-white mb-4">
              Why You&apos;ll Love It
            </h2>
            <p className="text-xl text-gray-400">
              Packed with features to keep you entertained for hours
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Map className="w-8 h-8" />}
              title="250+ Adventure Levels"
              description="Progress through challenging levels with unique objectives and epic rewards"
              color="from-purple-500 to-pink-500"
              delay={0.1}
            />
            <FeatureCard
              icon={<Trophy className="w-8 h-8" />}
              title="30+ Achievements"
              description="Unlock achievements and earn bonus coins as you master the game"
              color="from-yellow-500 to-orange-500"
              delay={0.2}
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Powerful Power-Ups"
              description="Use Undo, Shuffle, and Rocket to overcome tough situations"
              color="from-green-500 to-teal-500"
              delay={0.3}
            />
            <FeatureCard
              icon={<Target className="w-8 h-8" />}
              title="Daily Quests"
              description="Complete daily challenges to earn extra coins and exclusive rewards"
              color="from-orange-500 to-red-500"
              delay={0.4}
            />
            <FeatureCard
              icon={<Gamepad2 className="w-8 h-8" />}
              title="GameCenter Integration"
              description="Compete with players worldwide on global leaderboards"
              color="from-blue-500 to-purple-500"
              delay={0.5}
            />
            <FeatureCard
              icon={<Star className="w-8 h-8" />}
              title="Stunning Animations"
              description="Smooth, satisfying animations and haptic feedback"
              color="from-pink-500 to-purple-500"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Regular Updates Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 to-pink-500/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold mb-8">
              <Calendar className="w-5 h-5" />
              Regular Updates
            </div>

            <h2 className="text-5xl font-black text-white mb-6">
              Always Fresh Content
            </h2>
            
            <p className="text-xl text-gray-300 mb-12">
              We&apos;re committed to keeping the game exciting with regular updates every 2 weeks
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
              >
                <div className="text-6xl font-black bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  100
                </div>
                <div className="text-2xl font-bold text-white mb-2">New Levels</div>
                <div className="text-gray-400">Every 2 weeks</div>
                <div className="mt-4 flex items-center justify-center gap-2 text-purple-400">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm font-semibold">Continuous Growth</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
              >
                <div className="text-6xl font-black bg-linear-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4">
                  5
                </div>
                <div className="text-2xl font-bold text-white mb-2">Special Completions</div>
                <div className="text-gray-400">Exclusive challenges</div>
                <div className="mt-4 flex items-center justify-center gap-2 text-yellow-400">
                  <Star className="w-5 h-5" />
                  <span className="text-sm font-semibold">Epic Rewards</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 bg-linear-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6"
            >
              <p className="text-white font-semibold">
                🎉 Never run out of content! New adventures await you every two weeks
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Game Modes Section */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-white mb-4">
              Multiple Game Modes
            </h2>
            <p className="text-xl text-gray-400">
              Choose your challenge, master them all
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ModeCard
              icon={<Gamepad2 className="w-12 h-12" />}
              title="Classic"
              description="Traditional 2048 gameplay with no time limits"
              color="from-orange-500 to-yellow-500"
              delay={0.1}
            />
            <ModeCard
              icon={<Map className="w-12 h-12" />}
              title="Adventure"
              description="Progress through 250 unique levels"
              color="from-purple-500 to-pink-500"
              delay={0.2}
            />
            <ModeCard
              icon={<Timer className="w-12 h-12" />}
              title="Time Attack"
              description="Race against the clock to reach 2048"
              color="from-red-500 to-orange-500"
              delay={0.3}
            />
            <ModeCard
              icon={<Heart className="w-12 h-12" />}
              title="Survival"
              description="Limited moves - make every swipe count"
              color="from-green-500 to-teal-500"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Power-Ups Demo */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-white mb-4">
              Game-Changing Power-Ups
            </h2>
            <p className="text-xl text-gray-400">
              Strategic tools to help you succeed
            </p>
          </motion.div>

          <PowerUpDemo />
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-orange-500/10 to-red-500/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Ready to Start Your
              <br />
              <span className="bg-linear-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Puzzle Adventure?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12">
              Download MergeMax now and join thousands of players worldwide!
            </p>

            <motion.a
              href="https://apps.apple.com/app/mergemax"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-linear-to-r from-orange-500 to-red-500 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transition-all"
            >
              <Download className="w-6 h-6" />
              Download on App Store
            </motion.a>

            <p className="text-gray-500 mt-6 text-sm">
              Free to play • iOS 14.0 or later
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-black text-white mb-2">MERGE MAX</h3>
              <p className="text-gray-400 text-sm">
                © 2024 codewitholiver. All rights reserved.
              </p>
            </div>

            <div className="flex gap-6">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <a 
                href="mailto:support@mergemax.com" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}