
import React, { useState } from 'react';
import { HelpCircle, Bot, Send, User, BookOpen, School, Copy, Check, ChevronDown, ChevronUp, ListPlus, Sparkles } from 'lucide-react';
import { generateInterviewAnswer } from '../services/geminiService';

const questionBank = [
  {
    category: "Introduction",
    questions: [
      "Tell me your full name Please.",
      "Tell me your passport Number.",
      "Program Name",
      "Tuition Fee",
      "Address of the University"
    ]
  },
  {
    category: "Country",
    questions: [
      "Why UK?",
      "How did you decide to study in the UK? Give Country Comparisons",
      "What are the benefits of studying in the UK compared to other countries?",
      "Why did you choose NOT to study in your own country?",
      "How is Education system in the UK different from that of Nepal?",
      "Is your university inside or outside of London?",
      "Do you know how much your tuition and living costs are?",
      "What are the suburbs of the University town?",
      "Tell me something interesting about the UK.",
      "What excites you about the UK?",
      "Capital, Economy size, National Food, Countries",
      "Living Expenses in the UK per year?"
    ]
  },
  {
    category: "City",
    questions: [
      "What do you know about your city e.g. Wolverhampton?",
      "What are the cities around the University Town?",
      "What is your city famous for?",
      "What are things that you can do in your university city/town?"
    ]
  },
  {
    category: "University",
    questions: [
      "Tell me something about the University.",
      "How did you decide to study at your chosen university? Give University comparisons.",
      "Rankings EXPLAIN",
      "Accreditations",
      "Which other universities have you considered/researched?",
      "How did you find out about your university?",
      "Where is the university? University Location and Address",
      "Do you know roughly how large the university is?",
      "Do you know how many campuses this university has?",
      "What are the advantages of your University over other universities you have researched?"
    ]
  },
  {
    category: "Program/Course",
    questions: [
      "Why this program? (i.e. Business Management, Computer Science)",
      "What do you mean by Business management?",
      "Which other programs did you consider before finalizing this course?",
      "Why did you choose this course and how does it relate to your previous study?",
      "What qualification will you receive?",
      "How long does the course last?",
      "What are your course start and end dates?"
    ]
  },
  {
    category: "Financials",
    questions: [
      "Who is financing your studies?",
      "How much is their annual income?",
      "Who is Mr./Mrs. (Sponsor)?",
      "Do you have evidence of the financial status of your financial sponsor?",
      "What is the source of your bank balance?"
    ]
  },
  {
    category: "Gaps",
    questions: [
      "How do you explain the gaps in your study/professional history?",
      "When did you graduate?",
      "If worked, what were your responsibilities?",
      "How much is/was your salary?",
      "When did you start your job?",
      "Why do you plan to study now after working?"
    ]
  }
];

const UKInterviewPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [university, setUniversity] = useState('');
  const [background, setBackground] = useState('');
  const [customQuestion, setCustomQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleQuestionClick = (q: string) => {
    setCustomQuestion(`1. ${q}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoadCategory = (category: string, questions: string[]) => {
    const numberedQuestions = questions.map((q, i) => `${i + 1}. ${q}`).join('\n');
    const bulkText = `Category: ${category}\n\n${numberedQuestions}`;
    setCustomQuestion(bulkText);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !course || !university || !customQuestion) return;

    setIsGenerating(true);
    setAiAnswer('');
    
    const answer = await generateInterviewAnswer(name, course, university, customQuestion, background);
    setAiAnswer(answer);
    setIsGenerating(false);
  };

  return (
    <div className="grid lg:grid-cols-3 gap-4 items-start">
      
      {/* AI Assistant Section - Compact */}
      <div className="lg:col-span-1 lg:sticky lg:top-20 space-y-3">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 dark:border-gray-700 overflow-hidden ring-1 ring-white/40 dark:ring-white/10">
          <div className="bg-primary-600/90 dark:bg-primary-800/90 backdrop-blur-sm p-3 text-white flex items-center justify-between">
            <div className="flex items-center">
                <Bot className="mr-2" size={20} />
                <h3 className="font-bold text-sm">AI Answer Helper</h3>
            </div>
            <Sparkles size={16} className="text-primary-200 animate-pulse"/>
          </div>
          
          <div className="p-4 space-y-3">
            <div className="text-[10px] text-gray-600 dark:text-gray-300 mb-2 bg-primary-50/80 dark:bg-primary-900/30 p-2 rounded-lg border border-primary-100/50 dark:border-primary-800/50 font-medium">
              Fill details, then click a question to generate answers.
            </div>

            <form onSubmit={handleGenerate} className="space-y-2.5">
              <div>
                <label className="block text-[10px] font-bold text-gray-700 dark:text-gray-300 mb-0.5 ml-1">Your Name</label>
                <div className="relative">
                  <User size={12} className="absolute left-3 top-2.5 text-gray-400" />
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 border border-gray-200/80 dark:border-gray-600/80 rounded-lg text-xs text-gray-900 dark:text-white bg-white/80 dark:bg-gray-700/80 focus:ring-2 focus:ring-primary-500/50 outline-none shadow-sm placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="e.g. John Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-700 dark:text-gray-300 mb-0.5 ml-1">Course</label>
                <div className="relative">
                  <BookOpen size={12} className="absolute left-3 top-2.5 text-gray-400" />
                  <input 
                    type="text" 
                    required
                    value={course}
                    onChange={e => setCourse(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 border border-gray-200/80 dark:border-gray-600/80 rounded-lg text-xs text-gray-900 dark:text-white bg-white/80 dark:bg-gray-700/80 focus:ring-2 focus:ring-primary-500/50 outline-none shadow-sm placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="e.g. MSc Management"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-700 dark:text-gray-300 mb-0.5 ml-1">University</label>
                <div className="relative">
                  <School size={12} className="absolute left-3 top-2.5 text-gray-400" />
                  <input 
                    type="text" 
                    required
                    value={university}
                    onChange={e => setUniversity(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 border border-gray-200/80 dark:border-gray-600/80 rounded-lg text-xs text-gray-900 dark:text-white bg-white/80 dark:bg-gray-700/80 focus:ring-2 focus:ring-primary-500/50 outline-none shadow-sm placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="e.g. Coventry University"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-700 dark:text-gray-300 mb-0.5 ml-1">Background (Optional)</label>
                <input 
                  type="text" 
                  value={background}
                  onChange={e => setBackground(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200/80 dark:border-gray-600/80 rounded-lg text-xs text-gray-900 dark:text-white bg-white/80 dark:bg-gray-700/80 focus:ring-2 focus:ring-primary-500/50 outline-none shadow-sm placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="e.g. IT Officer, 2023 Grad"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-700 dark:text-gray-300 mb-0.5 ml-1">Selected Question(s)</label>
                <div className="relative">
                  <HelpCircle size={12} className="absolute left-3 top-2.5 text-gray-400" />
                  <textarea 
                    required
                    value={customQuestion}
                    onChange={e => setCustomQuestion(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 border border-gray-200/80 dark:border-gray-600/80 rounded-lg text-xs text-gray-900 dark:text-white bg-gray-50/50 dark:bg-gray-700/50 focus:ring-2 focus:ring-primary-500/50 outline-none min-h-[80px] font-mono shadow-inner resize-none placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Select a question from the list..."
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isGenerating || !name || !course || !university || !customQuestion}
                className={`w-full py-2.5 rounded-lg font-bold text-white text-xs flex items-center justify-center transition-all transform active:scale-95 shadow-lg ${
                  isGenerating ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-primary-600 to-primary-700 hover:scale-[1.02]'
                }`}
              >
                {isGenerating ? (
                  <span className="flex items-center"><span className="animate-spin mr-2">⏳</span> Thinking...</span>
                ) : (
                  <span className="flex items-center"><Send size={14} className="mr-2" /> Generate Answer</span>
                )}
              </button>
            </form>
          </div>

          {/* AI Output Area */}
          {aiAnswer && (
            <div className="bg-white/40 dark:bg-gray-700/40 p-3 border-t border-white/50 dark:border-gray-600 animate-fadeIn backdrop-blur-sm">
              <div className="flex justify-between items-start mb-1.5">
                <span className="text-[10px] font-bold text-primary-800 dark:text-primary-300 uppercase flex items-center">
                    <Bot size={10} className="mr-1" /> AI Suggestion
                </span>
                <button 
                    onClick={() => navigator.clipboard.writeText(aiAnswer)}
                    className="text-gray-500 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center text-[10px] font-medium transition-colors"
                >
                    <Copy size={10} className="mr-1" /> Copy
                </button>
              </div>
              <div className="text-xs text-gray-800 dark:text-gray-100 bg-white/90 dark:bg-gray-800/90 p-3 rounded-lg border border-white/60 dark:border-gray-600 shadow-sm whitespace-pre-wrap leading-relaxed font-medium">
                {aiAnswer}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Question Bank Section - Compact */}
      <div className="lg:col-span-2 space-y-4">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-white/50 dark:border-gray-700 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-primary-900 dark:text-primary-400">Question Bank</h2>
            <p className="text-gray-600 dark:text-gray-300 text-[10px] mt-0.5 font-medium">
                Click a question to load it.
            </p>
          </div>
          <div className="h-10 w-10 bg-primary-100/80 dark:bg-primary-900/50 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 shadow-sm">
            <BookOpen size={20} />
          </div>
        </div>

        <div className="space-y-3">
          {questionBank.map((cat, idx) => {
            const isOpen = activeCategory === cat.category;
            return (
              <div key={idx} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl border border-white/50 dark:border-gray-700 overflow-hidden shadow-sm transition-all hover:shadow-md hover:bg-white/80 dark:hover:bg-gray-800/80">
                <button 
                  onClick={() => setActiveCategory(isOpen ? null : cat.category)}
                  className={`w-full flex justify-between items-center p-4 text-left transition-colors ${isOpen ? 'bg-primary-50/50 dark:bg-primary-900/20 text-primary-900 dark:text-primary-300' : 'text-gray-800 dark:text-gray-200'}`}
                >
                  <h3 className="font-bold text-sm">{cat.category}</h3>
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} className="text-gray-400" />}
                </button>
                
                {isOpen && (
                  <div className="animate-slideDown border-t border-white/40 dark:border-gray-700">
                    <div className="p-2 bg-gray-50/50 dark:bg-gray-900/30 flex justify-end border-b border-white/40 dark:border-gray-700">
                      <button 
                        onClick={() => handleLoadCategory(cat.category, cat.questions)}
                        className="flex items-center text-[9px] bg-primary-600 text-white px-3 py-1.5 rounded-md font-bold hover:bg-primary-700 transition-colors shadow-sm"
                      >
                        <ListPlus size={12} className="mr-1" /> Load All
                      </button>
                    </div>
                    
                    <ul className="divide-y divide-white/40 dark:divide-gray-700">
                      {cat.questions.map((q, qIdx) => (
                        <li 
                          key={qIdx}
                          onClick={() => handleQuestionClick(q)}
                          className="p-3 hover:bg-primary-50/60 dark:hover:bg-primary-900/20 cursor-pointer transition-colors flex items-start group"
                        >
                            <div className="bg-white dark:bg-gray-700 p-1 rounded-md mr-2.5 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 text-gray-400 dark:text-gray-500 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors mt-0.5 shadow-sm border border-white/50 dark:border-gray-600">
                                <HelpCircle size={12} />
                            </div>
                            <div className="flex-grow">
                                <p className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary-900 dark:group-hover:text-white text-xs leading-relaxed">
                                    {q}
                                </p>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 text-primary-600 dark:text-primary-400 ml-2 transition-opacity">
                                <Check size={14} />
                            </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UKInterviewPage;
