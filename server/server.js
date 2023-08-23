const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");

const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from your frontend
  methods: ['GET', 'POST'],
};

app.use(cors(corsOptions));
app.use(express.json()); // Middleware to parse JSON request body
app.use("/public/temp", express.static(path.join(__dirname, "public/temp")));
app.use(express.static("public"));

const multer = require("multer");
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

const upload = multer({ storage: storage }).array("files", 5); // Allow up to 5 files

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/upload", (req, res) => {
 
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: "Error uploading files" });
    }

    const { email, phoneNumber } = req.body;
    const files = req.files; // Use req.files for multiple file uploads
    if (!files || files.length === 0) {
      return res.status(400).json({ error: "No files uploaded." });
    }

    console.log("Received email:", email);
    console.log("Received phone number:", phoneNumber); // Display the received phone number

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

      res
        .status(200)
        .json({ message: "Email Sent" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error Sending Email" });
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
