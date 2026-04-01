import AboutMe from "@/components/content/about/About";
import ExperienceTimeline from "@/components/content/about/Expierence";
import Skills from "@/components/content/about/Skills";
import ContentContainer from "@/components/content/ContentContainer";

export default function Page() {
  return (
    <>
      <ContentContainer>
        <AboutMe/>
      </ContentContainer>
      <ContentContainer>
        <Skills />
      </ContentContainer>
      <ContentContainer>
        <ExperienceTimeline />
      </ContentContainer>
    </>
  )
}
