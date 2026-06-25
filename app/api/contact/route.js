import { NextResponse } from 'next/server'

export async function POST(request) {
  const { name, email, company, phone, message } = await request.json()

  console.log('--- New Contact Submission ---')
  console.log(`Name:    ${name}`)
  console.log(`Email:   ${email}`)
  console.log(`Company: ${company}`)
  console.log(`Phone:   ${phone || 'Not provided'}`)
  console.log(`Message: ${message}`)
  console.log('------------------------------')

  return NextResponse.json({ success: true })
}
