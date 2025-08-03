import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import { existsSync, mkdirSync } from 'fs'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Generate unique ID for the file
    const fileId = Math.random().toString(36).substr(2, 8)
    const fileName = file.name
    const fileType = file.type
    const fileSize = file.size

    // Create uploads directory if it doesn't exist
    const uploadsDir = join(process.cwd(), 'public', 'uploads')
    if (!existsSync(uploadsDir)) {
      mkdirSync(uploadsDir, { recursive: true })
    }

    // Save file to public/uploads directory
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const filePath = join(uploadsDir, `${fileId}_${fileName}`)
    await writeFile(filePath, buffer)

    // Return response in ShareX expected format
    const response = {
      id: fileId,
      url: `/uploads/${fileId}_${fileName}`,
      name: fileName,
      type: fileType,
      size: fileSize,
      date: new Date().toISOString(),
      mimeType: fileType
    }

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
  return NextResponse.json({ message: 'Upload API is running' })
} 
