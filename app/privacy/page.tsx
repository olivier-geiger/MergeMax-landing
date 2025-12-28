'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-linear-to-br from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-black text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-400">
            Last updated: December 28, 2024
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By downloading, installing, or using MergeMax: 2048 (&quot;the App&quot;), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use the App.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. License to Use</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              codewitholiver grants you a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes, subject to these Terms of Service.
            </p>
            <p className="text-gray-300 leading-relaxed">
              You may not:
            </p>
            <ul className="text-gray-300 space-y-2 mt-2">
              <li>• Copy, modify, or create derivative works of the App</li>
              <li>• Reverse engineer, decompile, or disassemble the App</li>
              <li>• Rent, lease, loan, sell, or distribute the App</li>
              <li>• Remove or alter any copyright, trademark, or proprietary notices</li>
              <li>• Use the App for any illegal or unauthorized purpose</li>
              <li>• Use cheats, exploits, bots, or unauthorized third-party software</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Apple Licensed Application End User License Agreement (EULA)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This App is licensed, not sold, to you. Your use of the App is also governed by Apple&apos;s Licensed Application End User License Agreement (EULA).
            </p>
            <p className="text-gray-300 leading-relaxed">
              You can review Apple&apos;s standard EULA at:{' '}
              <a 
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:underline break-all"
              >
                https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
              </a>
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              In the event of any conflict between these Terms and Apple&apos;s EULA, Apple&apos;s EULA shall control.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The App integrates with the following third-party services:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">4.1 Firebase (Google)</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• <strong>Firebase Analytics:</strong> Tracks app usage and user behavior to improve the App</li>
                  <li>• <strong>Firebase Crashlytics:</strong> Collects crash reports and error logs for debugging</li>
                  <li>• Subject to <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Firebase Privacy Policy</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">4.2 Google AdMob</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Displays advertisements (banner, interstitial, and rewarded ads)</li>
                  <li>• Collects advertising data for personalized ads</li>
                  <li>• You can opt out of personalized ads in your device settings</li>
                  <li>• Subject to <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">AdMob Privacy Policy</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">4.3 Apple Services</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• <strong>GameCenter:</strong> Leaderboards and achievements (requires GameCenter account)</li>
                  <li>• <strong>iCloud:</strong> Syncs game progress across your Apple devices</li>
                  <li>• <strong>StoreKit:</strong> Processes in-app purchases</li>
                  <li>• Subject to <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Apple Privacy Policy</a></li>
                </ul>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mt-4">
              By using the App, you acknowledge and agree to the terms of these third-party services.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. In-App Purchases</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The App offers the following in-app purchases:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>Coin Packages:</strong> Virtual currency for in-game use (250, 750, 1500, 3500, 8000 coins)</li>
              <li>• <strong>Power-Ups:</strong> Undo, Shuffle, and Rocket power-ups</li>
              <li>• <strong>Remove Ads:</strong> One-time purchase to disable all advertisements</li>
              <li>• <strong>Grid Sizes:</strong> Unlock 5×5 grid</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              All purchases are processed through the Apple App Store and are subject to Apple&apos;s terms and conditions. <strong>Purchases are final and non-refundable</strong> except as required by law or as specified in Apple&apos;s refund policy.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Virtual currency (coins) has no real-world value and cannot be exchanged for real money or transferred outside the App.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">6. Data Collection & Privacy</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The App collects and processes the following data:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>Game Progress:</strong> Scores, levels unlocked, achievements, coins</li>
              <li>• <strong>Usage Analytics:</strong> App events, gameplay behavior, purchase history</li>
              <li>• <strong>Device Information:</strong> Device model, OS version, app version</li>
              <li>• <strong>Crash Reports:</strong> Error logs and stack traces for debugging</li>
              <li>• <strong>Advertising Data:</strong> Ad interactions and preferences (via AdMob)</li>
              <li>• <strong>GameCenter Data:</strong> Player name, ID, scores, achievements</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              For more details, please review our{' '}
              <Link href="/privacy" className="text-orange-400 hover:underline">
                Privacy Policy
              </Link>.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">7. iCloud Sync</h2>
            <p className="text-gray-300 leading-relaxed">
              If you enable iCloud sync, your game progress will be automatically synchronized across your Apple devices. This includes:
            </p>
            <ul className="text-gray-300 space-y-2 mt-2">
              <li>• Coins and in-game currency</li>
              <li>• Unlocked levels and achievements</li>
              <li>• Best scores and statistics</li>
              <li>• Power-ups inventory</li>
              <li>• Purchase history (Remove Ads status)</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              You can disable iCloud sync in your device settings at any time.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">8. User Conduct</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Use cheats, exploits, automation software, bots, hacks, or unauthorized third-party software</li>
              <li>• Attempt to gain unauthorized access to the App or its related systems</li>
              <li>• Interfere with or disrupt the App, servers, or networks</li>
              <li>• Use the App to transmit any harmful code or malware</li>
              <li>• Harass, abuse, or harm other users</li>
              <li>• Impersonate any person or entity</li>
              <li>• Manipulate leaderboards or achievements through fraudulent means</li>
              <li>• Attempt to reverse engineer Firebase or AdMob integrations</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Violation of these rules may result in immediate termination of your access to the App and removal from GameCenter leaderboards.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">9. GameCenter and Leaderboards</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you choose to use GameCenter features:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• You must comply with Apple&apos;s Game Center Terms and Conditions</li>
              <li>• Your GameCenter display name and scores will be publicly visible</li>
              <li>• We reserve the right to remove scores or ban accounts suspected of cheating</li>
              <li>• Leaderboard data is managed by Apple&apos;s GameCenter service</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">10. Advertisements</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The App displays advertisements powered by Google AdMob, including:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Banner ads (displayed at bottom of screen)</li>
              <li>• Interstitial ads (full-screen ads shown periodically)</li>
              <li>• Rewarded ads (watch to earn in-game rewards)</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              You can permanently remove all ads by purchasing the &quot;Remove Ads&quot; option in the Shop. Ad frequency: interstitial ads are shown every 3 games.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">11. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              All content in the App, including but not limited to graphics, user interface, animations, audio, game mechanics, and software code, is owned by or licensed to codewitholiver and is protected by copyright, trademark, and other intellectual property laws.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">12. Updates and Modifications</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update, modify, or discontinue the App or any part thereof at any time without notice. This includes:
            </p>
            <ul className="text-gray-300 space-y-2 mt-2">
              <li>• Adding new adventure levels (100 new levels every 2 weeks)</li>
              <li>• Modifying game balance or features</li>
              <li>• Changing pricing of in-app purchases</li>
              <li>• Updating third-party integrations (Firebase, AdMob)</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              We are not liable to you or any third party for any modification, suspension, or discontinuance of the App.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">13. Disclaimer of Warranties</h2>
            <p className="text-gray-300 leading-relaxed">
              THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">14. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, CODEWITHOLIVER SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
            </p>
            <ul className="text-gray-300 space-y-2 mt-2">
              <li>• Your use or inability to use the App</li>
              <li>• Unauthorized access to your data or iCloud sync</li>
              <li>• Third-party conduct or content (Firebase, AdMob, GameCenter)</li>
              <li>• Loss of in-game progress or virtual currency</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">15. Indemnification</h2>
            <p className="text-gray-300 leading-relaxed">
              You agree to indemnify and hold harmless codewitholiver, its affiliates, and third-party service providers (Google, Apple) from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the App or violation of these Terms.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">16. Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to terminate or suspend your access to the App immediately, without prior notice or liability, for any reason, including:
            </p>
            <ul className="text-gray-300 space-y-2 mt-2">
              <li>• Breach of these Terms</li>
              <li>• Cheating or exploitation of game mechanics</li>
              <li>• Fraudulent purchases or chargebacks</li>
              <li>• Harassment of other users</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Upon termination, your right to use the App will immediately cease, and your iCloud data may be deleted.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">17. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of France (Strasbourg), without regard to its conflict of law provisions. Any disputes shall be resolved in accordance with French law.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">18. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of any changes by:
            </p>
            <ul className="text-gray-300 space-y-2 mt-2">
              <li>• Posting the new Terms within the App</li>
              <li>• Updating the &quot;Last updated&quot; date</li>
              <li>• Sending a push notification (if enabled)</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Your continued use of the App after any changes constitutes acceptance of the new Terms.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">19. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="text-gray-300">
              <p>Email: <a href="mailto:olivier.codes@gmail.com" className="text-orange-400 hover:underline">olivier.codes@gmail.com</a></p>
              <p className="mt-2">Developer: codewitholiver</p>
              <p className="mt-2">Website: <a href="https://mergemax.app" className="text-orange-400 hover:underline">mergemax.app</a></p>
            </div>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-6 mt-8">
            <p className="text-orange-300 text-sm">
              <strong>Important Notice:</strong> By using MergeMax: 2048, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our{' '}
              <Link href="/privacy" className="underline hover:text-orange-200">
                Privacy Policy
              </Link>. The App uses third-party services (Firebase Analytics, Google AdMob, Apple GameCenter, iCloud) which have their own terms and privacy policies.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}