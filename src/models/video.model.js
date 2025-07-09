import mongoose, { Schema, trusted, Types } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String,
            require: ture
        },
        thumbnail: {
            type: String,
            require: ture
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "Owner"
        },
        title:{
            type: String,
            require: ture
        },
        description: {
            type: String,
            require: true
        },
        duration: {
            type: Number,
            require: ture
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: trusted
        },
        owner: {
            type: Schema > Types.ObjectId,
            ref: "Owner"
        },



    },{ timestamps: true}
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)