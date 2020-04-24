# OAuth-MERN-Stack

Hello Guys,

Today we are going to see ***How to Login with Facebook?***

### First Step:

We need to register in [FacebookApplication](https://developers.facebook.com/apps/) and copy AppID.

Paste in "client/public/index.html"
```js
    window.fbAsyncInit = function () {
      FB.init({
        appId: '',//Paste your appId here 
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v6.0'
      });

      // Broadcast an event when FB object is ready
      var fbInitEvent = new Event('FBObjectReady');
      document.dispatchEvent(fbInitEvent);
    };
```

### To Run This App on Your Local Machine:
- 1 Install node modules in client, server and root dir.(Skip to line 5 if you know how to install)
- 2 Run from root ``` npm install ```.
- 3 Now ```cd client & npm install```
- 4 Now back to root folder and  ```cd server & npm install```
- 5 Run npm start in root folder. Both clinet and server will start concurrently


```
Server will start at Port 5000
Clinet will start at Port 3000
```