import { useContext } from "react";
import styled from "@emotion/styled";
import { LayoutContext } from "../context";
import {
  FixedContainer,
  Footer,
  NavBar,
  SidebarContainer,
} from "../components";
import { LayoutProps } from "../interfaces";

const StyledLayoutContainer = styled.div<{ rtl?: boolean }>`
  display: flex;
  height: 100vh;
  ${({ rtl }) => (rtl ? `direction: rtl` : `direction: ltr`)}
`;

const StyledBodyContainer = styled.div`
  width: 100%;
`;

const ProtectedLayout = ({ children, version }: LayoutProps) => {
  const { rtl } = useContext(LayoutContext);

  return (
    <>
      <StyledLayoutContainer rtl={rtl}>
        <SidebarContainer />

        <StyledBodyContainer>
          <NavBar />

          <FixedContainer>
            <>{children}</>
          </FixedContainer>
        </StyledBodyContainer>
      </StyledLayoutContainer>

      <Footer version={version} />
    </>
  );
};

export default ProtectedLayout;
