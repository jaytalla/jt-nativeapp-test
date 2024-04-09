'use strict';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },

    textbox: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        padding: 5,
        color: 'white',
        textDecorationColor: 'white',
        borderWidth: .4,
    }
});
