import mongoose from 'mongoose';

const documentSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: false
    },
    data: {
        type: Object,
        required: true
    }
});

const document = mongoose.model('document', documentSchema);

export default document;