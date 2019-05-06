var multer  = require('multer');

export const upload = multer({ dest: 'uploads/' });
export default upload;