import assert from "assert";
import enoughAirtime from "../enoughAirtime.js";

describe('Enough Airtime function', function(){
    it('should be able to calculate airtime',function(){
        assert.equal('R16.98', enoughAirtime('call,call,call,data,sms,sms,call,data', 50));
    });
});