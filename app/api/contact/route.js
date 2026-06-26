export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  const { name, email, company, phone, message } = await request.json()

  try {
    const port = Number(process.env.SMTP_PORT) || 587
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"AV Sales Consulting Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: 'pete@avsalesconsulting.com',
      replyTo: email,
      subject: `New enquiry from ${name} - ${company}`,
      text: [
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Company: ${company}`,
        `Phone:   ${phone || 'Not provided'}`,
        '',
        `Message:`,
        message,
      ].join('\n'),
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${message}</p>
      `,
    })
  } catch (err) {
    console.error('Email send failed:', err)
    return NextResponse.json({ success: false }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
