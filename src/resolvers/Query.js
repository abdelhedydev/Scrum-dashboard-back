const Query = {
  tasks: async (_, $, { models }) => {
    const tasks = await models.Task.find()
    return tasks
  }
}
export { Query as default }
