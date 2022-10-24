db.produtos.find({
  $or: [{ nome: { $ne: "Big Mac" } }, { nome: { $ne: "McChicken" } }],
}, {
  nome: 1,
  curtidas: 1,
  vendidos: 1,
  _id: 0,
});