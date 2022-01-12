//Providers
import IssueProvider, { IssueContext } from "./contexts/Issue";
//Components
import Issues from "./Issues";

function App() {
  return (
    <IssueProvider url="https://api.github.com/repos/ContentPI/ContentPI/issues">
      <Issues />
    </IssueProvider>
  );
}

export default App;
