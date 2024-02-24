import React from 'react';
// Components
import BasicModal from 'components/modals/BasicModal';
import { Text, View } from 'react-native';
import Button from 'components/buttons/Button';
// Documentation
import PropTypes from 'prop-types';
// Translation
import { useTranslation } from 'react-i18next';
// Styling
import { useTheme } from '@react-navigation/native';
import getStyles from './styles';

/**
 * Modal that displays a message and a single button to dismiss it.
 */
const InfoModal = ({
  isVisible,
  title,
  message = null,
  confirmAction,
  confirmText = null,
}) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  return (
    <BasicModal isVisible={isVisible} pressableBackdrop={false}>
      <Text style={[styles.text, styles.title]}>{title}</Text>
      {message && <Text style={styles.text}>{message}</Text>}
      <Button
        label={confirmText || t('ok')}
        onPress={confirmAction}
        containerStyle={styles.actionButton}
      />
    </BasicModal>
  );
};

InfoModal.propTypes = {
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
   * Called when the `OK` button is pressed. Required.
   */
  confirmAction: PropTypes.func.isRequired,
  /**
   * Text displayed on the cancel button. Optional. Defaults to `OK`.
   */
  confirmText: PropTypes.string,
};

InfoModal.defaultProps = {
  message: null,
  confirmText: null,
};

export default InfoModal;
