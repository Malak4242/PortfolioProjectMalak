import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio.css';

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">Malak Shazly</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="display-4 fw-bold text-white mb-3">
                  Hi, I'm <span className="text-primary">Malak Shazly</span>
                </h1>
                <p className="lead text-white-50 mb-4">
                  Front-End Developer passionate about creating beautiful and functional web experiences
                </p>
                <div className="hero-buttons">
                  <a href="#projects" className="btn btn-primary btn-lg me-3">View My Work</a>
                  <a href="#contact" className="btn btn-outline-light btn-lg">Get In Touch</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <div className="profile-card">
                  <div className="profile-img">
                    <img src="./images/malak.jpg" 
                         alt="Profile" className="img-fluid rounded-circle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle text-muted">Get to know me better</p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <h3 className="mb-3">I'm a passionate Front-End Developer who loves building modern, responsive, and user-friendly web experiences.</h3>
                <p className="text-muted mb-4">
                 With a foundation in HTML, CSS, JavaScript, and programming languages like Python and C++, I bring both technical problem-solving and creative design skills to every project.

Beyond coding, my background in graphic design (Photoshop, Illustrator) gives me a strong eye for detail and aesthetics, helping me craft interfaces that are not only functional but visually engaging.
                </p>
                <p className="text-muted mb-4">
                 When I’m not coding, you’ll find me exploring new technologies, working on creative projects, or contributing to community initiatives. I believe in continuous learning and thrive on turning ideas into impactful digital solutions.
                </p>
                <div className="about-stats row">
                  <div className="col-6 col-md-3">
                    <div className="stat-item text-center">
                      <h4 className="fw-bold text-primary">5+</h4>
                      <p className="small text-muted">Projects</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="stat-item text-center">
                      <h4 className="fw-bold text-primary">18+</h4>
                      <p className="small text-muted">Creative Designs for events, branding & competitions</p>
                    </div>
                  </div>
                
                  <div className="col-6 col-md-3">
                    <div className="stat-item text-center">
                   <h4 className="fw-bold text-primary">Strong</h4>
                      <p className="small text-muted"> mix of technical coding + creative design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-image">
                <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" 
                     alt="About" className="img-fluid rounded shadow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-title">My Projects</h2>
              <p className="section-subtitle text-muted">Some of my recent work</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="project-card h-100">
                <div className="project-image">
                  <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600" 
                       alt="
