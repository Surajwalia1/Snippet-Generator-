// routes/notification.js
const express = require('express');
const router = express.Router();

// Mock: Store status of code snippet generation
let codeStatus = {
  'example-request-id': { status: 'pending' } // initially pending
};

// Endpoint to check the status of the code generation
router.get('/status/:requestId', (req, res) => {
  const requestId = req.params.requestId;

  if (codeStatus[requestId]) {
    res.json({ status: codeStatus[requestId].status });
  } else {
    res.status(404).json({ error: 'Request not found' });
  }
});

// Mock: Updating the status to "ready" after some time (in real case, this would be event-driven)
setTimeout(() => {
  codeStatus['example-request-id'] = { status: 'ready' };
}, 10000); // Simulate the code generation being ready in 10 seconds

module.exports = router;
