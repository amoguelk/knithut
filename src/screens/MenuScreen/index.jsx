import React from 'react';
// Components
import { View, Image } from 'react-native';
import NavIcon from 'screens/MenuScreen/NavIcon';
// Documentation
import PropTypes from 'prop-types';
// Translation
import {useTranslation} from 'react-i18next';
// Styling
import { useTheme } from '@react-navigation/native';
import getStyles from './styles';

const HutLogo = require('assets/img/hut.png');
const PatternsIcon = require('assets/img/patterns.png');
const WipIcon = require('assets/img/WIP.png');
const ShoppingIcon = require('assets/img/shopping.png');
const SettingsIcon = require('assets/img/settings.png');

const MenuScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();
  const options = [
    {
      id: 'pattern_icon',
      icon: PatternsIcon,
      label: t('patterns'),
      nav_name: 'patterns',
    },
    { id: 'wip_icon', icon: WipIcon, label: t('wips'), nav_name: 'wips' },
    {
      id: 'shopping_icon',
      icon: ShoppingIcon,
      label: t('shopping_list'),
      nav_name: 'list',
    },
    {
      id: 'settings_icon',
      icon: SettingsIcon,
      label: t('settings'),
      nav_name: 'settings',
    },
  ];

  return (
    <View style={styles.container}>
      <Image source={HutLogo} style={styles.logo} />
      <View style={styles.navContainer}>
        {options.map((option, i) => (
          <NavIcon
            key={option.id}
            icon={option.icon}
            label={option.label}
            onPress={() => navigation.navigate(option.nav_name)}
            style={styles.icon(i)}
          />
        ))}
      </View>
    </View>
  );
};

MenuScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default MenuScreen;
