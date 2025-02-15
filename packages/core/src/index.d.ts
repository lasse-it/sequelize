/**
 * This package contains the core functionality of Sequelize.
 * Values can be imported as follows:
 *
 * ```js
 * import { Model, DataTypes } from '@sequelize/core';
 * ```
 *
 * The documentation is available at https://sequelize.org/docs/v7/
 *
 * @module
 */

export * as DataTypes from './data-types';
export type {
  ArrayOptions,
  BindParamOptions,
  BlobOptions,
  DataType,
  DataTypeClass,
  DataTypeClassOrInstance,
  DataTypeInstance,
  DateOptions,
  DecimalNumberOptions,
  EnumOptions,
  GeometryOptions,
  IntegerOptions,
  NumberOptions,
  RangeOptions,
  TextOptions,
  TimeOptions,
  VirtualOptions,
} from './dialects/abstract/data-types.js';
export { GeoJsonType } from './geo-json.js';
export type {
  GeoJson,
  GeoJsonGeometryCollection,
  GeoJsonLineString,
  GeoJsonMultiLineString,
  GeoJsonMultiPoint,
  GeoJsonMultiPolygon,
  GeoJsonPoint,
  GeoJsonPolygon,
  PositionPosition,
} from './geo-json.js';
export { IndexHints } from './index-hints';
export { Op, type OpTypes } from './operators';
export { QueryTypes } from './query-types';
export { TableHints } from './table-hints';
export {
  IsolationLevel,
  Lock,
  Transaction,
  TransactionNestMode,
  TransactionType,
  type ManagedTransactionOptions,
  type NormalizedTransactionOptions,
  type TransactionOptions,
} from './transaction';

export * from './associations/index';
export type { Connection } from './dialects/abstract/connection-manager';
export * from './dialects/abstract/query-generator.types';
export * from './dialects/abstract/query-interface';
export * from './dialects/abstract/query-interface.types';
export * from './errors';
export * from './model';
export * from './sequelize';

export { ConstraintChecking, Deferrable } from './deferrable';
export { AbstractDialect } from './dialects/abstract/index.js';
export { AbstractQueryGenerator } from './dialects/abstract/query-generator.js';
export type { WhereOptions } from './dialects/abstract/where-sql-builder-types.js';
export { importModels } from './import-models.js';
export { ModelDefinition } from './model-definition.js';

// TODO [>=8]: remove this alias
// eslint-disable-next-line import/no-default-export -- legacy, will be removed in the future
export { Sequelize as default } from './sequelize';
export { isModelStatic, isSameInitialModel } from './utils/model-utils';
export { useInflection } from './utils/string';
export type { Validator } from './utils/validator-extras';

export { AssociationPath } from './expression-builders/association-path.js';
export { Attribute } from './expression-builders/attribute.js';
export { BaseSqlExpression } from './expression-builders/base-sql-expression.js';
export { Identifier } from './expression-builders/identifier.js';
export { JsonPath, jsonPath } from './expression-builders/json-path.js';
export { List } from './expression-builders/list.js';
export { sql } from './expression-builders/sql.js';
export { Value } from './expression-builders/value.js';

// All functions are available on sql.x, but these are exported for backwards compatibility
export { Cast, cast } from './expression-builders/cast.js';
export { Col, col } from './expression-builders/col.js';
export { Fn, fn } from './expression-builders/fn.js';
export { JSON_NULL, SQL_NULL } from './expression-builders/json-sql-null.js';
export { json } from './expression-builders/json.js';
export { Literal, literal } from './expression-builders/literal.js';
export { Where, where } from './expression-builders/where.js';
