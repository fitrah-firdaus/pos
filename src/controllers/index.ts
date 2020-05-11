import { UserController } from './User/User';
import { ItemContoller } from './Item/Item';

const userController = new UserController();
const itemController = new ItemContoller();

export {
    userController,
    itemController
};