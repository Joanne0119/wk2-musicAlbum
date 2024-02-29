import { StyleSheet ,Text, View, Image, FlatList } from 'react-native';
import AlbumsCard from './AlbumsCard';
import albumListItem from '../../data/albumListItem.json'

const AlbumsList = () => {
  return (
    <View>
      {/* <AlbumsCard album={albumListItem[0]} /> */}
      <FlatList
        style={styles.flat}
        data={albumListItem}
        renderItem={({ item }) => <AlbumsCard album={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  
});
export default AlbumsList;