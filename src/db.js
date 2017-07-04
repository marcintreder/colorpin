import Dexie from 'dexie';

const db = new Dexie('mydb2');
db.version(1).stores({ color: '++id, hex' });

export default db;
