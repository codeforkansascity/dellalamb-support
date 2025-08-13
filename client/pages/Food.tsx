import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Phone, Globe, MapPin, Search, Filter } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
import { usePageState } from '../contexts/PageStateContext';
import { translateBusinessNote } from '../translations/businessNotes';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

interface FoodLocation {
  name: string;
  address: string;
  phone?: string;
  website?: string;
  notes?: string;
  subcategory: string;
}

const foodLocationsByCategory = {
  africanCaribbean: [
    {
      name: 'Crossland International Market',
      address: '19 E 3rd St, Kansas City, MO 64106',
      phone: '(816) 448-3004',
      notes: 'African, South & Central American, Caribbean - International ingredients, frozen fish, exotic produce',
      subcategory: 'African, Caribbean'
    },
    {
      name: 'African International Market LLC',
      address: '3618 US-24, Kansas City, MO 64124',
      notes: 'African produce & goods',
      subcategory: 'African'
    },
    {
      name: 'Banadir Grocery',
      address: '4020 St John Ave, Kansas City, MO 64123',
      notes: 'East African and Gulf region groceries',
      subcategory: 'Somali / East African'
    },
    {
      name: 'Fannie\'s West African',
      address: '4105 Troost Ave, Kansas City, MO 64110',
      notes: 'West African groceries',
      subcategory: 'West African'
    },
    {
      name: 'Aboom Tropical Market',
      address: '6408 N Oak Trafficway, Gladstone, MO 64118',
      notes: 'Tropical groceries',
      subcategory: 'Afro-Caribbean'
    },
    {
      name: 'UNIVERSAL AFRICAN MARKET LLC',
      address: '7519 N Oak Trafficway, Gladstone, MO 64118',
      notes: 'African groceries',
      subcategory: 'African'
    },
    {
      name: 'Afro-Caribbean Food Market',
      address: '11134 Blue Ridge Blvd, Kansas City, MO 64134',
      notes: 'Cultural groceries',
      subcategory: 'Afro-Caribbean'
    },
    {
      name: 'Karibu Store',
      address: '2532 Independence Ave, Kansas City, MO 64124',
      notes: 'Community store',
      subcategory: 'African / East African'
    },
    {
      name: 'Mogadisho Market, LLC',
      address: '2319 Independence Ave, Kansas City, MO 64124',
      notes: 'East African groceries',
      subcategory: 'Somali/East African'
    },
    {
      name: 'Somali Star Shop',
      address: '2325 Olive St, Kansas City, MO 64124',
      notes: 'Somali groceries',
      subcategory: 'Somali'
    }
  ],
  asianMarkets: [
    {
      name: '888 Int\'l Market & Café',
      address: '10118 W 119th St, Overland Park, KS 66213',
      phone: '(913) 341-8700',
      website: '888intlmarket.com',
      notes: 'Pan-Asian + bakery, cosmetics, appliances - One of the largest in metro',
      subcategory: 'Pan-Asian'
    },
    {
      name: 'Pan‑Asia Supermarket',
      address: '11940 Metcalf Ave, Overland Park, KS 66213',
      website: 'panasiasupermarket.com',
      notes: 'Mega market, open year‑round, fresh & live seafood',
      subcategory: 'Pan-Asian'
    },
    {
      name: 'Chinatown Food Market',
      address: '202 Grand Blvd, Kansas City, MO 64106',
      notes: 'Great for mooncakes and fishmongery',
      subcategory: 'Pan-Asian, seafood'
    },
    {
      name: 'Hong Kong Supermarket',
      address: '6421 E Truman Rd, Kansas City, MO 64126',
      notes: 'Large Asian supermarket',
      subcategory: 'Chinese/Vietnamese/Asian'
    },
    {
      name: 'Hung Vuong Market',
      address: '303 Grand Blvd, Kansas City, MO 64106',
      notes: 'Asian grocery at City Market',
      subcategory: 'Vietnamese/Asian'
    },
    {
      name: 'DAI NAM USA',
      address: '29 W 14th Ave, North Kansas City, MO 64116',
      notes: 'Asian groceries',
      subcategory: 'Vietnamese / Asian'
    },
    {
      name: 'Manila Grocery',
      address: '7412 N Oak Trafficway, Kansas City, MO 64118',
      notes: 'Filipino groceries',
      subcategory: 'Filipino'
    },
    {
      name: 'KC Asian Mart',
      address: 'Kansas City (sitewide)',
      website: 'kcasianmart.com',
      notes: 'Family‑owned, sushi, opened 2024',
      subcategory: 'Asian (multi)'
    },
    {
      name: 'Joong‑Ang Oriental Market',
      address: '7800 Shawnee Mission Pkwy, Overland Park, KS',
      notes: 'Pan-Asian, Korean-focused',
      subcategory: 'Korean/Asian'
    }
  ],
  hispanicLatino: [
    {
      name: 'El Mercado Fresco',
      address: '5117 Independence Ave, Kansas City, MO 64124; multiple locations',
      phone: '(816) 800-4580',
      website: 'elmercadofresco.com',
      notes: 'Local chain; Latin bakery, produce, juices',
      subcategory: 'Hispanic / Mexican'
    },
    {
      name: 'El Rio Bravo Supermarket – Kansas #1',
      address: '11 S 10th St, Kansas City, KS 66102',
      notes: 'Supermarket with taqueria & bakery',
      subcategory: 'Hispanic'
    },
    {
      name: 'Frida Latino Market',
      address: '1310 W 23rd St S, Independence, MO 64050',
      notes: 'Peruvian specialty groceries',
      subcategory: 'Peruvian / Latino'
    },
    {
      name: 'Gringo Loco Market',
      address: '3825 Independence Ave, Kansas City, MO 64124',
      notes: 'Fresh meats, vegetables & Latino groceries',
      subcategory: 'Hispanic'
    },
    {
      name: 'La Mexicanita',
      address: '7620 Metcalf Ave, Overland Park, KS 66204',
      notes: 'Latino groceries',
      subcategory: 'Mexican/Central American'
    },
    {
      name: 'Latino Y Punto',
      address: '10452 Metcalf Ave, Overland Park, KS 66212',
      notes: 'Latino grocery store',
      subcategory: 'Hispanic / Latino'
    },
    {
      name: 'La Estrella',
      address: '922 E Old 56 Hwy, Olathe, KS 66061',
      notes: 'Latino groceries',
      subcategory: 'Hispanic / Mexican'
    },
    {
      name: 'World Mercado',
      address: '10303 Metcalf Ave, Overland Park, KS 66212',
      notes: 'Latino products',
      subcategory: 'Latin/Hispanic'
    }
  ],
  middleEasternMediterranean: [
    {
      name: 'Al Habashi Mart',
      address: '307a Main St, Kansas City, MO 64105',
      phone: '(816) 421-6727',
      website: 'habashihouse.com',
      notes: 'Bulk spices, nuts, dried fruits',
      subcategory: 'Middle Eastern / Mediterranean / Indian'
    },
    {
      name: 'Mediterranean Market KC',
      address: '1404 Westport Rd, Kansas City, MO 64111',
      notes: 'Grocery + in‑store café',
      subcategory: 'Mediterranean'
    },
    {
      name: 'Shahrazad International Market',
      address: '12605 Metcalf Ave, Overland Park, KS 66213',
      notes: 'Market + café',
      subcategory: 'Middle Eastern'
    },
    {
      name: 'Kanza Mediterranean Market',
      address: '116 N Clairborne Rd, Olathe, KS 66062',
      notes: 'Specialty Mediterranean',
      subcategory: 'Mediterranean'
    },
    {
      name: 'Aswaq Al Arabi and Halal Meat',
      address: '4107 N Cherry St Suite B, Kansas City, MO 64116',
      notes: 'Halal meats & Middle Eastern groceries',
      subcategory: 'Middle Eastern / Halal'
    },
    {
      name: 'Holy Land Market',
      address: '2323 Independence Ave, Kansas City, MO 64124',
      notes: 'Grocery',
      subcategory: 'Middle Eastern / Muslim‑friendly'
    }
  ],
  southAsian: [
    {
      name: 'Afghan Market',
      address: '4422 St John Ave, Kansas City, MO 64123',
      notes: 'Dumplings and region-specific groceries',
      subcategory: 'Afghan / South Asian'
    },
    {
      name: 'KC India Mart',
      address: '8542 W 133rd St, Overland Park, KS 66213',
      notes: 'South Asian products',
      subcategory: 'Indian / South Asian'
    },
    {
      name: 'JS TAJ Grocers',
      address: '11830 Quivira Rd, Overland Park, KS 66210',
      phone: '(913) 345-8252',
      website: 'tajgrocersllc.net',
      notes: 'Specialty sweets & products',
      subcategory: 'Indian / South Asian'
    }
  ],
  halalMarkets: [
    {
      name: 'Dural-Rahma Halal',
      address: '3708 Independence Ave, Kansas City, MO 64124',
      notes: 'Halal-focused market',
      subcategory: 'Halal grocery'
    },
    {
      name: 'Pak Halal International Foods',
      address: '12259 W 87th St Pkwy, Lenexa, KS 66215',
      notes: 'International halal foods',
      subcategory: 'Halal'
    },
    {
      name: 'Barakah Halal Market',
      address: '6420 N Oak Trafficway, Kansas City, MO 64118',
      notes: 'Halal-focused grocer',
      subcategory: 'Halal / Middle Eastern'
    },
    {
      name: 'Tawakal Halal Store',
      address: '3009 ½ Independence Ave, Kansas City, MO 64124',
      notes: 'Halal grocery options',
      subcategory: 'Halal'
    }
  ],
  european: [
    {
      name: 'European Delights',
      address: '8841 W 95th St, Overland Park, KS 66212',
      notes: 'Specialty candies, cheeses, trinkets',
      subcategory: 'European'
    },
    {
      name: 'Carollo Gourmet Grocery, Deli & Grill',
      address: '9 E 3rd St, Kansas City, MO 64106',
      notes: 'Grocery + deli combo',
      subcategory: 'Italian specialty'
    },
    {
      name: 'European Corner Store',
      address: '3605 NE Antioch Rd, Kansas City, MO 64117',
      notes: 'European groceries',
      subcategory: 'European'
    }
  ],
  specialty: [
    {
      name: 'Ethio Mart',
      address: '10919 Shawnee Mission Pkwy, Shawnee, KS 66203',
      notes: 'Ethiopian foods/products',
      subcategory: 'Ethiopian'
    },
    {
      name: 'Soe Soe Burma Grocery Store',
      address: '615 Prospect Ave, Kansas City, MO 64124',
      notes: 'Burmese groceries',
      subcategory: 'Burmese'
    },
    {
      name: 'One-Stop Shop Haitian Store',
      address: '4023 N Oak Trafficway, Kansas City, MO 64116',
      notes: 'Haitian groceries',
      subcategory: 'Haitian'
    },
    {
      name: 'KC Kosher Co‑op',
      address: '8212 W 97th Terrace, Overland Park, KS',
      notes: 'Jewish/Kosher products (co‑op)',
      subcategory: 'Kosher'
    },
    {
      name: 'Hen House – Kosher Dept.',
      address: '11721 Roe Ave, Leawood, KS 66211',
      notes: 'Kosher grocery section',
      subcategory: 'Kosher'
    }
  ]
};

