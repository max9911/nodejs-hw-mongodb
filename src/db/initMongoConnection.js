import mongoose from 'mongoose';

const contactsDB_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}/${process.env.MONGODB_DB}?retryWrites=true&w=majority&appName=max9911`;
console.log(contactsDB_URI);
async function initMongoConnection() {
    try {
        await mongoose.connect(contactsDB_URI)
        console.log('Database connection successful to DB01');
    }
    catch (err) {
      console.error('Error while conecting to DB01', err);
      throw err;
    };
}
export { initMongoConnection };
