import React from "react";

function openFB() {
  setTimeout(() => {
    window.location =
      "https://www.facebook.com/MOs-Garage-and-Performance-101197434996259/";
  }, 25);
  window.location = "fb://profile/101197434996259";
}

function mapApp() {
    if ((navigator.platform.indexOf("iPhone") != -1) ||
    (navigator.platform.indexOf("iPad") != -1) ||
    (navigator.platform.indexOf("iPod") != -1))
    window.open('maps://maps.google.com/maps/dir/?daddr=206 + Wyoming + Blvd + NE, +Albuquerque, +NM + 87123');
else /* else use Google */
    window.open('https://maps.google.com/maps/dir/?daddr=206 + Wyoming + Blvd + NE, +Albuquerque, +NM + 87123');
}


const Footer = () => {
  return (
    <div className="footer bg-dark">
      <div class="contact-us">
        <h2>Contact us</h2>
        <p>
          Connect with us on Social media for the latest specials and info on
          what we are doing!
        </p>
        <div class="contact-us-icons ">
          <ul class="contact-icons ">
            <ul class="phone-number ">
              <li class="contact-1 ">
                Call Jose @<a href="tel:(505)730-3303">(505) 730-3303</a>
              </li>{" "}
              /
              {" "}
              <li class="contact-2 ">
                Call Orlando @<a href="tel:(505)659-6987">(505) 659-6987</a>
              </li>
            </ul>
            <li>
              <a href="tel:5057303303 ">
                <i class="fas fa-phone-alt icon"></i>
              </a>
            </li>
            <li>
              <a href="mailto:mandoperformance@gmail.com">
                <i class="fas fa-envelope icon "></i>
              </a>
            </li>
            <li>
              <i class="fab fa-facebook icon fb" onClick={openFB}></i>
            </li>
            <li>
              <a href="https://g.page/m-and-o-performance?gt" target="_blank">
                <i class="fab fa-google icon "></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mandosgarage" target="_blank">
                <i class="fab fa-instagram icon "></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.yelp.com/biz/m-and-os-garage-and-performance-albuquerque?osq=m+%26+o%27s+garage "
                target="_blank "
              >
                <i class="fab fa-yelp icon "></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <i class="fas fa-location-arrow maps mb-3" onClick={mapApp}>206 Wyoming Blvd Albuquerque, NM 87123.</i>
    </div>
  );
};

export default Footer;
