import "@/styles/components/menu/About.css";

export default function About() {
  return (
    <div className="haheo">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste modi ipsam officia
          accusantium assumenda quaerat exercitationem error tenetur? Magnam et obcaecati, maiores
          similique deleniti cupiditate. Saepe libero dolores maiores?
        </p>
      </div>
    </div>
  );
}
