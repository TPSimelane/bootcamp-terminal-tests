import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";

describe('Total Phone Bill function', function(){
    it('should be able to calculate your phone bill',function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms')); 
    });
});