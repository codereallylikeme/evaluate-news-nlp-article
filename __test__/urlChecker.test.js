// importing urlChecker for js test

import { urlCheck } from "../src/client/js/urlChecker";

test('urlCheck does exit',() => {
   expect(urlCheck).toBeDefined();
});