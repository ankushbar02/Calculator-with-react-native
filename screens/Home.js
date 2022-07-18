
import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




export default function Home() {

  const [resultText, setResultText] = useState("");
  const [calcText, setCalcText] = useState("");
  const onButtonClick = (text) => {

    setResultText(resultText + text);
  };

  const calculateResult = () => {
    setCalcText(eval(resultText));
  };

  const onOperationClick = (operation) => {
    let operations = ["DEL", "+", "-", "*", "/"];
    if (operation == "=") {
      return calculateResult();
    }
    if (operation == "DEL") {
      return setResultText(
        resultText.toString().substring(0, resultText.length - 1)
        
      );
      
    }
    if (operation == "AC") {
      setResultText("");
      setCalcText(0);
      return;
    }

    if (operations.includes(resultText.toString().split("").pop())) return;
    setResultText(resultText + operation);
  };
  
  return (
    <>





      <View style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
        <View style={styles.upper}>
         
          <View style={{ flex: 3, flexDirection: 'row-reverse', alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 50, paddingRight: 10,paddingBottom:10 }}>{resultText}</Text>
          </View>
          <View style={{ flex: 1.8, paddingRight: 10, paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between', }}>
            <View style={{}}>
              <Text style={{ fontSize: 30, padding: 5,color:'orange' }}>=</Text>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 30, padding: 5 }}>{calcText}</Text>
            </View>
          </View>



        </View>

        <View style={styles.lower}>
          <View style={styles.space}>
            <TouchableOpacity style={styles.button} onPress={() => { onOperationClick('AC') }} >
              <Text style={styles.ac}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { onOperationClick('DEL') }}>
              <Text style={styles.text}>Del</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { onOperationClick('/') }}>
              <Text style={styles.opp}>/</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.space}>
            <TouchableOpacity style={styles.button} onPress={() => { onButtonClick(7) }}>
              <Text style={styles.text}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { onButtonClick(8) }}>
              <Text style={styles.text}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { onButtonClick(9) }}>
              <Text style={styles.text}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { onOperationClick('*') }}>
              <Text style={styles.opp}>*</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.space}>
            <TouchableOpacity style={styles.button} onPress={() => { onButtonClick(4) }}>
              <Text style={styles.text}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { onButtonClick(5) }}>
              <Text style={styles.text}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { onButtonClick(6) }}>
              <Text style={styles.text}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { onOperationClick('-') }}>
              <Text style={styles.opp}>-</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.space}>
            <TouchableOpacity style={styles.button} onPress={() => { onButtonClick(1) }}>
              <Text style={styles.text} >1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { onButtonClick(2) }}>
              <Text style={styles.text}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { onButtonClick(3) }}>
              <Text style={styles.text}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { onOperationClick('+') }}>
              <Text style={styles.opp}>+</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.space}>
            <TouchableOpacity style={styles.button} onPress={() => { onOperationClick('.') }}>
              <Text style={styles.text}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { onButtonClick(0) }}>
              <Text style={styles.text}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.equalbutton} onPress={() => { onOperationClick('=') }}>
              <Text style={styles.equal}>=</Text>
            </TouchableOpacity>

          </View>


        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  upper: {
    flex: 2,
    backgroundColor: '#f8f8f8',

  },

  lower: {
    flex: 3.5,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'space-evenly',
  },

  button: {
    height: 70,
    width: 100,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  opp: {
    fontSize: 20,
    fontWeight: '500',
    color: 'orange'
  },

  ac: {
    fontSize: 20,
    fontWeight: '500',
    color: 'orange'
  },

  equalbutton: {
    height: 70,
    width: 100,
    backgroundColor: 'orange',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'

  },

  equal: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    
  },

  space: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingLeft: 2,
    paddingRight: 2
  },

  text: {
    fontSize: 30,
    fontWeight: '400',

  }

});


