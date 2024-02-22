import React, { useState } from 'react';
// Components
import { View, Text, TextInput } from 'react-native';
import BasicModal from 'components/modals/BasicModal';
import Button from 'components/buttons/Button';
// Documentation
import PropTypes from 'prop-types';
// Translation
import {useTranslation} from 'react-i18next';
// Styling
import { useTheme } from '@react-navigation/native';
import getStyles from './styles';

/**
 * Modal to create an item and add it to the shopping list
 */
const CreateItem = ({ isVisible, onClose }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const handleClose = (reason) => {
    onClose(reason, title, details);
    setTitle('');
    setDetails('');
  };

  return (
    <BasicModal
      isVisible={isVisible}
      onClose={() => handleClose('cancel')}
      pressableBackdrop={false}
    >
      <Text style={styles.title}>Add an item</Text>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder={t('item_title_hint')}
          onChangeText={(text) => setTitle(text)}
          defaultValue={title}
          maxLength={50}
          placeholderTextColor={colors.cardMidContrast}
        />
        <TextInput
          style={styles.textInput}
          placeholder={t('item_details_hint')}
          onChangeText={(text) => setDetails(text)}
          defaultValue={details}
          multiline
          maxLength={150}
          placeholderTextColor={colors.cardMidContrast}
        />
      </View>
      <View style={styles.actions}>
        <Button
          label='Cancel'
          onPress={() => handleClose('cancel')}
          containerStyle={styles.actionButton}
        />
        <Button
          label='Add'
          onPress={() => handleClose('add')}
          containerStyle={styles.actionButton}
          disabled={title === ''}
        />
      </View>
    </BasicModal>
  );
};

CreateItem.propTypes = {
  /**
   * Whether the modal is visible or not. Required.
   */
  isVisible: PropTypes.bool.isRequired,
  /**
   * Called when the modal is closed.
   *
   * Params:
   *
   *    - `reason`: The reason why the modal was closed. Can be `cancel` or `add`
   *    - `title`: The title or main text of the item created
   *    - `details`: The details or supplementary text of the item created
   */
  onClose: PropTypes.func.isRequired,
};

export default CreateItem;
