'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Menu, X, User, LogOut, Settings, Shield, Sparkles, Target, FolderKanban, LayoutDashboard, Zap, Play, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const { user, loading, login, logout, isDemo, exitDemoMode } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.profile-menu') && !target.closest('.profile-button')) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => pathname === path;

  const NavLink = ({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon?: any }) => (
    <Link 
      href={href} 
      className={`group flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
        isActive(href)
          ? 'bg-gradient-to-r from-honey-100 to-honey-50 text-honey-700 shadow-sm'
          : 'text-warm-600 hover:text-warm-800 hover:bg-warm-100/50'
      }`}
    >
      {Icon && (
        <Icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
          isActive(href) ? 'text-honey-500' : 'text-warm-400'
        }`} />
      )}
      {children}
      {isActive(href) && (
        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-honey-400 animate-pulse" />
      )}
    </Link>
  );

  return (
    <>
      {/* Demo Mode Banner */}
      {isDemo && (
        <div className="bg-gradient-to-r from-ocean-500 to-grape-500 text-white text-center py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-sm">
            <Eye className="w-4 h-4" />
            <span className="font-medium">Demo Mode</span>
            <span className="hidden sm:inline text-ocean-100">— Exploring with sample data</span>
            <button
              onClick={exitDemoMode}
              className="ml-3 px-3 py-1 rounded-lg bg-white/20 hover:bg-white/30 transition-colors font-medium"
            >
              Exit Demo
            </button>
          </div>
        </div>
      )}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-card rounded-none border-x-0 border-t-0'
          : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-honey-400 to-honey-600 flex items-center justify-center shadow-honey transform transition-transform group-hover:scale-105">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-ocean-400 rounded-full border-2 border-white animate-bounce-soft" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-warm-800">Fix</span>
                <span className="text-xl font-bold text-gradient-honey">Flow</span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex ml-10 space-x-1">
              <NavLink href="/bounties" icon={Sparkles}>
                Explore
              </NavLink>
              {user && (
                <>
                  <NavLink href="/dashboard" icon={LayoutDashboard}>
                    Dashboard
                  </NavLink>
                  <NavLink href="/projects" icon={FolderKanban}>
                    Projects
                  </NavLink>
                </>
              )}
              {user?.role === 'admin' && (
                <NavLink href="/admin" icon={Shield}>
                  Admin
                </NavLink>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {loading ? (
              <div className="w-10 h-10 rounded-xl skeleton" />
            ) : user ? (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="profile-button flex items-center gap-3 p-1.5 pr-3 rounded-xl glass-card-interactive hover:shadow-md"
                >
                  {user.avatarUrl ? (
                    <Image
                      src={user.avatarUrl}
                      alt={user.name || user.githubLogin}
                      width={36}
                      height={36}
                      className="rounded-lg ring-2 ring-white"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-honey-400 to-honey-600 flex items-center justify-center text-white font-semibold shadow-inner">
                      {user.githubLogin[0].toUpperCase()}
                    </div>
                  )}
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-semibold text-warm-800 leading-tight">
                      {user.name || user.githubLogin}
                    </p>
                    <p className="text-xs text-warm-500">@{user.githubLogin}</p>
                  </div>
                  {isDemo && (
                    <span className="hidden md:flex items-center gap-1 px-2 py-0.5 rounded-full bg-ocean-100 text-ocean-700 text-xs font-medium">
                      <Play className="w-3 h-3" />
                      Demo
                    </span>
                  )}
                  {user.role === 'admin' && !isDemo && (
                    <span className="hidden md:flex items-center gap-1 px-2 py-0.5 rounded-full bg-grape-100 text-grape-700 text-xs font-medium">
                      <Shield className="w-3 h-3" />
                      Admin
                    </span>
                  )}
                </button>

                {/* Profile Dropdown */}
                {profileOpen && (
                  <div className="profile-menu absolute right-0 mt-2 w-64 glass-card rounded-2xl shadow-glass-lg overflow-hidden animate-scale-in">
                    {/* User Info Header */}
                    <div className="px-4 py-4 bg-gradient-to-br from-honey-50 to-ocean-50 border-b border-warm-100">
                      <div className="flex items-center gap-3">
                        {user.avatarUrl ? (
                          <Image
                            src={user.avatarUrl}
                            alt={user.name || user.githubLogin}
                            width={48}
                            height={48}
                            className="rounded-xl ring-2 ring-white shadow-md"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-honey-400 to-honey-600 flex items-center justify-center text-white text-xl font-bold shadow-md">
                            {user.githubLogin[0].toUpperCase()}
                          </div>
                        )}
                        <div>
                          <p className="font-semibold text-warm-800">{user.name || user.githubLogin}</p>
                          <p className="text-sm text-warm-500">@{user.githubLogin}</p>
                        </div>
                      </div>
                      {isDemo && (
                        <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ocean-100 text-ocean-700 text-xs font-medium">
                          <Play className="w-3.5 h-3.5" />
                          Demo Mode {user.role === 'admin' ? '(Admin View)' : '(User View)'}
                        </div>
                      )}
                      {user.role === 'admin' && !isDemo && (
                        <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-grape-100 text-grape-700 text-xs font-medium">
                          <Shield className="w-3.5 h-3.5" />
                          System Administrator
                        </div>
                      )}
                    </div>

                    {/* Menu Items */}
                    <div className="p-2">
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-warm-700 hover:bg-warm-100/50 transition-colors"
                        onClick={() => setProfileOpen(false)}
                      >
                        <LayoutDashboard className="w-4 h-4 text-warm-400" />
                        <span className="font-medium">Dashboard</span>
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-warm-700 hover:bg-warm-100/50 transition-colors"
                        onClick={() => setProfileOpen(false)}
                      >
                        <Settings className="w-4 h-4 text-warm-400" />
                        <span className="font-medium">Settings</span>
                      </Link>
                    </div>

                    {/* Sign Out / Exit Demo */}
                    <div className="p-2 border-t border-warm-100">
                      {isDemo ? (
                        <button
                          onClick={() => {
                            exitDemoMode();
                            setProfileOpen(false);
                          }}
                          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-ocean-600 hover:bg-ocean-50 transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          <span className="font-medium">Exit Demo</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            logout();
                            setProfileOpen(false);
                          }}
                          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          <span className="font-medium">Sign Out</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={login}
                className="btn-primary group"
              >
                <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="hidden sm:inline">Get Started</span>
                <Zap className="w-4 h-4 animate-pulse" />
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-warm-100/50 transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X className="w-6 h-6 text-warm-600" /> : <Menu className="w-6 h-6 text-warm-600" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass-card rounded-t-none border-t-0 shadow-glass-lg animate-slide-down">
          <div className="p-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto scrollbar-custom">
            <Link
              href="/bounties"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                isActive('/bounties')
                  ? 'bg-gradient-to-r from-honey-100 to-honey-50 text-honey-700'
                  : 'text-warm-600 hover:bg-warm-100/50'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              <Sparkles className={`w-5 h-5 ${isActive('/bounties') ? 'text-honey-500' : 'text-warm-400'}`} />
              Explore Bounties
            </Link>
            
            {user && (
              <>
                <Link
                  href="/dashboard"
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                    isActive('/dashboard')
                      ? 'bg-gradient-to-r from-honey-100 to-honey-50 text-honey-700'
                      : 'text-warm-600 hover:bg-warm-100/50'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <LayoutDashboard className={`w-5 h-5 ${isActive('/dashboard') ? 'text-honey-500' : 'text-warm-400'}`} />
                  Dashboard
                </Link>
                <Link
                  href="/projects"
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                    isActive('/projects')
                      ? 'bg-gradient-to-r from-honey-100 to-honey-50 text-honey-700'
                      : 'text-warm-600 hover:bg-warm-100/50'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <FolderKanban className={`w-5 h-5 ${isActive('/projects') ? 'text-honey-500' : 'text-warm-400'}`} />
                  My Projects
                </Link>
                <Link
                  href="/settings"
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                    isActive('/settings')
                      ? 'bg-gradient-to-r from-honey-100 to-honey-50 text-honey-700'
                      : 'text-warm-600 hover:bg-warm-100/50'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <Settings className={`w-5 h-5 ${isActive('/settings') ? 'text-honey-500' : 'text-warm-400'}`} />
                  Settings
                </Link>
              </>
            )}
            
            {user?.role === 'admin' && (
              <>
                <div className="my-3 border-t border-warm-200/50" />
                <Link
                  href="/admin"
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                    isActive('/admin')
                      ? 'bg-gradient-to-r from-grape-100 to-grape-50 text-grape-700'
                      : 'text-warm-600 hover:bg-warm-100/50'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <Shield className={`w-5 h-5 ${isActive('/admin') ? 'text-grape-500' : 'text-warm-400'}`} />
                  Admin Panel
                </Link>
              </>
            )}
            
            {user && (
              <>
                <div className="my-3 border-t border-warm-200/50" />
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl font-medium text-red-600 hover:bg-red-50 transition-all"
                >
                  <LogOut className="w-5 h-5" />
                  Sign Out
                </button>
              </>
            )}
          </div>
        </div>
      )}
      </nav>
    </>
  );
}