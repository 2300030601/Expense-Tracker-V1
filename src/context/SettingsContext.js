import React, { createContext, useState, useEffect } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  // Load settings from localStorage
  const getInitialSettings = () => {
    const saved = localStorage.getItem("appSettings");
    return saved
      ? JSON.parse(saved)
      : { username: "", theme: "dark", currency: "₹", notificationEnabled: true };
  };

  const [settings, setSettings] = useState(getInitialSettings());

  // Whenever settings change, update localStorage and theme
  useEffect(() => {
    localStorage.setItem("appSettings", JSON.stringify(settings));
    document.body.className = settings.theme === "light" ? "light-theme" : "dark-theme";
  }, [settings]);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
