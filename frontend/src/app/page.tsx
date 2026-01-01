'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { ArrowRight, Sparkles, GitBranch, Zap, Shield, Coins, TrendingUp, CheckCircle2, Timer, Target, Trophy, ChevronRight, Clock, Users, Heart, Play, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  const { user, login, enterDemoMode, isDemo } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-20 lg:pt-16 lg:pb-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-honey-200/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-ocean-200/30 rounded-full blur-3xl animate-float animation-delay-200" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-grape-200/20 rounded-full blur-3xl animate-pulse-soft" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="text-center lg:text-left animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-honey-100 text-honey-700 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Automated bounty rewards for bug fixers</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-900 leading-tight mb-6">
                Fix bugs.<br />
                <span className="text-gradient-warm">Get paid.</span><br />
                <span className="text-warm-600 text-3xl sm:text-4xl lg:text-5xl">Instantly.</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-warm-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                When tests fail, bounties appear. When you fix them, MNEE stablecoin lands in your wallet. No forms. No invoices. Just code and cash.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {user ? (
                  <Link href="/dashboard" className="btn-primary text-lg px-8 py-3 group">
                    <span>Go to Dashboard</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                ) : (
                  <>
                    <button onClick={login} className="btn-primary text-lg px-8 py-3 group">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>Start Earning</span>
                      <Zap className="w-4 h-4 animate-pulse" />
                    </button>
                    <button onClick={() => enterDemoMode(false)} className="btn-ocean text-lg px-8 py-3 group">
                      <Play className="w-5 h-5" />
                      <span>Try Demo</span>
                    </button>
                  </>
                )}
                <Link href="/bounties" className="btn-secondary text-lg px-8 py-3 group">
                  <span>Browse Bounties</span>
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              
              {/* Demo Mode Options */}
              {!user && (
                <div className="mt-6 flex flex-wrap items-center gap-4 justify-center lg:justify-start">
                  <span className="text-sm text-warm-500">Or explore with demo data:</span>
                  <button onClick={() => enterDemoMode(false)} className="text-sm text-ocean-600 hover:text-ocean-700 font-medium underline-offset-2 hover:underline">
                    User Demo
                  </button>
                  <span className="text-warm-300">•</span>
                  <button onClick={() => enterDemoMode(true)} className="text-sm text-grape-600 hover:text-grape-700 font-medium underline-offset-2 hover:underline flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Admin Demo
                  </button>
                </div>
              )}
              
              <div className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-warm-500">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-ocean-500" /><span>Zero fees</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-ocean-500" /><span>Instant payouts</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-ocean-500" /><span>USD-stable value</span></div>
              </div>
            </div>
            
            <div className="relative animate-slide-up animation-delay-200">
              <div className="glass-card p-8 rounded-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-honey-400" />
                  <div className="w-3 h-3 rounded-full bg-ocean-400" />
                  <span className="ml-auto text-sm text-warm-400 font-mono">fixflow.yml</span>
                </div>
                
                <div className="bg-warm-800 rounded-xl p-4 font-mono text-sm mb-6 overflow-hidden">
                  <div className="text-warm-400 mb-2"># When tests fail...</div>
                  <div className="flex items-center gap-2 text-red-400 mb-3">
                    <span className="text-warm-500">✗</span>
                    <span>test_payment_processing</span>
                    <span className="text-warm-500">FAILED</span>
                  </div>
                  <div className="text-ocean-400 mb-1">→ Bounty created: <span className="text-honey-400">50 MNEE</span></div>
                  <div className="text-warm-500 text-xs">Issue #142 tagged with bounty label</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-warm-600 font-medium">Active Bounty</span>
                    <span className="badge-active"><span className="w-1.5 h-1.5 rounded-full bg-ocean-500 animate-pulse" />Live</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="bounty-amount flex items-baseline">50<span className="bounty-currency">MNEE</span></div>
                      <div className="text-sm text-warm-500 mt-1">≈ $50.00 USD</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-warm-500 text-sm"><Timer className="w-4 h-4" /><span>23:45:12</span></div>
                      <div className="text-xs text-warm-400">until escalation</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 glass-card p-4 rounded-2xl shadow-honey animate-bounce-soft z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <Coins className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-warm-800">Payment Sent!</div>
                    <div className="text-xs text-warm-500">+50 MNEE to @dev</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-2 -left-4 glass-card px-4 py-2 rounded-xl shadow-glass animate-float animation-delay-300">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-honey-500" />
                  <span className="text-sm font-medium text-warm-700">Top earner this week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 mb-4">Three steps to earning</h2>
            <p className="text-lg text-warm-600 max-w-2xl mx-auto">No signup forms. No payment details upfront. Just connect GitHub and start fixing.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: GitBranch, color: 'red', title: 'Test fails, bounty appears', desc: 'Your CI pipeline runs, a test breaks. FixFlow automatically creates an issue and attaches a bounty.', detail: 'Works with any CI/CD' },
              { icon: Zap, color: 'ocean', title: 'You fix, PR passes', desc: 'Submit your pull request fixing the issue. Our bot verifies tests are now passing.', detail: 'Automatic verification' },
              { icon: Coins, color: 'honey', title: 'Instant MNEE deposit', desc: 'The moment the PR is merged, MNEE stablecoin is transferred to your wallet.', detail: 'Sub-second settlement' },
            ].map((step, i) => (
              <div key={i} className="group">
                <div className="glass-card-interactive p-8 rounded-3xl h-full">
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${step.color}-400 to-${step.color}-600 flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-honey-100 flex items-center justify-center text-honey-700 font-bold text-sm">{i + 1}</div>
                  </div>
                  <h3 className="text-xl font-bold text-warm-800 mb-3">{step.title}</h3>
                  <p className="text-warm-600 leading-relaxed">{step.desc}</p>
                  <div className="mt-6 pt-6 border-t border-warm-100">
                    <div className="flex items-center gap-2 text-sm text-warm-500"><CheckCircle2 className="w-4 h-4" /><span>{step.detail}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-honey-50 via-white to-ocean-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="glass-card p-8 lg:p-12 rounded-3xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                { icon: Coins, value: '$0', label: 'Transaction Fees', sub: 'Keep 100% of bounties', gradient: 'honey' },
                { icon: Zap, value: '<1s', label: 'Payment Speed', sub: 'Instant settlement', gradient: 'ocean' },
                { icon: Shield, value: '1:1', label: 'USD Stable', sub: 'No volatility risk', gradient: 'grape' },
                { icon: TrendingUp, value: 'Auto', label: 'Escalation', sub: 'Bounties grow over time', gradient: 'honey' },
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className={`w-12 h-12 rounded-xl bg-${stat.gradient}-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <stat.icon className={`w-6 h-6 text-${stat.gradient}-600`} />
                  </div>
                  <div className={`text-4xl font-bold text-gradient-${stat.gradient} mb-2`}>{stat.value}</div>
                  <div className="text-warm-600 font-medium">{stat.label}</div>
                  <div className="text-sm text-warm-400 mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Escalation Feature */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-grape-100 text-grape-700 text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" /><span>Smart Escalation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 mb-6">The longer you wait, the more it&apos;s worth</h2>
              <p className="text-lg text-warm-600 mb-8 leading-relaxed">Unclaimed bounties don&apos;t just sit there. They grow. Every 24 hours without a fix, the bounty increases automatically.</p>
              
              <div className="space-y-4">
                {[
                  { icon: Clock, color: 'ocean', title: 'Time-based increases', desc: 'Bounties escalate at 24h, 72h, and 1 week marks automatically.' },
                  { icon: Target, color: 'honey', title: 'Configurable limits', desc: 'Project owners set max bounties—no runaway costs.' },
                  { icon: Users, color: 'grape', title: 'Community alerts', desc: 'Escalated bounties get highlighted, drawing more attention.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl bg-${item.color}-100 flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-warm-800">{item.title}</h4>
                      <p className="text-warm-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-lg font-semibold text-warm-800 mb-6">Bounty Escalation Timeline</h3>
              <div className="space-y-6">
                {[
                  { amount: 50, color: 'warm', width: '40%', label: 'Start' },
                  { amount: 60, color: 'ocean', width: '55%', label: '24 hours' },
                  { amount: 75, color: 'grape', width: '70%', label: '72 hours' },
                  { amount: 100, color: 'honey', width: '100%', label: '1 week' },
                ].map((tier, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-16 text-center">
                      <div className={`text-2xl font-bold text-${tier.color}-${tier.color === 'warm' ? '800' : '600'}`}>{tier.amount}</div>
                      <div className="text-xs text-warm-500">MNEE</div>
                    </div>
                    <div className="flex-1 h-3 bg-warm-100 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r from-${tier.color}-400 to-${tier.color}-500 rounded-full`} style={{width: tier.width}} />
                    </div>
                    <div className="text-sm text-warm-500 w-20">{tier.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 rounded-xl bg-honey-50 border border-honey-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-honey-100 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-honey-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-honey-800">Double the reward</div>
                    <div className="text-xs text-honey-600">Wait a week, earn twice as much</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why MNEE */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-900 to-warm-800" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-honey-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ocean-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-honey-500/20 text-honey-300 text-sm font-medium mb-6">
              <Coins className="w-4 h-4" /><span>Powered by MNEE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why we use MNEE stablecoin</h2>
            <p className="text-lg text-warm-300 max-w-2xl mx-auto">Real payments need real money. MNEE gives you the stability of dollars with the speed of crypto.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, color: 'honey', title: 'Stable Value', desc: '1 MNEE = 1 USD, always. No waking up to find your bounty dropped 40%.' },
              { icon: Zap, color: 'ocean', title: 'Instant Transfers', desc: 'Forget waiting for blockchain confirmations. MNEE transfers happen in milliseconds.' },
              { icon: Heart, color: 'grape', title: 'Zero Fees', desc: 'No gas fees eating into your bounty. 100% of your earnings are yours.' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 flex items-center justify-center mb-6`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-warm-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="glass-card p-12 lg:p-16 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-honey-100/50 to-ocean-100/50" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 mb-4">Ready to start earning?</h2>
              <p className="text-lg text-warm-600 mb-8 max-w-xl mx-auto">Join developers who get paid instantly for their contributions. No paperwork, no hassle.</p>
              {user ? (
                <Link href="/dashboard" className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-2">
                  Go to Dashboard<ArrowRight className="w-5 h-5" />
                </Link>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={login} className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Connect GitHub & Start
                  </button>
                  <button onClick={() => enterDemoMode(false)} className="btn-ocean text-lg px-10 py-4 inline-flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Try Demo First
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-warm-600">
            <Zap className="w-5 h-5 text-honey-500" />
            <span className="font-semibold">FixFlow</span>
          </div>
          <div className="text-sm text-warm-500">Powered by MNEE Stablecoin</div>
        </div>
      </footer>
    </div>
  );
}