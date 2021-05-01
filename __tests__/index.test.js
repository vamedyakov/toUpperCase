import toUpperCase from '../index';

describe('toUpperCase strings', () => {
  it('empty', () => {
    expect(toUpperCase('')).toEqual('');
  });
  it('undefined', () => {
    expect(toUpperCase(undefined)).toEqual('');
  });
  it('helLo woRld --> HELLO WORLD', () => {
    expect(toUpperCase('helLo woRld')).toEqual('HELLO WORLD');
  });
  it('helL@ w@R1d --> HELL@ W@R1D', () => {
    expect(toUpperCase('helL@ w@R1d')).toEqual('HELL@ W@R1D');
  });
  it('Russian chars привет --> ПРИВЕТ', () => {
    expect(toUpperCase('привет')).toEqual('ПРИВЕТ');
  });
  it('German chars üñïçødê --> ÜÑÏÇØDÊ', () => {
    expect(toUpperCase('üñïçødê')).toEqual('ÜÑÏÇØDÊ');
  });
  it('Russian chars её --> ЕЁ', () => {
    expect(toUpperCase('её')).toEqual('ЕЁ');
  });
});
