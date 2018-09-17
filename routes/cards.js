var express = require('express');
var router = express.Router();

var db = require('../db');

/*
/cards/____ID____/          [GET]       カードを返す
/cards/____ID____/          [PUT]       カードを修正する(texts部分のみ)
/cards/____ID____/          [DELETE]    カードを削除する
/cards/                     [GET]       一覧を返す
/cards/                     [POST]      作るなら、画像とテキストをアップロードだけど、不要。(画像を置いて、PUTでテキスト修正)
*/


/* GET cards listing. */
router.post('/:id', function (req, res, next) {
    console.log("http_req:");
    console.log(req.body);

    var myquery = { filename: req.body.filename };
    // テキストの数は5個で固定にする
    var newvalues = {
        $set: {
            texts: [
                req.body.t0,
                req.body.t1,
                req.body.t2,
                req.body.t3,
                req.body.t4
            ]
        }
    };

    // console.log(myquery);
    // console.log(newvalues);

    // DBを更新
    db.collection('cards').updateOne(
        myquery, newvalues, function (err, dbres) {
            if (err) throw err;
            //console.log(dbres);
            // 一覧画面にリダイレクト
            res.redirect("/cards");
        }
    );

});



/* GET cards listing. */
router.get('/', function (req, res, next) {

    db.collection('cards').find().toArray(function (err, cards) {
        if (err) throw err;
        console.log("cards:")
        console.log(cards)
        res.render('cards', { title: 'Cards', cards: cards });
    });
});

module.exports = router;
