import assert from "assert";
import greet from "../greet.js";

describe('Greet function should', function(){
    it('should be able to greet Bob',function(){
      assert.equal('Hello, Bob', greet('Bob'));  
    });
    });