import { LayoutProvider } from "../context";
import { LayoutProps } from "../interfaces";
import ProtectedLayout from "./ProtectedLayout";

function ProviderLayoutContainer({ children, version }: LayoutProps) {
  return (
    <LayoutProvider>
      <ProtectedLayout version={version}>{children}</ProtectedLayout>
    </LayoutProvider>
  );
}

export default ProviderLayoutContainer;
