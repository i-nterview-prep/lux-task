export interface User {
  id: String,
  email: String,
  first_name: String,
  last_name: String,
  avatar: String
}

export interface UserResponse {
  data: User[]
}
