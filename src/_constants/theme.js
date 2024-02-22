import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const KHLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#005E71',
    text: '#fff',
    primary: '#6c5353',
    border: '#483737',
    card: '#fff',
    cardContrast: '#1e1e1e',
    cardMidContrast: '#5a5a5a',
    disabled: '#a9a9a9',
  },
};

export const KHDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#002127',
    text: '#fff',
    primary: '#483737',
    border: '#6c5353',
    card: '#1e1e1e',
    cardContrast: '#fff',
    cardMidContrast: '#a9a9a9',
    disabled: '#a9a9a9',
  },
};
