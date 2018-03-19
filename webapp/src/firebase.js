import firebase from 'firebase';

var config = {
	apiKey: "AIzaSyBTfVZSgwCUotDBT7q3ynmqDy4QKd2eO5M",
	authDomain: "restaurant-44353.firebaseapp.com",
	databaseURL: "https://restaurant-44353.firebaseio.com",
	projectId: "restaurant-44353",
	storageBucket: "restaurant-44353.appspot.com",
	messagingSenderId: "313393788971"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export default firebase;
