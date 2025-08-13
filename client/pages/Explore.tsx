import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, GraduationCap, Utensils, Scale, Baby, Shield, Briefcase, Bus, Home, MapPin } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import { useTranslation } from '../hooks/useTranslation';
import { usePageState } from '../contexts/PageStateContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const serviceCategories = [
  {
    id: 'english-classes',
    icon: GraduationCap,
    translationKey: 'englishClasses' as const,
    path: '/services/english-classes',
  },
  {
    id: 'childcare',
    icon: Baby,
    translationKey: 'childcare' as const,
    path: '/services/childcare',
  },
  {
    id: 'transportation',
    icon: Bus,
    translationKey: 'transportation' as const,
    path: '/services/transportation',
  },
  {
    id: 'food',
    icon: Utensils,
    translationKey: 'food' as const,
    path: '/services/food',
  },
  {
    id: 'employment',
    icon: Briefcase,
    translationKey: 'employment' as const,
    path: '/services/employment',
  },
  {
    id: 'housing',
    icon: Home,
    translationKey: 'housing' as const,
    path: '/services/housing',
  },
  {
    id: 'health-support',
    icon: Shield,
    translationKey: 'healthSupport' as const,
    path: '/services/health-support',
  },
  {
    id: 'legal',
    icon: Scale,
    translationKey: 'legal' as const,
    path: '/services/legal',
  },
];

export default function Explore() {
  const { t } = useTranslation();
  const { saveFormState, getFormState } = usePageState();
  const location = useLocation();
  const pathname = location.pathname;
  const [showMap, setShowMap] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Initialize search query from saved state
  useEffect(() => {
    const savedSearchState = getFormState(pathname, 'searchForm');
    if (savedSearchState?.searchQuery) {
      setSearchQuery(savedSearchState.searchQuery);
    }
  }, [pathname, getFormState]);

  // Save search state when it changes
  useEffect(() => {
    saveFormState(pathname, 'searchForm', { searchQuery });
  }, [searchQuery, pathname, saveFormState]);

  return (
    <MainLayout>
      <div className="px-4 py-6">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-kc-navy mb-6">{t('explore').toUpperCase()}</h1>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder={t('search')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 h-14 text-lg rounded-full border-2 border-gray-200 focus:border-kc-navy bg-white"
          />
        </div>

        {/* Service Categories */}
        <div className="space-y-4 mb-8">
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                to={category.path}
                className="block"
              >
                <Button
                  variant="outline"
                  className="w-full h-16 justify-start text-left border-2 border-gray-200 hover:border-kc-navy bg-white hover:bg-kc-navy/5 rounded-full transition-all duration-200"
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-kc-navy" />
                    </div>
                    <span className="text-lg font-medium text-kc-navy flex-1">
                      {t(category.translationKey)}
                    </span>
                  </div>
                </Button>
              </Link>
            );
          })}
        </div>

        {/* Map Section */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex justify-center">
            <button
              onClick={() => setShowMap(!showMap)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                showMap
                  ? 'bg-kc-navy text-white'
                  : 'text-kc-navy hover:bg-kc-navy/5'
              }`}
            >
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Map</span>
            </button>
          </div>

          {/* Map Placeholder */}
          {showMap && (
            <div className="mt-4 h-64 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 font-medium">Map View Coming Soon</p>
                <p className="text-sm text-gray-400">Google Maps integration will be added here</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
