import * as assert from 'assert';
import greeter from '../../src/renderer/greeter';

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not exist', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
    describe('greeter', function() {
        it('get Hello', function() {
            assert.strictEqual(greeter("test"), "Hello, test");
        })
    });
});
