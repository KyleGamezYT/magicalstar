# ShareX Configuration Setup

This guide will help you configure ShareX to upload files directly to your MXTOR ShareX Dashboard.

## 📋 Prerequisites

- ShareX installed on your computer
- Your MXTOR website deployed and accessible

## 🚀 Setup Instructions

### Method 1: Import Configuration File (Recommended)

1. **Download the configuration file:**
   - Use `sharex-config-simple.sxcu` for basic setup
   - Use `sharex-config.sxcu` if you want to add authentication later

2. **Import into ShareX:**
   - Open ShareX
   - Go to `Destinations` → `Destination Settings`
   - Click `Import` and select the `.sxcu` file
   - The new destination will appear as "MXTOR ShareX Dashboard"

3. **Set as default (optional):**
   - Go to `Destinations` → `Destination Settings`
   - Right-click on "MXTOR ShareX Dashboard"
   - Select `Set as default image uploader`

### Method 2: Manual Configuration

1. **Open ShareX Destinations:**
   - Go to `Destinations` → `Destination Settings`

2. **Add Custom Uploader:**
   - Click `Add` → `Custom uploader settings`
   - Fill in the following details:

```
Name: MXTOR ShareX Dashboard
Request URL: https://mxtor.net/api/upload
Request method: POST
File form name: file
Response type: Text
URL: https://mxtor.net/sharex-dashboard/{json:$.id}
```

3. **Save the configuration**

## 🎯 Usage

### Screenshots
- Press `PrtScn` or use ShareX's screenshot hotkeys
- Images will be uploaded to your dashboard
- You'll get a URL like: `https://mxtor.net/sharex-dashboard/abc123`

### File Uploads
- Right-click on any file
- Select `ShareX` → `Upload file`
- Files will be uploaded to your dashboard

### Text Uploads
- Use ShareX's text upload feature
- Text will be saved and accessible via your dashboard

## 🔧 Configuration Options

### Basic Configuration (`sharex-config-simple.sxcu`)
- No authentication required
- Simple setup
- Works immediately

### Advanced Configuration (`sharex-config.sxcu`)
- Includes authentication headers
- Supports file deletion
- More secure for production use

## 📁 File Storage

Uploaded files are stored in:
- `public/uploads/` directory
- Files are renamed with unique IDs
- Accessible via your dashboard URLs

## 🔗 URL Structure

Your uploaded files will be accessible at:
```
https://mxtor.net/sharex-dashboard/[fileId]
```

Example:
- Screenshot: `https://mxtor.net/sharex-dashboard/abc123`
- Document: `https://mxtor.net/sharex-dashboard/def456`
- Video: `https://mxtor.net/sharex-dashboard/ghi789`

## 🛠️ Troubleshooting

### Common Issues:

1. **Upload fails:**
   - Check if your website is accessible
   - Verify the API endpoint is working
   - Check file size limits

2. **URL not working:**
   - Ensure the file was uploaded successfully
   - Check the file ID in the response

3. **Configuration not importing:**
   - Make sure you're using the correct ShareX version
   - Try manual configuration instead

### Testing the Setup:

1. Take a screenshot using ShareX
2. Check if the file appears in your dashboard
3. Verify the URL works when shared

## 🔒 Security Notes

- The simple configuration doesn't require authentication
- For production use, consider adding API keys
- Monitor your uploads directory for storage management
- Consider implementing file size limits

## 📞 Support

If you encounter issues:
1. Check the ShareX logs
2. Verify your website is running
3. Test the API endpoint directly
4. Check file permissions on the uploads directory

---

**Happy uploading! 🚀** 