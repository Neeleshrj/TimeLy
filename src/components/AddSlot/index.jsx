import React from "react";
import { StyleSheet } from "react-native";
import { ButtonGroup } from "react-native-elements";
import { widthPercentageToDP } from "react-native-responsive-screen";

export default function selectSlots({ type, slot }) {
  const [selectedIndexes1, setSelectedIndexes1] = React.useState([]);
  const [selectedIndexes2, setSelectedIndexes2] = React.useState([]);
  const [selectedIndexes3, setSelectedIndexes3] = React.useState([]);
  const [selectedIndexes4, setSelectedIndexes4] = React.useState([]);
  const [selectedIndexes5, setSelectedIndexes5] = React.useState([]);

  const theorySlotsm1 = ["A1", "B1", "C1", "D1", "E1", "F1", "G1"];
  const theorySlotsm2 = ["TA1", "TB1", "TC1", "TD1", "TE1", "TF1", "TG1"];
  const theorySlotsm3 = ["TAA1", "TBB1", "TCC1", "TDD1", "TE1"];

  const theorySlotsa1 = ["A2", "B2", "C2", "D2", "E2", "F2", "G2"];
  const theorySlotsa2 = ["TA2", "TB2", "TC2", "TD2", "TE2", "TF2", "TG2"];
  const theorySlotsa3 = ["TAA2", "TBB2", "TCC2", "TDD2", "TE2"];

  const labSlotsm1 = ["L1", "L2", "L3", "L4", "L5", "L6"];
  const labSlotsm2 = ["L7", "L8", "L9", "L10", "L11", "L12"];
  const labSlotsm3 = ["L13", "L14", "L15", "L16", "L17", "L18"];
  const labSlotsm4 = ["L19", "L20", "L21", "L22", "L23", "L24"];
  const labSlotsm5 = ["L25", "L26", "L27", "L28", "L29", "L30"];

  const labSlotsa1 = ["L31", "L32", "L33", "L34", "L35", "L36"];
  const labSlotsa2 = ["L37", "L38", "L39", "L40", "L41", "L42"];
  const labSlotsa3 = ["L43", "L44", "L45", "L46", "L14", "L48"];
  const labSlotsa4 = ["L49", "L50", "L51", "L52", "L53", "L54"];
  const labSlotsa5 = ["L55", "L56", "L57", "L58", "L59", "L60"];

  if (type == "Theory" && slot == "Morning") {
    return (
      <>
        <ButtonGroup
          onPress={(index) => setSelectedIndexes1(index)}
          buttons={theorySlotsm1}
          selectMultiple={true}
          selectedIndexes={selectedIndexes1}
          containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          buttonStyle={styles.slots}
          buttonContainerStyle={styles.slotsContainer}
          selectedButtonStyle={styles.slotSelected}
          textStyle={{ color: "#57606f" }}
          underlayColor="none"
        />
        <ButtonGroup
          onPress={(index) => setSelectedIndexes2(index)}
          buttons={theorySlotsm2}
          selectMultiple={true}
          selectedIndexes={selectedIndexes2}
          containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          buttonStyle={styles.slots}
          buttonContainerStyle={styles.slotsContainer}
          selectedButtonStyle={styles.slotSelected}
          textStyle={{ color: "#57606f" }}
        />
        <ButtonGroup
          onPress={(index) => setSelectedIndexes3(index)}
          buttons={theorySlotsm3}
          selectMultiple={true}
          selectedIndexes={selectedIndexes3}
          containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          buttonStyle={styles.slots}
          buttonContainerStyle={styles.slotsContainer}
          selectedButtonStyle={styles.slotSelected}
          textStyle={{ color: "#57606f" }}
        />
      </>
    );
  } else if (type == "Theory" && slot == "Afternoon") {
    return (
      <>
        <ButtonGroup
          onPress={(index) => setSelectedIndexes1(index)}
          buttons={theorySlotsa1}
          selectMultiple={true}
          selectedIndexes={selectedIndexes1}
          containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          buttonStyle={styles.slots}
          buttonContainerStyle={styles.slotsContainer}
          selectedButtonStyle={styles.slotSelected}
          textStyle={{ color: "#57606f" }}
          underlayColor="none"
        />
        <ButtonGroup
          onPress={(index) => setSelectedIndexes2(index)}
          buttons={theorySlotsa2}
          selectMultiple={true}
          selectedIndexes={selectedIndexes2}
          containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          buttonStyle={styles.slots}
          buttonContainerStyle={styles.slotsContainer}
          selectedButtonStyle={styles.slotSelected}
          textStyle={{ color: "#57606f" }}
        />
        <ButtonGroup
          onPress={(index) => setSelectedIndexes3(index)}
          buttons={theorySlotsa3}
          selectMultiple={true}
          selectedIndexes={selectedIndexes3}
          containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          buttonStyle={styles.slots}
          buttonContainerStyle={styles.slotsContainer}
          selectedButtonStyle={styles.slotSelected}
          textStyle={{ color: "#57606f" }}
        />
      </>
    );
  } else if (type == "Lab" && slot == "Morning") {
    return (
      <>
        <ButtonGroup
          onPress={(index) => setSelectedIndexes1(index)}
          buttons={labSlotsm1}
          selectMultiple={true}
          selectedIndexes={selectedIndexes1}
          containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          buttonStyle={styles.slots}
          buttonContainerStyle={styles.slotsContainer}
          selectedButtonStyle={styles.slotSelected}
          textStyle={{ color: "#57606f" }}
          underlayColor="none"
        />
        <ButtonGroup
          onPress={(index) => setSelectedIndexes2(index)}
          buttons={labSlotsm2}
          selectMultiple={true}
          selectedIndexes={selectedIndexes2}
          containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          buttonStyle={styles.slots}
          buttonContainerStyle={styles.slotsContainer}
          selectedButtonStyle={styles.slotSelected}
          textStyle={{ color: "#57606f" }}
        />
        <ButtonGroup
          onPress={(index) => setSelectedIndexes3(index)}
          buttons={labSlotsm3}
          selectMultiple={true}
          selectedIndexes={selectedIndexes3}
          containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          buttonStyle={styles.slots}
          buttonContainerStyle={styles.slotsContainer}
          selectedButtonStyle={styles.slotSelected}
          textStyle={{ color: "#57606f" }}
        />
        <ButtonGroup
          onPress={(index) => setSelectedIndexes4(index)}
          buttons={labSlotsm4}
          selectMultiple={true}
          selectedIndexes={selectedIndexes4}
          containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          buttonStyle={styles.slots}
          buttonContainerStyle={styles.slotsContainer}
          selectedButtonStyle={styles.slotSelected}
          textStyle={{ color: "#57606f" }}
        />
        <ButtonGroup
          onPress={(index) => setSelectedIndexes5(index)}
          buttons={labSlotsm5}
          selectMultiple={true}
          selectedIndexes={selectedIndexes5}
          containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          buttonStyle={styles.slots}
          buttonContainerStyle={styles.slotsContainer}
          selectedButtonStyle={styles.slotSelected}
          textStyle={{ color: "#57606f" }}
        />
      </>
    );
  } else {
    return (
      <>
        <ButtonGroup
          onPress={(index) => setSelectedIndexes1(index)}
          buttons={labSlotsa1}
          selectMultiple={true}
          selectedIndexes={selectedIndexes1}
          containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          buttonStyle={styles.slots}
          buttonContainerStyle={styles.slotsContainer}
          selectedButtonStyle={styles.slotSelected}
          textStyle={{ color: "#57606f" }}
          underlayColor="none"
        />
        <ButtonGroup
          onPress={(index) => setSelectedIndexes2(index)}
          buttons={labSlotsa2}
          selectMultiple={true}
          selectedIndexes={selectedIndexes2}
          containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          buttonStyle={styles.slots}
          buttonContainerStyle={styles.slotsContainer}
          selectedButtonStyle={styles.slotSelected}
          textStyle={{ color: "#57606f" }}
        />
        <ButtonGroup
          onPress={(index) => setSelectedIndexes3(index)}
          buttons={labSlotsa3}
          selectMultiple={true}
          selectedIndexes={selectedIndexes3}
          containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          buttonStyle={styles.slots}
          buttonContainerStyle={styles.slotsContainer}
          selectedButtonStyle={styles.slotSelected}
          textStyle={{ color: "#57606f" }}
        />
        <ButtonGroup
          onPress={(index) => setSelectedIndexes4(index)}
          buttons={labSlotsa4}
          selectMultiple={true}
          selectedIndexes={selectedIndexes4}
          containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          buttonStyle={styles.slots}
          buttonContainerStyle={styles.slotsContainer}
          selectedButtonStyle={styles.slotSelected}
          textStyle={{ color: "#57606f" }}
        />
        <ButtonGroup
          onPress={(index) => setSelectedIndexes5(index)}
          buttons={labSlotsa5}
          selectMultiple={true}
          selectedIndexes={selectedIndexes5}
          containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          buttonStyle={styles.slots}
          buttonContainerStyle={styles.slotsContainer}
          selectedButtonStyle={styles.slotSelected}
          textStyle={{ color: "#57606f" }}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  slots: {
    // backgroundColor: 'red',
    shadowColor: "#fff",
    borderRadius: 20,
  },
  slotsContainer: {
    backgroundColor: "#ced6e0",
    borderRadius: 20,
    marginHorizontal: widthPercentageToDP("0.5%"),
  },
  slotSelected: {
    backgroundColor: "#fc5c65",
  },
});
