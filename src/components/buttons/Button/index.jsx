import React from 'react';
// Components
import { View, Pressable, Text } from 'react-native';
// Documentation
import PropTypes from 'prop-types';
// Styling
import { useTheme } from '@react-navigation/native';
import getStyles from './styles';

/**
 * A simple button component.
 */
const Button = ({
  label,
  onPress = () => {},
  containerStyle = {},
  disabled = false,
}) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View style={containerStyle}>
      <Pressable
        style={[styles.button, disabled ? styles.disabled : styles.enabled]}
        onPress={onPress}
        android_ripple={{ color: colors.border }}
        disabled={disabled}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};

Button.propTypes = {
  /**
   * The text on the button. Required.
   */
  label: PropTypes.string.isRequired,
  /**
   * Called when a single tap is detected. Optional.
   */
  onPress: PropTypes.func,
  /**
   * Additional styles applied to the `View` that contains the button. Optional.
   */
  containerStyle: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  /**
   * Whether the button is disabled or not. Optional. Defaults to `false`.
   */
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onPress: () => {},
  containerStyle: {},
  disabled: false,
};

export default Button;
