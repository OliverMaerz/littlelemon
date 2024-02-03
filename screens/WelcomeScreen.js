import * as React from 'react';
import {Text, View} from 'react-native';
import { Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../assets/little-lemon-logo.png')}
      />
      <Text
        style={styles.text}
        onPress={() => navigation.navigate('Subscribe')}
      >
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Text
        style={styles.button}
        onPress={() => navigation.navigate('Subscribe')}
      >
        Subscribe
      </Text>
    </View>
  );
};

const styles = {
  image: {
    width: 300,
    height: 300,
    // center the image
    marginLeft: 'auto',
    marginRight: 'auto',
    resizeMode: 'contain',
    marginTop: 100,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    padding: 20,
    width: '80%',
    backgroundColor: 'olive',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    borderRadius: 10,
  },
};


export default WelcomeScreen;
