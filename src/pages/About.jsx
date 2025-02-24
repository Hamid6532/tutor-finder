import React from "react";
import AppContainer from "../Components/AppContainer";

export default function About() {
  return (
    <AppContainer>
      <div>
        <h1 className="h1-about">About Us</h1>
        <p className="p-about">
          Welcome to TutorFinder, the platform where learners and tutors connect
          to achieve their goals. Our mission is to make learning accessible,
          personalized, and effective for everyone.
        </p>
      </div>
    </AppContainer>
  );
}
