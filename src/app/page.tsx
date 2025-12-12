import React from 'react'
import EventVenueMapSection from '../components/sections/EventVenueMapSection'
import ProgramOverviewSection from '../components/sections/ProgramOverviewSection'
import ImportantDatesSection from '../components/sections/ImportantDatesSection'
import RegistrationDetailsSection from '../components/sections/RegistrationDetailsSection'
import TrajectoriesSection from '../components/sections/TrajectoriesSection'
import ObjectivesHighlightsSection from '../components/sections/ObjectivesHighlightsSection'
import AboutEventSection from '../components/sections/AboutEventSection'
import HeroSection from '../components/sections/HeroSection'
import KeynoteSection from '../components/sections/KeynoteSection'
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic"; // optional, but safe


 export default function page() {
   // This runs on the server → Google sees proper HTML + all <head> tags
  // redirect("/intersection-2026");

  return (
    <>
    <HeroSection/>
    <AboutEventSection/>
    
    <ObjectivesHighlightsSection/>
    <KeynoteSection/>
    <TrajectoriesSection/>
<RegistrationDetailsSection/>
    <ImportantDatesSection/>
    <ProgramOverviewSection/>
    <EventVenueMapSection/>
    
    </>
  )
}

