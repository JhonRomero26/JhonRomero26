/**
 * resume.ts — Central helper for resumen.json (single source of truth).
 *
 * Exports typed accessors for basics, work, education, skills, and languages.
 * Normalises locale codes (e.g. "es-EC" → "es") and falls back to the
 * defaultLocale defined in resumen.json when the requested locale is missing.
 */

import resumeData from "../../resumen.json";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ResumeProfile {
  network: string;
  username: string;
  url: string;
}

export interface ResumeLocation {
  city: string;
  countryCode: string;
  region?: string;
  country: string;
}

export interface ResumeBasics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: ResumeLocation;
  profiles: ResumeProfile[];
}

export interface ResumeWork {
  id: string;
  name: string;
  position: string;
  startDate: string;
  endDate?: string;
  summary: string;
  location: string;
  workplace: string;
  skills: string[];
}

export interface ResumeEducation {
  id: string;
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface ResumeSkillGroup {
  name: string;
  keywords: string[];
}

export interface ResumeLanguage {
  language: string;
  fluency: string;
}

export interface ResumeLocale {
  basics: ResumeBasics;
  work: ResumeWork[];
  education: ResumeEducation[];
  skills: ResumeSkillGroup[];
  languages: ResumeLanguage[];
}

export interface Resume {
  $schema: string;
  defaultLocale: string;
  locales: Record<string, ResumeLocale>;
}

// ─── Internals ────────────────────────────────────────────────────────────────

const data = resumeData as unknown as Resume;

/**
 * Normalises a locale string to a two-letter code.
 * "es-EC" → "es", "en-US" → "en", "en" → "en"
 */
function normaliseLocale(locale: string): string {
  return locale.split("-")[0].toLowerCase();
}

/**
 * Resolves the locale entry from resumen.json, with fallback to defaultLocale.
 */
function resolveLocale(locale?: string): ResumeLocale {
  const defaultLocale = data.defaultLocale;
  const locales = data.locales;

  if (!locale) return locales[defaultLocale];

  const normalised = normaliseLocale(locale);

  if (locales[normalised]) return locales[normalised];

  // Fallback to default
  return locales[defaultLocale];
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Returns the full locale entry for the given locale, falling back to
 * `defaultLocale` if the locale is missing or not found.
 */
export function getResume(locale?: string): ResumeLocale {
  return resolveLocale(locale);
}

/** Returns basics for the given locale. */
export function getResumeBasics(locale?: string): ResumeBasics {
  return resolveLocale(locale).basics;
}

/** Returns work entries for the given locale. */
export function getResumeWork(locale?: string): ResumeWork[] {
  return resolveLocale(locale).work;
}

/** Returns education entries for the given locale. */
export function getResumeEducation(locale?: string): ResumeEducation[] {
  return resolveLocale(locale).education;
}

/** Returns skill groups for the given locale. */
export function getResumeSkills(locale?: string): ResumeSkillGroup[] {
  return resolveLocale(locale).skills;
}

/** Returns languages for the given locale. */
export function getResumeLanguages(locale?: string): ResumeLanguage[] {
  return resolveLocale(locale).languages;
}
