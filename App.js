
import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  useColorScheme,
  View,
  Switch
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from '../myapp/screens/Home';
import HomeDark from './screens/HomeDark';





export default function App() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  console.log(isEnabled)
  return (
    <>





      {
        isEnabled ?
          <>
            <View style={styles.container}> 
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <View style={{}}>
                  <Text style={{ fontSize: 20, padding: 5, color: 'orange' }}>Calculator</Text>
                </View>
                <View style={{}}>
                  <Switch
                    trackColor={{ false: "white", true: "orange" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "orange"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{ padding: 5 }}
                  />
                </View>
              </View>
              <HomeDark style={{ flex: 5.8 }} />
            </View>
          </>

          :
          <>
            <View style={styles.container2}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <View style={{}}>
                  <Text style={{ fontSize: 20, padding: 5, color: 'orange' }}>Calculator</Text>
                </View>
                <View style={{}}>
                  <Switch
                    trackColor={{ false: "white", true: "orange" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "orange"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{ padding: 5 }}
                  />
                </View>
              </View>
              <Home style={{ flex: 5.8 }} />
            </View>
          </>

      }



    </>
  );



}

const styles = StyleSheet.create({
  container: {
    flex: 1,

backgroundColor:'#212121'

  },
  container2: {
    flex: 1,

backgroundColor:'#f8f8f8'

  }
})

