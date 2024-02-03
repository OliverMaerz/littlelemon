import * as React from 'react';
import {Text, View, Image, Pressable} from 'react-native'; // Import Pressable

/**
 * Welcome screen component
 * @param navigation
 * @returns {JSX.Element}
 * @constructor
 */
const WelcomeScreen = ({ navigation }) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../assets/little-lemon-logo.png')}
      />
      <Text
        style={styles.text}
      >
        Little Lemon, your local Mediterranean Bistro
      </Text>
      {/* Replace Text with Pressable for the Subscribe button */}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Subscribe')}
      >
        {/* Text inside Pressable to display button label */}
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

/**
 * Styles for the WelcomeScreen component
  */
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
    // Remove color from here as it's moved inside Text component
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white', // Apply color to the Text component
    fontWeight: 'bold',
    textAlign: 'center',
  }
};

export default WelcomeScreen;
