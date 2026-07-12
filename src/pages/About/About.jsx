import aboutClasses from "./About.module.scss";

function About() {
  return (
    <div>
      <h1 className={aboutClasses.about__header}>ABOUT THIS PAGE</h1>
      <p className={aboutClasses.about__body}>
        This App will Fetch data from Google Books API and display them.
      </p>
    </div>
  );
}

export default About;
