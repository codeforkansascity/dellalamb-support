import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Phone, Globe, MapPin, Search } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
import { usePageState } from '../contexts/PageStateContext';
import { translateBusinessNote } from '../translations/businessNotes';
import { Input } from '../components/ui/input';

interface ServiceLocation {
  name: string;
  address: string;
  phone?: string;
  website?: string;
  notes?: string;
  category: string;
}

const employmentLocations: ServiceLocation[] = [
  {
    name: 'Full Employment Council',
    address: '1740 Paseo Blvd, Kansas City, MO 64108',
    phone: '816-471-2330',
    website: 'fullemploymentcouncil.com',
    notes: 'Career counseling, job search help, and training programs.',
    category: 'Job Training & Placement'
  },
  {
    name: 'Workforce Partnership',
    address: '626 Minnesota Ave, Kansas City, KS 66101',
    phone: '913-279-2600',
    website: 'workforcepartnership.com',
    notes: 'Free job search support, training, and career counseling.',
    category: 'Job Training & Placement'
  },
  {
    name: 'Catholic Charities of Northeast Kansas',
    address: 'Kansas City, KS',
    website: 'catholiccharitiesks.org',
    notes: 'Job readiness training, placement services, and support for newcomers.',
    category: 'Employment Services'
  },
  {
    name: 'Goodwill – Career & Tech Training',
    address: 'Kansas City, MO',
    website: 'goodwill.org',
    notes: 'Intro computer classes and job search assistance.',
    category: 'Skills Training'
  }
];

export default function Employment() {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const { saveFormState, getFormState } = usePageState();
  const location = useLocation();
  const pathname = location.pathname;
  const [searchQuery, setSearchQuery] = useState('');

  // Initialize form state from saved state
  useEffect(() => {
    const savedState = getFormState(pathname, 'employmentPageState');
    if (savedState?.searchQuery) {
      setSearchQuery(savedState.searchQuery);
    }
  }, [pathname, getFormState]);

  // Save form state when it changes
  useEffect(() => {
    saveFormState(pathname, 'employmentPageState', { searchQuery });
  }, [searchQuery, pathname, saveFormState]);

  // Memoized search functionality
  const searchResults = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    
    if (!query) {
      return employmentLocations;
    }

    return employmentLocations.filter(location => 
      location.name.toLowerCase().includes(query) ||
      location.address.toLowerCase().includes(query) ||
      location.notes?.toLowerCase().includes(query) ||
      location.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Function to render a location card with translated notes
  const renderLocationCard = (location: ServiceLocation, index: number) => (
    <div key={index} className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
      <h3 className="font-semibold text-kc-navy mb-2">{location.name}</h3>
      <div className="space-y-1 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{location.address}</span>
        </div>
        {location.phone && (
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <a href={`tel:${location.phone}`} className="text-kc-navy hover:underline">
              {location.phone}
            </a>
          </div>
        )}
        {location.website && (
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <a href={`https://${location.website}`} target="_blank" rel="noopener noreferrer" 
               className="text-kc-navy hover:underline">
              {location.website}
            </a>
          </div>
        )}
        {location.notes && (
          <p className="text-gray-600 mt-2 text-sm italic">
            {translateBusinessNote(location.notes, currentLanguage.code)}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <MainLayout>
      <div className="px-4 py-6">
        {/* Back Navigation */}
        <div className="flex items-center gap-3 mb-6">
          <Link to="/explore" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6 text-kc-navy" />
          </Link>
          <h1 className="text-2xl font-bold text-kc-navy">{t('employment')}</h1>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder={`${t('search')} ${t('employment').toLowerCase()}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 h-12 rounded-lg border border-gray-200 focus:border-kc-navy"
          />
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              {searchResults.length === 0 
                ? `No results found for "${searchQuery}"`
                : `Found ${searchResults.length} result${searchResults.length !== 1 ? 's' : ''} for "${searchQuery}"`
              }
            </p>
          </div>
        )}

        {/* Employment Services Section */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-kc-navy mb-4 flex items-center gap-2">
            💼 Job Training & Career Services
          </h2>
          <div className="space-y-3">
            {searchResults.map(renderLocationCard)}
          </div>
        </section>

        {/* No Results Message */}
        {searchResults.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">{t('noLocationsFound')}</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
