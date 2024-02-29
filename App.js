import { SafeAreaView, StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';
import ForYouList from './src/components/ForYouList';
import AlbumsList from './src/components/AlbumsList';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.category}>Album</Text>
      <AlbumsList/>
      <Text style={styles.category}>For You</Text>
      <ForYouList/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    marginBottom: 30,
    backgroundColor: '#eee',
    padding: 10,
    width: '100%',
    height: '100%'
  },
  category: {
    fontSize: 40,
    fontWeight: 'bold',
    padding: 20
  }
});
