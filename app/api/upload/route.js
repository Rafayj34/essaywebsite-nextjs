import nodemailer from "nodemailer";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    const originalname = file.originalname;
    const filenameWithoutExtension = path.parse(originalname).name; // Extract filename without extension
    const extension = originalname.split(".").pop();
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, filenameWithoutExtension + "-" + uniqueSuffix + "." + extension);
  },
});

const upload = multer({ storage: storage }).array("files", 5);

export const POST = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return new Response("Error uploading files", { status: 500 });
    }

    const { email, phoneNumber } = req.body;
    const files = req.files; // Use req.files for multiple file uploads
    if (!files || files.length === 0) {
      return new Response("No files uploaded.", { status: 400 });
    }

    console.log("Received email:", email);
    console.log("Received phone number:", phoneNumber);

    // Your email address where you want to receive the files
    const toEmail = "rafayj34@gmail.com"; // Replace with the actual recipient email
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      secure: false,
      auth: {
        user: "arhambaig.amir@gmail.com",
        pass: "zNdkGtCm0hfMyWJA",
      },
    });

    const mailOptions = {
      from: "arhambaig.amir@gmail.com",
      to: toEmail,
      subject: `${email} ${phoneNumber}`,
      text: `asd`,
      attachments: files.map((file) => ({
        filename: file.originalname,
        path: file.path, // Use the actual file path here
      })),
    };
    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
      files.forEach((file) => {
        fs.unlinkSync(file.path); // Delete the file synchronously
      });

      return new Response("File upload and email sent successfully", {
        status: 200,
      });
    } catch (error) {
      return new Response("Failed to submit form", { status: 500 });
    }
  });
};
