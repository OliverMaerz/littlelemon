import * as React from 'react';
import {Text, View, Image, TextInput, Alert, Pressable} from 'react-native';
import {validateEmail} from '../utils';

/**
 * Subscribe screen component
 * @returns {JSX.Element}
 * @constructor
 */
const SubscribeScreen = () => {
  /* State for email input field */
  const [email, setEmail] = React.useState('');
  /* State for email validation */
  const [emailIsValid, setEmailIsValid] = React.useState(false);

  /**
   * Check if email in input field is valid
   * @param e
   */
  const checkEmail = (text) => {
    console.log('Submitted');
    setEmailIsValid(validateEmail(text));
  }

  return (
    <View>
      <Image style={styles.image} source={require('../assets/little-lemon-logo-grey.png')} />
      <Text style={styles.text}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        onChangeText={(text) => checkEmail(text)}
      />
      <Pressable
        style={emailIsValid ? styles.button : styles.buttonDisabled}
        onPress={() => {
          if(emailIsValid) {
            Alert.alert('', 'Thank you for subscribing, stay tuned!');
          }
        }}
        disabled={!emailIsValid} // Use the emailIsValid state to enable/disable the button
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>

    </View>
  );
};

/**
 * Styles for the SubscribeScreen component
 */
const styles = {
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    width: 150,
    height: 150,
    // center the image
    marginLeft: 'auto',
    marginRight: 'auto',
    resizeMode: 'contain',
    marginTop: 40,
  },
  input: {
    padding: 10,
    width: '80%',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    padding: 20,
    width: '80%',
    backgroundColor: 'olive',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonDisabled: {
    padding: 20,
    width: '80%',
    backgroundColor: 'grey',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }
}

export default SubscribeScreen;
