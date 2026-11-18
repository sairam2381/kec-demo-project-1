import React from "react";
import "./hero-style.css";
const HeroComponent = () => {
  return (
    <div className="hero-component">
      <h1>Aptitude Guru Hem</h1>
      <h2>At AGH, we shape futures and build skills that</h2>
      <p>
        Where Success Meets Opportunity! Are you ready to embark on a
        transformative journey towards success? At Aptitude Guru Hem, we are
        committed to providing you with the essential skills and knowledge to
        excel in your professional endeavors. Our expert training in aptitude
        and coding equips you to conquer every challenge, from company interview
        assessments to prestigious coding platforms like LeetCode,
        GeeksForGeeks, HackerRank , and more.
      </p>
      <div className="button__container">
        <button className="button__one">Start your learning</button>
        <button className="button__two">Join a Live Demo</button>
      </div>
    </div>
  );
};
export default HeroComponent;
