import { IBodyDom, IParam } from '@@/interfaces/dom'
import { DEFAULT_FILTER } from '@/contants/filter'

export const getDom = () => {
  console.log({ DEFAULT_FILTER })
  return document.querySelector('body') as IBodyDom
}

export const transformParam = (param: IParam) => {
  return param.search + param.sort
}
