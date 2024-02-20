export type ThemeModeValue = "light" | "dark";

export type SettingsValueProps = {
  themeMode: ThemeModeValue;
};

export type SettingsContextProps = SettingsValueProps & {
  onToggleMode: VoidFunction;
};
