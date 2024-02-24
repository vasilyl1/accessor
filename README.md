# Accessor
PWA installable application developed as an example to demonstrate simplicity for the user experience accessing services they need at any device and operating system without a requirement to use AppStore or GooglePlay applications.

The example of the implemented service is an access to OpenAI artificial intelligence platform. The authentication method used is Oauth2 with Google. For simplicity, the service eligibility is being assessed based on the list of the eligible e-mails recorded as an environmental variable within the App. This does not limit the ability of the signup and possible monetization for the users by implementing the acceess to the login database for any future required releases.

## Description

Progressive Web Applications (PWAs) offer a seamless solution to overcome OS compatibility issues on mobile platforms. By leveraging web technologies, PWAs ensure cross-platform functionality, eliminating the need for separate development for iOS and Android. This not only streamlines development efforts but also reduces maintenance costs. Additionally, PWAs provide a consistent user experience across devices, leading to higher user engagement and retention. Once installed, PWAs become an integral part of the user's device, enhancing convenience and accessibility, which in turn increases the likelihood of users returning to the application for repeated interactions.

## Architecture and Technologies

REACT client and Express server are being used as a core architecture. 
PassportJS with Google strategy is implemented for authorization. 
The authorization protocol follows Oauth standard with the server call back URL, once the user is authenticated by Google, the application gets an access to the user profile and performs the check against the user emails list authorized to access the service. 
Secure Express sessions are used to handle requests to the  express server protected API routes.
Service Worker is used to cache the browser requests for faster response. Stale while revalidate workbox strategy is used to refresh the content if the application is connected to the Internet.
For offline application work, the folliwing failovers are implemented:
* the redirect to the cached network offline error page happens for any OpenAI request;
* the redirect to the cached unauthorized offline error page happens for any Google authenticated user whose email is not the part of the service subscribers list
* the redirect to the cached REACT component within the client routing for any unrecognized client routes
* the overlay dialog box is used to display no connection status for any network related requests within the client scope

Centralized state with the reducer is implemented for all REACT components using provider for sharing the access to the state. This eliminates the requirement to pass arguments via the components and allows seamless scalability and performance of the application for further functionality.

Tailwind CSS library is used to make the client application design fully responsive and mobile devices friendly. The responsive features allow the buttons and menus to dynamically change introducing the relevant experience based on the device the application is being used. 

## Installation

This application is deployed on the web at the following URL:
https://accessor-f38e41fc351e.herokuapp.com/

This application can be installed as a PWA (progressive web application) on your device. No need for AppStore or Google Play.

    Chrome Desktop: Use install icon at the address bar.
    Safari iOs: Use Add to Home Screen when sharing the page.
    Chrome Android: Use Add to Home Screen when clicking three dot icon.

Note: if you are cloning and reproducing the code from the GitHub, refer to the .env.example file in the server directory. This file contains the necessary environmental variables which are required to be set for your local usage as well as cloud application deployment.

## Usage

Below screeshots are demonstrating an offline functionality of the application without internet connection - the browser uses cached content in navigation to the main and error pages.

![Screenshot1](/client/src/images/screenshots/Screenshot%202024-02-24%20at%203.46.26 PM.png)
![Screenshot2](/client/src/images/screenshots/Screenshot%202024-02-24%20at%203.46.47 PM.png)
![Screenshot3](/client/src/images/screenshots/Screenshot%202024-02-24%20at%203.47.02 PM.png)



## Credits

+ Tailwind
+ PassportJS
+ Google
+ Google Chrome
+ PWA
+ OpenAI
+ Express
+ REACT
+ REDUX

## Questions

Submit your questions and screenshots via the Contact form in my profile application: 
https://portfolio-vasily.herokuapp.com/contact


## License

MIT License

Copyright (c) 2024 Vasily Likhovaydo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.