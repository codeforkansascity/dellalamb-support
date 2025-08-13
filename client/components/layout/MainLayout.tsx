import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Search, Users, MessageCircle, Globe, Bell } from 'lucide-react';
import { useLanguage, SUPPORTED_LANGUAGES } from '../../contexts/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

interface MainLayoutProps {
  children: React.ReactNode;
}

const navigationItems = [
  { path: '/', icon: Home, labelKey: 'home' as const },
  { path: '/explore', icon: Search, labelKey: 'explore' as const },
  { path: '/community', icon: Users, labelKey: 'community' as const },
  { path: '/messages', icon: MessageCircle, labelKey: 'messages' as const },
];

export default function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentLanguage, setCurrentLanguage } = useLanguage();
  const { t } = useTranslation();
  const { setScrollContainer } = useScrollPosition();
  const mainRef = useRef<HTMLElement>(null);

  // Mock notification count
  const unreadNotificationCount = 3;

  useEffect(() => {
    if (mainRef.current) {
      setScrollContainer(mainRef.current);
    }
  }, [setScrollContainer]);

  return (
    <div className="h-screen bg-cream flex flex-col relative">
      {/* Header */}
      <header className="bg-cream border-b border-border px-4 py-3 flex justify-between items-center flex-shrink-0">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F5929b9f73f214fc6a99c554fef925db0%2Fe7bf35db4d34427483935533d67c8167?format=webp&width=120"
            alt="LinkUp KC Logo"
            className="h-8 w-auto"
          />
        </div>

        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-kc-navy/5 transition-colors">
              <Globe className="w-5 h-5 text-kc-navy" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {SUPPORTED_LANGUAGES.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  onClick={() => setCurrentLanguage(language)}
                  className={`flex items-center gap-3 ${
                    currentLanguage.code === language.code ? 'bg-kc-navy/5' : ''
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span>{language.name}</span>
                  {currentLanguage.code === language.code && (
                    <div className="w-2 h-2 rounded-full bg-kc-navy ml-auto"></div>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Notification Bell */}
          <button
            onClick={() => navigate('/messages')}
            className="relative w-10 h-10 rounded-lg flex items-center justify-center hover:bg-kc-navy/5 transition-colors"
          >
            <Bell className="w-5 h-5 text-kc-navy" />
            {unreadNotificationCount > 0 && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-welcome-red rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">{unreadNotificationCount}</span>
              </div>
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main ref={mainRef} className="flex-1 overflow-y-auto pb-20">
        {children}
      </main>

      {/* Bottom Navigation - Fixed */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border px-4 py-2 z-50">
        <div className="flex justify-around items-center">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors ${
                  isActive
                    ? 'text-kc-navy bg-kc-navy/5'
                    : 'text-gray-600 hover:text-kc-navy'
                }`}
              >
                <Icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-xs font-medium">{t(item.labelKey)}</span>
                {isActive && (
                  <div className="w-6 h-1 bg-kc-navy rounded-full mt-1"></div>
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
