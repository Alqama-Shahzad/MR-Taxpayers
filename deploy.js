#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Netlify deployment process...\n');

// Check if dist folder exists
if (!fs.existsSync('dist')) {
  console.log('📦 Building the project...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build completed successfully!\n');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
} else {
  console.log('📁 Dist folder found, skipping build...\n');
}

// Check if netlify CLI is installed
try {
  execSync('netlify --version', { stdio: 'pipe' });
} catch (error) {
  console.log('📥 Installing Netlify CLI...');
  try {
    execSync('npm install -g netlify-cli', { stdio: 'inherit' });
    console.log('✅ Netlify CLI installed successfully!\n');
  } catch (installError) {
    console.error('❌ Failed to install Netlify CLI:', installError.message);
    console.log('Please install it manually: npm install -g netlify-cli');
    process.exit(1);
  }
}

// Deploy to Netlify
console.log('🌐 Deploying to Netlify...');
try {
  execSync('netlify deploy --prod --dir=dist', { stdio: 'inherit' });
  console.log('\n🎉 Deployment completed successfully!');
  console.log('Your site is now live on Netlify!');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  console.log('\nTroubleshooting tips:');
  console.log('1. Make sure you are logged in: netlify login');
  console.log('2. Check if your site is properly configured');
  console.log('3. Verify your build output in the dist folder');
  process.exit(1);
}