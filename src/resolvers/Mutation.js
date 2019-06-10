
const Mutattion = {
  createTask: async (parent, { input: { name, status } }, { models }, info) => {
    const task = new models.Task({
      name,
      status
    })
    const newTask = await task.save()
    return newTask
  },
  updateTask: async (parent, { id, input }, { models }, info) => {
    const updatedTask = await models.Task.findOneAndUpdate({ _id: id }, { $set: input }, { new: true })
    return updatedTask
  },
  deleteTask: (parent, args, { models }, info) => {
    console.log('delete task')
  }
}
export { Mutattion as default }
