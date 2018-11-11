import { fillArrayConditionally } from '../fillArrayConditionally';

describe('fillArrayConditionally', () => {
    it('should contain all strings in the passed conditions object', () => {
        const conditions = {
          'one': true,
          'two': true,
        };
        expect(fillArrayConditionally(conditions)({})).toEqual(['one', 'two']);
    });

    it('should contain all strings in the passed conditions object which meet the value requirements', () => {
        const conditions = {
          'one': ({ one }) => one,
          'two': ({ two }) => two,
          'three': true,
        };
        expect(fillArrayConditionally(conditions)({ one: true })).toEqual(['one', 'three']);
    });
});
