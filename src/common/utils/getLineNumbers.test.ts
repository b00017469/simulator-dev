import { verifyUserCode } from './verifyUserCode';

test('empty lines should be removed', () => {
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

  expect(result.userCode).toBe(rightCode);
  expect(result.isDifference).toBe(false);
});

test('strings should be equal regardless of the number of spaces', () => {
  const userCode = `le year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
if (year < 2015) {


  alert('Это слишком ран;
  } else if      (year > 2015) {

    alert('Это поздновато' );  
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
  // eslint-disable-next-line no-magic-numbers
  expect(result.linesWithMistakes).toStrictEqual([0, 2]);
});
