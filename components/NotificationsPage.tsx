
import React from 'react';
import { Notification } from '../types';
import { Bell, Calendar, Tag, Info } from 'lucide-react';

const notifications: Notification[] = [
  {
    id: '1',
    title: 'Early Bird Offer!',
    message: 'Get 50% off on IELTS classes if you register before Jan 30th.',
    date: '2 hours ago',
    isRead: false,
    type: 'offer'
  },
  {
    id: '2',
    title: 'University of Sydney Application Deadline',
    message: 'Intake for July 2024 closes on March 15th. Submit documents now.',
    date: '1 day ago',
    isRead: false,
    type: 'deadline'
  },
  {
    id: '3',
    title: 'New Office Protocol',
    message: 'Our Bharatpur office will remain open on Saturdays from 10 AM to 2 PM.',
    date: '3 days ago',
    isRead: true,
    type: 'update'
  }
];

const NotificationsPage: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'offer': return <Tag size={18} className="text-green-600 dark:text-green-400" />;
      case 'deadline': return <Calendar size={18} className="text-red-600 dark:text-red-400" />;
      default: return <Info size={18} className="text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Notifications</h2>
        <button className="text-xs text-green-600 dark:text-green-400 font-medium hover:underline">Mark all as read</button>
      </div>

      <div className="space-y-3">
        {notifications.length === 0 ? (
            <div className="text-center py-10 text-gray-500 dark:text-gray-400">
                <Bell size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-3" />
                No notifications yet
            </div>
        ) : (
            notifications.map((notif) => (
            <div key={notif.id} className={`p-4 rounded-xl border transition-all ${notif.isRead ? 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700' : 'bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-900/40 shadow-sm'}`}>
                <div className="flex items-start">
                <div className={`p-2 rounded-full mr-3 flex-shrink-0 ${notif.isRead ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}>
                    {getIcon(notif.type)}
                </div>
                <div className="flex-grow">
                    <div className="flex justify-between items-start">
                    <h4 className={`text-sm font-bold ${notif.isRead ? 'text-gray-700 dark:text-gray-300' : 'text-gray-900 dark:text-white'}`}>{notif.title}</h4>
                    <span className="text-[10px] text-gray-400 whitespace-nowrap ml-2">{notif.date}</span>
                    </div>
                    <p className={`text-xs mt-1 leading-relaxed ${notif.isRead ? 'text-gray-500 dark:text-gray-400' : 'text-gray-700 dark:text-gray-300'}`}>{notif.message}</p>
                </div>
                </div>
            </div>
            ))
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
