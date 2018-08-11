// Initialize Firebase
var config = {
    apiKey: "AIzaSyBOx_35wcurkrD9bbLmgnl_iw9OoSS9t1w",
    authDomain: "lawmanagement-29134.firebaseapp.com",
    databaseURL: "https://lawmanagement-29134.firebaseio.com",
    projectId: "lawmanagement-29134",
    storageBucket: "lawmanagement-29134.appspot.com",
    messagingSenderId: "567403162268"
};
import * as firebase from 'firebase'

firebase.initializeApp(config);
const db = firebase.database();


const register = ({firstName, lastName, email, password}) => {
    return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
                    db.ref('users/').push({
                        first_name: firstName,
                        last_name: lastName,
                        email: email.toLowerCase(),
                    }).then(()=>{
                        resolve(res);
                    })
                        .catch((error) =>  {
                            reject(error);
                            console.log(error);
                        });
                }
            ).catch((error)=>{
                reject(error)
            })
        }
    )};
const login = ({email, password}) => {
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                resolve(res)
            })
            .catch((error) => {
                reject({error: 'Something went wrong!'})
            });
    })
};



export {
    firebase,
    register,
    login

}