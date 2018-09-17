
db.cards.insertOne(
    { image: 'animal_lesser_panda_stand.png', texts: ['れっさーぱんだ', 'らすかる'] }
)
db.cards.insertOne(
    { image: 'animal_usaghi_netherland_dwarf.png', texts: ['ねざーらんどどわーふ', 'うさぎ'] }
)
db.cards.insertOne(
    { image: 'christmas_cake.png', texts: ['くりすますけーき', 'しょーとけーき', 'けーき'] }
)


db.cards.insert([
    { filename: 'animal_lesser_panda_stand.png', texts: ['れっさーぱんだ', 'らすかる'] },
    { filename: 'animal_usaghi_netherland_dwarf.png', texts: ['ねざーらんどどわーふ', 'うさぎ'] },
    { filename: 'christmas_cake.png', texts: ['くりすますけーき', 'しょーとけーき', 'けーき'] }
])



/*

// mongodb 
//npm install mongoose --save
npm install mongodb --save

※ 最初はtest データベースを読み書きする用になっている
use hipbirdtest

*/

