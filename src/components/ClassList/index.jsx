import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function ClassList() {
  return (
      <ListItem containerStyle={[{backgroundColor: '#26de81'},styles.container]}>
        <View>
            <Text style={styles.textColor}>08:00</Text>
            <Text style={styles.textColor}>08:50</Text>
        </View>  
        <ListItem.Content containerStyle={styles.content}>
          <ListItem.Title style={styles.textColor}>CSE3024</ListItem.Title>
          <ListItem.Subtitle style={styles.textColor}>Lab</ListItem.Subtitle>
        </ListItem.Content>
        <View>
            <Text style={styles.textColor}>A1</Text>
        </View>
      </ListItem>
  );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: wp('1.5%'),
        marginTop: hp('1%'),
        borderRadius: 10,
    },
    textColor: {
        color: "#fff"
    },
    content: {
        color: '#fff'
    }
})