import React from "react";
import styles from "./styles";

import { Page, View, Document, Image, Text } from "@react-pdf/renderer";

function Pdf({ data }) {
  console.log("DATA", data);
  return (
    <Document size="A4">
      <Page>
        <View style={styles.container}>
          <Text>{data.name}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default Pdf;
