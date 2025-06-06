
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Car
 * 
 */
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>
/**
 * Model Engine
 * 
 */
export type Engine = $Result.DefaultSelection<Prisma.$EnginePayload>
/**
 * Model GrandPrix
 * 
 */
export type GrandPrix = $Result.DefaultSelection<Prisma.$GrandPrixPayload>
/**
 * Model Incident
 * 
 */
export type Incident = $Result.DefaultSelection<Prisma.$IncidentPayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model Part
 * 
 */
export type Part = $Result.DefaultSelection<Prisma.$PartPayload>
/**
 * Model Result
 * 
 */
export type Result = $Result.DefaultSelection<Prisma.$ResultPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  PILOT: 'PILOT',
  ENGINEER: 'ENGINEER',
  MECHANIC: 'MECHANIC',
  DIRECTOR: 'DIRECTOR',
  OTHER: 'OTHER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cars
 * const cars = await prisma.car.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cars
   * const cars = await prisma.car.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.car.findMany()
    * ```
    */
  get car(): Prisma.CarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.engine`: Exposes CRUD operations for the **Engine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Engines
    * const engines = await prisma.engine.findMany()
    * ```
    */
  get engine(): Prisma.EngineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grandPrix`: Exposes CRUD operations for the **GrandPrix** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GrandPrixes
    * const grandPrixes = await prisma.grandPrix.findMany()
    * ```
    */
  get grandPrix(): Prisma.GrandPrixDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incident`: Exposes CRUD operations for the **Incident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incidents
    * const incidents = await prisma.incident.findMany()
    * ```
    */
  get incident(): Prisma.IncidentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.part`: Exposes CRUD operations for the **Part** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parts
    * const parts = await prisma.part.findMany()
    * ```
    */
  get part(): Prisma.PartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.result`: Exposes CRUD operations for the **Result** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Results
    * const results = await prisma.result.findMany()
    * ```
    */
  get result(): Prisma.ResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Car: 'Car',
    Engine: 'Engine',
    GrandPrix: 'GrandPrix',
    Incident: 'Incident',
    Member: 'Member',
    Part: 'Part',
    Result: 'Result',
    Team: 'Team'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "car" | "engine" | "grandPrix" | "incident" | "member" | "part" | "result" | "team"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>
        fields: Prisma.CarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar>
          }
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarCountArgs<ExtArgs>
            result: $Utils.Optional<CarCountAggregateOutputType> | number
          }
        }
      }
      Engine: {
        payload: Prisma.$EnginePayload<ExtArgs>
        fields: Prisma.EngineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EngineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnginePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EngineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnginePayload>
          }
          findFirst: {
            args: Prisma.EngineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnginePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EngineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnginePayload>
          }
          findMany: {
            args: Prisma.EngineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnginePayload>[]
          }
          create: {
            args: Prisma.EngineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnginePayload>
          }
          createMany: {
            args: Prisma.EngineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EngineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnginePayload>
          }
          update: {
            args: Prisma.EngineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnginePayload>
          }
          deleteMany: {
            args: Prisma.EngineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EngineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EngineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnginePayload>
          }
          aggregate: {
            args: Prisma.EngineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEngine>
          }
          groupBy: {
            args: Prisma.EngineGroupByArgs<ExtArgs>
            result: $Utils.Optional<EngineGroupByOutputType>[]
          }
          count: {
            args: Prisma.EngineCountArgs<ExtArgs>
            result: $Utils.Optional<EngineCountAggregateOutputType> | number
          }
        }
      }
      GrandPrix: {
        payload: Prisma.$GrandPrixPayload<ExtArgs>
        fields: Prisma.GrandPrixFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GrandPrixFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrandPrixPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GrandPrixFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrandPrixPayload>
          }
          findFirst: {
            args: Prisma.GrandPrixFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrandPrixPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GrandPrixFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrandPrixPayload>
          }
          findMany: {
            args: Prisma.GrandPrixFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrandPrixPayload>[]
          }
          create: {
            args: Prisma.GrandPrixCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrandPrixPayload>
          }
          createMany: {
            args: Prisma.GrandPrixCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GrandPrixDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrandPrixPayload>
          }
          update: {
            args: Prisma.GrandPrixUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrandPrixPayload>
          }
          deleteMany: {
            args: Prisma.GrandPrixDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GrandPrixUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GrandPrixUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrandPrixPayload>
          }
          aggregate: {
            args: Prisma.GrandPrixAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrandPrix>
          }
          groupBy: {
            args: Prisma.GrandPrixGroupByArgs<ExtArgs>
            result: $Utils.Optional<GrandPrixGroupByOutputType>[]
          }
          count: {
            args: Prisma.GrandPrixCountArgs<ExtArgs>
            result: $Utils.Optional<GrandPrixCountAggregateOutputType> | number
          }
        }
      }
      Incident: {
        payload: Prisma.$IncidentPayload<ExtArgs>
        fields: Prisma.IncidentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findFirst: {
            args: Prisma.IncidentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findMany: {
            args: Prisma.IncidentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          create: {
            args: Prisma.IncidentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          createMany: {
            args: Prisma.IncidentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IncidentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          update: {
            args: Prisma.IncidentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          deleteMany: {
            args: Prisma.IncidentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IncidentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          aggregate: {
            args: Prisma.IncidentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncident>
          }
          groupBy: {
            args: Prisma.IncidentGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      Part: {
        payload: Prisma.$PartPayload<ExtArgs>
        fields: Prisma.PartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          findFirst: {
            args: Prisma.PartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          findMany: {
            args: Prisma.PartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          create: {
            args: Prisma.PartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          createMany: {
            args: Prisma.PartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          update: {
            args: Prisma.PartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          deleteMany: {
            args: Prisma.PartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          aggregate: {
            args: Prisma.PartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePart>
          }
          groupBy: {
            args: Prisma.PartGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartCountArgs<ExtArgs>
            result: $Utils.Optional<PartCountAggregateOutputType> | number
          }
        }
      }
      Result: {
        payload: Prisma.$ResultPayload<ExtArgs>
        fields: Prisma.ResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          findFirst: {
            args: Prisma.ResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          findMany: {
            args: Prisma.ResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          create: {
            args: Prisma.ResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          createMany: {
            args: Prisma.ResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          update: {
            args: Prisma.ResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          deleteMany: {
            args: Prisma.ResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          aggregate: {
            args: Prisma.ResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResult>
          }
          groupBy: {
            args: Prisma.ResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResultCountArgs<ExtArgs>
            result: $Utils.Optional<ResultCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    car?: CarOmit
    engine?: EngineOmit
    grandPrix?: GrandPrixOmit
    incident?: IncidentOmit
    member?: MemberOmit
    part?: PartOmit
    result?: ResultOmit
    team?: TeamOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CarCountOutputType
   */

  export type CarCountOutputType = {
    results: number
    incidents: number
  }

  export type CarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | CarCountOutputTypeCountResultsArgs
    incidents?: boolean | CarCountOutputTypeCountIncidentsArgs
  }

  // Custom InputTypes
  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarCountOutputType
     */
    select?: CarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }


  /**
   * Count Type EngineCountOutputType
   */

  export type EngineCountOutputType = {
    incidents: number
  }

  export type EngineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incidents?: boolean | EngineCountOutputTypeCountIncidentsArgs
  }

  // Custom InputTypes
  /**
   * EngineCountOutputType without action
   */
  export type EngineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EngineCountOutputType
     */
    select?: EngineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EngineCountOutputType without action
   */
  export type EngineCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }


  /**
   * Count Type GrandPrixCountOutputType
   */

  export type GrandPrixCountOutputType = {
    results: number
    incidents: number
  }

  export type GrandPrixCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | GrandPrixCountOutputTypeCountResultsArgs
    incidents?: boolean | GrandPrixCountOutputTypeCountIncidentsArgs
  }

  // Custom InputTypes
  /**
   * GrandPrixCountOutputType without action
   */
  export type GrandPrixCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrandPrixCountOutputType
     */
    select?: GrandPrixCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GrandPrixCountOutputType without action
   */
  export type GrandPrixCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
  }

  /**
   * GrandPrixCountOutputType without action
   */
  export type GrandPrixCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    incidents: number
    results: number
    cars: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incidents?: boolean | MemberCountOutputTypeCountIncidentsArgs
    results?: boolean | MemberCountOutputTypeCountResultsArgs
    cars?: boolean | MemberCountOutputTypeCountCarsArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
  }


  /**
   * Count Type PartCountOutputType
   */

  export type PartCountOutputType = {
    incidents: number
  }

  export type PartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incidents?: boolean | PartCountOutputTypeCountIncidentsArgs
  }

  // Custom InputTypes
  /**
   * PartCountOutputType without action
   */
  export type PartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartCountOutputType
     */
    select?: PartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartCountOutputType without action
   */
  export type PartCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    members: number
    cars: number
    engines: number
    parts: number
    results: number
    incidents: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | TeamCountOutputTypeCountMembersArgs
    cars?: boolean | TeamCountOutputTypeCountCarsArgs
    engines?: boolean | TeamCountOutputTypeCountEnginesArgs
    parts?: boolean | TeamCountOutputTypeCountPartsArgs
    results?: boolean | TeamCountOutputTypeCountResultsArgs
    incidents?: boolean | TeamCountOutputTypeCountIncidentsArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountEnginesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EngineWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountPartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarAvgAggregateOutputType = {
    id: number | null
    teamId: number | null
    pilotId: number | null
  }

  export type CarSumAggregateOutputType = {
    id: number | null
    teamId: number | null
    pilotId: number | null
  }

  export type CarMinAggregateOutputType = {
    id: number | null
    chassisNum: string | null
    model: string | null
    teamId: number | null
    pilotId: number | null
    createdAt: Date | null
  }

  export type CarMaxAggregateOutputType = {
    id: number | null
    chassisNum: string | null
    model: string | null
    teamId: number | null
    pilotId: number | null
    createdAt: Date | null
  }

  export type CarCountAggregateOutputType = {
    id: number
    chassisNum: number
    model: number
    teamId: number
    pilotId: number
    createdAt: number
    _all: number
  }


  export type CarAvgAggregateInputType = {
    id?: true
    teamId?: true
    pilotId?: true
  }

  export type CarSumAggregateInputType = {
    id?: true
    teamId?: true
    pilotId?: true
  }

  export type CarMinAggregateInputType = {
    id?: true
    chassisNum?: true
    model?: true
    teamId?: true
    pilotId?: true
    createdAt?: true
  }

  export type CarMaxAggregateInputType = {
    id?: true
    chassisNum?: true
    model?: true
    teamId?: true
    pilotId?: true
    createdAt?: true
  }

  export type CarCountAggregateInputType = {
    id?: true
    chassisNum?: true
    model?: true
    teamId?: true
    pilotId?: true
    createdAt?: true
    _all?: true
  }

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Car to aggregate.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type CarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[]
    by: CarScalarFieldEnum[] | CarScalarFieldEnum
    having?: CarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _avg?: CarAvgAggregateInputType
    _sum?: CarSumAggregateInputType
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }

  export type CarGroupByOutputType = {
    id: number
    chassisNum: string
    model: string
    teamId: number
    pilotId: number
    createdAt: Date
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type CarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chassisNum?: boolean
    model?: boolean
    teamId?: boolean
    pilotId?: boolean
    createdAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    pilot?: boolean | MemberDefaultArgs<ExtArgs>
    results?: boolean | Car$resultsArgs<ExtArgs>
    incidents?: boolean | Car$incidentsArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>



  export type CarSelectScalar = {
    id?: boolean
    chassisNum?: boolean
    model?: boolean
    teamId?: boolean
    pilotId?: boolean
    createdAt?: boolean
  }

  export type CarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chassisNum" | "model" | "teamId" | "pilotId" | "createdAt", ExtArgs["result"]["car"]>
  export type CarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    pilot?: boolean | MemberDefaultArgs<ExtArgs>
    results?: boolean | Car$resultsArgs<ExtArgs>
    incidents?: boolean | Car$incidentsArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Car"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      pilot: Prisma.$MemberPayload<ExtArgs>
      results: Prisma.$ResultPayload<ExtArgs>[]
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chassisNum: string
      model: string
      teamId: number
      pilotId: number
      createdAt: Date
    }, ExtArgs["result"]["car"]>
    composites: {}
  }

  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = $Result.GetResult<Prisma.$CarPayload, S>

  type CarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface CarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Car'], meta: { name: 'Car' } }
    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarFindUniqueArgs>(args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(args: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarFindFirstArgs>(args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarFindManyArgs>(args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     * 
     */
    create<T extends CarCreateArgs>(args: SelectSubset<T, CarCreateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarCreateManyArgs>(args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     * 
     */
    delete<T extends CarDeleteArgs>(args: SelectSubset<T, CarDeleteArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarUpdateArgs>(args: SelectSubset<T, CarUpdateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarDeleteManyArgs>(args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarUpdateManyArgs>(args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     */
    upsert<T extends CarUpsertArgs>(args: SelectSubset<T, CarUpsertArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Car model
   */
  readonly fields: CarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pilot<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    results<T extends Car$resultsArgs<ExtArgs> = {}>(args?: Subset<T, Car$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incidents<T extends Car$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, Car$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Car model
   */
  interface CarFieldRefs {
    readonly id: FieldRef<"Car", 'Int'>
    readonly chassisNum: FieldRef<"Car", 'String'>
    readonly model: FieldRef<"Car", 'String'>
    readonly teamId: FieldRef<"Car", 'Int'>
    readonly pilotId: FieldRef<"Car", 'Int'>
    readonly createdAt: FieldRef<"Car", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Car findUnique
   */
  export type CarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findFirst
   */
  export type CarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findMany
   */
  export type CarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car create
   */
  export type CarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>
  }

  /**
   * Car createMany
   */
  export type CarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Car update
   */
  export type CarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car upsert
   */
  export type CarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>
  }

  /**
   * Car delete
   */
  export type CarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Car.results
   */
  export type Car$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    cursor?: ResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Car.incidents
   */
  export type Car$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Car without action
   */
  export type CarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
  }


  /**
   * Model Engine
   */

  export type AggregateEngine = {
    _count: EngineCountAggregateOutputType | null
    _avg: EngineAvgAggregateOutputType | null
    _sum: EngineSumAggregateOutputType | null
    _min: EngineMinAggregateOutputType | null
    _max: EngineMaxAggregateOutputType | null
  }

  export type EngineAvgAggregateOutputType = {
    id: number | null
    teamId: number | null
  }

  export type EngineSumAggregateOutputType = {
    id: number | null
    teamId: number | null
  }

  export type EngineMinAggregateOutputType = {
    id: number | null
    code: string | null
    state: string | null
    teamId: number | null
    createdAt: Date | null
  }

  export type EngineMaxAggregateOutputType = {
    id: number | null
    code: string | null
    state: string | null
    teamId: number | null
    createdAt: Date | null
  }

  export type EngineCountAggregateOutputType = {
    id: number
    code: number
    state: number
    teamId: number
    createdAt: number
    _all: number
  }


  export type EngineAvgAggregateInputType = {
    id?: true
    teamId?: true
  }

  export type EngineSumAggregateInputType = {
    id?: true
    teamId?: true
  }

  export type EngineMinAggregateInputType = {
    id?: true
    code?: true
    state?: true
    teamId?: true
    createdAt?: true
  }

  export type EngineMaxAggregateInputType = {
    id?: true
    code?: true
    state?: true
    teamId?: true
    createdAt?: true
  }

  export type EngineCountAggregateInputType = {
    id?: true
    code?: true
    state?: true
    teamId?: true
    createdAt?: true
    _all?: true
  }

  export type EngineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Engine to aggregate.
     */
    where?: EngineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engines to fetch.
     */
    orderBy?: EngineOrderByWithRelationInput | EngineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EngineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Engines
    **/
    _count?: true | EngineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EngineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EngineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EngineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EngineMaxAggregateInputType
  }

  export type GetEngineAggregateType<T extends EngineAggregateArgs> = {
        [P in keyof T & keyof AggregateEngine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEngine[P]>
      : GetScalarType<T[P], AggregateEngine[P]>
  }




  export type EngineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EngineWhereInput
    orderBy?: EngineOrderByWithAggregationInput | EngineOrderByWithAggregationInput[]
    by: EngineScalarFieldEnum[] | EngineScalarFieldEnum
    having?: EngineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EngineCountAggregateInputType | true
    _avg?: EngineAvgAggregateInputType
    _sum?: EngineSumAggregateInputType
    _min?: EngineMinAggregateInputType
    _max?: EngineMaxAggregateInputType
  }

  export type EngineGroupByOutputType = {
    id: number
    code: string
    state: string
    teamId: number
    createdAt: Date
    _count: EngineCountAggregateOutputType | null
    _avg: EngineAvgAggregateOutputType | null
    _sum: EngineSumAggregateOutputType | null
    _min: EngineMinAggregateOutputType | null
    _max: EngineMaxAggregateOutputType | null
  }

  type GetEngineGroupByPayload<T extends EngineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EngineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EngineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EngineGroupByOutputType[P]>
            : GetScalarType<T[P], EngineGroupByOutputType[P]>
        }
      >
    >


  export type EngineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    state?: boolean
    teamId?: boolean
    createdAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    incidents?: boolean | Engine$incidentsArgs<ExtArgs>
    _count?: boolean | EngineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["engine"]>



  export type EngineSelectScalar = {
    id?: boolean
    code?: boolean
    state?: boolean
    teamId?: boolean
    createdAt?: boolean
  }

  export type EngineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "state" | "teamId" | "createdAt", ExtArgs["result"]["engine"]>
  export type EngineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    incidents?: boolean | Engine$incidentsArgs<ExtArgs>
    _count?: boolean | EngineCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EnginePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Engine"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      state: string
      teamId: number
      createdAt: Date
    }, ExtArgs["result"]["engine"]>
    composites: {}
  }

  type EngineGetPayload<S extends boolean | null | undefined | EngineDefaultArgs> = $Result.GetResult<Prisma.$EnginePayload, S>

  type EngineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EngineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EngineCountAggregateInputType | true
    }

  export interface EngineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Engine'], meta: { name: 'Engine' } }
    /**
     * Find zero or one Engine that matches the filter.
     * @param {EngineFindUniqueArgs} args - Arguments to find a Engine
     * @example
     * // Get one Engine
     * const engine = await prisma.engine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EngineFindUniqueArgs>(args: SelectSubset<T, EngineFindUniqueArgs<ExtArgs>>): Prisma__EngineClient<$Result.GetResult<Prisma.$EnginePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Engine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EngineFindUniqueOrThrowArgs} args - Arguments to find a Engine
     * @example
     * // Get one Engine
     * const engine = await prisma.engine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EngineFindUniqueOrThrowArgs>(args: SelectSubset<T, EngineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EngineClient<$Result.GetResult<Prisma.$EnginePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Engine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineFindFirstArgs} args - Arguments to find a Engine
     * @example
     * // Get one Engine
     * const engine = await prisma.engine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EngineFindFirstArgs>(args?: SelectSubset<T, EngineFindFirstArgs<ExtArgs>>): Prisma__EngineClient<$Result.GetResult<Prisma.$EnginePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Engine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineFindFirstOrThrowArgs} args - Arguments to find a Engine
     * @example
     * // Get one Engine
     * const engine = await prisma.engine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EngineFindFirstOrThrowArgs>(args?: SelectSubset<T, EngineFindFirstOrThrowArgs<ExtArgs>>): Prisma__EngineClient<$Result.GetResult<Prisma.$EnginePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Engines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Engines
     * const engines = await prisma.engine.findMany()
     * 
     * // Get first 10 Engines
     * const engines = await prisma.engine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const engineWithIdOnly = await prisma.engine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EngineFindManyArgs>(args?: SelectSubset<T, EngineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnginePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Engine.
     * @param {EngineCreateArgs} args - Arguments to create a Engine.
     * @example
     * // Create one Engine
     * const Engine = await prisma.engine.create({
     *   data: {
     *     // ... data to create a Engine
     *   }
     * })
     * 
     */
    create<T extends EngineCreateArgs>(args: SelectSubset<T, EngineCreateArgs<ExtArgs>>): Prisma__EngineClient<$Result.GetResult<Prisma.$EnginePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Engines.
     * @param {EngineCreateManyArgs} args - Arguments to create many Engines.
     * @example
     * // Create many Engines
     * const engine = await prisma.engine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EngineCreateManyArgs>(args?: SelectSubset<T, EngineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Engine.
     * @param {EngineDeleteArgs} args - Arguments to delete one Engine.
     * @example
     * // Delete one Engine
     * const Engine = await prisma.engine.delete({
     *   where: {
     *     // ... filter to delete one Engine
     *   }
     * })
     * 
     */
    delete<T extends EngineDeleteArgs>(args: SelectSubset<T, EngineDeleteArgs<ExtArgs>>): Prisma__EngineClient<$Result.GetResult<Prisma.$EnginePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Engine.
     * @param {EngineUpdateArgs} args - Arguments to update one Engine.
     * @example
     * // Update one Engine
     * const engine = await prisma.engine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EngineUpdateArgs>(args: SelectSubset<T, EngineUpdateArgs<ExtArgs>>): Prisma__EngineClient<$Result.GetResult<Prisma.$EnginePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Engines.
     * @param {EngineDeleteManyArgs} args - Arguments to filter Engines to delete.
     * @example
     * // Delete a few Engines
     * const { count } = await prisma.engine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EngineDeleteManyArgs>(args?: SelectSubset<T, EngineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Engines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Engines
     * const engine = await prisma.engine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EngineUpdateManyArgs>(args: SelectSubset<T, EngineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Engine.
     * @param {EngineUpsertArgs} args - Arguments to update or create a Engine.
     * @example
     * // Update or create a Engine
     * const engine = await prisma.engine.upsert({
     *   create: {
     *     // ... data to create a Engine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Engine we want to update
     *   }
     * })
     */
    upsert<T extends EngineUpsertArgs>(args: SelectSubset<T, EngineUpsertArgs<ExtArgs>>): Prisma__EngineClient<$Result.GetResult<Prisma.$EnginePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Engines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineCountArgs} args - Arguments to filter Engines to count.
     * @example
     * // Count the number of Engines
     * const count = await prisma.engine.count({
     *   where: {
     *     // ... the filter for the Engines we want to count
     *   }
     * })
    **/
    count<T extends EngineCountArgs>(
      args?: Subset<T, EngineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EngineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Engine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EngineAggregateArgs>(args: Subset<T, EngineAggregateArgs>): Prisma.PrismaPromise<GetEngineAggregateType<T>>

    /**
     * Group by Engine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EngineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EngineGroupByArgs['orderBy'] }
        : { orderBy?: EngineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EngineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEngineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Engine model
   */
  readonly fields: EngineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Engine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EngineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    incidents<T extends Engine$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, Engine$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Engine model
   */
  interface EngineFieldRefs {
    readonly id: FieldRef<"Engine", 'Int'>
    readonly code: FieldRef<"Engine", 'String'>
    readonly state: FieldRef<"Engine", 'String'>
    readonly teamId: FieldRef<"Engine", 'Int'>
    readonly createdAt: FieldRef<"Engine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Engine findUnique
   */
  export type EngineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engine
     */
    select?: EngineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engine
     */
    omit?: EngineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineInclude<ExtArgs> | null
    /**
     * Filter, which Engine to fetch.
     */
    where: EngineWhereUniqueInput
  }

  /**
   * Engine findUniqueOrThrow
   */
  export type EngineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engine
     */
    select?: EngineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engine
     */
    omit?: EngineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineInclude<ExtArgs> | null
    /**
     * Filter, which Engine to fetch.
     */
    where: EngineWhereUniqueInput
  }

  /**
   * Engine findFirst
   */
  export type EngineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engine
     */
    select?: EngineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engine
     */
    omit?: EngineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineInclude<ExtArgs> | null
    /**
     * Filter, which Engine to fetch.
     */
    where?: EngineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engines to fetch.
     */
    orderBy?: EngineOrderByWithRelationInput | EngineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Engines.
     */
    cursor?: EngineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Engines.
     */
    distinct?: EngineScalarFieldEnum | EngineScalarFieldEnum[]
  }

  /**
   * Engine findFirstOrThrow
   */
  export type EngineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engine
     */
    select?: EngineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engine
     */
    omit?: EngineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineInclude<ExtArgs> | null
    /**
     * Filter, which Engine to fetch.
     */
    where?: EngineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engines to fetch.
     */
    orderBy?: EngineOrderByWithRelationInput | EngineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Engines.
     */
    cursor?: EngineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Engines.
     */
    distinct?: EngineScalarFieldEnum | EngineScalarFieldEnum[]
  }

  /**
   * Engine findMany
   */
  export type EngineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engine
     */
    select?: EngineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engine
     */
    omit?: EngineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineInclude<ExtArgs> | null
    /**
     * Filter, which Engines to fetch.
     */
    where?: EngineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engines to fetch.
     */
    orderBy?: EngineOrderByWithRelationInput | EngineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Engines.
     */
    cursor?: EngineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engines.
     */
    skip?: number
    distinct?: EngineScalarFieldEnum | EngineScalarFieldEnum[]
  }

  /**
   * Engine create
   */
  export type EngineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engine
     */
    select?: EngineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engine
     */
    omit?: EngineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineInclude<ExtArgs> | null
    /**
     * The data needed to create a Engine.
     */
    data: XOR<EngineCreateInput, EngineUncheckedCreateInput>
  }

  /**
   * Engine createMany
   */
  export type EngineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Engines.
     */
    data: EngineCreateManyInput | EngineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Engine update
   */
  export type EngineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engine
     */
    select?: EngineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engine
     */
    omit?: EngineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineInclude<ExtArgs> | null
    /**
     * The data needed to update a Engine.
     */
    data: XOR<EngineUpdateInput, EngineUncheckedUpdateInput>
    /**
     * Choose, which Engine to update.
     */
    where: EngineWhereUniqueInput
  }

  /**
   * Engine updateMany
   */
  export type EngineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Engines.
     */
    data: XOR<EngineUpdateManyMutationInput, EngineUncheckedUpdateManyInput>
    /**
     * Filter which Engines to update
     */
    where?: EngineWhereInput
    /**
     * Limit how many Engines to update.
     */
    limit?: number
  }

  /**
   * Engine upsert
   */
  export type EngineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engine
     */
    select?: EngineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engine
     */
    omit?: EngineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineInclude<ExtArgs> | null
    /**
     * The filter to search for the Engine to update in case it exists.
     */
    where: EngineWhereUniqueInput
    /**
     * In case the Engine found by the `where` argument doesn't exist, create a new Engine with this data.
     */
    create: XOR<EngineCreateInput, EngineUncheckedCreateInput>
    /**
     * In case the Engine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EngineUpdateInput, EngineUncheckedUpdateInput>
  }

  /**
   * Engine delete
   */
  export type EngineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engine
     */
    select?: EngineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engine
     */
    omit?: EngineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineInclude<ExtArgs> | null
    /**
     * Filter which Engine to delete.
     */
    where: EngineWhereUniqueInput
  }

  /**
   * Engine deleteMany
   */
  export type EngineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Engines to delete
     */
    where?: EngineWhereInput
    /**
     * Limit how many Engines to delete.
     */
    limit?: number
  }

  /**
   * Engine.incidents
   */
  export type Engine$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Engine without action
   */
  export type EngineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engine
     */
    select?: EngineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engine
     */
    omit?: EngineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineInclude<ExtArgs> | null
  }


  /**
   * Model GrandPrix
   */

  export type AggregateGrandPrix = {
    _count: GrandPrixCountAggregateOutputType | null
    _avg: GrandPrixAvgAggregateOutputType | null
    _sum: GrandPrixSumAggregateOutputType | null
    _min: GrandPrixMinAggregateOutputType | null
    _max: GrandPrixMaxAggregateOutputType | null
  }

  export type GrandPrixAvgAggregateOutputType = {
    id: number | null
  }

  export type GrandPrixSumAggregateOutputType = {
    id: number | null
  }

  export type GrandPrixMinAggregateOutputType = {
    id: number | null
    name: string | null
    circuit: string | null
    country: string | null
    date: Date | null
  }

  export type GrandPrixMaxAggregateOutputType = {
    id: number | null
    name: string | null
    circuit: string | null
    country: string | null
    date: Date | null
  }

  export type GrandPrixCountAggregateOutputType = {
    id: number
    name: number
    circuit: number
    country: number
    date: number
    _all: number
  }


  export type GrandPrixAvgAggregateInputType = {
    id?: true
  }

  export type GrandPrixSumAggregateInputType = {
    id?: true
  }

  export type GrandPrixMinAggregateInputType = {
    id?: true
    name?: true
    circuit?: true
    country?: true
    date?: true
  }

  export type GrandPrixMaxAggregateInputType = {
    id?: true
    name?: true
    circuit?: true
    country?: true
    date?: true
  }

  export type GrandPrixCountAggregateInputType = {
    id?: true
    name?: true
    circuit?: true
    country?: true
    date?: true
    _all?: true
  }

  export type GrandPrixAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrandPrix to aggregate.
     */
    where?: GrandPrixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrandPrixes to fetch.
     */
    orderBy?: GrandPrixOrderByWithRelationInput | GrandPrixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GrandPrixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrandPrixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrandPrixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GrandPrixes
    **/
    _count?: true | GrandPrixCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GrandPrixAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GrandPrixSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GrandPrixMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GrandPrixMaxAggregateInputType
  }

  export type GetGrandPrixAggregateType<T extends GrandPrixAggregateArgs> = {
        [P in keyof T & keyof AggregateGrandPrix]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrandPrix[P]>
      : GetScalarType<T[P], AggregateGrandPrix[P]>
  }




  export type GrandPrixGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrandPrixWhereInput
    orderBy?: GrandPrixOrderByWithAggregationInput | GrandPrixOrderByWithAggregationInput[]
    by: GrandPrixScalarFieldEnum[] | GrandPrixScalarFieldEnum
    having?: GrandPrixScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GrandPrixCountAggregateInputType | true
    _avg?: GrandPrixAvgAggregateInputType
    _sum?: GrandPrixSumAggregateInputType
    _min?: GrandPrixMinAggregateInputType
    _max?: GrandPrixMaxAggregateInputType
  }

  export type GrandPrixGroupByOutputType = {
    id: number
    name: string
    circuit: string
    country: string
    date: Date
    _count: GrandPrixCountAggregateOutputType | null
    _avg: GrandPrixAvgAggregateOutputType | null
    _sum: GrandPrixSumAggregateOutputType | null
    _min: GrandPrixMinAggregateOutputType | null
    _max: GrandPrixMaxAggregateOutputType | null
  }

  type GetGrandPrixGroupByPayload<T extends GrandPrixGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GrandPrixGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GrandPrixGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GrandPrixGroupByOutputType[P]>
            : GetScalarType<T[P], GrandPrixGroupByOutputType[P]>
        }
      >
    >


  export type GrandPrixSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    circuit?: boolean
    country?: boolean
    date?: boolean
    results?: boolean | GrandPrix$resultsArgs<ExtArgs>
    incidents?: boolean | GrandPrix$incidentsArgs<ExtArgs>
    _count?: boolean | GrandPrixCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grandPrix"]>



  export type GrandPrixSelectScalar = {
    id?: boolean
    name?: boolean
    circuit?: boolean
    country?: boolean
    date?: boolean
  }

  export type GrandPrixOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "circuit" | "country" | "date", ExtArgs["result"]["grandPrix"]>
  export type GrandPrixInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | GrandPrix$resultsArgs<ExtArgs>
    incidents?: boolean | GrandPrix$incidentsArgs<ExtArgs>
    _count?: boolean | GrandPrixCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GrandPrixPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GrandPrix"
    objects: {
      results: Prisma.$ResultPayload<ExtArgs>[]
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      circuit: string
      country: string
      date: Date
    }, ExtArgs["result"]["grandPrix"]>
    composites: {}
  }

  type GrandPrixGetPayload<S extends boolean | null | undefined | GrandPrixDefaultArgs> = $Result.GetResult<Prisma.$GrandPrixPayload, S>

  type GrandPrixCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GrandPrixFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GrandPrixCountAggregateInputType | true
    }

  export interface GrandPrixDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GrandPrix'], meta: { name: 'GrandPrix' } }
    /**
     * Find zero or one GrandPrix that matches the filter.
     * @param {GrandPrixFindUniqueArgs} args - Arguments to find a GrandPrix
     * @example
     * // Get one GrandPrix
     * const grandPrix = await prisma.grandPrix.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GrandPrixFindUniqueArgs>(args: SelectSubset<T, GrandPrixFindUniqueArgs<ExtArgs>>): Prisma__GrandPrixClient<$Result.GetResult<Prisma.$GrandPrixPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GrandPrix that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GrandPrixFindUniqueOrThrowArgs} args - Arguments to find a GrandPrix
     * @example
     * // Get one GrandPrix
     * const grandPrix = await prisma.grandPrix.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GrandPrixFindUniqueOrThrowArgs>(args: SelectSubset<T, GrandPrixFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GrandPrixClient<$Result.GetResult<Prisma.$GrandPrixPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrandPrix that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrandPrixFindFirstArgs} args - Arguments to find a GrandPrix
     * @example
     * // Get one GrandPrix
     * const grandPrix = await prisma.grandPrix.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GrandPrixFindFirstArgs>(args?: SelectSubset<T, GrandPrixFindFirstArgs<ExtArgs>>): Prisma__GrandPrixClient<$Result.GetResult<Prisma.$GrandPrixPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrandPrix that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrandPrixFindFirstOrThrowArgs} args - Arguments to find a GrandPrix
     * @example
     * // Get one GrandPrix
     * const grandPrix = await prisma.grandPrix.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GrandPrixFindFirstOrThrowArgs>(args?: SelectSubset<T, GrandPrixFindFirstOrThrowArgs<ExtArgs>>): Prisma__GrandPrixClient<$Result.GetResult<Prisma.$GrandPrixPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GrandPrixes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrandPrixFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GrandPrixes
     * const grandPrixes = await prisma.grandPrix.findMany()
     * 
     * // Get first 10 GrandPrixes
     * const grandPrixes = await prisma.grandPrix.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const grandPrixWithIdOnly = await prisma.grandPrix.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GrandPrixFindManyArgs>(args?: SelectSubset<T, GrandPrixFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrandPrixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GrandPrix.
     * @param {GrandPrixCreateArgs} args - Arguments to create a GrandPrix.
     * @example
     * // Create one GrandPrix
     * const GrandPrix = await prisma.grandPrix.create({
     *   data: {
     *     // ... data to create a GrandPrix
     *   }
     * })
     * 
     */
    create<T extends GrandPrixCreateArgs>(args: SelectSubset<T, GrandPrixCreateArgs<ExtArgs>>): Prisma__GrandPrixClient<$Result.GetResult<Prisma.$GrandPrixPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GrandPrixes.
     * @param {GrandPrixCreateManyArgs} args - Arguments to create many GrandPrixes.
     * @example
     * // Create many GrandPrixes
     * const grandPrix = await prisma.grandPrix.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GrandPrixCreateManyArgs>(args?: SelectSubset<T, GrandPrixCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GrandPrix.
     * @param {GrandPrixDeleteArgs} args - Arguments to delete one GrandPrix.
     * @example
     * // Delete one GrandPrix
     * const GrandPrix = await prisma.grandPrix.delete({
     *   where: {
     *     // ... filter to delete one GrandPrix
     *   }
     * })
     * 
     */
    delete<T extends GrandPrixDeleteArgs>(args: SelectSubset<T, GrandPrixDeleteArgs<ExtArgs>>): Prisma__GrandPrixClient<$Result.GetResult<Prisma.$GrandPrixPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GrandPrix.
     * @param {GrandPrixUpdateArgs} args - Arguments to update one GrandPrix.
     * @example
     * // Update one GrandPrix
     * const grandPrix = await prisma.grandPrix.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GrandPrixUpdateArgs>(args: SelectSubset<T, GrandPrixUpdateArgs<ExtArgs>>): Prisma__GrandPrixClient<$Result.GetResult<Prisma.$GrandPrixPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GrandPrixes.
     * @param {GrandPrixDeleteManyArgs} args - Arguments to filter GrandPrixes to delete.
     * @example
     * // Delete a few GrandPrixes
     * const { count } = await prisma.grandPrix.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GrandPrixDeleteManyArgs>(args?: SelectSubset<T, GrandPrixDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrandPrixes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrandPrixUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GrandPrixes
     * const grandPrix = await prisma.grandPrix.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GrandPrixUpdateManyArgs>(args: SelectSubset<T, GrandPrixUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GrandPrix.
     * @param {GrandPrixUpsertArgs} args - Arguments to update or create a GrandPrix.
     * @example
     * // Update or create a GrandPrix
     * const grandPrix = await prisma.grandPrix.upsert({
     *   create: {
     *     // ... data to create a GrandPrix
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GrandPrix we want to update
     *   }
     * })
     */
    upsert<T extends GrandPrixUpsertArgs>(args: SelectSubset<T, GrandPrixUpsertArgs<ExtArgs>>): Prisma__GrandPrixClient<$Result.GetResult<Prisma.$GrandPrixPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GrandPrixes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrandPrixCountArgs} args - Arguments to filter GrandPrixes to count.
     * @example
     * // Count the number of GrandPrixes
     * const count = await prisma.grandPrix.count({
     *   where: {
     *     // ... the filter for the GrandPrixes we want to count
     *   }
     * })
    **/
    count<T extends GrandPrixCountArgs>(
      args?: Subset<T, GrandPrixCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GrandPrixCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GrandPrix.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrandPrixAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GrandPrixAggregateArgs>(args: Subset<T, GrandPrixAggregateArgs>): Prisma.PrismaPromise<GetGrandPrixAggregateType<T>>

    /**
     * Group by GrandPrix.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrandPrixGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GrandPrixGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GrandPrixGroupByArgs['orderBy'] }
        : { orderBy?: GrandPrixGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GrandPrixGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrandPrixGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GrandPrix model
   */
  readonly fields: GrandPrixFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GrandPrix.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GrandPrixClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    results<T extends GrandPrix$resultsArgs<ExtArgs> = {}>(args?: Subset<T, GrandPrix$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incidents<T extends GrandPrix$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, GrandPrix$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GrandPrix model
   */
  interface GrandPrixFieldRefs {
    readonly id: FieldRef<"GrandPrix", 'Int'>
    readonly name: FieldRef<"GrandPrix", 'String'>
    readonly circuit: FieldRef<"GrandPrix", 'String'>
    readonly country: FieldRef<"GrandPrix", 'String'>
    readonly date: FieldRef<"GrandPrix", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GrandPrix findUnique
   */
  export type GrandPrixFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrandPrix
     */
    select?: GrandPrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrandPrix
     */
    omit?: GrandPrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrandPrixInclude<ExtArgs> | null
    /**
     * Filter, which GrandPrix to fetch.
     */
    where: GrandPrixWhereUniqueInput
  }

  /**
   * GrandPrix findUniqueOrThrow
   */
  export type GrandPrixFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrandPrix
     */
    select?: GrandPrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrandPrix
     */
    omit?: GrandPrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrandPrixInclude<ExtArgs> | null
    /**
     * Filter, which GrandPrix to fetch.
     */
    where: GrandPrixWhereUniqueInput
  }

  /**
   * GrandPrix findFirst
   */
  export type GrandPrixFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrandPrix
     */
    select?: GrandPrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrandPrix
     */
    omit?: GrandPrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrandPrixInclude<ExtArgs> | null
    /**
     * Filter, which GrandPrix to fetch.
     */
    where?: GrandPrixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrandPrixes to fetch.
     */
    orderBy?: GrandPrixOrderByWithRelationInput | GrandPrixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrandPrixes.
     */
    cursor?: GrandPrixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrandPrixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrandPrixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrandPrixes.
     */
    distinct?: GrandPrixScalarFieldEnum | GrandPrixScalarFieldEnum[]
  }

  /**
   * GrandPrix findFirstOrThrow
   */
  export type GrandPrixFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrandPrix
     */
    select?: GrandPrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrandPrix
     */
    omit?: GrandPrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrandPrixInclude<ExtArgs> | null
    /**
     * Filter, which GrandPrix to fetch.
     */
    where?: GrandPrixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrandPrixes to fetch.
     */
    orderBy?: GrandPrixOrderByWithRelationInput | GrandPrixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrandPrixes.
     */
    cursor?: GrandPrixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrandPrixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrandPrixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrandPrixes.
     */
    distinct?: GrandPrixScalarFieldEnum | GrandPrixScalarFieldEnum[]
  }

  /**
   * GrandPrix findMany
   */
  export type GrandPrixFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrandPrix
     */
    select?: GrandPrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrandPrix
     */
    omit?: GrandPrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrandPrixInclude<ExtArgs> | null
    /**
     * Filter, which GrandPrixes to fetch.
     */
    where?: GrandPrixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrandPrixes to fetch.
     */
    orderBy?: GrandPrixOrderByWithRelationInput | GrandPrixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GrandPrixes.
     */
    cursor?: GrandPrixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrandPrixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrandPrixes.
     */
    skip?: number
    distinct?: GrandPrixScalarFieldEnum | GrandPrixScalarFieldEnum[]
  }

  /**
   * GrandPrix create
   */
  export type GrandPrixCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrandPrix
     */
    select?: GrandPrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrandPrix
     */
    omit?: GrandPrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrandPrixInclude<ExtArgs> | null
    /**
     * The data needed to create a GrandPrix.
     */
    data: XOR<GrandPrixCreateInput, GrandPrixUncheckedCreateInput>
  }

  /**
   * GrandPrix createMany
   */
  export type GrandPrixCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GrandPrixes.
     */
    data: GrandPrixCreateManyInput | GrandPrixCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GrandPrix update
   */
  export type GrandPrixUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrandPrix
     */
    select?: GrandPrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrandPrix
     */
    omit?: GrandPrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrandPrixInclude<ExtArgs> | null
    /**
     * The data needed to update a GrandPrix.
     */
    data: XOR<GrandPrixUpdateInput, GrandPrixUncheckedUpdateInput>
    /**
     * Choose, which GrandPrix to update.
     */
    where: GrandPrixWhereUniqueInput
  }

  /**
   * GrandPrix updateMany
   */
  export type GrandPrixUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GrandPrixes.
     */
    data: XOR<GrandPrixUpdateManyMutationInput, GrandPrixUncheckedUpdateManyInput>
    /**
     * Filter which GrandPrixes to update
     */
    where?: GrandPrixWhereInput
    /**
     * Limit how many GrandPrixes to update.
     */
    limit?: number
  }

  /**
   * GrandPrix upsert
   */
  export type GrandPrixUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrandPrix
     */
    select?: GrandPrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrandPrix
     */
    omit?: GrandPrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrandPrixInclude<ExtArgs> | null
    /**
     * The filter to search for the GrandPrix to update in case it exists.
     */
    where: GrandPrixWhereUniqueInput
    /**
     * In case the GrandPrix found by the `where` argument doesn't exist, create a new GrandPrix with this data.
     */
    create: XOR<GrandPrixCreateInput, GrandPrixUncheckedCreateInput>
    /**
     * In case the GrandPrix was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GrandPrixUpdateInput, GrandPrixUncheckedUpdateInput>
  }

  /**
   * GrandPrix delete
   */
  export type GrandPrixDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrandPrix
     */
    select?: GrandPrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrandPrix
     */
    omit?: GrandPrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrandPrixInclude<ExtArgs> | null
    /**
     * Filter which GrandPrix to delete.
     */
    where: GrandPrixWhereUniqueInput
  }

  /**
   * GrandPrix deleteMany
   */
  export type GrandPrixDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrandPrixes to delete
     */
    where?: GrandPrixWhereInput
    /**
     * Limit how many GrandPrixes to delete.
     */
    limit?: number
  }

  /**
   * GrandPrix.results
   */
  export type GrandPrix$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    cursor?: ResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * GrandPrix.incidents
   */
  export type GrandPrix$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * GrandPrix without action
   */
  export type GrandPrixDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrandPrix
     */
    select?: GrandPrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrandPrix
     */
    omit?: GrandPrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrandPrixInclude<ExtArgs> | null
  }


  /**
   * Model Incident
   */

  export type AggregateIncident = {
    _count: IncidentCountAggregateOutputType | null
    _avg: IncidentAvgAggregateOutputType | null
    _sum: IncidentSumAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  export type IncidentAvgAggregateOutputType = {
    id: number | null
    carId: number | null
    engineId: number | null
    partId: number | null
    pilotId: number | null
    teamId: number | null
    grandPrixId: number | null
  }

  export type IncidentSumAggregateOutputType = {
    id: number | null
    carId: number | null
    engineId: number | null
    partId: number | null
    pilotId: number | null
    teamId: number | null
    grandPrixId: number | null
  }

  export type IncidentMinAggregateOutputType = {
    id: number | null
    type: string | null
    description: string | null
    date: Date | null
    carId: number | null
    engineId: number | null
    partId: number | null
    pilotId: number | null
    teamId: number | null
    grandPrixId: number | null
    resolved: boolean | null
  }

  export type IncidentMaxAggregateOutputType = {
    id: number | null
    type: string | null
    description: string | null
    date: Date | null
    carId: number | null
    engineId: number | null
    partId: number | null
    pilotId: number | null
    teamId: number | null
    grandPrixId: number | null
    resolved: boolean | null
  }

  export type IncidentCountAggregateOutputType = {
    id: number
    type: number
    description: number
    date: number
    carId: number
    engineId: number
    partId: number
    pilotId: number
    teamId: number
    grandPrixId: number
    resolved: number
    _all: number
  }


  export type IncidentAvgAggregateInputType = {
    id?: true
    carId?: true
    engineId?: true
    partId?: true
    pilotId?: true
    teamId?: true
    grandPrixId?: true
  }

  export type IncidentSumAggregateInputType = {
    id?: true
    carId?: true
    engineId?: true
    partId?: true
    pilotId?: true
    teamId?: true
    grandPrixId?: true
  }

  export type IncidentMinAggregateInputType = {
    id?: true
    type?: true
    description?: true
    date?: true
    carId?: true
    engineId?: true
    partId?: true
    pilotId?: true
    teamId?: true
    grandPrixId?: true
    resolved?: true
  }

  export type IncidentMaxAggregateInputType = {
    id?: true
    type?: true
    description?: true
    date?: true
    carId?: true
    engineId?: true
    partId?: true
    pilotId?: true
    teamId?: true
    grandPrixId?: true
    resolved?: true
  }

  export type IncidentCountAggregateInputType = {
    id?: true
    type?: true
    description?: true
    date?: true
    carId?: true
    engineId?: true
    partId?: true
    pilotId?: true
    teamId?: true
    grandPrixId?: true
    resolved?: true
    _all?: true
  }

  export type IncidentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incident to aggregate.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incidents
    **/
    _count?: true | IncidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncidentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncidentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentMaxAggregateInputType
  }

  export type GetIncidentAggregateType<T extends IncidentAggregateArgs> = {
        [P in keyof T & keyof AggregateIncident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncident[P]>
      : GetScalarType<T[P], AggregateIncident[P]>
  }




  export type IncidentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithAggregationInput | IncidentOrderByWithAggregationInput[]
    by: IncidentScalarFieldEnum[] | IncidentScalarFieldEnum
    having?: IncidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentCountAggregateInputType | true
    _avg?: IncidentAvgAggregateInputType
    _sum?: IncidentSumAggregateInputType
    _min?: IncidentMinAggregateInputType
    _max?: IncidentMaxAggregateInputType
  }

  export type IncidentGroupByOutputType = {
    id: number
    type: string
    description: string | null
    date: Date
    carId: number | null
    engineId: number | null
    partId: number | null
    pilotId: number | null
    teamId: number
    grandPrixId: number | null
    resolved: boolean
    _count: IncidentCountAggregateOutputType | null
    _avg: IncidentAvgAggregateOutputType | null
    _sum: IncidentSumAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  type GetIncidentGroupByPayload<T extends IncidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentGroupByOutputType[P]>
        }
      >
    >


  export type IncidentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    description?: boolean
    date?: boolean
    carId?: boolean
    engineId?: boolean
    partId?: boolean
    pilotId?: boolean
    teamId?: boolean
    grandPrixId?: boolean
    resolved?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    car?: boolean | Incident$carArgs<ExtArgs>
    engine?: boolean | Incident$engineArgs<ExtArgs>
    part?: boolean | Incident$partArgs<ExtArgs>
    pilot?: boolean | Incident$pilotArgs<ExtArgs>
    grandPrix?: boolean | Incident$grandPrixArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>



  export type IncidentSelectScalar = {
    id?: boolean
    type?: boolean
    description?: boolean
    date?: boolean
    carId?: boolean
    engineId?: boolean
    partId?: boolean
    pilotId?: boolean
    teamId?: boolean
    grandPrixId?: boolean
    resolved?: boolean
  }

  export type IncidentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "description" | "date" | "carId" | "engineId" | "partId" | "pilotId" | "teamId" | "grandPrixId" | "resolved", ExtArgs["result"]["incident"]>
  export type IncidentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    car?: boolean | Incident$carArgs<ExtArgs>
    engine?: boolean | Incident$engineArgs<ExtArgs>
    part?: boolean | Incident$partArgs<ExtArgs>
    pilot?: boolean | Incident$pilotArgs<ExtArgs>
    grandPrix?: boolean | Incident$grandPrixArgs<ExtArgs>
  }

  export type $IncidentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Incident"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      car: Prisma.$CarPayload<ExtArgs> | null
      engine: Prisma.$EnginePayload<ExtArgs> | null
      part: Prisma.$PartPayload<ExtArgs> | null
      pilot: Prisma.$MemberPayload<ExtArgs> | null
      grandPrix: Prisma.$GrandPrixPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      description: string | null
      date: Date
      carId: number | null
      engineId: number | null
      partId: number | null
      pilotId: number | null
      teamId: number
      grandPrixId: number | null
      resolved: boolean
    }, ExtArgs["result"]["incident"]>
    composites: {}
  }

  type IncidentGetPayload<S extends boolean | null | undefined | IncidentDefaultArgs> = $Result.GetResult<Prisma.$IncidentPayload, S>

  type IncidentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentCountAggregateInputType | true
    }

  export interface IncidentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Incident'], meta: { name: 'Incident' } }
    /**
     * Find zero or one Incident that matches the filter.
     * @param {IncidentFindUniqueArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentFindUniqueArgs>(args: SelectSubset<T, IncidentFindUniqueArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Incident that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentFindUniqueOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentFindFirstArgs>(args?: SelectSubset<T, IncidentFindFirstArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incidents
     * const incidents = await prisma.incident.findMany()
     * 
     * // Get first 10 Incidents
     * const incidents = await prisma.incident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentWithIdOnly = await prisma.incident.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentFindManyArgs>(args?: SelectSubset<T, IncidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Incident.
     * @param {IncidentCreateArgs} args - Arguments to create a Incident.
     * @example
     * // Create one Incident
     * const Incident = await prisma.incident.create({
     *   data: {
     *     // ... data to create a Incident
     *   }
     * })
     * 
     */
    create<T extends IncidentCreateArgs>(args: SelectSubset<T, IncidentCreateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incidents.
     * @param {IncidentCreateManyArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentCreateManyArgs>(args?: SelectSubset<T, IncidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Incident.
     * @param {IncidentDeleteArgs} args - Arguments to delete one Incident.
     * @example
     * // Delete one Incident
     * const Incident = await prisma.incident.delete({
     *   where: {
     *     // ... filter to delete one Incident
     *   }
     * })
     * 
     */
    delete<T extends IncidentDeleteArgs>(args: SelectSubset<T, IncidentDeleteArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Incident.
     * @param {IncidentUpdateArgs} args - Arguments to update one Incident.
     * @example
     * // Update one Incident
     * const incident = await prisma.incident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentUpdateArgs>(args: SelectSubset<T, IncidentUpdateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incidents.
     * @param {IncidentDeleteManyArgs} args - Arguments to filter Incidents to delete.
     * @example
     * // Delete a few Incidents
     * const { count } = await prisma.incident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentDeleteManyArgs>(args?: SelectSubset<T, IncidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentUpdateManyArgs>(args: SelectSubset<T, IncidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Incident.
     * @param {IncidentUpsertArgs} args - Arguments to update or create a Incident.
     * @example
     * // Update or create a Incident
     * const incident = await prisma.incident.upsert({
     *   create: {
     *     // ... data to create a Incident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incident we want to update
     *   }
     * })
     */
    upsert<T extends IncidentUpsertArgs>(args: SelectSubset<T, IncidentUpsertArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentCountArgs} args - Arguments to filter Incidents to count.
     * @example
     * // Count the number of Incidents
     * const count = await prisma.incident.count({
     *   where: {
     *     // ... the filter for the Incidents we want to count
     *   }
     * })
    **/
    count<T extends IncidentCountArgs>(
      args?: Subset<T, IncidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncidentAggregateArgs>(args: Subset<T, IncidentAggregateArgs>): Prisma.PrismaPromise<GetIncidentAggregateType<T>>

    /**
     * Group by Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentGroupByArgs['orderBy'] }
        : { orderBy?: IncidentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Incident model
   */
  readonly fields: IncidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Incident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    car<T extends Incident$carArgs<ExtArgs> = {}>(args?: Subset<T, Incident$carArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    engine<T extends Incident$engineArgs<ExtArgs> = {}>(args?: Subset<T, Incident$engineArgs<ExtArgs>>): Prisma__EngineClient<$Result.GetResult<Prisma.$EnginePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    part<T extends Incident$partArgs<ExtArgs> = {}>(args?: Subset<T, Incident$partArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pilot<T extends Incident$pilotArgs<ExtArgs> = {}>(args?: Subset<T, Incident$pilotArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    grandPrix<T extends Incident$grandPrixArgs<ExtArgs> = {}>(args?: Subset<T, Incident$grandPrixArgs<ExtArgs>>): Prisma__GrandPrixClient<$Result.GetResult<Prisma.$GrandPrixPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Incident model
   */
  interface IncidentFieldRefs {
    readonly id: FieldRef<"Incident", 'Int'>
    readonly type: FieldRef<"Incident", 'String'>
    readonly description: FieldRef<"Incident", 'String'>
    readonly date: FieldRef<"Incident", 'DateTime'>
    readonly carId: FieldRef<"Incident", 'Int'>
    readonly engineId: FieldRef<"Incident", 'Int'>
    readonly partId: FieldRef<"Incident", 'Int'>
    readonly pilotId: FieldRef<"Incident", 'Int'>
    readonly teamId: FieldRef<"Incident", 'Int'>
    readonly grandPrixId: FieldRef<"Incident", 'Int'>
    readonly resolved: FieldRef<"Incident", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Incident findUnique
   */
  export type IncidentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findUniqueOrThrow
   */
  export type IncidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findFirst
   */
  export type IncidentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findFirstOrThrow
   */
  export type IncidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findMany
   */
  export type IncidentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incidents to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident create
   */
  export type IncidentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to create a Incident.
     */
    data: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
  }

  /**
   * Incident createMany
   */
  export type IncidentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Incident update
   */
  export type IncidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to update a Incident.
     */
    data: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
    /**
     * Choose, which Incident to update.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident updateMany
   */
  export type IncidentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
  }

  /**
   * Incident upsert
   */
  export type IncidentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The filter to search for the Incident to update in case it exists.
     */
    where: IncidentWhereUniqueInput
    /**
     * In case the Incident found by the `where` argument doesn't exist, create a new Incident with this data.
     */
    create: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
    /**
     * In case the Incident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
  }

  /**
   * Incident delete
   */
  export type IncidentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter which Incident to delete.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident deleteMany
   */
  export type IncidentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incidents to delete
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to delete.
     */
    limit?: number
  }

  /**
   * Incident.car
   */
  export type Incident$carArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
  }

  /**
   * Incident.engine
   */
  export type Incident$engineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engine
     */
    select?: EngineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engine
     */
    omit?: EngineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineInclude<ExtArgs> | null
    where?: EngineWhereInput
  }

  /**
   * Incident.part
   */
  export type Incident$partArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    where?: PartWhereInput
  }

  /**
   * Incident.pilot
   */
  export type Incident$pilotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * Incident.grandPrix
   */
  export type Incident$grandPrixArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrandPrix
     */
    select?: GrandPrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrandPrix
     */
    omit?: GrandPrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrandPrixInclude<ExtArgs> | null
    where?: GrandPrixWhereInput
  }

  /**
   * Incident without action
   */
  export type IncidentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
  }


  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberAvgAggregateOutputType = {
    id: number | null
    teamId: number | null
    age: number | null
  }

  export type MemberSumAggregateOutputType = {
    id: number | null
    teamId: number | null
    age: number | null
  }

  export type MemberMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    teamId: number | null
    nationality: string | null
    age: number | null
    avatarUrl: string | null
    createdAt: Date | null
  }

  export type MemberMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    teamId: number | null
    nationality: string | null
    age: number | null
    avatarUrl: string | null
    createdAt: Date | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    role: number
    teamId: number
    nationality: number
    age: number
    avatarUrl: number
    createdAt: number
    _all: number
  }


  export type MemberAvgAggregateInputType = {
    id?: true
    teamId?: true
    age?: true
  }

  export type MemberSumAggregateInputType = {
    id?: true
    teamId?: true
    age?: true
  }

  export type MemberMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    teamId?: true
    nationality?: true
    age?: true
    avatarUrl?: true
    createdAt?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    teamId?: true
    nationality?: true
    age?: true
    avatarUrl?: true
    createdAt?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    teamId?: true
    nationality?: true
    age?: true
    avatarUrl?: true
    createdAt?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _avg?: MemberAvgAggregateInputType
    _sum?: MemberSumAggregateInputType
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    teamId: number
    nationality: string | null
    age: number | null
    avatarUrl: string | null
    createdAt: Date
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    teamId?: boolean
    nationality?: boolean
    age?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    incidents?: boolean | Member$incidentsArgs<ExtArgs>
    results?: boolean | Member$resultsArgs<ExtArgs>
    cars?: boolean | Member$carsArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>



  export type MemberSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    teamId?: boolean
    nationality?: boolean
    age?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "role" | "teamId" | "nationality" | "age" | "avatarUrl" | "createdAt", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    incidents?: boolean | Member$incidentsArgs<ExtArgs>
    results?: boolean | Member$resultsArgs<ExtArgs>
    cars?: boolean | Member$carsArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
      results: Prisma.$ResultPayload<ExtArgs>[]
      cars: Prisma.$CarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      password: string
      role: $Enums.Role
      teamId: number
      nationality: string | null
      age: number | null
      avatarUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    incidents<T extends Member$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, Member$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    results<T extends Member$resultsArgs<ExtArgs> = {}>(args?: Subset<T, Member$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cars<T extends Member$carsArgs<ExtArgs> = {}>(args?: Subset<T, Member$carsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Member model
   */
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'Int'>
    readonly firstName: FieldRef<"Member", 'String'>
    readonly lastName: FieldRef<"Member", 'String'>
    readonly email: FieldRef<"Member", 'String'>
    readonly password: FieldRef<"Member", 'String'>
    readonly role: FieldRef<"Member", 'Role'>
    readonly teamId: FieldRef<"Member", 'Int'>
    readonly nationality: FieldRef<"Member", 'String'>
    readonly age: FieldRef<"Member", 'Int'>
    readonly avatarUrl: FieldRef<"Member", 'String'>
    readonly createdAt: FieldRef<"Member", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member.incidents
   */
  export type Member$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Member.results
   */
  export type Member$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    cursor?: ResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Member.cars
   */
  export type Member$carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model Part
   */

  export type AggregatePart = {
    _count: PartCountAggregateOutputType | null
    _avg: PartAvgAggregateOutputType | null
    _sum: PartSumAggregateOutputType | null
    _min: PartMinAggregateOutputType | null
    _max: PartMaxAggregateOutputType | null
  }

  export type PartAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    teamId: number | null
  }

  export type PartSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    teamId: number | null
  }

  export type PartMinAggregateOutputType = {
    id: number | null
    reference: string | null
    type: string | null
    quantity: number | null
    teamId: number | null
  }

  export type PartMaxAggregateOutputType = {
    id: number | null
    reference: string | null
    type: string | null
    quantity: number | null
    teamId: number | null
  }

  export type PartCountAggregateOutputType = {
    id: number
    reference: number
    type: number
    quantity: number
    teamId: number
    _all: number
  }


  export type PartAvgAggregateInputType = {
    id?: true
    quantity?: true
    teamId?: true
  }

  export type PartSumAggregateInputType = {
    id?: true
    quantity?: true
    teamId?: true
  }

  export type PartMinAggregateInputType = {
    id?: true
    reference?: true
    type?: true
    quantity?: true
    teamId?: true
  }

  export type PartMaxAggregateInputType = {
    id?: true
    reference?: true
    type?: true
    quantity?: true
    teamId?: true
  }

  export type PartCountAggregateInputType = {
    id?: true
    reference?: true
    type?: true
    quantity?: true
    teamId?: true
    _all?: true
  }

  export type PartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Part to aggregate.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parts
    **/
    _count?: true | PartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartMaxAggregateInputType
  }

  export type GetPartAggregateType<T extends PartAggregateArgs> = {
        [P in keyof T & keyof AggregatePart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePart[P]>
      : GetScalarType<T[P], AggregatePart[P]>
  }




  export type PartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartWhereInput
    orderBy?: PartOrderByWithAggregationInput | PartOrderByWithAggregationInput[]
    by: PartScalarFieldEnum[] | PartScalarFieldEnum
    having?: PartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartCountAggregateInputType | true
    _avg?: PartAvgAggregateInputType
    _sum?: PartSumAggregateInputType
    _min?: PartMinAggregateInputType
    _max?: PartMaxAggregateInputType
  }

  export type PartGroupByOutputType = {
    id: number
    reference: string
    type: string
    quantity: number
    teamId: number
    _count: PartCountAggregateOutputType | null
    _avg: PartAvgAggregateOutputType | null
    _sum: PartSumAggregateOutputType | null
    _min: PartMinAggregateOutputType | null
    _max: PartMaxAggregateOutputType | null
  }

  type GetPartGroupByPayload<T extends PartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartGroupByOutputType[P]>
            : GetScalarType<T[P], PartGroupByOutputType[P]>
        }
      >
    >


  export type PartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    type?: boolean
    quantity?: boolean
    teamId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    incidents?: boolean | Part$incidentsArgs<ExtArgs>
    _count?: boolean | PartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["part"]>



  export type PartSelectScalar = {
    id?: boolean
    reference?: boolean
    type?: boolean
    quantity?: boolean
    teamId?: boolean
  }

  export type PartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reference" | "type" | "quantity" | "teamId", ExtArgs["result"]["part"]>
  export type PartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    incidents?: boolean | Part$incidentsArgs<ExtArgs>
    _count?: boolean | PartCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Part"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reference: string
      type: string
      quantity: number
      teamId: number
    }, ExtArgs["result"]["part"]>
    composites: {}
  }

  type PartGetPayload<S extends boolean | null | undefined | PartDefaultArgs> = $Result.GetResult<Prisma.$PartPayload, S>

  type PartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartCountAggregateInputType | true
    }

  export interface PartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Part'], meta: { name: 'Part' } }
    /**
     * Find zero or one Part that matches the filter.
     * @param {PartFindUniqueArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartFindUniqueArgs>(args: SelectSubset<T, PartFindUniqueArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Part that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartFindUniqueOrThrowArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartFindUniqueOrThrowArgs>(args: SelectSubset<T, PartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Part that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindFirstArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartFindFirstArgs>(args?: SelectSubset<T, PartFindFirstArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Part that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindFirstOrThrowArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartFindFirstOrThrowArgs>(args?: SelectSubset<T, PartFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parts
     * const parts = await prisma.part.findMany()
     * 
     * // Get first 10 Parts
     * const parts = await prisma.part.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partWithIdOnly = await prisma.part.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartFindManyArgs>(args?: SelectSubset<T, PartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Part.
     * @param {PartCreateArgs} args - Arguments to create a Part.
     * @example
     * // Create one Part
     * const Part = await prisma.part.create({
     *   data: {
     *     // ... data to create a Part
     *   }
     * })
     * 
     */
    create<T extends PartCreateArgs>(args: SelectSubset<T, PartCreateArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parts.
     * @param {PartCreateManyArgs} args - Arguments to create many Parts.
     * @example
     * // Create many Parts
     * const part = await prisma.part.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartCreateManyArgs>(args?: SelectSubset<T, PartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Part.
     * @param {PartDeleteArgs} args - Arguments to delete one Part.
     * @example
     * // Delete one Part
     * const Part = await prisma.part.delete({
     *   where: {
     *     // ... filter to delete one Part
     *   }
     * })
     * 
     */
    delete<T extends PartDeleteArgs>(args: SelectSubset<T, PartDeleteArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Part.
     * @param {PartUpdateArgs} args - Arguments to update one Part.
     * @example
     * // Update one Part
     * const part = await prisma.part.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartUpdateArgs>(args: SelectSubset<T, PartUpdateArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parts.
     * @param {PartDeleteManyArgs} args - Arguments to filter Parts to delete.
     * @example
     * // Delete a few Parts
     * const { count } = await prisma.part.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartDeleteManyArgs>(args?: SelectSubset<T, PartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parts
     * const part = await prisma.part.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartUpdateManyArgs>(args: SelectSubset<T, PartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Part.
     * @param {PartUpsertArgs} args - Arguments to update or create a Part.
     * @example
     * // Update or create a Part
     * const part = await prisma.part.upsert({
     *   create: {
     *     // ... data to create a Part
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Part we want to update
     *   }
     * })
     */
    upsert<T extends PartUpsertArgs>(args: SelectSubset<T, PartUpsertArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartCountArgs} args - Arguments to filter Parts to count.
     * @example
     * // Count the number of Parts
     * const count = await prisma.part.count({
     *   where: {
     *     // ... the filter for the Parts we want to count
     *   }
     * })
    **/
    count<T extends PartCountArgs>(
      args?: Subset<T, PartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Part.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartAggregateArgs>(args: Subset<T, PartAggregateArgs>): Prisma.PrismaPromise<GetPartAggregateType<T>>

    /**
     * Group by Part.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartGroupByArgs['orderBy'] }
        : { orderBy?: PartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Part model
   */
  readonly fields: PartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Part.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    incidents<T extends Part$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, Part$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Part model
   */
  interface PartFieldRefs {
    readonly id: FieldRef<"Part", 'Int'>
    readonly reference: FieldRef<"Part", 'String'>
    readonly type: FieldRef<"Part", 'String'>
    readonly quantity: FieldRef<"Part", 'Int'>
    readonly teamId: FieldRef<"Part", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Part findUnique
   */
  export type PartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part findUniqueOrThrow
   */
  export type PartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part findFirst
   */
  export type PartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part findFirstOrThrow
   */
  export type PartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part findMany
   */
  export type PartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Parts to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part create
   */
  export type PartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The data needed to create a Part.
     */
    data: XOR<PartCreateInput, PartUncheckedCreateInput>
  }

  /**
   * Part createMany
   */
  export type PartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parts.
     */
    data: PartCreateManyInput | PartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Part update
   */
  export type PartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The data needed to update a Part.
     */
    data: XOR<PartUpdateInput, PartUncheckedUpdateInput>
    /**
     * Choose, which Part to update.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part updateMany
   */
  export type PartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parts.
     */
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyInput>
    /**
     * Filter which Parts to update
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to update.
     */
    limit?: number
  }

  /**
   * Part upsert
   */
  export type PartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The filter to search for the Part to update in case it exists.
     */
    where: PartWhereUniqueInput
    /**
     * In case the Part found by the `where` argument doesn't exist, create a new Part with this data.
     */
    create: XOR<PartCreateInput, PartUncheckedCreateInput>
    /**
     * In case the Part was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartUpdateInput, PartUncheckedUpdateInput>
  }

  /**
   * Part delete
   */
  export type PartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter which Part to delete.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part deleteMany
   */
  export type PartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parts to delete
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to delete.
     */
    limit?: number
  }

  /**
   * Part.incidents
   */
  export type Part$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Part without action
   */
  export type PartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
  }


  /**
   * Model Result
   */

  export type AggregateResult = {
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  export type ResultAvgAggregateOutputType = {
    id: number | null
    position: number | null
    points: number | null
    pilotId: number | null
    carId: number | null
    grandPrixId: number | null
    teamId: number | null
  }

  export type ResultSumAggregateOutputType = {
    id: number | null
    position: number | null
    points: number | null
    pilotId: number | null
    carId: number | null
    grandPrixId: number | null
    teamId: number | null
  }

  export type ResultMinAggregateOutputType = {
    id: number | null
    position: number | null
    points: number | null
    pilotId: number | null
    carId: number | null
    grandPrixId: number | null
    teamId: number | null
    createdAt: Date | null
  }

  export type ResultMaxAggregateOutputType = {
    id: number | null
    position: number | null
    points: number | null
    pilotId: number | null
    carId: number | null
    grandPrixId: number | null
    teamId: number | null
    createdAt: Date | null
  }

  export type ResultCountAggregateOutputType = {
    id: number
    position: number
    points: number
    pilotId: number
    carId: number
    grandPrixId: number
    teamId: number
    createdAt: number
    _all: number
  }


  export type ResultAvgAggregateInputType = {
    id?: true
    position?: true
    points?: true
    pilotId?: true
    carId?: true
    grandPrixId?: true
    teamId?: true
  }

  export type ResultSumAggregateInputType = {
    id?: true
    position?: true
    points?: true
    pilotId?: true
    carId?: true
    grandPrixId?: true
    teamId?: true
  }

  export type ResultMinAggregateInputType = {
    id?: true
    position?: true
    points?: true
    pilotId?: true
    carId?: true
    grandPrixId?: true
    teamId?: true
    createdAt?: true
  }

  export type ResultMaxAggregateInputType = {
    id?: true
    position?: true
    points?: true
    pilotId?: true
    carId?: true
    grandPrixId?: true
    teamId?: true
    createdAt?: true
  }

  export type ResultCountAggregateInputType = {
    id?: true
    position?: true
    points?: true
    pilotId?: true
    carId?: true
    grandPrixId?: true
    teamId?: true
    createdAt?: true
    _all?: true
  }

  export type ResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Result to aggregate.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Results
    **/
    _count?: true | ResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultMaxAggregateInputType
  }

  export type GetResultAggregateType<T extends ResultAggregateArgs> = {
        [P in keyof T & keyof AggregateResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResult[P]>
      : GetScalarType<T[P], AggregateResult[P]>
  }




  export type ResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithAggregationInput | ResultOrderByWithAggregationInput[]
    by: ResultScalarFieldEnum[] | ResultScalarFieldEnum
    having?: ResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultCountAggregateInputType | true
    _avg?: ResultAvgAggregateInputType
    _sum?: ResultSumAggregateInputType
    _min?: ResultMinAggregateInputType
    _max?: ResultMaxAggregateInputType
  }

  export type ResultGroupByOutputType = {
    id: number
    position: number | null
    points: number | null
    pilotId: number
    carId: number
    grandPrixId: number
    teamId: number
    createdAt: Date
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  type GetResultGroupByPayload<T extends ResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultGroupByOutputType[P]>
            : GetScalarType<T[P], ResultGroupByOutputType[P]>
        }
      >
    >


  export type ResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    points?: boolean
    pilotId?: boolean
    carId?: boolean
    grandPrixId?: boolean
    teamId?: boolean
    createdAt?: boolean
    pilot?: boolean | MemberDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
    grandPrix?: boolean | GrandPrixDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>



  export type ResultSelectScalar = {
    id?: boolean
    position?: boolean
    points?: boolean
    pilotId?: boolean
    carId?: boolean
    grandPrixId?: boolean
    teamId?: boolean
    createdAt?: boolean
  }

  export type ResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "position" | "points" | "pilotId" | "carId" | "grandPrixId" | "teamId" | "createdAt", ExtArgs["result"]["result"]>
  export type ResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pilot?: boolean | MemberDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
    grandPrix?: boolean | GrandPrixDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $ResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Result"
    objects: {
      pilot: Prisma.$MemberPayload<ExtArgs>
      car: Prisma.$CarPayload<ExtArgs>
      grandPrix: Prisma.$GrandPrixPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      position: number | null
      points: number | null
      pilotId: number
      carId: number
      grandPrixId: number
      teamId: number
      createdAt: Date
    }, ExtArgs["result"]["result"]>
    composites: {}
  }

  type ResultGetPayload<S extends boolean | null | undefined | ResultDefaultArgs> = $Result.GetResult<Prisma.$ResultPayload, S>

  type ResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResultCountAggregateInputType | true
    }

  export interface ResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Result'], meta: { name: 'Result' } }
    /**
     * Find zero or one Result that matches the filter.
     * @param {ResultFindUniqueArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResultFindUniqueArgs>(args: SelectSubset<T, ResultFindUniqueArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Result that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResultFindUniqueOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResultFindUniqueOrThrowArgs>(args: SelectSubset<T, ResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Result that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResultFindFirstArgs>(args?: SelectSubset<T, ResultFindFirstArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Result that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResultFindFirstOrThrowArgs>(args?: SelectSubset<T, ResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Results
     * const results = await prisma.result.findMany()
     * 
     * // Get first 10 Results
     * const results = await prisma.result.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resultWithIdOnly = await prisma.result.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResultFindManyArgs>(args?: SelectSubset<T, ResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Result.
     * @param {ResultCreateArgs} args - Arguments to create a Result.
     * @example
     * // Create one Result
     * const Result = await prisma.result.create({
     *   data: {
     *     // ... data to create a Result
     *   }
     * })
     * 
     */
    create<T extends ResultCreateArgs>(args: SelectSubset<T, ResultCreateArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Results.
     * @param {ResultCreateManyArgs} args - Arguments to create many Results.
     * @example
     * // Create many Results
     * const result = await prisma.result.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResultCreateManyArgs>(args?: SelectSubset<T, ResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Result.
     * @param {ResultDeleteArgs} args - Arguments to delete one Result.
     * @example
     * // Delete one Result
     * const Result = await prisma.result.delete({
     *   where: {
     *     // ... filter to delete one Result
     *   }
     * })
     * 
     */
    delete<T extends ResultDeleteArgs>(args: SelectSubset<T, ResultDeleteArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Result.
     * @param {ResultUpdateArgs} args - Arguments to update one Result.
     * @example
     * // Update one Result
     * const result = await prisma.result.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResultUpdateArgs>(args: SelectSubset<T, ResultUpdateArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Results.
     * @param {ResultDeleteManyArgs} args - Arguments to filter Results to delete.
     * @example
     * // Delete a few Results
     * const { count } = await prisma.result.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResultDeleteManyArgs>(args?: SelectSubset<T, ResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Results
     * const result = await prisma.result.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResultUpdateManyArgs>(args: SelectSubset<T, ResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Result.
     * @param {ResultUpsertArgs} args - Arguments to update or create a Result.
     * @example
     * // Update or create a Result
     * const result = await prisma.result.upsert({
     *   create: {
     *     // ... data to create a Result
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Result we want to update
     *   }
     * })
     */
    upsert<T extends ResultUpsertArgs>(args: SelectSubset<T, ResultUpsertArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultCountArgs} args - Arguments to filter Results to count.
     * @example
     * // Count the number of Results
     * const count = await prisma.result.count({
     *   where: {
     *     // ... the filter for the Results we want to count
     *   }
     * })
    **/
    count<T extends ResultCountArgs>(
      args?: Subset<T, ResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResultAggregateArgs>(args: Subset<T, ResultAggregateArgs>): Prisma.PrismaPromise<GetResultAggregateType<T>>

    /**
     * Group by Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResultGroupByArgs['orderBy'] }
        : { orderBy?: ResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Result model
   */
  readonly fields: ResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Result.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pilot<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    grandPrix<T extends GrandPrixDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GrandPrixDefaultArgs<ExtArgs>>): Prisma__GrandPrixClient<$Result.GetResult<Prisma.$GrandPrixPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Result model
   */
  interface ResultFieldRefs {
    readonly id: FieldRef<"Result", 'Int'>
    readonly position: FieldRef<"Result", 'Int'>
    readonly points: FieldRef<"Result", 'Int'>
    readonly pilotId: FieldRef<"Result", 'Int'>
    readonly carId: FieldRef<"Result", 'Int'>
    readonly grandPrixId: FieldRef<"Result", 'Int'>
    readonly teamId: FieldRef<"Result", 'Int'>
    readonly createdAt: FieldRef<"Result", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Result findUnique
   */
  export type ResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result findUniqueOrThrow
   */
  export type ResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result findFirst
   */
  export type ResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result findFirstOrThrow
   */
  export type ResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result findMany
   */
  export type ResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Results to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result create
   */
  export type ResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The data needed to create a Result.
     */
    data: XOR<ResultCreateInput, ResultUncheckedCreateInput>
  }

  /**
   * Result createMany
   */
  export type ResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Results.
     */
    data: ResultCreateManyInput | ResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Result update
   */
  export type ResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The data needed to update a Result.
     */
    data: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
    /**
     * Choose, which Result to update.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result updateMany
   */
  export type ResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Results.
     */
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyInput>
    /**
     * Filter which Results to update
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to update.
     */
    limit?: number
  }

  /**
   * Result upsert
   */
  export type ResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The filter to search for the Result to update in case it exists.
     */
    where: ResultWhereUniqueInput
    /**
     * In case the Result found by the `where` argument doesn't exist, create a new Result with this data.
     */
    create: XOR<ResultCreateInput, ResultUncheckedCreateInput>
    /**
     * In case the Result was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
  }

  /**
   * Result delete
   */
  export type ResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter which Result to delete.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result deleteMany
   */
  export type ResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Results to delete
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to delete.
     */
    limit?: number
  }

  /**
   * Result without action
   */
  export type ResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id: number | null
  }

  export type TeamSumAggregateOutputType = {
    id: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: number | null
    name: string | null
    country: string | null
    password: string | null
    director: string | null
    email: string | null
  }

  export type TeamMaxAggregateOutputType = {
    id: number | null
    name: string | null
    country: string | null
    password: string | null
    director: string | null
    email: string | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    country: number
    password: number
    director: number
    email: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id?: true
  }

  export type TeamSumAggregateInputType = {
    id?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    country?: true
    password?: true
    director?: true
    email?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    country?: true
    password?: true
    director?: true
    email?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    country?: true
    password?: true
    director?: true
    email?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: number
    name: string
    country: string
    password: string
    director: string | null
    email: string
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    password?: boolean
    director?: boolean
    email?: boolean
    members?: boolean | Team$membersArgs<ExtArgs>
    cars?: boolean | Team$carsArgs<ExtArgs>
    engines?: boolean | Team$enginesArgs<ExtArgs>
    parts?: boolean | Team$partsArgs<ExtArgs>
    results?: boolean | Team$resultsArgs<ExtArgs>
    incidents?: boolean | Team$incidentsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>



  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    country?: boolean
    password?: boolean
    director?: boolean
    email?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "country" | "password" | "director" | "email", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Team$membersArgs<ExtArgs>
    cars?: boolean | Team$carsArgs<ExtArgs>
    engines?: boolean | Team$enginesArgs<ExtArgs>
    parts?: boolean | Team$partsArgs<ExtArgs>
    results?: boolean | Team$resultsArgs<ExtArgs>
    incidents?: boolean | Team$incidentsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      members: Prisma.$MemberPayload<ExtArgs>[]
      cars: Prisma.$CarPayload<ExtArgs>[]
      engines: Prisma.$EnginePayload<ExtArgs>[]
      parts: Prisma.$PartPayload<ExtArgs>[]
      results: Prisma.$ResultPayload<ExtArgs>[]
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      country: string
      password: string
      director: string | null
      email: string
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Team$membersArgs<ExtArgs> = {}>(args?: Subset<T, Team$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cars<T extends Team$carsArgs<ExtArgs> = {}>(args?: Subset<T, Team$carsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    engines<T extends Team$enginesArgs<ExtArgs> = {}>(args?: Subset<T, Team$enginesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnginePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parts<T extends Team$partsArgs<ExtArgs> = {}>(args?: Subset<T, Team$partsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    results<T extends Team$resultsArgs<ExtArgs> = {}>(args?: Subset<T, Team$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incidents<T extends Team$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, Team$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'Int'>
    readonly name: FieldRef<"Team", 'String'>
    readonly country: FieldRef<"Team", 'String'>
    readonly password: FieldRef<"Team", 'String'>
    readonly director: FieldRef<"Team", 'String'>
    readonly email: FieldRef<"Team", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.members
   */
  export type Team$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Team.cars
   */
  export type Team$carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Team.engines
   */
  export type Team$enginesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engine
     */
    select?: EngineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engine
     */
    omit?: EngineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineInclude<ExtArgs> | null
    where?: EngineWhereInput
    orderBy?: EngineOrderByWithRelationInput | EngineOrderByWithRelationInput[]
    cursor?: EngineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EngineScalarFieldEnum | EngineScalarFieldEnum[]
  }

  /**
   * Team.parts
   */
  export type Team$partsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    where?: PartWhereInput
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    cursor?: PartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Team.results
   */
  export type Team$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    cursor?: ResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Team.incidents
   */
  export type Team$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CarScalarFieldEnum: {
    id: 'id',
    chassisNum: 'chassisNum',
    model: 'model',
    teamId: 'teamId',
    pilotId: 'pilotId',
    createdAt: 'createdAt'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const EngineScalarFieldEnum: {
    id: 'id',
    code: 'code',
    state: 'state',
    teamId: 'teamId',
    createdAt: 'createdAt'
  };

  export type EngineScalarFieldEnum = (typeof EngineScalarFieldEnum)[keyof typeof EngineScalarFieldEnum]


  export const GrandPrixScalarFieldEnum: {
    id: 'id',
    name: 'name',
    circuit: 'circuit',
    country: 'country',
    date: 'date'
  };

  export type GrandPrixScalarFieldEnum = (typeof GrandPrixScalarFieldEnum)[keyof typeof GrandPrixScalarFieldEnum]


  export const IncidentScalarFieldEnum: {
    id: 'id',
    type: 'type',
    description: 'description',
    date: 'date',
    carId: 'carId',
    engineId: 'engineId',
    partId: 'partId',
    pilotId: 'pilotId',
    teamId: 'teamId',
    grandPrixId: 'grandPrixId',
    resolved: 'resolved'
  };

  export type IncidentScalarFieldEnum = (typeof IncidentScalarFieldEnum)[keyof typeof IncidentScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    role: 'role',
    teamId: 'teamId',
    nationality: 'nationality',
    age: 'age',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const PartScalarFieldEnum: {
    id: 'id',
    reference: 'reference',
    type: 'type',
    quantity: 'quantity',
    teamId: 'teamId'
  };

  export type PartScalarFieldEnum = (typeof PartScalarFieldEnum)[keyof typeof PartScalarFieldEnum]


  export const ResultScalarFieldEnum: {
    id: 'id',
    position: 'position',
    points: 'points',
    pilotId: 'pilotId',
    carId: 'carId',
    grandPrixId: 'grandPrixId',
    teamId: 'teamId',
    createdAt: 'createdAt'
  };

  export type ResultScalarFieldEnum = (typeof ResultScalarFieldEnum)[keyof typeof ResultScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    country: 'country',
    password: 'password',
    director: 'director',
    email: 'email'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const CarOrderByRelevanceFieldEnum: {
    chassisNum: 'chassisNum',
    model: 'model'
  };

  export type CarOrderByRelevanceFieldEnum = (typeof CarOrderByRelevanceFieldEnum)[keyof typeof CarOrderByRelevanceFieldEnum]


  export const EngineOrderByRelevanceFieldEnum: {
    code: 'code',
    state: 'state'
  };

  export type EngineOrderByRelevanceFieldEnum = (typeof EngineOrderByRelevanceFieldEnum)[keyof typeof EngineOrderByRelevanceFieldEnum]


  export const GrandPrixOrderByRelevanceFieldEnum: {
    name: 'name',
    circuit: 'circuit',
    country: 'country'
  };

  export type GrandPrixOrderByRelevanceFieldEnum = (typeof GrandPrixOrderByRelevanceFieldEnum)[keyof typeof GrandPrixOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const IncidentOrderByRelevanceFieldEnum: {
    type: 'type',
    description: 'description'
  };

  export type IncidentOrderByRelevanceFieldEnum = (typeof IncidentOrderByRelevanceFieldEnum)[keyof typeof IncidentOrderByRelevanceFieldEnum]


  export const MemberOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    nationality: 'nationality',
    avatarUrl: 'avatarUrl'
  };

  export type MemberOrderByRelevanceFieldEnum = (typeof MemberOrderByRelevanceFieldEnum)[keyof typeof MemberOrderByRelevanceFieldEnum]


  export const PartOrderByRelevanceFieldEnum: {
    reference: 'reference',
    type: 'type'
  };

  export type PartOrderByRelevanceFieldEnum = (typeof PartOrderByRelevanceFieldEnum)[keyof typeof PartOrderByRelevanceFieldEnum]


  export const TeamOrderByRelevanceFieldEnum: {
    name: 'name',
    country: 'country',
    password: 'password',
    director: 'director',
    email: 'email'
  };

  export type TeamOrderByRelevanceFieldEnum = (typeof TeamOrderByRelevanceFieldEnum)[keyof typeof TeamOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    id?: IntFilter<"Car"> | number
    chassisNum?: StringFilter<"Car"> | string
    model?: StringFilter<"Car"> | string
    teamId?: IntFilter<"Car"> | number
    pilotId?: IntFilter<"Car"> | number
    createdAt?: DateTimeFilter<"Car"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    pilot?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    results?: ResultListRelationFilter
    incidents?: IncidentListRelationFilter
  }

  export type CarOrderByWithRelationInput = {
    id?: SortOrder
    chassisNum?: SortOrder
    model?: SortOrder
    teamId?: SortOrder
    pilotId?: SortOrder
    createdAt?: SortOrder
    team?: TeamOrderByWithRelationInput
    pilot?: MemberOrderByWithRelationInput
    results?: ResultOrderByRelationAggregateInput
    incidents?: IncidentOrderByRelationAggregateInput
    _relevance?: CarOrderByRelevanceInput
  }

  export type CarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    chassisNum?: StringFilter<"Car"> | string
    model?: StringFilter<"Car"> | string
    teamId?: IntFilter<"Car"> | number
    pilotId?: IntFilter<"Car"> | number
    createdAt?: DateTimeFilter<"Car"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    pilot?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    results?: ResultListRelationFilter
    incidents?: IncidentListRelationFilter
  }, "id">

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder
    chassisNum?: SortOrder
    model?: SortOrder
    teamId?: SortOrder
    pilotId?: SortOrder
    createdAt?: SortOrder
    _count?: CarCountOrderByAggregateInput
    _avg?: CarAvgOrderByAggregateInput
    _max?: CarMaxOrderByAggregateInput
    _min?: CarMinOrderByAggregateInput
    _sum?: CarSumOrderByAggregateInput
  }

  export type CarScalarWhereWithAggregatesInput = {
    AND?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    OR?: CarScalarWhereWithAggregatesInput[]
    NOT?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Car"> | number
    chassisNum?: StringWithAggregatesFilter<"Car"> | string
    model?: StringWithAggregatesFilter<"Car"> | string
    teamId?: IntWithAggregatesFilter<"Car"> | number
    pilotId?: IntWithAggregatesFilter<"Car"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
  }

  export type EngineWhereInput = {
    AND?: EngineWhereInput | EngineWhereInput[]
    OR?: EngineWhereInput[]
    NOT?: EngineWhereInput | EngineWhereInput[]
    id?: IntFilter<"Engine"> | number
    code?: StringFilter<"Engine"> | string
    state?: StringFilter<"Engine"> | string
    teamId?: IntFilter<"Engine"> | number
    createdAt?: DateTimeFilter<"Engine"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    incidents?: IncidentListRelationFilter
  }

  export type EngineOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    state?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    team?: TeamOrderByWithRelationInput
    incidents?: IncidentOrderByRelationAggregateInput
    _relevance?: EngineOrderByRelevanceInput
  }

  export type EngineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EngineWhereInput | EngineWhereInput[]
    OR?: EngineWhereInput[]
    NOT?: EngineWhereInput | EngineWhereInput[]
    code?: StringFilter<"Engine"> | string
    state?: StringFilter<"Engine"> | string
    teamId?: IntFilter<"Engine"> | number
    createdAt?: DateTimeFilter<"Engine"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    incidents?: IncidentListRelationFilter
  }, "id">

  export type EngineOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    state?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    _count?: EngineCountOrderByAggregateInput
    _avg?: EngineAvgOrderByAggregateInput
    _max?: EngineMaxOrderByAggregateInput
    _min?: EngineMinOrderByAggregateInput
    _sum?: EngineSumOrderByAggregateInput
  }

  export type EngineScalarWhereWithAggregatesInput = {
    AND?: EngineScalarWhereWithAggregatesInput | EngineScalarWhereWithAggregatesInput[]
    OR?: EngineScalarWhereWithAggregatesInput[]
    NOT?: EngineScalarWhereWithAggregatesInput | EngineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Engine"> | number
    code?: StringWithAggregatesFilter<"Engine"> | string
    state?: StringWithAggregatesFilter<"Engine"> | string
    teamId?: IntWithAggregatesFilter<"Engine"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Engine"> | Date | string
  }

  export type GrandPrixWhereInput = {
    AND?: GrandPrixWhereInput | GrandPrixWhereInput[]
    OR?: GrandPrixWhereInput[]
    NOT?: GrandPrixWhereInput | GrandPrixWhereInput[]
    id?: IntFilter<"GrandPrix"> | number
    name?: StringFilter<"GrandPrix"> | string
    circuit?: StringFilter<"GrandPrix"> | string
    country?: StringFilter<"GrandPrix"> | string
    date?: DateTimeFilter<"GrandPrix"> | Date | string
    results?: ResultListRelationFilter
    incidents?: IncidentListRelationFilter
  }

  export type GrandPrixOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    circuit?: SortOrder
    country?: SortOrder
    date?: SortOrder
    results?: ResultOrderByRelationAggregateInput
    incidents?: IncidentOrderByRelationAggregateInput
    _relevance?: GrandPrixOrderByRelevanceInput
  }

  export type GrandPrixWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GrandPrixWhereInput | GrandPrixWhereInput[]
    OR?: GrandPrixWhereInput[]
    NOT?: GrandPrixWhereInput | GrandPrixWhereInput[]
    name?: StringFilter<"GrandPrix"> | string
    circuit?: StringFilter<"GrandPrix"> | string
    country?: StringFilter<"GrandPrix"> | string
    date?: DateTimeFilter<"GrandPrix"> | Date | string
    results?: ResultListRelationFilter
    incidents?: IncidentListRelationFilter
  }, "id">

  export type GrandPrixOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    circuit?: SortOrder
    country?: SortOrder
    date?: SortOrder
    _count?: GrandPrixCountOrderByAggregateInput
    _avg?: GrandPrixAvgOrderByAggregateInput
    _max?: GrandPrixMaxOrderByAggregateInput
    _min?: GrandPrixMinOrderByAggregateInput
    _sum?: GrandPrixSumOrderByAggregateInput
  }

  export type GrandPrixScalarWhereWithAggregatesInput = {
    AND?: GrandPrixScalarWhereWithAggregatesInput | GrandPrixScalarWhereWithAggregatesInput[]
    OR?: GrandPrixScalarWhereWithAggregatesInput[]
    NOT?: GrandPrixScalarWhereWithAggregatesInput | GrandPrixScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GrandPrix"> | number
    name?: StringWithAggregatesFilter<"GrandPrix"> | string
    circuit?: StringWithAggregatesFilter<"GrandPrix"> | string
    country?: StringWithAggregatesFilter<"GrandPrix"> | string
    date?: DateTimeWithAggregatesFilter<"GrandPrix"> | Date | string
  }

  export type IncidentWhereInput = {
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    id?: IntFilter<"Incident"> | number
    type?: StringFilter<"Incident"> | string
    description?: StringNullableFilter<"Incident"> | string | null
    date?: DateTimeFilter<"Incident"> | Date | string
    carId?: IntNullableFilter<"Incident"> | number | null
    engineId?: IntNullableFilter<"Incident"> | number | null
    partId?: IntNullableFilter<"Incident"> | number | null
    pilotId?: IntNullableFilter<"Incident"> | number | null
    teamId?: IntFilter<"Incident"> | number
    grandPrixId?: IntNullableFilter<"Incident"> | number | null
    resolved?: BoolFilter<"Incident"> | boolean
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    car?: XOR<CarNullableScalarRelationFilter, CarWhereInput> | null
    engine?: XOR<EngineNullableScalarRelationFilter, EngineWhereInput> | null
    part?: XOR<PartNullableScalarRelationFilter, PartWhereInput> | null
    pilot?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    grandPrix?: XOR<GrandPrixNullableScalarRelationFilter, GrandPrixWhereInput> | null
  }

  export type IncidentOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    carId?: SortOrderInput | SortOrder
    engineId?: SortOrderInput | SortOrder
    partId?: SortOrderInput | SortOrder
    pilotId?: SortOrderInput | SortOrder
    teamId?: SortOrder
    grandPrixId?: SortOrderInput | SortOrder
    resolved?: SortOrder
    team?: TeamOrderByWithRelationInput
    car?: CarOrderByWithRelationInput
    engine?: EngineOrderByWithRelationInput
    part?: PartOrderByWithRelationInput
    pilot?: MemberOrderByWithRelationInput
    grandPrix?: GrandPrixOrderByWithRelationInput
    _relevance?: IncidentOrderByRelevanceInput
  }

  export type IncidentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    type?: StringFilter<"Incident"> | string
    description?: StringNullableFilter<"Incident"> | string | null
    date?: DateTimeFilter<"Incident"> | Date | string
    carId?: IntNullableFilter<"Incident"> | number | null
    engineId?: IntNullableFilter<"Incident"> | number | null
    partId?: IntNullableFilter<"Incident"> | number | null
    pilotId?: IntNullableFilter<"Incident"> | number | null
    teamId?: IntFilter<"Incident"> | number
    grandPrixId?: IntNullableFilter<"Incident"> | number | null
    resolved?: BoolFilter<"Incident"> | boolean
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    car?: XOR<CarNullableScalarRelationFilter, CarWhereInput> | null
    engine?: XOR<EngineNullableScalarRelationFilter, EngineWhereInput> | null
    part?: XOR<PartNullableScalarRelationFilter, PartWhereInput> | null
    pilot?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    grandPrix?: XOR<GrandPrixNullableScalarRelationFilter, GrandPrixWhereInput> | null
  }, "id">

  export type IncidentOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    carId?: SortOrderInput | SortOrder
    engineId?: SortOrderInput | SortOrder
    partId?: SortOrderInput | SortOrder
    pilotId?: SortOrderInput | SortOrder
    teamId?: SortOrder
    grandPrixId?: SortOrderInput | SortOrder
    resolved?: SortOrder
    _count?: IncidentCountOrderByAggregateInput
    _avg?: IncidentAvgOrderByAggregateInput
    _max?: IncidentMaxOrderByAggregateInput
    _min?: IncidentMinOrderByAggregateInput
    _sum?: IncidentSumOrderByAggregateInput
  }

  export type IncidentScalarWhereWithAggregatesInput = {
    AND?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    OR?: IncidentScalarWhereWithAggregatesInput[]
    NOT?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Incident"> | number
    type?: StringWithAggregatesFilter<"Incident"> | string
    description?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    date?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
    carId?: IntNullableWithAggregatesFilter<"Incident"> | number | null
    engineId?: IntNullableWithAggregatesFilter<"Incident"> | number | null
    partId?: IntNullableWithAggregatesFilter<"Incident"> | number | null
    pilotId?: IntNullableWithAggregatesFilter<"Incident"> | number | null
    teamId?: IntWithAggregatesFilter<"Incident"> | number
    grandPrixId?: IntNullableWithAggregatesFilter<"Incident"> | number | null
    resolved?: BoolWithAggregatesFilter<"Incident"> | boolean
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: IntFilter<"Member"> | number
    firstName?: StringFilter<"Member"> | string
    lastName?: StringFilter<"Member"> | string
    email?: StringFilter<"Member"> | string
    password?: StringFilter<"Member"> | string
    role?: EnumRoleFilter<"Member"> | $Enums.Role
    teamId?: IntFilter<"Member"> | number
    nationality?: StringNullableFilter<"Member"> | string | null
    age?: IntNullableFilter<"Member"> | number | null
    avatarUrl?: StringNullableFilter<"Member"> | string | null
    createdAt?: DateTimeFilter<"Member"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    incidents?: IncidentListRelationFilter
    results?: ResultListRelationFilter
    cars?: CarListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    nationality?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    team?: TeamOrderByWithRelationInput
    incidents?: IncidentOrderByRelationAggregateInput
    results?: ResultOrderByRelationAggregateInput
    cars?: CarOrderByRelationAggregateInput
    _relevance?: MemberOrderByRelevanceInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    firstName?: StringFilter<"Member"> | string
    lastName?: StringFilter<"Member"> | string
    password?: StringFilter<"Member"> | string
    role?: EnumRoleFilter<"Member"> | $Enums.Role
    teamId?: IntFilter<"Member"> | number
    nationality?: StringNullableFilter<"Member"> | string | null
    age?: IntNullableFilter<"Member"> | number | null
    avatarUrl?: StringNullableFilter<"Member"> | string | null
    createdAt?: DateTimeFilter<"Member"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    incidents?: IncidentListRelationFilter
    results?: ResultListRelationFilter
    cars?: CarListRelationFilter
  }, "id" | "email">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    nationality?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _avg?: MemberAvgOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
    _sum?: MemberSumOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Member"> | number
    firstName?: StringWithAggregatesFilter<"Member"> | string
    lastName?: StringWithAggregatesFilter<"Member"> | string
    email?: StringWithAggregatesFilter<"Member"> | string
    password?: StringWithAggregatesFilter<"Member"> | string
    role?: EnumRoleWithAggregatesFilter<"Member"> | $Enums.Role
    teamId?: IntWithAggregatesFilter<"Member"> | number
    nationality?: StringNullableWithAggregatesFilter<"Member"> | string | null
    age?: IntNullableWithAggregatesFilter<"Member"> | number | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Member"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
  }

  export type PartWhereInput = {
    AND?: PartWhereInput | PartWhereInput[]
    OR?: PartWhereInput[]
    NOT?: PartWhereInput | PartWhereInput[]
    id?: IntFilter<"Part"> | number
    reference?: StringFilter<"Part"> | string
    type?: StringFilter<"Part"> | string
    quantity?: IntFilter<"Part"> | number
    teamId?: IntFilter<"Part"> | number
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    incidents?: IncidentListRelationFilter
  }

  export type PartOrderByWithRelationInput = {
    id?: SortOrder
    reference?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    teamId?: SortOrder
    team?: TeamOrderByWithRelationInput
    incidents?: IncidentOrderByRelationAggregateInput
    _relevance?: PartOrderByRelevanceInput
  }

  export type PartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PartWhereInput | PartWhereInput[]
    OR?: PartWhereInput[]
    NOT?: PartWhereInput | PartWhereInput[]
    reference?: StringFilter<"Part"> | string
    type?: StringFilter<"Part"> | string
    quantity?: IntFilter<"Part"> | number
    teamId?: IntFilter<"Part"> | number
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    incidents?: IncidentListRelationFilter
  }, "id">

  export type PartOrderByWithAggregationInput = {
    id?: SortOrder
    reference?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    teamId?: SortOrder
    _count?: PartCountOrderByAggregateInput
    _avg?: PartAvgOrderByAggregateInput
    _max?: PartMaxOrderByAggregateInput
    _min?: PartMinOrderByAggregateInput
    _sum?: PartSumOrderByAggregateInput
  }

  export type PartScalarWhereWithAggregatesInput = {
    AND?: PartScalarWhereWithAggregatesInput | PartScalarWhereWithAggregatesInput[]
    OR?: PartScalarWhereWithAggregatesInput[]
    NOT?: PartScalarWhereWithAggregatesInput | PartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Part"> | number
    reference?: StringWithAggregatesFilter<"Part"> | string
    type?: StringWithAggregatesFilter<"Part"> | string
    quantity?: IntWithAggregatesFilter<"Part"> | number
    teamId?: IntWithAggregatesFilter<"Part"> | number
  }

  export type ResultWhereInput = {
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    id?: IntFilter<"Result"> | number
    position?: IntNullableFilter<"Result"> | number | null
    points?: IntNullableFilter<"Result"> | number | null
    pilotId?: IntFilter<"Result"> | number
    carId?: IntFilter<"Result"> | number
    grandPrixId?: IntFilter<"Result"> | number
    teamId?: IntFilter<"Result"> | number
    createdAt?: DateTimeFilter<"Result"> | Date | string
    pilot?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    grandPrix?: XOR<GrandPrixScalarRelationFilter, GrandPrixWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type ResultOrderByWithRelationInput = {
    id?: SortOrder
    position?: SortOrderInput | SortOrder
    points?: SortOrderInput | SortOrder
    pilotId?: SortOrder
    carId?: SortOrder
    grandPrixId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    pilot?: MemberOrderByWithRelationInput
    car?: CarOrderByWithRelationInput
    grandPrix?: GrandPrixOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
  }

  export type ResultWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    position?: IntNullableFilter<"Result"> | number | null
    points?: IntNullableFilter<"Result"> | number | null
    pilotId?: IntFilter<"Result"> | number
    carId?: IntFilter<"Result"> | number
    grandPrixId?: IntFilter<"Result"> | number
    teamId?: IntFilter<"Result"> | number
    createdAt?: DateTimeFilter<"Result"> | Date | string
    pilot?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    grandPrix?: XOR<GrandPrixScalarRelationFilter, GrandPrixWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id">

  export type ResultOrderByWithAggregationInput = {
    id?: SortOrder
    position?: SortOrderInput | SortOrder
    points?: SortOrderInput | SortOrder
    pilotId?: SortOrder
    carId?: SortOrder
    grandPrixId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    _count?: ResultCountOrderByAggregateInput
    _avg?: ResultAvgOrderByAggregateInput
    _max?: ResultMaxOrderByAggregateInput
    _min?: ResultMinOrderByAggregateInput
    _sum?: ResultSumOrderByAggregateInput
  }

  export type ResultScalarWhereWithAggregatesInput = {
    AND?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    OR?: ResultScalarWhereWithAggregatesInput[]
    NOT?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Result"> | number
    position?: IntNullableWithAggregatesFilter<"Result"> | number | null
    points?: IntNullableWithAggregatesFilter<"Result"> | number | null
    pilotId?: IntWithAggregatesFilter<"Result"> | number
    carId?: IntWithAggregatesFilter<"Result"> | number
    grandPrixId?: IntWithAggregatesFilter<"Result"> | number
    teamId?: IntWithAggregatesFilter<"Result"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Result"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: IntFilter<"Team"> | number
    name?: StringFilter<"Team"> | string
    country?: StringFilter<"Team"> | string
    password?: StringFilter<"Team"> | string
    director?: StringNullableFilter<"Team"> | string | null
    email?: StringFilter<"Team"> | string
    members?: MemberListRelationFilter
    cars?: CarListRelationFilter
    engines?: EngineListRelationFilter
    parts?: PartListRelationFilter
    results?: ResultListRelationFilter
    incidents?: IncidentListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    password?: SortOrder
    director?: SortOrderInput | SortOrder
    email?: SortOrder
    members?: MemberOrderByRelationAggregateInput
    cars?: CarOrderByRelationAggregateInput
    engines?: EngineOrderByRelationAggregateInput
    parts?: PartOrderByRelationAggregateInput
    results?: ResultOrderByRelationAggregateInput
    incidents?: IncidentOrderByRelationAggregateInput
    _relevance?: TeamOrderByRelevanceInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    country?: StringFilter<"Team"> | string
    password?: StringFilter<"Team"> | string
    director?: StringNullableFilter<"Team"> | string | null
    members?: MemberListRelationFilter
    cars?: CarListRelationFilter
    engines?: EngineListRelationFilter
    parts?: PartListRelationFilter
    results?: ResultListRelationFilter
    incidents?: IncidentListRelationFilter
  }, "id" | "email">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    password?: SortOrder
    director?: SortOrderInput | SortOrder
    email?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Team"> | number
    name?: StringWithAggregatesFilter<"Team"> | string
    country?: StringWithAggregatesFilter<"Team"> | string
    password?: StringWithAggregatesFilter<"Team"> | string
    director?: StringNullableWithAggregatesFilter<"Team"> | string | null
    email?: StringWithAggregatesFilter<"Team"> | string
  }

  export type CarCreateInput = {
    chassisNum: string
    model: string
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutCarsInput
    pilot: MemberCreateNestedOneWithoutCarsInput
    results?: ResultCreateNestedManyWithoutCarInput
    incidents?: IncidentCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateInput = {
    id?: number
    chassisNum: string
    model: string
    teamId: number
    pilotId: number
    createdAt?: Date | string
    results?: ResultUncheckedCreateNestedManyWithoutCarInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarUpdateInput = {
    chassisNum?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutCarsNestedInput
    pilot?: MemberUpdateOneRequiredWithoutCarsNestedInput
    results?: ResultUpdateManyWithoutCarNestedInput
    incidents?: IncidentUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chassisNum?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    teamId?: IntFieldUpdateOperationsInput | number
    pilotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ResultUncheckedUpdateManyWithoutCarNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateManyInput = {
    id?: number
    chassisNum: string
    model: string
    teamId: number
    pilotId: number
    createdAt?: Date | string
  }

  export type CarUpdateManyMutationInput = {
    chassisNum?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chassisNum?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    teamId?: IntFieldUpdateOperationsInput | number
    pilotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngineCreateInput = {
    code: string
    state: string
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutEnginesInput
    incidents?: IncidentCreateNestedManyWithoutEngineInput
  }

  export type EngineUncheckedCreateInput = {
    id?: number
    code: string
    state: string
    teamId: number
    createdAt?: Date | string
    incidents?: IncidentUncheckedCreateNestedManyWithoutEngineInput
  }

  export type EngineUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutEnginesNestedInput
    incidents?: IncidentUpdateManyWithoutEngineNestedInput
  }

  export type EngineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    teamId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUncheckedUpdateManyWithoutEngineNestedInput
  }

  export type EngineCreateManyInput = {
    id?: number
    code: string
    state: string
    teamId: number
    createdAt?: Date | string
  }

  export type EngineUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    teamId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GrandPrixCreateInput = {
    name: string
    circuit: string
    country: string
    date: Date | string
    results?: ResultCreateNestedManyWithoutGrandPrixInput
    incidents?: IncidentCreateNestedManyWithoutGrandPrixInput
  }

  export type GrandPrixUncheckedCreateInput = {
    id?: number
    name: string
    circuit: string
    country: string
    date: Date | string
    results?: ResultUncheckedCreateNestedManyWithoutGrandPrixInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutGrandPrixInput
  }

  export type GrandPrixUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    circuit?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ResultUpdateManyWithoutGrandPrixNestedInput
    incidents?: IncidentUpdateManyWithoutGrandPrixNestedInput
  }

  export type GrandPrixUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    circuit?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ResultUncheckedUpdateManyWithoutGrandPrixNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutGrandPrixNestedInput
  }

  export type GrandPrixCreateManyInput = {
    id?: number
    name: string
    circuit: string
    country: string
    date: Date | string
  }

  export type GrandPrixUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    circuit?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GrandPrixUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    circuit?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentCreateInput = {
    type: string
    description?: string | null
    date?: Date | string
    resolved?: boolean
    team: TeamCreateNestedOneWithoutIncidentsInput
    car?: CarCreateNestedOneWithoutIncidentsInput
    engine?: EngineCreateNestedOneWithoutIncidentsInput
    part?: PartCreateNestedOneWithoutIncidentsInput
    pilot?: MemberCreateNestedOneWithoutIncidentsInput
    grandPrix?: GrandPrixCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentUncheckedCreateInput = {
    id?: number
    type: string
    description?: string | null
    date?: Date | string
    carId?: number | null
    engineId?: number | null
    partId?: number | null
    pilotId?: number | null
    teamId: number
    grandPrixId?: number | null
    resolved?: boolean
  }

  export type IncidentUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    team?: TeamUpdateOneRequiredWithoutIncidentsNestedInput
    car?: CarUpdateOneWithoutIncidentsNestedInput
    engine?: EngineUpdateOneWithoutIncidentsNestedInput
    part?: PartUpdateOneWithoutIncidentsNestedInput
    pilot?: MemberUpdateOneWithoutIncidentsNestedInput
    grandPrix?: GrandPrixUpdateOneWithoutIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    engineId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: IntFieldUpdateOperationsInput | number
    grandPrixId?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IncidentCreateManyInput = {
    id?: number
    type: string
    description?: string | null
    date?: Date | string
    carId?: number | null
    engineId?: number | null
    partId?: number | null
    pilotId?: number | null
    teamId: number
    grandPrixId?: number | null
    resolved?: boolean
  }

  export type IncidentUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IncidentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    engineId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: IntFieldUpdateOperationsInput | number
    grandPrixId?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MemberCreateInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    nationality?: string | null
    age?: number | null
    avatarUrl?: string | null
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutMembersInput
    incidents?: IncidentCreateNestedManyWithoutPilotInput
    results?: ResultCreateNestedManyWithoutPilotInput
    cars?: CarCreateNestedManyWithoutPilotInput
  }

  export type MemberUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    teamId: number
    nationality?: string | null
    age?: number | null
    avatarUrl?: string | null
    createdAt?: Date | string
    incidents?: IncidentUncheckedCreateNestedManyWithoutPilotInput
    results?: ResultUncheckedCreateNestedManyWithoutPilotInput
    cars?: CarUncheckedCreateNestedManyWithoutPilotInput
  }

  export type MemberUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
    incidents?: IncidentUpdateManyWithoutPilotNestedInput
    results?: ResultUpdateManyWithoutPilotNestedInput
    cars?: CarUpdateManyWithoutPilotNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    teamId?: IntFieldUpdateOperationsInput | number
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUncheckedUpdateManyWithoutPilotNestedInput
    results?: ResultUncheckedUpdateManyWithoutPilotNestedInput
    cars?: CarUncheckedUpdateManyWithoutPilotNestedInput
  }

  export type MemberCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    teamId: number
    nationality?: string | null
    age?: number | null
    avatarUrl?: string | null
    createdAt?: Date | string
  }

  export type MemberUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    teamId?: IntFieldUpdateOperationsInput | number
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartCreateInput = {
    reference: string
    type: string
    quantity: number
    team: TeamCreateNestedOneWithoutPartsInput
    incidents?: IncidentCreateNestedManyWithoutPartInput
  }

  export type PartUncheckedCreateInput = {
    id?: number
    reference: string
    type: string
    quantity: number
    teamId: number
    incidents?: IncidentUncheckedCreateNestedManyWithoutPartInput
  }

  export type PartUpdateInput = {
    reference?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    team?: TeamUpdateOneRequiredWithoutPartsNestedInput
    incidents?: IncidentUpdateManyWithoutPartNestedInput
  }

  export type PartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    incidents?: IncidentUncheckedUpdateManyWithoutPartNestedInput
  }

  export type PartCreateManyInput = {
    id?: number
    reference: string
    type: string
    quantity: number
    teamId: number
  }

  export type PartUpdateManyMutationInput = {
    reference?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
  }

  export type ResultCreateInput = {
    position?: number | null
    points?: number | null
    createdAt?: Date | string
    pilot: MemberCreateNestedOneWithoutResultsInput
    car: CarCreateNestedOneWithoutResultsInput
    grandPrix: GrandPrixCreateNestedOneWithoutResultsInput
    team: TeamCreateNestedOneWithoutResultsInput
  }

  export type ResultUncheckedCreateInput = {
    id?: number
    position?: number | null
    points?: number | null
    pilotId: number
    carId: number
    grandPrixId: number
    teamId: number
    createdAt?: Date | string
  }

  export type ResultUpdateInput = {
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pilot?: MemberUpdateOneRequiredWithoutResultsNestedInput
    car?: CarUpdateOneRequiredWithoutResultsNestedInput
    grandPrix?: GrandPrixUpdateOneRequiredWithoutResultsNestedInput
    team?: TeamUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResultUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    grandPrixId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultCreateManyInput = {
    id?: number
    position?: number | null
    points?: number | null
    pilotId: number
    carId: number
    grandPrixId: number
    teamId: number
    createdAt?: Date | string
  }

  export type ResultUpdateManyMutationInput = {
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    grandPrixId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    name: string
    country: string
    password: string
    director?: string | null
    email: string
    members?: MemberCreateNestedManyWithoutTeamInput
    cars?: CarCreateNestedManyWithoutTeamInput
    engines?: EngineCreateNestedManyWithoutTeamInput
    parts?: PartCreateNestedManyWithoutTeamInput
    results?: ResultCreateNestedManyWithoutTeamInput
    incidents?: IncidentCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: number
    name: string
    country: string
    password: string
    director?: string | null
    email: string
    members?: MemberUncheckedCreateNestedManyWithoutTeamInput
    cars?: CarUncheckedCreateNestedManyWithoutTeamInput
    engines?: EngineUncheckedCreateNestedManyWithoutTeamInput
    parts?: PartUncheckedCreateNestedManyWithoutTeamInput
    results?: ResultUncheckedCreateNestedManyWithoutTeamInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    members?: MemberUpdateManyWithoutTeamNestedInput
    cars?: CarUpdateManyWithoutTeamNestedInput
    engines?: EngineUpdateManyWithoutTeamNestedInput
    parts?: PartUpdateManyWithoutTeamNestedInput
    results?: ResultUpdateManyWithoutTeamNestedInput
    incidents?: IncidentUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    members?: MemberUncheckedUpdateManyWithoutTeamNestedInput
    cars?: CarUncheckedUpdateManyWithoutTeamNestedInput
    engines?: EngineUncheckedUpdateManyWithoutTeamNestedInput
    parts?: PartUncheckedUpdateManyWithoutTeamNestedInput
    results?: ResultUncheckedUpdateManyWithoutTeamNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: number
    name: string
    country: string
    password: string
    director?: string | null
    email: string
  }

  export type TeamUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type MemberScalarRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type ResultListRelationFilter = {
    every?: ResultWhereInput
    some?: ResultWhereInput
    none?: ResultWhereInput
  }

  export type IncidentListRelationFilter = {
    every?: IncidentWhereInput
    some?: IncidentWhereInput
    none?: IncidentWhereInput
  }

  export type ResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarOrderByRelevanceInput = {
    fields: CarOrderByRelevanceFieldEnum | CarOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder
    chassisNum?: SortOrder
    model?: SortOrder
    teamId?: SortOrder
    pilotId?: SortOrder
    createdAt?: SortOrder
  }

  export type CarAvgOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    pilotId?: SortOrder
  }

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder
    chassisNum?: SortOrder
    model?: SortOrder
    teamId?: SortOrder
    pilotId?: SortOrder
    createdAt?: SortOrder
  }

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder
    chassisNum?: SortOrder
    model?: SortOrder
    teamId?: SortOrder
    pilotId?: SortOrder
    createdAt?: SortOrder
  }

  export type CarSumOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    pilotId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EngineOrderByRelevanceInput = {
    fields: EngineOrderByRelevanceFieldEnum | EngineOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EngineCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    state?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
  }

  export type EngineAvgOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
  }

  export type EngineMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    state?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
  }

  export type EngineMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    state?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
  }

  export type EngineSumOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
  }

  export type GrandPrixOrderByRelevanceInput = {
    fields: GrandPrixOrderByRelevanceFieldEnum | GrandPrixOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GrandPrixCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    circuit?: SortOrder
    country?: SortOrder
    date?: SortOrder
  }

  export type GrandPrixAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GrandPrixMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    circuit?: SortOrder
    country?: SortOrder
    date?: SortOrder
  }

  export type GrandPrixMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    circuit?: SortOrder
    country?: SortOrder
    date?: SortOrder
  }

  export type GrandPrixSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CarNullableScalarRelationFilter = {
    is?: CarWhereInput | null
    isNot?: CarWhereInput | null
  }

  export type EngineNullableScalarRelationFilter = {
    is?: EngineWhereInput | null
    isNot?: EngineWhereInput | null
  }

  export type PartNullableScalarRelationFilter = {
    is?: PartWhereInput | null
    isNot?: PartWhereInput | null
  }

  export type MemberNullableScalarRelationFilter = {
    is?: MemberWhereInput | null
    isNot?: MemberWhereInput | null
  }

  export type GrandPrixNullableScalarRelationFilter = {
    is?: GrandPrixWhereInput | null
    isNot?: GrandPrixWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IncidentOrderByRelevanceInput = {
    fields: IncidentOrderByRelevanceFieldEnum | IncidentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IncidentCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    date?: SortOrder
    carId?: SortOrder
    engineId?: SortOrder
    partId?: SortOrder
    pilotId?: SortOrder
    teamId?: SortOrder
    grandPrixId?: SortOrder
    resolved?: SortOrder
  }

  export type IncidentAvgOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    engineId?: SortOrder
    partId?: SortOrder
    pilotId?: SortOrder
    teamId?: SortOrder
    grandPrixId?: SortOrder
  }

  export type IncidentMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    date?: SortOrder
    carId?: SortOrder
    engineId?: SortOrder
    partId?: SortOrder
    pilotId?: SortOrder
    teamId?: SortOrder
    grandPrixId?: SortOrder
    resolved?: SortOrder
  }

  export type IncidentMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    date?: SortOrder
    carId?: SortOrder
    engineId?: SortOrder
    partId?: SortOrder
    pilotId?: SortOrder
    teamId?: SortOrder
    grandPrixId?: SortOrder
    resolved?: SortOrder
  }

  export type IncidentSumOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    engineId?: SortOrder
    partId?: SortOrder
    pilotId?: SortOrder
    teamId?: SortOrder
    grandPrixId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type CarListRelationFilter = {
    every?: CarWhereInput
    some?: CarWhereInput
    none?: CarWhereInput
  }

  export type CarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberOrderByRelevanceInput = {
    fields: MemberOrderByRelevanceFieldEnum | MemberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    nationality?: SortOrder
    age?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type MemberAvgOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    age?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    nationality?: SortOrder
    age?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    nationality?: SortOrder
    age?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type MemberSumOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    age?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type PartOrderByRelevanceInput = {
    fields: PartOrderByRelevanceFieldEnum | PartOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PartCountOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    teamId?: SortOrder
  }

  export type PartAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    teamId?: SortOrder
  }

  export type PartMaxOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    teamId?: SortOrder
  }

  export type PartMinOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    teamId?: SortOrder
  }

  export type PartSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    teamId?: SortOrder
  }

  export type CarScalarRelationFilter = {
    is?: CarWhereInput
    isNot?: CarWhereInput
  }

  export type GrandPrixScalarRelationFilter = {
    is?: GrandPrixWhereInput
    isNot?: GrandPrixWhereInput
  }

  export type ResultCountOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    points?: SortOrder
    pilotId?: SortOrder
    carId?: SortOrder
    grandPrixId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
  }

  export type ResultAvgOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    points?: SortOrder
    pilotId?: SortOrder
    carId?: SortOrder
    grandPrixId?: SortOrder
    teamId?: SortOrder
  }

  export type ResultMaxOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    points?: SortOrder
    pilotId?: SortOrder
    carId?: SortOrder
    grandPrixId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
  }

  export type ResultMinOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    points?: SortOrder
    pilotId?: SortOrder
    carId?: SortOrder
    grandPrixId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
  }

  export type ResultSumOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    points?: SortOrder
    pilotId?: SortOrder
    carId?: SortOrder
    grandPrixId?: SortOrder
    teamId?: SortOrder
  }

  export type MemberListRelationFilter = {
    every?: MemberWhereInput
    some?: MemberWhereInput
    none?: MemberWhereInput
  }

  export type EngineListRelationFilter = {
    every?: EngineWhereInput
    some?: EngineWhereInput
    none?: EngineWhereInput
  }

  export type PartListRelationFilter = {
    every?: PartWhereInput
    some?: PartWhereInput
    none?: PartWhereInput
  }

  export type MemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EngineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamOrderByRelevanceInput = {
    fields: TeamOrderByRelevanceFieldEnum | TeamOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    password?: SortOrder
    director?: SortOrder
    email?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    password?: SortOrder
    director?: SortOrder
    email?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    password?: SortOrder
    director?: SortOrder
    email?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamCreateNestedOneWithoutCarsInput = {
    create?: XOR<TeamCreateWithoutCarsInput, TeamUncheckedCreateWithoutCarsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutCarsInput
    connect?: TeamWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutCarsInput = {
    create?: XOR<MemberCreateWithoutCarsInput, MemberUncheckedCreateWithoutCarsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutCarsInput
    connect?: MemberWhereUniqueInput
  }

  export type ResultCreateNestedManyWithoutCarInput = {
    create?: XOR<ResultCreateWithoutCarInput, ResultUncheckedCreateWithoutCarInput> | ResultCreateWithoutCarInput[] | ResultUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutCarInput | ResultCreateOrConnectWithoutCarInput[]
    createMany?: ResultCreateManyCarInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type IncidentCreateNestedManyWithoutCarInput = {
    create?: XOR<IncidentCreateWithoutCarInput, IncidentUncheckedCreateWithoutCarInput> | IncidentCreateWithoutCarInput[] | IncidentUncheckedCreateWithoutCarInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutCarInput | IncidentCreateOrConnectWithoutCarInput[]
    createMany?: IncidentCreateManyCarInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type ResultUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<ResultCreateWithoutCarInput, ResultUncheckedCreateWithoutCarInput> | ResultCreateWithoutCarInput[] | ResultUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutCarInput | ResultCreateOrConnectWithoutCarInput[]
    createMany?: ResultCreateManyCarInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<IncidentCreateWithoutCarInput, IncidentUncheckedCreateWithoutCarInput> | IncidentCreateWithoutCarInput[] | IncidentUncheckedCreateWithoutCarInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutCarInput | IncidentCreateOrConnectWithoutCarInput[]
    createMany?: IncidentCreateManyCarInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TeamUpdateOneRequiredWithoutCarsNestedInput = {
    create?: XOR<TeamCreateWithoutCarsInput, TeamUncheckedCreateWithoutCarsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutCarsInput
    upsert?: TeamUpsertWithoutCarsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutCarsInput, TeamUpdateWithoutCarsInput>, TeamUncheckedUpdateWithoutCarsInput>
  }

  export type MemberUpdateOneRequiredWithoutCarsNestedInput = {
    create?: XOR<MemberCreateWithoutCarsInput, MemberUncheckedCreateWithoutCarsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutCarsInput
    upsert?: MemberUpsertWithoutCarsInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutCarsInput, MemberUpdateWithoutCarsInput>, MemberUncheckedUpdateWithoutCarsInput>
  }

  export type ResultUpdateManyWithoutCarNestedInput = {
    create?: XOR<ResultCreateWithoutCarInput, ResultUncheckedCreateWithoutCarInput> | ResultCreateWithoutCarInput[] | ResultUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutCarInput | ResultCreateOrConnectWithoutCarInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutCarInput | ResultUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: ResultCreateManyCarInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutCarInput | ResultUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutCarInput | ResultUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type IncidentUpdateManyWithoutCarNestedInput = {
    create?: XOR<IncidentCreateWithoutCarInput, IncidentUncheckedCreateWithoutCarInput> | IncidentCreateWithoutCarInput[] | IncidentUncheckedCreateWithoutCarInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutCarInput | IncidentCreateOrConnectWithoutCarInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutCarInput | IncidentUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: IncidentCreateManyCarInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutCarInput | IncidentUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutCarInput | IncidentUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ResultUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<ResultCreateWithoutCarInput, ResultUncheckedCreateWithoutCarInput> | ResultCreateWithoutCarInput[] | ResultUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutCarInput | ResultCreateOrConnectWithoutCarInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutCarInput | ResultUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: ResultCreateManyCarInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutCarInput | ResultUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutCarInput | ResultUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<IncidentCreateWithoutCarInput, IncidentUncheckedCreateWithoutCarInput> | IncidentCreateWithoutCarInput[] | IncidentUncheckedCreateWithoutCarInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutCarInput | IncidentCreateOrConnectWithoutCarInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutCarInput | IncidentUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: IncidentCreateManyCarInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutCarInput | IncidentUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutCarInput | IncidentUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutEnginesInput = {
    create?: XOR<TeamCreateWithoutEnginesInput, TeamUncheckedCreateWithoutEnginesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutEnginesInput
    connect?: TeamWhereUniqueInput
  }

  export type IncidentCreateNestedManyWithoutEngineInput = {
    create?: XOR<IncidentCreateWithoutEngineInput, IncidentUncheckedCreateWithoutEngineInput> | IncidentCreateWithoutEngineInput[] | IncidentUncheckedCreateWithoutEngineInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutEngineInput | IncidentCreateOrConnectWithoutEngineInput[]
    createMany?: IncidentCreateManyEngineInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutEngineInput = {
    create?: XOR<IncidentCreateWithoutEngineInput, IncidentUncheckedCreateWithoutEngineInput> | IncidentCreateWithoutEngineInput[] | IncidentUncheckedCreateWithoutEngineInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutEngineInput | IncidentCreateOrConnectWithoutEngineInput[]
    createMany?: IncidentCreateManyEngineInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type TeamUpdateOneRequiredWithoutEnginesNestedInput = {
    create?: XOR<TeamCreateWithoutEnginesInput, TeamUncheckedCreateWithoutEnginesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutEnginesInput
    upsert?: TeamUpsertWithoutEnginesInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutEnginesInput, TeamUpdateWithoutEnginesInput>, TeamUncheckedUpdateWithoutEnginesInput>
  }

  export type IncidentUpdateManyWithoutEngineNestedInput = {
    create?: XOR<IncidentCreateWithoutEngineInput, IncidentUncheckedCreateWithoutEngineInput> | IncidentCreateWithoutEngineInput[] | IncidentUncheckedCreateWithoutEngineInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutEngineInput | IncidentCreateOrConnectWithoutEngineInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutEngineInput | IncidentUpsertWithWhereUniqueWithoutEngineInput[]
    createMany?: IncidentCreateManyEngineInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutEngineInput | IncidentUpdateWithWhereUniqueWithoutEngineInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutEngineInput | IncidentUpdateManyWithWhereWithoutEngineInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutEngineNestedInput = {
    create?: XOR<IncidentCreateWithoutEngineInput, IncidentUncheckedCreateWithoutEngineInput> | IncidentCreateWithoutEngineInput[] | IncidentUncheckedCreateWithoutEngineInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutEngineInput | IncidentCreateOrConnectWithoutEngineInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutEngineInput | IncidentUpsertWithWhereUniqueWithoutEngineInput[]
    createMany?: IncidentCreateManyEngineInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutEngineInput | IncidentUpdateWithWhereUniqueWithoutEngineInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutEngineInput | IncidentUpdateManyWithWhereWithoutEngineInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type ResultCreateNestedManyWithoutGrandPrixInput = {
    create?: XOR<ResultCreateWithoutGrandPrixInput, ResultUncheckedCreateWithoutGrandPrixInput> | ResultCreateWithoutGrandPrixInput[] | ResultUncheckedCreateWithoutGrandPrixInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutGrandPrixInput | ResultCreateOrConnectWithoutGrandPrixInput[]
    createMany?: ResultCreateManyGrandPrixInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type IncidentCreateNestedManyWithoutGrandPrixInput = {
    create?: XOR<IncidentCreateWithoutGrandPrixInput, IncidentUncheckedCreateWithoutGrandPrixInput> | IncidentCreateWithoutGrandPrixInput[] | IncidentUncheckedCreateWithoutGrandPrixInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutGrandPrixInput | IncidentCreateOrConnectWithoutGrandPrixInput[]
    createMany?: IncidentCreateManyGrandPrixInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type ResultUncheckedCreateNestedManyWithoutGrandPrixInput = {
    create?: XOR<ResultCreateWithoutGrandPrixInput, ResultUncheckedCreateWithoutGrandPrixInput> | ResultCreateWithoutGrandPrixInput[] | ResultUncheckedCreateWithoutGrandPrixInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutGrandPrixInput | ResultCreateOrConnectWithoutGrandPrixInput[]
    createMany?: ResultCreateManyGrandPrixInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutGrandPrixInput = {
    create?: XOR<IncidentCreateWithoutGrandPrixInput, IncidentUncheckedCreateWithoutGrandPrixInput> | IncidentCreateWithoutGrandPrixInput[] | IncidentUncheckedCreateWithoutGrandPrixInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutGrandPrixInput | IncidentCreateOrConnectWithoutGrandPrixInput[]
    createMany?: IncidentCreateManyGrandPrixInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type ResultUpdateManyWithoutGrandPrixNestedInput = {
    create?: XOR<ResultCreateWithoutGrandPrixInput, ResultUncheckedCreateWithoutGrandPrixInput> | ResultCreateWithoutGrandPrixInput[] | ResultUncheckedCreateWithoutGrandPrixInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutGrandPrixInput | ResultCreateOrConnectWithoutGrandPrixInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutGrandPrixInput | ResultUpsertWithWhereUniqueWithoutGrandPrixInput[]
    createMany?: ResultCreateManyGrandPrixInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutGrandPrixInput | ResultUpdateWithWhereUniqueWithoutGrandPrixInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutGrandPrixInput | ResultUpdateManyWithWhereWithoutGrandPrixInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type IncidentUpdateManyWithoutGrandPrixNestedInput = {
    create?: XOR<IncidentCreateWithoutGrandPrixInput, IncidentUncheckedCreateWithoutGrandPrixInput> | IncidentCreateWithoutGrandPrixInput[] | IncidentUncheckedCreateWithoutGrandPrixInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutGrandPrixInput | IncidentCreateOrConnectWithoutGrandPrixInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutGrandPrixInput | IncidentUpsertWithWhereUniqueWithoutGrandPrixInput[]
    createMany?: IncidentCreateManyGrandPrixInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutGrandPrixInput | IncidentUpdateWithWhereUniqueWithoutGrandPrixInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutGrandPrixInput | IncidentUpdateManyWithWhereWithoutGrandPrixInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type ResultUncheckedUpdateManyWithoutGrandPrixNestedInput = {
    create?: XOR<ResultCreateWithoutGrandPrixInput, ResultUncheckedCreateWithoutGrandPrixInput> | ResultCreateWithoutGrandPrixInput[] | ResultUncheckedCreateWithoutGrandPrixInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutGrandPrixInput | ResultCreateOrConnectWithoutGrandPrixInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutGrandPrixInput | ResultUpsertWithWhereUniqueWithoutGrandPrixInput[]
    createMany?: ResultCreateManyGrandPrixInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutGrandPrixInput | ResultUpdateWithWhereUniqueWithoutGrandPrixInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutGrandPrixInput | ResultUpdateManyWithWhereWithoutGrandPrixInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutGrandPrixNestedInput = {
    create?: XOR<IncidentCreateWithoutGrandPrixInput, IncidentUncheckedCreateWithoutGrandPrixInput> | IncidentCreateWithoutGrandPrixInput[] | IncidentUncheckedCreateWithoutGrandPrixInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutGrandPrixInput | IncidentCreateOrConnectWithoutGrandPrixInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutGrandPrixInput | IncidentUpsertWithWhereUniqueWithoutGrandPrixInput[]
    createMany?: IncidentCreateManyGrandPrixInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutGrandPrixInput | IncidentUpdateWithWhereUniqueWithoutGrandPrixInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutGrandPrixInput | IncidentUpdateManyWithWhereWithoutGrandPrixInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<TeamCreateWithoutIncidentsInput, TeamUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutIncidentsInput
    connect?: TeamWhereUniqueInput
  }

  export type CarCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<CarCreateWithoutIncidentsInput, CarUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: CarCreateOrConnectWithoutIncidentsInput
    connect?: CarWhereUniqueInput
  }

  export type EngineCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<EngineCreateWithoutIncidentsInput, EngineUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: EngineCreateOrConnectWithoutIncidentsInput
    connect?: EngineWhereUniqueInput
  }

  export type PartCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<PartCreateWithoutIncidentsInput, PartUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: PartCreateOrConnectWithoutIncidentsInput
    connect?: PartWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<MemberCreateWithoutIncidentsInput, MemberUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutIncidentsInput
    connect?: MemberWhereUniqueInput
  }

  export type GrandPrixCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<GrandPrixCreateWithoutIncidentsInput, GrandPrixUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: GrandPrixCreateOrConnectWithoutIncidentsInput
    connect?: GrandPrixWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TeamUpdateOneRequiredWithoutIncidentsNestedInput = {
    create?: XOR<TeamCreateWithoutIncidentsInput, TeamUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutIncidentsInput
    upsert?: TeamUpsertWithoutIncidentsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutIncidentsInput, TeamUpdateWithoutIncidentsInput>, TeamUncheckedUpdateWithoutIncidentsInput>
  }

  export type CarUpdateOneWithoutIncidentsNestedInput = {
    create?: XOR<CarCreateWithoutIncidentsInput, CarUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: CarCreateOrConnectWithoutIncidentsInput
    upsert?: CarUpsertWithoutIncidentsInput
    disconnect?: CarWhereInput | boolean
    delete?: CarWhereInput | boolean
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutIncidentsInput, CarUpdateWithoutIncidentsInput>, CarUncheckedUpdateWithoutIncidentsInput>
  }

  export type EngineUpdateOneWithoutIncidentsNestedInput = {
    create?: XOR<EngineCreateWithoutIncidentsInput, EngineUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: EngineCreateOrConnectWithoutIncidentsInput
    upsert?: EngineUpsertWithoutIncidentsInput
    disconnect?: EngineWhereInput | boolean
    delete?: EngineWhereInput | boolean
    connect?: EngineWhereUniqueInput
    update?: XOR<XOR<EngineUpdateToOneWithWhereWithoutIncidentsInput, EngineUpdateWithoutIncidentsInput>, EngineUncheckedUpdateWithoutIncidentsInput>
  }

  export type PartUpdateOneWithoutIncidentsNestedInput = {
    create?: XOR<PartCreateWithoutIncidentsInput, PartUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: PartCreateOrConnectWithoutIncidentsInput
    upsert?: PartUpsertWithoutIncidentsInput
    disconnect?: PartWhereInput | boolean
    delete?: PartWhereInput | boolean
    connect?: PartWhereUniqueInput
    update?: XOR<XOR<PartUpdateToOneWithWhereWithoutIncidentsInput, PartUpdateWithoutIncidentsInput>, PartUncheckedUpdateWithoutIncidentsInput>
  }

  export type MemberUpdateOneWithoutIncidentsNestedInput = {
    create?: XOR<MemberCreateWithoutIncidentsInput, MemberUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutIncidentsInput
    upsert?: MemberUpsertWithoutIncidentsInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutIncidentsInput, MemberUpdateWithoutIncidentsInput>, MemberUncheckedUpdateWithoutIncidentsInput>
  }

  export type GrandPrixUpdateOneWithoutIncidentsNestedInput = {
    create?: XOR<GrandPrixCreateWithoutIncidentsInput, GrandPrixUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: GrandPrixCreateOrConnectWithoutIncidentsInput
    upsert?: GrandPrixUpsertWithoutIncidentsInput
    disconnect?: GrandPrixWhereInput | boolean
    delete?: GrandPrixWhereInput | boolean
    connect?: GrandPrixWhereUniqueInput
    update?: XOR<XOR<GrandPrixUpdateToOneWithWhereWithoutIncidentsInput, GrandPrixUpdateWithoutIncidentsInput>, GrandPrixUncheckedUpdateWithoutIncidentsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    connect?: TeamWhereUniqueInput
  }

  export type IncidentCreateNestedManyWithoutPilotInput = {
    create?: XOR<IncidentCreateWithoutPilotInput, IncidentUncheckedCreateWithoutPilotInput> | IncidentCreateWithoutPilotInput[] | IncidentUncheckedCreateWithoutPilotInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutPilotInput | IncidentCreateOrConnectWithoutPilotInput[]
    createMany?: IncidentCreateManyPilotInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type ResultCreateNestedManyWithoutPilotInput = {
    create?: XOR<ResultCreateWithoutPilotInput, ResultUncheckedCreateWithoutPilotInput> | ResultCreateWithoutPilotInput[] | ResultUncheckedCreateWithoutPilotInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutPilotInput | ResultCreateOrConnectWithoutPilotInput[]
    createMany?: ResultCreateManyPilotInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type CarCreateNestedManyWithoutPilotInput = {
    create?: XOR<CarCreateWithoutPilotInput, CarUncheckedCreateWithoutPilotInput> | CarCreateWithoutPilotInput[] | CarUncheckedCreateWithoutPilotInput[]
    connectOrCreate?: CarCreateOrConnectWithoutPilotInput | CarCreateOrConnectWithoutPilotInput[]
    createMany?: CarCreateManyPilotInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutPilotInput = {
    create?: XOR<IncidentCreateWithoutPilotInput, IncidentUncheckedCreateWithoutPilotInput> | IncidentCreateWithoutPilotInput[] | IncidentUncheckedCreateWithoutPilotInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutPilotInput | IncidentCreateOrConnectWithoutPilotInput[]
    createMany?: IncidentCreateManyPilotInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type ResultUncheckedCreateNestedManyWithoutPilotInput = {
    create?: XOR<ResultCreateWithoutPilotInput, ResultUncheckedCreateWithoutPilotInput> | ResultCreateWithoutPilotInput[] | ResultUncheckedCreateWithoutPilotInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutPilotInput | ResultCreateOrConnectWithoutPilotInput[]
    createMany?: ResultCreateManyPilotInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type CarUncheckedCreateNestedManyWithoutPilotInput = {
    create?: XOR<CarCreateWithoutPilotInput, CarUncheckedCreateWithoutPilotInput> | CarCreateWithoutPilotInput[] | CarUncheckedCreateWithoutPilotInput[]
    connectOrCreate?: CarCreateOrConnectWithoutPilotInput | CarCreateOrConnectWithoutPilotInput[]
    createMany?: CarCreateManyPilotInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type TeamUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    upsert?: TeamUpsertWithoutMembersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMembersInput, TeamUpdateWithoutMembersInput>, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type IncidentUpdateManyWithoutPilotNestedInput = {
    create?: XOR<IncidentCreateWithoutPilotInput, IncidentUncheckedCreateWithoutPilotInput> | IncidentCreateWithoutPilotInput[] | IncidentUncheckedCreateWithoutPilotInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutPilotInput | IncidentCreateOrConnectWithoutPilotInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutPilotInput | IncidentUpsertWithWhereUniqueWithoutPilotInput[]
    createMany?: IncidentCreateManyPilotInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutPilotInput | IncidentUpdateWithWhereUniqueWithoutPilotInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutPilotInput | IncidentUpdateManyWithWhereWithoutPilotInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type ResultUpdateManyWithoutPilotNestedInput = {
    create?: XOR<ResultCreateWithoutPilotInput, ResultUncheckedCreateWithoutPilotInput> | ResultCreateWithoutPilotInput[] | ResultUncheckedCreateWithoutPilotInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutPilotInput | ResultCreateOrConnectWithoutPilotInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutPilotInput | ResultUpsertWithWhereUniqueWithoutPilotInput[]
    createMany?: ResultCreateManyPilotInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutPilotInput | ResultUpdateWithWhereUniqueWithoutPilotInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutPilotInput | ResultUpdateManyWithWhereWithoutPilotInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type CarUpdateManyWithoutPilotNestedInput = {
    create?: XOR<CarCreateWithoutPilotInput, CarUncheckedCreateWithoutPilotInput> | CarCreateWithoutPilotInput[] | CarUncheckedCreateWithoutPilotInput[]
    connectOrCreate?: CarCreateOrConnectWithoutPilotInput | CarCreateOrConnectWithoutPilotInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutPilotInput | CarUpsertWithWhereUniqueWithoutPilotInput[]
    createMany?: CarCreateManyPilotInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutPilotInput | CarUpdateWithWhereUniqueWithoutPilotInput[]
    updateMany?: CarUpdateManyWithWhereWithoutPilotInput | CarUpdateManyWithWhereWithoutPilotInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutPilotNestedInput = {
    create?: XOR<IncidentCreateWithoutPilotInput, IncidentUncheckedCreateWithoutPilotInput> | IncidentCreateWithoutPilotInput[] | IncidentUncheckedCreateWithoutPilotInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutPilotInput | IncidentCreateOrConnectWithoutPilotInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutPilotInput | IncidentUpsertWithWhereUniqueWithoutPilotInput[]
    createMany?: IncidentCreateManyPilotInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutPilotInput | IncidentUpdateWithWhereUniqueWithoutPilotInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutPilotInput | IncidentUpdateManyWithWhereWithoutPilotInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type ResultUncheckedUpdateManyWithoutPilotNestedInput = {
    create?: XOR<ResultCreateWithoutPilotInput, ResultUncheckedCreateWithoutPilotInput> | ResultCreateWithoutPilotInput[] | ResultUncheckedCreateWithoutPilotInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutPilotInput | ResultCreateOrConnectWithoutPilotInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutPilotInput | ResultUpsertWithWhereUniqueWithoutPilotInput[]
    createMany?: ResultCreateManyPilotInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutPilotInput | ResultUpdateWithWhereUniqueWithoutPilotInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutPilotInput | ResultUpdateManyWithWhereWithoutPilotInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type CarUncheckedUpdateManyWithoutPilotNestedInput = {
    create?: XOR<CarCreateWithoutPilotInput, CarUncheckedCreateWithoutPilotInput> | CarCreateWithoutPilotInput[] | CarUncheckedCreateWithoutPilotInput[]
    connectOrCreate?: CarCreateOrConnectWithoutPilotInput | CarCreateOrConnectWithoutPilotInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutPilotInput | CarUpsertWithWhereUniqueWithoutPilotInput[]
    createMany?: CarCreateManyPilotInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutPilotInput | CarUpdateWithWhereUniqueWithoutPilotInput[]
    updateMany?: CarUpdateManyWithWhereWithoutPilotInput | CarUpdateManyWithWhereWithoutPilotInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutPartsInput = {
    create?: XOR<TeamCreateWithoutPartsInput, TeamUncheckedCreateWithoutPartsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPartsInput
    connect?: TeamWhereUniqueInput
  }

  export type IncidentCreateNestedManyWithoutPartInput = {
    create?: XOR<IncidentCreateWithoutPartInput, IncidentUncheckedCreateWithoutPartInput> | IncidentCreateWithoutPartInput[] | IncidentUncheckedCreateWithoutPartInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutPartInput | IncidentCreateOrConnectWithoutPartInput[]
    createMany?: IncidentCreateManyPartInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutPartInput = {
    create?: XOR<IncidentCreateWithoutPartInput, IncidentUncheckedCreateWithoutPartInput> | IncidentCreateWithoutPartInput[] | IncidentUncheckedCreateWithoutPartInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutPartInput | IncidentCreateOrConnectWithoutPartInput[]
    createMany?: IncidentCreateManyPartInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type TeamUpdateOneRequiredWithoutPartsNestedInput = {
    create?: XOR<TeamCreateWithoutPartsInput, TeamUncheckedCreateWithoutPartsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPartsInput
    upsert?: TeamUpsertWithoutPartsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutPartsInput, TeamUpdateWithoutPartsInput>, TeamUncheckedUpdateWithoutPartsInput>
  }

  export type IncidentUpdateManyWithoutPartNestedInput = {
    create?: XOR<IncidentCreateWithoutPartInput, IncidentUncheckedCreateWithoutPartInput> | IncidentCreateWithoutPartInput[] | IncidentUncheckedCreateWithoutPartInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutPartInput | IncidentCreateOrConnectWithoutPartInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutPartInput | IncidentUpsertWithWhereUniqueWithoutPartInput[]
    createMany?: IncidentCreateManyPartInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutPartInput | IncidentUpdateWithWhereUniqueWithoutPartInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutPartInput | IncidentUpdateManyWithWhereWithoutPartInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutPartNestedInput = {
    create?: XOR<IncidentCreateWithoutPartInput, IncidentUncheckedCreateWithoutPartInput> | IncidentCreateWithoutPartInput[] | IncidentUncheckedCreateWithoutPartInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutPartInput | IncidentCreateOrConnectWithoutPartInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutPartInput | IncidentUpsertWithWhereUniqueWithoutPartInput[]
    createMany?: IncidentCreateManyPartInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutPartInput | IncidentUpdateWithWhereUniqueWithoutPartInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutPartInput | IncidentUpdateManyWithWhereWithoutPartInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type MemberCreateNestedOneWithoutResultsInput = {
    create?: XOR<MemberCreateWithoutResultsInput, MemberUncheckedCreateWithoutResultsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutResultsInput
    connect?: MemberWhereUniqueInput
  }

  export type CarCreateNestedOneWithoutResultsInput = {
    create?: XOR<CarCreateWithoutResultsInput, CarUncheckedCreateWithoutResultsInput>
    connectOrCreate?: CarCreateOrConnectWithoutResultsInput
    connect?: CarWhereUniqueInput
  }

  export type GrandPrixCreateNestedOneWithoutResultsInput = {
    create?: XOR<GrandPrixCreateWithoutResultsInput, GrandPrixUncheckedCreateWithoutResultsInput>
    connectOrCreate?: GrandPrixCreateOrConnectWithoutResultsInput
    connect?: GrandPrixWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutResultsInput = {
    create?: XOR<TeamCreateWithoutResultsInput, TeamUncheckedCreateWithoutResultsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutResultsInput
    connect?: TeamWhereUniqueInput
  }

  export type MemberUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<MemberCreateWithoutResultsInput, MemberUncheckedCreateWithoutResultsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutResultsInput
    upsert?: MemberUpsertWithoutResultsInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutResultsInput, MemberUpdateWithoutResultsInput>, MemberUncheckedUpdateWithoutResultsInput>
  }

  export type CarUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<CarCreateWithoutResultsInput, CarUncheckedCreateWithoutResultsInput>
    connectOrCreate?: CarCreateOrConnectWithoutResultsInput
    upsert?: CarUpsertWithoutResultsInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutResultsInput, CarUpdateWithoutResultsInput>, CarUncheckedUpdateWithoutResultsInput>
  }

  export type GrandPrixUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<GrandPrixCreateWithoutResultsInput, GrandPrixUncheckedCreateWithoutResultsInput>
    connectOrCreate?: GrandPrixCreateOrConnectWithoutResultsInput
    upsert?: GrandPrixUpsertWithoutResultsInput
    connect?: GrandPrixWhereUniqueInput
    update?: XOR<XOR<GrandPrixUpdateToOneWithWhereWithoutResultsInput, GrandPrixUpdateWithoutResultsInput>, GrandPrixUncheckedUpdateWithoutResultsInput>
  }

  export type TeamUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<TeamCreateWithoutResultsInput, TeamUncheckedCreateWithoutResultsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutResultsInput
    upsert?: TeamUpsertWithoutResultsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutResultsInput, TeamUpdateWithoutResultsInput>, TeamUncheckedUpdateWithoutResultsInput>
  }

  export type MemberCreateNestedManyWithoutTeamInput = {
    create?: XOR<MemberCreateWithoutTeamInput, MemberUncheckedCreateWithoutTeamInput> | MemberCreateWithoutTeamInput[] | MemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutTeamInput | MemberCreateOrConnectWithoutTeamInput[]
    createMany?: MemberCreateManyTeamInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type CarCreateNestedManyWithoutTeamInput = {
    create?: XOR<CarCreateWithoutTeamInput, CarUncheckedCreateWithoutTeamInput> | CarCreateWithoutTeamInput[] | CarUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: CarCreateOrConnectWithoutTeamInput | CarCreateOrConnectWithoutTeamInput[]
    createMany?: CarCreateManyTeamInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type EngineCreateNestedManyWithoutTeamInput = {
    create?: XOR<EngineCreateWithoutTeamInput, EngineUncheckedCreateWithoutTeamInput> | EngineCreateWithoutTeamInput[] | EngineUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: EngineCreateOrConnectWithoutTeamInput | EngineCreateOrConnectWithoutTeamInput[]
    createMany?: EngineCreateManyTeamInputEnvelope
    connect?: EngineWhereUniqueInput | EngineWhereUniqueInput[]
  }

  export type PartCreateNestedManyWithoutTeamInput = {
    create?: XOR<PartCreateWithoutTeamInput, PartUncheckedCreateWithoutTeamInput> | PartCreateWithoutTeamInput[] | PartUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PartCreateOrConnectWithoutTeamInput | PartCreateOrConnectWithoutTeamInput[]
    createMany?: PartCreateManyTeamInputEnvelope
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
  }

  export type ResultCreateNestedManyWithoutTeamInput = {
    create?: XOR<ResultCreateWithoutTeamInput, ResultUncheckedCreateWithoutTeamInput> | ResultCreateWithoutTeamInput[] | ResultUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutTeamInput | ResultCreateOrConnectWithoutTeamInput[]
    createMany?: ResultCreateManyTeamInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type IncidentCreateNestedManyWithoutTeamInput = {
    create?: XOR<IncidentCreateWithoutTeamInput, IncidentUncheckedCreateWithoutTeamInput> | IncidentCreateWithoutTeamInput[] | IncidentUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutTeamInput | IncidentCreateOrConnectWithoutTeamInput[]
    createMany?: IncidentCreateManyTeamInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<MemberCreateWithoutTeamInput, MemberUncheckedCreateWithoutTeamInput> | MemberCreateWithoutTeamInput[] | MemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutTeamInput | MemberCreateOrConnectWithoutTeamInput[]
    createMany?: MemberCreateManyTeamInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type CarUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<CarCreateWithoutTeamInput, CarUncheckedCreateWithoutTeamInput> | CarCreateWithoutTeamInput[] | CarUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: CarCreateOrConnectWithoutTeamInput | CarCreateOrConnectWithoutTeamInput[]
    createMany?: CarCreateManyTeamInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type EngineUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<EngineCreateWithoutTeamInput, EngineUncheckedCreateWithoutTeamInput> | EngineCreateWithoutTeamInput[] | EngineUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: EngineCreateOrConnectWithoutTeamInput | EngineCreateOrConnectWithoutTeamInput[]
    createMany?: EngineCreateManyTeamInputEnvelope
    connect?: EngineWhereUniqueInput | EngineWhereUniqueInput[]
  }

  export type PartUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<PartCreateWithoutTeamInput, PartUncheckedCreateWithoutTeamInput> | PartCreateWithoutTeamInput[] | PartUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PartCreateOrConnectWithoutTeamInput | PartCreateOrConnectWithoutTeamInput[]
    createMany?: PartCreateManyTeamInputEnvelope
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
  }

  export type ResultUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<ResultCreateWithoutTeamInput, ResultUncheckedCreateWithoutTeamInput> | ResultCreateWithoutTeamInput[] | ResultUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutTeamInput | ResultCreateOrConnectWithoutTeamInput[]
    createMany?: ResultCreateManyTeamInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<IncidentCreateWithoutTeamInput, IncidentUncheckedCreateWithoutTeamInput> | IncidentCreateWithoutTeamInput[] | IncidentUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutTeamInput | IncidentCreateOrConnectWithoutTeamInput[]
    createMany?: IncidentCreateManyTeamInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type MemberUpdateManyWithoutTeamNestedInput = {
    create?: XOR<MemberCreateWithoutTeamInput, MemberUncheckedCreateWithoutTeamInput> | MemberCreateWithoutTeamInput[] | MemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutTeamInput | MemberCreateOrConnectWithoutTeamInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutTeamInput | MemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: MemberCreateManyTeamInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutTeamInput | MemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutTeamInput | MemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type CarUpdateManyWithoutTeamNestedInput = {
    create?: XOR<CarCreateWithoutTeamInput, CarUncheckedCreateWithoutTeamInput> | CarCreateWithoutTeamInput[] | CarUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: CarCreateOrConnectWithoutTeamInput | CarCreateOrConnectWithoutTeamInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutTeamInput | CarUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: CarCreateManyTeamInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutTeamInput | CarUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: CarUpdateManyWithWhereWithoutTeamInput | CarUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type EngineUpdateManyWithoutTeamNestedInput = {
    create?: XOR<EngineCreateWithoutTeamInput, EngineUncheckedCreateWithoutTeamInput> | EngineCreateWithoutTeamInput[] | EngineUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: EngineCreateOrConnectWithoutTeamInput | EngineCreateOrConnectWithoutTeamInput[]
    upsert?: EngineUpsertWithWhereUniqueWithoutTeamInput | EngineUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: EngineCreateManyTeamInputEnvelope
    set?: EngineWhereUniqueInput | EngineWhereUniqueInput[]
    disconnect?: EngineWhereUniqueInput | EngineWhereUniqueInput[]
    delete?: EngineWhereUniqueInput | EngineWhereUniqueInput[]
    connect?: EngineWhereUniqueInput | EngineWhereUniqueInput[]
    update?: EngineUpdateWithWhereUniqueWithoutTeamInput | EngineUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: EngineUpdateManyWithWhereWithoutTeamInput | EngineUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: EngineScalarWhereInput | EngineScalarWhereInput[]
  }

  export type PartUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PartCreateWithoutTeamInput, PartUncheckedCreateWithoutTeamInput> | PartCreateWithoutTeamInput[] | PartUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PartCreateOrConnectWithoutTeamInput | PartCreateOrConnectWithoutTeamInput[]
    upsert?: PartUpsertWithWhereUniqueWithoutTeamInput | PartUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PartCreateManyTeamInputEnvelope
    set?: PartWhereUniqueInput | PartWhereUniqueInput[]
    disconnect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    delete?: PartWhereUniqueInput | PartWhereUniqueInput[]
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    update?: PartUpdateWithWhereUniqueWithoutTeamInput | PartUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PartUpdateManyWithWhereWithoutTeamInput | PartUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PartScalarWhereInput | PartScalarWhereInput[]
  }

  export type ResultUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ResultCreateWithoutTeamInput, ResultUncheckedCreateWithoutTeamInput> | ResultCreateWithoutTeamInput[] | ResultUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutTeamInput | ResultCreateOrConnectWithoutTeamInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutTeamInput | ResultUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ResultCreateManyTeamInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutTeamInput | ResultUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutTeamInput | ResultUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type IncidentUpdateManyWithoutTeamNestedInput = {
    create?: XOR<IncidentCreateWithoutTeamInput, IncidentUncheckedCreateWithoutTeamInput> | IncidentCreateWithoutTeamInput[] | IncidentUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutTeamInput | IncidentCreateOrConnectWithoutTeamInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutTeamInput | IncidentUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: IncidentCreateManyTeamInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutTeamInput | IncidentUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutTeamInput | IncidentUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<MemberCreateWithoutTeamInput, MemberUncheckedCreateWithoutTeamInput> | MemberCreateWithoutTeamInput[] | MemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutTeamInput | MemberCreateOrConnectWithoutTeamInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutTeamInput | MemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: MemberCreateManyTeamInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutTeamInput | MemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutTeamInput | MemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type CarUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<CarCreateWithoutTeamInput, CarUncheckedCreateWithoutTeamInput> | CarCreateWithoutTeamInput[] | CarUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: CarCreateOrConnectWithoutTeamInput | CarCreateOrConnectWithoutTeamInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutTeamInput | CarUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: CarCreateManyTeamInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutTeamInput | CarUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: CarUpdateManyWithWhereWithoutTeamInput | CarUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type EngineUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<EngineCreateWithoutTeamInput, EngineUncheckedCreateWithoutTeamInput> | EngineCreateWithoutTeamInput[] | EngineUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: EngineCreateOrConnectWithoutTeamInput | EngineCreateOrConnectWithoutTeamInput[]
    upsert?: EngineUpsertWithWhereUniqueWithoutTeamInput | EngineUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: EngineCreateManyTeamInputEnvelope
    set?: EngineWhereUniqueInput | EngineWhereUniqueInput[]
    disconnect?: EngineWhereUniqueInput | EngineWhereUniqueInput[]
    delete?: EngineWhereUniqueInput | EngineWhereUniqueInput[]
    connect?: EngineWhereUniqueInput | EngineWhereUniqueInput[]
    update?: EngineUpdateWithWhereUniqueWithoutTeamInput | EngineUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: EngineUpdateManyWithWhereWithoutTeamInput | EngineUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: EngineScalarWhereInput | EngineScalarWhereInput[]
  }

  export type PartUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PartCreateWithoutTeamInput, PartUncheckedCreateWithoutTeamInput> | PartCreateWithoutTeamInput[] | PartUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PartCreateOrConnectWithoutTeamInput | PartCreateOrConnectWithoutTeamInput[]
    upsert?: PartUpsertWithWhereUniqueWithoutTeamInput | PartUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PartCreateManyTeamInputEnvelope
    set?: PartWhereUniqueInput | PartWhereUniqueInput[]
    disconnect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    delete?: PartWhereUniqueInput | PartWhereUniqueInput[]
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    update?: PartUpdateWithWhereUniqueWithoutTeamInput | PartUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PartUpdateManyWithWhereWithoutTeamInput | PartUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PartScalarWhereInput | PartScalarWhereInput[]
  }

  export type ResultUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ResultCreateWithoutTeamInput, ResultUncheckedCreateWithoutTeamInput> | ResultCreateWithoutTeamInput[] | ResultUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutTeamInput | ResultCreateOrConnectWithoutTeamInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutTeamInput | ResultUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ResultCreateManyTeamInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutTeamInput | ResultUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutTeamInput | ResultUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<IncidentCreateWithoutTeamInput, IncidentUncheckedCreateWithoutTeamInput> | IncidentCreateWithoutTeamInput[] | IncidentUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutTeamInput | IncidentCreateOrConnectWithoutTeamInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutTeamInput | IncidentUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: IncidentCreateManyTeamInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutTeamInput | IncidentUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutTeamInput | IncidentUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type TeamCreateWithoutCarsInput = {
    name: string
    country: string
    password: string
    director?: string | null
    email: string
    members?: MemberCreateNestedManyWithoutTeamInput
    engines?: EngineCreateNestedManyWithoutTeamInput
    parts?: PartCreateNestedManyWithoutTeamInput
    results?: ResultCreateNestedManyWithoutTeamInput
    incidents?: IncidentCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutCarsInput = {
    id?: number
    name: string
    country: string
    password: string
    director?: string | null
    email: string
    members?: MemberUncheckedCreateNestedManyWithoutTeamInput
    engines?: EngineUncheckedCreateNestedManyWithoutTeamInput
    parts?: PartUncheckedCreateNestedManyWithoutTeamInput
    results?: ResultUncheckedCreateNestedManyWithoutTeamInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutCarsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutCarsInput, TeamUncheckedCreateWithoutCarsInput>
  }

  export type MemberCreateWithoutCarsInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    nationality?: string | null
    age?: number | null
    avatarUrl?: string | null
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutMembersInput
    incidents?: IncidentCreateNestedManyWithoutPilotInput
    results?: ResultCreateNestedManyWithoutPilotInput
  }

  export type MemberUncheckedCreateWithoutCarsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    teamId: number
    nationality?: string | null
    age?: number | null
    avatarUrl?: string | null
    createdAt?: Date | string
    incidents?: IncidentUncheckedCreateNestedManyWithoutPilotInput
    results?: ResultUncheckedCreateNestedManyWithoutPilotInput
  }

  export type MemberCreateOrConnectWithoutCarsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutCarsInput, MemberUncheckedCreateWithoutCarsInput>
  }

  export type ResultCreateWithoutCarInput = {
    position?: number | null
    points?: number | null
    createdAt?: Date | string
    pilot: MemberCreateNestedOneWithoutResultsInput
    grandPrix: GrandPrixCreateNestedOneWithoutResultsInput
    team: TeamCreateNestedOneWithoutResultsInput
  }

  export type ResultUncheckedCreateWithoutCarInput = {
    id?: number
    position?: number | null
    points?: number | null
    pilotId: number
    grandPrixId: number
    teamId: number
    createdAt?: Date | string
  }

  export type ResultCreateOrConnectWithoutCarInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutCarInput, ResultUncheckedCreateWithoutCarInput>
  }

  export type ResultCreateManyCarInputEnvelope = {
    data: ResultCreateManyCarInput | ResultCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type IncidentCreateWithoutCarInput = {
    type: string
    description?: string | null
    date?: Date | string
    resolved?: boolean
    team: TeamCreateNestedOneWithoutIncidentsInput
    engine?: EngineCreateNestedOneWithoutIncidentsInput
    part?: PartCreateNestedOneWithoutIncidentsInput
    pilot?: MemberCreateNestedOneWithoutIncidentsInput
    grandPrix?: GrandPrixCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentUncheckedCreateWithoutCarInput = {
    id?: number
    type: string
    description?: string | null
    date?: Date | string
    engineId?: number | null
    partId?: number | null
    pilotId?: number | null
    teamId: number
    grandPrixId?: number | null
    resolved?: boolean
  }

  export type IncidentCreateOrConnectWithoutCarInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutCarInput, IncidentUncheckedCreateWithoutCarInput>
  }

  export type IncidentCreateManyCarInputEnvelope = {
    data: IncidentCreateManyCarInput | IncidentCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithoutCarsInput = {
    update: XOR<TeamUpdateWithoutCarsInput, TeamUncheckedUpdateWithoutCarsInput>
    create: XOR<TeamCreateWithoutCarsInput, TeamUncheckedCreateWithoutCarsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutCarsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutCarsInput, TeamUncheckedUpdateWithoutCarsInput>
  }

  export type TeamUpdateWithoutCarsInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    members?: MemberUpdateManyWithoutTeamNestedInput
    engines?: EngineUpdateManyWithoutTeamNestedInput
    parts?: PartUpdateManyWithoutTeamNestedInput
    results?: ResultUpdateManyWithoutTeamNestedInput
    incidents?: IncidentUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutCarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    members?: MemberUncheckedUpdateManyWithoutTeamNestedInput
    engines?: EngineUncheckedUpdateManyWithoutTeamNestedInput
    parts?: PartUncheckedUpdateManyWithoutTeamNestedInput
    results?: ResultUncheckedUpdateManyWithoutTeamNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type MemberUpsertWithoutCarsInput = {
    update: XOR<MemberUpdateWithoutCarsInput, MemberUncheckedUpdateWithoutCarsInput>
    create: XOR<MemberCreateWithoutCarsInput, MemberUncheckedCreateWithoutCarsInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutCarsInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutCarsInput, MemberUncheckedUpdateWithoutCarsInput>
  }

  export type MemberUpdateWithoutCarsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
    incidents?: IncidentUpdateManyWithoutPilotNestedInput
    results?: ResultUpdateManyWithoutPilotNestedInput
  }

  export type MemberUncheckedUpdateWithoutCarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    teamId?: IntFieldUpdateOperationsInput | number
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUncheckedUpdateManyWithoutPilotNestedInput
    results?: ResultUncheckedUpdateManyWithoutPilotNestedInput
  }

  export type ResultUpsertWithWhereUniqueWithoutCarInput = {
    where: ResultWhereUniqueInput
    update: XOR<ResultUpdateWithoutCarInput, ResultUncheckedUpdateWithoutCarInput>
    create: XOR<ResultCreateWithoutCarInput, ResultUncheckedCreateWithoutCarInput>
  }

  export type ResultUpdateWithWhereUniqueWithoutCarInput = {
    where: ResultWhereUniqueInput
    data: XOR<ResultUpdateWithoutCarInput, ResultUncheckedUpdateWithoutCarInput>
  }

  export type ResultUpdateManyWithWhereWithoutCarInput = {
    where: ResultScalarWhereInput
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyWithoutCarInput>
  }

  export type ResultScalarWhereInput = {
    AND?: ResultScalarWhereInput | ResultScalarWhereInput[]
    OR?: ResultScalarWhereInput[]
    NOT?: ResultScalarWhereInput | ResultScalarWhereInput[]
    id?: IntFilter<"Result"> | number
    position?: IntNullableFilter<"Result"> | number | null
    points?: IntNullableFilter<"Result"> | number | null
    pilotId?: IntFilter<"Result"> | number
    carId?: IntFilter<"Result"> | number
    grandPrixId?: IntFilter<"Result"> | number
    teamId?: IntFilter<"Result"> | number
    createdAt?: DateTimeFilter<"Result"> | Date | string
  }

  export type IncidentUpsertWithWhereUniqueWithoutCarInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutCarInput, IncidentUncheckedUpdateWithoutCarInput>
    create: XOR<IncidentCreateWithoutCarInput, IncidentUncheckedCreateWithoutCarInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutCarInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutCarInput, IncidentUncheckedUpdateWithoutCarInput>
  }

  export type IncidentUpdateManyWithWhereWithoutCarInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutCarInput>
  }

  export type IncidentScalarWhereInput = {
    AND?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    OR?: IncidentScalarWhereInput[]
    NOT?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    id?: IntFilter<"Incident"> | number
    type?: StringFilter<"Incident"> | string
    description?: StringNullableFilter<"Incident"> | string | null
    date?: DateTimeFilter<"Incident"> | Date | string
    carId?: IntNullableFilter<"Incident"> | number | null
    engineId?: IntNullableFilter<"Incident"> | number | null
    partId?: IntNullableFilter<"Incident"> | number | null
    pilotId?: IntNullableFilter<"Incident"> | number | null
    teamId?: IntFilter<"Incident"> | number
    grandPrixId?: IntNullableFilter<"Incident"> | number | null
    resolved?: BoolFilter<"Incident"> | boolean
  }

  export type TeamCreateWithoutEnginesInput = {
    name: string
    country: string
    password: string
    director?: string | null
    email: string
    members?: MemberCreateNestedManyWithoutTeamInput
    cars?: CarCreateNestedManyWithoutTeamInput
    parts?: PartCreateNestedManyWithoutTeamInput
    results?: ResultCreateNestedManyWithoutTeamInput
    incidents?: IncidentCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutEnginesInput = {
    id?: number
    name: string
    country: string
    password: string
    director?: string | null
    email: string
    members?: MemberUncheckedCreateNestedManyWithoutTeamInput
    cars?: CarUncheckedCreateNestedManyWithoutTeamInput
    parts?: PartUncheckedCreateNestedManyWithoutTeamInput
    results?: ResultUncheckedCreateNestedManyWithoutTeamInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutEnginesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutEnginesInput, TeamUncheckedCreateWithoutEnginesInput>
  }

  export type IncidentCreateWithoutEngineInput = {
    type: string
    description?: string | null
    date?: Date | string
    resolved?: boolean
    team: TeamCreateNestedOneWithoutIncidentsInput
    car?: CarCreateNestedOneWithoutIncidentsInput
    part?: PartCreateNestedOneWithoutIncidentsInput
    pilot?: MemberCreateNestedOneWithoutIncidentsInput
    grandPrix?: GrandPrixCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentUncheckedCreateWithoutEngineInput = {
    id?: number
    type: string
    description?: string | null
    date?: Date | string
    carId?: number | null
    partId?: number | null
    pilotId?: number | null
    teamId: number
    grandPrixId?: number | null
    resolved?: boolean
  }

  export type IncidentCreateOrConnectWithoutEngineInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutEngineInput, IncidentUncheckedCreateWithoutEngineInput>
  }

  export type IncidentCreateManyEngineInputEnvelope = {
    data: IncidentCreateManyEngineInput | IncidentCreateManyEngineInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithoutEnginesInput = {
    update: XOR<TeamUpdateWithoutEnginesInput, TeamUncheckedUpdateWithoutEnginesInput>
    create: XOR<TeamCreateWithoutEnginesInput, TeamUncheckedCreateWithoutEnginesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutEnginesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutEnginesInput, TeamUncheckedUpdateWithoutEnginesInput>
  }

  export type TeamUpdateWithoutEnginesInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    members?: MemberUpdateManyWithoutTeamNestedInput
    cars?: CarUpdateManyWithoutTeamNestedInput
    parts?: PartUpdateManyWithoutTeamNestedInput
    results?: ResultUpdateManyWithoutTeamNestedInput
    incidents?: IncidentUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutEnginesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    members?: MemberUncheckedUpdateManyWithoutTeamNestedInput
    cars?: CarUncheckedUpdateManyWithoutTeamNestedInput
    parts?: PartUncheckedUpdateManyWithoutTeamNestedInput
    results?: ResultUncheckedUpdateManyWithoutTeamNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type IncidentUpsertWithWhereUniqueWithoutEngineInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutEngineInput, IncidentUncheckedUpdateWithoutEngineInput>
    create: XOR<IncidentCreateWithoutEngineInput, IncidentUncheckedCreateWithoutEngineInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutEngineInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutEngineInput, IncidentUncheckedUpdateWithoutEngineInput>
  }

  export type IncidentUpdateManyWithWhereWithoutEngineInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutEngineInput>
  }

  export type ResultCreateWithoutGrandPrixInput = {
    position?: number | null
    points?: number | null
    createdAt?: Date | string
    pilot: MemberCreateNestedOneWithoutResultsInput
    car: CarCreateNestedOneWithoutResultsInput
    team: TeamCreateNestedOneWithoutResultsInput
  }

  export type ResultUncheckedCreateWithoutGrandPrixInput = {
    id?: number
    position?: number | null
    points?: number | null
    pilotId: number
    carId: number
    teamId: number
    createdAt?: Date | string
  }

  export type ResultCreateOrConnectWithoutGrandPrixInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutGrandPrixInput, ResultUncheckedCreateWithoutGrandPrixInput>
  }

  export type ResultCreateManyGrandPrixInputEnvelope = {
    data: ResultCreateManyGrandPrixInput | ResultCreateManyGrandPrixInput[]
    skipDuplicates?: boolean
  }

  export type IncidentCreateWithoutGrandPrixInput = {
    type: string
    description?: string | null
    date?: Date | string
    resolved?: boolean
    team: TeamCreateNestedOneWithoutIncidentsInput
    car?: CarCreateNestedOneWithoutIncidentsInput
    engine?: EngineCreateNestedOneWithoutIncidentsInput
    part?: PartCreateNestedOneWithoutIncidentsInput
    pilot?: MemberCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentUncheckedCreateWithoutGrandPrixInput = {
    id?: number
    type: string
    description?: string | null
    date?: Date | string
    carId?: number | null
    engineId?: number | null
    partId?: number | null
    pilotId?: number | null
    teamId: number
    resolved?: boolean
  }

  export type IncidentCreateOrConnectWithoutGrandPrixInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutGrandPrixInput, IncidentUncheckedCreateWithoutGrandPrixInput>
  }

  export type IncidentCreateManyGrandPrixInputEnvelope = {
    data: IncidentCreateManyGrandPrixInput | IncidentCreateManyGrandPrixInput[]
    skipDuplicates?: boolean
  }

  export type ResultUpsertWithWhereUniqueWithoutGrandPrixInput = {
    where: ResultWhereUniqueInput
    update: XOR<ResultUpdateWithoutGrandPrixInput, ResultUncheckedUpdateWithoutGrandPrixInput>
    create: XOR<ResultCreateWithoutGrandPrixInput, ResultUncheckedCreateWithoutGrandPrixInput>
  }

  export type ResultUpdateWithWhereUniqueWithoutGrandPrixInput = {
    where: ResultWhereUniqueInput
    data: XOR<ResultUpdateWithoutGrandPrixInput, ResultUncheckedUpdateWithoutGrandPrixInput>
  }

  export type ResultUpdateManyWithWhereWithoutGrandPrixInput = {
    where: ResultScalarWhereInput
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyWithoutGrandPrixInput>
  }

  export type IncidentUpsertWithWhereUniqueWithoutGrandPrixInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutGrandPrixInput, IncidentUncheckedUpdateWithoutGrandPrixInput>
    create: XOR<IncidentCreateWithoutGrandPrixInput, IncidentUncheckedCreateWithoutGrandPrixInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutGrandPrixInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutGrandPrixInput, IncidentUncheckedUpdateWithoutGrandPrixInput>
  }

  export type IncidentUpdateManyWithWhereWithoutGrandPrixInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutGrandPrixInput>
  }

  export type TeamCreateWithoutIncidentsInput = {
    name: string
    country: string
    password: string
    director?: string | null
    email: string
    members?: MemberCreateNestedManyWithoutTeamInput
    cars?: CarCreateNestedManyWithoutTeamInput
    engines?: EngineCreateNestedManyWithoutTeamInput
    parts?: PartCreateNestedManyWithoutTeamInput
    results?: ResultCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutIncidentsInput = {
    id?: number
    name: string
    country: string
    password: string
    director?: string | null
    email: string
    members?: MemberUncheckedCreateNestedManyWithoutTeamInput
    cars?: CarUncheckedCreateNestedManyWithoutTeamInput
    engines?: EngineUncheckedCreateNestedManyWithoutTeamInput
    parts?: PartUncheckedCreateNestedManyWithoutTeamInput
    results?: ResultUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutIncidentsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutIncidentsInput, TeamUncheckedCreateWithoutIncidentsInput>
  }

  export type CarCreateWithoutIncidentsInput = {
    chassisNum: string
    model: string
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutCarsInput
    pilot: MemberCreateNestedOneWithoutCarsInput
    results?: ResultCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutIncidentsInput = {
    id?: number
    chassisNum: string
    model: string
    teamId: number
    pilotId: number
    createdAt?: Date | string
    results?: ResultUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutIncidentsInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutIncidentsInput, CarUncheckedCreateWithoutIncidentsInput>
  }

  export type EngineCreateWithoutIncidentsInput = {
    code: string
    state: string
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutEnginesInput
  }

  export type EngineUncheckedCreateWithoutIncidentsInput = {
    id?: number
    code: string
    state: string
    teamId: number
    createdAt?: Date | string
  }

  export type EngineCreateOrConnectWithoutIncidentsInput = {
    where: EngineWhereUniqueInput
    create: XOR<EngineCreateWithoutIncidentsInput, EngineUncheckedCreateWithoutIncidentsInput>
  }

  export type PartCreateWithoutIncidentsInput = {
    reference: string
    type: string
    quantity: number
    team: TeamCreateNestedOneWithoutPartsInput
  }

  export type PartUncheckedCreateWithoutIncidentsInput = {
    id?: number
    reference: string
    type: string
    quantity: number
    teamId: number
  }

  export type PartCreateOrConnectWithoutIncidentsInput = {
    where: PartWhereUniqueInput
    create: XOR<PartCreateWithoutIncidentsInput, PartUncheckedCreateWithoutIncidentsInput>
  }

  export type MemberCreateWithoutIncidentsInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    nationality?: string | null
    age?: number | null
    avatarUrl?: string | null
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutMembersInput
    results?: ResultCreateNestedManyWithoutPilotInput
    cars?: CarCreateNestedManyWithoutPilotInput
  }

  export type MemberUncheckedCreateWithoutIncidentsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    teamId: number
    nationality?: string | null
    age?: number | null
    avatarUrl?: string | null
    createdAt?: Date | string
    results?: ResultUncheckedCreateNestedManyWithoutPilotInput
    cars?: CarUncheckedCreateNestedManyWithoutPilotInput
  }

  export type MemberCreateOrConnectWithoutIncidentsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutIncidentsInput, MemberUncheckedCreateWithoutIncidentsInput>
  }

  export type GrandPrixCreateWithoutIncidentsInput = {
    name: string
    circuit: string
    country: string
    date: Date | string
    results?: ResultCreateNestedManyWithoutGrandPrixInput
  }

  export type GrandPrixUncheckedCreateWithoutIncidentsInput = {
    id?: number
    name: string
    circuit: string
    country: string
    date: Date | string
    results?: ResultUncheckedCreateNestedManyWithoutGrandPrixInput
  }

  export type GrandPrixCreateOrConnectWithoutIncidentsInput = {
    where: GrandPrixWhereUniqueInput
    create: XOR<GrandPrixCreateWithoutIncidentsInput, GrandPrixUncheckedCreateWithoutIncidentsInput>
  }

  export type TeamUpsertWithoutIncidentsInput = {
    update: XOR<TeamUpdateWithoutIncidentsInput, TeamUncheckedUpdateWithoutIncidentsInput>
    create: XOR<TeamCreateWithoutIncidentsInput, TeamUncheckedCreateWithoutIncidentsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutIncidentsInput, TeamUncheckedUpdateWithoutIncidentsInput>
  }

  export type TeamUpdateWithoutIncidentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    members?: MemberUpdateManyWithoutTeamNestedInput
    cars?: CarUpdateManyWithoutTeamNestedInput
    engines?: EngineUpdateManyWithoutTeamNestedInput
    parts?: PartUpdateManyWithoutTeamNestedInput
    results?: ResultUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutIncidentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    members?: MemberUncheckedUpdateManyWithoutTeamNestedInput
    cars?: CarUncheckedUpdateManyWithoutTeamNestedInput
    engines?: EngineUncheckedUpdateManyWithoutTeamNestedInput
    parts?: PartUncheckedUpdateManyWithoutTeamNestedInput
    results?: ResultUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type CarUpsertWithoutIncidentsInput = {
    update: XOR<CarUpdateWithoutIncidentsInput, CarUncheckedUpdateWithoutIncidentsInput>
    create: XOR<CarCreateWithoutIncidentsInput, CarUncheckedCreateWithoutIncidentsInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutIncidentsInput, CarUncheckedUpdateWithoutIncidentsInput>
  }

  export type CarUpdateWithoutIncidentsInput = {
    chassisNum?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutCarsNestedInput
    pilot?: MemberUpdateOneRequiredWithoutCarsNestedInput
    results?: ResultUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutIncidentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    chassisNum?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    teamId?: IntFieldUpdateOperationsInput | number
    pilotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ResultUncheckedUpdateManyWithoutCarNestedInput
  }

  export type EngineUpsertWithoutIncidentsInput = {
    update: XOR<EngineUpdateWithoutIncidentsInput, EngineUncheckedUpdateWithoutIncidentsInput>
    create: XOR<EngineCreateWithoutIncidentsInput, EngineUncheckedCreateWithoutIncidentsInput>
    where?: EngineWhereInput
  }

  export type EngineUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: EngineWhereInput
    data: XOR<EngineUpdateWithoutIncidentsInput, EngineUncheckedUpdateWithoutIncidentsInput>
  }

  export type EngineUpdateWithoutIncidentsInput = {
    code?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutEnginesNestedInput
  }

  export type EngineUncheckedUpdateWithoutIncidentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    teamId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartUpsertWithoutIncidentsInput = {
    update: XOR<PartUpdateWithoutIncidentsInput, PartUncheckedUpdateWithoutIncidentsInput>
    create: XOR<PartCreateWithoutIncidentsInput, PartUncheckedCreateWithoutIncidentsInput>
    where?: PartWhereInput
  }

  export type PartUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: PartWhereInput
    data: XOR<PartUpdateWithoutIncidentsInput, PartUncheckedUpdateWithoutIncidentsInput>
  }

  export type PartUpdateWithoutIncidentsInput = {
    reference?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    team?: TeamUpdateOneRequiredWithoutPartsNestedInput
  }

  export type PartUncheckedUpdateWithoutIncidentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
  }

  export type MemberUpsertWithoutIncidentsInput = {
    update: XOR<MemberUpdateWithoutIncidentsInput, MemberUncheckedUpdateWithoutIncidentsInput>
    create: XOR<MemberCreateWithoutIncidentsInput, MemberUncheckedCreateWithoutIncidentsInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutIncidentsInput, MemberUncheckedUpdateWithoutIncidentsInput>
  }

  export type MemberUpdateWithoutIncidentsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
    results?: ResultUpdateManyWithoutPilotNestedInput
    cars?: CarUpdateManyWithoutPilotNestedInput
  }

  export type MemberUncheckedUpdateWithoutIncidentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    teamId?: IntFieldUpdateOperationsInput | number
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ResultUncheckedUpdateManyWithoutPilotNestedInput
    cars?: CarUncheckedUpdateManyWithoutPilotNestedInput
  }

  export type GrandPrixUpsertWithoutIncidentsInput = {
    update: XOR<GrandPrixUpdateWithoutIncidentsInput, GrandPrixUncheckedUpdateWithoutIncidentsInput>
    create: XOR<GrandPrixCreateWithoutIncidentsInput, GrandPrixUncheckedCreateWithoutIncidentsInput>
    where?: GrandPrixWhereInput
  }

  export type GrandPrixUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: GrandPrixWhereInput
    data: XOR<GrandPrixUpdateWithoutIncidentsInput, GrandPrixUncheckedUpdateWithoutIncidentsInput>
  }

  export type GrandPrixUpdateWithoutIncidentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    circuit?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ResultUpdateManyWithoutGrandPrixNestedInput
  }

  export type GrandPrixUncheckedUpdateWithoutIncidentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    circuit?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ResultUncheckedUpdateManyWithoutGrandPrixNestedInput
  }

  export type TeamCreateWithoutMembersInput = {
    name: string
    country: string
    password: string
    director?: string | null
    email: string
    cars?: CarCreateNestedManyWithoutTeamInput
    engines?: EngineCreateNestedManyWithoutTeamInput
    parts?: PartCreateNestedManyWithoutTeamInput
    results?: ResultCreateNestedManyWithoutTeamInput
    incidents?: IncidentCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutMembersInput = {
    id?: number
    name: string
    country: string
    password: string
    director?: string | null
    email: string
    cars?: CarUncheckedCreateNestedManyWithoutTeamInput
    engines?: EngineUncheckedCreateNestedManyWithoutTeamInput
    parts?: PartUncheckedCreateNestedManyWithoutTeamInput
    results?: ResultUncheckedCreateNestedManyWithoutTeamInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutMembersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
  }

  export type IncidentCreateWithoutPilotInput = {
    type: string
    description?: string | null
    date?: Date | string
    resolved?: boolean
    team: TeamCreateNestedOneWithoutIncidentsInput
    car?: CarCreateNestedOneWithoutIncidentsInput
    engine?: EngineCreateNestedOneWithoutIncidentsInput
    part?: PartCreateNestedOneWithoutIncidentsInput
    grandPrix?: GrandPrixCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentUncheckedCreateWithoutPilotInput = {
    id?: number
    type: string
    description?: string | null
    date?: Date | string
    carId?: number | null
    engineId?: number | null
    partId?: number | null
    teamId: number
    grandPrixId?: number | null
    resolved?: boolean
  }

  export type IncidentCreateOrConnectWithoutPilotInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutPilotInput, IncidentUncheckedCreateWithoutPilotInput>
  }

  export type IncidentCreateManyPilotInputEnvelope = {
    data: IncidentCreateManyPilotInput | IncidentCreateManyPilotInput[]
    skipDuplicates?: boolean
  }

  export type ResultCreateWithoutPilotInput = {
    position?: number | null
    points?: number | null
    createdAt?: Date | string
    car: CarCreateNestedOneWithoutResultsInput
    grandPrix: GrandPrixCreateNestedOneWithoutResultsInput
    team: TeamCreateNestedOneWithoutResultsInput
  }

  export type ResultUncheckedCreateWithoutPilotInput = {
    id?: number
    position?: number | null
    points?: number | null
    carId: number
    grandPrixId: number
    teamId: number
    createdAt?: Date | string
  }

  export type ResultCreateOrConnectWithoutPilotInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutPilotInput, ResultUncheckedCreateWithoutPilotInput>
  }

  export type ResultCreateManyPilotInputEnvelope = {
    data: ResultCreateManyPilotInput | ResultCreateManyPilotInput[]
    skipDuplicates?: boolean
  }

  export type CarCreateWithoutPilotInput = {
    chassisNum: string
    model: string
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutCarsInput
    results?: ResultCreateNestedManyWithoutCarInput
    incidents?: IncidentCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutPilotInput = {
    id?: number
    chassisNum: string
    model: string
    teamId: number
    createdAt?: Date | string
    results?: ResultUncheckedCreateNestedManyWithoutCarInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutPilotInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutPilotInput, CarUncheckedCreateWithoutPilotInput>
  }

  export type CarCreateManyPilotInputEnvelope = {
    data: CarCreateManyPilotInput | CarCreateManyPilotInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithoutMembersInput = {
    update: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMembersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    cars?: CarUpdateManyWithoutTeamNestedInput
    engines?: EngineUpdateManyWithoutTeamNestedInput
    parts?: PartUpdateManyWithoutTeamNestedInput
    results?: ResultUpdateManyWithoutTeamNestedInput
    incidents?: IncidentUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    cars?: CarUncheckedUpdateManyWithoutTeamNestedInput
    engines?: EngineUncheckedUpdateManyWithoutTeamNestedInput
    parts?: PartUncheckedUpdateManyWithoutTeamNestedInput
    results?: ResultUncheckedUpdateManyWithoutTeamNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type IncidentUpsertWithWhereUniqueWithoutPilotInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutPilotInput, IncidentUncheckedUpdateWithoutPilotInput>
    create: XOR<IncidentCreateWithoutPilotInput, IncidentUncheckedCreateWithoutPilotInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutPilotInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutPilotInput, IncidentUncheckedUpdateWithoutPilotInput>
  }

  export type IncidentUpdateManyWithWhereWithoutPilotInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutPilotInput>
  }

  export type ResultUpsertWithWhereUniqueWithoutPilotInput = {
    where: ResultWhereUniqueInput
    update: XOR<ResultUpdateWithoutPilotInput, ResultUncheckedUpdateWithoutPilotInput>
    create: XOR<ResultCreateWithoutPilotInput, ResultUncheckedCreateWithoutPilotInput>
  }

  export type ResultUpdateWithWhereUniqueWithoutPilotInput = {
    where: ResultWhereUniqueInput
    data: XOR<ResultUpdateWithoutPilotInput, ResultUncheckedUpdateWithoutPilotInput>
  }

  export type ResultUpdateManyWithWhereWithoutPilotInput = {
    where: ResultScalarWhereInput
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyWithoutPilotInput>
  }

  export type CarUpsertWithWhereUniqueWithoutPilotInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutPilotInput, CarUncheckedUpdateWithoutPilotInput>
    create: XOR<CarCreateWithoutPilotInput, CarUncheckedCreateWithoutPilotInput>
  }

  export type CarUpdateWithWhereUniqueWithoutPilotInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutPilotInput, CarUncheckedUpdateWithoutPilotInput>
  }

  export type CarUpdateManyWithWhereWithoutPilotInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutPilotInput>
  }

  export type CarScalarWhereInput = {
    AND?: CarScalarWhereInput | CarScalarWhereInput[]
    OR?: CarScalarWhereInput[]
    NOT?: CarScalarWhereInput | CarScalarWhereInput[]
    id?: IntFilter<"Car"> | number
    chassisNum?: StringFilter<"Car"> | string
    model?: StringFilter<"Car"> | string
    teamId?: IntFilter<"Car"> | number
    pilotId?: IntFilter<"Car"> | number
    createdAt?: DateTimeFilter<"Car"> | Date | string
  }

  export type TeamCreateWithoutPartsInput = {
    name: string
    country: string
    password: string
    director?: string | null
    email: string
    members?: MemberCreateNestedManyWithoutTeamInput
    cars?: CarCreateNestedManyWithoutTeamInput
    engines?: EngineCreateNestedManyWithoutTeamInput
    results?: ResultCreateNestedManyWithoutTeamInput
    incidents?: IncidentCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutPartsInput = {
    id?: number
    name: string
    country: string
    password: string
    director?: string | null
    email: string
    members?: MemberUncheckedCreateNestedManyWithoutTeamInput
    cars?: CarUncheckedCreateNestedManyWithoutTeamInput
    engines?: EngineUncheckedCreateNestedManyWithoutTeamInput
    results?: ResultUncheckedCreateNestedManyWithoutTeamInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutPartsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutPartsInput, TeamUncheckedCreateWithoutPartsInput>
  }

  export type IncidentCreateWithoutPartInput = {
    type: string
    description?: string | null
    date?: Date | string
    resolved?: boolean
    team: TeamCreateNestedOneWithoutIncidentsInput
    car?: CarCreateNestedOneWithoutIncidentsInput
    engine?: EngineCreateNestedOneWithoutIncidentsInput
    pilot?: MemberCreateNestedOneWithoutIncidentsInput
    grandPrix?: GrandPrixCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentUncheckedCreateWithoutPartInput = {
    id?: number
    type: string
    description?: string | null
    date?: Date | string
    carId?: number | null
    engineId?: number | null
    pilotId?: number | null
    teamId: number
    grandPrixId?: number | null
    resolved?: boolean
  }

  export type IncidentCreateOrConnectWithoutPartInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutPartInput, IncidentUncheckedCreateWithoutPartInput>
  }

  export type IncidentCreateManyPartInputEnvelope = {
    data: IncidentCreateManyPartInput | IncidentCreateManyPartInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithoutPartsInput = {
    update: XOR<TeamUpdateWithoutPartsInput, TeamUncheckedUpdateWithoutPartsInput>
    create: XOR<TeamCreateWithoutPartsInput, TeamUncheckedCreateWithoutPartsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutPartsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutPartsInput, TeamUncheckedUpdateWithoutPartsInput>
  }

  export type TeamUpdateWithoutPartsInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    members?: MemberUpdateManyWithoutTeamNestedInput
    cars?: CarUpdateManyWithoutTeamNestedInput
    engines?: EngineUpdateManyWithoutTeamNestedInput
    results?: ResultUpdateManyWithoutTeamNestedInput
    incidents?: IncidentUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutPartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    members?: MemberUncheckedUpdateManyWithoutTeamNestedInput
    cars?: CarUncheckedUpdateManyWithoutTeamNestedInput
    engines?: EngineUncheckedUpdateManyWithoutTeamNestedInput
    results?: ResultUncheckedUpdateManyWithoutTeamNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type IncidentUpsertWithWhereUniqueWithoutPartInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutPartInput, IncidentUncheckedUpdateWithoutPartInput>
    create: XOR<IncidentCreateWithoutPartInput, IncidentUncheckedCreateWithoutPartInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutPartInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutPartInput, IncidentUncheckedUpdateWithoutPartInput>
  }

  export type IncidentUpdateManyWithWhereWithoutPartInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutPartInput>
  }

  export type MemberCreateWithoutResultsInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    nationality?: string | null
    age?: number | null
    avatarUrl?: string | null
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutMembersInput
    incidents?: IncidentCreateNestedManyWithoutPilotInput
    cars?: CarCreateNestedManyWithoutPilotInput
  }

  export type MemberUncheckedCreateWithoutResultsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    teamId: number
    nationality?: string | null
    age?: number | null
    avatarUrl?: string | null
    createdAt?: Date | string
    incidents?: IncidentUncheckedCreateNestedManyWithoutPilotInput
    cars?: CarUncheckedCreateNestedManyWithoutPilotInput
  }

  export type MemberCreateOrConnectWithoutResultsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutResultsInput, MemberUncheckedCreateWithoutResultsInput>
  }

  export type CarCreateWithoutResultsInput = {
    chassisNum: string
    model: string
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutCarsInput
    pilot: MemberCreateNestedOneWithoutCarsInput
    incidents?: IncidentCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutResultsInput = {
    id?: number
    chassisNum: string
    model: string
    teamId: number
    pilotId: number
    createdAt?: Date | string
    incidents?: IncidentUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutResultsInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutResultsInput, CarUncheckedCreateWithoutResultsInput>
  }

  export type GrandPrixCreateWithoutResultsInput = {
    name: string
    circuit: string
    country: string
    date: Date | string
    incidents?: IncidentCreateNestedManyWithoutGrandPrixInput
  }

  export type GrandPrixUncheckedCreateWithoutResultsInput = {
    id?: number
    name: string
    circuit: string
    country: string
    date: Date | string
    incidents?: IncidentUncheckedCreateNestedManyWithoutGrandPrixInput
  }

  export type GrandPrixCreateOrConnectWithoutResultsInput = {
    where: GrandPrixWhereUniqueInput
    create: XOR<GrandPrixCreateWithoutResultsInput, GrandPrixUncheckedCreateWithoutResultsInput>
  }

  export type TeamCreateWithoutResultsInput = {
    name: string
    country: string
    password: string
    director?: string | null
    email: string
    members?: MemberCreateNestedManyWithoutTeamInput
    cars?: CarCreateNestedManyWithoutTeamInput
    engines?: EngineCreateNestedManyWithoutTeamInput
    parts?: PartCreateNestedManyWithoutTeamInput
    incidents?: IncidentCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutResultsInput = {
    id?: number
    name: string
    country: string
    password: string
    director?: string | null
    email: string
    members?: MemberUncheckedCreateNestedManyWithoutTeamInput
    cars?: CarUncheckedCreateNestedManyWithoutTeamInput
    engines?: EngineUncheckedCreateNestedManyWithoutTeamInput
    parts?: PartUncheckedCreateNestedManyWithoutTeamInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutResultsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutResultsInput, TeamUncheckedCreateWithoutResultsInput>
  }

  export type MemberUpsertWithoutResultsInput = {
    update: XOR<MemberUpdateWithoutResultsInput, MemberUncheckedUpdateWithoutResultsInput>
    create: XOR<MemberCreateWithoutResultsInput, MemberUncheckedCreateWithoutResultsInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutResultsInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutResultsInput, MemberUncheckedUpdateWithoutResultsInput>
  }

  export type MemberUpdateWithoutResultsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
    incidents?: IncidentUpdateManyWithoutPilotNestedInput
    cars?: CarUpdateManyWithoutPilotNestedInput
  }

  export type MemberUncheckedUpdateWithoutResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    teamId?: IntFieldUpdateOperationsInput | number
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUncheckedUpdateManyWithoutPilotNestedInput
    cars?: CarUncheckedUpdateManyWithoutPilotNestedInput
  }

  export type CarUpsertWithoutResultsInput = {
    update: XOR<CarUpdateWithoutResultsInput, CarUncheckedUpdateWithoutResultsInput>
    create: XOR<CarCreateWithoutResultsInput, CarUncheckedCreateWithoutResultsInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutResultsInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutResultsInput, CarUncheckedUpdateWithoutResultsInput>
  }

  export type CarUpdateWithoutResultsInput = {
    chassisNum?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutCarsNestedInput
    pilot?: MemberUpdateOneRequiredWithoutCarsNestedInput
    incidents?: IncidentUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    chassisNum?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    teamId?: IntFieldUpdateOperationsInput | number
    pilotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUncheckedUpdateManyWithoutCarNestedInput
  }

  export type GrandPrixUpsertWithoutResultsInput = {
    update: XOR<GrandPrixUpdateWithoutResultsInput, GrandPrixUncheckedUpdateWithoutResultsInput>
    create: XOR<GrandPrixCreateWithoutResultsInput, GrandPrixUncheckedCreateWithoutResultsInput>
    where?: GrandPrixWhereInput
  }

  export type GrandPrixUpdateToOneWithWhereWithoutResultsInput = {
    where?: GrandPrixWhereInput
    data: XOR<GrandPrixUpdateWithoutResultsInput, GrandPrixUncheckedUpdateWithoutResultsInput>
  }

  export type GrandPrixUpdateWithoutResultsInput = {
    name?: StringFieldUpdateOperationsInput | string
    circuit?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUpdateManyWithoutGrandPrixNestedInput
  }

  export type GrandPrixUncheckedUpdateWithoutResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    circuit?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUncheckedUpdateManyWithoutGrandPrixNestedInput
  }

  export type TeamUpsertWithoutResultsInput = {
    update: XOR<TeamUpdateWithoutResultsInput, TeamUncheckedUpdateWithoutResultsInput>
    create: XOR<TeamCreateWithoutResultsInput, TeamUncheckedCreateWithoutResultsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutResultsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutResultsInput, TeamUncheckedUpdateWithoutResultsInput>
  }

  export type TeamUpdateWithoutResultsInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    members?: MemberUpdateManyWithoutTeamNestedInput
    cars?: CarUpdateManyWithoutTeamNestedInput
    engines?: EngineUpdateManyWithoutTeamNestedInput
    parts?: PartUpdateManyWithoutTeamNestedInput
    incidents?: IncidentUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    members?: MemberUncheckedUpdateManyWithoutTeamNestedInput
    cars?: CarUncheckedUpdateManyWithoutTeamNestedInput
    engines?: EngineUncheckedUpdateManyWithoutTeamNestedInput
    parts?: PartUncheckedUpdateManyWithoutTeamNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type MemberCreateWithoutTeamInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    nationality?: string | null
    age?: number | null
    avatarUrl?: string | null
    createdAt?: Date | string
    incidents?: IncidentCreateNestedManyWithoutPilotInput
    results?: ResultCreateNestedManyWithoutPilotInput
    cars?: CarCreateNestedManyWithoutPilotInput
  }

  export type MemberUncheckedCreateWithoutTeamInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    nationality?: string | null
    age?: number | null
    avatarUrl?: string | null
    createdAt?: Date | string
    incidents?: IncidentUncheckedCreateNestedManyWithoutPilotInput
    results?: ResultUncheckedCreateNestedManyWithoutPilotInput
    cars?: CarUncheckedCreateNestedManyWithoutPilotInput
  }

  export type MemberCreateOrConnectWithoutTeamInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutTeamInput, MemberUncheckedCreateWithoutTeamInput>
  }

  export type MemberCreateManyTeamInputEnvelope = {
    data: MemberCreateManyTeamInput | MemberCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type CarCreateWithoutTeamInput = {
    chassisNum: string
    model: string
    createdAt?: Date | string
    pilot: MemberCreateNestedOneWithoutCarsInput
    results?: ResultCreateNestedManyWithoutCarInput
    incidents?: IncidentCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutTeamInput = {
    id?: number
    chassisNum: string
    model: string
    pilotId: number
    createdAt?: Date | string
    results?: ResultUncheckedCreateNestedManyWithoutCarInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutTeamInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutTeamInput, CarUncheckedCreateWithoutTeamInput>
  }

  export type CarCreateManyTeamInputEnvelope = {
    data: CarCreateManyTeamInput | CarCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type EngineCreateWithoutTeamInput = {
    code: string
    state: string
    createdAt?: Date | string
    incidents?: IncidentCreateNestedManyWithoutEngineInput
  }

  export type EngineUncheckedCreateWithoutTeamInput = {
    id?: number
    code: string
    state: string
    createdAt?: Date | string
    incidents?: IncidentUncheckedCreateNestedManyWithoutEngineInput
  }

  export type EngineCreateOrConnectWithoutTeamInput = {
    where: EngineWhereUniqueInput
    create: XOR<EngineCreateWithoutTeamInput, EngineUncheckedCreateWithoutTeamInput>
  }

  export type EngineCreateManyTeamInputEnvelope = {
    data: EngineCreateManyTeamInput | EngineCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type PartCreateWithoutTeamInput = {
    reference: string
    type: string
    quantity: number
    incidents?: IncidentCreateNestedManyWithoutPartInput
  }

  export type PartUncheckedCreateWithoutTeamInput = {
    id?: number
    reference: string
    type: string
    quantity: number
    incidents?: IncidentUncheckedCreateNestedManyWithoutPartInput
  }

  export type PartCreateOrConnectWithoutTeamInput = {
    where: PartWhereUniqueInput
    create: XOR<PartCreateWithoutTeamInput, PartUncheckedCreateWithoutTeamInput>
  }

  export type PartCreateManyTeamInputEnvelope = {
    data: PartCreateManyTeamInput | PartCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type ResultCreateWithoutTeamInput = {
    position?: number | null
    points?: number | null
    createdAt?: Date | string
    pilot: MemberCreateNestedOneWithoutResultsInput
    car: CarCreateNestedOneWithoutResultsInput
    grandPrix: GrandPrixCreateNestedOneWithoutResultsInput
  }

  export type ResultUncheckedCreateWithoutTeamInput = {
    id?: number
    position?: number | null
    points?: number | null
    pilotId: number
    carId: number
    grandPrixId: number
    createdAt?: Date | string
  }

  export type ResultCreateOrConnectWithoutTeamInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutTeamInput, ResultUncheckedCreateWithoutTeamInput>
  }

  export type ResultCreateManyTeamInputEnvelope = {
    data: ResultCreateManyTeamInput | ResultCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type IncidentCreateWithoutTeamInput = {
    type: string
    description?: string | null
    date?: Date | string
    resolved?: boolean
    car?: CarCreateNestedOneWithoutIncidentsInput
    engine?: EngineCreateNestedOneWithoutIncidentsInput
    part?: PartCreateNestedOneWithoutIncidentsInput
    pilot?: MemberCreateNestedOneWithoutIncidentsInput
    grandPrix?: GrandPrixCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentUncheckedCreateWithoutTeamInput = {
    id?: number
    type: string
    description?: string | null
    date?: Date | string
    carId?: number | null
    engineId?: number | null
    partId?: number | null
    pilotId?: number | null
    grandPrixId?: number | null
    resolved?: boolean
  }

  export type IncidentCreateOrConnectWithoutTeamInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutTeamInput, IncidentUncheckedCreateWithoutTeamInput>
  }

  export type IncidentCreateManyTeamInputEnvelope = {
    data: IncidentCreateManyTeamInput | IncidentCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type MemberUpsertWithWhereUniqueWithoutTeamInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutTeamInput, MemberUncheckedUpdateWithoutTeamInput>
    create: XOR<MemberCreateWithoutTeamInput, MemberUncheckedCreateWithoutTeamInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutTeamInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutTeamInput, MemberUncheckedUpdateWithoutTeamInput>
  }

  export type MemberUpdateManyWithWhereWithoutTeamInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutTeamInput>
  }

  export type MemberScalarWhereInput = {
    AND?: MemberScalarWhereInput | MemberScalarWhereInput[]
    OR?: MemberScalarWhereInput[]
    NOT?: MemberScalarWhereInput | MemberScalarWhereInput[]
    id?: IntFilter<"Member"> | number
    firstName?: StringFilter<"Member"> | string
    lastName?: StringFilter<"Member"> | string
    email?: StringFilter<"Member"> | string
    password?: StringFilter<"Member"> | string
    role?: EnumRoleFilter<"Member"> | $Enums.Role
    teamId?: IntFilter<"Member"> | number
    nationality?: StringNullableFilter<"Member"> | string | null
    age?: IntNullableFilter<"Member"> | number | null
    avatarUrl?: StringNullableFilter<"Member"> | string | null
    createdAt?: DateTimeFilter<"Member"> | Date | string
  }

  export type CarUpsertWithWhereUniqueWithoutTeamInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutTeamInput, CarUncheckedUpdateWithoutTeamInput>
    create: XOR<CarCreateWithoutTeamInput, CarUncheckedCreateWithoutTeamInput>
  }

  export type CarUpdateWithWhereUniqueWithoutTeamInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutTeamInput, CarUncheckedUpdateWithoutTeamInput>
  }

  export type CarUpdateManyWithWhereWithoutTeamInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutTeamInput>
  }

  export type EngineUpsertWithWhereUniqueWithoutTeamInput = {
    where: EngineWhereUniqueInput
    update: XOR<EngineUpdateWithoutTeamInput, EngineUncheckedUpdateWithoutTeamInput>
    create: XOR<EngineCreateWithoutTeamInput, EngineUncheckedCreateWithoutTeamInput>
  }

  export type EngineUpdateWithWhereUniqueWithoutTeamInput = {
    where: EngineWhereUniqueInput
    data: XOR<EngineUpdateWithoutTeamInput, EngineUncheckedUpdateWithoutTeamInput>
  }

  export type EngineUpdateManyWithWhereWithoutTeamInput = {
    where: EngineScalarWhereInput
    data: XOR<EngineUpdateManyMutationInput, EngineUncheckedUpdateManyWithoutTeamInput>
  }

  export type EngineScalarWhereInput = {
    AND?: EngineScalarWhereInput | EngineScalarWhereInput[]
    OR?: EngineScalarWhereInput[]
    NOT?: EngineScalarWhereInput | EngineScalarWhereInput[]
    id?: IntFilter<"Engine"> | number
    code?: StringFilter<"Engine"> | string
    state?: StringFilter<"Engine"> | string
    teamId?: IntFilter<"Engine"> | number
    createdAt?: DateTimeFilter<"Engine"> | Date | string
  }

  export type PartUpsertWithWhereUniqueWithoutTeamInput = {
    where: PartWhereUniqueInput
    update: XOR<PartUpdateWithoutTeamInput, PartUncheckedUpdateWithoutTeamInput>
    create: XOR<PartCreateWithoutTeamInput, PartUncheckedCreateWithoutTeamInput>
  }

  export type PartUpdateWithWhereUniqueWithoutTeamInput = {
    where: PartWhereUniqueInput
    data: XOR<PartUpdateWithoutTeamInput, PartUncheckedUpdateWithoutTeamInput>
  }

  export type PartUpdateManyWithWhereWithoutTeamInput = {
    where: PartScalarWhereInput
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyWithoutTeamInput>
  }

  export type PartScalarWhereInput = {
    AND?: PartScalarWhereInput | PartScalarWhereInput[]
    OR?: PartScalarWhereInput[]
    NOT?: PartScalarWhereInput | PartScalarWhereInput[]
    id?: IntFilter<"Part"> | number
    reference?: StringFilter<"Part"> | string
    type?: StringFilter<"Part"> | string
    quantity?: IntFilter<"Part"> | number
    teamId?: IntFilter<"Part"> | number
  }

  export type ResultUpsertWithWhereUniqueWithoutTeamInput = {
    where: ResultWhereUniqueInput
    update: XOR<ResultUpdateWithoutTeamInput, ResultUncheckedUpdateWithoutTeamInput>
    create: XOR<ResultCreateWithoutTeamInput, ResultUncheckedCreateWithoutTeamInput>
  }

  export type ResultUpdateWithWhereUniqueWithoutTeamInput = {
    where: ResultWhereUniqueInput
    data: XOR<ResultUpdateWithoutTeamInput, ResultUncheckedUpdateWithoutTeamInput>
  }

  export type ResultUpdateManyWithWhereWithoutTeamInput = {
    where: ResultScalarWhereInput
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyWithoutTeamInput>
  }

  export type IncidentUpsertWithWhereUniqueWithoutTeamInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutTeamInput, IncidentUncheckedUpdateWithoutTeamInput>
    create: XOR<IncidentCreateWithoutTeamInput, IncidentUncheckedCreateWithoutTeamInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutTeamInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutTeamInput, IncidentUncheckedUpdateWithoutTeamInput>
  }

  export type IncidentUpdateManyWithWhereWithoutTeamInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutTeamInput>
  }

  export type ResultCreateManyCarInput = {
    id?: number
    position?: number | null
    points?: number | null
    pilotId: number
    grandPrixId: number
    teamId: number
    createdAt?: Date | string
  }

  export type IncidentCreateManyCarInput = {
    id?: number
    type: string
    description?: string | null
    date?: Date | string
    engineId?: number | null
    partId?: number | null
    pilotId?: number | null
    teamId: number
    grandPrixId?: number | null
    resolved?: boolean
  }

  export type ResultUpdateWithoutCarInput = {
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pilot?: MemberUpdateOneRequiredWithoutResultsNestedInput
    grandPrix?: GrandPrixUpdateOneRequiredWithoutResultsNestedInput
    team?: TeamUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResultUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: IntFieldUpdateOperationsInput | number
    grandPrixId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultUncheckedUpdateManyWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: IntFieldUpdateOperationsInput | number
    grandPrixId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateWithoutCarInput = {
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    team?: TeamUpdateOneRequiredWithoutIncidentsNestedInput
    engine?: EngineUpdateOneWithoutIncidentsNestedInput
    part?: PartUpdateOneWithoutIncidentsNestedInput
    pilot?: MemberUpdateOneWithoutIncidentsNestedInput
    grandPrix?: GrandPrixUpdateOneWithoutIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    engineId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: IntFieldUpdateOperationsInput | number
    grandPrixId?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IncidentUncheckedUpdateManyWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    engineId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: IntFieldUpdateOperationsInput | number
    grandPrixId?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IncidentCreateManyEngineInput = {
    id?: number
    type: string
    description?: string | null
    date?: Date | string
    carId?: number | null
    partId?: number | null
    pilotId?: number | null
    teamId: number
    grandPrixId?: number | null
    resolved?: boolean
  }

  export type IncidentUpdateWithoutEngineInput = {
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    team?: TeamUpdateOneRequiredWithoutIncidentsNestedInput
    car?: CarUpdateOneWithoutIncidentsNestedInput
    part?: PartUpdateOneWithoutIncidentsNestedInput
    pilot?: MemberUpdateOneWithoutIncidentsNestedInput
    grandPrix?: GrandPrixUpdateOneWithoutIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateWithoutEngineInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: IntFieldUpdateOperationsInput | number
    grandPrixId?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IncidentUncheckedUpdateManyWithoutEngineInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: IntFieldUpdateOperationsInput | number
    grandPrixId?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResultCreateManyGrandPrixInput = {
    id?: number
    position?: number | null
    points?: number | null
    pilotId: number
    carId: number
    teamId: number
    createdAt?: Date | string
  }

  export type IncidentCreateManyGrandPrixInput = {
    id?: number
    type: string
    description?: string | null
    date?: Date | string
    carId?: number | null
    engineId?: number | null
    partId?: number | null
    pilotId?: number | null
    teamId: number
    resolved?: boolean
  }

  export type ResultUpdateWithoutGrandPrixInput = {
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pilot?: MemberUpdateOneRequiredWithoutResultsNestedInput
    car?: CarUpdateOneRequiredWithoutResultsNestedInput
    team?: TeamUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResultUncheckedUpdateWithoutGrandPrixInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultUncheckedUpdateManyWithoutGrandPrixInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateWithoutGrandPrixInput = {
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    team?: TeamUpdateOneRequiredWithoutIncidentsNestedInput
    car?: CarUpdateOneWithoutIncidentsNestedInput
    engine?: EngineUpdateOneWithoutIncidentsNestedInput
    part?: PartUpdateOneWithoutIncidentsNestedInput
    pilot?: MemberUpdateOneWithoutIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateWithoutGrandPrixInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    engineId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: IntFieldUpdateOperationsInput | number
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IncidentUncheckedUpdateManyWithoutGrandPrixInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    engineId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: IntFieldUpdateOperationsInput | number
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IncidentCreateManyPilotInput = {
    id?: number
    type: string
    description?: string | null
    date?: Date | string
    carId?: number | null
    engineId?: number | null
    partId?: number | null
    teamId: number
    grandPrixId?: number | null
    resolved?: boolean
  }

  export type ResultCreateManyPilotInput = {
    id?: number
    position?: number | null
    points?: number | null
    carId: number
    grandPrixId: number
    teamId: number
    createdAt?: Date | string
  }

  export type CarCreateManyPilotInput = {
    id?: number
    chassisNum: string
    model: string
    teamId: number
    createdAt?: Date | string
  }

  export type IncidentUpdateWithoutPilotInput = {
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    team?: TeamUpdateOneRequiredWithoutIncidentsNestedInput
    car?: CarUpdateOneWithoutIncidentsNestedInput
    engine?: EngineUpdateOneWithoutIncidentsNestedInput
    part?: PartUpdateOneWithoutIncidentsNestedInput
    grandPrix?: GrandPrixUpdateOneWithoutIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateWithoutPilotInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    engineId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: IntFieldUpdateOperationsInput | number
    grandPrixId?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IncidentUncheckedUpdateManyWithoutPilotInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    engineId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: IntFieldUpdateOperationsInput | number
    grandPrixId?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResultUpdateWithoutPilotInput = {
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutResultsNestedInput
    grandPrix?: GrandPrixUpdateOneRequiredWithoutResultsNestedInput
    team?: TeamUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResultUncheckedUpdateWithoutPilotInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    carId?: IntFieldUpdateOperationsInput | number
    grandPrixId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultUncheckedUpdateManyWithoutPilotInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    carId?: IntFieldUpdateOperationsInput | number
    grandPrixId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUpdateWithoutPilotInput = {
    chassisNum?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutCarsNestedInput
    results?: ResultUpdateManyWithoutCarNestedInput
    incidents?: IncidentUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutPilotInput = {
    id?: IntFieldUpdateOperationsInput | number
    chassisNum?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    teamId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ResultUncheckedUpdateManyWithoutCarNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateManyWithoutPilotInput = {
    id?: IntFieldUpdateOperationsInput | number
    chassisNum?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    teamId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentCreateManyPartInput = {
    id?: number
    type: string
    description?: string | null
    date?: Date | string
    carId?: number | null
    engineId?: number | null
    pilotId?: number | null
    teamId: number
    grandPrixId?: number | null
    resolved?: boolean
  }

  export type IncidentUpdateWithoutPartInput = {
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    team?: TeamUpdateOneRequiredWithoutIncidentsNestedInput
    car?: CarUpdateOneWithoutIncidentsNestedInput
    engine?: EngineUpdateOneWithoutIncidentsNestedInput
    pilot?: MemberUpdateOneWithoutIncidentsNestedInput
    grandPrix?: GrandPrixUpdateOneWithoutIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateWithoutPartInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    engineId?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: IntFieldUpdateOperationsInput | number
    grandPrixId?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IncidentUncheckedUpdateManyWithoutPartInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    engineId?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: IntFieldUpdateOperationsInput | number
    grandPrixId?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MemberCreateManyTeamInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    nationality?: string | null
    age?: number | null
    avatarUrl?: string | null
    createdAt?: Date | string
  }

  export type CarCreateManyTeamInput = {
    id?: number
    chassisNum: string
    model: string
    pilotId: number
    createdAt?: Date | string
  }

  export type EngineCreateManyTeamInput = {
    id?: number
    code: string
    state: string
    createdAt?: Date | string
  }

  export type PartCreateManyTeamInput = {
    id?: number
    reference: string
    type: string
    quantity: number
  }

  export type ResultCreateManyTeamInput = {
    id?: number
    position?: number | null
    points?: number | null
    pilotId: number
    carId: number
    grandPrixId: number
    createdAt?: Date | string
  }

  export type IncidentCreateManyTeamInput = {
    id?: number
    type: string
    description?: string | null
    date?: Date | string
    carId?: number | null
    engineId?: number | null
    partId?: number | null
    pilotId?: number | null
    grandPrixId?: number | null
    resolved?: boolean
  }

  export type MemberUpdateWithoutTeamInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUpdateManyWithoutPilotNestedInput
    results?: ResultUpdateManyWithoutPilotNestedInput
    cars?: CarUpdateManyWithoutPilotNestedInput
  }

  export type MemberUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUncheckedUpdateManyWithoutPilotNestedInput
    results?: ResultUncheckedUpdateManyWithoutPilotNestedInput
    cars?: CarUncheckedUpdateManyWithoutPilotNestedInput
  }

  export type MemberUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUpdateWithoutTeamInput = {
    chassisNum?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pilot?: MemberUpdateOneRequiredWithoutCarsNestedInput
    results?: ResultUpdateManyWithoutCarNestedInput
    incidents?: IncidentUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    chassisNum?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    pilotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ResultUncheckedUpdateManyWithoutCarNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    chassisNum?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    pilotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngineUpdateWithoutTeamInput = {
    code?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUpdateManyWithoutEngineNestedInput
  }

  export type EngineUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUncheckedUpdateManyWithoutEngineNestedInput
  }

  export type EngineUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartUpdateWithoutTeamInput = {
    reference?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    incidents?: IncidentUpdateManyWithoutPartNestedInput
  }

  export type PartUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    incidents?: IncidentUncheckedUpdateManyWithoutPartNestedInput
  }

  export type PartUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ResultUpdateWithoutTeamInput = {
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pilot?: MemberUpdateOneRequiredWithoutResultsNestedInput
    car?: CarUpdateOneRequiredWithoutResultsNestedInput
    grandPrix?: GrandPrixUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResultUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    grandPrixId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    grandPrixId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateWithoutTeamInput = {
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    car?: CarUpdateOneWithoutIncidentsNestedInput
    engine?: EngineUpdateOneWithoutIncidentsNestedInput
    part?: PartUpdateOneWithoutIncidentsNestedInput
    pilot?: MemberUpdateOneWithoutIncidentsNestedInput
    grandPrix?: GrandPrixUpdateOneWithoutIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    engineId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: NullableIntFieldUpdateOperationsInput | number | null
    grandPrixId?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IncidentUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    engineId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: NullableIntFieldUpdateOperationsInput | number | null
    grandPrixId?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}