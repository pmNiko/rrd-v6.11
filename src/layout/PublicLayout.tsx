import styled from "@emotion/styled";
import {
  FixedContainer,
  Footer,
  NavBar,
  SidebarContainer,
} from "../components";

const LayoutContainer = styled.div<{ rtl?: boolean }>`
  display: flex;
  height: 100vh;
  ${({ rtl }) => (rtl ? `rtl` : `ltr`)}
`;

const BodyContainer = styled.div`
  width: 100%;
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
        <SidebarContainer />

        <BodyContainer>
          <NavBar broken={false} openMenu={() => console.log()} />

          <FixedContainer>{children}</FixedContainer>
        </BodyContainer>
      </LayoutContainer>

      <Footer version={version} />
    </>
  );
};

export default PublicLayout;
