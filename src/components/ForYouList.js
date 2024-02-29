import { StyleSheet, Text, FlatList, View } from 'react-native';
import albumListItem from '../../data/songListItem.json'
import AlbumCard from './SognsCard';

const ForYouList = ({list}) => {
  return (
    <View>
      <FlatList
        style={styles.flat}
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
  },
  flat : {
    aspectRatio: 1/3
  }
});

export default ForYouList;