import React, { useState, useEffect, Suspense, ReactNode, ErrorInfo } from 'react';
import { ViewState, ThemeColor } from './types';
import { Home, MapPin, BookOpen, Phone, FileText, Menu, X, Bell, CalendarCheck, Globe, PenTool, GraduationCap, Download, Settings, RefreshCw, Maximize2, Minimize2, Compass, AlertTriangle } from 'lucide-react';
import HomePage from './components/HomePage';
import ChatWidget from './components/ChatWidget';

const AboutPage = React.lazy(() => import('./components/AboutPage'));
const DestinationsPage = React.lazy(() => import('./components/DestinationsPage'));
const BookingPage = React.lazy(() => import('./components/BookingPage'));
const ContactPage = React.lazy(() => import('./components/ContactPage'));
const MockTestPage = React.lazy(() => import('./components/MockTestPage'));
const NotificationsPage = React.lazy(() => import('./components/NotificationsPage'));
const ResourcesPage = React.lazy(() => import('./components/ResourcesPage'));
const UKInterviewPage = React.lazy(() => import('./components/UKInterviewPage'));
const NepaliCalendarPage = React.lazy(() => import('./components/NepaliCalendarPage'));
const AustraliaCounsellingPage = React.lazy(() => import('./components/AustraliaCounsellingPage'));

