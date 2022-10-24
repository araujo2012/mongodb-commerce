db.produtos.find({
  ingredientes: { $all: ["picles"] },
}, {
  nome: 1,
  curtidas: 1,
  vendidos: 1,
  _id: 0,
});