import React, { useState } from 'react';
import { View } from 'react-native';
import Button from 'components/buttons/Button';
import ConfirmModal from 'components/modals/ConfirmModal';

const KoFiButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Button label='My Ko-Fi' onPress={() => setModalVisible(true)} />
      <ConfirmModal
        isVisible={modalVisible}
        title='Money'
        message='Give me money please'
        confirmAction={() => setModalVisible(false)}
        cancelAction={() => setModalVisible(false)}
      />
    </View>
  );
};

export default KoFiButton;
