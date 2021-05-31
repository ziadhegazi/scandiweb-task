To run the application simply go to the file directory and then type and enter "npm start" in the terminal




Steps to building the Reactjs environment setup manually:
    <!-- If you dont have Nodejs, install it -->
    <!-- In the control panel/ terminal -->
    <!-- initializing node and create a packet.json file -->
    . npm init -y
    <!-- Install React -->
    . npm install react react-dom
    <!-- Installing babel (post-processor) [babel-core: basic package,preset-env: allows me to use modern JS like ES6,preset-react: takes JSX code and compile it into vanilla JS, babel-loader:Connects babel to webpack  ]  -->
    . npm install @babel/core @ babel/preset-env @babel/preset-react babel-loader
    . create a file and named it ".bablerc" and added the used presets to transpile them
    <!-- Installing webpack, used for module packaging, development, and production -->
    . npm install webpack webpack-cli webpack-dev-server
    . create a webpack file and name it "webpack.config.js"
    . copied the layout online after searching how to set it up and modified it according to my needs.
    . connected babel-loader to transpile my code.
    <!-- Created all my files that are gonna be used like App.js -->
    <!-- Edit the scripts part of the packet.json file to be able to run the local server -->
    . "scripts": {
        "start": "webpack-dev-server --hot --open",
        "build": "webpack --config webpack.config.js --mode production"
     },
    <!-- Install html webpack plugin (what it does is, finds the html file and links the generated JavaScript. In my case it would link the index.js to the index.html ) -->
    . npm install html-webpack-plugin
    <!-- Install CSS loader to be able to read and run styles and CSS files  -->
    . npm install style-loader css-loader
    <!-- Install file loader to be able to read and run photos -->
    . npm install file-loader
    <!-- Edited the webpack file to link the css loader and the file loader under resolve -->
    . {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
    <!-- After doing all that run the file by typing in the terminal this -->
    . npm start