import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { useTranslation } from '../hooks/useTranslation';
import { ArrowLeft, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

interface Notification {
  id: string;
  messageKey: keyof ReturnType<typeof useTranslation>['t'];
  timeKey: keyof ReturnType<typeof useTranslation>['t'];
  isRead: boolean;
}

interface MessageThread {
  id: string;
  senderNameKey: keyof ReturnType<typeof useTranslation>['t'];
  lastMessageKey: keyof ReturnType<typeof useTranslation>['t'];
  isRead: boolean;
  avatar: string;
  name: string;
}

interface ChatMessage {
  id: string;
  text: string;
  isFromMe: boolean;
  timestamp: string;
}

export default function Messages() {
  const { t } = useTranslation();
  const [selectedChat, setSelectedChat] = useState<MessageThread | null>(null);
  const [newMessage, setNewMessage] = useState('');

  // Mock notifications data - more relevant to app services
  const notifications: Notification[] = [
    {
      id: '1',
      messageKey: 'healthScreeningReminder',
      timeKey: 'today',
      isRead: false
    },
    {
      id: '2',
      messageKey: 'jobFairAnnouncement',
      timeKey: 'today',
      isRead: false
    },
    {
      id: '6',
      messageKey: 'communityEventReminder',
      timeKey: 'today',
      isRead: false
    }
  ];

  // Mock message threads data - relevant to LinkUp KC services
  const messageThreads: MessageThread[] = [
    {
      id: '1',
      senderNameKey: 'samuelUHealthCenter',
      lastMessageKey: 'walkInAvailability',
      isRead: false,
      avatar: 'https://cdn.builder.io/api/v1/image/assets%2F5929b9f73f214fc6a99c554fef925db0%2F0186603e5aa4418fb3c6cd633b484f9c?format=webp&width=800',
      name: 'Samuel U Rogers Health Center'
    },
    {
      id: '2',
      senderNameKey: 'gabrielaS',
      lastMessageKey: 'seeYouTomorrow',
      isRead: true,
      avatar: 'https://cdn.builder.io/api/v1/image/assets%2F5929b9f73f214fc6a99c554fef925db0%2F154ff10854bc46e782847a3e73c62d42?format=webp&width=800',
      name: 'Gabriela S.'
    },
    {
      id: '3',
      senderNameKey: 'dellaLambClients',
      lastMessageKey: 'happyToHelpMsg',
      isRead: true,
      avatar: 'https://cdn.builder.io/api/v1/image/assets%2F5929b9f73f214fc6a99c554fef925db0%2Fccb5f46d14c14475bc946b7149372036?format=webp&width=800',
      name: 'Della Lamb Community Services'
    }
  ];

  // Chat messages for each thread
  const getChatMessages = (threadId: string): ChatMessage[] => {
    switch(threadId) {
      case '1': // Samuel U Rogers Health Center
        return [
          {
            id: '1',
            text: 'Hi! I was wondering if you have any walk-in appointments available today?',
            isFromMe: true,
            timestamp: '2:30 PM'
          },
          {
            id: '2',
            text: 'Hello! Yes, we have walk-in availability. Our walk-in hours are Monday-Friday 8 AM to 4 PM. What type of service are you looking for?',
            isFromMe: false,
            timestamp: '2:32 PM'
          },
          {
            id: '3',
            text: 'Perfect! I need a general check-up. How long is the typical wait time?',
            isFromMe: true,
            timestamp: '2:35 PM'
          },
          {
            id: '4',
            text: 'Yes, we have Walk-in availability.',
            isFromMe: false,
            timestamp: '2:45 PM'
          }
        ];
      case '2': // Gabriela S.
        return [
          {
            id: '1',
            text: 'Hi Gabriela! Are we still on for our meeting tomorrow?',
            isFromMe: true,
            timestamp: 'Yesterday 4:20 PM'
          },
          {
            id: '2',
            text: 'Yes! Looking forward to it. Should we meet at the usual place?',
            isFromMe: false,
            timestamp: 'Yesterday 4:45 PM'
          },
          {
            id: '3',
            text: 'That works perfectly. See you at 10 AM.',
            isFromMe: true,
            timestamp: 'Yesterday 4:50 PM'
          },
          {
            id: '4',
            text: 'Thanks, see you tomorrow.',
            isFromMe: false,
            timestamp: 'Yesterday 5:00 PM'
          }
        ];
      case '3': // Della Lamb
        return [
          {
            id: '1',
            text: 'Hello! I was looking for information about your childcare programs. My daughter is 3 years old.',
            isFromMe: true,
            timestamp: '11:20 AM'
          },
          {
            id: '2',
            text: 'Hi there! We\u2019d be happy to help. We have several programs for 3-year-olds including our Head Start program. Would you like to schedule a visit?',
            isFromMe: false,
            timestamp: '11:35 AM'
          },
          {
            id: '3',
            text: 'That would be great! What are the enrollment requirements?',
            isFromMe: true,
            timestamp: '11:40 AM'
          },
          {
            id: '4',
            text: 'Sure, I\u2019d be happy to help!',
            isFromMe: false,
            timestamp: '12:15 PM'
          }
        ];
      default:
        return [];
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, you would send the message to a backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const handleChatClick = (thread: MessageThread) => {
    setSelectedChat(thread);
  };

  const handleBackToMessages = () => {
    setSelectedChat(null);
  };

  // If a chat is selected, show the chat interface
  if (selectedChat) {
    const messages = getChatMessages(selectedChat.id);

    return (
      <MainLayout>
        <div className="flex flex-col h-full">
          {/* Chat Header */}
          <div className="px-4 py-3 border-b border-gray-200 bg-white">
            <div className="flex items-center gap-3">
              <button onClick={handleBackToMessages} className="p-2 hover:bg-gray-100 rounded-lg">
                <ArrowLeft className="w-5 h-5 text-kc-navy" />
              </button>
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white border border-gray-200 flex-shrink-0">
                <img
                  src={selectedChat.avatar}
                  alt={selectedChat.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iI0Y5RkFGQiIvPgo8cGF0aCBkPSJNMjAgMTBDMTYuNjg2MyAxMCAxNCA3LjMxMzcxIDE0IDRTMTYuNjg2MyAtMiAyMCAtMlMyNiAwLjY4NjI5IDI2IDRTMjMuMzEzNyAxMCAyMCAxMFoiIGZpbGw9IiM2QjcyODAiLz4KPHBhdGggZD0iTTMwIDMyQzMwIDI2LjQ3NzIgMjUuNTIyOCAyMiAyMCAyMkMxNC40NzcyIDIyIDEwIDI2LjQ3NzIgMTAgMzJIMzBaIiBmaWxsPSIjNkI3MjgwIi8+Cjwvc3ZnPgo=';
                  }}
                />
              </div>
              <div>
                <h2 className="font-semibold text-kc-navy">{selectedChat.name}</h2>
                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isFromMe ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  message.isFromMe
                    ? 'bg-kc-navy text-white'
                    : 'bg-white text-gray-800 border border-gray-200'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.isFromMe ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="px-4 py-3 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button onClick={handleSendMessage} className="bg-kc-navy hover:bg-kc-navy/90">
                <Send className="w-4 h-4 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="px-4 py-6">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-kc-navy">
            {t('messagesAndNotifications')}
          </h1>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 mb-6"></div>

        {/* Notifications Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-kc-navy mb-4">
            {t('notifications')}
          </h2>
          
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div 
                key={notification.id}
                className={`p-4 border border-gray-300 rounded-lg relative ${
                  !notification.isRead ? 'bg-blue-50' : 'bg-white'
                }`}
              >
                <div className="flex justify-between items-start">
                  <p className="text-sm text-gray-700 leading-relaxed flex-1 pr-4">
                    {t(notification.messageKey)}
                  </p>
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    {t(notification.timeKey)}
                  </div>
                </div>
                
                {!notification.isRead && (
                  <div className="absolute top-2 left-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Messages Section */}
        <section>
          <h2 className="text-xl font-bold text-kc-navy mb-4">
            {t('messages')}
          </h2>
          
          <div className="space-y-4">
            {messageThreads.map((thread) => (
              <div
                key={thread.id}
                onClick={() => handleChatClick(thread)}
                className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
              >
                {/* Avatar */}
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-white border border-gray-200 flex-shrink-0">
                  <img
                    src={thread.avatar}
                    alt={thread.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iI0Y5RkFGQiIvPgo8cGF0aCBkPSJNMjQgMTJDMjAuMDIxOCAxMiAxNyA4Ljk3ODE5IDE3IDVTMjAuMDIxOCAtMiAyNCAtMlMzMSAxLjAyMTgxIDMxIDVTMjcuOTc4MiAxMiAyNCAxMloiIGZpbGw9IiM2QjcyODAiLz4KPHBhdGggZD0iTTM2IDM4QzM2IDMxLjM3MjYgMzAuNjI3NCAyNiAyNCAyNkMxNy4zNzI2IDI2IDEyIDMxLjM3MjYgMTIgMzhIMzZaIiBmaWxsPSIjNkI3MjgwIi8+Cjwvc3ZnPgo=';
                    }}
                  />
                </div>
                
                {/* Message Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className={`font-medium text-kc-navy ${
                      !thread.isRead ? 'font-semibold' : ''
                    }`}>
                      {t(thread.senderNameKey)}
                    </h3>
                    
                    {!thread.isRead && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    )}
                  </div>
                  
                  <p className={`text-sm text-gray-600 leading-relaxed ${
                    !thread.isRead ? 'font-medium' : ''
                  }`}>
                    {t(thread.lastMessageKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
