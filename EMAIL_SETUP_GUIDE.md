# Email Functionality Setup Guide

This guide explains how to set up email functionality for the contact form in your MR Taxpayers website.

## Overview

The contact form supports multiple email sending methods with automatic fallbacks:

1. **EmailJS** (Recommended) - Client-side email service
2. **Formspree** - Alternative client-side service
3. **Netlify Forms** - If hosted on Netlify
4. **Mailto** - Opens user's email client (final fallback)

## Method 1: EmailJS Setup (Recommended)

EmailJS is the easiest way to add email functionality without a backend server.

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

```html
Subject: New Contact Form Submission - {{service}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Interest: {{service}}

Message:
{{message}}

---
This message was sent from your website contact form.
```

4. Save the template and note down your **Template ID**

### Step 4: Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key**

### Step 5: Update Configuration
Edit `src/config/emailConfig.ts`:

```typescript
export const EMAIL_CONFIG = {
  EMAILJS: {
    SERVICE_ID: 'your_actual_service_id',
    TEMPLATE_ID: 'your_actual_template_id', 
    PUBLIC_KEY: 'your_actual_public_key',
  },
  // ... rest of config
};
```

## Method 2: Formspree Setup (Alternative)

Formspree is another client-side email service.

### Step 1: Create Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account

### Step 2: Create New Form
1. Click "New Form"
2. Enter your email address (rafay@taxservices.pk)
3. Note down your **Form ID** (format: `xxxxxxxxx`)

### Step 3: Update Configuration
Edit `src/config/emailConfig.ts`:

```typescript
export const EMAIL_CONFIG = {
  // ... EmailJS config
  FORMSPREE: {
    FORM_ID: 'your_actual_form_id',
  },
  // ... rest of config
};
```

## Method 3: Netlify Forms (If hosting on Netlify)

If you're hosting on Netlify, you can use Netlify Forms.

### Step 1: Add Form Attribute
The form is already configured for Netlify. Just ensure you're hosting on Netlify.

### Step 2: Deploy to Netlify
1. Connect your repository to Netlify
2. Deploy your site
3. Forms will automatically work

## Method 4: Backend API (Advanced)

For a custom backend solution, you can create an API endpoint.

### Example Express.js Backend:

```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, service, message } = req.body;
  
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'rafay@taxservices.pk',
    subject: `New Contact Form: ${service}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  };
  
  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
```

## Testing the Contact Form

1. Fill out the contact form on your website
2. Submit the form
3. Check if you receive the email
4. Verify all form data is included correctly

## Troubleshooting

### EmailJS Issues:
- Verify your Service ID, Template ID, and Public Key are correct
- Check EmailJS dashboard for usage limits
- Ensure your email service is properly connected
- Check browser console for error messages

### Formspree Issues:
- Verify your Form ID is correct
- Check Formspree dashboard for submissions
- Ensure you haven't exceeded free tier limits

### General Issues:
- Check browser console for JavaScript errors
- Verify internet connection
- Test with different browsers
- Check spam/junk folders for emails

## Security Notes

- Never expose private keys in client-side code
- Use environment variables for sensitive data in production
- Consider rate limiting to prevent spam
- Validate form data on both client and server side

## Current Configuration

The contact form is currently configured to:
1. Try EmailJS first
2. Fallback to Formspree if EmailJS fails
3. Final fallback to mailto (opens user's email client)

You can modify the priority order in `src/config/emailConfig.ts`.

## Support

If you need help setting up email functionality:
1. Check the browser console for error messages
2. Verify your configuration settings
3. Test each service individually
4. Contact the respective service support (EmailJS, Formspree, etc.)