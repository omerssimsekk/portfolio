# Modern Portfolio Website Template

A clean, responsive portfolio website template built with Next.js 14 (App Router), React Server Components, and modern web technologies. Perfect for developers, designers, and creative professionals looking to showcase their work with optimal performance and SEO.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fomerssimsekk%2Fportfolio)

## Features

- **Next.js 14 with App Router**: Leveraging the latest Next.js features for optimal performance
- **React Server Components**: Automatic code-splitting and server-side rendering
- **Responsive Design**: Looks great on all devices - mobile, tablet, and desktop
- **Dark/Light Mode Toggle**: Switch between dark and light themes with a single click
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Project Showcase**: Highlight your best work with dedicated project cards
- **Skills Section**: Display your technical skills with custom icons
- **Contact Information**: Make it easy for potential clients or employers to reach you
- **SEO Optimized**: Built with best practices for search engine visibility
- **Fast Performance**: Optimized loading with React Server Components
- **Easy to Customize**: Simple structure makes it easy to modify for your needs

## Demo

Check out the live demo: [Portfolio Website Demo](https://omerssimsekk.github.io/portfolio/)

## Project Structure

```
├── src/                # Static website source
│   ├── index.html     # Main HTML file
│   ├── css/           # Stylesheets
│   │   └── style.css
│   └── js/            # JavaScript files
├── package.json       # Dependencies and scripts
├── next.config.js     # Next.js configuration for static site
└── README.md         # Project documentation
```

Note: This is a static website that uses Next.js only for deployment on Vercel. The minimal structure above contains all necessary files.

## Getting Started

### Option 1: One-Click Deploy with Vercel (Recommended)

The easiest way to deploy this template is to use the "Deploy with Vercel" button above. This will:
1. Create a copy of this repository in your GitHub account
2. Deploy the project to Vercel automatically
3. Set up continuous deployment

### Option 2: Manual Setup

#### Prerequisites
- Node.js 18.17 or later
- npm (or pnpm)
- Git
- serve (for local preview)

1. Clone the repository:
   ```bash
   git clone https://github.com/omerssimsekk/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # Install serve globally for local preview
   npm install -g serve
   ```

3. Build the static site:
   ```bash
   npm run build
   ```

4. Preview the built site locally:
   ```bash
   # Serve the static files from the out directory
   serve out
   ```

Your site will be available at [http://localhost:3000](http://localhost:3000).

#### Development

For development, you can directly work with the files in the `src` directory. Since this is a static site, you can:
1. Edit the HTML, CSS, and JavaScript files in the `src` directory
2. Open `src/index.html` directly in your browser to see changes
3. When ready to deploy, run `npm run build`

#### Deployment

1. Build the static site:
   ```bash
   npm run build
   ```

2. Deploy to Vercel:
   - Push your changes to GitHub
   - Vercel will automatically deploy from the `out` directory

## Customization

### Content

Edit the files in the `src` directory:
- `index.html` - Update your personal information and content
- `css/style.css` - Customize styles and themes
- `js/` - Modify any JavaScript functionality

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Vercel for deployment

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Ömer Faruk Şimşek - A computer science student passionate about web development and software engineering.

## Acknowledgements

- Vercel for hosting and deployment
- Font Awesome for icons
- Google Fonts for typography