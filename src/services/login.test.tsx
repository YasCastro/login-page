import { login } from "./login"

describe('login', () => {
  const mockAlert = jest.fn()
  window.alert = mockAlert
  it('should show a welcome alert', () => {
    login()
    expect(mockAlert).toHaveBeenCalledWith('Bem vinda!')
  })
})