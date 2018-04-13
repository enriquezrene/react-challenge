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

# Lifecycle and State

>In our experience, thinking about how the UI should look at any given moment rather than how to change it over time eliminates a whole class of bugs.

## Do Not Modify State Directly
The only place where you can assign this.state is the constructor.

```js
// Wrong
this.state.comment = 'Hello';
```

```js
// Correct
this.setState({comment: 'Hello'});
```

Local state is exactly that: a feature available only to classes.

## Avoid race conditions
Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

```js
// Correct
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));
```

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