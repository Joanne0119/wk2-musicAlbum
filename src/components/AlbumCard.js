import { StyleSheet ,Text, View, Image, Pressable } from 'react-native';

const AlbumCard = ({ song }) => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image} 
        source={{ uri: song.image}}
      />
      <Text numberOfLines={1} style={styles.title}>{song.name}</Text>
      <View style={styles.artistInfo}>
        <Image 
          style={styles.artistImage}
          source={{ uri: song.artistImage}}
        />
        <Text numberOfLines={1} style={styles.artist}>{song.artist}</Text>
      </View>
      <Pressable style={styles.startButton}>
        <Text>▲</Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 12,
    flex: 1,
    maxWidth: '50%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    aspectRatio: 1, //the height will automatically be caculated
    borderRadius: 10,
    marginBottom: 6
  },
  artistInfo : {
    flexDirection: 'row',
  },
  artistImage: {
    borderRadius: 30,
    width: 16,
    height: 16,
    marginRight: 8
  },
  artist : {
    flex: 1
  },
  startButton: {
    transform: [{rotate: '90deg'}],
    backgroundColor: '#eee',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 22,
    width: 22,
    alignSelf: 'flex-end',
    marginTop: 5,
    textAlign: 'center'
  }
});

export default AlbumCard;