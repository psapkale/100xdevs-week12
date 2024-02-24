type AnotherUser = {
   id: string;
   name: string;
};

type Users = Record<string, AnotherUser>;

const users: Users = {
   abc123: { id: 'abc123', name: 'harkirat' },
   xyz789: { id: 'xyz789', name: 'prem' },
};

console.log(users['abc123']); // { id: 'abc123', name: 'harkirat' }
