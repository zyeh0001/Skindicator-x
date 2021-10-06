import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { PrintContextConsumer } from "react-to-print";

// Create Document Component
function Print({ sec1, sec2, sec3 }) {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });
  console.log(sec1);
  console.log(sec2);
  console.log(sec3);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{sec1}</Text>
        </View>
        <View style={styles.section}>
          <Text>{sec2}</Text>
        </View>
        <View style={styles.section}>
          <Text>{sec3}</Text>
        </View>
      </Page>
    </Document>
  );
}
export default Print;
