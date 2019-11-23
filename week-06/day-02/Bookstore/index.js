// eslint-disable-next-line no-undef
const express = require('express');
// eslint-disable-next-line no-undef
const mysql = require('promise-mysql');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

// eslint-disable-next-line no-undef
app.use(express.static(__dirname + '/views'));
app.use(express.json());

let conn;
mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '123456789',
	database: 'bs'
}).then((val) => conn = val);

app.get('/books', async (req, res) => {
	const filter = req.query;
	console.log(filter);
	let queryStr = `select book_name, aut_name, cate_descrip, pub_name, book_price
                  from book_mast join author on book_mast.aut_id=author.aut_id
                  join category on book_mast.cate_id=category.cate_id
                  join publisher on book_mast.pub_id=publisher.pub_id`;

	let condition = [];
	let conditions = [];

	if (filter.category) {
		conditions.push(`cate_descrip = '${filter.category}'`);
		condition.push('cate_descrip=?');
	}
	if (filter.publisher) {
		conditions.push(`pub_name = '${filter.publisher}'`);
		condition.push('pub_name=?');
	}
	if (filter.plt) {
		conditions.push(`book_price = '${filter.plt}'`);
		condition.push('book_price<=?');
	}
	if (filter.pgt) {
		conditions.push(`book_price = '${filter.pgt}'`);
		condition.push('pub_name>?');
	}
	if (conditions.length > 0) {
		queryStr += ' where ' + condition.join(' and ');
	}

	try {
		const result = await conn.query(queryStr, conditions);
		res.status(200);
		res.render('books', {books: result});
	} catch (err) {
		res.sendStatus(500);
	}

});

// start express app on port 3000
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});