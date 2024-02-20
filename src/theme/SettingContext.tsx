import React, {
  Children,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { SettingsContextProps } from "./types";
import { defaultSettings } from "./config";

const InitialState: SettingsContextProps = {
  themeMode: "light",
  onToggleMode: () => {},
};
export const SettingContext = createContext(InitialState);

export const useSettingContext = () => {
  const context = useContext(SettingContext);

  if (!context)
    throw new Error("useSettingsContext must be use inside SettingsProvider");

  return context;
};

type settingProviderProps = {
  children: ReactNode;
};

export function SettingProvider({ children }: settingProviderProps) {
  const [settings, setSettings] = useState(defaultSettings);

  const onToggleMode = useCallback(() => {
    const themeMode = settings.themeMode == "light" ? "dark" : "light";
    setSettings({ ...settings, themeMode });
  }, [setSettings, settings]);

  const value = useMemo(
    () => ({
      ...settings,
      onToggleMode,
    }),
    [settings]
  );
  return (
    <>
      <SettingContext.Provider value={value}>
        {children}
      </SettingContext.Provider>
    </>
  );
}
