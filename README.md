## Our Application is powered by many packages which is handled by NPM package manager

```
nmp init -y
```

## Parcel The BUNDLER  

Parcel JOB -  
clean console  
minify the files  
bundle  
caching  
It was does HMR - Hot module reload using file watching algorithm  
Dev and production build  
Super Fast build algorithm  
Image optimization  
Caching while development  
compatible with older version of browswers  
HTTPS on dev build  
port number handling  
uses consistent hashing algorithm for cacheing  
it is zero config bundler  
Tree shaking  - removing un-wanted like if functions are not used in code then they are ignored  

## we will be installing parcel from npm

```
npm install -D parcel
```

-D for Development environments

## package.json

package.json will be used for configuration for developing environment
parcel version with ^ mean we can upgrade  
parcel version with ~ mean stay with current version

## package-lock.json  

this file is used on production server
it holds the locked version of project dependencies  

## Node modules  

it is contains collection of packages which is downloaded by parcel  
It is very big file  
There is no need to push node modules on git
our configuration files package.json and package-lock.json contains sufficient information
from which node modules can be downloaded
so when configuration file is pushed on server
server can download/generate those node module files there.

## inject react cdn in script tag

It is not good way better way is to import react package
in node modules  
It is not good way because what is cdn link goes down

so to install react in our node modules

```
npm install react
```

here we are not using -D because we want react in our production as well as development environment so it will be installed globally

also installing npm react dom

```
npm -i react-dom
```  

-i is for install

after installation we need to import react in our script

```
import React from "react:
import ReactDOM from "react-dom/client"
```

and when adding that script tag in body of html file need to add it as type="module" for example  

```
<script src="app.js" type="module"></script>
```

## Ingite our App

to ignite our app we use command npx parcel and entry point of our app.  
npx - npm execute  

this creates a development build and serves on the server

```
npx parcel index.html
```

to make production build

```
npx parcel build index.html
```

## Importing react

after installtion of react need to import it from node modules which we downloaded using parcel in script js file

```
import React from "react";
import ReactDOM from "react-dom/client";
```

## Dist

contains builds of production.  
when production build is made like

```
npx parcel build index.html
```

and doing this will create error becuase in package.json file we contain main:app.js as entry point but we are pacing entry point in argument which is handled by parcel we will be removing that line
Remove -

```
main:app.js
```

Dist contains three main files which is minified by parcel
html css and js file

## Browser list

to make application compatible with older browsers.
we have this module in node modules and to use it we have to write browser list in package.json file and values can be fetch from the link <https://browserslist.dev/>

```
"browserslist":[
    "last 2 versions",
    "last 2 chrome versions",
]
```

list of browsers which make it compatible with browsers
