/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import TestSet from './src/TestSet';

function reverseArray(array) {
    if (array.length === 1) {
        return array;
    }
    return [array[array.length - 1], ...reverseArray(array.slice(0, array.length - 1))];
}

const inputArray = ['1', '2', '3', '4', '5'];
console.log('1. Practice Reverse array: ', reverseArray(inputArray));
const testSet = new TestSet();
testSet.add('123');
testSet.add('456');
console.log('Has 123: ', testSet.has('123'));
console.log('Has 456: ', testSet.has('456'));
testSet.remove('456');
console.log('Has 456: ', testSet.has('456'));

AppRegistry.registerComponent(appName, () => App);
