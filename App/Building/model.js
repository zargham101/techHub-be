const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Reference = Schema.Types.ObjectId;

const BuildingModel = new Schema ({
   floor: {
       type: Reference,
       ref: 'Floor'
   },
   land:{
       type: String,
       trim: true
   },
   rent: {
       type : String,
       trim: true
   },
   isDeleted: {
       type: Boolean,
       default: false
   }
},{
    timestamps : true
}
);

const autoPopulate = function (next) {
    this.populate('Floor');
    next()
}

BuildingModel 
    .pre('find', autoPopulate)
    .pre('findOne', autoPopulate)

module.exports = mongoose.model('Building', BuildingModel)