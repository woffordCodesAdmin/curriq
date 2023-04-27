const Fruit = require("../models/fruits");

exports.createFruit = async (req, res) => {
  const newFruit = await Fruit.create({
    name: req.body.name,
    color: req.body.color,
    readyToEat: req.body.readyToEat,
  });
  res.send(newFruit)
};
exports.getFruit = async () => {
  const fruit = await Fruit.findById(req.params.id);
};

exports.findFruit = async (req,res)=>{
    const foundFruit = Fruit.findById(req.params.id)
    res.send(foundFruit)
}