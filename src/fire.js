import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDlWWXQugfYGDWyko4_UKO9wtWCigPay2c",
  authDomain: "linkit-login.firebaseapp.com",
  projectId: "linkit-login",
  storageBucket: "linkit-login.appspot.com",
  messagingSenderId: "1070594379913",
  appId: "1:1070594379913:web:bc825d3b7440c7cba5b658"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;

//   <script>
//     // Your web app's Firebase configuration
//   var firebaseConfig = {
//       apiKey: "AIzaSyDic5klJbfJwumHgn1PhGBWUyVZVGYDIEA",
//     authDomain: "login-1b34c.firebaseapp.com",
//     projectId: "login-1b34c",
//     storageBucket: "login-1b34c.appspot.com",
//     messagingSenderId: "239997848219",
//     appId: "1:239997848219:web:3424857426ab93f6e5143e"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>