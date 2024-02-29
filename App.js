import { SafeAreaView, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import ForYouList from './src/components/ForYouList';

export default function App() {
  return (
    <View style={styles.container}>
      <ForYouList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#eee',
    padding: 10,
    width: '100%',
    height: '100%'
  }
});
