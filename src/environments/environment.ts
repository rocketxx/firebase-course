// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useEmulators : false,
  firebase: {
    apiKey: "AIzaSyAFd8IMfj5mXE8GcexS8w5HkBGATVi1ZwQ",
    authDomain: "corso-21f10.firebaseapp.com",
    projectId: "corso-21f10",
    storageBucket: "corso-21f10.appspot.com",
    messagingSenderId: "877363979356",
    appId: "1:877363979356:web:43061a993e0a9f77507299",
    measurementId: "G-88NVPZHTH7"
  },
  api: {
    createUser: "http://localhost:5001/corso-21f10/us-central1/createUser"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
