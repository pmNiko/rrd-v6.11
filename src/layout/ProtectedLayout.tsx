import { useContext } from "react";
import styled from "@emotion/styled";
import { LayoutContext } from "../context";
import {
  FixedContainer,
  Footer,
  NavBar,
  SidebarConfig,
  SidebarContainer,
} from "../components";
import { LayoutProps } from "../interfaces";

const LayoutContainer = styled.div<{ rtl?: boolean }>`
  display: flex;
  height: 100vh;
  ${({ rtl }) => (rtl ? `rtl` : `ltr`)}
`;

const BodyContainer = styled.div`
  width: 100%;
`;

const ProtectedLayout = ({ children, version }: LayoutProps) => {
  const { rtl } = useContext(LayoutContext);

  return (
    <>
      <LayoutContainer rtl={rtl}>
        <SidebarContainer />

        <BodyContainer>
          <NavBar />

          <FixedContainer>
            <>
              <SidebarConfig />
              {children}
            </>
          </FixedContainer>
        </BodyContainer>
      </LayoutContainer>

      <Footer version={version} />
    </>
  );
};

export default ProtectedLayout;
