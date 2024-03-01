import React from 'react';
// Components
import BasicModal from 'components/modals/BasicModal';
import { Text, View } from 'react-native';
import Button from 'components/buttons/Button';
// Documentation
import PropTypes from 'prop-types';
// Translation
import {useTranslation} from 'react-i18next';
// Styling
import { useTheme } from '@react-navigation/native';
import getStyles from './styles';

/**
 * Modal that displays a message and two buttons: one to confirm (accept, add, change, delete, etc.) and one to cancel.
 */
const ConfirmModal = ({
  isVisible,
  title,
  message = null,
  confirmAction,
  cancelAction,
  cancelText = null,
  confirmText = null,
}) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  return (
    <BasicModal isVisible={isVisible} pressableBackdrop={false}>
      <Text style={[styles.text, styles.title]}>{title}</Text>
      {message && <Text style={styles.text}>{message}</Text>}
      <View style={styles.actions}>
        <Button
          label={cancelText || t('cancel')}
          onPress={cancelAction}
          containerStyle={styles.actionButton}
        />
        <Button
          label={confirmText || t('confirm')}
          onPress={confirmAction}
          containerStyle={styles.actionButton}
        />
      </View>
    </BasicModal>
  );
};

ConfirmModal.propTypes = {
  /**
   * Whether the modal is visible or not. Required.
   */
  isVisible: PropTypes.bool.isRequired,
  /**
   * The main text of the modal. Required.
   */
  title: PropTypes.string.isRequired,
  /**
   * Additional text of the modal. Optional.
   */
  message: PropTypes.string,
  /**
   * Called when the `Confirm` button is pressed. Required.
   */
  confirmAction: PropTypes.func.isRequired,
  /**
   * Called when the `Cancel` button is pressed. Required.
   */
  cancelAction: PropTypes.func.isRequired,
  /**
   * Text displayed on the cancel button. Optional. Defaults to `Cancel`.
   */
  cancelText: PropTypes.string,
  /**
   * Text displayed on the cancel button. Optional. Defaults to `Confirm`.
   */
  confirmText: PropTypes.string,
};

ConfirmModal.defaultProps = {
  message: null,
  cancelText: null,
  confirmText: null,
};

export default ConfirmModal;
