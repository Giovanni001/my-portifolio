import { StyleSheet, Font } from "@react-pdf/renderer";
import font1 from '../../../fonts/Roboto-Condensed/RobotoCondensed-Bold.ttf'
import font2 from '../../../fonts/Roboto-Condensed/RobotoCondensed-Regular.ttf'


const pxToPt = (numberInPx) => numberInPx * 0.75;

Font.register({ family: 'RobotoBold', src: font1 });

Font.register({ family: 'RobotoRegular', src: font2 })

const styles = StyleSheet.create({

    /*  pageNumber: {
         position: "absolute",
         bottom: pxToPt(30),
         right: pxToPt(pageHorizontalMargin),
     }, */

    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: pxToPt(25),
        fontFamily: "RobotoBold",
    },

    mainTitle: {
        fontSize: pxToPt(30),
        color: "#0db2ff"
    },

    title: {
        fontSize: pxToPt(24),
        color: "#0db2ff",
        fontFamily: "RobotoBold",
        marginBottom: pxToPt(15)
    },

    description1: {
        fontSize: pxToPt(20),
        fontFamily: "RobotoRegular"
    },
    description2: {
        fontSize: pxToPt(18),
        fontFamily: "RobotoRegular",
        color: "#656565"
    },
    sections: {
        marginLeft: pxToPt(20),
        marginRight: pxToPt(20)
    },
    margimBottomDiv: {
        marginBottom: pxToPt(20)
    }
});

export default styles;
