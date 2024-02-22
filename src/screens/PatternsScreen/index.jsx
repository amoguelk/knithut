import React, { useCallback, useState, useEffect } from 'react';
// Components
import Button from 'components/buttons/Button';
import { View } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';
import * as IntentLauncher from 'expo-intent-launcher';
import List from 'components/List';
// Storage
import AsyncStorage from '@react-native-async-storage/async-storage';
// Styling
import getStyles from './styles';

/**
 * Displays a list of saved patterns. The patterns are PDF files that the user has saved on their device.
 */
const PatternsScreen = () => {
  const [patterns, setPatterns] = useState([]);
  const [loading, setLoading] = useState(false);
  const styles = getStyles();

  /**
   * Opens a PDF in the user's default viewer.
   * @param {string} uri The URI to the local document file
   */
  const handleDocOpen = async (uri) => {
    setLoading(true);
    try {
      await IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
        data: uri,
        flags: 1, // Read permission
        type: 'application/pdf',
      });
      setLoading(false);
    } catch (error) {
      console.error('🚩 There was an error opening the document:', { error });
      setLoading(false);
    }
  };

  /**
   * Opens a document selection window
   */
  const handleDocSelect = useCallback(async () => {
    setLoading(true);
    try {
      const response = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
        copyToCacheDirectory: false,
      });
      if (!response.canceled) {
        const fileUri = `${FileSystem.documentDirectory}${response.assets[0].name}`;
        const { uri } = await FileSystem.downloadAsync(
          response.assets[0].uri,
          fileUri
        );
        setPatterns((prev) => [
          ...prev,
          {
            text: response.assets[0].name,
            uri,
            onPress: () => handleDocOpen(response.assets[0].uri),
          },
        ]);
      }
      setLoading(false);
    } catch (error) {
      console.error('🚩 There was an error selecting the document:', { error });
      setLoading(false);
    }
  }, []);

  /**
   * Loads patterns saved in storage when the screen is mounted
   */
  useEffect(() => {
    const loadItems = async () => {
      try {
        const savedPatternsJson = await AsyncStorage.getItem('patterns');
        const savedPatterns = JSON.parse(savedPatternsJson);
        setPatterns(
          savedPatterns.map((p) => {
            const pCopy = { ...p, onPress: () => handleDocOpen(p.uri) };
            return pCopy;
          })
        );
      } catch (error) {
        console.error('🚩 Error loading pattern list:', error);
      }
    };
    loadItems();
  }, []);

  /**
   * Saves patterns in storage when they are modified
   */
  useEffect(() => {
    const saveItems = async () => {
      try {
        const stringifiedList = JSON.stringify(patterns);
        await AsyncStorage.setItem('patterns', stringifiedList);
      } catch (error) {
        console.error('🚩 Error saving pattern list:', error);
      }
    };
    saveItems();
  }, [patterns]);

  return (
    <View style={styles.container}>
      <List
        items={loading ? [] : patterns}
        onItemDelete={() => {}}
        emptyText={loading ? 'Loading...' : 'Your pattern list is empty'}
      />
      <Button label='Select document' onPress={handleDocSelect} />
    </View>
  );
};

export default PatternsScreen;
