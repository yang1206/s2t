import { expect, it } from 'vitest'
import { Chinese } from './conversions'

it('Chinese', () => {
  expect(Chinese.s2t('大哥大嫂过年好'))
  expect(Chinese.t2s('大哥大嫂過年好'))
  expect(Chinese.t2s('超級戰士 大戰  秋風之敦', [{ src: '超級戰士', des: '斯巴达战士' }, { src: '秋風之敦', des: '秋之柱' }]))
})
