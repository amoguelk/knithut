import React, { useEffect, useRef, useState } from 'react';
// Components
import { Text, View } from 'react-native';
import Button from 'components/buttons/Button';
import InfoModal from 'components/modals/InfoModal';
// Translation
import { useTranslation } from 'react-i18next';
// Styling
import { useTheme } from '@react-navigation/native';
import getStyles from './styles';

const Stopwatch = () => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [secretModalVisible, setSecretModalVisible] = useState(false);
  const ref = useRef(null);

  const padNumbers = (num) => (num < 10 ? `0${num}` : String(num));

  useEffect(() => {
    if (isRunning) {
      ref.current = setInterval(() => {
        if (second < 59) setSecond((prev) => prev + 1);
        else {
          setSecond(0);
          if (minute < 59) setMinute((prev) => prev + 1);
          else {
            setMinute(0);
            setHour((prev) => prev + 1);
            if (hour >= 998) {
              setIsRunning(false);
              setSecretModalVisible(true);
            }
          }
        }
      }, 1);
    } else {
      clearInterval(ref.current);
    }
    return () => {
      clearInterval(ref.current);
    };
  }, [isRunning, second]);

  const handleReset = () => {
    clearInterval(ref.current);
    setIsRunning(false);
    setHour(0);
    setMinute(0);
    setSecond(0);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>
          {padNumbers(hour)} : {padNumbers(minute)} : {padNumbers(second)}
        </Text>
      </View>
      <Button
        label={isRunning ? 'STOP' : 'START'}
        onPress={() => setIsRunning((prev) => !prev)}
      />
      <Button label='RESET' onPress={handleReset} />
      <InfoModal
        isVisible={secretModalVisible}
        title={t('wow')}
        message={t('stopwatch_limit_message')}
        confirmAction={() => {
          setSecretModalVisible(false);
          handleReset();
        }}
      />
    </View>
  );
};

export default Stopwatch;
