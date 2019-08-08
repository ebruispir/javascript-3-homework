complete these exercises from javascript.info and paste your solutions in to this file:
* [promise basics](https://javascript.info/promise-basics#tasks)
* [promise chaining](https://javascript.info/promise-chaining#tasks) 
* [promise api](https://javascript.info/promise-api)

and here's another [helpful resources](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

## 1.Re-resolve a promise?
*What’s the output of the code below?

```js
let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000); // ignored
});

promise.then(alert);

```
// Output = 1.The second call to resolve is ignored.The executor should call only one resolve or one reject.

## 2.Delay with a promise
```js
function delay(ms) {
  new Promise(function(resolve, reject) {

  setTimeout(() => resolve(), ms);
});
}

delay(3000).then(() => alert('runs after 3 seconds'));

```
## 3.Animated circle with promise
*Rewrite the showCircle function in the solution of the task Animated circle with callback so that it returns a promise instead of accepting a callback.


```js
function go() {
    showCircle(150, 150, 100).then(div => {
      div.classList.add('message-ball');
      div.append("Hello, world!");
    });
  }
```
// Answer:
```js
  function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    return new Promise(resolve => {
      setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';

        div.addEventListener('transitionend', function handler() {
          div.removeEventListener('transitionend', handler);
          resolve(div);
        });
      }, 0);
    })
  }
```
## 4.Promise: then versus catch
// Are these code fragments equal? In other words, do they behave the same way in any circumstances, for any handler functions?
```js
promise.then(f1).catch(f2);
```
```js
promise.then(f1, f2);
```
// No, they are not the equal.First one has multiple handlers for one promise.In the second code piece there’s no chain below f1.
