import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:  true,
        unique: true,
    },
    email: {
        type: String,
        required:  true,
        unique: true,
    },
    password: {
        type: String,
        required:  true,
    },
    avatar: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw0cRbMhvEzdOgfwh0p3ufzF&ust=1701403221438000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCNiK8obr6oIDFQAAAAAdAAAAABAE",
    },
},{timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;
