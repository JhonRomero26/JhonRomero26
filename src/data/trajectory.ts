import { type Education } from "~/schemas/Education";
import { type Experience } from "~/schemas/Experience";
import { DEVTOOLS_NAMES } from "~/lib/constants";

const basePathTranslate = "trajectoryApp";
const pathExperiences = `${basePathTranslate}.experiences`;
const pathEducation = `${basePathTranslate}.education`;

export const COMPANIES = {
  i2tec: "I2TEC",
};

export const INSTITUTIONS = {
  dolorosa_loja: "Unidad Educativa Fiscomisional La Dolorosa",
  unl: "Universidad Nacional de Loja",
};

const sortByDate = <T = any>(arr: (T & { start_date: Date })[]): T[] => {
  return arr.sort((a, b) => {
    return b.start_date.getTime() - a.start_date.getTime();
  });
};

export const EXPERIENCES: Experience[] = sortByDate([
  {
    title: `${pathExperiences}.i2tec.title`,
    location: `${pathExperiences}.i2tec.location`,
    description: `${pathExperiences}.i2tec.description`,
    company: COMPANIES.i2tec,
    start_date: new Date(2023, 3),
    end_date: new Date(2023, 6),
    skills: [
      DEVTOOLS_NAMES.preact,
      DEVTOOLS_NAMES.typescript,
      DEVTOOLS_NAMES.astro,
      DEVTOOLS_NAMES.css3,
      DEVTOOLS_NAMES.docker,
      DEVTOOLS_NAMES.ghActions,
      DEVTOOLS_NAMES.nodejs,
      DEVTOOLS_NAMES.postgres,
    ],
  },
]);

export const EDUCATION: Education[] = sortByDate([
  {
    titleDegree: `${pathEducation}.unlTelecom.titleDegree`,
    description: `${pathEducation}.unlTelecom.description`,
    institution: INSTITUTIONS.unl,
    start_date: new Date(2019, 10),
    end_date: "",
  },
  {
    titleDegree: `${pathEducation}.dolorosa.titleDegree`,
    description: `${pathEducation}.dolorosa.description`,
    institution: INSTITUTIONS.dolorosa_loja,
    start_date: new Date(2013, 9),
    end_date: new Date(2019, 7),
  },
]);
