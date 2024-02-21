import React, {
  Children,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  ColorVariants,
  SettingsContextProps,
  SettingsValueProps,
} from "./types";
import { defaultSettings } from "./config";
import { presets } from "./preset";

const InitialState: SettingsContextProps = {
  ...defaultSettings,
  onToggleMode: () => {},
  onChangeColorPreset: () => {},
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
  const [settings, setSettings] = useState<SettingsValueProps>(defaultSettings);

  const onToggleMode = useCallback(() => {
    const themeMode = settings.themeMode == "light" ? "dark" : "light";
    setSettings({ ...settings, themeMode });
  }, [setSettings, settings]);

  const onChangeColorPreset = useCallback(
    (index: number) => {
      const themeColor: ColorVariants = presets[index];
      setSettings({ ...settings, themeColorPreset: themeColor });
    },
    [settings, setSettings]
  );

  const value = useMemo(
    () => ({
      ...settings,
      onToggleMode,
      onChangeColorPreset,
    }),
    [settings, onToggleMode, onChangeColorPreset]
  );
  return (
    <>
      <SettingContext.Provider value={value}>
        {children}
      </SettingContext.Provider>
    </>
  );
}
