const reaction = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjestId,
            default: function () {new Types.ObjectId()},
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            // Set default value to the current timestamp
            // Use a getter method to format the timestamp on query
        },
    },
  );