# Summary

## Components
- Split the UI into isolated pieces
- Components are like JS functionss, their inputs are called props and they return UI elements
- props stands for properties

## Pure and impure function
JS has 2 kind of functions:
Pure
---
It does not change the inputs

```js
function sum(a, b) {
  return a + b;
}
```

Inpure
---
It does change the inputs

```js
function withdraw(account, amount) {
  account.total -= amount;
}
````

> All React components must act like pure functions with respect to their props.


Usage
---
 
Start the development server with this command:
 
```
npm start
```
 
 
 
Setup
---
 
```
npm install
```
 
 
 
Compile
---
 
```
npm run compile
```

Visit http://localhost:3000/