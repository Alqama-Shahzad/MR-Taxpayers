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
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      to_email: EMAIL_CONFIG.TARGET_EMAIL,
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.EMAILJS.SERVICE_ID,
      EMAIL_CONFIG.EMAILJS.TEMPLATE_ID,
      templateParams,
      EMAIL_CONFIG.EMAILJS.PUBLIC_KEY
    );

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
  const subject = encodeURIComponent(`Contact Form: ${formData.service || 'General Inquiry'}`);
  const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Message:
${formData.message}
  `);
  
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