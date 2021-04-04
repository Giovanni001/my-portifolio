import React from "react";
import styles from "./styles";

import { Page, View, Document, Text } from "@react-pdf/renderer";

function Pdf({ data }) {
  return (
    <Document size="A4">
      <Page>
        <View style={styles.sections}>
          <View style={styles.container}>
            {/* Name */}
            <Text style={styles.mainTitle}>{data.name}</Text>
          </View>
          {/* Professional Objectives */}
          <View style={styles.margimBottomDiv}>
            <Text style={styles.title}>Objetivos Profissionais </Text>
            <Text style={styles.description1}>
              {data.professionalObjectives}
            </Text>
          </View>
          {/* Professional 1 Historic  */}
          <View style={styles.margimBottomDiv}>
            <Text style={styles.title}>Historico Profissional </Text>
            <Text style={styles.description1}>
              {data.professionalHistoric1.occupation}
            </Text>
            <Text style={styles.description2}>
              {data.professionalHistoric1.companyName}
            </Text>
            <Text style={styles.description2}>
              {data.professionalHistoric1.description}
            </Text>
          </View>
          {/*  Professional 2 Historic */}
          <View style={styles.margimBottomDiv}>
            <Text style={styles.title}>Historio Profissional </Text>
            <Text style={styles.description1}>
              {data.professionalHistoric2.occupation}
            </Text>
            <Text style={styles.description2}>
              {data.professionalHistoric2.companyName}
            </Text>
            <Text style={styles.description2}>
              {data.professionalHistoric2.description}
            </Text>
          </View>
          {/* Education Historic 1 */}
          <View style={styles.margimBottomDiv}>
            <Text style={styles.title}>Historio Escolar </Text>
            <Text style={styles.description1}>
              {data.educationHistoric1.institutionName}
            </Text>
            <Text style={styles.description2}>
              {data.educationHistoric1.description}
            </Text>
          </View>
          {/* Education Historic 2 */}
          <View style={styles.margimBottomDiv}>
            <Text style={styles.title}>Historio Escolar </Text>
            <Text style={styles.description1}>
              {data.educationHistoric2.institutionName}
            </Text>
            <Text style={styles.description2}>
              {data.educationHistoric2.description}
            </Text>
          </View>
          {/* Habilities habilities*/}
          <View style={styles.margimBottomDiv}>
            <Text style={styles.title}>Habilidades e Competencias</Text>
            <Text style={styles.description2}>{data.habilities.one}</Text>
            <Text style={styles.description2}>{data.habilities.two}</Text>
            <Text style={styles.description2}>{data.habilities.three}</Text>
            <Text style={styles.description2}>{data.habilities.four}</Text>
            <Text style={styles.description2}>{data.habilities.five}</Text>
            <Text style={styles.description2}>{data.habilities.six}</Text>
            <Text style={styles.description2}>{data.habilities.seven}</Text>
          </View>
          {/* Contact */}
          <View>
            <Text style={styles.title}>Contato</Text>
            <Text style={styles.description2}>{data.contact.firstNumber}</Text>
            <Text style={styles.description2}>{data.contact.secondNumber}</Text>
            <Text style={styles.description2}>{data.contact.email}</Text>
            <Text style={styles.description2}>{data.contact.street}</Text>
            <Text style={styles.description2}>{data.contact.neighborhood}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default Pdf;
