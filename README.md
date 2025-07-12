# Rafay Tax Solutions

A modern, multilingual tax consultation website built with React, TypeScript, and Tailwind CSS. This professional platform offers comprehensive tax services with support for both English and Urdu languages.

## 🌟 Features

- **Multilingual Support**: Full English and Urdu language support with dynamic content switching
- **Modern UI/UX**: Clean, professional design with responsive layout
- **Contact Forms**: Integrated contact forms with email functionality
- **Service Showcase**: Comprehensive display of tax services and pricing
- **Client Testimonials**: Social proof through customer testimonials
- **FAQ Section**: Detailed frequently asked questions
- **Mobile Responsive**: Optimized for all device sizes

## 🚀 Technologies Used

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite
- **Language Support**: React Context for internationalization
- **Email Service**: EmailJS integration
- **Deployment**: Netlify ready with configuration

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Alqama-Shahzad/MR-Taxpayers.git
cd MR-Taxpayers
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📧 Email Configuration

The project includes email functionality through EmailJS. To set up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Update the configuration in `src/config/emailConfig.ts`
3. Follow the detailed setup guide in `EMAIL_SETUP_GUIDE.md`

## 🌐 Deployment

The project is configured for easy deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. The build settings are pre-configured in `netlify.toml`
3. Follow the detailed deployment guide in `NETLIFY_DEPLOYMENT_GUIDE.md`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services showcase
│   └── ...
├── contexts/           # React contexts
├── hooks/              # Custom hooks
├── lib/                # Utility functions
├── pages/              # Page components
├── assets/             # Images and static files
└── config/             # Configuration files
```

## 🎨 Customization

- **Colors**: Modify the color scheme in `tailwind.config.ts`
- **Content**: Update text content in component files
- **Images**: Replace images in the `src/assets/` directory
- **Languages**: Add or modify translations in the language context

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For any questions or support, please contact:
- **Email**: rafaytaxsolutions@gmail.com
- **Phone**: +92 300 1234567
- **Website**: [Rafay Tax Solutions](https://your-domain.com)

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
