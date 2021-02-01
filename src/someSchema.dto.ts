import { Injectable } from "@nestjs/common"
import { Transform } from "class-transformer"
import { IsISO8601, IsNumber, IsString} from "class-validator"

@Injectable()
export class someSchema{

    @IsNumber()
    //@Transform(value => {console.log(value);return parseInt(value.value)})
    @Transform(param => parseInt(param.value))
    num: number

    @IsString()
    str: string 

    @IsISO8601()
    date: string
}