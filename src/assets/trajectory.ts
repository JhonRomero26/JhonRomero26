import { type Education } from "@/models/Education";
import { type Experience } from "@/models/Experience";
import { DEVTOOLS_NAMES } from "@/utils/constants";

const basePathTranslate = "trajectory";
const pathExperiences = `${basePathTranslate}.experiences`;
const pathEducation = `${basePathTranslate}.education`;

export const COMPANIES = {
  i2tec: "I2TEC",
  electronetTech: "Electronet Ltda.",
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
    title: `${pathExperiences}.i2tec-iot.title`,
    location: `${pathExperiences}.i2tec-iot.location`,
    description: `${pathExperiences}.i2tec-iot.description`,
    company: COMPANIES.i2tec,
    start_date: new Date(2025, 2),
    end_date: new Date(2024, 4),
    skills: [],
  },
  {
    title: `${pathExperiences}.i2tec.title`,
    location: `${pathExperiences}.i2tec.location`,
    description: `${pathExperiences}.i2tec.description`,
    company: COMPANIES.i2tec,
    start_date: new Date(2023, 11),
    end_date: new Date(2024, 4),
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
  {
    title: `${pathExperiences}.electronet-tech.title`,
    location: `${pathExperiences}.electronet-tech.location`,
    description: `${pathExperiences}.electronet-tech.description`,
    company: COMPANIES.electronetTech,
    start_date: new Date(2017, 11),
    end_date: new Date(2018, 7),
    skills: [],
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
