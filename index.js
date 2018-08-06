module.exports = function classlist (prefix = '') {
  return (arg) => {
    if (typeof arg === 'object') {
      const results = []

      if (Array.isArray(arg)) {
        for (const v of arg) {
          results.push(classlist(prefix)(v))
        }
      } else {
        for (const k of Object.keys(arg)) {
          const r = classlist(prefix + k)(arg[k])

          if (r) {
            results.push(r)
          }
        }
      }

      return results.join(' ')
    }

    if (arg === true) {
      return prefix
    }

    if (arg != null && arg !== false) {
      return prefix + arg
    }

    return ''
  }
}
