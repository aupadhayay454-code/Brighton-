
import { Destination } from '../types';

export const ukProcessSteps = [
  {
    title: "1. Prepare for the Offer Letter",
    docs: ["Academic Records: Transcripts and certificates", "Passport: Valid", "IELTS/PTE scores", "SOP", "MOI Certificate", "LOR (at least one)", "Work Experience (up to 5 years gap)"],
    action: "Apply for a conditional offer letter from the university."
  },
  {
    title: "2. After Receiving Conditional Offer",
    docs: ["SOP: 500-word essay", "CV: Academic/professional background", "Experience Letters"],
    action: "Submit application, Pay app fees (£80-£90), Prepare for CAS interview."
  },
  {
    title: "3. Financial Preparations",
    docs: ["Tuition Fee Payment (2k-10k)", "Bank Loan/Deposit: 45 Lakhs NPR (28 days)", "Medical: TB report (Norvic/IOM)"],
    action: "Gather necessary documents for financial preparation and health checkups."
  },
  {
    title: "4. CAS Interview & Fee Payment",
    docs: [],
    action: "Attend CAS interview. Make required fee payment. Receive CAS letter within 2-3 weeks."
  },
  {
    title: "5. Visa Application Process",
    docs: ["CAS Letter", "Visa Application", "IHS Surcharge (~4L Bachelor, ~2L Master)", "Visa Fee: 85k NPR", "Biometric Appointment"],
    action: "Apply for student visa. Attend biometric appointment. Wait for visa decision."
  },
  {
    title: "6. Scholarships & Selection",
    docs: ["Scholarships: £1500 to £4000 based on merit"],
    action: "Evaluate scholarships and university options based on costs and merit."
  }
];

export const australiaProcessSteps = [
  {
    title: "1. For Offer Letter",
    docs: [
      "All Academics Documents (min 2.60 GPA)",
      "Passport",
      "(IELTS/PTE)",
      "Internship or Work Experience with Bank Statement and TDS",
      "Company ID Card / PAN Card (if gap)",
      "Married Certificate (if married)",
      "Dependent: Academic, Passport, Work Experience"
    ],
    action: "Initial Documentation"
  },
  {
    title: "2. GTE - Income Documents",
    docs: [
      "Salary: Min 1 year TDS, Salary Certificate, 1 year Bank Statement, Company ID, Personal PAN, Job appointment letter",
      "Pension: Pension Book, 1 year pension statement",
      "Business: PAN Card, Registration, Income tax returns (3 yrs), Itemized bank statements (12 months)",
      "Foreign Salary: Certificate, Passport, Bank Statement/Pay Slip, Visa Letter, Contract"
    ],
    action: "Proof of Income"
  },
  {
    title: "3. GTE - Assets & Other Income",
    docs: [
      "Land Lease/House Rent: Ownership Certificate, Bank Statement (12 months), Tax receipts, Agreement, Tenant Citizenship/Photo",
      "Agriculture Income: Income Tax return (3 yrs), Ward income documents",
      "Vehicle Income: Photo, Blue book, Insurance, Income letter, Bank Statement, Tax payment"
    ],
    action: "Supporting Income"
  },
  {
    title: "4. Ward & Relationship",
    docs: [
      "Ward Relationship Certificate",
      "Ward Birth Certificate",
      "Ward Annual Income Verification"
    ],
    action: "Local Verification"
  },
  {
    title: "5. Funds (Financials)",
    docs: [
      "Bank Loan (A level Bank): Loan sanctioned letter, Mortgage deed, Engineering valuation, Loan disbursement & statements, Land ownership & tax receipts (3 yrs)",
      "Land Sale: Ownership Documents (Seller/Buyer), Transfer deeds (with tax), Bank statement (sale to now), Land tax receipt (3 yrs)"
    ],
    action: "Financial Requirement"
  }
];

