
import React from 'react';
import { PenTool, ExternalLink, FileText, Video, BookOpen, Globe, Headphones, Sparkles, CheckCircle2, Trophy, ArrowRight } from 'lucide-react';

const MockTestPage: React.FC = () => {
  
  const ResourceCard = ({ 
    title, 
    desc, 
    url, 
    icon: Icon, 
    badge,
    variant
  }: { 
    title: string, 
    desc: string, 
    url: string, 
    icon: any, 
    badge?: string,
    variant: 'red' | 'blue' 
  }) => {
    
    const colorClasses = variant === 'red' 
        ? "bg-white/80 dark:bg-gray-800/80 border-red-100 dark:border-red-900/30 hover:border-red-400 dark:hover:border-red-500 group-hover:shadow-red-500/20"
        : "bg-white/80 dark:bg-gray-800/80 border-blue-100 dark:border-blue-900/30 hover:border-blue-400 dark:hover:border-blue-500 group-hover:shadow-blue-500/20";

    const iconBg = variant === 'red'
        ? "bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-red-500/40"
        : "bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-blue-500/40";

    const badgeStyle = variant === 'red'
        ? "bg-red-100 text-red-700 border-red-200"
        : "bg-blue-100 text-blue-700 border-blue-200";

    return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`group relative flex flex-col p-4 rounded-[1.5rem] backdrop-blur-xl border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${colorClasses}`}
    >
      <div className="flex justify-between items-start mb-3">
          <div className={`p-2.5 rounded-xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ${iconBg}`}>
            <Icon size={20} strokeWidth={2.5} />
          </div>
          {badge && (
            <span className={`text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full border ${badgeStyle}`}>
                {badge}
            </span>
          )}
      </div>
      
      <div className="flex-grow">
        <h4 className="font-extrabold text-gray-900 dark:text-white text-base mb-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all">
            {title}
        </h4>
        <p className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
            {desc}
        </p>
      </div>
      
      <div className="mt-4 flex items-center text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
        Start Practice <ArrowRight size={12} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </a>
  )};

  return (
    <div className="space-y-8 max-w-6xl mx-auto px-1">
      {/* Premium Hero Banner - Compact */}
      <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6 md:p-10 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
        {/* Vivid Background Orbs */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-purple-600 rounded-full blur-[80px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600 rounded-full blur-[80px] opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-3">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-widest text-yellow-300 shadow-lg">
                    <Trophy size={12} className="mr-1.5" /> Score 8.0+ Band
                </div>
                <h2 className="text-2xl md:text-5xl font-black tracking-tight leading-tight">
                    Master Your <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-purple-300">Proficiency Test</span>
                </h2>
                <p className="text-gray-300 font-medium text-xs md:text-base max-w-md">
                    Access our curated library of premium mock tests and AI scoring tools for free.
                </p>
            </div>
            
            {/* Floating 3D Icon - Smaller */}
            <div className="hidden md:flex w-32 h-32 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 items-center justify-center shadow-2xl animate-float ring-1 ring-white/20">
                <PenTool size={48} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            </div>
        </div>
      </div>

      {/* IELTS Section */}
      <div className="space-y-4">
        <div className="flex items-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-red-500/30 mr-4 ring-2 ring-red-100 dark:ring-red-900/20">
                <Globe size={20} />
            </div>
            <div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">IELTS Prep</h3>
                <p className="text-red-500 font-bold uppercase tracking-wider text-[9px] mt-0.5">British Council & IDP Certified</p>
            </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ResourceCard 
                title="British Council"
                desc="Official Free Tests for all modules."
                url="https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-practice-tests"
                icon={Globe}
                badge="Official"
                variant="red"
            />
            <ResourceCard 
                title="IELTS Liz"
                desc="Top rated lessons & tips."
                url="https://ieltsliz.com/"
                icon={Video}
                badge="Best Tips"
                variant="red"
            />
            <ResourceCard 
                title="IDP Practice"
                desc="Computer-delivered sample tests."
                url="https://www.ielts.org/for-test-takers/sample-test-questions"
                icon={FileText}
                variant="red"
            />
            <ResourceCard 
                title="IELTS Buddy"
                desc="Grammar & vocabulary boosters."
                url="https://www.ieltsbuddy.com/"
                icon={BookOpen}
                variant="red"
            />
        </div>
      </div>

      {/* PTE Section */}
      <div className="space-y-4">
        <div className="flex items-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 mr-4 ring-2 ring-blue-100 dark:ring-blue-900/20">
                <Headphones size={20} />
            </div>
            <div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">PTE Academic</h3>
                <p className="text-blue-500 font-bold uppercase tracking-wider text-[9px] mt-0.5">Pearson Standard</p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ResourceCard 
                title="Pearson Official"
                desc="The definitive guide & mock tests."
                url="https://www.pearsonpte.com/preparation"
                icon={Globe}
                badge="Official"
                variant="blue"
            />
            <ResourceCard 
                title="APEUni"
                desc="#1 AI Scoring & Question Bank."
                url="https://www.apeuni.com/"
                icon={Sparkles}
                badge="AI Tools"
                variant="blue"
            />
            <ResourceCard 
                title="E2 Language"
                desc="Strategic video lessons."
                url="https://www.youtube.com/channel/UCglDIsg_Z9mE2oT9hsrbzFA"
                icon={Video}
                variant="blue"
            />
            <ResourceCard 
                title="PTE Tutorials"
                desc="Mobile app for daily practice."
                url="https://ptetutorials.com/"
                icon={PenTool}
                variant="blue"
            />
        </div>
      </div>
      
      <div className="mt-8 p-1 rounded-[1.5rem] bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 shadow-xl">
        <div className="bg-white dark:bg-gray-900 rounded-[1.4rem] p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
                <div className="p-2.5 bg-green-100 dark:bg-green-900/50 rounded-full text-green-600">
                    <CheckCircle2 size={24} />
                </div>
                <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Need Instructor Feedback?</h4>
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-xs">Join our physical classes for 1-on-1 guidance.</p>
                </div>
            </div>
            <button className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg text-xs">
                Book a Class
            </button>
        </div>
      </div>
    </div>
  );
};

export default MockTestPage;
