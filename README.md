streaming-http-sample
=====================

Sample HTTP streaming between Node.js and the Browser.

This is an example implementation of Node.js streams being utilized in both server and client side of the application. This is explained well in this blog post [http://dry.ly/full-streams-ahead](http://dry.ly/full-streams-ahead).

![stream-animation](https://raw.github.com/maiah/streaming-http-sample/master/stream-animation.png)

# Installation

Install required npm modules.

```sh
npm install
```

Then install Browserify globally.

```sh
npm install -g browserify
```

Once installed go to `/public` folder of this project and then create `bundle.js` file.

```sh
browserify -r hyperquest > bundle.js
```

# Running

```sh
node server
```

Then go to browser [http://localhost:7000/book](http://localhost:7000/book) to see the result.

# License

The MIT License (MIT)