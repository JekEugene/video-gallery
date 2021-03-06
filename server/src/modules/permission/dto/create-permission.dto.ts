import { DeepPartial } from 'typeorm'
import { Permission } from '../permission.model'

export interface ICreatePermissionDto extends DeepPartial<Permission> {
	userId: number
	videoId: number
	type: string
}
