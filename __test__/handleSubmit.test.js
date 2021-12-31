// importing js function to test
import { handleSubmit } from "../src/client/js/formHandler";
import {postData} from "../src/client/js/formHandler";

describe('Testing the functionality', ()=>{
    test('handleSubmit() function does exit', () => {
      expect(handleSubmit).toBeDefined();
    })});


    test('Testing postData', async () =>{
        expect(postData).toBeDefined;
    })

