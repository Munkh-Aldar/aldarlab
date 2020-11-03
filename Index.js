import { Greeting } from './App.js';

ReactDOM.render(
//<h1>Hello, world! </h1>,
React.createElement(Greeting, { ner: 'Aldraa', nas: '21' }), document.getElementById('root'));