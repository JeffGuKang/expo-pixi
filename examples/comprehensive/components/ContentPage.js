import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import PixiBaseView from './PixiBaseView';
import Dragon from '../Examples/Spine/Dragon';
import Goblin from '../Examples/Spine/Goblin';

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

const ContentPage = ({ route, navigation }) => {
  console.log('route', route.params);
  const {data, title} = route.params;

  // onPress = item => {
  //   const nextData = data[item];

  //   props.navigation.navigate('Page', {
  //     data: nextData,
  //     title: item,
  //   });
  // };

  // require(`./Spine/Dragon.js`)
  return <PixiBaseView app={Goblin} />;
  // return <View></View>;
};

// const Page = props => {
//   const data = () => {
//     return (props.navigation?.state?.params || {}).data || Examples;
//   };

//   const input = Object.keys(data);
//   return <List data={input} onPress={this.onPress} />;
// };

export default ContentPage;
