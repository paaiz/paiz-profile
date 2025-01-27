import "@/styles/components/menu/About.css";

export default function About() {
  return (
    <>
      <div className="about-bg">
        <div className="header-bg"></div>

        <div className="about-header">
          <div className="about-image">
            <img
              src="/assets/images/profile.jpeg"
              alt="ABOUT_PROFILE_PICTURE"
              className="about-profile"
            />
          </div>

          <h1>Faiz Dzaki</h1>
        </div>

        <div className="about-section">
          <div className="about-title">
            <h1>Short Bio</h1>
            <span></span>
          </div>

          <p>
            Currently studying <strong>Computer Engineering</strong> at{" "}
            <strong>Institute of Technology Sepuluh Nopember.</strong> Interested in technologies
            since the beginning of Covid-19 at <strong>March 2020</strong> and still does
            programming in my freetime. I have a passion for learning new things and solving
            problems.
          </p>
        </div>
      </div>
    </>
  );
}
