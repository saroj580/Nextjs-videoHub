import mongoose, {Schema, model, models} from "mongoose";

export const VideoDimension = {
    width: 1080,
    height: 1920
} as const;



export interface IVideo {
    _id?: mongoose.Types.ObjectId;
    title: string,
    description: string,
    videoURL: string,
    thubmnailURL: string,
    controls: boolean,
    transformation ?: {
        height: number,
        width: number,
        quality ?: number 
    },
    createdAt?: Date;
    updatedAt?: Date;
}

const videoSchema = new Schema<IVideo>(
    {
        title: {
            type: String, 
            required : true
        },
        description: {
            type: String,
            required: true,
        },
        videoURL: {
            type: String,
            required : true
        },
        thubmnailURL: {
            type: String,
            required : true,
        },
        controls: {
            type: Boolean,
            default : true
        },
        transformation: {
            height : {type : Number, default : VideoDimension.height},
            width: { type: Number, default: VideoDimension.width },
            quality : {type : Number, min:1, max:100}
        }
    },{timestamps:true}
)

const Video = models?.Video || model<IVideo>("Video", videoSchema);

export default Video;