import { writeFile, unlink } from 'fs/promises';
import path from 'path';
import nodemailer from 'nodemailer';
import { log } from 'console';

export async function POST(request) {
  // console.log(process.cwd());
  // console.log(__dirname);
  const data = await request.formData();
  const files = data.getAll('files');
  console.log(files);
  const email = data.get('email');
  const phoneNumber = data.get('phoneNumber');
  if (!files || files.length === 0) {
    return new Response("No Files Sent", { status: 400 });
  }
  const attachments = [];
  for (const file of files) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const tempFilePath = path.join('/tmp', file.name);
    await writeFile(tempFilePath, buffer);
    console.log(`File ${file.name} temporarily stored at ${tempFilePath}`);

    attachments.push({
      filename: file.name,
      path: tempFilePath,
    });
  }
  const toEmail = process.env.SMTPEMAIL; 
  const password = process.env.SMTPPASSWORD;
  console.log(toEmail,password)
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false,
    auth: {
      user: toEmail,
      pass: password,
    },
  });

  const mailOptions = {
    from: toEmail,
    to: toEmail,
    subject: `${email} ${phoneNumber}`,
    text: `Consultancy Requested`,
    attachments,
  };
  try {
    await transporter.sendMail(mailOptions);

    // Delete the uploaded files
    for (const attachment of attachments) {
      await unlink(attachment.path);
      console.log(`File ${attachment.filename} deleted from ${attachment.path}`);
    }

    return new Response("Email Sent Successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed To Submit Email", { status: 500 });
  }
}
