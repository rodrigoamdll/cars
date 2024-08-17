import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,FlatList, Image } from 'react-native';

const DATA=[
  {
    id:'1',
    title:"Toyota",
    src: require('./src/imgs/toyota.jpg')
  },
  {
    id:'2',
    title:"Mazda",
    src: require('./src/imgs/mazda.jpg')
  },
  {
    id:'3',
    title:"Mitshubishi",
    src: require('./src/imgs/mitsubishi.jpeg')
  },
];

const Item = ({ title,img }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image style={styles.img} source={img}/>
  </View>
);

export default function App() {
  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.src}/>

  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item=>item.id}      
      ></FlatList>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alingItems: 'center'
  },
  title: {
    fontSize: 32,
  },
  img:{
    width: 200,
    height: 125,
    borderWidth: 2,
    borderColor: '#d35647',
    resizeMode: 'contain',
    margin: 8
  } 
});