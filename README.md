# `denomades-cards`
Programs section for denomades.com

## Demo

You can see the demo [here](https://kkhenriquez.github.io/denomades-cards).

## Getting Started

To get you started you can simply clone the `denomades-cards` repository and install the dependencies:

### Prerequisites

You need git to clone the `denomades-cards` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize `denomades-cards`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `denomades-cards`

Clone the `denomades-cards` repository using git:

```
git clone https://github.com/kkhenriquez/denomades-cards.git
cd denomades-cards
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/components` - contains the framework files


### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].

Online version can be found [here][app-link].


## Contact

For more information on this project please contact [me][kevin].

[angularjs]: https://angularjs.org/
[bower]: http://bower.io/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[app-link]: https://kkhenriquez.github.io/denomades-cards
[multicaja]: https://www.multicaja.cl/paypal/
[kevin]: mailto:kevinkonrad93@gmail.com
