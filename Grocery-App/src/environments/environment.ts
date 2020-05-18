// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //by kishan - firebase configuration
   firebase : {
    apiKey: "AIzaSyCwBeRxAmgCxIHjifQ4XLqlh3je2850ThI",
    authDomain: "grocery-app-4ba31.firebaseapp.com",
    databaseURL: "https://grocery-app-4ba31.firebaseio.com",
    projectId: "grocery-app-4ba31",
    storageBucket: "grocery-app-4ba31.appspot.com",
    messagingSenderId: "334344391153",
    appId: "1:334344391153:web:248686f1422b9ed2281c50",
    measurementId: "G-VNKBHMBBZE"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
