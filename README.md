# Interview Scheduler

![usage](https://user-images.githubusercontent.com/3782456/96938710-f8a69180-147f-11eb-9d1a-ed2d8a40a4bf.gif)

## ScreenShots

### Main page

<img width="1371" alt="Screen Shot 2020-10-21 at 10 36 35 AM" src="https://user-images.githubusercontent.com/3782456/96938773-1aa01400-1480-11eb-921c-b9fb3c5bc212.png">

### Loading and saving states

<img width="1009" alt="Screen Shot 2020-10-21 at 10 36 50 AM" src="https://user-images.githubusercontent.com/3782456/96938776-1b38aa80-1480-11eb-8f92-ef4bb0bc3d83.png">
<img width="1097" alt="Screen Shot 2020-10-21 at 10 36 55 AM" src="https://user-images.githubusercontent.com/3782456/96938777-1b38aa80-1480-11eb-98ad-5f00f6ddb3a6.png">

### Side Bar styling

<img width="301" alt="Screen Shot 2020-10-21 at 10 37 04 AM" src="https://user-images.githubusercontent.com/3782456/96938778-1bd14100-1480-11eb-80fc-b111e48227d7.png">

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

#### NOTE: Tests will having warnings, but they should all pass

```js
 PASS  src/components/__tests__/DayListItem.test.js
 PASS  src/hooks/__tests__/useVisualMode.test.js
 PASS  src/components/__tests__/Button.test.js
 PASS  src/components/__tests__/Application.test.js
 PASS  src/components/__tests__/Form.test.js
 PASS  src/hooks/__tests__/useApplicationData.test.js
  ● Console

    console.error node_modules/react-test-renderer/cjs/react-test-renderer.development.js:120
      Warning: An update to TestHook inside a test was not wrapped in act(...).

      When testing, code that causes React state updates should be wrapped into act(...):

      act(() => {
        /* fire events that update state */
      });
      /* assert on the output */

      This ensures that youre testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act
          in TestHook
          in Suspense
    console.error node_modules/react-test-renderer/cjs/react-test-renderer.development.js:120
      Warning: An update to TestHook inside a test was not wrapped in act(...).

      When testing, code that causes React state updates should be wrapped into act(...):

      act(() => {
        /* fire events that update state */
      });
      /* assert on the output */

      This ensures that youre testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act
          in TestHook
          in Suspense
    console.error node_modules/react-test-renderer/cjs/react-test-renderer.development.js:120
      Warning: An update to TestHook inside a test was not wrapped in act(...).

      When testing, code that causes React state updates should be wrapped into act(...):

      act(() => {
        /* fire events that update state */
      });
      /* assert on the output */

      This ensures that youre testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act
          in TestHook
          in Suspense

 PASS  src/helpers/__tests__/selectors.test.js

Test Suites: 7 passed, 7 total
Tests:       35 passed, 35 total
Snapshots:   0 total
Time:        4.668s
Ran all test suites.
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
