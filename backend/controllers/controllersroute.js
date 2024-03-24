const File = require('../Model/model.js');

const userUpload = async (req, res) => {
    const fileObject = {
        path: req.file.path,
        name: req.file.originalname
    };
    try {
        const file = await File.create(fileObject);
        console.log(file);
        return res.status(200).json({ path: `http://localhost:3000/FileSharing/${file._id}` });
    } catch (error) {
        console.log("error userUpload file", error.message);
        res.status(500).json({ error: error.message });
    }
};

const downloadImage = async (req, res) => {
    try {
        const file = await File.findById(req.params.fileId);

        if (!file) {
            return res.status(404).json({ error: "File not found" });
        }

        file.downloadContent++;
        await file.save();

        res.download(file.path, file.name);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { userUpload, downloadImage };
