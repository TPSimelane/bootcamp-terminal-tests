import assert from "assert";
import transportFee from "../transportFee.js";

describe('Transport Fee function', function(){
    it('should be able to calculate the transport fee',function(){
        assert.equal(transportFee('morning'), 'R20');         
    });
});