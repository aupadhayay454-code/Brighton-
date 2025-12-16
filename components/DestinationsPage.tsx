
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { destinations, ukProcessSteps, australiaProcessSteps } from '../data/destinations';
import { University } from '../types';
import { ChevronDown, School, MapPin, ExternalLink, FileText, X, Banknote, GraduationCap, Calendar, Info, Search, Bot, Sparkles, Plus, Trophy, Globe, CheckCircle2, Wallet, BookOpen, ArrowRight, ChevronRight } from 'lucide-react';

interface Props {
  onAskAI: (query: string) => void;
  density?: 'comfortable' | 'compact';
}

const DestinationsPage: React.FC<Props> = ({ onAskAI, density = 'comfortable' }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [processModal, setProcessModal] = useState<{show: boolean, country: string} | null>(null);
  const [selectedUni, setSelectedUni] = useState<University | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'requirements'>('overview');
  
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [selectedCountryFilter, setSelectedCountryFilter] = useState<string>('All');
  
  const [displayLimit, setDisplayLimit] = useState<Record<string, number>>({});
  const INITIAL_LIMIT = density === 'compact' ? 20 : 6;
  const isCompact = density === 'compact';

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    if (contentRef.current) {
        contentRef.current.scrollTop = 0;
    }
  }, [selectedUni, activeTab]);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
        setExpandedId(null);
    } else {
        setExpandedId(id);
        setDisplayLimit(prev => ({...prev, [id]: INITIAL_LIMIT}));
    }
  };

  const showMore = (id: string) => {
    setDisplayLimit(prev => ({
        ...prev,
        [id]: (prev[id] || INITIAL_LIMIT) + 10
    }));
  };

  const openUniDetails = (uni: University) => {
      setSelectedUni(uni);
      setActiveTab('overview');
  };

  const filteredDestinations = useMemo(() => {
    let result = destinations;

    if (selectedCountryFilter !== 'All') {
      result = result.filter(dest => dest.country === selectedCountryFilter);
    }

    if (!debouncedQuery) return result;

    const lowerQuery = debouncedQuery.toLowerCase();
    return result.map(dest => {
      const isCountryMatch = dest.country.toLowerCase().includes(lowerQuery);
      const matchingUnis = dest.universities.filter(uni => 
        uni.name.toLowerCase().includes(lowerQuery) ||
        uni.location?.toLowerCase().includes(lowerQuery) ||
        isCountryMatch
      );
      return { ...dest, universities: matchingUnis };
    }).filter(dest => dest.universities.length > 0);
  }, [debouncedQuery, selectedCountryFilter]);

  const defaultUniImage = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
  const countryList = ['All', ...destinations.map(d => d.country)];

  const getCountryTheme = (countryId: string) => {
    switch(countryId) {
        case 'uk': return 'from-blue-600 to-red-600';
        case 'australia': return 'from-green-600 to-yellow-500';
        case 'usa': return 'from-blue-700 to-red-500';
        case 'canada': return 'from-red-600 to-red-400';
        case 'south-korea': return 'from-blue-500 to-pink-500';
        default: return 'from-primary-600 to-primary-400';
    }
  };

  return (
    <div className={isCompact ? "font-condensed space-y-2" : "space-y-4 md:space-y-8 pb-20"}>
      {/* Search & Filter Section - Glass Sticky Header */}
      <div className={`sticky top-14 md:top-20 z-30 px-1 py-2 glass-panel rounded-2xl backdrop-blur-xl animate-slideDown ${isCompact ? 'space-y-1' : 'space-y-3'}`}>
        <div className="relative max-w-2xl mx-auto group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={isCompact ? 14 : 18} className="text-primary-600 dark:text-primary-400" />
          </div>
          <input
            type="text"
            placeholder="Search university or country..."
            className={`block w-full pl-10 pr-20 bg-gray-100/50 dark:bg-gray-800/50 border border-transparent focus:bg-white dark:focus:bg-gray-800 rounded-xl font-bold text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500/30 outline-none transition-all ${isCompact ? 'py-1.5 text-xs' : 'py-3 text-sm'}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              onClick={() => onAskAI(`Tell me about ${searchQuery}`)}
              className={`absolute inset-y-1 right-1 bg-primary-600 text-white px-3 rounded-lg font-bold flex items-center shadow-lg hover:bg-primary-700 transition-colors ios-btn ${isCompact ? 'text-[9px] px-2' : 'text-[10px]'}`}
            >
              <Sparkles size={10} className="mr-1 animate-pulse" /> AI
            </button>
          )}
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto pb-1 px-1 no-scrollbar mask-fade-sides">
           {countryList.map((country) => (
             <button
                key={country}
                onClick={() => setSelectedCountryFilter(country)}
                className={`flex-shrink-0 rounded-full font-bold transition-all border ios-btn ${
                    selectedCountryFilter === country 
                    ? 'bg-primary-600 text-white border-primary-600 shadow-lg shadow-primary-600/30' 
                    : 'bg-white/50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 border-transparent hover:bg-white dark:hover:bg-gray-600'
                } ${isCompact ? 'px-3 py-1 text-[10px]' : 'px-4 py-1.5 text-xs'}`}
             >
                {country}
             </button>
           ))}
        </div>
      </div>

      {/* Destination List/Grid */}
      <div className={isCompact ? "space-y-2" : "grid gap-6 md:gap-8 md:grid-cols-2"}>
            {filteredDestinations.length > 0 ? filteredDestinations.map((dest) => (
            
            isCompact ? (
                // Compact List Item
                <div key={dest.id} className="glass-panel rounded-xl overflow-hidden border border-white/40 dark:border-gray-700">
                    <div 
                        className="flex items-center p-2.5 cursor-pointer active:bg-gray-50 dark:active:bg-gray-700 transition-colors"
                        onClick={() => toggleExpand(dest.id)}
                    >
                        <img src={dest.image} alt={dest.country} className="w-10 h-10 object-cover rounded-lg mr-3 shadow-sm" />
                        <div className="flex-1 min-w-0 flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-sm text-gray-900 dark:text-white leading-none">{dest.country}</h3>
                                <span className="text-[10px] text-gray-500 flex items-center mt-1 font-medium">
                                    <School size={10} className="mr-1"/> {dest.universities.length} Unis
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                {(dest.id === 'uk' || dest.id === 'australia') && (
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); setProcessModal({show: true, country: dest.id}); }}
                                        className="p-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-lg ios-btn"
                                    >
                                        <FileText size={14}/>
                                    </button>
                                )}
                                <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 ${expandedId === dest.id ? 'rotate-180' : ''}`} />
                            </div>
                        </div>
                    </div>

                    {/* Expanded Compact University List */}
                    {expandedId === dest.id && (
                        <div className="border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/30 animate-slideDown">
                            <div className="grid divide-y divide-gray-200/50 dark:divide-gray-800">
                                {dest.universities.slice(0, (displayLimit[dest.id] || INITIAL_LIMIT)).map((uni, idx) => (
                                    <div 
                                        key={idx} 
                                        onClick={() => openUniDetails(uni)}
                                        className="flex items-center p-2.5 pl-3 hover:bg-white dark:hover:bg-gray-800 cursor-pointer active:scale-[0.99] transition-transform"
                                    >
                                        <div className="flex-1 min-w-0 grid grid-cols-12 gap-2 items-center">
                                            <span className="col-span-6 text-xs font-bold text-gray-900 dark:text-white truncate">{uni.name}</span>
                                            <span className="col-span-3 text-[10px] text-gray-500 truncate flex items-center"><MapPin size={8} className="mr-0.5"/> {uni.location || '-'}</span>
                                            <span className="col-span-3 text-[10px] text-emerald-600 truncate font-bold text-right">{uni.tuitionFee?.split(' ')[0] || '-'}</span>
                                        </div>
                                        <ChevronRight size={12} className="text-gray-300 ml-2" />
                                    </div>
                                ))}
                            </div>
                            {dest.universities.length > (displayLimit[dest.id] || INITIAL_LIMIT) && (
                                <button 
                                    onClick={() => showMore(dest.id)}
                                    className="w-full py-3 text-center text-[10px] font-bold text-primary-600 border-t border-gray-200 dark:border-gray-700 active:bg-primary-50"
                                >
                                    Show More ({dest.universities.length - (displayLimit[dest.id] || INITIAL_LIMIT)})
                                </button>
                            )}
                        </div>
                    )}
                </div>
            ) : (
                // Comfortable Card View
                <div 
                    key={dest.id} 
                    className={`relative rounded-[2.5rem] overflow-hidden transition-all duration-500 flex flex-col ${expandedId === dest.id ? 'md:col-span-2 shadow-2xl ring-4 ring-white/20' : 'hover:scale-[1.02] hover:shadow-xl'} group glass border border-white/30`}
                >
                    {/* Dynamic Background Image */}
                    <div className={`absolute inset-0 z-0 transition-all duration-700 ease-out ${expandedId === dest.id ? 'h-64 opacity-100' : 'h-full opacity-90 group-hover:scale-105'}`}>
                        <img src={dest.image} alt={dest.country} className="w-full h-full object-cover" decoding="async" loading="lazy" />
                        <div className={`absolute inset-0 bg-gradient-to-t ${expandedId === dest.id ? 'from-gray-900 via-gray-900/60' : 'from-black/80 via-black/20'} to-transparent transition-all duration-500`}></div>
                    </div>

                    {/* Card Content */}
                    <div className={`relative z-10 flex flex-col ${expandedId === dest.id ? '' : 'h-[300px] md:h-[400px] justify-end'} transition-all duration-500`}>
                        
                        {/* Header Area */}
                        <div className="p-6 md:p-10 w-full cursor-pointer" onClick={() => toggleExpand(dest.id)}>
                            <div className="flex justify-between items-end">
                                <div className="transform transition-all duration-500 origin-bottom-left">
                                    <h3 className={`font-black text-white tracking-tight drop-shadow-xl ${expandedId === dest.id ? 'text-4xl md:text-7xl mb-2' : 'text-3xl md:text-5xl mb-2'}`}>
                                        {dest.country}
                                    </h3>
                                    <div className={`flex items-center space-x-3 transition-all duration-500 ${expandedId === dest.id ? 'opacity-100 translate-y-0' : 'opacity-90'}`}>
                                        <span className={`px-3 py-1 rounded-full backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center shadow-lg bg-gradient-to-r ${getCountryTheme(dest.id)}`}>
                                            <School size={12} className="mr-1.5" /> {dest.universities.length} Universities
                                        </span>
                                    </div>
                                </div>
                                <div className={`p-3 md:p-4 rounded-full backdrop-blur-md border border-white/20 text-white shadow-lg transition-all duration-500 ios-btn ${expandedId === dest.id ? 'rotate-180 bg-white text-black' : 'bg-white/10 hover:bg-white/20'}`}>
                                    <ChevronDown size={24} />
                                </div>
                            </div>
                        </div>

                        {/* Expanded Content Section */}
                        {expandedId === dest.id && (
                            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-3xl rounded-t-[3rem] animate-slideUp border-t border-white/50 dark:border-gray-700 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.3)] min-h-[400px]">
                                
                                <div className="p-6 md:p-10">
                                    {/* Details & Actions */}
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 bg-gray-50/50 dark:bg-gray-800/30 p-5 rounded-3xl border border-gray-100 dark:border-gray-700">
                                        <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-relaxed max-w-3xl">
                                            {dest.details}
                                        </p>
                                        {(dest.id === 'uk' || dest.id === 'australia') && (
                                            <button 
                                                onClick={() => setProcessModal({show: true, country: dest.id})}
                                                className={`flex-shrink-0 w-full md:w-auto bg-gradient-to-r ${getCountryTheme(dest.id)} text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg hover:shadow-xl ios-btn flex items-center justify-center`}
                                            >
                                                <FileText size={16} className="mr-2" /> Application Guide
                                            </button>
                                        )}
                                    </div>

                                    {/* University List - 2x1 Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {dest.universities.slice(0, (displayLimit[dest.id] || INITIAL_LIMIT)).map((uni, idx) => (
                                            <div 
                                                key={idx} 
                                                onClick={() => openUniDetails(uni)}
                                                className="group bg-white dark:bg-gray-800 rounded-3xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300 cursor-pointer flex items-center gap-4 relative overflow-hidden ios-btn"
                                            >
                                                <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                
                                                <div className="w-16 h-16 shrink-0 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-700 ring-1 ring-black/5 dark:ring-white/5 shadow-inner">
                                                    <img 
                                                        src={uni.image || defaultUniImage} 
                                                        alt={uni.name}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        onError={(e) => e.currentTarget.src = defaultUniImage}
                                                        loading="lazy"
                                                    />
                                                </div>
                                                
                                                <div className="flex-grow min-w-0">
                                                    <h4 className="font-bold text-gray-900 dark:text-white text-sm md:text-base leading-tight truncate group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{uni.name}</h4>
                                                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">
                                                        <MapPin size={12} className="mr-1 text-primary-500" />
                                                        <span className="truncate">{uni.location || dest.country}</span>
                                                    </div>
                                                </div>
                                                <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-gray-300 group-hover:text-primary-500 group-hover:bg-primary-50 transition-colors">
                                                    <ArrowRight size={16} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {dest.universities.length > (displayLimit[dest.id] || INITIAL_LIMIT) && (
                                        <button 
                                            onClick={() => showMore(dest.id)}
                                            className="w-full mt-8 py-4 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 text-sm font-bold hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-all flex items-center justify-center ios-btn"
                                        >
                                            <Plus size={16} className="mr-2"/> Show More ({dest.universities.length - (displayLimit[dest.id] || INITIAL_LIMIT)})
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )
            )) : (
                <div className="col-span-2 text-center py-20 opacity-60">
                    <div className="bg-gray-100 dark:bg-gray-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                        <Search size={32} className="text-gray-400" />
                    </div>
                    <p className="text-gray-500 font-bold">No destinations found</p>
                </div>
            )}
      </div>

      {/* University Detail Modal - iOS Sheet Style */}
      {selectedUni && (
        <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center sm:p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
            <div className={`bg-white/95 dark:bg-gray-900/95 w-full md:max-w-2xl rounded-t-[2.5rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/20 relative animate-slideUp backdrop-blur-xl ${isCompact ? 'h-[90vh]' : 'h-[90vh] md:h-[85vh]'}`}>
                
                {/* Drag Handle for Mobile */}
                <div className="md:hidden w-full flex justify-center pt-3 pb-1 absolute top-0 z-50 pointer-events-none">
                    <div className="w-12 h-1.5 bg-white/40 rounded-full backdrop-blur-md"></div>
                </div>

                {/* Header */}
                <div className={`relative shrink-0 group ${isCompact ? 'h-36' : 'h-48 md:h-56'}`}>
                     <img src={selectedUni.image || defaultUniImage} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                     
                     <button onClick={() => setSelectedUni(null)} className="absolute top-4 right-4 bg-black/20 text-white p-2 rounded-full hover:bg-black/40 backdrop-blur-md border border-white/10 transition-all z-20 ios-btn">
                        <X size={20} />
                     </button>

                     <div className={`absolute bottom-0 left-0 w-full z-10 ${isCompact ? 'p-4' : 'p-6'}`}>
                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white/90 text-[10px] font-bold uppercase tracking-wider mb-2 shadow-sm">
                            <School size={10} className="mr-1.5" /> University
                        </div>
                        <h3 className={`${isCompact ? 'text-2xl' : 'text-2xl md:text-4xl'} font-black text-white leading-tight mb-1 shadow-sm`}>{selectedUni.name}</h3>
                        <p className="text-white/80 text-sm flex items-center font-medium">
                            <MapPin size={14} className="mr-1.5 text-primary-400"/> {selectedUni.address || selectedUni.location}
                        </p>
                     </div>
                </div>

                {/* Tabs - Segmented Control */}
                <div className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-4 py-3 shrink-0">
                     <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-2xl relative">
                         {['overview', 'courses', 'requirements'].map(tab => (
                             <button 
                                key={tab}
                                onClick={() => setActiveTab(tab as any)}
                                className={`flex-1 py-2 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-wide transition-all duration-300 ${activeTab === tab ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-white shadow-md scale-[1.02]' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}
                             >
                                {tab}
                             </button>
                         ))}
                     </div>
                </div>

                {/* Content */}
                <div ref={contentRef} className={`overflow-y-auto flex-grow bg-white dark:bg-gray-900 custom-scrollbar ${isCompact ? 'p-4' : 'p-6'}`}>
                    {activeTab === 'overview' && (
                        <div className="space-y-6 animate-pop">
                            <div className={`grid ${isCompact ? 'grid-cols-2 gap-3' : 'grid-cols-2 gap-4'}`}>
                                {[
                                    { label: 'Tuition Fee', val: selectedUni.tuitionFee, icon: Banknote, color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
                                    { label: 'Scholarship', val: selectedUni.scholarship, icon: Trophy, color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-900/20' },
                                    { label: 'Intake', val: selectedUni.intake, icon: Calendar, color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20' },
                                    { label: 'CAS Deposit', val: selectedUni.casDeposit, icon: Wallet, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
                                ].map((item, i) => (
                                    <div key={i} className={`${item.bg} p-4 rounded-2xl border border-transparent transition-transform hover:scale-[1.02]`}>
                                        <div className="flex items-center gap-1.5 mb-1.5 text-[10px] font-bold uppercase text-gray-500 tracking-wider opacity-80">
                                            <item.icon size={12} /> {item.label}
                                        </div>
                                        <div className={`text-sm md:text-lg font-black ${item.color} leading-tight`}>{item.val || 'Contact Us'}</div>
                                    </div>
                                ))}
                            </div>
                            
                            {selectedUni.remarks && (
                                <div className="bg-blue-50/50 dark:bg-blue-900/20 p-5 rounded-2xl border border-blue-100 dark:border-blue-900/30 flex gap-4">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-xl text-blue-600 h-fit">
                                        <Info size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Important Note</h4>
                                        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-medium">{selectedUni.remarks}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'courses' && (
                        <div className="space-y-8 animate-pop">
                            {selectedUni.details?.ugCourses && (
                                <div>
                                    <h4 className="font-bold text-gray-400 dark:text-gray-500 text-[10px] uppercase tracking-widest mb-3 flex items-center border-b border-gray-100 dark:border-gray-800 pb-2">
                                        <GraduationCap size={16} className="mr-2 text-primary-500"/> Undergraduate Programs
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedUni.details.ugCourses.map((c, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs font-bold text-gray-700 dark:text-gray-300 hover:border-primary-400 hover:text-primary-600 transition-colors cursor-default shadow-sm">
                                                {c}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {selectedUni.details?.pgCourses && (
                                <div>
                                    <h4 className="font-bold text-gray-400 dark:text-gray-500 text-[10px] uppercase tracking-widest mb-3 flex items-center border-b border-gray-100 dark:border-gray-800 pb-2">
                                        <BookOpen size={16} className="mr-2 text-blue-500"/> Postgraduate Programs
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedUni.details.pgCourses.map((c, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs font-bold text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 transition-colors cursor-default shadow-sm">
                                                {c}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    
                    {activeTab === 'requirements' && (
                        <div className="space-y-6 animate-pop">
                            {selectedUni.details?.ugRequirements && (
                                <div className="bg-orange-50/50 dark:bg-orange-900/10 p-5 rounded-3xl border border-orange-100 dark:border-orange-900/20">
                                    <h4 className="font-bold text-orange-800 dark:text-orange-300 text-xs uppercase tracking-wider mb-3 flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 mr-2 shadow-sm"></div> Bachelor's Entry
                                    </h4>
                                    <ul className="space-y-3">
                                        {selectedUni.details.ugRequirements.map((r, i) => (
                                            <li key={i} className="flex items-start text-xs font-medium text-gray-700 dark:text-gray-300">
                                                <CheckCircle2 size={14} className="mr-3 text-orange-500 mt-0.5 shrink-0"/> 
                                                <span className="leading-relaxed">{r}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                             {selectedUni.details?.pgRequirements && (
                                <div className="bg-blue-50/50 dark:bg-blue-900/10 p-5 rounded-3xl border border-blue-100 dark:border-blue-900/20">
                                    <h4 className="font-bold text-blue-800 dark:text-blue-300 text-xs uppercase tracking-wider mb-3 flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-2 shadow-sm"></div> Master's Entry
                                    </h4>
                                    <ul className="space-y-3">
                                        {selectedUni.details.pgRequirements.map((r, i) => (
                                            <li key={i} className="flex items-start text-xs font-medium text-gray-700 dark:text-gray-300">
                                                <CheckCircle2 size={14} className="mr-3 text-blue-500 mt-0.5 shrink-0"/> 
                                                <span className="leading-relaxed">{r}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                
                {/* Floating Action Footer - Glass */}
                <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl flex gap-3 shrink-0 shadow-[0_-10px_30px_rgba(0,0,0,0.03)] z-10 pb-6 md:pb-4">
                    <button 
                        onClick={() => {
                            setSelectedUni(null);
                            onAskAI(`Compare ${selectedUni?.name} with other universities`);
                        }}
                        className="flex-1 py-3.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-2xl text-xs font-bold flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ios-btn"
                    >
                        <Bot size={16} className="mr-2"/> AI Compare
                    </button>
                    <a 
                        href={selectedUni?.website} 
                        target="_blank"
                        className="flex-1 py-3.5 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl text-xs font-bold flex items-center justify-center shadow-lg shadow-primary-600/30 transition-all ios-btn"
                    >
                        Visit Website <ExternalLink size={16} className="ml-2"/>
                    </a>
                </div>
            </div>
        </div>
      )}

      {/* Checklist Modal - Spring Pop */}
      {processModal && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
            <div className="bg-white dark:bg-gray-900 w-full md:max-w-2xl h-[85vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/20 relative animate-pop">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white flex justify-between items-center shrink-0">
                    <div>
                        <h3 className="text-xl font-black tracking-tight">Application Checklist</h3>
                        <p className="text-blue-100 text-xs font-bold flex items-center mt-1"><Globe size={12} className="mr-1.5"/> {processModal.country === 'uk' ? 'United Kingdom' : 'Australia'}</p>
                    </div>
                    <button onClick={() => setProcessModal(null)} className="bg-white/20 p-2 rounded-full hover:bg-white/30 backdrop-blur-md transition-colors ios-btn"><X size={20}/></button>
                </div>
                
                <div className="overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900 custom-scrollbar">
                    <div className="space-y-4 relative">
                        {/* Timeline Line */}
                        <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gray-200 dark:bg-gray-700 z-0"></div>

                        {(processModal.country === 'uk' ? ukProcessSteps : australiaProcessSteps).map((step: any, idx: number) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden group hover:border-blue-200 dark:hover:border-blue-800 transition-all pl-12 z-10 hover:-translate-y-1 duration-300">
                                <div className="absolute left-3 top-5 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800 shadow-md z-20 group-hover:scale-125 transition-transform"></div>
                                
                                <h4 className="text-sm font-extrabold text-gray-900 dark:text-white mb-3">{step.title}</h4>
                                <ul className="space-y-2">
                                    {step.docs.map((doc: string, i: number) => (
                                        <li key={i} className="flex items-start text-xs font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                                            <CheckCircle2 size={14} className="mr-2 text-blue-400 mt-0.5 shrink-0"/>
                                            {doc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(DestinationsPage);
