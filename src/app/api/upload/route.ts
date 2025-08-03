
import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import { existsSync, mkdirSync } from 'fs'
import { validateCredentials } from '../../../config/auth'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const key = formData.get('key') as string
    
    // Basic authentication check (optional - remove if you don't want auth on upload)
    const authHeader = request.headers.get('authorization')
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Generate unique ID for the file
    const fileId = Math.random().toString(36).substr(2, 8)
    const timestamp = Date.now()
    const fileExtension = file.name.split('.').pop() || 'bin'
    const sanitizedName = `${fileId}_${timestamp}.${fileExtension}`

    // Create uploads directory if it doesn't exist
    const uploadsDir = join(process.cwd(), 'public', 'uploads')
    if (!existsSync(uploadsDir)) {
      mkdirSync(uploadsDir, { recursive: true })
    }

    // Save file to public/uploads directory
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const filePath = join(uploadsDir, sanitizedName)
    await writeFile(filePath, buffer)

    // Get the full URL including domain
    const protocol = request.headers.get('x-forwarded-proto') || 'http'
    const host = request.headers.get('host') || 'localhost:3000'
    const baseUrl = `${protocol}://${host}`
    const fullUrl = `${baseUrl}/uploads/${sanitizedName}`

    // Return response in ShareX expected format
    const response = {
      url: fullUrl,
      deleteUrl: `${baseUrl}/api/delete/${fileId}`,
      name: file.name,
      type: file.type,
      size: file.size
    }

    console.log('File uploaded successfully:', response)
    return NextResponse.json(response)
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Upload API is running',
    timestamp: new Date().toISOString()
  })
}
