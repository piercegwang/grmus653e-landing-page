import React from 'react';
import './StudioLandingPage.css';

function StudioLandingPage() {
  return (
    <div className="container">
      <header>
        <div className="header-overlay">
          <h1>Welcome to Pierce Wang's Violin Studio</h1>
          <p>Teaching young minds and nurturing musical growth</p>
        </div>
        <div className="header-background" />
      </header>
      <section className="about">
        <div className="about-image">
          <img src={require('./images/artist_photo.jpg')} alt="Pierce Wang standing with thumbs in pocket" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am a violinist and educator with a Master's degree from Juilliard and a background in Computer Science from Columbia University. With a passion for teaching and sharing music, I aim to create a supportive and engaging environment for students of all ages and skill levels.
          </p>
        </div>
      </section>
      <section className="services">
        <h2>Lessons and Programs</h2>
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
      </section>
      <section className="contact">
        <h2>Get in Touch</h2>
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
