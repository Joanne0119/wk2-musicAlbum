import { StyleSheet ,Text, View, Image, Pressable } from 'react-native';

const AlbumCard = ({ song }) => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image} 
        source={{ uri: song.image}}
      />
      <Image 
        style={styles.artistImage}
        source={{ uri: song.artistImage}}
      />
      <Text style={styles.title}>{song.name}</Text>
      <Text style={styles.artist}>{song.artist}</Text>
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
  artistImage: {
    borderRadius: 30
  },
  startButton: {
    transform: [{rotate: '90deg'}],
    backgroundColor: '#eee',
    padding: 5,
    borderRadius: 20,
    width: 20
  }
});

export default AlbumCard;