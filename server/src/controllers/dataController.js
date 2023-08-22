const Data = require('../models/Data');

exports.getData = async (req, res) => {
    try {
        // const filters = req.query;
        // const filterObject = {};
        // for (const key in filters) {
        //     if (filters.hasOwnProperty(key)) {
        //         filterObject[key] = filters[key];
        //     }
        // }

        const data = await Data.find({}).limit(30);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.addData = async (req, res) => {
    try {
        const newData = new Data(req.body);
        const savedData = await newData.save();
        res.status(201).json(savedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};