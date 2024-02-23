interface User {
   id: string;
   name: string;
   age: number;
   email: string;
   password: string;
}

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>;

type UpdatePropsOptiona = Partial<UpdateProps>;

function updateUser(updatedProps: UpdateProps) {
   // hit the database to update the user
   console.log(updatedProps);
}

function updateUser2(updatedProps: UpdatePropsOptiona) {
   // hit the database to update the user
   console.log(updatedProps);
}

updateUser({ name: 'harkirat', age: 19, email: 'harkirat@gmail.com' });

updateUser2({ name: 'harkirat' }); // don't complain
