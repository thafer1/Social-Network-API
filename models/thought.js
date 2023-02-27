// Thought model
const thought = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        // Set default value to the current timestamp
        // Use a getter method to format the timestamp on query
      },
      username: {
        type: String,
        required: true,
      },
      reactions: {
        // Array of nested documents created with the reactionSchema
      },
    },
  );
  
  // Virtual that retrieves the length of the thought's reactions array field on query
thought.virtual('reactionCount').get(function () {
      return reactions.length;
    });