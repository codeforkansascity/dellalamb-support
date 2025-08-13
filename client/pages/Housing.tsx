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

const housingLocations: ServiceLocation[] = [
  {
    name: 'City Union Mission',
    address: '1100 E 11th St, Kansas City, MO 64106',
    phone: '816-474-9380',
    website: 'cityunionmission.org',
    notes: 'Emergency overnight shelter for men, women, and families.',
    category: 'Emergency Shelter'
  },
  {
    name: 'Hope House',
    address: 'Confidential, Kansas City, MO',
    phone: '816-461-4673',
    website: 'hopehouse.net',
    notes: 'Safe shelter and support for individuals fleeing domestic violence.',
    category: 'Domestic Violence Support'
  },
  {
    name: 'reStart, Inc.',
    address: '918 E 9th St, Kansas City, MO 64106',
    phone: '816-472-5664',
    website: 'reStartinc.org',
    notes: 'Shelter and housing assistance for individuals and families.',
    category: 'Emergency Shelter'
  },
  {
    name: 'Legal Aid of Western Missouri',
    address: '4001 Blue Parkway, Suite 300, Kansas City, MO 64130',
    phone: '816-474-6750',
    website: 'lawmo.org',
    notes: 'Free legal help for tenants facing eviction.',
    category: 'Tenant Support'
  },
  {
    name: 'Safehome',
    address: 'Confidential, Overland Park, KS',
    phone: '913-262-2868',
    website: 'safehome-ks.org',
    notes: 'Safe shelter and comprehensive services for survivors of domestic violence.',
    category: 'Domestic Violence Support'
  }
];

export default function Housing() {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const { saveFormState, getFormState } = usePageState();
  const location = useLocation();
  const pathname = location.pathname;
  const [searchQuery, setSearchQuery] = useState('');

  // Initialize form state from saved state
  useEffect(() => {
    const savedState = getFormState(pathname, 'housingPageState');
    if (savedState?.searchQuery) {
      setSearchQuery(savedState.searchQuery);
    }
  }, [pathname, getFormState]);

  // Save form state when it changes
  useEffect(() => {
    saveFormState(pathname, 'housingPageState', { searchQuery });
  }, [searchQuery, pathname, saveFormState]);

  const searchResults = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return housingLocations;
    return housingLocations.filter(location => 
      location.name.toLowerCase().includes(query) ||
      location.address.toLowerCase().includes(query) ||
      location.notes?.toLowerCase().includes(query) ||
      location.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

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
        <div className="flex items-center gap-3 mb-6">
          <Link to="/explore" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6 text-kc-navy" />
          </Link>
          <h1 className="text-2xl font-bold text-kc-navy">{t('housing')}</h1>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder={`${t('search')} ${t('housing').toLowerCase()}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 h-12 rounded-lg border border-gray-200 focus:border-kc-navy"
          />
        </div>

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

        <section className="mb-8">
          <h2 className="text-lg font-bold text-kc-navy mb-4 flex items-center gap-2">
            🏠 Emergency Shelter & Housing Support
          </h2>
          <div className="space-y-3">
            {searchResults.map(renderLocationCard)}
          </div>
        </section>

        {searchResults.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">{t('noLocationsFound')}</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
