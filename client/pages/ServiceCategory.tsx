import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Plus } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import { useTranslation } from '../hooks/useTranslation';
import { Button } from '../components/ui/button';

// Map service IDs to translation keys
const serviceTranslationMap: Record<string, keyof import('../translations').Translations> = {
  'english-classes': 'englishClasses',
  'childcare': 'childcare',
  'transportation': 'transportation',
  'food': 'food',
  'employment': 'employment',
  'housing': 'housing',
  'health-support': 'healthSupport',
  'legal': 'legal',
};

export default function ServiceCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { t } = useTranslation();
  
  const translationKey = categoryId ? serviceTranslationMap[categoryId] : null;
  const categoryName = translationKey ? t(translationKey) : 'Service Category';

  return (
    <MainLayout>
      <div className="px-4 py-6">
        {/* Back Navigation */}
        <div className="flex items-center gap-3 mb-6">
          <Link to="/explore" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6 text-kc-navy" />
          </Link>
          <h1 className="text-2xl font-bold text-kc-navy">{categoryName}</h1>
        </div>

        {/* Description Section */}
        <div className="mb-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
            <div className="w-16 h-16 bg-kc-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">🛡</div>
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Description"
                className="w-full p-4 border border-gray-200 rounded-lg resize-none text-center"
                rows={3}
                disabled
              />
            </div>
            <Button className="w-full bg-kc-navy hover:bg-kc-navy/90 text-white rounded-full font-semibold">
              Manage My Listing
            </Button>
          </div>
        </div>

        {/* Services Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-kc-navy mb-4">Services</h2>
          <div className="space-y-3">
            {/* Placeholder Service Items */}
            {[
              'Housing Help',
              'Employment Support', 
              'English Classes',
              'Donations/Needs',
              'Legal and Immigration Help'
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-100 flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-300 rounded"></div>
                </div>
                <span className="flex-1 text-kc-navy font-medium">{service}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Add Service Button */}
        <div className="border-t border-gray-200 pt-6">
          <Button 
            variant="outline"
            className="w-full h-14 border-2 border-kc-navy text-kc-navy hover:bg-kc-navy hover:text-white rounded-full font-semibold transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Service To this Category
          </Button>
        </div>

        {/* Placeholder Notice */}
        <div className="mt-8 text-center py-6 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            This is a placeholder page. Continue prompting to add real content and functionality!
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
