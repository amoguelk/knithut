import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';

const languageDetectorPlugin = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async (callback) => {
    try {
      const language = await AsyncStorage.getItem('language');
      if (language) {
        return callback(language);
      }
      return callback(Localization.getLocales().pop().languageCode);
    } catch (error) {
      console.error('🚩 Error loading language', error);
      return null;
    }
  },
  cacheUserLanguage: async (language) => {
    try {
      await AsyncStorage.setItem('language', language);
    } catch (error) {
      console.error('🚩 Error saving language', error);
    }
  },
};

export default languageDetectorPlugin;
