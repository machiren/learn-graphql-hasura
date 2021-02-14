import { formatDate } from './date'

describe('formatDate', () => {
  const now = new Date('2020-01-30 12:00:00')
  test('作成', () => {
    expect(formatDate(new Date(now), now)).toEqual({
      datetime: '2021-01-31 12:00:00',
      isNew: true,
    })
  })
})