export const destinations: Destination[] = [
  {
    id: 'uk',
    country: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    details: 'The UK is home to some of the world’s oldest and most prestigious universities. Shorter course durations mean you can graduate sooner.',
    universities: [
      { 
        name: 'University of Hertfordshire', 
        location: 'Hatfield', 
        website: 'https://www.herts.ac.uk/',
        address: 'College Ln, Hatfield, UK',
        mapLink: 'https://maps.app.goo.gl/WZZDq3u8ycWbKD7h8',
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
        tuitionFee: '£15,550 - £17,950',
        scholarship: 'Up to £4,000',
        intake: 'September',
        casDeposit: '£5,000',
        details: {
          ugCourses: ['Aerospace Engineering', 'Architecture', 'Biomedical Science', 'Business Administration', 'Computer Science', 'Nursing', 'Pharmacy'],
          pgCourses: ['Civil Engineering', 'Computer Science', 'Finance and Investment Banking', 'Public Health', 'Software Engineering', 'Law'],
          ugRequirements: ['Grade 12: 70% or 2.8 GPA', 'IELTS: 6.0 (min 5.5)', 'Waiver: 70% in 12th English'],
          pgRequirements: ['3-Year Bachelor: 65%', '4-Year Bachelor: 60%', 'IELTS: 6.0/6.5']
        },
        remarks: 'No Pre-CAS Interview if students have IELTS/PTE'
      },
      { 
        name: 'University of the West of Scotland (London)', 
        location: 'London Campus', 
        website: 'https://www.uws.ac.uk/',
        address: 'Clove Cres, London, UK',
        mapLink: 'https://maps.app.goo.gl/QKRZefJAfin5Yh9x9',
        image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80',
        tuitionFee: '£9,950 - £15,250',
        scholarship: '£1,500 - £2,000',
        intake: 'September, January',
        casDeposit: '£7,000',
        details: {
            ugCourses: ['BA (Hons) International Business', 'BSc Professional Health Studies (Top-up)'],
            pgCourses: ['MBA (Digital Marketing, Finance, Supply Chain)', 'MSc Project Management', 'MSc IT', 'Master of Public Administration'],
            ugRequirements: ['GPA 2.5 or 60%', 'IELTS: 6.0 (min 5.5)'],
            pgRequirements: ['4-Year Degree: 53%', '3-Year Degree: 55%', '2 years work exp for some MBA']
        }
      },
      { 
        name: 'University of Chester', 
        location: 'Chester', 
        website: 'https://www1.chester.ac.uk/',
        address: 'Parkgate Rd, Chester, UK',
        mapLink: 'https://maps.app.goo.gl/K5eLgJHZqrzTiAxLA',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
        tuitionFee: '£13,950 - £14,950',
        scholarship: '£1,500',
        intake: 'October',
        details: {
            ugCourses: ['Accounting & Finance', 'Computer Science', 'Biomedical Science', 'Business Management', 'Social Work'],
            pgCourses: ['MSc Accounting', 'MBA', 'Master of Public Health', 'MSc Digital Marketing'],
            ugRequirements: ['CGPA 2.8+', 'IELTS: 6.0 (5.5)'],
            pgRequirements: ['4-Year Bachelor: 50%', '3-Year Bachelor: 60%', 'IELTS: 6.5 (5.5)']
        }
      },
      { 
        name: 'Wrexham Glyndŵr University', 
        location: 'Wales', 
        website: 'https://wrexham.ac.uk/',
        address: 'Mold Rd, Wrexham, UK',
        mapLink: 'https://maps.app.goo.gl/cCJ5SXCwMG2Wr69e9',
        image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
        tuitionFee: '£9,750 - £11,000',
        scholarship: 'N/A',
        intake: 'November',
        details: {
            ugCourses: ['MBA', 'MSc Computing', 'MSc Engineering', 'Nursing (Adult/Mental Health)'],
            pgCourses: ['MBA', 'MSc Computing', 'MSc Engineering'],
            ugRequirements: ['Grade 12: 65%', 'Gap: 2 years accepted', 'IELTS 6.0 (5.5)'],
            pgRequirements: ['Bachelor: 55-60%', 'IELTS 6.0 (5.5)']
        },
        remarks: 'Affordable tuition fees'
      },
      { 
        name: 'York St John University', 
        location: 'York', 
        website: 'http://www.yorksj.ac.uk/',
        address: 'Lord Mayor\'s Walk, York, UK',
        mapLink: 'https://maps.app.goo.gl/N4oLjQCtzGDMXaGo9',
        image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80',
        tuitionFee: '£11,500 - £14,000',
        scholarship: '£1,000',
        intake: 'September',
        details: {
            ugCourses: ['Business Management', 'Computer Science', 'Digital Marketing', 'Public Health'],
            pgCourses: ['MSc Computer Science', 'Cyber Security', 'LLB Law', 'Biomedical Science'],
            ugRequirements: ['CGPA 2.5 or 65%', 'IELTS 6.0/5.5', 'Gap accepted from 2019'],
            pgRequirements: ['Bachelor 1st Div or 60%', 'IELTS 6.0/6.0']
        }
      },
      { 
        name: 'BPP University', 
        location: 'London', 
        website: 'https://www.bpp.com',
        address: 'Holborn, London',
        mapLink: 'https://maps.app.goo.gl/JxjRBzNv4v7e7YK59',
        image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80',
        tuitionFee: '£12,950 - £17,100',
        scholarship: 'N/A',
        intake: 'February',
        casDeposit: '£10,000 (1st Installment)',
        details: {
            pgCourses: ['MSc Healthcare Leadership', 'MSc Management', 'MSc Management with Project Management'],
            pgRequirements: ['4-Year Degree: 55-60%', '3-Year Degree: 60%', 'MOI Accepted from TU, KU, PU']
        },
        remarks: 'Quick Offer Letter (24 hrs)'
      },
      { 
        name: 'University College Birmingham', 
        location: 'Birmingham', 
        website: 'http://www.ucb.ac.uk/',
        address: 'Summer Row, Birmingham',
        mapLink: 'https://maps.app.goo.gl/qJTvfcEy77P4kb5k9',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
        tuitionFee: '£14,000 - £15,000',
        scholarship: '£2,500',
        intake: 'Feb, Sept',
        details: {
            ugCourses: ['Aviation Management', 'Digital Marketing', 'Cyber Security', 'Nursing'],
            pgCourses: ['MSc Computer Science', 'MSc Public Health', 'MSc Finance', 'MSc Culinary Arts'],
            ugRequirements: ['GPA 2.8', 'IELTS 6.5/5.5', 'Gap: 2020 Passout'],
            pgRequirements: ['3-Year Degree: 65%', '4-Year Degree: 60%', 'Gap: 7/8 Years accepted']
        }
      },
      { 
        name: 'Canterbury Christ Church University', 
        location: 'Canterbury', 
        website: 'https://www.canterbury.ac.uk/',
        address: 'North Holmes Rd, Canterbury',
        mapLink: 'https://maps.app.goo.gl/Y2pbQX394Fe7NFqu9',
        image: 'https://images.unsplash.com/photo-1591123120675-6f7f4a54e571?auto=format&fit=crop&w=800&q=80',
        tuitionFee: '£15,500',
        scholarship: '£1,500',
        intake: 'June, Sept',
        casDeposit: '£5,000',
        details: {
            ugCourses: ['Public Health', 'Computing', 'Business Management', 'Nursing'],
            pgCourses: ['MSc Global Public Health', 'MBA International', 'MSc International Business'],
            ugRequirements: ['GPA 2.4 - 2.6', 'IELTS 6.0 (5.5)'],
            pgRequirements: ['Bachelor: 60%', 'IELTS 6.0 (5.5)']
        }
      },
      { 
        name: 'University of Bolton', 
        location: 'Bolton', 
        website: 'https://www.bolton.ac.uk/',
        address: 'Deane Rd, Bolton',
        mapLink: 'https://maps.app.goo.gl/PwbfRDhzL2TEWtnJ7',
        image: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=80',
        tuitionFee: '£15,951',
        scholarship: 'Up to £2,000',
        intake: 'September',
        casDeposit: '£5,000',
        details: {
            ugCourses: ['Civil Engineering', 'Computer Science', 'Nursing', 'Biomedical Science'],
            pgCourses: ['MSc Data Analytics', 'MSc Cloud & Network Security', 'MBA'],
            pgRequirements: ['Bachelor: 55%', 'IELTS 6.0 (5.5)']
        }
      },
      { 
        name: 'Ulster University', 
        location: 'London/Birmingham/Belfast', 
        website: 'https://www.ulster.ac.uk/',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
        tuitionFee: '£12,707 (After Scholarship)',
        scholarship: '15% - £2,000',
        intake: 'May, Sept',
        casDeposit: '£6,500',
        details: {
            pgCourses: ['MSc International Business', 'MSc Marketing', 'MSc Human Resource Management', 'MSc Public Health'],
            pgRequirements: ['3-Year Degree: 60%', '4-Year Degree: 55%', 'Gap up to 15 years accepted']
        },
        remarks: 'Campuses in London & Birmingham'
      },
      { 
        name: 'University of Bradford', 
        location: 'Bradford', 
        website: 'https://www.bradford.ac.uk/',
        address: 'Richmond Rd, Bradford',
        mapLink: 'https://maps.app.goo.gl/UVB2DVWnpC72DPhD7',
        image: 'https://images.unsplash.com/photo-1565514020176-db8eb7275a59?auto=format&fit=crop&w=800&q=80',
        tuitionFee: '£11,645 (After Scholarship)',
        scholarship: 'Up to 50% (UG)',
        casDeposit: '£6,000',
        details: {
            ugCourses: ['Animation', 'AI', 'Computer Science', 'Public Health'],
            ugRequirements: ['Grade 12: 70%', 'IELTS 6.0 (5.5)']
        }
      },
      { 
        name: 'Queen Margaret University', 
        location: 'Edinburgh', 
        website: 'https://www.qmu.ac.uk/',
        address: 'Musselburgh, Scotland',
        mapLink: 'https://maps.app.goo.gl/dpAMG5gox4tEZJuR6',
        image: 'https://images.unsplash.com/photo-1532709159276-54538d26c4f0?auto=format&fit=crop&w=800&q=80',
        tuitionFee: '£9,250',
        scholarship: '£3,000',
        details: {
            ugCourses: ['Public Health', 'Hospitality & Tourism', 'Nursing', 'Business Management'],
            ugRequirements: ['CGPA 2.8', 'IELTS 6.0 (5.5)']
        },
        remarks: 'Very Affordable'
      },
      { 
        name: 'Leeds Trinity University', 
        location: 'Leeds', 
        website: 'http://www.leedstrinity.ac.uk/',
        address: 'Brownberrie Ln, Leeds',
        mapLink: 'https://maps.app.goo.gl/m5d3YKnNe8NghwN18',
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
        tuitionFee: '£12,000 - £15,000',
        scholarship: 'Up to £3,350',
        intake: 'September',
        casDeposit: '50% Tuition',
        details: {
            ugCourses: ['Business', 'Journalism', 'Psychology'],
            pgCourses: ['MBA', 'Data Science & AI', 'Project Management'],
            ugRequirements: ['Grade 12: 65%', 'Gap: 2 years'],
            pgRequirements: ['Bachelor: 55%', 'Gap: 10 years']
        }
      },
      { 
        name: 'Middlesex University London', 
        location: 'London', 
        website: 'https://www.mdx.ac.uk/',
        address: 'The Burroughs, London',
        mapLink: 'https://maps.app.goo.gl/YvyjfaHboZVCmLcVA',
        image: 'https://images.unsplash.com/photo-1545424444-3a246f714b71?auto=format&fit=crop&w=800&q=80',
        tuitionFee: '£15,100 - £20,000',
        scholarship: '£1,000 - £2,000',
        intake: 'January',
        casDeposit: '£1,000 + 50%',
        details: {
            ugCourses: ['Nursing', 'Computer Science', 'Cyber Security'],
            pgCourses: ['MBA', 'Data Science', 'Public Health'],
            ugRequirements: ['Grade 12: 55% or 2.4 GPA', 'IELTS 6.0 (5.5)'],
            pgRequirements: ['Bachelor: 60%', 'IELTS 6.5 (6.0)']
        },
        remarks: 'In-house English test available'
      },
      { 
        name: 'Northumbria University', 
        location: 'London/Newcastle', 
        website: 'http://london.northumbria.ac.uk/',
        image: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=800&q=80',
        tuitionFee: '£13,825 - £15,925',
        scholarship: 'Up to 30%',
        intake: 'May',
        casDeposit: '£5,500',
        details: {
            pgCourses: ['MSc Business with Analytics', 'MSc Cyber Security', 'MSc Digital Marketing', 'MBA'],
            pgRequirements: ['Bachelor: 55%', 'IELTS 6.5 (5.5) or 6.0 (5.5) for Business']
        }
      },
      { 
        name: 'University of Roehampton', 
        location: 'London', 
        website: 'https://www.roehampton.ac.uk/',
        address: 'Roehampton Ln, London',
        mapLink: 'https://maps.app.goo.gl/5ejMrm7EHiiXK8i9A',
        image: 'https://images.unsplash.com/photo-1490122417551-6ee9691429d0?auto=format&fit=crop&w=800&q=80',
        tuitionFee: '£15,750 - £17,500',
        scholarship: 'Up to £4,000',
        intake: 'April, Sept',
        casDeposit: '£8,000 (PG)',
        details: {
            ugCourses: ['BSc Business Management', 'BSc Marketing', 'LLB Law'],
            pgCourses: ['MSc Computing', 'MBA Healthcare Management', 'MSc Project Management'],
            ugRequirements: ['GPA 2.8', 'IELTS 6.0 (5.5)'],
            pgRequirements: ['3-Year Bachelor: 60%', '4-Year Bachelor: 55%', 'Gap 5 years accepted']
        }
      },
      { 
        name: 'University of Worcester', 
        location: 'Worcester', 
        website: 'http://www.worcester.ac.uk/',
        image: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=80',
        tuitionFee: '£16,200',
        scholarship: 'Up to £3,000',
        details: {
            ugCourses: ['BSc Nursing (Adult)', 'Business Management', 'Computing'],
            pgCourses: ['MBA', 'MSc Project Management', 'MSc International Management'],
            ugRequirements: ['Grade 12: 60%', 'Nursing: 60% in PCL'],
            pgRequirements: ['Bachelor: 55%', 'IELTS 6.5 (5.5)']
        }
      },
      { 
        name: 'University of East London', 
        location: 'London', 
        website: 'https://uel.ac.uk/',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
        tuitionFee: '£12,250 - £15,000',
        scholarship: '£2,000 - £2,500',
        intake: 'May',
        details: {
            ugCourses: ['BSc Cloud Computing', 'BEng Civil Engineering', 'BSc Nursing'],
            pgCourses: ['MSc Artificial Intelligence', 'MSc Construction Management', 'MBA'],
            ugRequirements: ['GPA 2.8', 'IELTS 6.0 (5.5)'],
            pgRequirements: ['Bachelor: 55%', 'Gap 10 years accepted for PG']
        }
      },
      { 
        name: 'Buckinghamshire New University', 
        location: 'High Wycombe', 
        website: 'https://www.bucks.ac.uk/',
        image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80',
        tuitionFee: '£15,000 - £15,400',
        scholarship: '£5,000',
        intake: 'September',
        details: {
            ugCourses: ['Business Management', 'Cyber Security', 'Nursing'],
            pgCourses: ['MBA International', 'MSc AI', 'MSc Hospitality Leadership'],
            ugRequirements: ['GPA 2.8', 'IELTS 6.0 (5.5)'],
            pgRequirements: ['Bachelor: 55%', 'IELTS 6.5 (6.0)']
        }
      }
    ]
  },
  {
    id: 'australia',
    country: 'Australia',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80',
    details: 'World-class education, globally recognized qualifications, and excellent post-study work opportunities in a multicultural environment.',
    universities: [
      { 
        name: 'Australian Technical College Western Australia', 
        location: 'Sydney, Perth', 
        website: 'http://atc.wa.edu.au',
        tuitionFee: '~AUD 16,000 - 21,000/year',
        intake: 'Jan, Apr, Jul, Oct',
        details: {
          ugCourses: ['Automotive Technology', 'Business & Management', 'Civil Construction Design', 'Community Services', 'Hospitality Management', 'IT (Telecom)'],
          ugRequirements: ['IELTS 5.5 (5.0)', 'Equivalent PTE/TOEFL']
        }
      },
      { 
        name: 'Australian Harbour International College', 
        location: 'Sydney', 
        website: 'https://ahic.edu.au',
        tuitionFee: '~AUD 11,000 - 12,000 (VET)',
        intake: 'Feb, Jul, Nov',
        details: {
          ugCourses: ['Business', 'Project Management', 'Early Childhood Education', 'Hospitality Management', 'Building & Construction', 'Accounting', 'IT', 'Community Services'],
          ugRequirements: ['IELTS 5.5 (5.0)', 'Placement test available']
        }
      },
      { 
        name: 'AIBI Higher Education', 
        location: 'Sydney, Melbourne, Brisbane, Perth', 
        website: 'https://aibi.edu.au',
        tuitionFee: 'UG ~AUD 17k-22k/yr, PG ~AUD 27k/yr',
        scholarship: '10% - 30%',
        intake: 'Feb, May, Sep',
        details: {
          ugCourses: ['Bachelor of Business', 'Bachelor of Cyber Security', 'Bachelor of Enterprise Management Systems'],
          pgCourses: ['MBA (Digital Transformation)', 'Graduate Certificate in BA'],
          ugRequirements: ['IELTS 6.0 (5.5)', 'PTE 52 (50)'],
          pgRequirements: ['IELTS 6.5 (6.0)']
        }
      },
      { 
        name: 'Australia Institute of Business and Technology (AIBT)', 
        location: 'Brisbane, Sydney, Hobart', 
        website: 'https://aibtglobal.edu.au',
        tuitionFee: 'VET ~AUD 6k - 14k/yr',
        intake: 'Monthly/Quarterly',
        details: {
          ugCourses: ['Aviation Management', 'Business', 'Ageing & Disability Support', 'IT', 'Automotive', 'Logistics', 'Hospitality'],
          ugRequirements: ['IELTS 5.5 (5.0)', 'PTE 42']
        }
      },
      { 
        name: 'Crown Institute of Higher Education', 
        location: 'Sydney', 
        website: 'https://www.cihe.edu.au',
        tuitionFee: 'UG ~AUD 18k - 20k/yr',
        intake: 'Check Website',
        details: {
          ugCourses: ['Bachelor of Accounting', 'Bachelor of Community Services', 'Bachelor of IT', 'Bachelor of Early Childhood Education', 'Bachelor of Entrepreneurship'],
          pgCourses: ['Master of IT', 'Master of Professional Accounting', 'Master of Teaching (Early Childhood)'],
          ugRequirements: ['IELTS 6.0 (5.5)'],
          pgRequirements: ['IELTS 6.5 (6.0)']
        }
      },
      { 
        name: 'National Academy of Professional Studies (NAPS)', 
        location: 'Sydney, Melbourne', 
        website: 'https://www.naps.edu.au/',
        tuitionFee: 'Contact for details',
        details: {
          ugCourses: ['Bachelor of Business (Accounting/Islamic Business)', 'Bachelor of IT', 'Bachelor of Early Childhood Education', 'Bachelor of Social Work'],
          pgCourses: ['MBA', 'Master of Professional Accounting', 'Master of IT', 'Graduate Diploma of Management'],
          ugRequirements: ['IELTS 6.0 (5.5)'],
          pgRequirements: ['IELTS 6.5 (6.0)']
        }
      },
      { 
        name: 'New Era Institute', 
        location: 'Sydney CBD, Windsor', 
        website: 'https://newerainstitute.edu.au/',
        tuitionFee: 'Competitive VET rates',
        intake: 'Feb, Mar, Apr, Jul, Sep, Oct',
        details: {
          ugCourses: ['Civil Construction Design', 'IT (Cyber Security/Telecom)', 'Hospitality', 'Community Services', 'Early Childhood Education'],
          pgCourses: ['Graduate Diploma of Management (Learning)'],
          ugRequirements: ['IELTS 5.5 (5.0)']
        }
      },
      { 
        name: 'Polytechnic Institute Australia', 
        location: 'Sydney', 
        website: 'https://pia.edu.au/',
        tuitionFee: 'UG ~AUD 19k/yr, Master ~AUD 20k/yr',
        intake: 'Mar, Jul, Oct',
        details: {
          ugCourses: ['Bachelor of Business', 'Bachelor of Networking and Telecommunications'],
          pgCourses: ['Master of Business', 'Master of ICT', 'Graduate Certificate/Diploma in Business/ICT/Early Childhood'],
          ugRequirements: ['IELTS 6.5 (6.0)']
        }
      },
      { 
        name: 'Sydney City College of Management (SCCM)', 
        location: 'Parramatta, Sydney, Darwin, Adelaide', 
        website: 'https://sccm.edu.au/',
        tuitionFee: 'VET ~AUD 11.3k - 15.6k/yr',
        intake: 'Feb, Apr, Jul, Sep, Oct',
        details: {
          ugCourses: ['Accounting', 'Civil Construction Design', 'Community Services', 'Hospitality', 'IT', 'Project Management', 'Leadership'],
          pgCourses: ['Graduate Diploma of Management (Learning)'],
          ugRequirements: ['IELTS 5.5 (5.0)']
        }
      },
      { 
        name: 'Skyline International College', 
        location: 'Sydney (Burwood, Surry Hills)', 
        website: 'https://sic.edu.au',
        tuitionFee: '~AUD 10k - 14k/yr',
        intake: 'Feb, May, Sep',
        details: {
          ugCourses: ['Automotive', 'Construction', 'Early Childhood Education', 'Community Services', 'Hospitality', 'Business', 'Accounting', 'IT'],
          pgCourses: ['Graduate Diploma of Management (Learning)'],
          ugRequirements: ['IELTS 5.5 (5.0)']
        }
      },
      { 
        name: 'Sydney International School of Technology and Commerce (SISTC)', 
        location: 'Sydney, Parramatta, Melbourne', 
        website: 'https://sistc.edu.au',
        tuitionFee: '~AUD 20k/yr',
        intake: 'Mar, Jul, Nov',
        details: {
          ugCourses: ['Bachelor of Information Technology', 'Diploma of Business Information Systems'],
          pgCourses: ['Master of Information Technology', 'Graduate Diploma/Certificate in IT'],
          ugRequirements: ['IELTS 6.0 (6.0)'],
          pgRequirements: ['IELTS 6.5 (6.0)']
        }
      },
      { 
        name: 'Victorian Institute of Education (ECA Group)', 
        location: 'Sydney, Adelaide', 
        website: 'https://vie.edu.au/',
        tuitionFee: 'UG Diploma ~AUD 10k - 15k',
        intake: 'Feb, Apr, Jul, Sep, Oct',
        details: {
          ugCourses: ['IT', 'Accounting', 'Early Childhood Education', 'Aged Care', 'Marketing', 'Community Services', 'Leadership & Management'],
          pgCourses: ['Graduate Diploma of Management (Learning)'],
          ugRequirements: ['IELTS 5.5 (5.0)']
        }
      },
      { 
        name: 'ECA College (ECA Group)', 
        location: 'Sydney, Parramatta, Melbourne, Brisbane', 
        website: 'https://www.ecacollege.edu.au/',
        tuitionFee: 'VET ~AUD 5.6k - 8.4k/yr',
        intake: 'Jan, Apr, Jul, Sep',
        details: {
          ugCourses: ['Business', 'Marketing & Communication', 'Leadership & Management', 'IT'],
          pgCourses: ['Graduate Diploma of Management (Learning)', 'Graduate Diploma of Engineering'],
          ugRequirements: ['IELTS 5.5 (5.0)'],
          pgRequirements: ['IELTS 6.5 (6.0)']
        }
      },
      { 
        name: 'Asia Pacific International College (ECA Group)', 
        location: 'Sydney, Melbourne, Brisbane', 
        website: 'https://apicollege.edu.au',
        tuitionFee: 'UG ~AUD 14.4k/yr, PG ~AUD 16k/yr',
        intake: 'Feb, Jun, Sep',
        details: {
          ugCourses: ['Bachelor of Business', 'Bachelor of IT', 'Bachelor of BIS'],
          pgCourses: ['Master of IT', 'Master of Project Management', 'MBA'],
          ugRequirements: ['IELTS 6.0 (5.5)'],
          pgRequirements: ['IELTS 6.5 (6.0)']
        }
      },
      { 
        name: 'Higher Education Leadership Institute (ECA Group)', 
        location: 'Melbourne', 
        website: 'https://www.heli.edu.au/',
        tuitionFee: 'Master ~AUD 49k total',
        intake: 'Feb, Jun, Sep',
        details: {
          pgCourses: ['Master of eLearning', 'Master of Research', 'Graduate Certificate in Research Methods', 'Graduate Certificate in Higher Education Academic Practice']
        }
      },
      { 
        name: 'Victoria University (ECA Group)', 
        location: 'Sydney, Brisbane', 
        website: 'https://www.vu.edu.au/',
        tuitionFee: '~AUD 32k - 40k/yr',
        intake: 'Block Model (Feb, Jul, Sep, Nov)',
        details: {
          ugCourses: ['Bachelor of Business', 'Bachelor of IT', 'Bachelor of Early Childhood Education', 'Bachelor of Cyber Security'],
          pgCourses: ['MBA (Global)', 'Master of Applied IT', 'Master of ERP', 'Master of Business Analytics'],
          ugRequirements: ['IELTS 6.0 (6.0)'],
          pgRequirements: ['IELTS 6.5 (6.0)']
        }
      },
      { 
        name: 'University of Canberra (ECA Group)', 
        location: 'Sydney Hills Campus', 
        website: 'https://www.canberra.edu.au/',
        tuitionFee: '~AUD 36k - 38k/yr',
        intake: 'Sem 2 2025, Sem 1 2026',
        details: {
          ugCourses: ['Bachelor of Nursing', 'Bachelor of Early Childhood Education'],
          pgCourses: ['Master of Public Health (Extended)'],
          ugRequirements: ['IELTS 6.0 (6.0) / Nursing 7.0 (7.0)']
        }
      },
      { 
        name: 'Monaro Higher Education', 
        location: 'Burwood, Sydney', 
        website: 'https://monaro.edu.au/',
        tuitionFee: '~AUD 50k total (~17k/yr)',
        intake: 'Mar, Jul, Nov',
        details: {
          ugCourses: ['Bachelor of Business'],
          pgCourses: ['Master of Professional Accounting (Advanced)', 'Graduate Diploma of Engineering'],
          ugRequirements: ['IELTS 6.0 (5.5)']
        }
      },
      { 
        name: 'Training for Knowledge and Livelihood (TKL)', 
        location: 'Sydney, Parramatta, Melbourne', 
        website: 'https://tkl.edu.au/',
        tuitionFee: 'VET ~AUD 13k - 19.5k',
        intake: 'Jan, Apr, Jul, Sep',
        details: {
          ugCourses: ['Commercial Cookery', 'Early Childhood', 'IT', 'Leadership & Management', 'Accounting', 'Business'],
          pgCourses: ['Graduate Diploma of Management (Learning)'],
          ugRequirements: ['IELTS 5.5 (5.0)']
        }
      },
      { 
        name: 'ECA College of Health Sciences (CHS)', 
        location: 'Sydney, Brisbane', 
        website: 'https://chs.edu.au/',
        tuitionFee: 'Master ~AUD 49k total',
        intake: 'Feb, Jun, Sep',
        details: {
          pgCourses: ['Master of Health Management', 'Graduate Diploma in Health Management', 'Graduate Certificate in Health Management']
        }
      },
      { 
        name: 'Blue Lotus College', 
        location: 'Melbourne', 
        website: 'https://www.bluelotus.edu.au/',
        tuitionFee: 'VET ~AUD 15k - 30k total',
        intake: 'Jul, Sep, Oct, Nov',
        details: {
          ugCourses: ['Commercial Cookery', 'Hospitality Management', 'Business & Management', 'IT', 'Accounting', 'Community Services', 'Civil Construction'],
          ugRequirements: ['IELTS 5.5 (5.0)', 'PTE 42']
        }
      },
      { 
        name: 'Royal Greenhill Institute of Technology (RGIT)', 
        location: 'Melbourne, Hobart', 
        website: 'https://rgit.edu.au',
        tuitionFee: 'VET ~AUD 8k-13k, HE ~AUD 28k/yr',
        intake: 'Feb, Apr, Jul, Nov',
        details: {
          ugCourses: ['Nursing', 'Hospitality', 'IT', 'Business', 'Construction', 'Automotive', 'Bachelor of Business', 'Bachelor of Data Analytics'],
          pgCourses: ['Graduate Diploma of Management'],
          ugRequirements: ['IELTS 5.5 (5.0)']
        }
      },
      { 
        name: 'Universal Higher Education (UHE)', 
        location: 'Melbourne', 
        website: 'https://uhe.edu.au',
        tuitionFee: 'UG ~AUD 20k-22k/yr',
        intake: 'Mar, Jul, Nov',
        details: {
          ugCourses: ['Bachelor of IT'],
          pgCourses: ['Master of Engineering Management', 'Master of IT'],
          ugRequirements: ['IELTS 6.0 (5.5)']
        }
      },
      { 
        name: 'Ultimate Institute of Australia (UIA)', 
        location: 'Melbourne', 
        website: 'https://uia.edu.au',
        tuitionFee: 'VET ~AUD 7k - 9k/yr',
        intake: 'Mar, Jul, Nov',
        details: {
          ugCourses: ['IT (Cyber Security/Networking)', 'Business & Management', 'Hospitality'],
          pgCourses: ['Graduate Diploma of Management (Learning)'],
          ugRequirements: ['IELTS 5.5 (5.0)']
        }
      },
      { 
        name: 'Stanley College', 
        location: 'Perth, Adelaide', 
        website: 'https://stanleycollege.edu.au',
        tuitionFee: 'UG ~AUD 17k/yr',
        intake: 'Mar, Aug, Nov',
        details: {
          ugCourses: ['Bachelor of Business', 'Bachelor of ICT', 'Bachelor of Community Services'],
          pgCourses: ['Master of Business', 'Graduate Certificate/Diploma of Business'],
          ugRequirements: ['IELTS 6.0 (5.5)']
        }
      },
      { 
        name: 'Reach Community College', 
        location: 'Hobart', 
        website: 'https://reachcollege.edu.au',
        tuitionFee: 'VET ~AUD 10k - 14k',
        intake: 'Jan, Apr, Sep',
        details: {
          ugCourses: ['Community Services', 'Automotive', 'Hospitality', 'IT', 'Leadership & Management', 'Project Management'],
          pgCourses: ['Graduate Diploma of Management (Learning)', 'Strategic Leadership'],
          ugRequirements: ['IELTS 6.0 (5.5)']
        }
      },
      { 
        name: 'University of Tasmania (UTAS)', 
        location: 'Hobart, Launceston', 
        website: 'https://www.utas.edu.au/',
        tuitionFee: '~AUD 32k - 45k/yr',
        scholarship: '25% Tasmanian International Scholarship',
        intake: 'Feb, Jul',
        details: {
          ugCourses: ['Arts', 'Business', 'Science', 'Engineering', 'Nursing', 'Medicine', 'Law'],
          pgCourses: ['MBA', 'Master of IT', 'Master of Marine & Antarctic Science'],
          ugRequirements: ['IELTS 6.0 (5.5)']
        }
      },
      { 
        name: 'Australasian College of Care Leadership and Management (ACCLM)', 
        location: 'Brisbane', 
        website: 'www.acclm.edu.au',
        tuitionFee: 'Promotional ~AUD 4.5k',
        details: {
          ugCourses: ['Diploma of Counselling', 'Diploma of Mental Health', 'Community Sector Management']
        },
        remarks: 'Primarily for domestic/onshore students'
      }
    ]
  },
  {
    id: 'usa',
    country: 'USA',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    details: 'Home to Ivy League institutions and a flexible education system with vast research opportunities and scholarships.',
    universities: [
      { name: 'University of Arizona', location: 'Tucson, AZ' },
      { name: 'Arizona State University', location: 'Phoenix, AZ' },
      { name: 'University of North Texas', location: 'Denton, TX' },
      { name: 'California State University', location: 'Multiple Locations, CA' },
      { name: 'Wichita State University', location: 'Wichita, KS' },
      { name: 'Kent State University', location: 'Kent, OH' }
    ]
  },
  {
    id: 'canada',
    country: 'Canada',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    details: 'Known for its high quality of life, post-graduation work permits, and welcoming environment for international students.',
    universities: [
      { name: 'Seneca College', location: 'Toronto, ON' },
      { name: 'Humber College', location: 'Toronto, ON' },
      { name: 'Centennial College', location: 'Toronto, ON' },
      { name: 'George Brown College', location: 'Toronto, ON' },
      { name: 'Fanshawe College', location: 'London, ON' },
      { name: 'Conestoga College', location: 'Kitchener, ON' }
    ]
  },
  {
    id: 'south-korea',
    country: 'South Korea',
    image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    details: 'A technology hub with affordable tuition fees, rich culture, and excellent career prospects in engineering and business.',
    universities: [
      { name: 'Sejong University', location: 'Seoul' },
      { name: 'Kookmin University', location: 'Seoul' },
      { name: 'Dong-A University', location: 'Busan' },
      { name: 'Kyungsung University', location: 'Busan' }
    ]
  }
];
