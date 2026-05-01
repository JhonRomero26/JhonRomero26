/**
 * cv-data.ts — CV data derived from resumen.json (single source of truth).
 *
 * This file no longer defines data by hand.
 * It derives `cvData` from `getResume("en")` so cv.astro keeps working
 * without any changes to its imports or destructuring.
 */

import {
  getResumeBasics,
  getResumeWork,
  getResumeEducation,
  getResumeSkills,
  getResumeLanguages,
} from "@/utils/resume";

export const getCvData = (locale = "en") => {
  const basics = getResumeBasics(locale);
  const work = getResumeWork(locale);
  const education = getResumeEducation(locale);
  const skills = getResumeSkills(locale);
  const languages = getResumeLanguages(locale);

  return {
    basics: {
      name: basics.name,
      label: basics.label,
      image: basics.image || "/favicon.svg",
      email: basics.email,
      phone: basics.phone,
      url: basics.url,
      summary: basics.summary,
      location: {
        city: basics.location.city,
        country: basics.location.country,
        address: "",
      },
      profiles: basics.profiles,
    },
    work: work.map((job) => ({
      name: job.name,
      position: job.position,
      startDate: job.startDate,
      endDate: job.endDate || "Present",
      summary: job.summary,
      highlights: [] as string[],
      skills: job.skills,
    })),
    education: education.map((edu) => ({
      institution: edu.institution,
      area: edu.area,
      startDate: edu.startDate,
      endDate: edu.endDate || "",
      score: "",
      courses: [] as string[],
    })),
    skills,
    languages,
  };
};

export const cvData = getCvData("en");
