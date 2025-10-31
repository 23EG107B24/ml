const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Loc8r',
    places: [
      { name: 'Starcups', distance: '100m', address: '125 High Street, Reading, RG6 1PS', facilities: ['Hot drinks', 'Food', 'Premium wifi'] },
      { name: 'Cafe Hero', distance: '200m', address: '125 High Street, Reading, RG6 1PS', facilities: ['Hot drinks', 'Food', 'Premium wifi'] },
      { name: 'Burger Queen', distance: '500m', address: '125 High Street, Reading, RG6 1PS', facilities: ['Food', 'Premium wifi'] }
    ]
  });
});

module.exports = router;
