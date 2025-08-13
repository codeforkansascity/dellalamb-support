import React, { useMemo, useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from '../hooks/use-toast';
import { Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface UpcomingEvent {
  id: string;
  titleKey: string;
  time: string;
  locationKey: string;
  address: string;
  date: Date;
  dayOfWeek: string;
  startTime: number; // For sorting by time
}

export default function Index() {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const { toast } = useToast();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const featuredServices = [
    {
      id: 'jobs',
      titleKey: 'currentJobOpenings' as const,
      emoji: '💼',
      options: [
        { titleKey: 'customerServiceRep' as const, descKey: 'customerServiceRepDesc' as const },
        { titleKey: 'warehouseWorker' as const, descKey: 'warehouseWorkerDesc' as const },
        { titleKey: 'retailSales' as const, descKey: 'retailSalesDesc' as const },
        { titleKey: 'restaurantServer' as const, descKey: 'restaurantServerDesc' as const },
      ]
    },
    {
      id: 'childcare',
      titleKey: 'childcareServices' as const,
      emoji: '👶',
      options: [
        { titleKey: 'dellaLambDaycare' as const, descKey: 'dellaLambDaycareDesc' as const },
        { titleKey: 'headStartProgram' as const, descKey: 'headStartProgramDesc' as const },
        { titleKey: 'kcmoChildcare' as const, descKey: 'kcmoChildcareDesc' as const },
        { titleKey: 'familyDaycare' as const, descKey: 'familyDaycareDesc' as const },
      ]
    },
    {
      id: 'transportation',
      titleKey: 'transportationServices' as const,
      emoji: '🚌',
      options: [
        { titleKey: 'ridekc' as const, descKey: 'ridekcDesc' as const },
        { titleKey: 'kcStreetcar' as const, descKey: 'kcStreetcarDesc' as const },
        { titleKey: 'uberLyft' as const, descKey: 'uberLyftDesc' as const },
        { titleKey: 'bikekc' as const, descKey: 'bikekcDesc' as const },
      ]
    }
  ];

  const handleServiceClick = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const handleOptionClick = () => {
    toast({
      title: t('featureComingSoon'),
      duration: 3000,
    });
  };

  // Map language codes to locale strings for date/time formatting
  const getLocale = (langCode: string) => {
    const localeMap: Record<string, string> = {
      'en': 'en-US',
      'es': 'es-ES',
      'fr': 'fr-FR',
      'sw': 'sw-KE', // Kiswahili (Kenya)
      'ar': 'ar-SA', // Arabic (Saudi Arabia)
      'uk': 'uk-UA', // Ukrainian
    };
    return localeMap[langCode] || 'en-US';
  };

  // Format time based on locale
  const formatTime = (timeString: string, locale: string) => {
    // Parse the time range (e.g., "9:30 AM - 11:30 AM")
    const [startTime, endTime] = timeString.split(' - ');

    const formatSingleTime = (time: string) => {
      const [timeStr, period] = time.split(' ');
      const [hours, minutes] = timeStr.split(':');
      const hour24 = period === 'PM' && hours !== '12' ? parseInt(hours) + 12 :
                    period === 'AM' && hours === '12' ? 0 : parseInt(hours);

      const date = new Date();
      date.setHours(hour24, parseInt(minutes), 0, 0);

      return date.toLocaleTimeString(locale, {
        hour: 'numeric',
        minute: '2-digit',
        hour12: locale.startsWith('en') || locale.startsWith('es')
      });
    };

    return `${formatSingleTime(startTime)} - ${formatSingleTime(endTime)}`;
  };

  // Calculate upcoming events for the next 2 weeks
  const upcomingEvents = useMemo(() => {
    const locale = getLocale(currentLanguage.code);
    const now = new Date();
    const events: UpcomingEvent[] = [];

    // Define recurring events (ordered by start time)
    const recurringEvents = [
      {
        id: 'beginner-english',
        titleKey: 'beginnerEnglish',
        time: '9:30 AM - 11:30 AM',
        locationKey: 'dellaLambClients',
        address: '500 Woodland Ave, Kansas City, MO 64106',
        dayOfWeek: [1, 3], // Monday & Wednesday
        startTime: 9.5, // 9:30 AM
      },
      {
        id: 'intro-english',
        titleKey: 'introductoryEnglishClass',
        time: '10:00 AM - 11:30 AM',
        locationKey: 'dellaLambClients',
        address: '500 Woodland Ave, Kansas City, MO 64106',
        dayOfWeek: [1, 3], // Monday & Wednesday
        startTime: 10, // 10:00 AM
      },
      {
        id: 'computer-lab',
        titleKey: 'computerLab',
        time: '1:00 PM - 3:00 PM',
        locationKey: 'dellaLambClients',
        address: '500 Woodland Ave, Kansas City, MO 64106',
        dayOfWeek: 4, // Thursday (0 = Sunday)
        startTime: 13, // 1:00 PM
      },
      {
        id: 'online-intermediate',
        titleKey: 'onlineIntermediateEnglishClass',
        time: '5:30 PM - 7:00 PM',
        locationKey: 'dellaLambClients',
        address: '500 Woodland Ave, Kansas City, MO 64106',
        dayOfWeek: [1, 3], // Monday & Wednesday
        startTime: 17.5, // 5:30 PM
      },
    ];

    // Generate events for the next 14 days
    for (let i = 0; i < 14; i++) {
      const date = new Date(now);
      date.setDate(now.getDate() + i);
      const dayOfWeek = date.getDay();

      recurringEvents.forEach((event) => {
        const eventDays = Array.isArray(event.dayOfWeek) ? event.dayOfWeek : [event.dayOfWeek];

        if (eventDays.includes(dayOfWeek)) {
          events.push({
            id: `${event.id}-${date.toISOString().split('T')[0]}`,
            titleKey: event.titleKey,
            time: formatTime(event.time, locale),
            locationKey: event.locationKey,
            address: event.address,
            date: new Date(date),
            dayOfWeek: date.toLocaleDateString(locale, { weekday: 'long' }),
            startTime: event.startTime,
          });
        }
      });
    }

    // Sort by date first, then by start time
    return events
      .sort((a, b) => {
        const dateCompare = a.date.getTime() - b.date.getTime();
        if (dateCompare === 0) {
          return a.startTime - b.startTime;
        }
        return dateCompare;
      })
      .slice(0, 6);
  }, [currentLanguage.code]);

  return (
    <MainLayout>
      <div className="px-4 py-6">
        {/* Page Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-kc-navy">{t('home').toUpperCase()}</h1>
          <p className="text-kc-navy opacity-80 mt-1">
            {t('tagline')}
          </p>
        </div>

        {/* Featured Services Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-kc-navy mb-4">
            {t('featuredServices')}
          </h2>
          <div className="space-y-3">
            {featuredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Service Header */}
                <button
                  onClick={() => handleServiceClick(service.id)}
                  className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{service.emoji}</span>
                    <span className="font-semibold text-kc-navy text-lg">
                      {t(service.titleKey)}
                    </span>
                  </div>
                  {expandedService === service.id ? (
                    <ChevronUp className="w-5 h-5 text-kc-navy" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-kc-navy" />
                  )}
                </button>

                {/* Expandable Options */}
                {expandedService === service.id && (
                  <div className="border-t border-gray-100 bg-gray-50">
                    <div className="p-3 space-y-2">
                      {service.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={handleOptionClick}
                          className="w-full text-left p-3 bg-white rounded-lg hover:bg-kc-navy/5 transition-colors border border-gray-100"
                        >
                          <h4 className="font-medium text-kc-navy mb-1">
                            {t(option.titleKey)}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {t(option.descKey)}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section>
          <h2 className="text-xl font-bold text-kc-navy mb-4">
            {t('upcomingEvents')}
          </h2>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-kc-navy mb-2">
                      {t(event.titleKey as keyof typeof t)}
                    </h3>
                    <div className="mb-3">
                      <p className="text-sm font-medium text-gray-700">
                        {t(event.locationKey as keyof typeof t)}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {event.address}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {event.dayOfWeek}, {event.date.toLocaleDateString(getLocale(currentLanguage.code), {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-xs font-medium text-kc-navy bg-kc-navy/10 px-2 py-1 rounded-full">
                      {event.date.toLocaleDateString(getLocale(currentLanguage.code), { month: 'numeric', day: 'numeric' })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
