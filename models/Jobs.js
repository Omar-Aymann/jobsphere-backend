const { default: mongoose } = require("mongoose");

const jobsSchema = mongoose.Schema(
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        company: {type: String, required: true},
        created_at: {type: Date, required: true}
    }
)

module.exports = mongoose.model("Jobs", jobsSchema);
