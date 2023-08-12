import nodemailer from "nodemailer";

export const POST = async (req, res) => {
  try {
    const { name, email, phoneNumber, query } = await req.json();

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
      subject: `Query received from ${email}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Query: ${query}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully")
    return new Response("Form submiited successfully", { status: 200 });
} catch (error) {
  console.error("Error handling form data:", error);
  return new Response("Failed to submit form", { status: 500 });
}
};
