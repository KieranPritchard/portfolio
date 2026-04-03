import ContentContainer from "@/components/content/ContentContainer";
import Intro from "@/components/content/HomePage/Intro";
import TechStack from "@/components/content/HomePage/TechStack";

export default function Page() {
  return (
    <>
      <ContentContainer>
        <Intro />
      </ContentContainer>
      <ContentContainer>
        <TechStack />
      </ContentContainer>
    </>
  )
}
