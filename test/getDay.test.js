import assert from "assert";
import getDay from "../getDay.js"; 

describe('Transport Fee function', function(){
    it('should be able tell the day of a given date',function(){
        assert.equal(getDay('2010-04-01'), "Thursday");        
    });
});