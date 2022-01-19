import { JokifyPipe } from './jokify.pipe';

describe('JokifyPipe', () => {
  it('create an instance', () => {
    const pipe = new JokifyPipe();
    expect(pipe).toBeTruthy();
  });
});
