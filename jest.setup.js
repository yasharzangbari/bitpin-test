import '@testing-library/jest-dom'

const mockFetchPromise = () => '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
global.v4 = jest.fn(() => mockFetchPromise)

// browser mocks
const localStorageMock = (function () {
  let store = {}
  return {
    getItem: function (key) {
      return store[key] || null
    },
    setItem: function (key, value) {
      store[key] = value.toString()
    },
    removeItem: function (key) {
      delete store[key]
    },
    clear: function () {
      store = {}
    },
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})
