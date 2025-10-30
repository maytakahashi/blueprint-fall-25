import { useState } from "react";
import "./styles.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const [likes, setLikes] = useState(0);

  return (
    <div className="app-container">
      <header>
        <h1>Welcome to My Website</h1>
        <p>React and JSX — Week 4</p>
      </header>

      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hi! Im Aditya, a CS major passionate about front-end design and
            coding creativity.
          </p>

          <button className="likeButton" onClick={() => setLikes(likes + 1)}>
            Like ({likes})
          </button>
        </section>

        <section id="services">
          <h2>Services</h2>

          <div class="service-container">
            <div class="service-box">
              <h3>Web Design</h3>
              <p>
                Creating responsive and modern websites with HTML, CSS, and JS.
              </p>
            </div>

            <div class="service-box">
              <h3>Tutoring</h3>
              <p>
                I help students understand programming concepts clearly and
                effectively.
              </p>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>

          <div class="project-item">
            <h3>Weather App</h3>
            <p>
              A simple weather application that shows current conditions and
              forecasts.
            </p>
            <p>
              <strong>Technologies:</strong> HTML, CSS, JavaScript
            </p>
          </div>

          <div class="project-item">
            <h3>To-Do List</h3>
            <p>
              A task management application to keep track of daily activities.
            </p>
            <p>
              <strong>Technologies:</strong> HTML, CSS, JavaScript
            </p>
          </div>

        </section>

        <section id="contact">
          <h2>Contact Me</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@email.com"
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              placeholder="Your message..."
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Aditya's Webpage</p>
      </footer>
    </div>
  );
}

export default App;
