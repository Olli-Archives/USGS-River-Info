import { auth } from './firebase.js';

const ui = new firebaseui.auth.AuthUI(auth);

ui.start('#firebaseui-auth-container', {
    // "providers" - how is user allowed to log in?
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // where do we go on success?
    signInSuccessUrl: '../',
    // don't show google account chooser
    credentialHelper: firebaseui.auth.CredentialHelper.NONE
});

