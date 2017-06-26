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

// Schemas for Github API responses.
export const Schemas = {
  USER: userSchema,
  USER_ARRAY: [userSchema],
  REPO: taskSchema,
  REPO_ARRAY: [taskSchema],
}
