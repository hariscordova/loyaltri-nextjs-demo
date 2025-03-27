import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { simpleAuthorType } from './simpleAuthorType'
import { pageType } from './pageType'

export const schema = {
  types: [blockContentType, categoryType, postType, authorType,simpleAuthorType,pageType],
}
