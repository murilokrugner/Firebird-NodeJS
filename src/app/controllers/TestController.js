import base64ToImage from 'base64-to-image';

class TestControllers {
    async index(req, res) {

       const base64Str = req.query.base;
       const id = req.query.id;

       console.log(base64Str);
       console.log(id);

       const path = '/';
       const optionalObj = {'fileName': id, 'type':'png'};
       base64ToImage(base64Str,path,optionalObj);
       const imageInfo = base64ToImage(base64Str,path,optionalObj);  
       
       return res.json(imageInfo);
    }
}

export default new TestControllers();