require('dotenv').config()
var azure = require('azure-storage')
var blobService = azure.createBlobService(process.env.AZURE_STORAGE_ACCOUNT, process.env.AZURE_STORAGE_ACCESS_KEY)


module.exports = {

    /**
     * Uploads a file to blob storage
     */
    upload: (path, name, callback) => {
        blobService.createBlockBlobFromLocalFile(process.env.AZURE_BLOB_CONTAINER, name, path, function(error, result, response) {
            if (!error) {
              var url = 'https://'+ process.env.AZURE_STORAGE_ACCOUNT +'.blob.core.windows.net/'+ process.env.AZURE_BLOB_CONTAINER + '/' + name
              return callback(url)
            }
        })
    }

}
