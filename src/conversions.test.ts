import { expect, it } from 'vitest'
import { Chinese } from './conversions'

it('Chinese', () => {
  expect(Chinese('大哥大嫂过年好', 's2t'))
  expect(Chinese('大哥大嫂過年好', 't2s'))
})
