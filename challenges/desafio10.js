db.produtos.find({
  proteínas: { $gte: 30, $lte: 40 },
}, {
  nome: 1,
  _id: 0,
});