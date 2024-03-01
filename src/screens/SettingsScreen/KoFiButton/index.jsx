import React, { useState } from 'react';
import { View } from 'react-native';
import Button from 'components/buttons/Button';
import ConfirmModal from 'components/modals/ConfirmModal';
// Translation
import {useTranslation} from 'react-i18next';

const KoFiButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { t } = useTranslation();
  return (
    <View>
      <Button label={t('kofi')} onPress={() => setModalVisible(true)} />
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
