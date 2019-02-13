#

##Rails with webpack
 - Package.jason
 - rails g controller pages home


##CSS


##Asset Pipeline
 - Images
 - CSS
 - Javascripts

  -2 files
    - Stylessheet link_tage
    - Javascript link_tag
      -They are doing a lot.

##Precompilatiom
SCss >> CSS
CoffeeScript>> Javascript (dying)

##Concatenate
 - In development it seperates them for ease of debugging
 - Loads all the files into one
 - So there is only one restest to the server

##finggerprinting
  -Like a time stamp,

##minify
SASS Compressor
Uglify JS
Gzip

##compress


##Precompile
- Don't run it locally
- Add it to git ignore
- Let see it in action
- Let clean our files




##FRONT END SETUP
  -gems
  -simpleform
  -rm & curl & unzip

##Our layout
  -All importing into the stylesheet
  -how to add a new compoment

##Images
 - Adding images in you app
  - logo, fivacon, anything you own that is part of the design
 - image_tag 'logo.png', height: 200
 - src set
 - resize imgage 400px

## using asset peline in css
 - background-image: asset-url('logo.png');


##Javascript & webpack
 - OLD - inside the assets > javascript

##Webpack
  ES6 with bable
  NPM with yarn

  App > Javascript!
    >packs>application.js

    <%= javascript_pack_tag 'application' %>

move tags just before closing tags

Bootstrap Js
  - yarn add jquery bootstrap@3
  - add to // config/webpack/environment.js
  - add to // app/javascript/packs/application.js




