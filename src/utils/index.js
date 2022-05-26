export const makeUrlParam = paramObject => {
  const keyArray = Object.keys(paramObject);
  let paramString = '';

  for (let i = 0; i < keyArray.length; i++) {
    if (paramObject[keyArray[i]]) {
      if (paramString !== '') paramString += '&';
      paramString += `${keyArray[i]}=${paramObject[keyArray[i]]}`;
    }
  }

  return paramString ? '?' + paramString : paramString;
};
