
import React from 'react';
import { ExternalLink, Stethoscope, CreditCard, Globe, CalendarCheck, FileBadge, ArrowRight, ShieldCheck } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const LinkCard = ({ 
    title, 
    description, 
    url, 
    icon: Icon, 
    colorName
  }: { 
    title: string, 
    description: string, 
    url: string, 
    icon: any, 
    colorName: string
  }) => {
    // Dynamic color themes with richer gradients (Hardcoded for reliability)
    const gradients = colorName === 'red' ? 'from-rose-500 to-red-600' :
                      colorName === 'blue' ? 'from-blue-500 to-indigo-600' :
                      colorName === 'teal' ? 'from-teal-400 to-emerald-600' :
                      colorName === 'indigo' ? 'from-violet-500 to-purple-600' :
                      'from-emerald-500 to-green-600';

    return (
        <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`block group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl backdrop-saturate-150 rounded-[2rem] p-1 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:scale-[1.01]`}
        >
          <div className="bg-white/80 dark:bg-gray-900/80 rounded-[1.8rem] p-4 h-full border border-white/60 dark:border-gray-600 relative overflow-hidden z-10 flex flex-col justify-between">
            {/* Abstract Background Blob */}
            <div className={`absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br ${gradients} opacity-10 rounded-full blur-xl transition-transform duration-700 group-hover:scale-150 group-hover:opacity-20`}></div>
            
            <div className="flex items-start space-x-4 relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients} flex items-center justify-center text-white shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 ring-2 ring-white/50 dark:ring-white/10`}>
                    <Icon size={22} />
                </div>
                <div className="flex-grow pt-0.5">
                    <h3 className="font-extrabold text-gray-900 dark:text-white text-base leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all">{title}</h3>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 leading-tight font-medium line-clamp-2">{description}</p>
                </div>
            </div>

            <div className="mt-4 flex justify-end">
                <div className={`inline-flex items-center text-[9px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full bg-gray-50 dark:bg-gray-800 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors border border-gray-100 dark:border-gray-700`}>
                    <span className="text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white transition-colors">Access</span> 
                    <ArrowRight size={10} className="ml-1.5 text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors group-hover:translate-x-1 transform" />
                </div>
            </div>
          </div>
        </a>
    );
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2 animate-slideUp">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-1 animate-bounce">
            <ExternalLink size={20} />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight drop-shadow-sm">Quick Portals</h2>
        <p className="text-gray-500 dark:text-gray-300 font-medium max-w-md mx-auto text-sm">
            Direct access to essential government services and university tools.
        </p>
      </div>

      <div className="space-y-8">
        {/* Section: Visa & Gov */}
        <section className="animate-fadeIn" style={{animationDelay: '0.1s'}}>
          <h3 className="text-[10px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-3 px-2 flex items-center">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span> Government & Visa
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <LinkCard 
              title="NOC Application" 
              description="Ministry of Education Nepal: No Objection Letter Portal."
              url="https://noc.moest.gov.np/"
              icon={FileBadge}
              colorName="red"
            />
            <LinkCard 
              title="UK Visa Application" 
              description="Official GOV.UK portal to start your student visa application."
              url="https://www.gov.uk/apply-to-visit-or-stay-in-the-uk"
              icon={Globe}
              colorName="blue"
            />
          </div>
        </section>

        {/* Section: Medical */}
        <section className="animate-fadeIn" style={{animationDelay: '0.2s'}}>
          <h3 className="text-[10px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-3 px-2 flex items-center">
             <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 shadow-[0_0_10px_rgba(20,184,166,0.5)]"></span> Health Services
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <LinkCard 
              title="IOM Medical Booking" 
              description="Schedule your mandatory TB test & medical exams."
              url="https://mymedical.iom.int/apps/omas"
              icon={Stethoscope}
              colorName="teal"
            />
            <LinkCard 
              title="Norvic Hospital" 
              description="Book medical checkups for specific visa requirements."
              url="https://patient.norvichospital.com"
              icon={Stethoscope}
              colorName="teal"
            />
          </div>
        </section>

        {/* Section: Interviews */}
        <section className="animate-fadeIn" style={{animationDelay: '0.3s'}}>
          <h3 className="text-[10px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-3 px-2 flex items-center">
             <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span> Appointments
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <LinkCard 
              title="Coventry Interview" 
              description="Schedule credibility interview slot."
              url="https://calendly.com/"
              icon={CalendarCheck}
              colorName="indigo"
            />
            <LinkCard 
              title="BPP Interview" 
              description="Book BPP university admission slot."
              url="https://calendly.com/"
              icon={CalendarCheck}
              colorName="indigo"
            />
            <LinkCard 
              title="General Booking" 
              description="Standard interview scheduling portal."
              url="https://calendly.com/"
              icon={CalendarCheck}
              colorName="indigo"
            />
          </div>
        </section>

        {/* Section: Finance */}
        <section className="animate-fadeIn" style={{animationDelay: '0.4s'}}>
          <h3 className="text-[10px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-3 px-2 flex items-center">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span> Finance
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <LinkCard 
              title="Flywire Payment" 
              description="Secure and fast international tuition fee payments."
              url="https://pay.flywire.com/"
              icon={CreditCard}
              colorName="green"
            />
             <LinkCard 
              title="VFS Global" 
              description="Track your visa application status and appointments."
              url="https://www.vfsglobal.co.uk/en"
              icon={ShieldCheck}
              colorName="green"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResourcesPage;
