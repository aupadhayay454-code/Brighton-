
import React, { useState } from 'react';
import { UploadCloud, FileText, Check, X } from 'lucide-react';

const DocumentUploadPage: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleUpload = (docType: string) => {
    // Simulate upload
    if (!uploadedFiles.includes(docType)) {
      setUploadedFiles([...uploadedFiles, docType]);
    }
  };

  const DocItem = ({ label, type }: { label: string, type: string }) => {
    const isUploaded = uploadedFiles.includes(type);
    
    return (
      <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl shadow-sm mb-3">
        <div className="flex items-center">
          <div className={`p-2 rounded-lg mr-3 ${isUploaded ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
            <FileText size={20} />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-800 dark:text-white">{label}</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">{isUploaded ? 'Uploaded successfully' : 'Required'}</p>
          </div>
        </div>
        <button 
          onClick={() => handleUpload(type)}
          disabled={isUploaded}
          className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center transition-colors ${
            isUploaded 
              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 cursor-default' 
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {isUploaded ? (
            <>
              <Check size={12} className="mr-1" /> Done
            </>
          ) : (
            <>
              <UploadCloud size={12} className="mr-1" /> Upload
            </>
          )}
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="text-center mb-6">
        <div className="inline-block p-3 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400 mb-3">
            <UploadCloud size={32} />
        </div>
        <h2 className="text-2xl font-bold text-green-900 dark:text-green-400">Document Hub</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Securely upload your academic documents for processing.</p>
      </div>

      <div className="space-y-2">
        <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 px-1">Academic Documents</h3>
        <DocItem label="SLC/SEE Marksheet" type="see" />
        <DocItem label="+2 Transcript/Certificate" type="plus2" />
        <DocItem label="Bachelor's Transcript (If applicable)" type="bachelors" />
        
        <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mt-6 mb-2 px-1">Identification</h3>
        <DocItem label="Passport (Front & Back)" type="passport" />
        <DocItem label="Citizenship" type="citizenship" />
        
        <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mt-6 mb-2 px-1">Financial</h3>
        <DocItem label="Bank Balance Certificate" type="bank" />
      </div>

      <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900/40 rounded-lg text-xs text-yellow-800 dark:text-yellow-200">
        <p className="font-bold mb-1">Note:</p>
        All documents must be scanned clearly in color. Max file size 5MB per file. Supported formats: PDF, JPG, PNG.
      </div>
    </div>
  );
};

export default DocumentUploadPage;
