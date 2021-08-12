import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const classlist = [
    {
        subname: 'CSE3024',
        type: 'Theory',
        from: '08:00',
        to: '08:50',
        slot: 'A1'
    },
    {
        subname: 'CSE4001',
        type: 'Theory',
        from: '08:55',
        to: '09:45',
        slot: 'F1'
    },
]

//function to retrieve data from storage according day(specified by tab nav)


export default function ClassList() {
  return classlist.map((l, i) => (
    <ListItem
      containerStyle={[{ backgroundColor: "#26de81" }, styles.container]}
      key={i}
    >
      <View>
        <Text style={styles.textColor}>{l.from}</Text>
        <Text style={styles.textColor}>{l.to}</Text>
      </View>
      <ListItem.Content containerStyle={styles.content}>
        <ListItem.Title style={styles.textColor}>{l.subname}</ListItem.Title>
        <ListItem.Subtitle style={styles.textColor}>{l.type}</ListItem.Subtitle>
      </ListItem.Content>
      <View>
        <Text style={styles.textColor}>{l.slot}</Text>
      </View>
    </ListItem>
  ));
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp("1.5%"),
    marginTop: hp("1%"),
    borderRadius: 10,
  },
  textColor: {
    color: "#fff",
  },
  content: {
    color: "#fff",
  },
});
