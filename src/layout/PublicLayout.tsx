import styled from "@emotion/styled";
import SideBarMenu from "../SideBarMenu";

import { FixedContainer, Footer, NavBar } from "../components";

const LayoutContainer = styled.div<{ rtl?: boolean }>`
  display: flex;
  height: 100vh;
  ${({ rtl }) => (rtl ? `rtl` : `ltr`)}
`;

interface Props {
  children: JSX.Element;
  version: string;
}

const PublicLayout = ({ children, version }: Props) => {
  return (
    <>
      <LayoutContainer rtl={true}>
        {/* <NavBar broken={broken} openMenu={() => setToggled(!toggled)} /> */}
        <SideBarMenu />
        {/* <NavBar broken={broken} openMenu={() => setToggled(!toggled)} /> */}

        <main
          style={{
            width: "100%",
          }}
        >
          <NavBar broken={false} openMenu={() => console.log()} />

          <FixedContainer>{children}</FixedContainer>
        </main>
      </LayoutContainer>

      <Footer version={version} />
    </>
  );
};

export default PublicLayout;
