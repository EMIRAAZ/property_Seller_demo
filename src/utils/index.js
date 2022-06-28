import jwt_decode from 'jwt-decode';

export const makeUrlParam = paramObject => {
  const keyArray = Object.keys(paramObject);
  let paramString = '';
  let nestedParam = '';

  for (let i = 0; i < keyArray.length; i++) {
    if (paramObject[keyArray[i]]) {
      if (paramString !== '') paramString += '&';
      if (typeof paramObject[keyArray[i]] === 'object') {
        nestedParam = makeUrlParam(paramObject[keyArray[i]]);
      }
      paramString += `${keyArray[i]}=${paramObject[keyArray[i]]}`;
      if (nestedParam !== '') {
        paramString += nestedParam;
      }
    }
  }

  return paramString;
};

export const checkAuth = role => {
  const token = `Bearer_${localStorage.getItem('authToken')}`;
  try {
    var decoded = jwt_decode(token);
  } catch (err) {
    localStorage.clear();
    return false;
  }
  if (decoded.exp < Date.now() / 1000) {
    localStorage.clear();
    return false;
  }
  return decoded.role && role === decoded.role;
};

export const titleCase = str =>
  str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());

export const checkIfAllKeyHasValue = (obj, keyArr) => {
  for (var i = 0; i < keyArr.length; i++) {
    if (!obj[keyArr[i]]) {
      return true;
    }
  }
  return false;
};
