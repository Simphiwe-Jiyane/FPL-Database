const express = require('express');
const router = express.Router();

router.get('/getPlayer', (req, res, next) => {
    res.json({ success: true ,player: {
        id: 1,
        firstname: 'Simphiwe',
        lastname: 'Jiyane',
        team: 'Kaizer Chiefs'
    }})
});

module.exports = router;