import React, { useState } from 'react';
// Components
import { Modal, View, Text, TextInput } from 'react-native';
import Button from 'components/buttons/Button';
// Documentation
import PropTypes from 'prop-types';
// Styling
import { useTheme } from '@react-navigation/native';
import getStyles from './style';

/**
 * Modal to create an item and add it to the shopping list
 */
const CreateItem = ({ isVisible, onClose }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const handleClose = (reason) => {
    onClose(reason, title, details);
    setTitle('');
    setDetails('');
  };

  return (
    <Modal animationType='fade' visible={isVisible} transparent>
      <View style={styles.backdrop} />
      <View style={styles.alert}>
        <View style={styles.body}>
          <Text style={styles.title}>Add an item</Text>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder='Golden yarn of Ariadne'
              onChangeText={(text) => setTitle(text)}
              defaultValue={title}
              maxLength={50}
              placeholderTextColor={colors.cardMidContrast}
            />
            <TextInput
              style={styles.textInput}
              placeholder='Make sure it is several yards long, that labyrinth is quite big'
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
        </View>
      </View>
    </Modal>
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
