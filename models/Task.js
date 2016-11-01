const mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    userId: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
});

export default mongoose.model('Task', taskSchema);
