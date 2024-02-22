import React from 'react';
// Components
import { Modal, View, Pressable } from 'react-native';
// Documentation
import PropTypes from 'prop-types';
// Styling
import { useTheme } from '@react-navigation/native';
import getStyles from './styles';

/**
 * Basic structure of a modal
 */
const BasicModal = ({
  isVisible,
  onClose = () => {},
  pressableBackdrop = true,
  children,
}) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <Modal animationType='fade' visible={isVisible} transparent>
      <Pressable
        style={styles.backdrop}
        onPress={pressableBackdrop ? onClose : () => {}}
      />
      <View style={styles.alert}>
        <View style={styles.body}>{children}</View>
      </View>
    </Modal>
  );
};

BasicModal.propTypes = {
  /**
   * Whether the modal is visible or not. Required.
   */
  isVisible: PropTypes.bool.isRequired,
  /**
   * Called when the modal is closed by pressing the backdrop. Optional.
   */
  onClose: PropTypes.func,
  /**
   * Whether the modal can be closed by pressing the backdrop. Optional. True by default.
   */
  pressableBackdrop: PropTypes.bool,
  /**
   * The contents of the modal. Required.
   */
  children: PropTypes.node.isRequired,
};

BasicModal.defaultProps = {
  pressableBackdrop: true,
  onClose: () => {},
};

export default BasicModal;
