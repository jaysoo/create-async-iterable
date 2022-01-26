import { callbackToAsyncIterable } from './callback-to-async-iterable';

describe('callbackToAsyncIterable', () => {
  it('should work', () => {
    expect(callbackToAsyncIterable()).toEqual('callback-to-async-iterable');
  });
});
