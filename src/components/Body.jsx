import React from 'react'
import "./Body.css"
function Body() {
  return (
    <div>
        <body>
  

  <main>
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to TourWebsite</h1>
        <p>Your gateway to exciting adventures</p>
        <a href="#" class="cta-button">Book Now</a>
      </div>
    </section>

    <section class="about">
      <h2>About Us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida mauris at ipsum tincidunt, at suscipit mi interdum.</p>
    </section>

    <section class="services">
      <h2>Our Services</h2>
      <div class="service-card">
        <img src="https://airlinebd.com/wp-content/uploads/2021/06/Bangladesh-Tourist-Spots.jpg" alt="Service 1"/>
        <h3>Adventure Tours</h3>
        <p>Experience thrilling adventures in exotic locations.</p>
      </div>
      <div class="service-card">
        <img src="https://cdn.bangladeshscenictours.com/wp-content/uploads/2020/02/Anik-Hasan%E2%80%8E.jpg" alt="Service 2"/>
        <h3>Cultural Tours</h3>
        <p>Immerse yourself in the rich cultures of different destinations.</p>
      </div>
      <div class="service-card">
        <img src="https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image003.jpg" alt="Service 3"/>
        <h3>Nature Tours</h3>
        <p>Discover the wonders of nature through our guided tours.</p>
      </div>
    </section>

    <section class="contact">
      <h2>Contact Us</h2>
      <p>Email: info@tourwebsite.com</p>
      <p>Phone: 123-456-7890</p>
    </section>
  </main>

  <footer>
    <div class="footer-content">
      <p>&copy; 2023 TourWebsite. All rights reserved.</p>
    </div>
  </footer>
</body>

        
    </div>
  )
}

export default Body