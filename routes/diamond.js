const express = require('express');
const router = express.Router();
const catalog = require('../utils/catalog');
const { Diamond } = require('../db/models');

router.post('/', async (req, res) => {
    const { weight, cut, color, clarity } = req.body;
    try {
        if (!catalog.hasOwnProperty(cut)) return res.status(400).send({ msg: 'not ok', error: 'Parameter Cut is not found in catalog. Choose please existed cut type' });
    
        let priceData = catalog[cut].filter(row => row.color == color && row.clarity == clarity);

        if (!priceData.length) return res.status(400).send({ msg: 'not ok', error: 'Price is not found for those parameters ' });
        
        let price = priceData[0].pricePerCarat * weight;

        await Diamond.create({
            weight,
            cut,
            color,
            clarity,
            price
        })

        return res.json({ price });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'not ok', error: error.message })
    }
});

router.get('/', async (req, res) => {
    try{
        let diamonds = await Diamond.find(req.query);
        return res.json({ diamonds });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'not ok', error: error.message })
    }

})

module.exports = router;