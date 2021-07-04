const Sequelize = require('sequelize')

console.log(Sequelize.DataTypes)

/*

{
  ABSTRACT: [class ABSTRACT] { types: {}, key: 'ABSTRACT' },
  STRING: [class STRING extends ABSTRACT] {
    types: {
      postgres: [Array],
      mysql: [Array],
      mariadb: [Array],
      sqlite: [Array],
      mssql: [Array]
    },
    key: 'STRING'
  },
  CHAR: [class CHAR extends STRING] {
    types: {
      postgres: [Array],
      mysql: [Array],
      mariadb: [Array],
      sqlite: [Array],
      mssql: [Array]
    },
    key: 'CHAR'
  },
  TEXT: [class TEXT extends ABSTRACT] {
    types: {
      postgres: [Array],
      mysql: [Array],
      mariadb: [Array],
      sqlite: [Array],
      mssql: false
    },
    key: 'TEXT'
  },
  NUMBER: [class NUMBER extends ABSTRACT] { types: {}, key: 'NUMBER' },
  TINYINT: [class TINYINT extends INTEGER] {
    types: {
      postgres: [Array],
      mysql: [Array],
      mariadb: [Array],
      sqlite: [Array],
      mssql: [Array]
    },
    key: 'TINYINT'
  },
  SMALLINT: [class SMALLINT extends INTEGER] {
    types: {
      postgres: [Array],
      mysql: [Array],
      mariadb: [Array],
      sqlite: [Array],
      mssql: [Array]
    },
    key: 'SMALLINT'
  },
  MEDIUMINT: [class MEDIUMINT extends INTEGER] {
    types: { mysql: [Array], mariadb: [Array], sqlite: [Array], mssql: false },
    key: 'MEDIUMINT'
  },
  INTEGER: [class INTEGER extends NUMBER] {
    types: {
      postgres: [Array],
      mysql: [Array],
      mariadb: [Array],
      sqlite: [Array],
      mssql: [Array]
    },
    key: 'INTEGER'
  },
  BIGINT: [class BIGINT extends INTEGER] {
    types: {
      postgres: [Array],
      mysql: [Array],
      mariadb: [Array],
      sqlite: [Array],
      mssql: false
    },
    key: 'BIGINT'
  },
  FLOAT: [class FLOAT extends NUMBER] {
    types: {
      mysql: [Array],
      mariadb: [Array],
      sqlite: [Array],
      mssql: [Array]
    },
    key: 'FLOAT'
  },
  TIME: [class TIME extends ABSTRACT] {
    types: {
      postgres: [Array],
      mysql: [Array],
      mariadb: [Array],
      sqlite: [Array],
      mssql: [Array]
    },
    key: 'TIME'
  },
  DATE: [class DATE extends ABSTRACT] {
    types: {
      postgres: [Array],
      mysql: [Array],
      mariadb: [Array],
      sqlite: [Array],
      mssql: [Array]
    },
    key: 'DATE'
  },
  DATEONLY: [class DATEONLY extends ABSTRACT] {
    types: {
      postgres: [Array],
      mysql: [Array],
      mariadb: [Array],
      sqlite: [Array],
      mssql: [Array]
    },
    key: 'DATEONLY'
  },
  BOOLEAN: [class BOOLEAN extends ABSTRACT] {
    parse: [Function: _sanitize],
    types: {
      postgres: [Array],
      mysql: [Array],
      mariadb: [Array],
      sqlite: [Array],
      mssql: [Array]
    },
    key: 'BOOLEAN'
  },
  NOW: [class NOW extends ABSTRACT] { types: {}, key: 'NOW' },
  BLOB: [class BLOB extends ABSTRACT] {
    types: {
      postgres: [Array],
      mysql: [Array],
      mariadb: [Array],
      sqlite: [Array],
      mssql: [Array]
    },
    key: 'BLOB'
  },
  DECIMAL: [class DECIMAL extends NUMBER] {
    types: {
      postgres: [Array],
      mysql: [Array],
      mariadb: [Array],
      sqlite: [Array],
      mssql: [Array]
    },
    key: 'DECIMAL'
  },
  NUMERIC: [class DECIMAL extends NUMBER] {
    types: {
      postgres: [Array],
      mysql: [Array],
      mariadb: [Array],
      sqlite: [Array],
      mssql: [Array]
    },
    key: 'DECIMAL'
  },
  UUID: [class UUID extends ABSTRACT] {
    types: {
      postgres: [Array],
      mysql: false,
      mariadb: false,
      sqlite: [Array],
      mssql: false
    },
    key: 'UUID'
  },
  UUIDV1: [class UUIDV1 extends ABSTRACT] { types: {}, key: 'UUIDV1' },
  UUIDV4: [class UUIDV4 extends ABSTRACT] { types: {}, key: 'UUIDV4' },
  HSTORE: [class HSTORE extends ABSTRACT] {
    types: { postgres: [Array] },
    key: 'HSTORE'
  },
  JSON: [class JSONTYPE extends ABSTRACT] {
    types: {
      postgres: [Array],
      mysql: [Array],
      mariadb: [Array],
      sqlite: [Array]
    },
    key: 'JSON'
  },
  JSONB: [class JSONB extends JSONTYPE] {
    types: { postgres: [Array] },
    key: 'JSONB'
  },
  VIRTUAL: [class VIRTUAL extends ABSTRACT] { types: {}, key: 'VIRTUAL' },
  ARRAY: [class ARRAY extends ABSTRACT] { types: {}, key: 'ARRAY' },
  ENUM: [class ENUM extends ABSTRACT] {
    types: {
      postgres: [Array],
      mysql: false,
      mariadb: false,
      sqlite: false,
      mssql: false
    },
    key: 'ENUM'
  },
  RANGE: [class RANGE extends ABSTRACT] {
    types: { postgres: [Object] },
    key: 'RANGE'
  },
  REAL: [class REAL extends NUMBER] {
    types: {
      postgres: [Array],
      mysql: [Array],
      mariadb: [Array],
      sqlite: [Array],
      mssql: [Array]
    },
    key: 'REAL'
  },
  'DOUBLE PRECISION': [class DOUBLE extends NUMBER] {
    types: {
      postgres: [Array],
      mysql: [Array],
      mariadb: [Array],
      sqlite: [Array],
      mssql: [Array]
    },
    key: 'DOUBLE PRECISION'
  },
  DOUBLE: [class DOUBLE extends NUMBER] {
    types: {
      postgres: [Array],
      mysql: [Array],
      mariadb: [Array],
      sqlite: [Array],
      mssql: [Array]
    },
    key: 'DOUBLE PRECISION'
  },
  GEOMETRY: [class GEOMETRY extends ABSTRACT] {
    types: {
      postgres: [Array],
      mysql: [Array],
      mariadb: [Array],
      sqlite: false,
      mssql: false
    },
    key: 'GEOMETRY'
  },
  GEOGRAPHY: [class GEOGRAPHY extends ABSTRACT] {
    types: { postgres: [Array] },
    key: 'GEOGRAPHY'
  },
  CIDR: [class CIDR extends ABSTRACT] {
    types: { postgres: [Array] },
    key: 'CIDR'
  },
  INET: [class INET extends ABSTRACT] {
    types: { postgres: [Array] },
    key: 'INET'
  },
  MACADDR: [class MACADDR extends ABSTRACT] {
    types: { postgres: [Array] },
    key: 'MACADDR'
  },
  CITEXT: [class CITEXT extends ABSTRACT] {
    types: { postgres: [Array] },
    key: 'CITEXT'
  },
  TSVECTOR: [class TSVECTOR extends ABSTRACT] {
    types: { postgres: [Array] },
    key: 'TSVECTOR'
  },
  postgres: {
    DECIMAL: [class DECIMAL extends DECIMAL],
    BLOB: [class BLOB extends BLOB],
    STRING: [class STRING extends STRING],
    CHAR: [class CHAR extends CHAR],
    TEXT: [class TEXT extends TEXT],
    CITEXT: [class CITEXT extends CITEXT],
    TINYINT: [class TINYINT extends TINYINT],
    SMALLINT: [class SMALLINT extends SMALLINT],
    INTEGER: [class INTEGER extends INTEGER] { parse: [Function: parse] },
    BIGINT: [class BIGINT extends BIGINT],
    BOOLEAN: [class BOOLEAN extends BOOLEAN] { parse: [Function: _sanitize] },
    DATE: [class DATE extends DATE],
    DATEONLY: [class DATEONLY extends DATEONLY],
    REAL: [class REAL extends REAL],
    'DOUBLE PRECISION': [class DOUBLE extends DOUBLE],
    FLOAT: [class FLOAT extends FLOAT],
    GEOMETRY: [class GEOMETRY extends GEOMETRY],
    GEOGRAPHY: [class GEOGRAPHY extends GEOGRAPHY],
    HSTORE: [class HSTORE extends HSTORE],
    RANGE: [class RANGE extends RANGE],
    ENUM: [class ENUM extends ENUM]
  },
  mysql: {
    ENUM: [class ENUM extends ENUM],
    DATE: [class DATE extends DATE],
    DATEONLY: [class DATEONLY extends DATEONLY],
    UUID: [class UUID extends UUID],
    GEOMETRY: [class GEOMETRY extends GEOMETRY],
    DECIMAL: [class DECIMAL extends DECIMAL],
    JSON: [class JSONTYPE extends JSONTYPE]
  },
  mariadb: {
    ENUM: [class ENUM extends ENUM],
    DATE: [class DATE extends DATE],
    DATEONLY: [class DATEONLY extends DATEONLY],
    UUID: [class UUID extends UUID],
    GEOMETRY: [class GEOMETRY extends GEOMETRY],
    DECIMAL: [class DECIMAL extends DECIMAL],
    JSON: [class JSONTYPE extends JSONTYPE]
  },
  sqlite: {
    DATE: [class DATE extends DATE],
    DATEONLY: [class DATEONLY extends DATEONLY],
    STRING: [class STRING extends STRING],
    CHAR: [class CHAR extends CHAR],
    NUMBER: [class NUMBER extends NUMBER],
    FLOAT: [class FLOAT extends FLOAT] { parse: [Function: parseFloating] },
    REAL: [class REAL extends REAL] { parse: [Function: parseFloating] },
    'DOUBLE PRECISION': [class DOUBLE extends DOUBLE] { parse: [Function: parseFloating] },
    TINYINT: [class TINYINT extends TINYINT],
    SMALLINT: [class SMALLINT extends SMALLINT],
    MEDIUMINT: [class MEDIUMINT extends MEDIUMINT],
    INTEGER: [class INTEGER extends INTEGER],
    BIGINT: [class BIGINT extends BIGINT],
    TEXT: [class TEXT extends TEXT],
    ENUM: [class ENUM extends ENUM],
    JSON: [class JSONTYPE extends JSONTYPE],
    CITEXT: [class CITEXT extends CITEXT]
  },
  mssql: {
    BLOB: [class BLOB extends BLOB],
    BOOLEAN: [class BOOLEAN extends BOOLEAN],
    ENUM: [class ENUM extends ENUM],
    STRING: [class STRING extends STRING],
    UUID: [class UUID extends UUID],
    DATE: [class DATE extends DATE],
    DATEONLY: [class DATEONLY extends DATEONLY],
    NOW: [class NOW extends NOW],
    TINYINT: [class TINYINT extends TINYINT],
    SMALLINT: [class SMALLINT extends SMALLINT],
    INTEGER: [class INTEGER extends INTEGER],
    BIGINT: [class BIGINT extends BIGINT],
    REAL: [class REAL extends REAL],
    FLOAT: [class FLOAT extends FLOAT],
    TEXT: [class TEXT extends TEXT]
  }
}

*/