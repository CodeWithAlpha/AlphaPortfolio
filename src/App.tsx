import { useSettingContext } from "./theme/SettingContext";
import Header from "./components/Header";
import { Stack } from "@mui/material";
import Home from "./pages/Home";

function App() {
  const { onToggleMode, onChangeColorPreset } = useSettingContext();

  return (
    <Home>
      <Header />
    </Home>
  );
}

export default App;