Restaurant Management System " className="img-fluid" />
                  <div className="project-overlay">
                    <div className="project-actions">
                     
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h5 className="project-title">Restaurant Management System </h5>
                  <p className="project-description text-muted">
                    Developed a restaurant event simulation system in C++ to manage orders and resources using advanced data structures. 
                  </p>
                  <div className="project-tech">
                    <span className="badge bg-primary me-1">C++</span>
                    <span className="badge bg-secondary me-1">OOP</span>
                    <span className="badge bg-success">Data structure</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="project-card h-100">
                <div className="project-image">
                  <img src="./images/nisa.png" 
                       alt="Nisa Modest wear" className="img-fluid" />
                  <div className="project-overlay">
                    <div className="project-actions">
                
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h5 className="project-title">Nisa Modest wear</h5>
                  <p className="project-description text-muted">
                    Responsive E-commerce website
                  </p>
                  <div className="project-tech">
                    <span className="badge bg-primary me-1">HTML</span>
                    <span className="badge bg-warning me-1">CSS</span>
                    <span className="badge bg-info">JavaScript</span>
                      <span className="badge bg-info">Bootstrap</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="project-card h-100">
                <div className="project-image">
                  <img src="./images/watch.png" 
                       alt="Watch Of choice" className="img-fluid" />
                  <div className="project-overlay">
                    <div className="project-actions">
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h5 className="project-title">Watch Of Choice</h5>
                  <p className="project-description text-muted">
                    A responsive Watch Store
                  </p>
                  <div className="project-tech">
                    <span className="badge bg-primary me-1">HTML</span>
                    <span className="badge bg-secondary me-1">CSS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="project-card h-100">
                <div className="project-image">
                  <img src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600" 
                       alt="Social Media Dashboard" className="img-fluid" />
                  <div className="project-overlay">
                    <div className="project-actions">
                     
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h5 className="project-title">Quiz generator</h5>
                  <p className="project-description text-muted">
            Quiz game generator using python and database
                  </p>
                  <div className="project-tech">
                    <span className="badge bg-primary me-1">Python</span>
                    <span className="badge bg-success me-1">JSON</span>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="project-card h-100">
                <div className="project-image">
                  <img src="./images/book.png" 
                       alt="Learning Platform" className="img-fluid" />
                  <div className="project-overlay">
                    <div className="project-actions">
                      <a href="#" className="btn btn-light btn-sm me-2">Live Demo</a>
                      <a href="#" className="btn btn-outline-light btn-sm">Code</a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h5 className="project-title">BookVerse</h5>
                  <p className="project-description text-muted">
                   A responsive web app built with HTML, CSS, and JavaScript that lets users browse a book catalog, search and filter by genre or rating, view detailed book pages, add titles to a personalized reading list (localStorage), and leave reviews with star ratings. Features a modern card-based UI with smooth navigation and dark/light mode.
                  </p>
                  <div className="project-tech">
                    <span className="badge bg-primary me-1">React</span>
                    <span className="badge bg-secondary me-1">Js</span>
                    <span className="badge bg-success">Bootstrap</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-title">Skills</h2>
              <p className="section-subtitle text-muted">Technologies I work with</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="skill-category">
                <h4 className="mb-4">Frontend Development</h4>
                <div className="skill-item mb-3">
                  <div className="d-flex justify-content-between">
                    <span>JavaScript</span>
                    <span>90%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-primary" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item mb-3">
                  <div className="d-flex justify-content-between">
                    <span>React</span>
                    <span>85%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-info" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item mb-3">
                  <div className="d-flex justify-content-between">
                    <span>Vue.js</span>
                    <span>80%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-success" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-item mb-3">
                  <div className="d-flex justify-content-between">
                    <span>CSS/SCSS</span>
                    <span>95%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-warning" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="skill-category">
                <h4 className="mb-4">Backend Development</h4>
                <div className="skill-item mb-3">
                  <div className="d-flex justify-content-between">
                    <span>Node.js</span>
                    <span>85%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-success" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item mb-3">
                  <div className="d-flex justify-content-between">
                    <span>Python</span>
                    <span>80%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-primary" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-item mb-3">
                  
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-title text-white">Get In Touch</h2>
              <p className="section-subtitle text-white-50">Let's work together on your next project</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="contact-info">
                <h4 className="mb-4">Contact Information</h4>
                <div className="contact-item d-flex mb-3">
                  <div className="contact-icon me-3">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div>
                    <strong>Email</strong>
                    <p className="text-white-50 mb-0">malakhabak56@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item d-flex mb-3">
                  <div className="contact-icon me-3">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <strong>Phone</strong>
                    <p className="text-white-50 mb-0">+20 1224543273</p>
                  </div>
                </div>
                <div className="contact-item d-flex mb-4">
                  <div className="contact-icon me-3">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>
                    <strong>Location</strong>
                    <p className="text-white-50 mb-0">Cairo, Egypt</p>
                  </div>
                </div>
                <div className="social-links">
                  <h5 className="mb-3">Follow Me</h5>
                  <a href="https://www.linkedin.com/in/malak-shazly/" className="social-link me-3"><i className="bi bi-linkedin"></i></a>
                  <a href="https://github.com/Malak4242" className="social-link me-3"><i className="bi bi-github"></i></a>
           
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form">
                <h4 className="mb-4">Send Me a Message</h4>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input type="text" className="form-control" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input type="email" className="form-control" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Subject" required />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" rows={5} placeholder="Your Message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg w-100">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-md-6 text-md-end">
              <p className="mb-0">Made with ❤️ using Bootstrap</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
