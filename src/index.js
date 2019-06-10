import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose';
import Task from './models'
import typeDefs from './typeDefs'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query, Mutation
  },
  context: {
    models: {
      Task,
    }
  }
})

mongoose.connect('mongodb://localhost:27017/Scrum', { useNewUrlParser: true })
  .then(() => {
    console.log('DB connected');
    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  })
  .catch(err => {
    console.log('Something wen Wrong :( \n', err)
  });
