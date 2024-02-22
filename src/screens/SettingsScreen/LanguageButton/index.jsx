import React, { useState } from 'react';
// Components
import { Text, View } from 'react-native';
import Button from 'components/buttons/Button';
import BasicModal from 'components/modals/BasicModal';
// Translation
import { useTranslation } from 'react-i18next';
// Styling
import { useTheme } from '@react-navigation/native';
import getStyles from './styles';

const LanguageButton = () => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const [modalVisible, setModalVisible] = useState(false);
  const { t, i18n } = useTranslation();

  const languages = [
    { name: 'en', label: 'English' },
    { name: 'es', label: 'Español' },
  ];

  return (
    <View>
      <Button
        label={t('change_language')}
        onPress={() => setModalVisible(true)}
      />
      <BasicModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <Text style={styles.title}>{t('change_language')}</Text>
        {languages.map((lan) => (
          <Button
            key={lan.name}
            label={lan.label}
            onPress={() => {
              i18n.changeLanguage(lan.name);
              setModalVisible(false);
            }}
          />
        ))}
      </BasicModal>
    </View>
  );
};

export default LanguageButton;
