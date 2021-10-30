import { Pack } from "./pack";
import { ResponseModel } from "./responseModel";

export interface PackResponseModel extends ResponseModel{
    data:Pack[],
}