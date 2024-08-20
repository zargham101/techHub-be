const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Reference = Schema.Types.ObjectId;

const UserModel = new Schema({
    clientName: {
        type: String,
        trim: true
    },
    contactNumber: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    companyUser:{
        type: Reference,
        ref: 'Company'
    },
    companyName: {
        type: String,
        trim: true
    },
    businessActivity: {
        type: String,
        trim: true
    },
    website: {
        type: String,
        trim: true
    },
    dateOfJoining: {
        type: String,
        trim: true
    },
    dateOfLeaving: {
        type: String,
        trim: true
    },
    securityDeposit: {
        type: String,
        trim: true
    },
    bankName: {
        type: String,
        trim: true
    },
    bankAccNumber: {
        type: String,
        trim: true
    },
    bankAccTitle: {
        type: String,
        trim: true
    },
    officeTiming: {
        type: String,
        trim: true
    },
    workingDays: {
        type: String,
        trim: true
    },
    
    cnic: {
        type: String,
        trim: true
    },
    cnicFront: {
        type: String,
        trim: true
    },
    cnicBack: {
        type: String,
        trim: true
    },
    policeVerification: {
        type: String,
        trim: true
    },
    passportSizePicture: {
        type: String,
        trim: true
    },
    aggrement: {
        type: String,
        trim: true
    },
    isDeleted: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

const autoPopulate = function (next) {
    this.populate('Company');
    next()
}

UserModel 
    .pre('find', autoPopulate)
    .pre('findOne', autoPopulate)
    
module.exports = mongoose.model('User', UserModel);