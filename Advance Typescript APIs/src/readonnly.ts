type StrictUser = {
   readonly name: string;
   readonly age: number;
};

const user: StrictUser = {
   name: 'harkirat',
   age: 19,
};

// user.age = 21; // Cannot assign to 'age' because it is a read-only property.

// Or
type StrictUser2 = {
   name: string;
   age: number;
};

const user2: Readonly<StrictUser2> = {
   name: 'harkirat',
   age: 19,
};

// user2.age = 21; // Cannot assign to 'age' because it is a read-only property.
