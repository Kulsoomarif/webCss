import Image from "next/image"

const About = () => {
  return (
    <div className="about-container">
      <Image
        src="/cover2.jpg"
        alt="background image"
        className="background-image"
      />
      <div className="overlay-content">
        <h1 className="heading">About Us</h1>
        <p className="paragraph">
          Every piece is crafted with meticulous attention to detail, ensuring both beauty and durability.
          We use only the finest metals and ethically sourced gemstones, guaranteeing lasting value.
          We offer customization options to make each piece truly unique and meaningful to the wearer.
          Our collection includes classic and contemporary styles to suit a variety of tastes and occasions.
          Our commitment to customer satisfaction ensures a memorable and rewarding shopping experience.
        </p>
      </div>
    </div>
  );
};

export default About;
