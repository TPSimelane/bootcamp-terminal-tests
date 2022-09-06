import assert from "assert";
import isDayName from ".../weekDay.js";

describe('weekDay function', function(){
    it('should be able to tell if a word is a day of the week',function(){
        assert.equal(isDayName('Monday'), true);
        assert.equal(isDayName('January'), false, 'January is not a day');
    });  
    });