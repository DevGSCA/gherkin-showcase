import DOMPurify from 'dompurify';

// Input sanitization utilities
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, { 
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [] 
  }).trim();
};

// Form submission rate limiting (client-side)
class RateLimiter {
  private submissions: number[] = [];
  private readonly maxSubmissions = 3;
  private readonly timeWindow = 60000; // 1 minute

  canSubmit(): boolean {
    const now = Date.now();
    this.submissions = this.submissions.filter(time => now - time < this.timeWindow);
    
    if (this.submissions.length >= this.maxSubmissions) {
      return false;
    }
    
    this.submissions.push(now);
    return true;
  }

  getTimeUntilNextSubmission(): number {
    if (this.submissions.length === 0) return 0;
    
    const oldestSubmission = Math.min(...this.submissions);
    const timeUntilReset = this.timeWindow - (Date.now() - oldestSubmission);
    
    return Math.max(0, timeUntilReset);
  }
}

export const contactFormRateLimiter = new RateLimiter();

// Input validation helpers
export const validateInput = {
  name: (name: string): boolean => {
    const sanitized = sanitizeInput(name);
    return sanitized.length >= 2 && sanitized.length <= 100 && /^[a-zA-ZÀ-ÿ\s]+$/.test(sanitized);
  },
  
  email: (email: string): boolean => {
    const sanitized = sanitizeInput(email);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(sanitized) && sanitized.length <= 254;
  },
  
  message: (message: string): boolean => {
    const sanitized = sanitizeInput(message);
    return sanitized.length >= 10 && sanitized.length <= 2000;
  }
};