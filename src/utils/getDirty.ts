
let resultObj: {[key: string]: any} = {}
const getTreeData = <T extends Object>(values: T, initialValues: T): any => {
  if (Array.isArray(values) && Array.isArray(initialValues)) {
    return values?.map((item: string | number, index: number) => ({
      values: item,
      initValues: initialValues[index],
      tree: index === values.length - 1,
      status: item !== initialValues[index]
    }))
  }

  let obj: {[key: string]: any} = {}
  if (typeof values === 'object' && typeof initialValues === 'object') {
    for (let key in values) {
      const valuesData = values[key]
      const initValues = initialValues[key]

      obj[key] = {
        values: valuesData,
        initValues,
        tree: getTreeData(valuesData as object, initValues as object),
        status: valuesData !== initValues,
      }
    }

    return obj
  }

  return false
}

export const getDirty = <T extends Object>(values: T, initialValues: T) => {
    for (let key in values) {
      console.log('values[key] ', values[key])
      console.log('key ', key)
      const valuesData = values[key]
      const initValues = initialValues[key]

      resultObj[key] = {
        values: valuesData,
        initValues,
        tree: getTreeData(valuesData as object, initValues as object),
        status: valuesData !== initValues,
      }

  }

  return resultObj

}

module.exports = getDirty



const values = {
  Foo: '123',
  Bar: [456, 789],
  Baz: {
    Foo1: '789',
    Bar1: '0011',
    Baz1: {
      Foo2: '2233',
      Bar2: 4455
    }
  }
}

const initialValues = {
  Foo: '123',
  Bar: [456, 7891],
  Baz: {
    Foo1: '7891',
    Bar1: '0011',
    Baz1: {
      Foo2: '2233',
      Bar2: 44551
    }
  }
}


// getDirty<any>(values, initialValues)

const data = {
  "Foo": {
    "value": "123",
    "initValue": "123",
    "tree": false,
    "status": false
  },
  "Bar": {
    "value": [
      456,
      7891
    ],
    "initValue": [
      456,
      7891
    ],
    "tree": [
      {
        "value": 456,
        "initValue": 456,
        "tree": false,
        "status": false
      },
      {
        "value": 789,
        "initValue": 7891,
        "tree": true,
        "status": true
      }
    ],
    "status": true
  },
  "Baz": {
    "value": {
      "Foo1": "7891",
      "Bar1": 9,
      "Baz1": {
        "Foo2": "2233",
        "Bar2": 44551
      }
    },
    "initValue": {
      "Foo1": "7891",
      "Bar1": 9,
      "Baz1": {
        "Foo2": "2233",
        "Bar2": 44551
      }
    },
    "tree": {
      "Foo1": {
        "value": "7891",
        "initValue": "7891",
        "tree": true,
        "status": true
      },
      "Bar1": {
        "value": 9,
        "initValue": 9,
        "tree": false,
        "status": false
      },
      "Baz1": {
        "value": {
          "Foo2": "2233",
          "Bar2": 44551
        },
        "initValue": {
          "Foo2": "2233",
          "Bar2": 44551
        },
        "tree": {
          "Foo2": {
            "value": "2233",
            "initValue": "2233",
            "tree": false,
            "status": false
          },
          "Bar2": {
            "value": 44551,
            "initValue": 44551,
            "tree": true,
            "status": true
          }
        },
        "status": true
      }
    },
    "status": true
  }
}
