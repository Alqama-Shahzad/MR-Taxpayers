# Netlify Deployment Guide for Rafay Tax Solutions

## Prerequisites
✅ Your project has been built successfully (`dist` folder created)
✅ `netlify.toml` configuration file is in place

## Deployment Options

### Option 1: Deploy via Netlify CLI (Recommended)

1. **Install Netlify CLI globally:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```
   This will open your browser to authenticate with Netlify.

3. **Deploy your site:**
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Option 2: Deploy via Netlify Web Interface

1. **Go to [Netlify](https://www.netlify.com/) and sign up/login**

2. **Deploy via Drag & Drop:**
   - Click "Add new site" → "Deploy manually"
   - Drag and drop your `dist` folder to the deployment area
   - Your site will be deployed instantly with a random URL

3. **Deploy via Git (Continuous Deployment):**
   - Push your code to GitHub/GitLab/Bitbucket
   - Click "Add new site" → "Import from Git"
   - Connect your repository
   - Netlify will automatically detect your build settings from `netlify.toml`

## Build Configuration (Already Set Up)

Your `netlify.toml` file contains:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18
- **Redirects:** All routes redirect to `index.html` (for React Router)

## Environment Variables (If Needed)

If your app uses environment variables:
1. Go to your Netlify site dashboard
2. Navigate to "Site settings" → "Environment variables"
3. Add your variables (e.g., `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, etc.)

## Custom Domain (Optional)

1. In your Netlify site dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## Post-Deployment Checklist

- [ ] Test all pages and functionality
- [ ] Verify contact form works (EmailJS integration)
- [ ] Check responsive design on different devices
- [ ] Test language switching functionality
- [ ] Verify all images and assets load correctly

## Troubleshooting

**Common Issues:**
- **404 errors on refresh:** Fixed by the redirect rule in `netlify.toml`
- **Build failures:** Check build logs in Netlify dashboard
- **Missing environment variables:** Add them in Netlify site settings

## Quick Deploy Command

For future deployments after making changes:
```bash
npm run build && netlify deploy --prod --dir=dist
```

Your site will be available at: `https://[random-name].netlify.app`