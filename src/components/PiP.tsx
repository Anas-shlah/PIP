import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useLayoutEffect} from 'react';
import {enterPictureInPictureMode} from 'nelumbo-react-native-picture-in-picture';

export const PiP = (props: {
  [x: string]: any;
  start: boolean;
  ComponentPiP: JSX.Element;
}) => {
  const {start, ComponentPiP, ...rest} = props;
  const {width, height} = Dimensions.get('window');
  const [diWidth, SetdiWidth] = useState(width);
  const [diHeight, SetdiHeight] = useState(height);
  const [startL, setStartL] = useState(start);
  const [ismode, setismode] = useState(false);

  const Elimet = <View>{ComponentPiP}</View>;

  useEffect(() => {
    if (diWidth > 300) {
      setismode(false);
    }

    if (diWidth < 300) {
      setismode(true);
    }
  }, [diWidth]);

  useEffect(() => {
    if (ismode == false) {
      setStartL(false);
    }
    if (ismode == true) {
      setStartL(true);
    }
  }, [ismode]);

  if (startL == true) {
    enterPictureInPictureMode();
    return (
      <View
        onLayout={event => {
          const {layout} = event.nativeEvent;
          SetdiHeight(layout.height);
          SetdiWidth(layout.width);
        }}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 0,
        }}>
        {Elimet}
      </View>
    );
  } else if (startL == false) {
    return (
      <View
        {...rest}
        onLayout={event => {
          const {layout} = event.nativeEvent;
          SetdiHeight(layout.height);
          SetdiWidth(layout.width);
        }}></View>
    );
  } else {
    console.log('I`m elseeeeeee');

    return <View></View>;
  }
};

export default PiP;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
});
