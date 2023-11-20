
const getDirty = require('./getDirty')

const mockFirst = {
  values: {
    Foo: '123',
  },
  initialValues: {
    Foo: 'qwer'
  }
}

const mockFirstResult = {
  "Foo": {
    "values": "123",
    "initValues": "qwer",
    "tree": false,
    "status": true
  }
}

const values = {
  Foo: '123',
  Bar: [222, 333],
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
  Bar: [111, 444],
  Baz: {
    Foo1: '7891',
    Bar1: '0011',
    Baz1: {
      Foo2: '2233',
      Bar2: 44551
    }
  }
}

const mockSecond = {
  values: {
    Foo: '123',
    Bar: [222, 333],
  },
  initialValues: {
    Foo: '123',
    Bar: [111, 444],
  }
}

const mockSecondResults = {
  "Foo": {
    "values": "123",
    "initValues": "123",
    "tree": false,
    "status": false
  },
  "Bar": {
    "values": [
      222,
      333
    ],
    "initValues": [
      111,
      444
    ],
    "tree": [
      {
        "values": 222,
        "initValues": 111,
        "tree": false,
        "status": true
      },
      {
        "values": 333,
        "initValues": 444,
        "tree": true,
        "status": true
      }
    ],
    "status": true
  },
}

const mockTheThird = {
  values: {
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
  },
  initialValues: {
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
}

const mockThirdResult = {
  "Foo": {
    "values": "123",
    "initValues": "123",
    "tree": false,
    "status": false
  },
  "Bar": {
    "values": [
      456,
      789
    ],
    "initValues": [
      456,
      7891
    ],
    "tree": [
      {
        "values": 456,
        "initValues": 456,
        "tree": false,
        "status": false
      },
      {
        "values": 789,
        "initValues": 7891,
        "tree": true,
        "status": true
      }
    ],
    "status": true
  },
  "Baz": {
    "values": {
      "Foo1": "789",
      "Bar1": '0011',
      "Baz1": {
        "Foo2": "2233",
        "Bar2": 4455
      }
    },
    "initValues": {
      "Foo1": "7891",
      "Bar1": '0011',
      "Baz1": {
        "Foo2": "2233",
        "Bar2": 44551
      }
    },
    "tree": {
      "Foo1": {
        "values": "789",
        "initValues": "7891",
        "tree": false,
        "status": true
      },
      "Bar1": {
        "values": '0011',
        "initValues": '0011',
        "tree": false,
        "status": false
      },
      "Baz1": {
        "values": {
          "Foo2": "2233",
          "Bar2": 4455
        },
        "initValues": {
          "Foo2": "2233",
          "Bar2": 44551
        },
        "tree": {
          "Foo2": {
            "values": "2233",
            "initValues": "2233",
            "tree": false,
            "status": false
          },
          "Bar2": {
            "values": 4455,
            "initValues": 44551,
            "tree": false,
            "status": true
          }
        },
        "status": true
      }
    },
    "status": true
  }
}

it('getDirty work correctly first case', () => {
  const result = getDirty(mockFirst.values, mockFirst.initialValues)
  expect(result).toEqual(mockFirstResult)
})

it('getDirty work correctly second case', () => {
  const result = getDirty(mockSecond.values, mockSecond.initialValues)
  expect(result).toEqual(mockSecondResults)
})

it('getDirty work correctly third case', () => {
  const result = getDirty(mockTheThird.values, mockTheThird.initialValues)
  expect(result).toEqual(mockThirdResult)
})