import { StyleSheet ,Text, View, Image, Pressable } from 'react-native';

const AlbumsCard = ({ album }) => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image} 
        source={{ uri: album.image}}
      />
      <View style={styles.info}>
        <Text numberOfLines={1} style={styles.title}>{album.albumName}</Text>
          <Text numberOfLines={1} style={styles.artist}>{album.artist}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 12,
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '18%',
    aspectRatio: 1, //the height will automatically be caculated
    borderRadius: 10,
    marginRight: 15
  }, 
  info: {
    padding: 10
  }
});

export default AlbumsCard;