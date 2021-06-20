import { FC } from "react";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";

import Page from "ui/Page";

let theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#000000",
    },
  },
});

theme = responsiveFontSizes(theme);

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Page />
    </div>
  </ThemeProvider>
);

export default App;
