import { CardExample } from "./components";
import { ProviderLayoutContainer } from "./layout";

function App() {
  return (
    <ProviderLayoutContainer version="1.0.0">
      <>
        <br />
        <CardExample />
        <br />
        <CardExample />
        <br />
        <CardExample />
        <br />
        <CardExample />
        <br />
      </>
    </ProviderLayoutContainer>
  );
}

export default App;
