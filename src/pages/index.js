import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import AOS from "aos";
import "aos/dist/aos.css";


const Index = () => {

  let AOS;
  useEffect(() => {
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <Layout>
      <div className="full-page">
        <h2 class="mb-3"> Premier Auto Servicing & Performance</h2>
        <StaticImage
          src="../images/front-of-shop.jpeg"
          alt="Front of auto shopr"
          placeholder="blurred"
          layout="constrained"
          className="mb-3"
        />
        <div class="why-section">
          <section>
            <h2 data-aos="fade-up" data-aos-duration="1200">Why us?</h2>
            <p data-aos="fade-up" data-aos-duration="1200">
              What sets us apart from the competition? Your vehicle is an
              investment. We are here to protect your investment and make your
              life easier. You can trust that we will provide top quality work
              with honest prices. We don't cut corners and only use the best
              parts. We have the right tools for every job.
            </p>
          </section>
          <section>
            <h2 data-aos="fade-up" data-aos-duration="1200">Excellence</h2>
            <p data-aos="fade-up" data-aos-duration="1200">
              Our work is the finest in Albuquerque. We strive to please all of
              our customers and always stay a step ahead of the competition. We
              take our time to make sure the work is done right the first time.
              No job is too big or small. We are sure you will be more than
              satisfied with our work.
            </p>
          </section>
          <section>
            <h2 data-aos="fade-up" data-aos-duration="1200">Experience</h2>
            <p data-aos="fade-up" data-aos-duration="1200">
              In our line of work we've learned there is no better way than to
              get our hands in the nitty gritty, this is exactly how we have
              honed our talents to perfection. Wether changing your oil or
              rebuilding your motor you can feel confident in knowing we have
              the experience to get it done right!
            </p>
          </section>
          <section>
            <h2 data-aos="fade-up" data-aos-duration="1200">Passion</h2>
            <p data-aos="fade-up" data-aos-duration="1200">
              Our passion is taking pride in our work. Which is why we never cut
              corners or take the easy route in getting the job done. We know
              that to some people a car gets you from point A to point B,
              however to others a car is an extension of your family. This is
              exactly why, no matter the case we will treat your car like it is
              our own.
            </p>
          </section>
        </div>
        <h2 data-aos="fade-up" data-aos-duration="1200">Services</h2>
        <p data-aos="fade-up" data-aos-duration="1200">
          We offer all services from changing oil and brakes to specialty
          services like transmission work, wiring and eletrical diagnostics.
        </p>
        <div class="services-wrapper mb-3">
          <i
            class="fas fa-cogs fa-7x"
            data-aos="fade-right"
            data-aos-duration="1200"
          ></i>{" "}
          <p class="right" data-aos="fade-left" data-aos-duration="1200">
            We specialize in transmission repair and diagnostics as well as
            rebuilding.
          </p>
          <p class="left" data-aos="fade-right" data-aos-duration="1200">
            Oil changes and filters of course!
          </p>
          <i
            class="fas fa-oil-can fa-7x"
            data-aos="fade-left"
            data-aos-duration="1200"
          ></i>
          <i
            class="fas fa-bolt fa-7x"
            data-aos="fade-right"
            data-aos-duration="1200"
          ></i>
          <p class="right" data-aos="fade-left" data-aos-duration="1200">
            Electrical servicing and diagnostics.
          </p>
          <p class="left" data-aos="fade-right" data-aos-duration="1200">
            Something just not running right? Not sure what it is? Bring it to
            us and we can figure it out!
          </p>
          <i
            class="fas fa-stethoscope fa-7x"
            data-aos="fade-left"
            data-aos-duration="1200"
          ></i>
          <i
            class="fas fa-tachometer-alt fa-7x"
            data-aos="fade-right"
            data-aos-duration="1200"
          ></i>
          <p class="right" data-aos="fade-left" data-aos-duration="1200">
            How fast do you want to go? We will help you get there using the
            best parts and making sure it's done safely and reliably.
          </p>
          <p class="left" data-aos="fade-right" data-aos-duration="1200">
            Need a tune-up, or just a brake job? maybe something you don't see
            listed here. We can handle it all.
          </p>
          <i
            class="fas fa-tools fa-7x"
            data-aos="fade-left"
            data-aos-duration="1200"
          ></i>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
