import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Пенис</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.2)" />
      <Text style={styles.subtitle}>Это моё приложение</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  test:{
    zIndex: 30,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffdbac',
  },
  subtitle: {
    fontSize: 60,
    color: '#ff37ac',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '50%',
  },
});