const COLOR_PALETTES: Record<ThemeColor, any> = {
  green: {
    50: '236 253 245', 100: '209 250 229', 200: '167 243 208', 300: '110 231 183', 
    400: '52 211 153', 500: '16 185 129', 600: '5 150 105', 700: '4 120 87', 
    800: '6 95 70', 900: '6 78 59', 950: '2 44 34', hex: '#059669'
  },
  blue: {
    50: '239 246 255', 100: '219 234 254', 200: '191 219 254', 300: '147 197 253',
    400: '96 165 250', 500: '59 130 246', 600: '37 99 235', 700: '29 78 216',
    800: '30 64 175', 900: '30 58 138', 950: '23 37 84', hex: '#2563eb'
  },
  purple: {
    50: '250 245 255', 100: '243 232 255', 200: '233 213 255', 300: '216 180 254',
    400: '192 132 252', 500: '168 85 247', 600: '147 51 234', 700: '126 34 206',
    800: '107 33 168', 900: '88 28 135', 950: '59 7 100', hex: '#9333ea'
  },
  orange: {
    50: '255 247 237', 100: '255 237 213', 200: '254 215 170', 300: '253 186 116',
    400: '251 146 60', 500: '249 115 22', 600: '234 88 12', 700: '194 65 12',
    800: '154 52 18', 900: '124 45 18', 950: '67 20 7', hex: '#ea580c'
  },
  rose: {
    50: '255 241 242', 100: '255 228 230', 200: '254 205 211', 300: '253 164 175',
    400: '251 113 133', 500: '244 63 94', 600: '225 29 72', 700: '190 18 60',
    800: '159 18 57', 900: '136 19 55', 950: '76 5 25', hex: '#e11d48'
  }
};

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: ErrorInfo) {
    console.error("App Crash:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-6 text-center">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-600 mb-4 animate-bounce">
            <AlertTriangle size={32} />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Something went wrong</h2>
          <button 
            onClick={() => window.location.reload()} 
            className="ios-btn bg-primary-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-primary-700 transition-all flex items-center text-sm shadow-lg shadow-primary-600/20"
          >
            <RefreshCw size={16} className="mr-2" /> Reload App
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-[60vh] w-full">
    <div className="relative w-12 h-12">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-primary-100 dark:border-primary-900/30 rounded-full"></div>
      <div className="absolute top-0 left-0 w-full h-full border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  </div>
);

const NavItem = React.memo(({ view, icon: Icon, label, active, onClick }: { view: ViewState; icon: any; label: string; active: boolean; onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`ios-btn flex items-center space-x-2 px-3 py-1.5 rounded-full transition-all w-full md:w-auto text-left md:text-center ${
        active 
          ? 'bg-white/20 text-white font-bold backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.15)] ring-1 ring-white/30' 
          : 'text-white/70 hover:bg-white/10 hover:text-white'
      }`}
    >
      <Icon size={14} strokeWidth={active ? 2.5 : 2} />
      <span className="text-xs tracking-wide">{label}</span>
    </button>
));

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(2);
  
  const [themeColor, setThemeColor] = useState<ThemeColor>(() => {
    try {
        return (localStorage.getItem('brighton-theme') as ThemeColor) || 'green';
    } catch { return 'green'; }
  });
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
        const saved = localStorage.getItem('brighton-dark-mode');
        return saved !== null ? JSON.parse(saved) : false;
    } catch { return false; }
  });

  const [density, setDensity] = useState<'comfortable' | 'compact'>(() => {
    try {
      const saved = localStorage.getItem('brighton-density');
      return saved === 'compact' ? 'compact' : 'comfortable';
    } catch { return 'comfortable'; }
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInitialMessage, setChatInitialMessage] = useState('');

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBtn(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  useEffect(() => {
    const root = document.documentElement;
    const palette = COLOR_PALETTES[themeColor];
    
    Object.entries(palette).forEach(([key, value]) => {
      if (key !== 'hex') {
        const rgb = (value as string).split(' ').join(' '); 
        root.style.setProperty(`--primary-${key}`, rgb);
      }
    });
    
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
        metaThemeColor.setAttribute('content', palette.hex);
    }
    
    localStorage.setItem('brighton-theme', themeColor);
  }, [themeColor]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('brighton-dark-mode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    if (density === 'compact') {
      document.body.classList.add('density-compact');
    } else {
      document.body.classList.remove('density-compact');
    }
    localStorage.setItem('brighton-density', density);
  }, [density]);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          setShowInstallBtn(false);
        }
        setDeferredPrompt(null);
      });
    }
  };

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME: return <HomePage setView={setCurrentView} density={density} />;
      case ViewState.ABOUT: return <AboutPage />;
      case ViewState.DESTINATIONS: return <DestinationsPage onAskAI={(q) => { setChatInitialMessage(q); setIsChatOpen(true); }} density={density} />;
      case ViewState.BOOKING: return <BookingPage />;
      case ViewState.CONTACT: return <ContactPage />;
      case ViewState.MOCK_TEST: return <MockTestPage />;
      case ViewState.NOTIFICATIONS: return <NotificationsPage />;
      case ViewState.RESOURCES: return <ResourcesPage />;
      case ViewState.UK_INTERVIEW: return <UKInterviewPage />;
      case ViewState.NEPALI_CALENDAR: return <NepaliCalendarPage />;
      case ViewState.AUSTRALIA_COUNSELLING: return <AustraliaCounsellingPage />;
      default: return <HomePage setView={setCurrentView} density={density} />;
    }
  };

  return (
    <ErrorBoundary>
      <div className={`min-h-screen flex flex-col transition-colors duration-500 overflow-hidden ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-[#f0f4f8] text-gray-900'}`}>
        
        {/* Animated Liquid Background Blobs */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none transform-gpu">
            <div className="absolute top-[-20%] left-[-20%] w-[90vw] h-[90vw] rounded-full bg-primary-300/30 dark:bg-primary-900/20 blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen will-change-transform"></div>
            <div className="absolute top-[20%] right-[-20%] w-[80vw] h-[80vw] rounded-full bg-blue-300/30 dark:bg-blue-900/20 blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen will-change-transform"></div>
            <div className="absolute bottom-[-20%] left-[20%] w-[80vw] h-[80vw] rounded-full bg-purple-300/30 dark:bg-purple-900/20 blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen will-change-transform"></div>
        </div>

        <header className={`sticky top-0 z-40 glass text-gray-900 dark:text-white transform-gpu transition-all duration-300 ${density === 'compact' ? 'h-11 md:h-14' : 'h-14 md:h-20'}`}>
           {/* Header Background Gradient (Subtle) */}
           <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90 opacity-95 dark:opacity-90"></div>
           
           <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex justify-between items-center h-full">
              <div 
                className="flex items-center space-x-2 md:space-x-3 cursor-pointer group ios-btn"
                onClick={() => setCurrentView(ViewState.HOME)}
              >
                 <div className="relative">
                    <div className="absolute inset-0 bg-white/40 rounded-full blur-md group-hover:blur-lg transition-all"></div>
                    <div className={`relative bg-white/95 backdrop-blur-sm p-1.5 rounded-full shadow-lg ring-2 ring-white/30 ${density === 'compact' ? 'scale-75' : ''}`}>
                        <GraduationCap size={density === 'compact' ? 18 : 22} className="text-primary-700" />
                    </div>
                 </div>
                 <div className="flex flex-col">
                    <span className={`font-black tracking-tight text-white drop-shadow-sm ${density === 'compact' ? 'text-base' : 'text-lg md:text-2xl'}`}>Brighton</span>
                 </div>
              </div>

              <nav className="hidden md:flex items-center space-x-1.5">
                <NavItem view={ViewState.HOME} icon={Home} label="Home" active={currentView === ViewState.HOME} onClick={() => setCurrentView(ViewState.HOME)} />
                <NavItem view={ViewState.DESTINATIONS} icon={Globe} label="Abroad" active={currentView === ViewState.DESTINATIONS} onClick={() => setCurrentView(ViewState.DESTINATIONS)} />
                <NavItem view={ViewState.AUSTRALIA_COUNSELLING} icon={Compass} label="Aus Guide" active={currentView === ViewState.AUSTRALIA_COUNSELLING} onClick={() => setCurrentView(ViewState.AUSTRALIA_COUNSELLING)} />
                <NavItem view={ViewState.UK_INTERVIEW} icon={Settings} label="Prep" active={currentView === ViewState.UK_INTERVIEW} onClick={() => setCurrentView(ViewState.UK_INTERVIEW)} />
                <NavItem view={ViewState.CONTACT} icon={Phone} label="Contact" active={currentView === ViewState.CONTACT} onClick={() => setCurrentView(ViewState.CONTACT)} />
              </nav>

              <div className="flex items-center space-x-2">
                <button 
                    onClick={() => setCurrentView(ViewState.NOTIFICATIONS)}
                    className="ios-btn p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all relative text-white"
                >
                  <Bell size={density === 'compact' ? 16 : 20} />
                  {unreadNotifications > 0 && (
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-primary-900 animate-pulse shadow-sm"></span>
                  )}
                </button>

                <div className="relative">
                    <button 
                        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                        className={`ios-btn p-2 rounded-full transition-all text-white ${isSettingsOpen ? 'bg-white text-primary-900 rotate-90 shadow-lg' : 'bg-white/10 hover:bg-white/20'}`}
                    >
                        <Settings size={density === 'compact' ? 16 : 20} />
                    </button>

                    {isSettingsOpen && (
                        <div className="absolute right-0 mt-4 w-60 glass-panel rounded-2xl shadow-2xl p-4 animate-pop origin-top-right z-50">
                            <div className="flex justify-between items-center mb-4 border-b border-gray-200/50 dark:border-gray-700/50 pb-2">
                                <span className="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider">Preferences</span>
                                <button onClick={() => setIsSettingsOpen(false)} className="p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10"><X size={14} className="text-gray-500" /></button>
                            </div>
                            
                            <div className="space-y-4">
                                <div>
                                    <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 block">Density</span>
                                    <div className="flex bg-gray-200/50 dark:bg-gray-800/50 p-1 rounded-xl">
                                        <button 
                                            onClick={() => setDensity('comfortable')}
                                            className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold transition-all flex items-center justify-center gap-1 ios-btn ${density === 'comfortable' ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400'}`}
                                        >
                                            <Maximize2 size={10} /> Comfort
                                        </button>
                                        <button 
                                            onClick={() => setDensity('compact')}
                                            className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold transition-all flex items-center justify-center gap-1 ios-btn ${density === 'compact' ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400'}`}
                                        >
                                            <Minimize2 size={10} /> Compact
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 block">Appearance</span>
                                    <div className="flex bg-gray-200/50 dark:bg-gray-800/50 p-1 rounded-xl">
                                        <button 
                                            onClick={() => setIsDarkMode(false)}
                                            className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold transition-all ios-btn ${!isDarkMode ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 dark:text-gray-400'}`}
                                        >
                                            Light
                                        </button>
                                        <button 
                                            onClick={() => setIsDarkMode(true)}
                                            className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold transition-all ios-btn ${isDarkMode ? 'bg-gray-600 text-white shadow-sm' : 'text-gray-500 dark:text-gray-400'}`}
                                        >
                                            Dark
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 block">Accent Color</span>
                                    <div className="flex justify-between gap-2 px-1">
                                        {(['green', 'blue', 'purple', 'orange', 'rose'] as ThemeColor[]).map((color) => (
                                            <button
                                                key={color}
                                                onClick={() => setThemeColor(color)}
                                                className={`w-7 h-7 rounded-full transition-transform hover:scale-110 focus:outline-none ring-2 ring-offset-2 dark:ring-offset-gray-800 shadow-sm ios-btn ${themeColor === color ? 'ring-gray-400 scale-110' : 'ring-transparent'}`}
                                                style={{ backgroundColor: COLOR_PALETTES[color].hex }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className={`flex-grow max-w-7xl mx-auto w-full relative z-10 pb-24 md:pb-8 ${density === 'compact' ? 'px-0 py-2' : 'px-3 md:px-6 lg:px-8 py-4'}`}>
          <Suspense fallback={<LoadingSpinner />}>
             <div key={currentView} className="animate-pop">
                {renderView()}
             </div>
          </Suspense>
        </main>
        
        <ChatWidget 
            isOpen={isChatOpen} 
            setIsOpen={setIsChatOpen} 
            initialMessage={chatInitialMessage}
            setInitialMessage={setChatInitialMessage}
        />

        {/* Mobile Tab Bar - Glassmorphism */}
        <div className={`md:hidden fixed bottom-4 left-4 right-4 glass-panel flex justify-around items-center z-40 transform-gpu ${density === 'compact' ? 'py-1.5 rounded-2xl shadow-xl' : 'py-2.5 rounded-[2rem] shadow-2xl'}`}>
            {[
                { view: ViewState.HOME, icon: Home },
                { view: ViewState.DESTINATIONS, icon: Globe },
                { view: ViewState.AUSTRALIA_COUNSELLING, icon: Compass },
                { view: ViewState.UK_INTERVIEW, icon: GraduationCap },
            ].map((item) => (
                <button
                    key={item.view}
                    onClick={() => setCurrentView(item.view)}
                    className={`relative rounded-xl transition-all duration-300 group flex flex-col items-center ios-btn ${density === 'compact' ? 'p-1.5' : 'p-2'} ${currentView === item.view ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400 dark:text-gray-500'}`}
                >
                    <div className={`absolute inset-0 bg-primary-500/10 rounded-xl scale-0 transition-transform ${currentView === item.view ? 'scale-100' : ''}`}></div>
                    <item.icon size={density === 'compact' ? 20 : 24} strokeWidth={currentView === item.view ? 2.5 : 2} className="relative z-10" />
                </button>
            ))}
             <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`rounded-xl text-gray-400 active:scale-90 transition-transform ios-btn ${density === 'compact' ? 'p-1.5' : 'p-2'}`}
             >
                <Menu size={density === 'compact' ? 20 : 24} />
             </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm animate-fadeIn" onClick={() => setIsMobileMenuOpen(false)}>
                <div 
                    className="absolute bottom-0 left-0 right-0 glass-panel rounded-t-[2.5rem] p-6 animate-slideUp shadow-[0_-10px_40px_rgba(0,0,0,0.2)]"
                    onClick={e => e.stopPropagation()}
                >
                    <div className="w-10 h-1.5 bg-gray-300/50 dark:bg-gray-600/50 rounded-full mx-auto mb-6 backdrop-blur-md"></div>
                    
                    <div className="grid grid-cols-4 gap-4 mb-6">
                        {[
                            { view: ViewState.ABOUT, icon: BookOpen, label: "About" },
                            { view: ViewState.CONTACT, icon: Phone, label: "Contact" },
                            { view: ViewState.BOOKING, icon: CalendarCheck, label: "Booking" },
                            { view: ViewState.MOCK_TEST, icon: PenTool, label: "Tests" },
                            { view: ViewState.RESOURCES, icon: FileText, label: "Links" },
                            { view: ViewState.NEPALI_CALENDAR, icon: Calendar, label: "Calendar" },
                            { view: ViewState.NOTIFICATIONS, icon: Bell, label: "Alerts" },
                        ].map((item) => (
                             <button 
                                key={item.view}
                                onClick={() => { setCurrentView(item.view); setIsMobileMenuOpen(false); }}
                                className="flex flex-col items-center gap-2 group ios-btn"
                            >
                                <div className={`p-3.5 rounded-2xl transition-all shadow-sm ${currentView === item.view ? 'bg-primary-100 text-primary-600 shadow-primary-500/20' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-white/20'}`}>
                                    <item.icon size={22} />
                                </div>
                                <span className="text-[10px] font-bold text-gray-600 dark:text-gray-300 tracking-wide">{item.label}</span>
                            </button>
                        ))}
                    </div>

                    {showInstallBtn && (
                         <button 
                            onClick={handleInstallClick}
                            className="w-full py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-black flex items-center justify-center shadow-lg mb-3 text-sm ios-btn"
                        >
                            <Download size={18} className="mr-2" /> Install App
                        </button>
                    )}
                    
                    <button 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full py-3.5 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md text-gray-900 dark:text-white rounded-2xl font-bold text-sm border border-gray-200 dark:border-gray-700 ios-btn"
                    >
                        Close
                    </button>
                </div>
            </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default App;