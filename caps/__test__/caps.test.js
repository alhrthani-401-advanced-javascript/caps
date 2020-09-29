'use strict';

const caps = require('../caps.js');

jest.spyOn(global.console, 'log');

describe('Test caps module', () => {
  it('Test broadcast', () => {
    const buffer = Buffer.from(JSON.stringify({ topic: 'test', payload: 'test' }), 'utf-8');
    caps.dataHandler(buffer);
    expect(console.log).toHaveBeenCalled();
  });
});