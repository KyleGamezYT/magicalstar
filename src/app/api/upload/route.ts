
import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import { existsSync, mkdirSync } from 'fs'

const SECRET_KEY = "KEYGOESHERE" // Set this as your secret key
const SHAREX_DIR = "images/" // File directory
const DOMAIN_URL = "https://mxtor.net" // Your domain
const LENGTH_OF_STRING = 5 // Length of the filename

function randomString(length: number): string {
  const keys = '0123456789abcdefghijklmnopqrstuvwxyz'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += keys[Math.floor(Math.random() * keys.length)]
  }
  return result
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const secret = formData.get('secret') as string
    const file = formData.get('sharex') as File

    // Check if secret is provided
    if (!secret) {
      return NextResponse.json(
        'No post data recieved',
        { 
          status: 400,
          headers: { 
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
          }
        }
      )
    }

    // Validate secret key
    if (secret !== SECRET_KEY) {
      return NextResponse.json(
        'Invalid Secret Key',
        { 
          status: 401,
          headers: { 
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
          }
        }
      )
    }

    // Check if file is provided
    if (!file) {
      return NextResponse.json(
        'File upload failed - No file provided',
        { 
          status: 400,
          headers: { 
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
          }
        }
      )
    }

    // Generate random filename
    const filename = randomString(LENGTH_OF_STRING)
    const fileExtension = file.name.split('.').pop() || 'bin'
    const finalFilename = `${filename}.${fileExtension}`

    // Create images directory if it doesn't exist
    const uploadsDir = join(process.cwd(), 'public', SHAREX_DIR)
    if (!existsSync(uploadsDir)) {
      mkdirSync(uploadsDir, { recursive: true })
    }

    // Save file
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const filePath = join(uploadsDir, finalFilename)
    
    try {
      await writeFile(filePath, buffer)
      
      // Return the direct URL like the PHP script
      const fileUrl = `${DOMAIN_URL}/${SHAREX_DIR}${finalFilename}`
      return new NextResponse(fileUrl, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      })
    } catch (writeError) {
      return NextResponse.json(
        'File upload failed - CHMOD/Folder doesn\'t exist?',
        { 
          status: 500,
          headers: { 
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
          }
        }
      )
    }

  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      'File upload failed - Server error',
      { 
        status: 500,
        headers: { 
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin': '*'
        }
      }
    )
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Upload API is running',
    timestamp: new Date().toISOString()
  }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  })
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  })
}
