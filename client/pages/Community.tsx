import React, { useState, useEffect } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
import { usePageState } from '../contexts/PageStateContext';
import { useLocation } from 'react-router-dom';
import { MessageCircle, Clock, Calendar, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useToast } from '../hooks/use-toast';

interface Discussion {
  id: string;
  titleKey: keyof ReturnType<typeof useTranslation>['t'];
  descriptionKey: keyof ReturnType<typeof useTranslation>['t'];
  commentCount: number;
  hoursAgo: number;
  avatar: string;
}

interface Comment {
  id: string;
  author: string;
  content: string;
  hoursAgo: number;
  avatar: string;
}

export default function Community() {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const { toast } = useToast();
  const { saveFormState, getFormState, clearFormState, saveModalState, getModalState, clearModalState } = usePageState();
  const location = useLocation();
  const pathname = location.pathname;

  // Mock comments data for Language Learning discussion
  const languageLearningComments: Comment[] = [
    {
      id: '1',
      author: 'Maria Rodriguez',
      content: 'Hi everyone! I\'m looking for help with pronunciation practice. Does anyone know of free conversation groups in the Crossroads area?',
      hoursAgo: 2,
      avatar: '👩'
    },
    {
      id: '2',
      author: 'Ahmed Hassan',
      content: 'The Kansas City Public Library on 9th and Locust has free English conversation circles every Tuesday at 6 PM. Very welcoming group!',
      hoursAgo: 4,
      avatar: '👨'
    },
    {
      id: '3',
      author: 'Jennifer Park',
      content: 'I can recommend ESL classes at UMKC. They also offer tutoring services. The campus is accessible by bus too.',
      hoursAgo: 6,
      avatar: '👩'
    },
    {
      id: '4',
      author: 'Carlos Mendez',
      content: 'There\'s a great study group that meets at the Midtown library branch. We practice English while helping each other with job applications.',
      hoursAgo: 8,
      avatar: '👨'
    },
    {
      id: '5',
      author: 'Fatima Al-Zahra',
      content: 'Thank you all for these suggestions! I\'ve been studying English for 6 months and need more speaking practice. The library groups sound perfect.',
      hoursAgo: 12,
      avatar: '👩'
    }
  ];

  // Mock comments data for Transportation Help discussion
  const transportationHelpComments: Comment[] = [
    {
      id: '1',
      author: 'David Chen',
      content: 'Can someone help me understand the KC Streetcar routes? I need to get from Crown Center to the River Market for work.',
      hoursAgo: 2,
      avatar: '👨'
    },
    {
      id: '2',
      author: 'Lisa Thompson',
      content: 'The streetcar is free and runs from Union Station to River Market! Very easy route. Runs every 10-15 minutes during peak hours.',
      hoursAgo: 3,
      avatar: '👩'
    },
    {
      id: '3',
      author: 'Miguel Santos',
      content: 'For longer trips, download the RideKC app. It shows real-time bus schedules and you can plan your route. Very helpful for getting around the metro.',
      hoursAgo: 5,
      avatar: '👨'
    },
    {
      id: '4',
      author: 'Sarah Johnson',
      content: 'BikeKC has bike share stations throughout downtown and midtown. $5 for a day pass if you want to try cycling instead of buses.',
      hoursAgo: 7,
      avatar: '👩'
    },
    {
      id: '5',
      author: 'James Wilson',
      content: 'I use a combination of the streetcar and bus system daily. Happy to help anyone plan routes to major areas like hospitals, schools, or shopping.',
      hoursAgo: 9,
      avatar: '👨'
    }
  ];

  // Function to get comments for a discussion
  const getCommentsForDiscussion = (discussionId: string): Comment[] => {
    switch(discussionId) {
      case '1': return languageLearningComments;
      case '2': return transportationHelpComments;
      default: return [];
    }
  };

  // Modal state management with persistence
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [showOfferHelpModal, setShowOfferHelpModal] = useState(false);
  const [selectedDiscussion, setSelectedDiscussion] = useState<Discussion | null>(null);

  // Initialize modal states from saved state
  useEffect(() => {
    const questionModalState = getModalState(pathname, 'questionModal');
    const offerHelpModalState = getModalState(pathname, 'offerHelpModal');
    const discussionModalState = getModalState(pathname, 'discussionModal');

    setShowQuestionModal(questionModalState.isOpen);
    setShowOfferHelpModal(offerHelpModalState.isOpen);
    if (discussionModalState.isOpen && discussionModalState.data) {
      setSelectedDiscussion(discussionModalState.data);
    }
  }, [pathname, getModalState]);

  // Save modal states when they change
  useEffect(() => {
    saveModalState(pathname, 'questionModal', showQuestionModal);
  }, [showQuestionModal, pathname, saveModalState]);

  useEffect(() => {
    saveModalState(pathname, 'offerHelpModal', showOfferHelpModal);
  }, [showOfferHelpModal, pathname, saveModalState]);

  useEffect(() => {
    saveModalState(pathname, 'discussionModal', !!selectedDiscussion, selectedDiscussion);
  }, [selectedDiscussion, pathname, saveModalState]);

  // Form data state with persistence
  const [questionForm, setQuestionForm] = useState({
    name: '',
    question: ''
  });

  const [offerHelpForm, setOfferHelpForm] = useState({
    name: '',
    organization: '',
    description: ''
  });

  // Initialize form states from saved state
  useEffect(() => {
    const savedQuestionForm = getFormState(pathname, 'questionForm');
    const savedOfferHelpForm = getFormState(pathname, 'offerHelpForm');

    if (savedQuestionForm) {
      setQuestionForm(savedQuestionForm);
    }
    if (savedOfferHelpForm) {
      setOfferHelpForm(savedOfferHelpForm);
    }
  }, [pathname, getFormState]);

  // Save form states when they change
  useEffect(() => {
    saveFormState(pathname, 'questionForm', questionForm);
  }, [questionForm, pathname, saveFormState]);

  useEffect(() => {
    saveFormState(pathname, 'offerHelpForm', offerHelpForm);
  }, [offerHelpForm, pathname, saveFormState]);

  // Form handlers
  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (questionForm.name.trim() && questionForm.question.trim()) {
      console.log('Question submitted:', questionForm);
      setQuestionForm({ name: '', question: '' });
      clearFormState(pathname, 'questionForm');
      setShowQuestionModal(false);
      clearModalState(pathname, 'questionModal');

      // Show toast notification
      toast({
        title: t('featureComingSoon'),
        duration: 3000,
      });
    }
  };

  const handleOfferHelpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (offerHelpForm.name.trim() && offerHelpForm.organization.trim() && offerHelpForm.description.trim()) {
      console.log('Offer help submitted:', offerHelpForm);
      setOfferHelpForm({ name: '', organization: '', description: '' });
      clearFormState(pathname, 'offerHelpForm');
      setShowOfferHelpModal(false);
      clearModalState(pathname, 'offerHelpModal');

      // Show toast notification
      toast({
        title: t('featureComingSoon'),
        duration: 3000,
      });
    }
  };

  // Sample discussions data
  const discussions: Discussion[] = [
    {
      id: '1',
      titleKey: 'languageLearning',
      descriptionKey: 'languageLearningDesc',
      commentCount: 5,
      hoursAgo: 2,
      avatar: '🎓'
    },
    {
      id: '2',
      titleKey: 'transportationHelp',
      descriptionKey: 'transportationHelpDesc',
      commentCount: 5,
      hoursAgo: 2,
      avatar: '🚌'
    }
  ];

  // Mock upcoming events (simplified)
  const upcomingEvents = [
    {
      title: 'Computer Lab',
      time: '1:00 PM - 3:00 PM',
      date: 'Today'
    },
    {
      title: 'English Class',
      time: '10:00 AM - 11:30 AM',
      date: 'Tomorrow'
    }
  ];

  return (
    <MainLayout>
      <div className="px-4 py-6 space-y-6">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-kc-navy">{t('community').toUpperCase()}</h1>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            variant="outline"
            onClick={() => setShowQuestionModal(true)}
            className="w-full h-16 text-lg font-medium border-2 border-gray-300 bg-white hover:bg-gray-50 rounded-full"
          >
            {t('askQuestion')}
          </Button>

          <Button
            variant="outline"
            onClick={() => setShowOfferHelpModal(true)}
            className="w-full h-16 text-lg font-medium border-2 border-gray-300 bg-white hover:bg-gray-50 rounded-full"
          >
            {t('offerHelp')}
          </Button>
        </div>

        {/* Upcoming Events Section */}
        <section>
          <h2 className="text-xl font-bold text-kc-navy mb-4">
            {t('upcomingEvents')}
          </h2>
          <div className="bg-gray-100 rounded-2xl p-4 space-y-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-kc-navy">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.time}</p>
                  </div>
                  <span className="text-xs font-medium text-kc-navy bg-kc-navy/10 px-2 py-1 rounded-full">
                    {event.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Discussions Section */}
        <section>
          <h2 className="text-xl font-bold text-kc-navy mb-4">
            {t('discussions').toUpperCase()}
          </h2>

          <div className="space-y-4">
            {discussions.map((discussion) => (
              <div
                key={discussion.id}
                onClick={() => setSelectedDiscussion(discussion)}
                className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors"
              >
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl flex-shrink-0">
                  {discussion.avatar}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-kc-navy mb-1">
                    {t(discussion.titleKey)}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {t(discussion.descriptionKey)}
                  </p>

                  {/* Engagement metrics */}
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      <span>{discussion.commentCount} {t('commentsCount')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{discussion.hoursAgo} {t('hoursAgoShort')}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ask Question Modal */}
        {showQuestionModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-kc-navy">{t('askQuestion')}</h2>
                <button
                  onClick={() => {
                    setShowQuestionModal(false);
                    clearModalState(pathname, 'questionModal');
                  }}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              <form onSubmit={handleQuestionSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('name')} *
                  </label>
                  <Input
                    type="text"
                    value={questionForm.name}
                    onChange={(e) => setQuestionForm({...questionForm, name: e.target.value})}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('question')} *
                  </label>
                  <textarea
                    value={questionForm.question}
                    onChange={(e) => setQuestionForm({...questionForm, question: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-kc-navy focus:border-kc-navy"
                    rows={4}
                    required
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setShowQuestionModal(false);
                      clearModalState(pathname, 'questionModal');
                    }}
                    className="flex-1"
                  >
                    {t('cancel')}
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-kc-navy hover:bg-kc-navy/90 text-white"
                  >
                    {t('submit')}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Offer Help Modal */}
        {showOfferHelpModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-kc-navy">{t('offerHelp')}</h2>
                <button
                  onClick={() => {
                    setShowOfferHelpModal(false);
                    clearModalState(pathname, 'offerHelpModal');
                  }}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              <form onSubmit={handleOfferHelpSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('name')} *
                  </label>
                  <Input
                    type="text"
                    value={offerHelpForm.name}
                    onChange={(e) => setOfferHelpForm({...offerHelpForm, name: e.target.value})}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('organization')} *
                  </label>
                  <Input
                    type="text"
                    value={offerHelpForm.organization}
                    onChange={(e) => setOfferHelpForm({...offerHelpForm, organization: e.target.value})}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('descriptionOfService')} *
                  </label>
                  <textarea
                    value={offerHelpForm.description}
                    onChange={(e) => setOfferHelpForm({...offerHelpForm, description: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-kc-navy focus:border-kc-navy"
                    rows={4}
                    required
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setShowOfferHelpModal(false);
                      clearModalState(pathname, 'offerHelpModal');
                    }}
                    className="flex-1"
                  >
                    {t('cancel')}
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-kc-navy hover:bg-kc-navy/90 text-white"
                  >
                    {t('submit')}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Discussion Detail Modal */}
        {selectedDiscussion && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 pb-24 z-[60]">
            <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                    {selectedDiscussion.avatar}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-kc-navy">
                      {t(selectedDiscussion.titleKey)}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {selectedDiscussion.commentCount} {t('commentsCount')} • {selectedDiscussion.hoursAgo} {t('hoursAgoShort')}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedDiscussion(null);
                    clearModalState(pathname, 'discussionModal');
                  }}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Description */}
              <div className="p-6 border-b border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  {t(selectedDiscussion.descriptionKey)}
                </p>
              </div>

              {/* Comments */}
              <div className="overflow-y-auto max-h-96">
                <div className="p-6 space-y-4">
                  {getCommentsForDiscussion(selectedDiscussion.id).map((comment) => (
                    <div key={comment.id} className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm flex-shrink-0">
                        {comment.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-medium text-kc-navy text-sm">
                              {comment.author}
                            </span>
                            <span className="text-xs text-gray-500">
                              {comment.hoursAgo} {t('hoursAgoShort')}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {comment.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add Comment Footer */}
              <div className="p-6 border-t border-gray-200">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm">
                    👤
                  </div>
                  <div className="flex-1">
                    <textarea
                      placeholder="Add a comment..."
                      className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-kc-navy focus:border-kc-navy"
                      rows={3}
                    />
                    <div className="flex justify-end mt-2">
                      <Button className="bg-kc-navy hover:bg-kc-navy/90 text-white">
                        Post Comment
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
