- \_normalize needs to be imported as without it the header has border?

```bash
./src/_normalize.scss
NOT
./src/normalize.scss
```

- useRef over state? -> Modal -> native html settings?

- optional chihaing ?. or ?.[] -> is it good? to have it always?

- image quality lackgin? -> parse into something to up quality? -> cap at max-width = 100%?

- ```jsx testing
  const { container } = render(<Book />);
  expect(container.firstChild.tagName).toBe("DIV");
  ```

- is this fine for app.jsx? or should i still create .scss file?

```jsx
import "./sass/variables/_normalize.scss";
```

- had to create this vite.config.js for testing? is this okay?

- general advice, i tried using actual readable names
- up to standard? anything i need to do that stands out as not acceptable? MVP + bonus attempted
