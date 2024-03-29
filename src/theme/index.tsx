import { useMemo } from "react";
// @mui
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeOptions,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
// components
import { useSettingContext } from "./SettingContext";
//
import palette from "./palette";
import typography from "./typography";
import shadows from "./shadows";
import customShadows from "./customShadows";
import componentsOverride from "./overrides";
import GlobalStyles from "./globalStyles";
import { presets } from "./preset";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const { themeMode, themeColorPreset } = useSettingContext();
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: { ...palette(themeMode), primary: themeColorPreset },
      typography,
      shape: { borderRadius: 8 },
      shadows: shadows(themeMode),
      customShadows: customShadows(themeMode),
    }),
    [themeMode, themeColorPreset]
  );

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
