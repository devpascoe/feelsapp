import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Row from '../components/row';
import Loader from '../components/loader';
import NewPostButton from '../components/newPostButton';
import NewPost from '../components/newPost';
import {getFeed} from '../services/apiServices';

function Feed() {
  const [data, setData] = useState();
  const [showNewPost, setShowNewPost] = useState(false);

  const fetchData = async () => {
    try {
      const data = await getFeed();
      setData(data);
    } catch (err) {
      Alert.alert('Feed is currently unavailable, try again later.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onNewPostPress = () => {
    setShowNewPost(true);
  };

  const handleSave = async emojis => {
    const name = await AsyncStorage.getItem('name');
    const newRecord = {
      id: Math.random(),
      title: emojis,
      created: new Date(),
      name,
    };
    const newData = [newRecord, ...data];
    setData(newData);
    setShowNewPost(false);
  };

  if (!data) {
    return <Loader />;
  }

  if (showNewPost) {
    return (
      <NewPost onCancel={() => setShowNewPost(false)} onSave={handleSave} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Row title={item.title} name={item.name} created={item.created} />
        )}
        keyExtractor={item => item.id}
      />
      <NewPostButton onPress={onNewPostPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Feed;
