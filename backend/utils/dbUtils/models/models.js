import mongoose from "mongoose";

// Define the database schema
const hostSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName:{ type: String, required: true },
    dateOfBirth: { type: Date, required: false },
    gender: { type: String, required: true },
    email: {type: String},
    contact: {type: String},
    nationality: {type: String},
    username: { type: String, required: true },
    password: { type: String, required: true },
    organizationName: {type: String},
    position: {type: String},
    website: {type: String},
    socialLink1: {type: String},
    socialLink2: {type: String},
    socialLink3: {type: String},
    aboutMe: {type: String},
    references: {type: String},
    portfolioFiles: [{ type: String, required: false }],
  })

  const guestSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName:{ type: String, required: true },
    dateOfBirth: { type: Date, required: false },
    gender: { type: String, required: true },
    email: {type: String},
    contact: {type: String},
    nationality: {type: String},
    username: { type: String, required: true },
    password: { type: String, required: true },
    profilePic: { type: String },
  })

  const eventSchema = new mongoose.Schema({
    eventName: {type: String},
    eventDescription: {type: String},
    eventDateTime: {type: Date},
    eventDuration: {type: Number},
    eventCategory: [ {type: String} ],
    eventLocation: [{
      city: {type: String}, 
      region: {type: String}, 
      description:{type: String} , 
      latitude:{type: String},
      longitute: {type: String}}
    ],
    eventReview: [
      {
        rating: { type: Number },
        review: { type: String },
      },
    ],
    eventLink: {type: String},
    EventUpdate: {type: String},
    bookingDeadline: {type: Date},
    address: {type: String},
    eventStatus: {type: String},
    eventHost: { type: mongoose.Schema.Types.ObjectId, ref: 'hostModel' },
    ticketQty: {type: Number},
    ticketType: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ticketModel' }],
    eventImages: [{type: String}]
  })

  const ticketSchema = new mongoose.Schema({
    ticketCategory: {type: String},
    rate: {type: Number}
  })

  const eventCategorySchema = new mongoose.Schema({
    categoryName: {type: String},
    description: {type: String}
  })

  const guestModel = mongoose.model('guestModel', guestSchema);
  const hostModel = mongoose.model('hostModel', hostSchema);
  const ticketModel = mongoose.model('ticketModel', ticketSchema);
  const eventModel = mongoose.model('eventModel', eventSchema);
  const eventCategoryModel = mongoose.model('eventCategoryModel', eventCategorySchema);

  export {hostModel, guestModel, ticketModel, eventModel, eventCategoryModel}