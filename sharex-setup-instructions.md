
# ShareX Configuration Setup

## Quick Setup for Your Repl

1. **Get Your Repl URL**: 
   - Your current Repl URL appears to be running on port 3000
   - Replace `your-repl-name.your-username.repl.co` with your actual Repl domain
   - Or use your current development URL for testing

2. **Download and Import Config**:
   - Download the `sharex-config.sxcu` file
   - Double-click it to import into ShareX
   - Update the URL in ShareX settings to match your domain

## Manual ShareX Configuration

### Custom Uploader Settings
- **Name**: Kyle's Mystical ShareX
- **Destination Type**: Image uploader, Text uploader, File uploader  
- **Method**: POST
- **Request URL**: `https://your-actual-repl-url.repl.co/api/upload`
- **File form name**: `file`
- **Body**: Multipart form data

### Response Settings
- **URL**: `$json:url$`
- **Error message**: `$json:error$`

## Testing Your Setup

1. **Test the API directly**:
   ```bash
   curl -X GET https://your-repl-url/api/upload
   ```
   Should return: `{"message":"Upload API is running","timestamp":"..."}`

2. **Test file upload**:
   ```bash
   curl -X POST -F "file=@test-image.png" https://your-repl-url/api/upload
   ```

3. **Configure ShareX**:
   - Go to Destinations → Custom uploader settings
   - Import or manually create the configuration
   - Set as default for Image/File uploads
   - Test with a screenshot

## Troubleshooting

- ✅ **API Running**: Visit `/api/upload` to verify the API responds
- ✅ **Uploads Directory**: Files will be saved to `public/uploads/`
- ✅ **CORS**: The API accepts cross-origin requests
- ✅ **File Access**: Uploaded files are accessible at `/uploads/filename`

## Current Working URLs (Development)
- API Endpoint: `http://localhost:3000/api/upload`
- File Access: `http://localhost:3000/uploads/filename`

Replace with your production URL when deploying!
