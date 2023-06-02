import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { Typography } from "./Typography";
import packageJson from "../../package.json";

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  collapsed?: boolean;
}

const StyledButton = styled.a`
  padding: 5px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: inline-block;
  background-color: #fff;
  color: #484848;
  text-decoration: none;
`;

const StyledSidebarFooter = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  color: white;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
  /* background: #0098e5; */
`;

const StyledCollapsedSidebarFooter = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  color: white;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
  /* background: #0098e5; */
`;

const codeUrl = "https://app.sma.gob.ar/inicio/";

export const SidebarFooter: React.FC<SidebarFooterProps> = ({
  children,
  collapsed,
  ...rest
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingBottom: "20px",
      }}
    >
      {collapsed ? (
        <StyledCollapsedSidebarFooter href={codeUrl} target="_blank">
          <NewspaperIcon height={20} />
        </StyledCollapsedSidebarFooter>
      ) : (
        <StyledSidebarFooter {...rest}>
          <div style={{ marginBottom: "12px" }}>
            <NewspaperIcon height={20} />
          </div>
          <Typography fontWeight={600}>Banner informativo</Typography>
          <Typography
            variant="caption"
            style={{ letterSpacing: 1, opacity: 0.7 }}
          >
            {/* V {packageJson.version} */}
            Espacio informativo
          </Typography>
          <br />
          <div style={{ marginTop: "16px" }}>
            <StyledButton href={codeUrl} target="_blank">
              <Typography variant="caption" color="#607489" fontWeight={600}>
                Acceder
              </Typography>
            </StyledButton>
          </div>
        </StyledSidebarFooter>
      )}
    </div>
  );
};
