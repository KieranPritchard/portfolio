import ContentContainer from "../../components/pages/ContentContainer"
import Theme from "../../components/pages/settings/Theme"
import Miscellaneous from "../../components/pages/settings/Miscellaneous"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Settings",
  description: "Settings page",
}

export default function Page() {
  return (
    <>
      <ContentContainer>
        <section
          id="settings"
          className={
            "mx-auto flex w-full max-w-7xl flex-col items-start gap-16 px-4 py-20 md:px-6 lg:px-8"
          }
        >
          {/* Component for the theme switcher */}
          <Theme />

          {/*Component with sliders*/}
          <Miscellaneous />
        </section>
      </ContentContainer>
    </>
  )
}
