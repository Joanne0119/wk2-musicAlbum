import { StyleSheet, Text, FlatList, View } from 'react-native';
import albumListItem from '../../data/albumListItem.json'
import AlbumCard from './AlbumCard';

const ForYouList = ({list}) => {
  return (
    <View>
      <Text style={styles.category}>For You</Text>
      <FlatList
        data={albumListItem}
        renderItem={({ item }) => <AlbumCard song={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }} //make the gap between components
      />
    </View>
  )};

const styles = StyleSheet.create({
  category: {
    fontSize: 40,
    fontWeight: 'bold',
    padding: 20
  }
});

export default ForYouList;