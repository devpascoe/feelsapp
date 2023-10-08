import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Row from '../components/row';
import Loader from '../components/loader';
import NewPostButton from '../components/newPostButton';
import NewPost from '../components/newPost';
import {getFeed, createPost} from '../services/apiService';

function Feed() {
  const [data, setData] = useState();
  const [showLoader, setShowLoader] = useState(true);
  const [showNewPost, setShowNewPost] = useState(false);

  const fetchData = async () => {
    try {
      setShowLoader(true);
      const data = await getFeed();
      setData(data);
      setShowLoader(false);
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
    setShowLoader(true);
    if (emojis && emojis.length > 0) {
      try {
        const name = await AsyncStorage.getItem('name');
        await createPost(emojis, name);
        await fetchData();
      } catch (err) {
        Alert.alert('Unable to post to Feed currently, try again later.');
      }
    }
    setShowLoader(false);
    setShowNewPost(false);
  };

  if (showLoader) {
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
