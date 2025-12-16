
import React, { useState, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight, RefreshCw, Sparkles, ArrowRight, Clock } from 'lucide-react';
import { getCurrentNepaliDate, getMonthStructure, nepaliMonths, getBSDate, getADDate, eventsData } from '../utils/nepaliDateUtils';

const NepaliCalendarPage: React.FC = () => {
  const [currentBS, setCurrentBS] = useState(getCurrentNepaliDate());
  const [viewYear, setViewYear] = useState(currentBS.year);
  const [viewMonth, setViewMonth] = useState(currentBS.month);
  
  // AD Converter State
  const [adInput, setAdInput] = useState(new Date().toISOString().split('T')[0]);
  const [conversionResult, setConversionResult] = useState<string>('');

  // Upcoming Festivals
  const upcomingEvents = Object.entries(eventsData)
    .map(([key, name]) => {
        const [m, d] = key.split('-').map(Number);
        // Simple check if it's "upcoming" in current year logic
        // This is a simplified display logic
        return { month: m, day: d, name };
    })
    .filter(e => (e.month > currentBS.month) || (e.month === currentBS.month && e.day >= currentBS.day))
    .sort((a, b) => (a.month - b.month) || (a.day - b.day))
    .slice(0, 3);

  useEffect(() => {
    // Initial load of today
    const today = getCurrentNepaliDate();
    setCurrentBS(today);
    if (viewYear === 0) {
        setViewYear(today.year);
        setViewMonth(today.month);
    }
  }, []);

  const handlePrevMonth = () => {
    if (viewMonth === 1) {
      setViewMonth(12);
      setViewYear(prev => prev - 1);
    } else {
      setViewMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 12) {
      setViewMonth(1);
      setViewYear(prev => prev + 1);
    } else {
      setViewMonth(prev => prev + 1);
    }
  };

  const handleConvert = () => {
    if (!adInput) {
        setConversionResult("Please select a valid date");
        return;
    }
    try {
        const inputDate = new Date(adInput);
        if (isNaN(inputDate.getTime())) {
             setConversionResult("Invalid Date Format");
             return;
        }
        const bs = getBSDate(inputDate);
        setConversionResult(`${bs.monthName} ${bs.day}, ${bs.year} (${bs.dayName})`);
    } catch (e) {
        setConversionResult("Error in conversion");
    }
  };

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weekDaysNep = ["आइत", "सोम", "मंगल", "बुध", "बिही", "शुक्र", "शनि"];
  const calendarGrid = getMonthStructure(viewYear, viewMonth);

  return (
    <div className="max-w-xl mx-auto space-y-6">
      {/* Today's Date Card */}
      <div className="bg-gradient-to-br from-red-600 to-red-800 dark:from-red-800 dark:to-red-950 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden ring-1 ring-white/20">
        <div className="absolute -right-6 -top-6 text-white/10">
          <Calendar size={160} />
        </div>
        <div className="relative z-10 flex justify-between items-end">
            <div>
                <h2 className="text-sm font-bold opacity-90 uppercase tracking-wider mb-1 flex items-center">
                    <Clock size={14} className="mr-1"/> Today
                </h2>
                <div className="flex items-baseline">
                    <span className="text-6xl font-bold tracking-tighter">{currentBS.day}</span>
                    <div className="ml-3">
                        <div className="text-2xl font-bold">{currentBS.monthName}</div>
                        <div className="text-lg opacity-90">{currentBS.year} BS</div>
                    </div>
                </div>
                <div className="text-lg font-medium mt-2 bg-white/20 inline-block px-3 py-1 rounded-lg backdrop-blur-sm">
                    {currentBS.dayName}
                </div>
            </div>
            <div className="text-right opacity-90 text-sm font-medium">
                {new Date().toDateString()}
            </div>
        </div>
      </div>

      {/* Calendar View */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-lg border border-white/50 dark:border-gray-700 overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-white/50 dark:bg-gray-900/30">
          <button onClick={handlePrevMonth} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-600 dark:text-gray-300">
            <ChevronLeft />
          </button>
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white flex flex-col leading-tight">
                <span>{nepaliMonths[viewMonth - 1]}</span>
                <span className="text-sm text-primary-600 dark:text-primary-400">{viewYear}</span>
            </h3>
          </div>
          <button onClick={handleNextMonth} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-600 dark:text-gray-300">
            <ChevronRight />
          </button>
        </div>

        <div className="p-4">
            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-1 mb-2 text-center">
            {weekDays.map((d, i) => (
                <div key={i} className={`flex flex-col py-1 rounded-lg ${i === 6 ? 'bg-red-50 dark:bg-red-900/20' : ''}`}>
                    <span className={`text-[10px] uppercase font-bold ${i === 6 ? 'text-red-500' : 'text-gray-400'}`}>{d}</span>
                    <span className={`text-xs font-bold ${i === 6 ? 'text-red-600' : 'text-gray-600 dark:text-gray-300'}`}>{weekDaysNep[i]}</span>
                </div>
            ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1">
            {calendarGrid.map((cell, idx) => {
                if (!cell) return <div key={idx} className="h-16"></div>; // Empty slot

                const isToday = cell.day === currentBS.day && viewMonth === currentBS.month && viewYear === currentBS.year;
                const isHoliday = cell.isSaturday || cell.event;

                return (
                <div 
                    key={idx} 
                    className={`h-16 relative flex flex-col items-center justify-center rounded-xl border transition-all group cursor-pointer ${
                    isToday 
                        ? 'bg-primary-600 text-white border-primary-600 shadow-md z-10 scale-105' 
                        : isHoliday
                            ? 'bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/30'
                            : 'bg-white dark:bg-gray-700/30 border-transparent hover:border-gray-200 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                >
                    {/* BS Day */}
                    <span className={`text-lg font-bold ${isToday ? 'text-white' : isHoliday ? 'text-red-600 dark:text-red-400' : 'text-gray-800 dark:text-gray-200'}`}>
                        {cell.day}
                    </span>
                    
                    {/* AD Day */}
                    <span className={`text-[10px] font-medium mt-0.5 ${isToday ? 'text-primary-100' : 'text-gray-400 dark:text-gray-500'}`}>
                        {cell.adDay}
                    </span>

                    {/* Event Dot */}
                    {cell.event && (
                        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-sm"></div>
                    )}
                    
                    {/* Tooltip for Event */}
                    {cell.event && (
                        <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs p-2 rounded whitespace-nowrap z-20">
                            {cell.event}
                        </div>
                    )}
                </div>
                );
            })}
            </div>
        </div>
      </div>

      {/* Upcoming Events Widget */}
      {upcomingEvents.length > 0 && (
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-5 border border-white/50 dark:border-gray-700 shadow-sm">
            <h3 className="font-bold text-gray-800 dark:text-white mb-3 flex items-center text-sm uppercase tracking-wider">
                <Sparkles size={16} className="text-yellow-500 mr-2" /> Upcoming Festivals
            </h3>
            <div className="space-y-3">
                {upcomingEvents.map((e, i) => (
                    <div key={i} className="flex items-center bg-white dark:bg-gray-900/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                        <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-bold px-3 py-1 rounded-lg text-xs text-center mr-3 min-w-[50px]">
                            {nepaliMonths[e.month - 1].substring(0, 3)}<br/>
                            <span className="text-lg">{e.day}</span>
                        </div>
                        <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">{e.name}</span>
                    </div>
                ))}
            </div>
        </div>
      )}

      {/* AD to BS Converter */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl shadow-sm border border-white/50 dark:border-gray-700 p-6">
        <div className="flex items-center mb-4">
          <RefreshCw className="text-primary-600 dark:text-primary-400 mr-2" size={20} />
          <h3 className="font-bold text-gray-800 dark:text-white">AD to BS Converter</h3>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <input 
                type="date" 
                value={adInput}
                onChange={(e) => setAdInput(e.target.value)}
                className="flex-1 p-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button 
                onClick={handleConvert}
                className="bg-primary-600 text-white px-4 py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors flex items-center"
            >
                Convert <ArrowRight size={16} className="ml-1"/>
            </button>
          </div>
          {conversionResult && (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 p-3 rounded-xl text-center animate-fadeIn">
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold">Converted Date</span>
                <div className="text-lg font-bold text-green-700 dark:text-green-400">{conversionResult}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NepaliCalendarPage;
