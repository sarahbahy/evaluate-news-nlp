# Project Summary

 A web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

The goal of this project is to practice:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using NLP APIs and creating requests to external urls
## Webpack setup
- two webpack files are used to configure webpack for development adn production mode.
- webpack uses Immediately Invoked Function Expression to encapsulate pieces of our code into scope layers. sometimes we lose communication between scope layers. so to fix this, add output section in the webpack. it should look like this: 
```
output:{
  libraryTarget:"var",
  library:'client'
},
```
we can name the library whatever we want.
### Loaders
- babel loader converts ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. this allow us to use newer version of javascript like ES6 even though the browser doesnt run it natively.
### Plugins
- HtmlWebPackPlugin is used to automaticaly add dynamic reference of other files at the bottom of the html file
## Sass styles
sass is used to create styles then its compiled to css files using the sass, css and style loaders configured in the wepback. note chained loaders works from right to left
## Service workers
service worker is used here to make our content available offline
## meaningcloud Sentiment Analysis API
meaningcloud Sentiment Analysis API is used here to analyse sentiment of the text. API is called from the server-side and sends the response to the client side where it gets rendered. 
## To get started

clone this repo then install everything:

`cd` into your new folder and run:
- `npm install`

### Get Sentiment Analysis API KEY
Private keys, visible publicly are never a good thing. so you have to use your own key to run this project. 

- [ ] Create a new ```.env``` file in the root of your project
- [ ] Fill the .env file with your API keys like this:
```
API_KEY=**************************
```
you can find the meaningcloud Sentiment Analysis API documentation [here](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/request)
### run the project
open terminal and run:
- `npm run build-prod`
open another terminal and run:
- `npm run start`