db.produtos.find({}, {
  nome: 1,
  vendidos: 1,
}).sort({ vendidos: 1 });