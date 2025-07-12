import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '@/config/emailConfig';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAIL_CONFIG.EMAILJS.PUBLIC_KEY);
};

// Send email using EmailJS
export const sendEmailViaEmailJS = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      user_email: formData.email, // Alternative parameter name
      phone: formData.phone,
      user_phone: formData.phone, // Alternative parameter name
      service: formData.service,
      message: formData.message,
      to_email: EMAIL_CONFIG.TARGET_EMAIL,
      // Current date and time
      current_date: new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      current_time: new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }),
      // Additional formatted message with all details
      full_message: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Service Interest: ${formData.service || 'Not specified'}

Message:
${formData.message}
      `.trim(),
    };

    console.log('Sending email with template params:', templateParams);

    const response = await emailjs.send(
      EMAIL_CONFIG.EMAILJS.SERVICE_ID,
      EMAIL_CONFIG.EMAILJS.TEMPLATE_ID,
      templateParams,
      EMAIL_CONFIG.EMAILJS.PUBLIC_KEY
    );

    console.log('EmailJS response:', response);
    return response.status === 200;
  } catch (error) {
    console.error('EmailJS Error:', error);
    return false;
  }
};

// Alternative: Send email using Formspree (no backend required)
export const sendEmailViaFormspree = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch(`https://formspree.io/f/${EMAIL_CONFIG.FORMSPREE.FORM_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Formspree Error:', error);
    return false;
  }
};

// Alternative: Send email using Netlify Forms (if hosted on Netlify)
export const sendEmailViaNetlify = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const formDataObj = new FormData();
    formDataObj.append('form-name', 'contact');
    formDataObj.append('name', formData.name);
    formDataObj.append('email', formData.email);
    formDataObj.append('phone', formData.phone);
    formDataObj.append('service', formData.service);
    formDataObj.append('message', formData.message);

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataObj as any).toString(),
    });

    return response.ok;
  } catch (error) {
    console.error('Netlify Forms Error:', error);
    return false;
  }
};

// Alternative: Simple mailto link (opens user's email client)
export const sendEmailViaMailto = (formData: ContactFormData): void => {
  const subject = encodeURIComponent(`Contact Form Submission: ${formData.service || 'General Inquiry'}`);
  const body = encodeURIComponent(`
Contact Form Submission Details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Service Interest: ${formData.service || 'Not specified'}

Message:
${formData.message}

---
This message was sent from the Rafay Tax Solutions contact form.
  `.trim());
  
  const mailtoLink = `mailto:${EMAIL_CONFIG.TARGET_EMAIL}?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
};

// Main email sending function with fallback options
export const sendEmail = async (formData: ContactFormData, method: 'emailjs' | 'formspree' | 'netlify' | 'mailto' = 'emailjs'): Promise<boolean> => {
  switch (method) {
    case 'emailjs':
      return await sendEmailViaEmailJS(formData);
    case 'formspree':
      return await sendEmailViaFormspree(formData);
    case 'netlify':
      return await sendEmailViaNetlify(formData);
    case 'mailto':
      sendEmailViaMailto(formData);
      return true;
    default:
      return false;
  }
};