interface User {
   id: string;
   name: string;
   age: number;
   email: string;
   password: string;
}

type UpdateProps = Pick<User, 'name' & 'age' & 'email'>;

function updateUser(updatedProps: UpdateProps) {
   // hit the database to update the user
   console.log(updatedProps);
}

updateUser({ name: 'harkirat', age: 19, email: 'harkirat@gmail.com' });
