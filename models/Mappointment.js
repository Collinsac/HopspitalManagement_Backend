import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema(
    {
        patientId: String,
        doctorId: String,
        Iscanceled: Boolean,
        startTime: String,
        endTime: String,
        note: String,
    }, { timestamps: true }
)

const appointmentModel = mongoose.model("appointments", appointmentSchema)
export default appointmentModel