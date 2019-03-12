const config = {
    apiKey: 'AIzaSyCa8hLfYIVwRjhFt4dfOKrGSPhkDKexRiw',
    authDomain: 'usgs-282a6.firebaseapp.com'
};

firebase.initializeApp(config);

export const auth = firebase.auth();