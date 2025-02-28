import { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    // Import the main.js script
    const script = document.createElement('script');
    script.src = '/js/main.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ömer Faruk Şimşek</title>
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <div dangerouslySetInnerHTML={{ __html: `
        <!-- Navigation -->
        <nav class="navbar">
            <div class="nav-logo">Ömer Faruk Şimşek</div>
            <ul class="nav-links">
                <li><a href="#home" class="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="theme-toggle">
                <button id="theme-switch" class="theme-switch">
                    <i class="fas fa-lightbulb"></i>
                </button>
            </div>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section id="home" class="hero">
            <div class="hero-content">
                <h1>Computer Science <span class="highlight">Student</span></h1>
                <p class="typewriter">Full-Stack Developer</p>
                <div class="cta-buttons">
                    <a href="#projects" class="btn primary">View Projects</a>
                    <a href="#contact" class="btn secondary">Let's Talk</a>
                </div>
            </div>
            <div class="scroll-indicator">
                <div class="mouse"></div>
                <span>Scroll Down</span>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about">
            <h2>About Me</h2>
            <div class="about-content">
                <div class="about-text">
                    <p class="lead">Passionate about AI-driven solutions, web development, and building innovative applications that solve real-world problems</p>
                    <p>I'm a 3rd-year Computer Engineering student with a strong foundation in both theoretical concepts and practical applications. I enjoy solving complex problems through code and building efficient, user-friendly applications. My academic journey has equipped me with skills in algorithms, data structures, and various programming paradigms.</p>
                    
                    <p>My technical expertise includes:</p>
                    <ul class="skills-list">
                        <li><strong>API Development & Integration:</strong> Experience working with RESTful APIs, integrating third-party services, and building backend systems that communicate efficiently with frontend applications.</li>
                        <li><strong>Full-Stack Development:</strong> Proficient in creating end-to-end solutions using JavaScript/React for frontend and Node.js for backend services.</li>
                        <li><strong>Database Management:</strong> Skilled in designing and optimizing database schemas using MySQL and Supabase for efficient data storage and retrieval.</li>
                        <li><strong>Version Control:</strong> Strong command of Git workflows, including branching strategies and collaborative development practices.</li>
                    </ul>
                    
                    <div class="stats">
                        <div class="stat-item">
                            <h3>4+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div class="stat-item">
                            <h3>2+</h3>
                            <p>Core Technologies</p>
                        </div>
                        <div class="stat-item">
                            <h3>3+</h3>
                            <p>Years Coding</p>
                        </div>
                    </div>
                    <div class="education">
                        <h3><i class="fas fa-graduation-cap"></i> Education</h3>
                        <div class="education-item">
                            <h4>Bachelor of Science in Computer Engineering</h4>
                            <p>Tarsus University, Mersin, Turkey</p>
                            <p class="year">Current: 3rd Year | Expected Graduation: 2026</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="projects">
            <h2>Projects</h2>
            <div class="projects-grid">
                <!-- Movie AI Recommender Project -->
                <div class="project-card">
                    <div class="project-info">
                        <h3>AI-Powered Movie Recommender</h3>
                        <p>An intelligent movie recommendation app that suggests similar movies with detailed explanations of why they're similar, using AI and TMDB API.</p>
                        <div class="project-tags">
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>Deepseek AI</span>
                            <span>TMDB API</span>
                        </div>
                        <div class="project-links">
                            <a href="https://github.com/omerssimsekk/movie-ai-recommender" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                        </div>
                    </div>
                </div>
                <!-- Stock Market Project -->
                <div class="project-card">
                    <div class="project-info">
                        <h3>Stock Market & Financial News Dashboard</h3>
                        <p>A modern, real-time dashboard that combines live stock market data with the latest financial news, featuring a scrolling ticker and news slider.</p>
                        <div class="project-tags">
                            <span>JavaScript</span>
                            <span>HTML/CSS</span>
                            <span>REST APIs</span>
                            <span>Financial Data</span>
                        </div>
                        <div class="project-links">
                            <a href="https://github.com/omerssimsekk/Stock-News" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                        </div>
                    </div>
                </div>
                <!-- Blog Generator with AI Project -->
                <div class="project-card">
                    <div class="project-info">  
                        <h3>Blog Generator with AI</h3>
                        <p>An intelligent blog content generator that creates high-quality articles using AI technology.</p>
                        <div class="project-tags">
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>Deepseek API</span>
                            <span>Next.js</span>
                        </div>
                        <div class="project-links">
                            <a href="https://github.com/omerssimsekk/Blog-Generator-with-AI" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                        </div>
                    </div>
                </div>
                <!-- Portfolio Website Project -->
                <div class="project-card">
                    <div class="project-info">  
                        <h3>Personal Portfolio Website</h3>
                        <p>A modern, responsive portfolio website showcasing my projects and skills with a clean, professional design and dark/light mode toggle.</p>
                        <div class="project-tags">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JavaScript</span>
                            <span>Responsive Design</span>
                        </div>
                        <div class="project-links">
                            <a href="https://github.com/omerssimsekk/portfolio" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                            <a href="https://omerssimsekk.github.io/portfolio/" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section id="skills" class="skills">
            <h2>My Skills</h2>
            <div class="skills-container">
                <div class="skill-category">
                    <h3>Frontend Development</h3>
                    <div class="skill-items">
                        <div class="skill-item">
                            <i class="fab fa-js js-icon"></i>
                            <span>JavaScript</span>
                        </div>
                        <div class="skill-item">
                            <i class="fab fa-react react-icon"></i>
                            <span>React</span>
                        </div>
                        <div class="skill-item nextjs-item">
                            <i class="fab fa-react nextjs-icon"></i>
                            <span>Next.js</span>
                        </div>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>Backend Development</h3>
                    <div class="skill-items">
                        <div class="skill-item">
                            <i class="fab fa-node-js nodejs-icon"></i>
                            <span>Node.js</span>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-database mysql-icon"></i>
                            <span>MySQL</span>
                        </div>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>API Development & Integration</h3>
                    <div class="skill-items">
                        <div class="skill-item">
                            <i class="fas fa-exchange-alt api-icon"></i>
                            <span>RESTful APIs</span>
                        </div>
                        <div class="skill-item">
                            <i class="fab fa-node-js express-icon"></i>
                            <span>Express.js</span>
                        </div>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>Tools & Platforms</h3>
                    <div class="skill-items">
                        <div class="skill-item">
                            <i class="fab fa-git-alt git-icon"></i>
                            <span>Git</span>
                        </div>
                        <div class="skill-item vercel-item">
                            <span class="vercel-icon"></span>
                            <span>Vercel</span>
                        </div>
                        <div class="skill-item supabase-item">
                            <span class="supabase-icon"></span>
                            <span>Supabase</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="contact">
            <h2>Get In Touch</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fas fa-envelope email-icon"></i>
                        <div class="contact-details">
                            <h3>Email</h3>
                            <a href="mailto:omerfssimsekk@gmail.com">omerfssimsekk@gmail.com</a>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fab fa-linkedin linkedin-icon"></i>
                        <div class="contact-details">
                            <h3>LinkedIn</h3>
                            <a href="https://www.linkedin.com/in/omerssimsekk" target="_blank">linkedin.com/in/omerssimsekk</a>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fab fa-github github-icon"></i>
                        <div class="contact-details">
                            <h3>GitHub</h3>
                            <a href="https://github.com/omerssimsek" target="_blank">github.com/omerssimsek</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      ` }} />
    </>
  );
} 