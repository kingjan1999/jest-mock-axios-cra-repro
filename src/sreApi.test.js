import { callEndpoint } from './sreApi'
import mockAxios from 'jest-mock-axios'

it('should call the correct endpoint', async () => {
  const promise = callEndpoint('some-data')
  mockAxios.mockResponse({ data: 'response' })
  const result = await promise

  expect(mockAxios.post).toHaveBeenCalledWith('/endpoint', 'some-data')
  expect(result.data).toBe('response')
})