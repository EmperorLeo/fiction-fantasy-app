import { CharactersModule } from './characters.module';

describe('CharactersModule', () => {
  let charactersModule: CharactersModule;

  beforeEach(() => {
    charactersModule = new CharactersModule();
  });

  it('should create an instance', () => {
    expect(charactersModule).toBeTruthy();
  });
});
