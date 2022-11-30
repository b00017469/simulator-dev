import React, { useState } from 'react';

import { ReturnComponentType } from '../../common/types/ReturnComponentType';
import { codeCategories } from '../../db/codeCategories';

export const Training = (): ReturnComponentType => {
  const [userText, setUserText] = useState<string>('');
  const def = codeCategories[0].subcategories[0].code[0].content;

  console.log(userText === def);

  return (
    <div>
      <h2>Трениковка по CSS</h2>
      <div>
        <textarea value={def} readOnly />
      </div>
      <div>
        <textarea value={userText} onChange={e => setUserText(e.currentTarget.value)} />
      </div>
      <button type="button">Проверить</button>
    </div>
  );
};
