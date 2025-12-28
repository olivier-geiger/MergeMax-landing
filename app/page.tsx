'use client'

import { motion } from 'framer-motion'
import { 
  Gamepad2, Trophy, Zap, Target, Star, Download,
  ChevronRight, Sparkles, Timer, Heart, Map,
  Calendar, TrendingUp,
} from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import DemoBoard from '@/components/DemoBoard'
import FeatureCard from '@/components/FeatureCard'
import ModeCard from '@/components/ModeCard'
import PowerUpDemo from '@/components/PowerUpDemo'

// Ajoutez cette interface pour typer les particules
interface Particle {
  initialX: number
  initialY: number
  targetX: number
  targetY: number
  duration: number
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([]) // <-- CHANGEZ ICI

  useEffect(() => {
    const newParticles: Particle[] = [...Array(20)].map(() => ({ // <-- CHANGEZ ICI
      initialX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      initialY: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
      targetX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      targetY: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
      duration: Math.random() * 10 + 10,
    }))
    
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
                {t('hero.badge')}
              </motion.div>

              <h1 className="text-6xl lg:text-7xl font-black mb-6">
                <span className="bg-linear-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  {t('hero.title')}
                </span>
                <br />
                <span className="text-white text-5xl lg:text-6xl">
                  {t('hero.subtitle')}
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                {t('hero.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="#download"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all"
                >
                  <Download className="w-5 h-5" />
                  {t('hero.downloadNow')}
                </motion.a>

                <motion.a
                  href="#features"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  {t('hero.learnMore')}
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
                  { label: t('hero.stats.levels'), value: '250+' },
                  { label: t('hero.stats.achievements'), value: '30+' },
                  { label: t('hero.stats.modes'), value: '4' },
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
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-400">
              {t('features.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Map className="w-8 h-8" />}
              title={t('features.adventureLevels.title')}
              description={t('features.adventureLevels.description')}
              color="from-purple-500 to-pink-500"
              delay={0.1}
            />
            <FeatureCard
              icon={<Trophy className="w-8 h-8" />}
              title={t('features.achievements.title')}
              description={t('features.achievements.description')}
              color="from-yellow-500 to-orange-500"
              delay={0.2}
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title={t('features.powerups.title')}
              description={t('features.powerups.description')}
              color="from-green-500 to-teal-500"
              delay={0.3}
            />
            <FeatureCard
              icon={<Target className="w-8 h-8" />}
              title={t('features.dailyQuests.title')}
              description={t('features.dailyQuests.description')}
              color="from-orange-500 to-red-500"
              delay={0.4}
            />
            <FeatureCard
              icon={<Gamepad2 className="w-8 h-8" />}
              title={t('features.gamecenter.title')}
              description={t('features.gamecenter.description')}
              color="from-blue-500 to-purple-500"
              delay={0.5}
            />
            <FeatureCard
              icon={<Star className="w-8 h-8" />}
              title={t('features.animations.title')}
              description={t('features.animations.description')}
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
              {t('updates.badge')}
            </div>

            <h2 className="text-5xl font-black text-white mb-6">
              {t('updates.title')}
            </h2>
            
            <p className="text-xl text-gray-300 mb-12">
              {t('updates.subtitle')}
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
                  {t('updates.newLevels.count')}
                </div>
                <div className="text-2xl font-bold text-white mb-2">{t('updates.newLevels.title')}</div>
                <div className="text-gray-400">{t('updates.newLevels.frequency')}</div>
                <div className="mt-4 flex items-center justify-center gap-2 text-purple-400">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm font-semibold">{t('updates.newLevels.badge')}</span>
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
                  {t('updates.completions.count')}
                </div>
                <div className="text-2xl font-bold text-white mb-2">{t('updates.completions.title')}</div>
                <div className="text-gray-400">{t('updates.completions.description')}</div>
                <div className="mt-4 flex items-center justify-center gap-2 text-yellow-400">
                  <Star className="w-5 h-5" />
                  <span className="text-sm font-semibold">{t('updates.completions.badge')}</span>
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
                {t('updates.banner')}
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
              {t('modes.title')}
            </h2>
            <p className="text-xl text-gray-400">
              {t('modes.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ModeCard
              icon={<Gamepad2 className="w-12 h-12" />}
              title={t('modes.classic.title')}
              description={t('modes.classic.description')}
              color="from-orange-500 to-yellow-500"
              delay={0.1}
            />
            <ModeCard
              icon={<Map className="w-12 h-12" />}
              title={t('modes.adventure.title')}
              description={t('modes.adventure.description')}
              color="from-purple-500 to-pink-500"
              delay={0.2}
            />
            <ModeCard
              icon={<Timer className="w-12 h-12" />}
              title={t('modes.timeAttack.title')}
              description={t('modes.timeAttack.description')}
              color="from-red-500 to-orange-500"
              delay={0.3}
            />
            <ModeCard
              icon={<Heart className="w-12 h-12" />}
              title={t('modes.survival.title')}
              description={t('modes.survival.description')}
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
              {t('powerups.title')}
            </h2>
            <p className="text-xl text-gray-400">
              {t('powerups.subtitle')}
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
              {t('cta.title')}
              <br />
              <span className="bg-linear-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                {t('cta.subtitle')}
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12">
              {t('cta.description')}
            </p>

            <motion.a
              href="https://apps.apple.com/app/mergemax"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-linear-to-r from-orange-500 to-red-500 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transition-all"
            >
              <Download className="w-6 h-6" />
              {t('cta.download')}
            </motion.a>

            <p className="text-gray-500 mt-6 text-sm">
              {t('cta.footer')}
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
                {t('footer.copyright')}
              </p>
            </div>

            <div className="flex gap-6">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t('navigation.privacy')}
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t('navigation.terms')}
              </Link>
              <a 
                href="mailto:support@mergemax.com" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t('navigation.support')}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}