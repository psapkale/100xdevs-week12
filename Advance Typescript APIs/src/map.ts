type UserMap = {
   id: string;
   name: string;
};

const usersMap = new Map<string, UserMap>();

usersMap.set('abc123', { id: 'abc123', name: 'harkirat' });
usersMap.set('abc123', { id: 'xyz789', name: 'prem' });

console.log(usersMap.get('abc123'));

usersMap.delete('xyz789');
