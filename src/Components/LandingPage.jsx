import React from "react";
import AppContainer from "./AppContainer";
import LandingPageHero from "./LandingPageHero";
import PlatformQualitiesSection from "./PlatformQualities";
import { FeatureHighlightsSection } from "./FeaturesSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { PlatformBenefitsSection } from "./Benefits";
import AcademicFocusSection from "./LearningFocus";

const LandingPage = () => {
  return (
    <AppContainer>
      <LandingPageHero />
      <FeatureHighlightsSection />
      <PlatformQualitiesSection />
      <AcademicFocusSection />
      <HowItWorksSection />
      <PlatformBenefitsSection />
    </AppContainer>
  );
};

export default LandingPage;
