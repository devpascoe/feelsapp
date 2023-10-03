import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Keyboard,
  Pressable,
} from 'react-native';
import Button from './button';

function NewPost(props) {
  const {onCancel, onSave} = props;
  const [emojis, setEmojis] = useState('');

  const updateWithValidEmojis = text => {
    const emojiRegex = /[\p{Emoji}]/gu;
    const emojisOnly = text.match(emojiRegex);
    if (emojisOnly) {
      setEmojis(emojisOnly.join(''));
    } else {
      setEmojis('');
    }
  };

  const renderEmojiShortcut = emoji => {
    return (
      <Pressable onPress={() => updateWithValidEmojis(emojis + emoji)}>
        <Text style={styles.emoji}>{emoji}</Text>
      </Pressable>
    );
  };

  return (
    <Pressable
      onPress={() => {
        Keyboard.dismiss();
      }}
      style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.actionsContainer}>
          <Button text="Cancel" outline={true} onPress={onCancel} />
          <Button text="Save" onPress={() => onSave(emojis)} />
        </View>
        <Text>What emoji's currently represent your mood?</Text>
        <TextInput
          style={styles.input}
          placeholder="Emoji's only..."
          value={emojis}
          onChangeText={text => updateWithValidEmojis(text)}
        />
        <View style={styles.popularContainer}>
          <Text>Popular</Text>
          <View style={styles.emojisContainer}>
            {renderEmojiShortcut('😁')}
            {renderEmojiShortcut('😎')}
            {renderEmojiShortcut('❤️')}
            {renderEmojiShortcut('😅')}
            {renderEmojiShortcut('🤯')}
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    padding: 10,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    marginTop: 10,
    paddingHorizontal: 14,
    paddingVertical: 2,
    height: 44,
    fontSize: 32,
    backgroundColor: '#ffffff',
    borderColor: '#999999',
    borderWidth: 1,
    borderRadius: 4,
  },
  popularContainer: {
    paddingTop: 20,
  },
  emojisContainer: {
    flexDirection: 'row',
  },
  emoji: {
    fontSize: 36,
    marginRight: 10,
  },
});

export default NewPost;
