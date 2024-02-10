/* eslint-disable react/forbid-prop-types */
import React from 'react';
// Components
import { Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// Documentation
import PropTypes from 'prop-types';
// Styling
import styles from './styles';

/**
 * A Font Awesome icon wrapped in a `Pressable` component
 */
const IconButton = ({
  icon,
  size = null,
  color = null,
  customStyle = {},
  rippleColor = null,
  onPress = () => {},
}) => (
  <Pressable
    onPress={onPress}
    style={{ ...customStyle, ...styles.button }}
    android_ripple={{ color: rippleColor, borderless: true }}
  >
    <FontAwesomeIcon icon={icon} size={size} color={color} />
  </Pressable>
);

IconButton.propTypes = {
  /**
   * The Font Awesome icon that will be used in the button. Required.
   */
  icon: PropTypes.object.isRequired,
  /**
   * The size of the button. Optional. Defaults to the default font size of the project.
   */
  size: PropTypes.number,
  /**
   * The color of the button. Optional. Defaults to black.
   */
  color: PropTypes.string,
  /**
   * Additional styles applied to the button. Optional.
   */
  customStyle: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  /**
   * The color of the Android ripple effect. Optional.
   */
  rippleColor: PropTypes.string,
  /**
   * Called when a single tap is detected. Optional.
   */
  onPress: PropTypes.func,
};

IconButton.defaultProps = {
  size: null,
  color: null,
  customStyle: {},
  rippleColor: null,
  onPress: () => {},
};

export default IconButton;
