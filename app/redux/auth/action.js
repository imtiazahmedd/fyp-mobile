import {firebase} from './../../configs/Firebase'

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const db = firebase.database();

export const onLogin = (payload) => {
    console.log(payload.uid)
    return dispatch => {

        db.ref("users").child(payload.uid)
            .once('value').then((snapshot)=>{
            let user = snapshot.val();
            dispatch({
                type: LOGIN,
                payload: {payload, user}
                });
        }),
            ((e) => {
                console.log('Something Went Wrong from onLogin Redux');
            });
    };

};

export const logout = (payload) => {
    type: LOGOUT,
        payload
};