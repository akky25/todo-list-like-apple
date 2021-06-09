import { FC } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Page from "ui/Page";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Page />
    </div>
  </ThemeProvider>
);

export default App;
