const Plant = require("../entity/plant");

exports.getPlants = async (req, res) => {
  try {
    const plants = await Plant.findAll();
    res.status(200).json(plants);
  } catch (error) {
    // res.status(500).json({ error: "Error al obtener las plantas" });
    res.status(500).json(error);
  }
};

exports.getPlantById = async (req, res) => {
  try {
    const plant = await Plant.findByPk(req.params.id);
    if (!plant) {
      return res.status(404).json({ error: "Planta no encontrada" });
    }
    res.status(200).json(plant);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la planta" });
  }
};

exports.createPlant = async (req, res) => {
  try {
    const newPlant = await Plant.create(req.body);
    await newPlant.save();
    res.status(201).json(newPlant);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la planta" });
  }
};

exports.updatePlant = async (req, res) => {
  try {
    const [plant] = await Plant.update(req.body, {
        where: { id: req.params.id }
    });
    if (plant) {
			const updatedPlant = await Plant.findByPk(req.params.id);
      res.status(200).json(updatedPlant);
    } else {
      return res.status(404).json({ error: "Planta no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la planta" });
  }
};

exports.deletePlant = async (req, res) => {
  try {
    const plantId = req.params.id;

    const deletedPlant = await Plant.destroy({
      where: { id: plantId }
    });

    res.status(200).json(deletedPlant);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la planta" });
  }
};