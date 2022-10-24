db.products.updateMany(
  { nome: { $in: "Big Mac" } },
  { $set: { ultimaModificacao: Date.now() } },
);
db.products.find(
  { ultimaModificacao: { $exists: true } },
  { nome: 1, _id: 0 },
);