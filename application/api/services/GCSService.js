module.exports = {
  get_file: (req, inputName) =>
    new Promise((resolve, reject) => {
      req.file(inputName).upload({}, (err, uploadedFiles) => {
        if (err) reject(err);
        const file = uploadedFiles.length > 0 ? uploadedFiles[0] : null;
        resolve(file);
      });
    }),

  upload: async (file, dir = "documents") => {
    const { filename: name, fd, type, size } = file;
    const slug = UUID();
    const extension = name.split(".").pop();
    const destination = `${dir}/${slug}.${extension}`;
    await GoogleCloudBucket.upload(fd, { public: true, destination });
    const { bucket_name } = sails.config.custom.googleCloud;
    return {
      name,
      type,
      extension,
      size,
      url: `https://storage.cloud.google.com/${bucket_name}/${destination}`
    };
  }
};
