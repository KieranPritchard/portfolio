import AboutMe from "@/components/content/about/About";
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
    </>
  )
}
