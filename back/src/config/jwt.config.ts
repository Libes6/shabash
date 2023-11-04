import {JwtModuleOptions} from '@nestjs/jwt'
import {ConfigService} from '@nestjs/config'


export const getJwtConfig =async(ConfigService:ConfigService):Promise<JwtModuleOptions> =>({secret:ConfigService.get('JWT_SECRET')})