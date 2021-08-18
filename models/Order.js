const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema(
    {
        fileCollection: {
            type: Array
        },
        ordered: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        orderMadeBy: {
            type: String,
            required: [true, "Please enter who orders"]
        },
        price1: {
            type: String,
            required: false,
            default: ""
        },
        orderStatus: {
            type: Boolean,
            required: false
        },

        price2: {
            type: String,
            required: false,
            default: ""
        },
        submission: {
            type: Number,
            required: false,
        },
        vendor1: { 
            type: String, 
            required: false,
          
        },
        vendor2: { 
            type: String, 
            required: false,
        
        },
        date: {
            type: Date,
            required: false
        },
        category: { 
            type: String, 
            required: false,
            
        },
        catalog1: { 
            type: String,
            required: false,
            

        },
        catalog2: {
            type: String, 
            required: false,
            

        },
        description: { 
            type: String, 
            required: false,
            

        },
        msdFile: {
            type: Boolean,
            required: false
        },
        notes: {
            type: String,
            required: false
        },

        requestDay: {
            type: Date,
            required: false,
        },

        receivedDate :{
            type: Date,
            required: false
        },
        daysSinceRequest: {
            type: Number,
            required: false,
        },
        isFileAttached: {
            type: Boolean,
            required: false
        },
        numberOfItems: {
            type: Number,
            required: false,
            default: 1
        },
        numberOfFiles: {
            type: Number,
            required: false,
            default: 0
        },
        milestone:{
            type: Number,
            required: false

        }
        

    },
    { timestamps: true }
)

module.exports = mongoose.model('orders', Order);
