import Rebase from 're-base';
//react firebase pckg - mirror state to the firebase changes

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyChRu1C_IAqTNhOcLG0eWzrkhwGq7JmH04",
    authDomain: "catch-of-the-day-andy-park.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-andy-park.firebaseio.com",
  })

const base = Rebase.createClass(firebaseApp.database())
                                                //database is function that will return the database

//this is a name export
export { firebaseApp }

export default base;