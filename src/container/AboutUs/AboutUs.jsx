import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Welcome to our Restaurant!. At chef, we're more than just a place to
          dine; we're a culinary destination, a gathering spot for friends and
          family, and a celebration of flavor. Nestled in the heart of Raipur,
          our restaurant is where exceptional food meets exceptional service in
          a welcoming atmosphere.
          <br />
          Join us at Chef and discover why we're more than just a restaurant –
          we're a destination worth savoring.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Chef – A Journey of Culinary Excellence Our story begins
          with a passion for cuisine and a dream to create a
          dining experience unlike any other. Founded in 2020, Chef has since become a beloved fixture in the culinary landscape of
          Raipur, known for our commitment to quality, innovation, and
          hospitality.
          <br />
          Himanshu and Priyanshu, our visionary founder(s), embarked on a journey
          to bring their culinary vision to life. Drawing inspiration from
          [personal background, cultural influences, etc.], they set out to
          create a restaurant that would not only tantalize taste buds but also
          capture the hearts of our guests.
          <br />
          Join us on this journey as we write the next chapter in the storied
          history of Chef.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
