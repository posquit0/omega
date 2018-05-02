<div align="center">
  <a href="https://github.com/posquit0/omega" title="Omega">
    <img alt="Omega" src="https://adc3ef35f321fe6e725a-fb8aac3b3bf42afe824f73b606f0aa4c.ssl.cf1.rackcdn.com/tenantlogos/19935.png" width="220px" />
  </a>
  <br />
  <h1>Omega</h1>
</div>

<p align="center">
  :fire: Make serverless application expressive
</p>

<div align="center">
  <a href="https://circleci.com/gh/posquit0/omega">
    <img alt="CircleCI" src="https://circleci.com/gh/posquit0/omega.svg?style=shield" />
  </a>
  <a href="https://coveralls.io/github/posquit0/omega">
    <img src="https://coveralls.io/repos/github/posquit0/omega/badge.svg" alt='Coverage Status' />
  </a>
  <a href="https://badge.fury.io/js/omega">
    <img alt="npm version" src="https://badge.fury.io/js/omega.svg" />
  </a>
  <a href="https://www.npmjs.com/package/omega">
    <img alt="npm" src="https://img.shields.io/npm/dt/omega.svg" />
  </a>
  <a href="https://david-dm.org/posquit0/omega">
    <img alt="npm" src="https://img.shields.io/david/posquit0/omega.svg?style=flat-square" />
  </a>
  <a href="https://opensource.org/licenses/mit-license.php">
    <img alt="MIT License" src="https://badges.frapsoft.com/os/mit/mit.svg?v=103" />
  </a>
  <a href="https://github.com/ellerbrock/open-source-badge/">
    <img alt="Open Source Love" src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103" />
  </a>
</div>

<br />

**Omega** is an expressive framework to write serverless application with the layered architecture.


## Installation

```bash
# NPM
$ npm install --save @posquit0/omega
# Yarn
$ yarn add @posquit0/omega
```


## Example

```node
const Omega = require('@posquit0/omega');
const AwsProxyTranslator = require('@posquit0/omega/translators/AwsProxyTranslator');


const app = new Omega();

// Set middlewares
app.use(new AwsProxyTranslator());


// Write your serverless functions here
const handler = app.createLambda(async ctx => {

});
```


## API

To be updated


## Contributing

This project follows the [**Contributor Covenant**](http://contributor-covenant.org/version/1/4/) Code of Conduct.

#### Bug Reports & Feature Requests

Please use the [issue tracker](https://github.com/posquit0/omega/issues) to report any bugs or ask feature requests.


## Self Promotion

Like omega? Follow the repository on [GitHub](https://github.com/posquit0/omega). And if you're feeling especially charitable, follow [posquit0](https://posquit0.com) on [GitHub](https://github.com/posquit0).


## Contact

If you have any questions, feel free to join me at [`#posquit0` on Freenode](irc://irc.freenode.net/posquit0) and ask away. Click [here](https://kiwiirc.com/client/irc.freenode.net/posquit0) to connect.


## License

Provided under the terms of the [MIT License](https://github.com/posquit0/omega/blob/master/LICENSE).

Copyright © 2018, [Byungjin Park](http://www.posquit0.com).
