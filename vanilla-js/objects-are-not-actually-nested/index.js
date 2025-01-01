const user = {
  name: 'John',
  age: 30,
  school: {
    name: 'Harvard',
    location: 'USA'
  }
}


const userCopy = { ...user }

userCopy.school.name = 'MIT'

console.log(user.school.name) 