const foodAssistancePrograms = [
  {
    name: 'Harvesters Community Food Network',
    address: '3801 Topping Ave, Kansas City, MO 64129',
    phone: '877-653-9519',
    website: 'harvesters.org',
    notes: 'Network of food pantries and mobile food distributions - Open to all, no income requirement for some sites',
    subcategory: 'Food Pantries'
  },
  {
    name: 'Kansas City WIC Program',
    address: 'Kansas City, MO',
    website: 'wicprograms.org/ci/mo-kansas_city',
    notes: 'Nutrition education and food benefits for eligible families - Income and residency requirements',
    subcategory: 'WIC'
  },
  {
    name: 'Cross-Lines Community Outreach',
    address: 'Kansas City, KS',
    website: 'pantrykc.org',
    notes: 'Food pantry for Wyandotte County residents - Low-income residents',
    subcategory: 'Food Pantries'
  },
  {
    name: 'Catholic Charities of Northeast Kansas',
    address: 'Kansas City, KS',
    website: 'catholiccharitiesks.org',
    notes: 'Provides groceries and fresh produce to families in need',
    subcategory: 'Food Pantries'
  }
];

export default function Food() {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const { saveFormState, getFormState } = usePageState();
  const location = useLocation();
  const pathname = location.pathname;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Initialize form state from saved state
  useEffect(() => {
    const savedState = getFormState(pathname, 'foodPageState');
    if (savedState) {
      setSearchQuery(savedState.searchQuery || '');
      setSelectedCategory(savedState.selectedCategory || 'all');
    }
  }, [pathname, getFormState]);

  // Save form state when it changes
  useEffect(() => {
    saveFormState(pathname, 'foodPageState', { searchQuery, selectedCategory });
  }, [searchQuery, selectedCategory, pathname, saveFormState]);

  const categories = Object.keys(foodLocationsByCategory) as Array<keyof typeof foodLocationsByCategory>;
  const allCategories = ['foodAssistance' as const, ...categories];

  // Memoized search functionality
  const searchResults = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    
    if (!query) {
      return {
        filteredLocations: selectedCategory === 'all' 
          ? Object.values(foodLocationsByCategory).flat()
          : selectedCategory === 'foodAssistance'
          ? []
          : foodLocationsByCategory[selectedCategory as keyof typeof foodLocationsByCategory] || [],
        filteredAssistance: selectedCategory === 'foodAssistance' || selectedCategory === 'all' 
          ? foodAssistancePrograms 
          : []
      };
    }

    // Search through all locations
    const searchLocations = (locations: FoodLocation[]) => {
      return locations.filter(location => 
        location.name.toLowerCase().includes(query) ||
        location.address.toLowerCase().includes(query) ||
        location.notes?.toLowerCase().includes(query) ||
        location.subcategory.toLowerCase().includes(query)
      );
    };

    // Search through assistance programs
    const searchAssistance = (programs: typeof foodAssistancePrograms) => {
      return programs.filter(program =>
        program.name.toLowerCase().includes(query) ||
        program.address.toLowerCase().includes(query) ||
        program.notes?.toLowerCase().includes(query) ||
        program.subcategory.toLowerCase().includes(query)
      );
    };

    if (selectedCategory === 'all') {
      return {
        filteredLocations: searchLocations(Object.values(foodLocationsByCategory).flat()),
        filteredAssistance: searchAssistance(foodAssistancePrograms)
      };
    } else if (selectedCategory === 'foodAssistance') {
      return {
        filteredLocations: [],
        filteredAssistance: searchAssistance(foodAssistancePrograms)
      };
    } else {
      return {
        filteredLocations: searchLocations(foodLocationsByCategory[selectedCategory as keyof typeof foodLocationsByCategory] || []),
        filteredAssistance: []
      };
    }
  }, [searchQuery, selectedCategory]);

  const { filteredLocations, filteredAssistance } = searchResults;

  // Function to render a location card with translated notes
  const renderLocationCard = (location: FoodLocation, index: number) => (
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

  // Function to render assistance programs (these don't need translation as they're official program descriptions)
  const renderAssistanceCard = (program: typeof foodAssistancePrograms[0], index: number) => (
    <div key={index} className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
      <h3 className="font-semibold text-kc-navy mb-2">{program.name}</h3>
      <div className="space-y-1 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{program.address}</span>
        </div>
        {program.phone && (
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <a href={`tel:${program.phone}`} className="text-kc-navy hover:underline">
              {program.phone}
            </a>
          </div>
        )}
        {program.website && (
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <a href={`https://${program.website}`} target="_blank" rel="noopener noreferrer"
               className="text-kc-navy hover:underline">
              {program.website}
            </a>
          </div>
        )}
        {program.notes && (
          <p className="text-gray-600 mt-2 text-sm italic">
            {translateBusinessNote(program.notes, currentLanguage.code)}
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
          <h1 className="text-2xl font-bold text-kc-navy">{t('food')}</h1>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder={t('searchFoodLocations')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 h-12 rounded-lg border border-gray-200 focus:border-kc-navy"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-5 h-5 text-kc-navy" />
            <span className="font-medium text-kc-navy">{t('filterByCategory')}:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-kc-navy text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t('all')}
            </button>
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedCategory === category
                    ? 'bg-kc-navy text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t(category)}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              {filteredLocations.length + filteredAssistance.length === 0 
                ? `No results found for "${searchQuery}"`
                : `Found ${filteredLocations.length + filteredAssistance.length} result${filteredLocations.length + filteredAssistance.length !== 1 ? 's' : ''} for "${searchQuery}"`
              }
            </p>
          </div>
        )}

        {/* Food Assistance Programs */}
        {filteredAssistance.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold text-kc-navy mb-4">
              {t('foodAssistancePrograms')}
            </h2>
            <div className="space-y-3">
              {filteredAssistance.map(renderAssistanceCard)}
            </div>
          </section>
        )}

        {/* Ethnic Markets */}
        {selectedCategory === 'all' && !searchQuery ? (
          categories.map((category) => (
            <section key={category} className="mb-8">
              <h2 className="text-lg font-bold text-kc-navy mb-4">{t(category)}</h2>
              <div className="space-y-3">
                {foodLocationsByCategory[category].map(renderLocationCard)}
              </div>
            </section>
          ))
        ) : filteredLocations.length > 0 ? (
          <section className="mb-8">
            <h2 className="text-lg font-bold text-kc-navy mb-4">
              {searchQuery 
                ? `${t('ethnicMarkets')} - ${t('search')} Results` 
                : t(selectedCategory as keyof typeof foodLocationsByCategory)
              }
            </h2>
            <div className="space-y-3">
              {filteredLocations.map(renderLocationCard)}
            </div>
          </section>
        ) : null}

        {/* No Results Message */}
        {filteredLocations.length === 0 && filteredAssistance.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">{t('noLocationsFound')}</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
