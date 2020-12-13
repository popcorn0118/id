var config = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: `${process.env.FIREBASE_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.FIREBASE_ID}.firebaseio.com`,
    storageBucket: `${process.env.FIREBASE_ID}.appspot.com`,
};

firebase.initializeApp(config);

export default {
    // 關聯 firebase > 欄位
    msgRef:　firebase.database().ref('/messages/'),
    msgUser:　firebase.database().ref('/users/'),
    dataRef:　firebase.database().ref('/data/'),
}