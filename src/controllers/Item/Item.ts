import { Request, Response } from 'express';
import { CrudController } from '../CrudController';

import { Item } from '../../models/Item';

export class ItemContoller extends CrudController {
    public create(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, res: Response<any>): void {
        Item.create(req.body).then(item => res.json(item));
    }
    public read(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, res: Response<any>): void {
        throw new Error("Method not implemented.");
    }
    public update(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, res: Response<any>): void {
        throw new Error("Method not implemented.");
    }
    public delete(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, res: Response<any>): void {
        throw new Error("Method not implemented.");
    }

}