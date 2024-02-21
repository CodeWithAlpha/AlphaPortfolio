export type ThemeModeValue = "light" | "dark";
export type ThemeColorPresetValue =
  | "cyan"
  | "purple"
  | "blue"
  | "orange"
  | "green"
  | "red";

export type ColorVariants = {
  name: string;
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
};

export type SettingsValueProps = {
  themeMode: ThemeModeValue;
  themeColorPreset: ColorVariants;
};

export type SettingsContextProps = SettingsValueProps & {
  onToggleMode: VoidFunction;
  onChangeColorPreset: (index: number) => void;
};
