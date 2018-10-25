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
                    db.ref('users/').child(res.uid).set({
                        first_name: firstName,
                        last_name: lastName,
                        email: email.toLowerCase(),
                        id : res.uid
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
const deleteCivilLaws = (id) =>{
  return db.ref('civil/' + id).remove();
};
const deleteCriminalLaws = (id) =>{
    return db.ref('criminal/' + id).remove();
};
const uploadImage = (userId, image) => {
    var storageRef = firebase.storage().ref();
    var imagesRef = storageRef.child('images/profile_'+ userId +'.jpg');

    return new Promise((resolve, reject) => {
        imagesRef.put(image)
            .then(function(snapshot) {
                imagesRef.getDownloadURL().then(function(url) {
                    updateProfile(userId, {profile_picture: url});
                    resolve(url);
                    Alert.alert('','Profile update successfully')
                }).catch(function(error) {
                    reject({error: error.message})
                });
            }).catch((e) => {
            reject({error: e.message})
        });
    })
};


const updateProfile = (userId, params) => {
    return db.ref('users/' + userId).update(params)
};
const updateCivil = (id, params) =>{
   return db.ref("civil/" + id).update(params)
};
const updateCriminal = (id, params) =>{
    return db.ref("criminal/" + id).update(params)
};

const updatePassword = (oldPassword,newPassword) =>{

    return new Promise((resolve, reject) => {
        var user = firebase.auth().currentUser;
        firebase.auth().signInWithEmailAndPassword(user.email, oldPassword)
            .then((res) => {
                user.updatePassword(newPassword).then((res) => {
                    resolve(res);
                    Alert.alert('','Password is changed successfully!');
                }).catch((error) => {
                    reject({error: 'Something went wrong!'})
                });
            }).catch((error) => {
            reject({error: 'Old password is incorrect!'})
        })
    });

};

const getCivil = () => {
    return new Promise((resolve, reject)=>{
        let laws = db.ref('civil/');
        laws.on('value',(snapshot)=>{
            let arr = [];
            let obj = snapshot.val();
            for(var key in obj){
                let objId = {...obj[key], _id : key};
                arr.push(objId)
            }
            resolve(arr)
        });
    })
};

const getCriminal = () => {
    return new Promise((resolve, reject)=>{
        let laws = db.ref('criminal/');
        laws.on('value',(snapshot)=>{
            let arr = [];
            let obj = snapshot.val();
            for(var key in obj){
                let objId = {...obj[key], _id : key};
                arr.push(objId)
            }
            resolve(arr)
        });
    })
};

const civilLawAdd = (params) =>{
    return new Promise((resolve, reject)=>{
        db.ref("civil/").push(params)
            .then((res)=>{
                resolve(res)
            })
            .catch((error)=>{
                reject(error)
            })
    })
};
const crimainlLawAdd = (params) =>{
    return new Promise((resolve, reject)=>{
        db.ref("criminal/").push(params)
            .then((res)=>{
                resolve(res)
            })
            .catch((error)=>{
                reject(error)
            })
    })
};

const signOut = () =>{
    firebase.auth().signOut();
};


export {
    firebase,
    register,
    login,
    uploadImage,
    updateProfile,
    updatePassword,
    updateCivil,
    updateCriminal,
    getCivil,
    getCriminal,
    signOut,
    civilLawAdd,
    crimainlLawAdd,
    deleteCivilLaws,
    deleteCriminalLaws
}