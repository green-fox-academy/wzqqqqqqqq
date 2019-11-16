/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static("view"));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/doubling", (req, res) => {
	if (req.query.input) {
		res.send({
			received: req.query.input,
			result: req.query.input * 2
		});
	} else {
		res.send({error: "Please provide an number!"});
	}
});

app.get("/greeter", (req, res) => {
	const {name, title} = req.query;
	if (name && title) {
		res.send({
			welcome_message: `Oh, hi there ${name}, my dear ${title}!`
		});
	} else if (name) {
		res.send({
			error: "Please provide a title!"
		});
	} else if (title) {
		res.send({
			error: "Please provide a name!"
		});
	} else {
		res.send({
			error: "Please provide a name and a title!"
		});
	}
});

app.get("/appenda/:appendable", (req, res) => {
	const {appendable} = req.params;
	res.send({appended: `${appendable}a`});
});

function rFact(num) {
	if (num === 0) {
		return 1;
	} else {
		return num * rFact(num - 1);
	}
}

app.post("/dountil/:action", (req, res) => {
	const {action} = req.params;
	let {until} = req.body;
	until = parseInt(until, 10);

	if (until) {
		if (action === "sum") {
			res.send({
				result: (until + 1) * (until / 2)
			});
		} else if (action === "factor") {
			res.send({
				result: rFact(until)
			});
		} else {
			res.send({
				result: "No such action."
			});
		}
	} else {
		res.send({
			result: "Please provide a number."
		});
	}
});

app.post("/arrays", (req, res) => {
	const {what, numbers} = req.body;
	let result = null;

	switch (what) {
		case 'sum':
			result = {result: numbers.reduce((a, b) => a + b)};
			break;
		case 'multiply':
			result = {result: numbers.reduce((a, b) => a * b)};
			break;
		case 'double':
			result = {result: numbers.map(number => number * 2)};
			break;
		default:
			result = {"error": "Please provide what to do with the numbers!"};
	}
	res.send(result);
});

function reverse(text) {
	const words = text.split(' ');
	for (let i = 0; i + 1 < words.length; i += 2) {
		if (i === 0) {
			words[i] = words[i].substring(0, 1).toLowerCase() + words[i].substring(1);
			words[i + 1] = words[i + 1].substring(0, 1).toUpperCase() + words[i + 1].substring(1);
		}
		[words[i], words[i + 1]] = [words[i + 1], words[i]];
	}
	return `${words.join(' ')} xxx xxx xxxx`;
}

app.post("/sith", (req, res) => {
	const {text} = req.body;
	if (text) {
		res.send({sith_text: reverse(text)})
	} else {
		res.send({
			error: 'Feed me some text you have to, padawan young you are. Hmmm.',
		})
	}
});

app.post('/translate', (req, res) => {
	const {text, lang} = req.body;
	let result = null;
	if (text && lang) {
		let originalText = text.split("");
		let resultText = [];
		const rule = ["a", "e", "i", "o", "u"];
		originalText.forEach(text => {
			if (rule.includes(text)) {
				text = text + "l" + text;
			}
			resultText.push(text);
		});
		result = {
			translated: resultText.join(""),
			lang: "gibberish"
		}
	} else {
		result = {
			"error": "I can't translate that!"
		}
	}
	res.json(result);
});


app.listen(PORT, () => {
	console.log(`The server is up and running on ${PORT}`);
});
