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
            Last updated: December 26, 2024
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
              By downloading, installing, or using MergeMax: 2048 (&quot;the App&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
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
            <h2 className="text-2xl font-bold text-white mb-4">4. In-App Purchases</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The App offers in-app purchases, including:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Coin packages</li>
              <li>• Power-up bundles</li>
              <li>• Remove ads</li>
              <li>• Premium features</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              All purchases are processed through the Apple App Store and are subject to Apple&apos;s terms and conditions. Purchases are final and non-refundable except as required by law or as specified in Apple&apos;s refund policy.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. User Conduct</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Use cheats, exploits, automation software, bots, hacks, or unauthorized third-party software</li>
              <li>• Attempt to gain unauthorized access to the App or its related systems</li>
              <li>• Interfere with or disrupt the App or servers</li>
              <li>• Use the App to transmit any harmful code</li>
              <li>• Harass, abuse, or harm other users</li>
              <li>• Impersonate any person or entity</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">6. GameCenter and Leaderboards</h2>
            <p className="text-gray-300 leading-relaxed">
              If you choose to use GameCenter features, you must comply with Apple&apos;s Game Center Terms and Conditions. We reserve the right to remove scores or ban accounts that we believe have been achieved through cheating or exploitation.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              All content in the App, including but not limited to graphics, user interface, audio clips, video clips, editorial content, and the scripts and software used to implement the App, is owned by or licensed to codewitholiver and is protected by copyright, trademark, and other intellectual property laws.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">8. Updates and Modifications</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update, modify, or discontinue the App or any part thereof at any time without notice. We are not liable to you or any third party for any modification, suspension, or discontinuance of the App.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-gray-300 leading-relaxed">
              THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, CODEWITHOLIVER SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE APP.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">11. Indemnification</h2>
            <p className="text-gray-300 leading-relaxed">
              You agree to indemnify and hold harmless codewitholiver and its affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the App or violation of these Terms.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">12. Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to terminate or suspend your access to the App immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the App will immediately cease.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">13. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of your jurisdiction, without regard to its conflict of law provisions.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">14. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms within the App and updating the &quot;Last updated&quot; date. Your continued use of the App after any changes constitutes acceptance of the new Terms.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">15. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="text-gray-300">
              <p>Email: <a href="mailto:support@mergemax.com" className="text-orange-400 hover:underline">support@mergemax.com</a></p>
              <p className="mt-2">Developer: codewitholiver</p>
            </div>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-6 mt-8">
            <p className="text-orange-300 text-sm">
              <strong>Important:</strong> By using MergeMax: 2048, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}