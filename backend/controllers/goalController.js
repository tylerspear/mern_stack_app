// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = async (req, res) => {
    res.status(200).json({ message: 'get goals' })
}

// @desc Set a  goal
// @route POST /api/goals
// @access Private
const setGoal = async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: 'set goal' })
}

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = async (req, res) => {
    res.status(200).json({ message: `update goal ${req.params.id}` })
}

// @desc Delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = async (req, res) => {
    res.status(200).json({ message: `delete goal ${req.params.id}` })
}

// export the controller functions
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}