Extras
======

These files contain an example on how to consume an API endpoint.

Running Locally
===============

The API used is [JSON Placeholder](https://jsonplaceholder.typicode.com), but a local server may be used instead.

Simply install `json-server`:
```
npm install -g json-server
# or
yarn global add json-server
```
Run a local json server using the `users.json` file:
```sh
json-server users.json
```
and modify `api.js` as follows:
```diff
- $.get('https://jsonplaceholder.typicode.com/users', function(data) {
+ $.get('http://localhost:3000/users', function(data) {
```
