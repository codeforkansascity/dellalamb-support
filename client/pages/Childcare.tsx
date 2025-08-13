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

const childcareLocations: ServiceLocation[] = [
  // Digital Services
  {
    name: 'Kansas City Public Library',
    address: '14 W 10th St, Kansas City, MO 64105',
    website: 'kclibrary.org',
    notes: 'Free public computers, Wi‑Fi, printing, and basic tech help.',
    category: 'Digital Access'
  },
  {
    name: 'PCs for People – Kansas City',
    address: 'Kansas City, MO',
    website: 'pcsforpeople.org/locations/kansas-city',
    notes: 'Discount computers and hotspot plans for income‑eligible households.',
    category: 'Digital Access'
  },
  {
    name: 'The FABRIC Lab',
    address: 'Kansas City, MO',
    website: 'thefabriclab.org',
    notes: 'Lends laptops/hotspots and offers beginner tech workshops.',
    category: 'Digital Skills'
  },
  // Immigration Services
  {
    name: 'Jewish Vocational Service (JVS)',
    address: '4600 The Paseo, Kansas City, MO 64110',
    phone: '816-471-2808',
    website: 'jvskc.org',
    notes: 'Resettlement support, case management, and language access for refugees and immigrants.',
    category: 'Immigration Support'
  },
  {
    name: 'Catholic Charities of Northeast Kansas',
    address: 'Kansas City, KS',
    website: 'catholiccharitiesks.org',
    notes: 'Resettlement and legal support for refugees and immigrants.',
    category: 'Immigration Support'
  },
  {
    name: 'Della Lamb Community Services',
    address: '500 Woodland Ave, Kansas City, MO 64106',
    phone: '816-842-8040',
    website: 'dellalamb.org',
    notes: 'Refugee resettlement, case management, and community integration programs.',
    category: 'Immigration Support'
  }
];

export default function Childcare() {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const { saveFormState, getFormState } = usePageState();
  const location = useLocation();
  const pathname = location.pathname;
  const [searchQuery, setSearchQuery] = useState('');

  // Initialize form state from saved state
  useEffect(() => {
    const savedState = getFormState(pathname, 'childcarePageState');
    if (savedState?.searchQuery) {
      setSearchQuery(savedState.searchQuery);
    }
  }, [pathname, getFormState]);

  // Save form state when it changes
  useEffect(() => {
    saveFormState(pathname, 'childcarePageState', { searchQuery });
  }, [searchQuery, pathname, saveFormState]);

  const searchResults = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return childcareLocations;
    return childcareLocations.filter(location => 
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

  // Group results by category
  const digitalServices = searchResults.filter(loc => loc.category.includes('Digital'));
  const immigrationServices = searchResults.filter(loc => loc.category.includes('Immigration'));

  return (
    <MainLayout>
      <div className="px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/explore" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6 text-kc-navy" />
          </Link>
          <h1 className="text-2xl font-bold text-kc-navy">{t('childcare')}</h1>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder={`${t('search')} family support services...`}
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

        {/* Digital Access & Skills */}
        {digitalServices.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold text-kc-navy mb-4 flex items-center gap-2">
              💻 Digital Access & Skills
            </h2>
            <div className="space-y-3">
              {digitalServices.map(renderLocationCard)}
            </div>
          </section>
        )}

        {/* Immigration Support */}
        {immigrationServices.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold text-kc-navy mb-4 flex items-center gap-2">
              🌍 Immigration & Family Support
            </h2>
            <div className="space-y-3">
              {immigrationServices.map(renderLocationCard)}
            </div>
          </section>
        )}

        {searchResults.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">{t('noLocationsFound')}</p>
          </div>
        )}

        {/* Note about childcare services */}
        <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> Traditional childcare services are being compiled. 
            For now, we've included digital access and immigration services that support families.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
