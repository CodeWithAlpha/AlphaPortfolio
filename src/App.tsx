import { Typography } from "@mui/material";
import ThemeProvider from "./theme";
import { useSettingContext } from "./theme/SettingContext";

function App() {
  return (
    <ThemeProvider>
      <Typography color="text.primary">Change Mode</Typography>
    </ThemeProvider>
  );
}

export default App;
