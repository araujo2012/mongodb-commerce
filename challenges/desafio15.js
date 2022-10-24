db.products.updateMany({},
  { $set: { avaliacao: 0 } });
db.products.updateMany(
  { tags: { $all: ["bovino"] } },
  { $set: { avaliacao: 5 } },
);
db.products.updateMany(
  { tags: { $all: ["ave"] } },
  { $set: { avaliacao: 3 } },
);
db.products.find({},
  { nome: 1, avaliacao: 1, _id: 0 });