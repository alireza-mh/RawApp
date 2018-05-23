import {bigTest} from "./main";
import jest from "jest";

test("add  2 + 2 = 4", () => {
   expect(bigTest(2,2)).toBe(4);
});