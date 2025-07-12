// Email Configuration
// Replace these values with your actual service credentials

export const EMAIL_CONFIG = {
  // EmailJS Configuration (Recommended)
  EMAILJS: {
    SERVICE_ID: 'service_8sm9eg7', // Replace with your actual Service ID from EmailJS
    TEMPLATE_ID: 'template_a6q7588', // Replace with your actual Template ID (e.g., template_abc123)
    PUBLIC_KEY: 'meto9uwZ2V_RLCU4J', // Replace with your actual Public Key from EmailJS
  },
  
  // Formspree Configuration (Alternative)
  FORMSPREE: {
    FORM_ID: 'your_form_id', // Get from Formspree dashboard
  },
  
  // Target email address
  TARGET_EMAIL: 'mrtaxpayers12@gmail.com',
};

// Email service priority (which service to try first)
export const EMAIL_SERVICE_PRIORITY: ('emailjs' | 'formspree' | 'netlify' | 'mailto')[] = [
  'emailjs',    // Try EmailJS first
  'formspree',  // Fallback to Formspree
  'mailto',     // Final fallback to mailto
];