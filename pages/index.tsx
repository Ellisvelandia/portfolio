import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo"
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({
  pageInfo,
  experiences,
  projects,
  skills,
  socials,
}) => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
    scrollbar scrollbar-thumb-red-600/80 scrollbar-track-red-900/20"
    >
      <Head>
        <title>Ellis Portfolio</title>
      </Head>
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-14 w-24 rounded-full filter grayscale hover:grayscale-0 hover:animate-spin cursor-pointer"
              src="https://previews.dropbox.com/p/thumb/ABsXfNDCAfScofTrJkzov4KIN-ToRRTJDx6HGdKkW-re_F8r8ZMmyteFrvEUD7PyySo2oWCAUTWEw5sTDpoApgY9xILRXS2AjE4z5EYOrIRRDbJXmRglmeJWfbUPOh1Za7qTyaJphJfiUCxcDCE1puVOwXdhwyCRqR1dIGwuYsln7FUEbxGRt6_iY5KhqxQFgXbQC8JE-QhdLBcY23u8PAt1d_8AoD8yQQ4zigKVjRve9EvtDliL9Ugr1k5jVoqDgFBkh2NbDVnTv_VgyeEbq9K0AGuIyKqCkfUq9-z2nN8H0qhOJ3VOAa1eAmEAe9wTUtIv51U84NV6E_BF6dqUQLvsRiNbKEhzeJI8YxRW2Ae1BKo9wvt7-u-WL0DZDaAwonQ/p.png"
              alt="footer"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
