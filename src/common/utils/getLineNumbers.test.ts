import { verifyUserCode } from './verifyUserCode';

test('verify user code text and return result of verification', () => {
  const userCode = `let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
if (year < 2015) {


  alert( 'Это слишком рано...' );
} else if (year > 2015) {

  alert( 'Это поздновато' );
} else {


                   
  alert( 'Верно!' );
}`;

  const rightCode = `let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
if (year < 2015) {
  alert( 'Это слишком рано...' );
} else if (year > 2015) {
  alert( 'Это поздновато' );
} else {
  alert( 'Верно!' );
}`;

  const result = verifyUserCode(userCode, rightCode);

  expect(result.isDifference).toBe(true);
});
