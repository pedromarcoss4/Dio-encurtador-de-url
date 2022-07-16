import { response } from 'express';
import shortId from 'shortid'
export class URLController{
    public async shorten(req: Request,res: Response): Promise<void>{
    // conferir se a url já existe]
    const {originURL} = req.body;
    const url = await URLModel.findOne({originURL})
    if (url){
        response.json(url)
        return
    }

    //criar o hash da url
    
    const hash = shortId.generate();
    const shortURL = '${config.API_URL}/${hash}'
    const newurl = await URLmodel.create({originURL,hash, shortURL})
    //salvar a url no banco
    //retornar a url
    Response.json({originURL,hash, shortURL})
    }
    public async redirect(req:Request,res:Response):Promise<void>{
        //get hash
        const {hash} = req.params
        //find url 
        const url =  {
        originURL:"mongodb+srv://pedromarcos4:<password>@diourl.8ud8p.mongodb.net/?retryWrites=true&w=majority"
        hash:''
        shortURL:''
        response.redirect(url.originURL)
        }
        //redirect 
    }
}