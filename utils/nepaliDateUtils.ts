
// Nepali Date Logic with conversion capabilities
// Reference: 2081 Baishakh 1 = 2024 April 13

export const nepaliMonths = [
  "Baishakh", "Jestha", "Ashadh", "Shrawan", "Bhadra", "Ashwin", 
  "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"
];

export const nepaliDays = [
  "Aaitabar", "Sombar", "Mangalbar", "Budhabar", "Bihibar", "Shukrabar", "Shanibar"
];

export const eventsData: Record<string, string> = {
  "1-1": "New Year",
  "3-15": "Asar 15 (Dhan Diwas)",
  "6-1": "Ghatasthapana",
  "6-7": "Fulpati",
  "6-8": "Maha Astami",
  "6-9": "Maha Nawami",
  "6-10": "Vijaya Dashami",
  "7-15": "Laxmi Puja",
  "9-1": "Maghe Sankranti",
  "11-1": "Maha Shivaratri",
  "11-22": "Fagu Purnima"
};

// Days in months for years 2075 to 2085 BS
// Format: Year: [Baishakh...Chaitra]
const bsMonthData: Record<number, number[]> = {
  2075: [31, 32, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2076: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  2077: [31, 32, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2078: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2079: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2080: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  2081: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2082: [31, 32, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  2083: [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30],
  2084: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  2085: [31, 32, 32, 31, 31, 30, 30, 29, 30, 30, 30, 30],
};

// Reference Point: 1st Baishakh of each year mapped to AD Date
const refNewYear: Record<number, string> = {
  2078: "2021-04-14",
  2079: "2022-04-14",
  2080: "2023-04-14",
  2081: "2024-04-13",
  2082: "2025-04-14",
  2083: "2026-04-14",
  2084: "2027-04-14",
  2085: "2028-04-13"
};

// Helper: Convert Date object to YYYY-MM-DD
const formatDate = (d: Date) => d.toISOString().split('T')[0];

export const getDaysInBSMonth = (year: number, month: number) => {
  return bsMonthData[year]?.[month - 1] || 30; // Default 30 if out of range
};

// Convert AD to BS
export const getBSDate = (adDate: Date) => {
  // This is a simplified approximation for demo purposes without a massive database
  // It finds the closest New Year reference and counts days forward
  
  // 1. Find closest previous new year
  const adTime = adDate.getTime();
  let bsYear = 2081;
  let minDiff = Infinity;
  
  Object.keys(refNewYear).forEach(y => {
    const yNum = parseInt(y);
    const refTime = new Date(refNewYear[yNum]).getTime();
    if (adTime >= refTime && (adTime - refTime) < minDiff) {
      bsYear = yNum;
      minDiff = adTime - refTime;
    }
  });

  // 2. Calculate days passed since New Year
  let daysPassed = Math.floor(minDiff / (1000 * 60 * 60 * 24));
  
  let bsMonth = 0;
  let bsDay = 0;

  // 3. Iterate months to find current month/day
  const months = bsMonthData[bsYear];
  for (let i = 0; i < 12; i++) {
    if (daysPassed < months[i]) {
      bsMonth = i + 1;
      bsDay = daysPassed + 1;
      break;
    }
    daysPassed -= months[i];
  }

  return {
    year: bsYear,
    month: bsMonth,
    day: bsDay,
    monthName: nepaliMonths[bsMonth - 1],
    dayName: nepaliDays[adDate.getDay()]
  };
};

// Convert BS to AD
export const getADDate = (bsYear: number, bsMonth: number, bsDay: number): Date => {
  const refDateStr = refNewYear[bsYear];
  if (!refDateStr) return new Date(); // Fallback

  const refDate = new Date(refDateStr);
  let daysToAdd = bsDay - 1;
  
  // Add days from previous months of this year
  const months = bsMonthData[bsYear];
  for (let i = 0; i < bsMonth - 1; i++) {
    daysToAdd += months[i];
  }

  const adDate = new Date(refDate);
  adDate.setDate(refDate.getDate() + daysToAdd);
  return adDate;
};

export const getCurrentNepaliDate = () => {
  return getBSDate(new Date());
};

// Get structure for grid rendering (including empty slots for start weekday)
export const getMonthStructure = (bsYear: number, bsMonth: number) => {
  const daysInMonth = getDaysInBSMonth(bsYear, bsMonth);
  
  // Determine weekday of Day 1
  // We convert (Year, Month, 1) to AD, then get AD's weekday
  const firstDayAD = getADDate(bsYear, bsMonth, 1);
  const startWeekday = firstDayAD.getDay(); // 0 = Sunday, 6 = Saturday

  const grid = [];
  
  // Empty slots
  for (let i = 0; i < startWeekday; i++) {
    grid.push(null);
  }

  // Days
  for (let i = 1; i <= daysInMonth; i++) {
    const currentAD = new Date(firstDayAD);
    currentAD.setDate(firstDayAD.getDate() + (i - 1));
    
    // Check for event
    const eventKey = `${bsMonth}-${i}`;
    
    grid.push({
      day: i,
      adDay: currentAD.getDate(),
      adMonth: currentAD.toLocaleString('default', { month: 'short' }),
      adFullDate: formatDate(currentAD),
      isSaturday: currentAD.getDay() === 6,
      event: eventsData[eventKey] || null
    });
  }

  return grid;
};
