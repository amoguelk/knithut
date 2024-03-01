import React, { useEffect, useRef, useState } from 'react';
// Components
import { Text, View } from 'react-native';
import InfoModal from 'components/modals/InfoModal';
import IconButton from 'components/buttons/IconButton';
import {
  faPause,
  faPlay,
  faRotateLeft,
} from '@fortawesome/free-solid-svg-icons';
import * as Notifications from 'expo-notifications';
import dayjs from 'dayjs';
// Translation
import { useTranslation } from 'react-i18next';
// Documentation
import PropTypes from 'prop-types';
// Styling
import { useTheme } from '@react-navigation/native';
import getStyles from './styles';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

/**
 * A stopwatch component
 */
const Stopwatch = ({
  startTime,
  setStartTime,
  active,
  setActive,
  offset,
  setOffset,
}) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  const [secretModalVisible, setSecretModalVisible] = useState(false);
  const ref = useRef(null);

  const padNumbers = (num) => (num < 10 ? `0${num}` : String(num));

  const calculateDisplayTime = () => {
    const msElapsed = -dayjs(startTime).diff();
    const sElapsed = Math.floor(msElapsed / 1000);
    const mElapsed = Math.floor(sElapsed / 60);
    const hElapsed = Math.floor(mElapsed / 60);
    if (hElapsed <= 999) {
      return {
        h: padNumbers(hElapsed),
        m: padNumbers(mElapsed % 60),
        s: padNumbers(sElapsed % 60),
      };
    }
    setActive(false);
    setSecretModalVisible(true);
    return { h: '00', m: '00', s: '00' };
  };

  const [displayTime, setDisplayTime] = useState(calculateDisplayTime());

  // Create counting interval
  useEffect(() => {
    if (active) {
      ref.current = setInterval(() => {
        setDisplayTime(calculateDisplayTime());
      }, 1000);
    }

    return () => {
      clearInterval(ref.current);
    };
  }, [active]);

  const handleStartPause = async () => {
    if (!active) {
      setActive(true);
      setStartTime(dayjs().subtract(offset, 'second').toString());
      await Notifications.scheduleNotificationAsync({
        content: {
          title: t('stopwatch_running'),
          body: t('stopwatch_running_message'),
          sticky: true,
          autoDismiss: false,
        },
        trigger: null,
      });
    } else {
      setActive(false);
      setOffset(Math.floor(-dayjs(startTime).diff() / 1000));
      await Notifications.dismissAllNotificationsAsync();
    }
  };

  const handleReset = async () => {
    clearInterval(ref.current);
    setActive(false);
    setDisplayTime({ h: '00', m: '00', s: '00' });
    setOffset(0);
    await Notifications.dismissAllNotificationsAsync();
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>
          {displayTime.h} : {displayTime.m} : {displayTime.s}
        </Text>
        <View style={styles.actions}>
          <IconButton
            color={colors.text}
            size={50}
            customStyle={styles.iconButton(50)}
            icon={active ? faPause : faPlay}
            rippleColor={colors.primary}
            onPress={handleStartPause}
          />
          <IconButton
            color={colors.text}
            size={25}
            customStyle={styles.iconButton(25)}
            icon={faRotateLeft}
            rippleColor={colors.border}
            onPress={handleReset}
          />
        </View>
      </View>

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

Stopwatch.propTypes = {
  /**
   * The point from which the stopwatch measures time. Required.
   */
  startTime: PropTypes.string.isRequired,
  /**
   * Function to modify the value of the start time. Required.
   */
  setStartTime: PropTypes.func.isRequired,
  /**
   * Whether the stopwatch is active (running) or not. Required.
   */
  active: PropTypes.bool.isRequired,
  /**
   * Function to modify the stopwatch's active state. Required.
   */
  setActive: PropTypes.func.isRequired,
  /**
   * An offset in seconds that is added to the stopwatch to keep track of pauses. Required.
   */
  offset: PropTypes.number.isRequired,
  /**
   * Function to modify the value of the offset. Required.
   */
  setOffset: PropTypes.func.isRequired,
};

export default Stopwatch;
