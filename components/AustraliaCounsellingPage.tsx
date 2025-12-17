
import React, { useState } from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  DollarSign, 
  BookOpen, 
  GraduationCap, 
  FileText, 
  Plane, 
  Users, 
  HelpCircle, 
  Briefcase, 
  ChevronDown, 
  ChevronUp, 
  CheckSquare, 
  AlertTriangle,
  Lightbulb,
  Compass,
  ArrowRight,
  Globe
} from 'lucide-react';

// Content structure based on the provided Master File
const counsellingData = [
  {
    id: 'intro',
    title: '1. Quick Snapshot',
    icon: Compass,
    content: (
      <div className="space-y-4">
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-900/40">
          <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2 text-sm uppercase tracking-wider">Essential Facts</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">
            <li className="flex items-center"><MapPin size={14} className="mr-2 text-blue-500" /> Destination: Australia</li>
            <li className="flex items-center"><FileText size={14} className="mr-2 text-blue-500" /> Visa: Student Visa (Subclass 500)</li>
            <li className="flex items-center"><DollarSign size={14} className="mr-2 text-blue-500" /> Living Cost: AUD 29,710/year</li>
            <li className="flex items-center"><Briefcase size={14} className="mr-2 text-blue-500" /> Work Rights: 48 hrs/fortnight</li>
            <li className="flex items-center"><BookOpen size={14} className="mr-2 text-blue-500" /> Intakes: Feb, July (Main), Oct</li>
            <li className="flex items-center"><GraduationCap size={14} className="mr-2 text-blue-500" /> Post-Study Work: Visa 485</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'eligibility',
    title: '2. Eligibility Check',
    icon: ShieldCheck,
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-sm flex items-center"><GraduationCap size={16} className="mr-2 text-primary-500"/> Academic</h4>
            <ul className="space-y-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 mr-2"></span>Minimum 12 years education</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 mr-2"></span>Bachelor: GPA ≥ 2.4 (varies)</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 mr-2"></span>Master: GPA ≥ 2.6 + relevant background</li>
              <li className="flex items-start text-red-500 font-bold"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 mr-2"></span>Backlogs/gaps must be justifiable</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-sm flex items-center"><Globe size={16} className="mr-2 text-blue-500"/> English Proficiency</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-2 font-bold text-gray-500 dark:text-gray-400">Level</th>
                    <th className="pb-2 font-bold text-gray-500 dark:text-gray-400">IELTS</th>
                    <th className="pb-2 font-bold text-gray-500 dark:text-gray-400">PTE</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-2 font-medium">Diploma/UG</td>
                    <td className="py-2">6.0 (no band &lt;5.5)</td>
                    <td className="py-2">50</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Master</td>
                    <td className="py-2">6.5 (no band &lt;6.0)</td>
                    <td className="py-2">57 (no band &lt;54)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'logic',
    title: '3. Why Australia? (SOP Logic)',
    icon: Lightbulb,
    content: (
      <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-100 dark:border-amber-900/40">
        <p className="text-xs text-amber-800 dark:text-amber-200 mb-3 font-bold uppercase tracking-wider">Key Points for GS Narrative</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm font-medium text-gray-800 dark:text-gray-200">
          {[
            "Globally recognized education quality",
            "Strong post-study work exposure (PSW)",
            "Skill-based job market alignment",
            "Advanced ICT & Research infrastructure",
            "Safe, multicultural environment",
            "Clear PR-linked skilled occupations"
          ].map((item, i) => (
            <li key={i} className="flex items-center"><CheckSquare size={14} className="mr-2 text-amber-600" /> {item}</li>
          ))}
        </ul>
      </div>
    )
  },
  {
    id: 'courses',
    title: '4. Course Selection',
    icon: BookOpen,
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white text-xs uppercase mb-2">Popular (Nepal Focus)</h4>
          <div className="flex flex-wrap gap-2">
            {['Nursing', 'IT / Computer Science', 'Engineering', 'Accounting', 'Hospitality', 'Social Work', 'Health Sciences'].map((c, i) => (
              <span key={i} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1.5 rounded-lg text-xs font-bold">{c}</span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-emerald-700 dark:text-emerald-400 text-xs uppercase mb-2 flex items-center"><Briefcase size={12} className="mr-1"/> PR-Focused (2025)</h4>
          <div className="flex flex-wrap gap-2">
            {['Nursing', 'Cybersecurity', 'Civil Engineering', 'Early Childhood Education', 'Construction Mgmt', 'Agriculture'].map((c, i) => (
              <span key={i} className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-800 px-3 py-1.5 rounded-lg text-xs font-bold">{c}</span>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'costs',
    title: '5. Cost & Budget',
    icon: DollarSign,
    content: (
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
        <table className="w-full text-left text-xs md:text-sm">
          <thead className="bg-gray-50 dark:bg-gray-900/50">
            <tr>
              <th className="p-3 font-bold text-gray-600 dark:text-gray-400">Item</th>
              <th className="p-3 font-bold text-gray-600 dark:text-gray-400 text-right">Estimate (AUD)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            <tr><td className="p-3">Tuition (Annual)</td><td className="p-3 text-right font-bold">20,000 – 35,000</td></tr>
            <tr className="bg-blue-50/50 dark:bg-blue-900/10"><td className="p-3">Living Cost (DHA)</td><td className="p-3 text-right font-bold text-blue-600 dark:text-blue-400">29,710</td></tr>
            <tr><td className="p-3">OSHC (Insurance)</td><td className="p-3 text-right">500 – 800</td></tr>
            <tr><td className="p-3">Visa Fee</td><td className="p-3 text-right">~2,000</td></tr>
            <tr><td className="p-3">Air Ticket</td><td className="p-3 text-right">~700</td></tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    id: 'documents',
    title: '6. Document Checklist',
    icon: FileText,
    content: (
      <div className="space-y-4">
        <div className="p-3 bg-gray-50 dark:bg-gray-900/30 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-2">A. Offer Letter</h4>
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-400">
            <span className="flex items-center"><div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>Academic Docs</span>
            <span className="flex items-center"><div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>Passport</span>
            <span className="flex items-center"><div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>English Score</span>
            <span className="flex items-center"><div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>SOP (GS-aligned)</span>
          </div>
        </div>
        
        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h4 className="font-bold text-sm text-green-900 dark:text-green-300 mb-2">B. Financials (Visa)</h4>
          <ul className="space-y-1 text-xs text-green-800 dark:text-green-200">
            <li className="flex items-start"><CheckSquare size={12} className="mt-0.5 mr-2 opacity-70"/> Bank Balance + 3-6m Statement</li>
            <li className="flex items-start"><CheckSquare size={12} className="mt-0.5 mr-2 opacity-70"/> Education Loan Sanction Letter</li>
            <li className="flex items-start"><CheckSquare size={12} className="mt-0.5 mr-2 opacity-70"/> Income Proof (Salary/Business/Land)</li>
            <li className="flex items-start"><CheckSquare size={12} className="mt-0.5 mr-2 opacity-70"/> Tax Clearance & Property Valuation</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'risks',
    title: '7. Risk Classification',
    icon: AlertTriangle,
    content: (
      <div className="space-y-2">
        <div className="flex items-center p-3 bg-green-100 dark:bg-green-900/40 rounded-lg border border-green-200 dark:border-green-800">
          <div className="flex-1">
            <h4 className="font-bold text-xs text-green-800 dark:text-green-300 uppercase">Low Risk</h4>
            <p className="text-[10px] text-green-700 dark:text-green-400 mt-0.5">Strong academics, clear relevance, stable sponsor, no gaps.</p>
          </div>
        </div>
        <div className="flex items-center p-3 bg-yellow-100 dark:bg-yellow-900/40 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <div className="flex-1">
            <h4 className="font-bold text-xs text-yellow-800 dark:text-yellow-300 uppercase">Medium Risk</h4>
            <p className="text-[10px] text-yellow-700 dark:text-yellow-400 mt-0.5">Minor gaps, average GPA, single income source, course shift.</p>
          </div>
        </div>
        <div className="flex items-center p-3 bg-red-100 dark:bg-red-900/40 rounded-lg border border-red-200 dark:border-red-800">
          <div className="flex-1">
            <h4 className="font-bold text-xs text-red-800 dark:text-red-300 uppercase">High Risk (Decline)</h4>
            <p className="text-[10px] text-red-700 dark:text-red-400 mt-0.5">Large unexplained gaps, weak finances, prior refusals, mismatch.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'flow',
    title: '8. Application Flow',
    icon: ArrowRight,
    content: (
      <div className="relative pl-4 border-l-2 border-primary-200 dark:border-primary-800 space-y-4">
        {[
          "Profile Assessment & Shortlisting",
          "Document Prep & Offer Application",
          "GTE/GS Check & Fee Payment",
          "CoE Issuance",
          "Medical, Biometrics & OSHC",
          "Visa Lodgement",
          "Decision & Pre-Departure"
        ].map((step, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary-500 border-2 border-white dark:border-gray-900"></div>
            <p className="text-xs font-bold text-gray-800 dark:text-gray-200">{step}</p>
          </div>
        ))}
      </div>
    )
  }
];

const AustraliaCounsellingPage: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="relative rounded-[2.5rem] bg-gradient-to-r from-blue-900 to-indigo-900 p-8 text-white overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-widest mb-3">
            <Compass size={12} className="mr-1.5" /> Internal Guide
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2">Australia Master File</h2>
          <p className="text-blue-100 font-medium text-sm md:text-base max-w-xl">
            Complete counselling framework from intake to visa. Use this for structured, compliant, and successful student guidance.
          </p>
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {counsellingData.map((item) => (
          <div 
            key={item.id} 
            className={`bg-white dark:bg-gray-800 rounded-2xl shadow-sm border transition-all duration-300 overflow-hidden ${openSection === item.id ? 'md:col-span-2 ring-2 ring-primary-500/20 border-primary-500/30' : 'border-gray-100 dark:border-gray-700 hover:shadow-md'}`}
          >
            <button 
              onClick={() => toggleSection(item.id)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl transition-colors ${openSection === item.id ? 'bg-primary-600 text-white' : 'bg-primary-50 dark:bg-gray-700 text-primary-600 dark:text-primary-400'}`}>
                  <item.icon size={20} strokeWidth={2.5} />
                </div>
                <h3 className={`font-bold text-sm md:text-base ${openSection === item.id ? 'text-primary-700 dark:text-primary-300' : 'text-gray-800 dark:text-white'}`}>
                  {item.title}
                </h3>
              </div>
              <div className={`p-1 rounded-full transition-transform duration-300 ${openSection === item.id ? 'rotate-180 bg-gray-100 dark:bg-gray-700' : ''}`}>
                <ChevronDown size={20} className="text-gray-400" />
              </div>
            </button>
            
            {openSection === item.id && (
              <div className="px-5 pb-5 pt-0 animate-slideDown">
                <div className="h-px w-full bg-gray-100 dark:bg-gray-700 mb-4"></div>
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Sticky Note */}
      <div className="sticky bottom-6 bg-red-50 dark:bg-red-900/80 backdrop-blur-xl p-4 rounded-xl border border-red-100 dark:border-red-800 shadow-lg mx-1">
        <div className="flex items-start gap-3">
          <AlertTriangle size={20} className="text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-xs text-red-800 dark:text-red-200 uppercase tracking-wide mb-1">Counsellor Control Note</h4>
            <p className="text-[10px] md:text-xs text-red-700 dark:text-red-300 leading-relaxed font-medium">
              Australia counselling is a compliance operation, not a sales process. Do not make false assurances. Every decision must reduce visa risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AustraliaCounsellingPage;
