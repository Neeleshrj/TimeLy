import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ListItem } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { msToHuman } from "./helper";

export default function ClassList({ name }) {
  const isFocused = useIsFocused();
  const [modalVisible, setVisible] = useState(false);
  const [classList, setClassList] = React.useState([]);

  const navigation = useNavigation();

  async function getClassList(name) {
    // console.log(classList)
    await AsyncStorage.getItem(name)
      .then((res) => {
        setClassList(JSON.parse(res));
        // setLoading(false);
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    // setLoading(true);
    getClassList(name);
  }, [isFocused]);

  function renderList(l) {
    return (
      <ListItem
        containerStyle={[{ backgroundColor: l.item.color }, styles.container]}
        underlayColor="transparent"
        onLongPress={() =>
          navigation.navigate("editclass", {
            Uid: l.item.uid,
            From: l.item.from,
            To: l.item.to,
            Subname: l.item.subname,
            Type: l.item.type,
            Slot: l.item.slot,
            Color: l.item.color,
            Day: name,
            notifId: l.item.notifId,
          })
        }
      >
        <View>
          <Text style={styles.textColor}>{msToHuman(l.item.from)}</Text>
          <Text style={styles.textColor}>{msToHuman(l.item.to)}</Text>
        </View>
        <ListItem.Content containerStyle={styles.content}>
          <ListItem.Title style={styles.textColor}>
            {l.item.subname}
          </ListItem.Title>
          <ListItem.Subtitle style={styles.textColor}>
            {l.item.type}
          </ListItem.Subtitle>
        </ListItem.Content>
        <View>
          <Text style={styles.textColor}>{l.item.slot}</Text>
        </View>
      </ListItem>
    );
  }

  if (classList != null) {
    if (classList.length != 0) {
      // console.log("not empty list");
      return (
          <FlatList
            data={classList}
            renderItem={renderList}
            keyExtractor={(sub) => sub.uid}
          ></FlatList>
      );
    } else {
      // console.log(" empty list");
      return null;
    }
  } else {
    // console.log(" empty list");
    return null;
  }
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
