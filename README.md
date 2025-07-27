# Al Safa Global - Procurement & Supply Chain Solutions

A modern, responsive website for Al Safa Global General Trading FZ LLC, built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring creative animations and a beautiful design using light yellow, light blue, and white color schemes.

## 🌟 Features

- **Modern Design**: Clean, professional design with light yellow, light blue, and white color palette
- **Responsive Layout**: Fully responsive design that works on all devices
- **Creative Animations**: Smooth animations and transitions using Framer Motion
- **Contact Forms**: Functional contact and inquiry forms with email notifications
- **Interactive Components**: Engaging UI components with hover effects and micro-interactions
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Security**: Environment variables, input validation, and security headers
- **Email Integration**: Automated email notifications for form submissions

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Beautiful icon library
- **Styled Components** - CSS-in-JS styling
- **React Hook Form** - Form handling and validation
- **React Hot Toast** - Toast notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Nodemailer** - Email sending functionality
- **Express Validator** - Input validation
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing

### Deployment
- **Vercel** - Frontend and backend deployment
- **MongoDB Atlas** - Cloud database

## 📁 Project Structure

```
al-safa-global-website/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/               # Source code
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── styles/        # CSS files
│   │   └── utils/         # Utility functions
│   └── package.json       # Frontend dependencies
├── server/                # Node.js backend
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── utils/            # Utility functions
│   └── index.js          # Server entry point
├── package.json          # Root dependencies
├── vercel.json           # Vercel configuration
├── env.example           # Environment variables template
└── README.md             # Project documentation
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB database (local or Atlas)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd al-safa-global-website
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client && npm install

# Install server dependencies
cd ../server && npm install
```

### 3. Environment Configuration
```bash
# Copy environment template
cp env.example .env.local

# Edit .env.local with your configuration
nano .env.local
```

### 4. Environment Variables
Create a `.env.local` file in the root directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/al-safa-global
MONGODB_URI_PROD=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/al-safa-global

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random
JWT_EXPIRE=30d

# Email Configuration (Gmail SMTP)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password_here
EMAIL_FROM=info@alsafaglobal.com

# Vercel Deployment
VERCEL_URL=https://your-app-name.vercel.app

# Security
BCRYPT_SALT_ROUNDS=12
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# File Upload
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads

# Client URL
CLIENT_URL=http://localhost:3000
CLIENT_URL_PROD=https://your-app-name.vercel.app
```

### 5. Start Development Server
```bash
# Start both frontend and backend (from root directory)
npm run dev

# Or start them separately:
npm run server    # Backend only
npm run client    # Frontend only
```

## 🚀 Deployment

### Vercel Deployment

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel --prod
```

4. **Set Environment Variables**
In your Vercel dashboard, add all the environment variables from your `.env.local` file.

### Manual Deployment Steps

1. **Build the Application**
```bash
# Build React app
cd client && npm run build

# The build folder will be created in client/build/
```

2. **Deploy to Vercel**
- Connect your GitHub repository to Vercel
- Vercel will automatically detect the configuration from `vercel.json`
- Set environment variables in Vercel dashboard
- Deploy

## 📱 Pages & Features

### Home Page
- Hero section with animated content
- Features showcase
- Division cards with hover effects
- Statistics section
- About preview
- Testimonials
- Call-to-action section

### About Page
- Company overview
- Vision and mission
- Team information
- Company values

### Divisions Page
- Detailed division information
- Service offerings
- Interactive cards
- Contact forms for each division

### Contact Page
- Contact form with validation
- Business inquiry form
- RFQ submission form
- Company information
- Interactive map

## 🎨 Design System

### Color Palette
- **Primary Yellow**: `#fff3cd`
- **Primary Blue**: `#e3f2fd`
- **White**: `#ffffff`
- **Accent Colors**: Various shades for highlights and interactions

### Typography
- **Primary Font**: Poppins (Headings)
- **Secondary Font**: Inter (Body text)

### Animations
- Page transitions using Framer Motion
- Scroll-triggered animations
- Hover effects and micro-interactions
- Loading states and feedback

## 🔧 API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact form
- `GET /api/contact/stats` - Get contact statistics

### Business Inquiries
- `POST /api/inquiry` - Submit business inquiry
- `POST /api/inquiry/rfq` - Submit RFQ

### Health Check
- `GET /api/health` - API health status

## 📧 Email Templates

The application includes several email templates:
- Contact form notifications
- Business inquiry confirmations
- RFQ submissions
- Welcome emails

## 🔒 Security Features

- Input validation and sanitization
- Rate limiting
- Security headers (Helmet)
- CORS configuration
- Environment variable protection
- SQL injection prevention

## 📊 Performance Optimization

- Code splitting
- Lazy loading
- Image optimization
- Minification
- Compression
- CDN integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and inquiries:
- Email: info@alsafaglobal.com
- Website: https://alsafaglobal.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Framer Motion for smooth animations
- Vercel for seamless deployment
- MongoDB for the database solution
- All contributors and supporters

---

**Al Safa Global General Trading FZ LLC** - Your Trusted Partner in Procurement & Supply Chain Solutions 