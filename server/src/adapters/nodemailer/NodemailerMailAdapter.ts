import { IMailAdapter, SendMailData } from "../IMailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1c0e74e0e5d81b",
    pass: "2c46337a479f5b"
  }
});

export class NodemailerMailAdapter implements IMailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Arthur Lacerda <arthur.srl@gmail.com>",
      subject,
      html: body,
    });
  }
}
