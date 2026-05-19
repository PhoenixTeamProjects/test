// 联系表单 API - 发送邮件
// 修改说明：在下方填入你的 SMTP 信息

import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// 👉 在这里填入你的 SMTP 配置
// 推荐使用QQ邮箱、163邮箱或 SendGrid、Mailgun 等服务
const SMTP = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  user: process.env.SMTP_USER || '',
  pass: process.env.SMTP_PASS || '',
  from: process.env.SMTP_FROM || 'noreply@huanyukuntai.com',
  // 👉 改成你自己的收件邮箱，多个用逗号分隔
  to: process.env.CONTACT_TO || 'sales@huanyukuntai.com',
}

function createTransporter() {
  if (!SMTP.user || !SMTP.pass) {
    return null
  }
  return nodemailer.createTransport({
    host: SMTP.host,
    port: SMTP.port,
    secure: SMTP.secure,
    auth: {
      user: SMTP.user,
      pass: SMTP.pass,
    },
  })
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, product, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required.' }, { status: 400 })
    }

    const transporter = createTransporter()

    if (!transporter) {
      // 无 SMTP 配置时，返回成功（方便测试）
      console.log('Contact form submission (no SMTP configured):', { name, email, company, message })
      return NextResponse.json({ 
        success: true, 
        info: 'SMTP not configured — message logged to server console.',
        data: { name, email, company, product, message }
      })
    }

    const mailOptions = {
      from: `"Huanyu Kuntai Website" <${SMTP.from}>`,
      to: SMTP.to,
      replyTo: email,
      subject: `New Inquiry from ${name}${company ? ` (${company})` : ''} - ${product || 'General'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1e3a5f; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">New Inquiry from Huanyu Kuntai Website</h2>
          </div>
          <div style="padding: 24px; background: #f8fafc;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #64748b; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: bold; color: #1e3a5f;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Company</td><td style="padding: 8px 0; color: #1e3a5f;">${company || '-'}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Product</td><td style="padding: 8px 0; color: #1e3a5f;">${product || 'General Inquiry'}</td></tr>
            </table>
            <div style="margin-top: 20px; padding: 16px; background: white; border-radius: 8px; border-left: 4px solid #f97316;">
              <p style="margin: 0; color: #1e3a5f; font-weight: bold;">Message:</p>
              <p style="margin: 8px 0 0; color: #374151; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin-top: 20px; color: #94a3b8; font-size: 12px;">
              Submitted at: ${new Date().toISOString()}
            </p>
          </div>
        </div>
      `,
      text: `New Inquiry from ${name}${company ? ` (${company})` : ''}\nEmail: ${email}\nProduct: ${product || 'General'}\n\nMessage:\n${message}`,
    }

    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
  }
}
