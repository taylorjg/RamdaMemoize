const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-things'));
const R = require('ramda');

describe('R.memoize', () => {

    it('memoized partially applied curried lambda (1)', () => {
        let count = 0;
        const f = a => b => {
            count++;
            return a + b;
        };
        const m = R.memoize(f(41));
        const xs = [1, 1, 1];
        const ys = xs.map(x => m(x));
        expect(ys).to.all.equal(42);
        expect(count).to.equal(1);
    });

    it('memoized partially applied curried lambda (2)', () => {
        let count = 0;
        const f = a => b => {
            count++;
            return a + b;
        };
        const m = R.memoize(f(41));
        const xs = [1, 1, 1];
        const ys = xs.map(m);
        expect(ys).to.all.equal(42);
        expect(count).to.equal(1);
    });
});
