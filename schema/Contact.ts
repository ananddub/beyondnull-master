import mongoose from "mongoose";


const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,

    },
    email: {
        type: String,
        required: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        lowercase: true,
        trim: true,
        maxLength: 100,
    },
    subject: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    message: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 2000,

    },
    createdAt: { type: Date, default: Date.now },
}, {
    timestamps: true,  // adds createdAt and updatedAt fields automatically

});

const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
export default Contact;