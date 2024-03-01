import React, { useEffect, useState } from 'react';
// Components
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import Stopwatch from 'screens/WipScreen/Stopwatch';
import RowCounter from 'screens/WipScreen/RowCounter';
import dayjs from 'dayjs';
// Storage
import AsyncStorage from '@react-native-async-storage/async-storage';
// Translation
import { useTranslation } from 'react-i18next';
// Styling
import { useTheme } from '@react-navigation/native';
import getStyles from './styles';

const WipScreen = () => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [patternName, setPatternName] = useState('');
  const [patternSection, setPatternSection] = useState('');
  const [row, setRow] = useState(0);
  const [notes, setNotes] = useState('');
  // Stopwatch states
  const [stopwatchStart, setStopwatchStart] = useState(dayjs().toString());
  const [stopwatchActive, setStopwatchActive] = useState(false);
  const [stopwatchOffset, setStopwatchOffset] = useState(0);

  // Loads WIP saved in storage when the component is mounted
  useEffect(() => {
    const loadWip = async () => {
      setLoading(true);
      try {
        const savedWipJson = await AsyncStorage.getItem('wip');
        const savedWip = JSON.parse(savedWipJson);
        setRow(savedWip.row || 0);
        setPatternName(savedWip.patternName || '');
        setPatternSection(savedWip.patternSection || '');
        setNotes(savedWip.notes || '');
        setStopwatchActive(savedWip.stopwatchActive);
        if (savedWip.stopwatchActive) {
          setStopwatchStart(savedWip.stopwatchStart);
        } else {
          setStopwatchStart(
            dayjs().subtract(savedWip.stopwatchOffset, 'second').toString()
          );
        }
        setStopwatchOffset(savedWip.stopwatchOffset);
      } catch (error) {
        console.error('🚩 Error loading stopwatch time:', error);
      } finally {
        setLoading(false);
      }
    };
    loadWip();
  }, []);

  // Saves WIP in storage when changed
  useEffect(() => {
    const saveWip = async () => {
      try {
        const stringifiedWip = JSON.stringify({
          row,
          patternName,
          patternSection,
          notes,
          stopwatchStart,
          stopwatchOffset,
          stopwatchActive,
        });
        await AsyncStorage.setItem('wip', stringifiedWip);
      } catch (error) {
        console.error('🚩 Error saving WIP:', error);
      }
    };
    saveWip();
  }, [
    stopwatchStart,
    stopwatchOffset,
    stopwatchActive,
    notes,
    patternName,
    patternSection,
    row,
  ]);

  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {loading || (
        <View>
          <View style={[styles.subContainer, styles.infoContainer]}>
            <RowCounter row={row} setRow={setRow} />
            <View style={styles.patternInfo}>
              <TextInput
                style={[styles.text, styles.title, styles.simpleInput]}
                onChangeText={(text) => setPatternName(text)}
                defaultValue={patternName}
                placeholder={t('pattern_name')}
                maxLength={20}
                placeholderTextColor={colors.text}
              />
              <TextInput
                style={[styles.text, styles.simpleInput]}
                onChangeText={(text) => setPatternSection(text)}
                defaultValue={patternSection}
                placeholder={t('pattern_section')}
                multiline
                numberOfLines={2}
                maxLength={50}
                placeholderTextColor={colors.text}
              />
            </View>
          </View>
          {/* NOTES */}
          <View style={styles.subContainer}>
            <Text style={[styles.text, styles.title]}>{t('notes')}</Text>
            <TextInput
              style={styles.notesInput}
              onChangeText={(text) => setNotes(text)}
              defaultValue={notes}
              multiline
              maxLength={500}
            />
          </View>
          {/* STOPWATCH */}
          <View style={styles.subContainer}>
            <Stopwatch
              startTime={stopwatchStart}
              setStartTime={setStopwatchStart}
              active={stopwatchActive}
              setActive={setStopwatchActive}
              offset={stopwatchOffset}
              setOffset={setStopwatchOffset}
            />
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default WipScreen;
