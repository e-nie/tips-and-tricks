import { sortByDate } from '..';

describe('sortByDate', () => {
    it('should compare dates', () => {
        expect(sortByDate({ created: new Date('2020-11-11') } as any, { created: new Date('2020-11-12') } as any)).toEqual(86400000);
    });
});
