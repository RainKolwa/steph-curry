import { schema } from 'normalizr'

const userSchema = new schema.Entity(
  'users',
  {},
  {
    idAttribute: user => user.login.toLowerCase(),
  },
)

const taskSchema = new schema.Entity(
  'tasks',
  {},
  {
    idAttribute: task => task.id,
  },
)

const postSchema = new schema.Entity(
  'posts',
  {},
  {
    idAttribute: post => post.id,
  },
)

export const Schemas = {
  USER: userSchema,
  USER_ARRAY: [userSchema],
  TASK: taskSchema,
  TASK_ARRAY: [taskSchema],
  POST: postSchema,
  POST_ARRAY: [postSchema],
}
