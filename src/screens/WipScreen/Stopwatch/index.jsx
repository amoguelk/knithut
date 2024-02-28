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
import dayjs from 'dayjs';
// Translation
import { useTranslation } from 'react-i18next';
// Documentation
import PropTypes from 'prop-types';
// Styling
import { useTheme } from '@react-navigation/native';
import getStyles from './styles';

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
    const msElapsed = -startTime.diff();
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

  const handleStartPause = () => {
    if (!active) {
      setActive(true);
      setStartTime(dayjs().subtract(offset, 'second'));
    } else {
      setActive(false);
      setOffset(Math.floor(-startTime.diff() / 1000));
    }
  };

  const handleReset = () => {
    clearInterval(ref.current);
    setActive(false);
    setDisplayTime({ h: '00', m: '00', s: '00' });
    setOffset(0);
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
            size={25}
            customStyle={styles.iconButton(25)}
            icon={faRotateLeft}
            rippleColor={colors.border}
            onPress={handleReset}
          />
          <IconButton
            color={colors.text}
            size={40}
            customStyle={styles.iconButton(40)}
            icon={active ? faPause : faPlay}
            rippleColor={colors.primary}
            onPress={handleStartPause}
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
  startTime: PropTypes.instanceOf(dayjs.Dayjs).isRequired,
  setStartTime: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  offset: PropTypes.number.isRequired,
  setOffset: PropTypes.func.isRequired,
};

export default Stopwatch;
