import { NextRequest, NextResponse } from 'next/server'
import { unlink } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const fileId = params.id
    
    // Find and delete the file
    const uploadsDir = join(process.cwd(), 'public', 'uploads')
    
    // Look for files starting with the fileId
    const fs = require('fs')
    const files = fs.readdirSync(uploadsDir).filter((file: string) => 
      file.startsWith(`${fileId}_`)
    )
    
    if (files.length === 0) {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      )
    }
    
    // Delete the file
    const filePath = join(uploadsDir, files[0])
    if (existsSync(filePath)) {
      await unlink(filePath)
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete error:', error)
    return NextResponse.json(
      { error: 'Delete failed' },
      { status: 500 }
    )
  }
}
