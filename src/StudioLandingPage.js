import React from 'react';
import './StudioLandingPage.css';

function StudioLandingPage() {
  return (
    <div className="container">
      <nav className="top-nav">
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#media">Media</a>
          </li>
        </ul>
      </nav>
      <header>
        <div className="header-overlay">
          <h1>Welcome to Pierce Wang's Violin Studio</h1>
          <p>Nurturing musical growth and a love of music as self-expression.</p>
        </div>
        <div className="header-background" />
      </header>
      <section className="about">
        <div className="about-panel">
          <h2>About Me</h2>
          <div className="about-content">
            <p>
              I am a violinist and educator with a Master's degree from Juilliard and a background in Computer Science from Columbia University. With a passion for teaching and sharing music, I aim to create a supportive and engaging environment for students of all ages and skill levels. <br>
              Learn more about me: <a href="https://piercegwang.github.io">piercegwang.github.io</a>
            </p>
            <div className="about-image">
              <img src={require('./images/artist_photo.jpg')} alt="Pierce Wang looking off dreamily to the side." />
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="lessons-panel">
          <h2>Lessons and Programs</h2>
          <div className="lessons-content">
            <p>
              I offer a variety of lessons and programs tailored to meet the needs of students of all ages and skill levels. From early childhood music education to advanced violin instruction, I am committed to helping my students achieve their musical goals.
            </p>
            <ul>
              <li>
                <h3>Early Childhood Music (ages 2.5-5)</h3>
                <p>Fun and interactive lessons introducing young children to the world of music and violin playing.</p>
              </li>
              <li>
                <h3>Intermediate and Advanced Lessons (ages 6-14)</h3>
                <p>Personalized instruction and guidance for students looking to improve their technique, expand their repertoire, and develop their musical expression.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="contact-panel">
          <h2>Get in Touch</h2>
          <div className="contact-content">
            <p>
              Interested in learning more about my studio or scheduling a lesson? Please don't hesitate to reach out.
            </p>
            <ul>
              <li>
                <a href="mailto:pierce.g.wang@gmail.com">pierce.g.wang@gmail.com</a>
              </li>
              <li>
                <a href="tel:+1 (510) 557-8114">+1 (510) 557-8114</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-background" />
        <div className="footer-content">
          <p>&copy; Pierce Wang's Violin Studio</p>
        </div>
      </footer>
    </div>
  );
}

export default StudioLandingPage;
