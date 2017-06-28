import reduce from 'lodash/reduce'
import isNull from 'lodash/isNull'
import isUndefined from 'lodash/isUndefined'
import isArray from 'lodash/isArray'

export const objectToQueryString = obj => {
  var qs = reduce(
    obj,
    (result, value, key) => {
      if (!isNull(value) && !isUndefined(value)) {
        if (isArray(value)) {
          result += reduce(
            value,
            (result1, value1) => {
              if (!isNull(value1) && !isUndefined(value1)) {
                result1 += key + '=' + value1 + '&'
                return result1
              } else {
                return result1
              }
            },
            '',
          )
        } else {
          result += key + '=' + value + '&'
        }
        return result
      } else {
        return result
      }
    },
    '',
  ).slice(0, -1)
  return qs
}
