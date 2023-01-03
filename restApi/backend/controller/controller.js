// @desc  Get goals
// @route GET /api/goals
// @access Private
const getGoal = (req, res) => {
  res.status(200).json({ message: 'create Alldetails' });
};

// @desc  Set goals
// @route POSt /api/goals
// @access Private
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('please add a text field');
  }
  res.status(200).json({ message: 'Post Alldetails' });
};

// @desc  Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
};

// @desc  Delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = { getGoal, setGoal, updateGoal, deleteGoal };
