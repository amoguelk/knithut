import React, { useEffect, useState } from 'react';
// Components
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import Stopwatch from 'screens/WipScreen/Stopwatch';
import RowCounter from 'screens/WipScreen/RowCounter';
import dayjs from 'dayjs';
// Storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import storageKeys from '_constants/storageKeys';
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
  const [pattern, setPattern] = useState({
    name: '',
    section: '',
    row: 0,
    notes: '',
  });
  const [stopwatch, setStopwatch] = useState({
    active: false,
    start: dayjs().toString(),
    offset: 0,
  });

  // Loads WIP saved in storage when the component is mounted
  useEffect(() => {
    setLoading(true);
    const loadWip = async () => {
      try {
        const savedWipJson = await AsyncStorage.getItem(storageKeys.APP.WIPS);
        if (savedWipJson) {
          const savedWip = JSON.parse(savedWipJson);
          setPattern(
            savedWip?.pattern || {
              name: '',
              section: '',
              row: 0,
              notes: '',
            }
          );
          setStopwatch({
            active: savedWip?.stopwatch.active || false,
            offset: savedWip?.stopwatch.offset || 0,
            start: savedWip?.stopwatch.active
              ? savedWip?.stopwatch.start || dayjs().toString()
              : dayjs()
                  .subtract(savedWip?.stopwatch.offset, 'second')
                  .toString(),
          });
        }
        setLoading(false);
      } catch (error) {
        console.error('🚩 Error loading saved WIP:', error);
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
          pattern,
          stopwatch,
        });
        await AsyncStorage.setItem(storageKeys.APP.WIPS, stringifiedWip);
      } catch (error) {
        console.error('🚩 Error saving WIP:', error);
      }
    };
    saveWip();
  }, [pattern, stopwatch]);

  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {loading || (
        <View>
          <View style={[styles.subContainer, styles.infoContainer]}>
            <RowCounter
              row={pattern.row}
              setRow={(r) => setPattern((prev) => ({ ...prev, row: r }))}
            />
            <View style={styles.patternInfo}>
              <TextInput
                style={[styles.text, styles.title, styles.simpleInput]}
                onChangeText={(text) =>
                  setPattern((prev) => ({ ...prev, name: text }))
                }
                defaultValue={pattern.name}
                placeholder={t('pattern_name')}
                maxLength={20}
                placeholderTextColor={colors.text}
              />
              <TextInput
                style={[styles.text, styles.simpleInput]}
                onChangeText={(text) =>
                  setPattern((prev) => ({ ...prev, section: text }))
                }
                defaultValue={pattern.section}
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
              onChangeText={(text) =>
                setPattern((prev) => ({ ...prev, notes: text }))
              }
              defaultValue={pattern.notes}
              multiline
              maxLength={500}
            />
          </View>
          {/* STOPWATCH */}
          <View style={styles.subContainer}>
            <Stopwatch
              startTime={stopwatch.start}
              setStartTime={(s) =>
                setStopwatch((prev) => ({ ...prev, start: s }))
              }
              active={stopwatch.active}
              setActive={(a) =>
                setStopwatch((prev) => ({ ...prev, active: a }))
              }
              offset={stopwatch.offset}
              setOffset={(o) =>
                setStopwatch((prev) => ({ ...prev, offset: o }))
              }
            />
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default WipScreen;
