#1. What is the difference between Component and PureComponent? give an example where it might break my app.

One difference between Component and PureComponent is the way React makes comparisons on primitive and object values when the state change happens.To improve the performance PureComponents compares primitive values by value and objects values by reference.

This can break the app when an object is inside a state and a change happens and the UI doesn't change. In this case, a forceUpdate is needed. And also, in PureComponents, all child components must be PureComponents as well.

#2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

I think we can have a problem with the re-render of the page when the state of a variable in the Context changes and a ShouldComponentUpdate is considering this variable to update the UI. React doens't takes this change into account and the UI doesn't change.

#3. Describe 3 ways to pass information from a component to its PARENT.

The most common way to pass inoformation from a component to its parent is giving a handler function to the child component that returns an argument which is the information comming back from the child component to the parent.

Other way is create a callback function, that will retrieve the data from the child component when calling this function.

The third way is transform the child component into a customHook and return render property (substituting the component declaration on parent's body), the data, and other methods in the return object to the parent.

#4. Give 2 ways to prevent components from re-rendering.

The more frequent ways to prevent components from re-rendering is using memoization, with useMemo() and useCallback() hooks.

This two memoization functions enables to re-render the components only if there's a change in their props.

Another way is use useRef() instead of useState() hook. With useRef we can track the state changes without causing component re-renderings.

#5. What is a fragment and why do we need it? Give an example where it might break my app.

React requires wrapping the components with a single parent element. This affects the overall component rendering time.

Using React Fragments to wrap the components will reduce the load on the DOM, resulting in faster rendering times and decreased memory usage.

#6. Give 3 examples of the HOC pattern.

A higher-order component transforms a component into another component. A HOC doesn't modify the input component.

Rather, a HOC composes the original component by wrapping it in a container component.

- Example 1

`function withStyles(Component) {`

`return props => {
const style = { padding: '1rem', margin: '1rem' }
return <Component style={style} {...props} />
}}`

`const StyledButton = withStyles(Button)`

- Example 2

`function withLoader(Element) {
  return props => <Element />;
}`

- Example 3

`const twice = (f, v) => f(f(v))
const add3 = v => v + 3
twice(add3, 7) // 13`

#7. what's the difference in handling exceptions in promises, callbacks and async...await.

With Promises we can call reject() function instead of thowing exceptions.

With callbacks and async/await, the exceptions is handling with the try/catch blocks.

#8. How many arguments does setState take and why is it async.

The setState is the method to update the component's internal state. It's asynchronous and doesn't immediately mutate the state but creates a pending state transaction.

The setState method takes up to 2 arguments. The first argument can be an object or a callback that's used to update the state.

The second argument is a function that's always run after setState is run.

#9. List the steps needed to migrate a Class to Function Component.

Basic steps to migrate a Class to Function Component:

- Change the class to a function;

- Remove the constructor;

- Remove the render method;

- Remove references to 'this' object;

- Convert all methods to functions;

- Replace lifecycle methods by hooks (useState/useEffect).

#10. List a few ways styles can be used with components.

Some ways to add styles in components are:

- Add global styles to the 'index.html' file;

- Add inline style to React component elements;

- Create a style for each component;

- Attach style property to JavaScript style objects;

#11. How to render an HTML string coming from the server.

The unusual methods to render an HTML string in React are:

- Use dangerouslySetInnerHTML;

- Use regExp and split;
