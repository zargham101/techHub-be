const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ConfigurationSchema = new Schema({
    
    building: [{
        type: String,
        trim: true
    }],
    ownerName: [{
        type: String,
        trim: true
    }],
    mobileNo: [{
        type: String,
        trim: true
    }],
    floor: [{
        type: String,
        trim: true
    }],
    Rooms: [{
        type: String,
        trim: true
    }],
    land: [{
        type: String,
        trim: true
    }],
    rent: [{
        type: String,
        trim: true
    }],
    contract: [{
        type: String,
        trim: true
    }],
    bankName: [{
        type: String,
        trim: true
    }],
    accountTitle: [{
        type: String,
        trim: true
    }],
    accountNumber: [{
        type: String,
        trim: true
    }],
}, { timestamps: true });

module.exports = mongoose.model('Configuration', ConfigurationSchema);