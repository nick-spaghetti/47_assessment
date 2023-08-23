### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
	- react router allows for client-side routing, as opposed to server-side routing.  great for single-page applications

- What is a single page application?
	- single html page renders, but can have multiple components rendered within it.  

- What are some differences between client side and server side routing?
	- unlike server-side routing, client-side routing involves js handling the routing process internally. In client-side routing, a request to the server is prevented when a user clicks a link, hence no page refresh even when the url changes.

- What are two ways of handling redirects with React Router? When would you use each?
	- useNavigate, and Navigate probably.  History and useHistory were deprecated at some point.  Redirect was changed to Navigate as well.

```jsx
<Routes>
	<Route
		exact
		path="/dogs"
		element={<DogList dogs={dogs} />}
	/>
	<Route
		exact
		path="/dogs/:name"
		element={<FilterDetails dogs={dogs} />}
	/>
	<Route
		path="*"
		element={<Navigate to="/dogs" />}
	/>
</Routes>
```

- What are two different ways to handle page-not-found user experiences using React Router? 
	- one way is to create a not-found component, another is to take any other route not specified and taking the user somewhere like the home page

- How do you grab URL parameters from within a component using React Router?
	- just like with express, we use ':'

```jsx
<Route
	exact
	path="/dogs/:name"
	element={<FilterDetails dogs={dogs} />}
/>
```

- What is context in React? When would you use it?
	- context is a way to share a variable across an app without having to do extensive prop drilling

- Describe some differences between class-based components and function
  components in React.
	- function based components are just so much better.  a functional component is just a plain js pure function that accepts props as an argument and returns a react element (JSX).  a class component requires you to extend from React.Component and create a render function that returns a react element.

```jsx
function Joke({ vote, votes, text, id }) {
	const upVote = () => vote(id, +1);
	const downVote = () => vote(id, -1);

	return (
		<div className="Joke">
			<div className="Joke-votearea">
				<button onClick={upVote}>
					<i className="fas fa-thumbs-up" />
				</button>

				<button onClick={downVote}>
					<i className="fas fa-thumbs-down" />
				</button>

				{votes}
			</div>

			<div className="Joke-text">{text}</div>
		</div>
	);
}

// --------------------------------------------------------------

class Joke extends React.Component {
	constructor(props) {
		super(props);
		this.upVote = this.upVote.bind(this);
		this.downVote = this.downVote.bind(this);
		this.toggleLock = this.toggleLock.bind(this);
	}
	upVote() {
		this.props.vote(this.props.id, +1);
	}
	downVote() {
		this.props.vote(this.props.id, -1);
	}
	toggleLock() {
		this.props.toggleLock(this.props.id);
	}
	render() {
		return (
			<div className={`Joke ${this.props.locked ? "Joke-locked" : ""}`}>
				<div className="Joke-votearea">
					<button onClick={this.upVote}>👍</button>
					<button onClick={this.downVote}>👎</button>
					<button onClick={this.toggleLock}>
						{this.props.locked ? "🔒" : "🔓"}
					</button>
					{this.props.vote}
				</div>
				<div className="Joke-text">{this.props.text}</div>
			</div>
		);
	}
}
```

- What are some of the problems that hooks were designed to solve?
	- hooks were designed to help us not use class comps.  function and class components appeared in React at the same time, however function components originally could not contain state or make use of lifecycle methods.  even with this limitation, function became popular when they could be used.  using certain tools such as redux, it became easier to build applications without needing many class components.  with the advent of hooks, we can now use function components all the time