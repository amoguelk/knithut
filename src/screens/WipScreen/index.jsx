import React, { useEffect, useState } from 'react';
// Components
import { Text, View } from 'react-native';
import Stopwatch from 'screens/WipScreen/Stopwatch';
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

  const [stopwatchStart, setStopwatchStart] = useState(dayjs());
  const [stopwatchActive, setStopwatchActive] = useState(false);
  const [stopwatchOffset, setStopwatchOffset] = useState(0);

  // Loads WIP saved in storage when the component is mounted
  useEffect(() => {
    const loadWip = async () => {
      setLoading(true);
      try {
        const savedWipJson = await AsyncStorage.getItem('wip');
        const savedWip = JSON.parse(savedWipJson);
        setStopwatchActive(savedWip.stopwatchActive);
        if (savedWip.stopwatchActive) {
          setStopwatchStart(dayjs(savedWip.stopwatchStart));
        } else {
          setStopwatchStart(
            dayjs().subtract(savedWip.stopwatchOffset, 'second')
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
          stopwatchStart: stopwatchStart.toString(),
          stopwatchOffset,
          stopwatchActive,
        });
        await AsyncStorage.setItem('wip', stringifiedWip);
      } catch (error) {
        console.error('🚩 Error saving WIP:', error);
      }
    };
    saveWip();
  }, [stopwatchStart, stopwatchOffset, stopwatchActive]);

  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {loading || (
        <View>
          <Text style={styles.sectionTitle}>{t('stopwatch')}</Text>
          <Stopwatch
            startTime={stopwatchStart}
            setStartTime={setStopwatchStart}
            active={stopwatchActive}
            setActive={setStopwatchActive}
            offset={stopwatchOffset}
            setOffset={setStopwatchOffset}
          />
        </View>
      )}
    </View>
  );
};

export default WipScreen;
