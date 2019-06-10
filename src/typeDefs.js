import { gql } from 'apollo-server'
const typeDefs = gql`
  type Query {
  tasks: [Task!]
}
type Mutation{
  createTask(input: TaskInput): Task!
  updateTask(id: ID!,input:TaskInput): Task!
  deleteTask(id: ID!): Task!
}

input TaskInput {
  name:String!
  status: String!
}

type Task{
  id: ID!
  name: String!
  status: TaskStatus!
}

enum TaskStatus {
  STORY
  TO_DO
  DONE
  IN_PROGRESS
}

`
export default typeDefs
