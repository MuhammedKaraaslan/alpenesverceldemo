"use server"

import nodemailer from "nodemailer"

export async function sendEmail(prevState: any, formData: FormData) {
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    if (!name || !phone || !email || !message) {
        return { success: false, message: "Lütfen tüm zorunlu alanları doldurunuz." }
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    })

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: "mhmmdkaraaslan@gmail.com",
        subject: `Yeni İletişim Formu Mesajı: ${subject || "Konusuz"}`,
        text: `
      Ad Soyad: ${name}
      Telefon: ${phone}
      E-posta: ${email}
      Konu: ${subject}
      Mesaj: ${message}
    `,
        html: `
      <h3>Yeni İletişim Formu Mesajı</h3>
      <p><strong>Ad Soyad:</strong> ${name}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>E-posta:</strong> ${email}</p>
      <p><strong>Konu:</strong> ${subject}</p>
      <p><strong>Mesaj:</strong></p>
      <p>${message}</p>
    `,
    }

    try {
        const info = await transporter.sendMail(mailOptions)
        console.log("Email sent:", info.response)
        return { success: true, message: "Mesajınız başarıyla gönderildi!" }
    } catch (error) {
        console.error("Email error details:", error)
        const errorMessage = error instanceof Error ? error.message : "Bilinmeyen bir hata oluştu"
        return { success: false, message: `Hata: ${errorMessage}` }
    }
}