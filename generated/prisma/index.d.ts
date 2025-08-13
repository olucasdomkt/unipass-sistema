
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
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Colaborador
 * 
 */
export type Colaborador = $Result.DefaultSelection<Prisma.$ColaboradorPayload>
/**
 * Model Plataforma
 * 
 */
export type Plataforma = $Result.DefaultSelection<Prisma.$PlataformaPayload>
/**
 * Model AcessoPlataforma
 * 
 */
export type AcessoPlataforma = $Result.DefaultSelection<Prisma.$AcessoPlataformaPayload>
/**
 * Model HistoricoSenha
 * 
 */
export type HistoricoSenha = $Result.DefaultSelection<Prisma.$HistoricoSenhaPayload>
/**
 * Model VisualizacaoSenha
 * 
 */
export type VisualizacaoSenha = $Result.DefaultSelection<Prisma.$VisualizacaoSenhaPayload>
/**
 * Model TicketSenha
 * 
 */
export type TicketSenha = $Result.DefaultSelection<Prisma.$TicketSenhaPayload>
/**
 * Model CustoPlataforma
 * 
 */
export type CustoPlataforma = $Result.DefaultSelection<Prisma.$CustoPlataformaPayload>
/**
 * Model ConfiguracaoSistema
 * 
 */
export type ConfiguracaoSistema = $Result.DefaultSelection<Prisma.$ConfiguracaoSistemaPayload>
/**
 * Model LogAcesso
 * 
 */
export type LogAcesso = $Result.DefaultSelection<Prisma.$LogAcessoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusColaborador: {
  ATIVO: 'ATIVO',
  DEMITIDO: 'DEMITIDO',
  SUSPENSO: 'SUSPENSO'
};

export type StatusColaborador = (typeof StatusColaborador)[keyof typeof StatusColaborador]


export const TipoPlataforma: {
  MIDIA: 'MIDIA',
  CRM: 'CRM',
  DOMINIO: 'DOMINIO',
  EMAIL: 'EMAIL',
  DESIGN: 'DESIGN',
  GESTAO: 'GESTAO',
  ANALISE: 'ANALISE',
  HOSPEDAGEM: 'HOSPEDAGEM',
  OUTROS: 'OUTROS'
};

export type TipoPlataforma = (typeof TipoPlataforma)[keyof typeof TipoPlataforma]


export const VinculoPlataforma: {
  UNICO: 'UNICO',
  CLIENTE: 'CLIENTE'
};

export type VinculoPlataforma = (typeof VinculoPlataforma)[keyof typeof VinculoPlataforma]


export const StatusTicket: {
  ABERTO: 'ABERTO',
  EM_ANDAMENTO: 'EM_ANDAMENTO',
  RESOLVIDO: 'RESOLVIDO',
  CANCELADO: 'CANCELADO'
};

export type StatusTicket = (typeof StatusTicket)[keyof typeof StatusTicket]

}

export type StatusColaborador = $Enums.StatusColaborador

export const StatusColaborador: typeof $Enums.StatusColaborador

export type TipoPlataforma = $Enums.TipoPlataforma

export const TipoPlataforma: typeof $Enums.TipoPlataforma

export type VinculoPlataforma = $Enums.VinculoPlataforma

export const VinculoPlataforma: typeof $Enums.VinculoPlataforma

export type StatusTicket = $Enums.StatusTicket

export const StatusTicket: typeof $Enums.StatusTicket

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
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
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
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
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.colaborador`: Exposes CRUD operations for the **Colaborador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colaboradors
    * const colaboradors = await prisma.colaborador.findMany()
    * ```
    */
  get colaborador(): Prisma.ColaboradorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plataforma`: Exposes CRUD operations for the **Plataforma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plataformas
    * const plataformas = await prisma.plataforma.findMany()
    * ```
    */
  get plataforma(): Prisma.PlataformaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.acessoPlataforma`: Exposes CRUD operations for the **AcessoPlataforma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AcessoPlataformas
    * const acessoPlataformas = await prisma.acessoPlataforma.findMany()
    * ```
    */
  get acessoPlataforma(): Prisma.AcessoPlataformaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historicoSenha`: Exposes CRUD operations for the **HistoricoSenha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoricoSenhas
    * const historicoSenhas = await prisma.historicoSenha.findMany()
    * ```
    */
  get historicoSenha(): Prisma.HistoricoSenhaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visualizacaoSenha`: Exposes CRUD operations for the **VisualizacaoSenha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisualizacaoSenhas
    * const visualizacaoSenhas = await prisma.visualizacaoSenha.findMany()
    * ```
    */
  get visualizacaoSenha(): Prisma.VisualizacaoSenhaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketSenha`: Exposes CRUD operations for the **TicketSenha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketSenhas
    * const ticketSenhas = await prisma.ticketSenha.findMany()
    * ```
    */
  get ticketSenha(): Prisma.TicketSenhaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.custoPlataforma`: Exposes CRUD operations for the **CustoPlataforma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustoPlataformas
    * const custoPlataformas = await prisma.custoPlataforma.findMany()
    * ```
    */
  get custoPlataforma(): Prisma.CustoPlataformaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.configuracaoSistema`: Exposes CRUD operations for the **ConfiguracaoSistema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConfiguracaoSistemas
    * const configuracaoSistemas = await prisma.configuracaoSistema.findMany()
    * ```
    */
  get configuracaoSistema(): Prisma.ConfiguracaoSistemaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logAcesso`: Exposes CRUD operations for the **LogAcesso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogAcessos
    * const logAcessos = await prisma.logAcesso.findMany()
    * ```
    */
  get logAcesso(): Prisma.LogAcessoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    Cliente: 'Cliente',
    Colaborador: 'Colaborador',
    Plataforma: 'Plataforma',
    AcessoPlataforma: 'AcessoPlataforma',
    HistoricoSenha: 'HistoricoSenha',
    VisualizacaoSenha: 'VisualizacaoSenha',
    TicketSenha: 'TicketSenha',
    CustoPlataforma: 'CustoPlataforma',
    ConfiguracaoSistema: 'ConfiguracaoSistema',
    LogAcesso: 'LogAcesso'
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
      modelProps: "cliente" | "colaborador" | "plataforma" | "acessoPlataforma" | "historicoSenha" | "visualizacaoSenha" | "ticketSenha" | "custoPlataforma" | "configuracaoSistema" | "logAcesso"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Colaborador: {
        payload: Prisma.$ColaboradorPayload<ExtArgs>
        fields: Prisma.ColaboradorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColaboradorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColaboradorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>
          }
          findFirst: {
            args: Prisma.ColaboradorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColaboradorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>
          }
          findMany: {
            args: Prisma.ColaboradorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>[]
          }
          create: {
            args: Prisma.ColaboradorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>
          }
          createMany: {
            args: Prisma.ColaboradorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ColaboradorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>[]
          }
          delete: {
            args: Prisma.ColaboradorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>
          }
          update: {
            args: Prisma.ColaboradorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>
          }
          deleteMany: {
            args: Prisma.ColaboradorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColaboradorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ColaboradorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>[]
          }
          upsert: {
            args: Prisma.ColaboradorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>
          }
          aggregate: {
            args: Prisma.ColaboradorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColaborador>
          }
          groupBy: {
            args: Prisma.ColaboradorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColaboradorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColaboradorCountArgs<ExtArgs>
            result: $Utils.Optional<ColaboradorCountAggregateOutputType> | number
          }
        }
      }
      Plataforma: {
        payload: Prisma.$PlataformaPayload<ExtArgs>
        fields: Prisma.PlataformaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlataformaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlataformaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          findFirst: {
            args: Prisma.PlataformaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlataformaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          findMany: {
            args: Prisma.PlataformaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>[]
          }
          create: {
            args: Prisma.PlataformaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          createMany: {
            args: Prisma.PlataformaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlataformaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>[]
          }
          delete: {
            args: Prisma.PlataformaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          update: {
            args: Prisma.PlataformaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          deleteMany: {
            args: Prisma.PlataformaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlataformaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlataformaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>[]
          }
          upsert: {
            args: Prisma.PlataformaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          aggregate: {
            args: Prisma.PlataformaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlataforma>
          }
          groupBy: {
            args: Prisma.PlataformaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlataformaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlataformaCountArgs<ExtArgs>
            result: $Utils.Optional<PlataformaCountAggregateOutputType> | number
          }
        }
      }
      AcessoPlataforma: {
        payload: Prisma.$AcessoPlataformaPayload<ExtArgs>
        fields: Prisma.AcessoPlataformaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcessoPlataformaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoPlataformaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcessoPlataformaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoPlataformaPayload>
          }
          findFirst: {
            args: Prisma.AcessoPlataformaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoPlataformaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcessoPlataformaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoPlataformaPayload>
          }
          findMany: {
            args: Prisma.AcessoPlataformaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoPlataformaPayload>[]
          }
          create: {
            args: Prisma.AcessoPlataformaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoPlataformaPayload>
          }
          createMany: {
            args: Prisma.AcessoPlataformaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AcessoPlataformaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoPlataformaPayload>[]
          }
          delete: {
            args: Prisma.AcessoPlataformaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoPlataformaPayload>
          }
          update: {
            args: Prisma.AcessoPlataformaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoPlataformaPayload>
          }
          deleteMany: {
            args: Prisma.AcessoPlataformaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcessoPlataformaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AcessoPlataformaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoPlataformaPayload>[]
          }
          upsert: {
            args: Prisma.AcessoPlataformaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoPlataformaPayload>
          }
          aggregate: {
            args: Prisma.AcessoPlataformaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcessoPlataforma>
          }
          groupBy: {
            args: Prisma.AcessoPlataformaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcessoPlataformaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcessoPlataformaCountArgs<ExtArgs>
            result: $Utils.Optional<AcessoPlataformaCountAggregateOutputType> | number
          }
        }
      }
      HistoricoSenha: {
        payload: Prisma.$HistoricoSenhaPayload<ExtArgs>
        fields: Prisma.HistoricoSenhaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoricoSenhaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoSenhaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoricoSenhaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoSenhaPayload>
          }
          findFirst: {
            args: Prisma.HistoricoSenhaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoSenhaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoricoSenhaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoSenhaPayload>
          }
          findMany: {
            args: Prisma.HistoricoSenhaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoSenhaPayload>[]
          }
          create: {
            args: Prisma.HistoricoSenhaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoSenhaPayload>
          }
          createMany: {
            args: Prisma.HistoricoSenhaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoricoSenhaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoSenhaPayload>[]
          }
          delete: {
            args: Prisma.HistoricoSenhaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoSenhaPayload>
          }
          update: {
            args: Prisma.HistoricoSenhaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoSenhaPayload>
          }
          deleteMany: {
            args: Prisma.HistoricoSenhaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoricoSenhaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoricoSenhaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoSenhaPayload>[]
          }
          upsert: {
            args: Prisma.HistoricoSenhaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoSenhaPayload>
          }
          aggregate: {
            args: Prisma.HistoricoSenhaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoricoSenha>
          }
          groupBy: {
            args: Prisma.HistoricoSenhaGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoricoSenhaGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoricoSenhaCountArgs<ExtArgs>
            result: $Utils.Optional<HistoricoSenhaCountAggregateOutputType> | number
          }
        }
      }
      VisualizacaoSenha: {
        payload: Prisma.$VisualizacaoSenhaPayload<ExtArgs>
        fields: Prisma.VisualizacaoSenhaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisualizacaoSenhaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualizacaoSenhaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisualizacaoSenhaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualizacaoSenhaPayload>
          }
          findFirst: {
            args: Prisma.VisualizacaoSenhaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualizacaoSenhaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisualizacaoSenhaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualizacaoSenhaPayload>
          }
          findMany: {
            args: Prisma.VisualizacaoSenhaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualizacaoSenhaPayload>[]
          }
          create: {
            args: Prisma.VisualizacaoSenhaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualizacaoSenhaPayload>
          }
          createMany: {
            args: Prisma.VisualizacaoSenhaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisualizacaoSenhaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualizacaoSenhaPayload>[]
          }
          delete: {
            args: Prisma.VisualizacaoSenhaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualizacaoSenhaPayload>
          }
          update: {
            args: Prisma.VisualizacaoSenhaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualizacaoSenhaPayload>
          }
          deleteMany: {
            args: Prisma.VisualizacaoSenhaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisualizacaoSenhaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisualizacaoSenhaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualizacaoSenhaPayload>[]
          }
          upsert: {
            args: Prisma.VisualizacaoSenhaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualizacaoSenhaPayload>
          }
          aggregate: {
            args: Prisma.VisualizacaoSenhaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisualizacaoSenha>
          }
          groupBy: {
            args: Prisma.VisualizacaoSenhaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisualizacaoSenhaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisualizacaoSenhaCountArgs<ExtArgs>
            result: $Utils.Optional<VisualizacaoSenhaCountAggregateOutputType> | number
          }
        }
      }
      TicketSenha: {
        payload: Prisma.$TicketSenhaPayload<ExtArgs>
        fields: Prisma.TicketSenhaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketSenhaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSenhaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketSenhaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSenhaPayload>
          }
          findFirst: {
            args: Prisma.TicketSenhaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSenhaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketSenhaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSenhaPayload>
          }
          findMany: {
            args: Prisma.TicketSenhaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSenhaPayload>[]
          }
          create: {
            args: Prisma.TicketSenhaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSenhaPayload>
          }
          createMany: {
            args: Prisma.TicketSenhaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketSenhaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSenhaPayload>[]
          }
          delete: {
            args: Prisma.TicketSenhaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSenhaPayload>
          }
          update: {
            args: Prisma.TicketSenhaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSenhaPayload>
          }
          deleteMany: {
            args: Prisma.TicketSenhaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketSenhaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketSenhaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSenhaPayload>[]
          }
          upsert: {
            args: Prisma.TicketSenhaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSenhaPayload>
          }
          aggregate: {
            args: Prisma.TicketSenhaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketSenha>
          }
          groupBy: {
            args: Prisma.TicketSenhaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketSenhaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketSenhaCountArgs<ExtArgs>
            result: $Utils.Optional<TicketSenhaCountAggregateOutputType> | number
          }
        }
      }
      CustoPlataforma: {
        payload: Prisma.$CustoPlataformaPayload<ExtArgs>
        fields: Prisma.CustoPlataformaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustoPlataformaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPlataformaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustoPlataformaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPlataformaPayload>
          }
          findFirst: {
            args: Prisma.CustoPlataformaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPlataformaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustoPlataformaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPlataformaPayload>
          }
          findMany: {
            args: Prisma.CustoPlataformaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPlataformaPayload>[]
          }
          create: {
            args: Prisma.CustoPlataformaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPlataformaPayload>
          }
          createMany: {
            args: Prisma.CustoPlataformaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustoPlataformaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPlataformaPayload>[]
          }
          delete: {
            args: Prisma.CustoPlataformaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPlataformaPayload>
          }
          update: {
            args: Prisma.CustoPlataformaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPlataformaPayload>
          }
          deleteMany: {
            args: Prisma.CustoPlataformaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustoPlataformaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustoPlataformaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPlataformaPayload>[]
          }
          upsert: {
            args: Prisma.CustoPlataformaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPlataformaPayload>
          }
          aggregate: {
            args: Prisma.CustoPlataformaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustoPlataforma>
          }
          groupBy: {
            args: Prisma.CustoPlataformaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustoPlataformaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustoPlataformaCountArgs<ExtArgs>
            result: $Utils.Optional<CustoPlataformaCountAggregateOutputType> | number
          }
        }
      }
      ConfiguracaoSistema: {
        payload: Prisma.$ConfiguracaoSistemaPayload<ExtArgs>
        fields: Prisma.ConfiguracaoSistemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfiguracaoSistemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoSistemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfiguracaoSistemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoSistemaPayload>
          }
          findFirst: {
            args: Prisma.ConfiguracaoSistemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoSistemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfiguracaoSistemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoSistemaPayload>
          }
          findMany: {
            args: Prisma.ConfiguracaoSistemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoSistemaPayload>[]
          }
          create: {
            args: Prisma.ConfiguracaoSistemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoSistemaPayload>
          }
          createMany: {
            args: Prisma.ConfiguracaoSistemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfiguracaoSistemaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoSistemaPayload>[]
          }
          delete: {
            args: Prisma.ConfiguracaoSistemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoSistemaPayload>
          }
          update: {
            args: Prisma.ConfiguracaoSistemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoSistemaPayload>
          }
          deleteMany: {
            args: Prisma.ConfiguracaoSistemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfiguracaoSistemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConfiguracaoSistemaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoSistemaPayload>[]
          }
          upsert: {
            args: Prisma.ConfiguracaoSistemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoSistemaPayload>
          }
          aggregate: {
            args: Prisma.ConfiguracaoSistemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfiguracaoSistema>
          }
          groupBy: {
            args: Prisma.ConfiguracaoSistemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracaoSistemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfiguracaoSistemaCountArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracaoSistemaCountAggregateOutputType> | number
          }
        }
      }
      LogAcesso: {
        payload: Prisma.$LogAcessoPayload<ExtArgs>
        fields: Prisma.LogAcessoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogAcessoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcessoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogAcessoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcessoPayload>
          }
          findFirst: {
            args: Prisma.LogAcessoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcessoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogAcessoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcessoPayload>
          }
          findMany: {
            args: Prisma.LogAcessoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcessoPayload>[]
          }
          create: {
            args: Prisma.LogAcessoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcessoPayload>
          }
          createMany: {
            args: Prisma.LogAcessoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogAcessoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcessoPayload>[]
          }
          delete: {
            args: Prisma.LogAcessoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcessoPayload>
          }
          update: {
            args: Prisma.LogAcessoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcessoPayload>
          }
          deleteMany: {
            args: Prisma.LogAcessoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogAcessoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogAcessoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcessoPayload>[]
          }
          upsert: {
            args: Prisma.LogAcessoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcessoPayload>
          }
          aggregate: {
            args: Prisma.LogAcessoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogAcesso>
          }
          groupBy: {
            args: Prisma.LogAcessoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogAcessoGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogAcessoCountArgs<ExtArgs>
            result: $Utils.Optional<LogAcessoCountAggregateOutputType> | number
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
    cliente?: ClienteOmit
    colaborador?: ColaboradorOmit
    plataforma?: PlataformaOmit
    acessoPlataforma?: AcessoPlataformaOmit
    historicoSenha?: HistoricoSenhaOmit
    visualizacaoSenha?: VisualizacaoSenhaOmit
    ticketSenha?: TicketSenhaOmit
    custoPlataforma?: CustoPlataformaOmit
    configuracaoSistema?: ConfiguracaoSistemaOmit
    logAcesso?: LogAcessoOmit
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
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    plataformas: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plataformas?: boolean | ClienteCountOutputTypeCountPlataformasArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPlataformasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlataformaWhereInput
  }


  /**
   * Count Type ColaboradorCountOutputType
   */

  export type ColaboradorCountOutputType = {
    acessos: number
    historicoSenhas: number
    visualizacoesSenha: number
    ticketsSenha: number
  }

  export type ColaboradorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acessos?: boolean | ColaboradorCountOutputTypeCountAcessosArgs
    historicoSenhas?: boolean | ColaboradorCountOutputTypeCountHistoricoSenhasArgs
    visualizacoesSenha?: boolean | ColaboradorCountOutputTypeCountVisualizacoesSenhaArgs
    ticketsSenha?: boolean | ColaboradorCountOutputTypeCountTicketsSenhaArgs
  }

  // Custom InputTypes
  /**
   * ColaboradorCountOutputType without action
   */
  export type ColaboradorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColaboradorCountOutputType
     */
    select?: ColaboradorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ColaboradorCountOutputType without action
   */
  export type ColaboradorCountOutputTypeCountAcessosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcessoPlataformaWhereInput
  }

  /**
   * ColaboradorCountOutputType without action
   */
  export type ColaboradorCountOutputTypeCountHistoricoSenhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoSenhaWhereInput
  }

  /**
   * ColaboradorCountOutputType without action
   */
  export type ColaboradorCountOutputTypeCountVisualizacoesSenhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisualizacaoSenhaWhereInput
  }

  /**
   * ColaboradorCountOutputType without action
   */
  export type ColaboradorCountOutputTypeCountTicketsSenhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketSenhaWhereInput
  }


  /**
   * Count Type PlataformaCountOutputType
   */

  export type PlataformaCountOutputType = {
    acessos: number
    historicoSenhas: number
    custos: number
    visualizacoesSenha: number
    ticketsSenha: number
  }

  export type PlataformaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acessos?: boolean | PlataformaCountOutputTypeCountAcessosArgs
    historicoSenhas?: boolean | PlataformaCountOutputTypeCountHistoricoSenhasArgs
    custos?: boolean | PlataformaCountOutputTypeCountCustosArgs
    visualizacoesSenha?: boolean | PlataformaCountOutputTypeCountVisualizacoesSenhaArgs
    ticketsSenha?: boolean | PlataformaCountOutputTypeCountTicketsSenhaArgs
  }

  // Custom InputTypes
  /**
   * PlataformaCountOutputType without action
   */
  export type PlataformaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlataformaCountOutputType
     */
    select?: PlataformaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlataformaCountOutputType without action
   */
  export type PlataformaCountOutputTypeCountAcessosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcessoPlataformaWhereInput
  }

  /**
   * PlataformaCountOutputType without action
   */
  export type PlataformaCountOutputTypeCountHistoricoSenhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoSenhaWhereInput
  }

  /**
   * PlataformaCountOutputType without action
   */
  export type PlataformaCountOutputTypeCountCustosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustoPlataformaWhereInput
  }

  /**
   * PlataformaCountOutputType without action
   */
  export type PlataformaCountOutputTypeCountVisualizacoesSenhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisualizacaoSenhaWhereInput
  }

  /**
   * PlataformaCountOutputType without action
   */
  export type PlataformaCountOutputTypeCountTicketsSenhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketSenhaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefone: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: string
    nome: string
    email: string | null
    telefone: string | null
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plataformas?: boolean | Cliente$plataformasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "ativo" | "createdAt" | "updatedAt", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plataformas?: boolean | Cliente$plataformasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      plataformas: Prisma.$PlataformaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string | null
      telefone: string | null
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plataformas<T extends Cliente$plataformasArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$plataformasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'String'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly telefone: FieldRef<"Cliente", 'String'>
    readonly ativo: FieldRef<"Cliente", 'Boolean'>
    readonly createdAt: FieldRef<"Cliente", 'DateTime'>
    readonly updatedAt: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.plataformas
   */
  export type Cliente$plataformasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    where?: PlataformaWhereInput
    orderBy?: PlataformaOrderByWithRelationInput | PlataformaOrderByWithRelationInput[]
    cursor?: PlataformaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlataformaScalarFieldEnum | PlataformaScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Colaborador
   */

  export type AggregateColaborador = {
    _count: ColaboradorCountAggregateOutputType | null
    _min: ColaboradorMinAggregateOutputType | null
    _max: ColaboradorMaxAggregateOutputType | null
  }

  export type ColaboradorMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    cargo: string | null
    status: $Enums.StatusColaborador | null
    dataEntrada: Date | null
    dataSaida: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ColaboradorMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    cargo: string | null
    status: $Enums.StatusColaborador | null
    dataEntrada: Date | null
    dataSaida: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ColaboradorCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    cargo: number
    status: number
    dataEntrada: number
    dataSaida: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ColaboradorMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cargo?: true
    status?: true
    dataEntrada?: true
    dataSaida?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ColaboradorMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cargo?: true
    status?: true
    dataEntrada?: true
    dataSaida?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ColaboradorCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cargo?: true
    status?: true
    dataEntrada?: true
    dataSaida?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ColaboradorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colaborador to aggregate.
     */
    where?: ColaboradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colaboradors to fetch.
     */
    orderBy?: ColaboradorOrderByWithRelationInput | ColaboradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColaboradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colaboradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colaboradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Colaboradors
    **/
    _count?: true | ColaboradorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColaboradorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColaboradorMaxAggregateInputType
  }

  export type GetColaboradorAggregateType<T extends ColaboradorAggregateArgs> = {
        [P in keyof T & keyof AggregateColaborador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColaborador[P]>
      : GetScalarType<T[P], AggregateColaborador[P]>
  }




  export type ColaboradorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColaboradorWhereInput
    orderBy?: ColaboradorOrderByWithAggregationInput | ColaboradorOrderByWithAggregationInput[]
    by: ColaboradorScalarFieldEnum[] | ColaboradorScalarFieldEnum
    having?: ColaboradorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColaboradorCountAggregateInputType | true
    _min?: ColaboradorMinAggregateInputType
    _max?: ColaboradorMaxAggregateInputType
  }

  export type ColaboradorGroupByOutputType = {
    id: string
    nome: string
    email: string
    cargo: string
    status: $Enums.StatusColaborador
    dataEntrada: Date
    dataSaida: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ColaboradorCountAggregateOutputType | null
    _min: ColaboradorMinAggregateOutputType | null
    _max: ColaboradorMaxAggregateOutputType | null
  }

  type GetColaboradorGroupByPayload<T extends ColaboradorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColaboradorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColaboradorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColaboradorGroupByOutputType[P]>
            : GetScalarType<T[P], ColaboradorGroupByOutputType[P]>
        }
      >
    >


  export type ColaboradorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    cargo?: boolean
    status?: boolean
    dataEntrada?: boolean
    dataSaida?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    acessos?: boolean | Colaborador$acessosArgs<ExtArgs>
    historicoSenhas?: boolean | Colaborador$historicoSenhasArgs<ExtArgs>
    visualizacoesSenha?: boolean | Colaborador$visualizacoesSenhaArgs<ExtArgs>
    ticketsSenha?: boolean | Colaborador$ticketsSenhaArgs<ExtArgs>
    _count?: boolean | ColaboradorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["colaborador"]>

  export type ColaboradorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    cargo?: boolean
    status?: boolean
    dataEntrada?: boolean
    dataSaida?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["colaborador"]>

  export type ColaboradorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    cargo?: boolean
    status?: boolean
    dataEntrada?: boolean
    dataSaida?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["colaborador"]>

  export type ColaboradorSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    cargo?: boolean
    status?: boolean
    dataEntrada?: boolean
    dataSaida?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ColaboradorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "cargo" | "status" | "dataEntrada" | "dataSaida" | "createdAt" | "updatedAt", ExtArgs["result"]["colaborador"]>
  export type ColaboradorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acessos?: boolean | Colaborador$acessosArgs<ExtArgs>
    historicoSenhas?: boolean | Colaborador$historicoSenhasArgs<ExtArgs>
    visualizacoesSenha?: boolean | Colaborador$visualizacoesSenhaArgs<ExtArgs>
    ticketsSenha?: boolean | Colaborador$ticketsSenhaArgs<ExtArgs>
    _count?: boolean | ColaboradorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ColaboradorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ColaboradorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ColaboradorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Colaborador"
    objects: {
      acessos: Prisma.$AcessoPlataformaPayload<ExtArgs>[]
      historicoSenhas: Prisma.$HistoricoSenhaPayload<ExtArgs>[]
      visualizacoesSenha: Prisma.$VisualizacaoSenhaPayload<ExtArgs>[]
      ticketsSenha: Prisma.$TicketSenhaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      cargo: string
      status: $Enums.StatusColaborador
      dataEntrada: Date
      dataSaida: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["colaborador"]>
    composites: {}
  }

  type ColaboradorGetPayload<S extends boolean | null | undefined | ColaboradorDefaultArgs> = $Result.GetResult<Prisma.$ColaboradorPayload, S>

  type ColaboradorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ColaboradorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColaboradorCountAggregateInputType | true
    }

  export interface ColaboradorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Colaborador'], meta: { name: 'Colaborador' } }
    /**
     * Find zero or one Colaborador that matches the filter.
     * @param {ColaboradorFindUniqueArgs} args - Arguments to find a Colaborador
     * @example
     * // Get one Colaborador
     * const colaborador = await prisma.colaborador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColaboradorFindUniqueArgs>(args: SelectSubset<T, ColaboradorFindUniqueArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Colaborador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColaboradorFindUniqueOrThrowArgs} args - Arguments to find a Colaborador
     * @example
     * // Get one Colaborador
     * const colaborador = await prisma.colaborador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColaboradorFindUniqueOrThrowArgs>(args: SelectSubset<T, ColaboradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Colaborador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboradorFindFirstArgs} args - Arguments to find a Colaborador
     * @example
     * // Get one Colaborador
     * const colaborador = await prisma.colaborador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColaboradorFindFirstArgs>(args?: SelectSubset<T, ColaboradorFindFirstArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Colaborador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboradorFindFirstOrThrowArgs} args - Arguments to find a Colaborador
     * @example
     * // Get one Colaborador
     * const colaborador = await prisma.colaborador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColaboradorFindFirstOrThrowArgs>(args?: SelectSubset<T, ColaboradorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Colaboradors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboradorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colaboradors
     * const colaboradors = await prisma.colaborador.findMany()
     * 
     * // Get first 10 Colaboradors
     * const colaboradors = await prisma.colaborador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const colaboradorWithIdOnly = await prisma.colaborador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColaboradorFindManyArgs>(args?: SelectSubset<T, ColaboradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Colaborador.
     * @param {ColaboradorCreateArgs} args - Arguments to create a Colaborador.
     * @example
     * // Create one Colaborador
     * const Colaborador = await prisma.colaborador.create({
     *   data: {
     *     // ... data to create a Colaborador
     *   }
     * })
     * 
     */
    create<T extends ColaboradorCreateArgs>(args: SelectSubset<T, ColaboradorCreateArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Colaboradors.
     * @param {ColaboradorCreateManyArgs} args - Arguments to create many Colaboradors.
     * @example
     * // Create many Colaboradors
     * const colaborador = await prisma.colaborador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColaboradorCreateManyArgs>(args?: SelectSubset<T, ColaboradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Colaboradors and returns the data saved in the database.
     * @param {ColaboradorCreateManyAndReturnArgs} args - Arguments to create many Colaboradors.
     * @example
     * // Create many Colaboradors
     * const colaborador = await prisma.colaborador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Colaboradors and only return the `id`
     * const colaboradorWithIdOnly = await prisma.colaborador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ColaboradorCreateManyAndReturnArgs>(args?: SelectSubset<T, ColaboradorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Colaborador.
     * @param {ColaboradorDeleteArgs} args - Arguments to delete one Colaborador.
     * @example
     * // Delete one Colaborador
     * const Colaborador = await prisma.colaborador.delete({
     *   where: {
     *     // ... filter to delete one Colaborador
     *   }
     * })
     * 
     */
    delete<T extends ColaboradorDeleteArgs>(args: SelectSubset<T, ColaboradorDeleteArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Colaborador.
     * @param {ColaboradorUpdateArgs} args - Arguments to update one Colaborador.
     * @example
     * // Update one Colaborador
     * const colaborador = await prisma.colaborador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColaboradorUpdateArgs>(args: SelectSubset<T, ColaboradorUpdateArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Colaboradors.
     * @param {ColaboradorDeleteManyArgs} args - Arguments to filter Colaboradors to delete.
     * @example
     * // Delete a few Colaboradors
     * const { count } = await prisma.colaborador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColaboradorDeleteManyArgs>(args?: SelectSubset<T, ColaboradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colaboradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboradorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colaboradors
     * const colaborador = await prisma.colaborador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColaboradorUpdateManyArgs>(args: SelectSubset<T, ColaboradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colaboradors and returns the data updated in the database.
     * @param {ColaboradorUpdateManyAndReturnArgs} args - Arguments to update many Colaboradors.
     * @example
     * // Update many Colaboradors
     * const colaborador = await prisma.colaborador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Colaboradors and only return the `id`
     * const colaboradorWithIdOnly = await prisma.colaborador.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ColaboradorUpdateManyAndReturnArgs>(args: SelectSubset<T, ColaboradorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Colaborador.
     * @param {ColaboradorUpsertArgs} args - Arguments to update or create a Colaborador.
     * @example
     * // Update or create a Colaborador
     * const colaborador = await prisma.colaborador.upsert({
     *   create: {
     *     // ... data to create a Colaborador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Colaborador we want to update
     *   }
     * })
     */
    upsert<T extends ColaboradorUpsertArgs>(args: SelectSubset<T, ColaboradorUpsertArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Colaboradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboradorCountArgs} args - Arguments to filter Colaboradors to count.
     * @example
     * // Count the number of Colaboradors
     * const count = await prisma.colaborador.count({
     *   where: {
     *     // ... the filter for the Colaboradors we want to count
     *   }
     * })
    **/
    count<T extends ColaboradorCountArgs>(
      args?: Subset<T, ColaboradorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColaboradorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Colaborador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboradorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ColaboradorAggregateArgs>(args: Subset<T, ColaboradorAggregateArgs>): Prisma.PrismaPromise<GetColaboradorAggregateType<T>>

    /**
     * Group by Colaborador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboradorGroupByArgs} args - Group by arguments.
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
      T extends ColaboradorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColaboradorGroupByArgs['orderBy'] }
        : { orderBy?: ColaboradorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ColaboradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColaboradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Colaborador model
   */
  readonly fields: ColaboradorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Colaborador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColaboradorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    acessos<T extends Colaborador$acessosArgs<ExtArgs> = {}>(args?: Subset<T, Colaborador$acessosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcessoPlataformaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historicoSenhas<T extends Colaborador$historicoSenhasArgs<ExtArgs> = {}>(args?: Subset<T, Colaborador$historicoSenhasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoSenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visualizacoesSenha<T extends Colaborador$visualizacoesSenhaArgs<ExtArgs> = {}>(args?: Subset<T, Colaborador$visualizacoesSenhaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisualizacaoSenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticketsSenha<T extends Colaborador$ticketsSenhaArgs<ExtArgs> = {}>(args?: Subset<T, Colaborador$ticketsSenhaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketSenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Colaborador model
   */
  interface ColaboradorFieldRefs {
    readonly id: FieldRef<"Colaborador", 'String'>
    readonly nome: FieldRef<"Colaborador", 'String'>
    readonly email: FieldRef<"Colaborador", 'String'>
    readonly cargo: FieldRef<"Colaborador", 'String'>
    readonly status: FieldRef<"Colaborador", 'StatusColaborador'>
    readonly dataEntrada: FieldRef<"Colaborador", 'DateTime'>
    readonly dataSaida: FieldRef<"Colaborador", 'DateTime'>
    readonly createdAt: FieldRef<"Colaborador", 'DateTime'>
    readonly updatedAt: FieldRef<"Colaborador", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Colaborador findUnique
   */
  export type ColaboradorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * Filter, which Colaborador to fetch.
     */
    where: ColaboradorWhereUniqueInput
  }

  /**
   * Colaborador findUniqueOrThrow
   */
  export type ColaboradorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * Filter, which Colaborador to fetch.
     */
    where: ColaboradorWhereUniqueInput
  }

  /**
   * Colaborador findFirst
   */
  export type ColaboradorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * Filter, which Colaborador to fetch.
     */
    where?: ColaboradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colaboradors to fetch.
     */
    orderBy?: ColaboradorOrderByWithRelationInput | ColaboradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colaboradors.
     */
    cursor?: ColaboradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colaboradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colaboradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colaboradors.
     */
    distinct?: ColaboradorScalarFieldEnum | ColaboradorScalarFieldEnum[]
  }

  /**
   * Colaborador findFirstOrThrow
   */
  export type ColaboradorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * Filter, which Colaborador to fetch.
     */
    where?: ColaboradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colaboradors to fetch.
     */
    orderBy?: ColaboradorOrderByWithRelationInput | ColaboradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colaboradors.
     */
    cursor?: ColaboradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colaboradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colaboradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colaboradors.
     */
    distinct?: ColaboradorScalarFieldEnum | ColaboradorScalarFieldEnum[]
  }

  /**
   * Colaborador findMany
   */
  export type ColaboradorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * Filter, which Colaboradors to fetch.
     */
    where?: ColaboradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colaboradors to fetch.
     */
    orderBy?: ColaboradorOrderByWithRelationInput | ColaboradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Colaboradors.
     */
    cursor?: ColaboradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colaboradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colaboradors.
     */
    skip?: number
    distinct?: ColaboradorScalarFieldEnum | ColaboradorScalarFieldEnum[]
  }

  /**
   * Colaborador create
   */
  export type ColaboradorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * The data needed to create a Colaborador.
     */
    data: XOR<ColaboradorCreateInput, ColaboradorUncheckedCreateInput>
  }

  /**
   * Colaborador createMany
   */
  export type ColaboradorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Colaboradors.
     */
    data: ColaboradorCreateManyInput | ColaboradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Colaborador createManyAndReturn
   */
  export type ColaboradorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * The data used to create many Colaboradors.
     */
    data: ColaboradorCreateManyInput | ColaboradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Colaborador update
   */
  export type ColaboradorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * The data needed to update a Colaborador.
     */
    data: XOR<ColaboradorUpdateInput, ColaboradorUncheckedUpdateInput>
    /**
     * Choose, which Colaborador to update.
     */
    where: ColaboradorWhereUniqueInput
  }

  /**
   * Colaborador updateMany
   */
  export type ColaboradorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Colaboradors.
     */
    data: XOR<ColaboradorUpdateManyMutationInput, ColaboradorUncheckedUpdateManyInput>
    /**
     * Filter which Colaboradors to update
     */
    where?: ColaboradorWhereInput
    /**
     * Limit how many Colaboradors to update.
     */
    limit?: number
  }

  /**
   * Colaborador updateManyAndReturn
   */
  export type ColaboradorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * The data used to update Colaboradors.
     */
    data: XOR<ColaboradorUpdateManyMutationInput, ColaboradorUncheckedUpdateManyInput>
    /**
     * Filter which Colaboradors to update
     */
    where?: ColaboradorWhereInput
    /**
     * Limit how many Colaboradors to update.
     */
    limit?: number
  }

  /**
   * Colaborador upsert
   */
  export type ColaboradorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * The filter to search for the Colaborador to update in case it exists.
     */
    where: ColaboradorWhereUniqueInput
    /**
     * In case the Colaborador found by the `where` argument doesn't exist, create a new Colaborador with this data.
     */
    create: XOR<ColaboradorCreateInput, ColaboradorUncheckedCreateInput>
    /**
     * In case the Colaborador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColaboradorUpdateInput, ColaboradorUncheckedUpdateInput>
  }

  /**
   * Colaborador delete
   */
  export type ColaboradorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * Filter which Colaborador to delete.
     */
    where: ColaboradorWhereUniqueInput
  }

  /**
   * Colaborador deleteMany
   */
  export type ColaboradorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colaboradors to delete
     */
    where?: ColaboradorWhereInput
    /**
     * Limit how many Colaboradors to delete.
     */
    limit?: number
  }

  /**
   * Colaborador.acessos
   */
  export type Colaborador$acessosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoPlataforma
     */
    select?: AcessoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoPlataforma
     */
    omit?: AcessoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoPlataformaInclude<ExtArgs> | null
    where?: AcessoPlataformaWhereInput
    orderBy?: AcessoPlataformaOrderByWithRelationInput | AcessoPlataformaOrderByWithRelationInput[]
    cursor?: AcessoPlataformaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AcessoPlataformaScalarFieldEnum | AcessoPlataformaScalarFieldEnum[]
  }

  /**
   * Colaborador.historicoSenhas
   */
  export type Colaborador$historicoSenhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoSenha
     */
    select?: HistoricoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoSenha
     */
    omit?: HistoricoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoSenhaInclude<ExtArgs> | null
    where?: HistoricoSenhaWhereInput
    orderBy?: HistoricoSenhaOrderByWithRelationInput | HistoricoSenhaOrderByWithRelationInput[]
    cursor?: HistoricoSenhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoSenhaScalarFieldEnum | HistoricoSenhaScalarFieldEnum[]
  }

  /**
   * Colaborador.visualizacoesSenha
   */
  export type Colaborador$visualizacoesSenhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualizacaoSenha
     */
    select?: VisualizacaoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualizacaoSenha
     */
    omit?: VisualizacaoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizacaoSenhaInclude<ExtArgs> | null
    where?: VisualizacaoSenhaWhereInput
    orderBy?: VisualizacaoSenhaOrderByWithRelationInput | VisualizacaoSenhaOrderByWithRelationInput[]
    cursor?: VisualizacaoSenhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisualizacaoSenhaScalarFieldEnum | VisualizacaoSenhaScalarFieldEnum[]
  }

  /**
   * Colaborador.ticketsSenha
   */
  export type Colaborador$ticketsSenhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSenha
     */
    select?: TicketSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSenha
     */
    omit?: TicketSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSenhaInclude<ExtArgs> | null
    where?: TicketSenhaWhereInput
    orderBy?: TicketSenhaOrderByWithRelationInput | TicketSenhaOrderByWithRelationInput[]
    cursor?: TicketSenhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketSenhaScalarFieldEnum | TicketSenhaScalarFieldEnum[]
  }

  /**
   * Colaborador without action
   */
  export type ColaboradorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
  }


  /**
   * Model Plataforma
   */

  export type AggregatePlataforma = {
    _count: PlataformaCountAggregateOutputType | null
    _avg: PlataformaAvgAggregateOutputType | null
    _sum: PlataformaSumAggregateOutputType | null
    _min: PlataformaMinAggregateOutputType | null
    _max: PlataformaMaxAggregateOutputType | null
  }

  export type PlataformaAvgAggregateOutputType = {
    custoMensal: number | null
    frequenciaAtualizacao: number | null
  }

  export type PlataformaSumAggregateOutputType = {
    custoMensal: number | null
    frequenciaAtualizacao: number | null
  }

  export type PlataformaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    tipo: $Enums.TipoPlataforma | null
    urlLogin: string | null
    emailUtilizado: string | null
    senhaEncriptada: string | null
    custoMensal: number | null
    ultimaAtualizacaoSenha: Date | null
    frequenciaAtualizacao: number | null
    observacoes: string | null
    vinculo: $Enums.VinculoPlataforma | null
    clienteId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlataformaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    tipo: $Enums.TipoPlataforma | null
    urlLogin: string | null
    emailUtilizado: string | null
    senhaEncriptada: string | null
    custoMensal: number | null
    ultimaAtualizacaoSenha: Date | null
    frequenciaAtualizacao: number | null
    observacoes: string | null
    vinculo: $Enums.VinculoPlataforma | null
    clienteId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlataformaCountAggregateOutputType = {
    id: number
    nome: number
    tipo: number
    urlLogin: number
    emailUtilizado: number
    senhaEncriptada: number
    custoMensal: number
    ultimaAtualizacaoSenha: number
    frequenciaAtualizacao: number
    observacoes: number
    vinculo: number
    clienteId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlataformaAvgAggregateInputType = {
    custoMensal?: true
    frequenciaAtualizacao?: true
  }

  export type PlataformaSumAggregateInputType = {
    custoMensal?: true
    frequenciaAtualizacao?: true
  }

  export type PlataformaMinAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    urlLogin?: true
    emailUtilizado?: true
    senhaEncriptada?: true
    custoMensal?: true
    ultimaAtualizacaoSenha?: true
    frequenciaAtualizacao?: true
    observacoes?: true
    vinculo?: true
    clienteId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlataformaMaxAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    urlLogin?: true
    emailUtilizado?: true
    senhaEncriptada?: true
    custoMensal?: true
    ultimaAtualizacaoSenha?: true
    frequenciaAtualizacao?: true
    observacoes?: true
    vinculo?: true
    clienteId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlataformaCountAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    urlLogin?: true
    emailUtilizado?: true
    senhaEncriptada?: true
    custoMensal?: true
    ultimaAtualizacaoSenha?: true
    frequenciaAtualizacao?: true
    observacoes?: true
    vinculo?: true
    clienteId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlataformaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plataforma to aggregate.
     */
    where?: PlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plataformas to fetch.
     */
    orderBy?: PlataformaOrderByWithRelationInput | PlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plataformas
    **/
    _count?: true | PlataformaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlataformaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlataformaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlataformaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlataformaMaxAggregateInputType
  }

  export type GetPlataformaAggregateType<T extends PlataformaAggregateArgs> = {
        [P in keyof T & keyof AggregatePlataforma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlataforma[P]>
      : GetScalarType<T[P], AggregatePlataforma[P]>
  }




  export type PlataformaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlataformaWhereInput
    orderBy?: PlataformaOrderByWithAggregationInput | PlataformaOrderByWithAggregationInput[]
    by: PlataformaScalarFieldEnum[] | PlataformaScalarFieldEnum
    having?: PlataformaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlataformaCountAggregateInputType | true
    _avg?: PlataformaAvgAggregateInputType
    _sum?: PlataformaSumAggregateInputType
    _min?: PlataformaMinAggregateInputType
    _max?: PlataformaMaxAggregateInputType
  }

  export type PlataformaGroupByOutputType = {
    id: string
    nome: string
    tipo: $Enums.TipoPlataforma
    urlLogin: string | null
    emailUtilizado: string | null
    senhaEncriptada: string
    custoMensal: number
    ultimaAtualizacaoSenha: Date
    frequenciaAtualizacao: number
    observacoes: string | null
    vinculo: $Enums.VinculoPlataforma
    clienteId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PlataformaCountAggregateOutputType | null
    _avg: PlataformaAvgAggregateOutputType | null
    _sum: PlataformaSumAggregateOutputType | null
    _min: PlataformaMinAggregateOutputType | null
    _max: PlataformaMaxAggregateOutputType | null
  }

  type GetPlataformaGroupByPayload<T extends PlataformaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlataformaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlataformaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlataformaGroupByOutputType[P]>
            : GetScalarType<T[P], PlataformaGroupByOutputType[P]>
        }
      >
    >


  export type PlataformaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    urlLogin?: boolean
    emailUtilizado?: boolean
    senhaEncriptada?: boolean
    custoMensal?: boolean
    ultimaAtualizacaoSenha?: boolean
    frequenciaAtualizacao?: boolean
    observacoes?: boolean
    vinculo?: boolean
    clienteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | Plataforma$clienteArgs<ExtArgs>
    acessos?: boolean | Plataforma$acessosArgs<ExtArgs>
    historicoSenhas?: boolean | Plataforma$historicoSenhasArgs<ExtArgs>
    custos?: boolean | Plataforma$custosArgs<ExtArgs>
    visualizacoesSenha?: boolean | Plataforma$visualizacoesSenhaArgs<ExtArgs>
    ticketsSenha?: boolean | Plataforma$ticketsSenhaArgs<ExtArgs>
    _count?: boolean | PlataformaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plataforma"]>

  export type PlataformaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    urlLogin?: boolean
    emailUtilizado?: boolean
    senhaEncriptada?: boolean
    custoMensal?: boolean
    ultimaAtualizacaoSenha?: boolean
    frequenciaAtualizacao?: boolean
    observacoes?: boolean
    vinculo?: boolean
    clienteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | Plataforma$clienteArgs<ExtArgs>
  }, ExtArgs["result"]["plataforma"]>

  export type PlataformaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    urlLogin?: boolean
    emailUtilizado?: boolean
    senhaEncriptada?: boolean
    custoMensal?: boolean
    ultimaAtualizacaoSenha?: boolean
    frequenciaAtualizacao?: boolean
    observacoes?: boolean
    vinculo?: boolean
    clienteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | Plataforma$clienteArgs<ExtArgs>
  }, ExtArgs["result"]["plataforma"]>

  export type PlataformaSelectScalar = {
    id?: boolean
    nome?: boolean
    tipo?: boolean
    urlLogin?: boolean
    emailUtilizado?: boolean
    senhaEncriptada?: boolean
    custoMensal?: boolean
    ultimaAtualizacaoSenha?: boolean
    frequenciaAtualizacao?: boolean
    observacoes?: boolean
    vinculo?: boolean
    clienteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlataformaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "tipo" | "urlLogin" | "emailUtilizado" | "senhaEncriptada" | "custoMensal" | "ultimaAtualizacaoSenha" | "frequenciaAtualizacao" | "observacoes" | "vinculo" | "clienteId" | "createdAt" | "updatedAt", ExtArgs["result"]["plataforma"]>
  export type PlataformaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | Plataforma$clienteArgs<ExtArgs>
    acessos?: boolean | Plataforma$acessosArgs<ExtArgs>
    historicoSenhas?: boolean | Plataforma$historicoSenhasArgs<ExtArgs>
    custos?: boolean | Plataforma$custosArgs<ExtArgs>
    visualizacoesSenha?: boolean | Plataforma$visualizacoesSenhaArgs<ExtArgs>
    ticketsSenha?: boolean | Plataforma$ticketsSenhaArgs<ExtArgs>
    _count?: boolean | PlataformaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlataformaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | Plataforma$clienteArgs<ExtArgs>
  }
  export type PlataformaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | Plataforma$clienteArgs<ExtArgs>
  }

  export type $PlataformaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plataforma"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs> | null
      acessos: Prisma.$AcessoPlataformaPayload<ExtArgs>[]
      historicoSenhas: Prisma.$HistoricoSenhaPayload<ExtArgs>[]
      custos: Prisma.$CustoPlataformaPayload<ExtArgs>[]
      visualizacoesSenha: Prisma.$VisualizacaoSenhaPayload<ExtArgs>[]
      ticketsSenha: Prisma.$TicketSenhaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      tipo: $Enums.TipoPlataforma
      urlLogin: string | null
      emailUtilizado: string | null
      senhaEncriptada: string
      custoMensal: number
      ultimaAtualizacaoSenha: Date
      frequenciaAtualizacao: number
      observacoes: string | null
      vinculo: $Enums.VinculoPlataforma
      clienteId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["plataforma"]>
    composites: {}
  }

  type PlataformaGetPayload<S extends boolean | null | undefined | PlataformaDefaultArgs> = $Result.GetResult<Prisma.$PlataformaPayload, S>

  type PlataformaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlataformaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlataformaCountAggregateInputType | true
    }

  export interface PlataformaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plataforma'], meta: { name: 'Plataforma' } }
    /**
     * Find zero or one Plataforma that matches the filter.
     * @param {PlataformaFindUniqueArgs} args - Arguments to find a Plataforma
     * @example
     * // Get one Plataforma
     * const plataforma = await prisma.plataforma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlataformaFindUniqueArgs>(args: SelectSubset<T, PlataformaFindUniqueArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plataforma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlataformaFindUniqueOrThrowArgs} args - Arguments to find a Plataforma
     * @example
     * // Get one Plataforma
     * const plataforma = await prisma.plataforma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlataformaFindUniqueOrThrowArgs>(args: SelectSubset<T, PlataformaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plataforma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaFindFirstArgs} args - Arguments to find a Plataforma
     * @example
     * // Get one Plataforma
     * const plataforma = await prisma.plataforma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlataformaFindFirstArgs>(args?: SelectSubset<T, PlataformaFindFirstArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plataforma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaFindFirstOrThrowArgs} args - Arguments to find a Plataforma
     * @example
     * // Get one Plataforma
     * const plataforma = await prisma.plataforma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlataformaFindFirstOrThrowArgs>(args?: SelectSubset<T, PlataformaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plataformas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plataformas
     * const plataformas = await prisma.plataforma.findMany()
     * 
     * // Get first 10 Plataformas
     * const plataformas = await prisma.plataforma.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plataformaWithIdOnly = await prisma.plataforma.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlataformaFindManyArgs>(args?: SelectSubset<T, PlataformaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plataforma.
     * @param {PlataformaCreateArgs} args - Arguments to create a Plataforma.
     * @example
     * // Create one Plataforma
     * const Plataforma = await prisma.plataforma.create({
     *   data: {
     *     // ... data to create a Plataforma
     *   }
     * })
     * 
     */
    create<T extends PlataformaCreateArgs>(args: SelectSubset<T, PlataformaCreateArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plataformas.
     * @param {PlataformaCreateManyArgs} args - Arguments to create many Plataformas.
     * @example
     * // Create many Plataformas
     * const plataforma = await prisma.plataforma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlataformaCreateManyArgs>(args?: SelectSubset<T, PlataformaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plataformas and returns the data saved in the database.
     * @param {PlataformaCreateManyAndReturnArgs} args - Arguments to create many Plataformas.
     * @example
     * // Create many Plataformas
     * const plataforma = await prisma.plataforma.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plataformas and only return the `id`
     * const plataformaWithIdOnly = await prisma.plataforma.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlataformaCreateManyAndReturnArgs>(args?: SelectSubset<T, PlataformaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plataforma.
     * @param {PlataformaDeleteArgs} args - Arguments to delete one Plataforma.
     * @example
     * // Delete one Plataforma
     * const Plataforma = await prisma.plataforma.delete({
     *   where: {
     *     // ... filter to delete one Plataforma
     *   }
     * })
     * 
     */
    delete<T extends PlataformaDeleteArgs>(args: SelectSubset<T, PlataformaDeleteArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plataforma.
     * @param {PlataformaUpdateArgs} args - Arguments to update one Plataforma.
     * @example
     * // Update one Plataforma
     * const plataforma = await prisma.plataforma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlataformaUpdateArgs>(args: SelectSubset<T, PlataformaUpdateArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plataformas.
     * @param {PlataformaDeleteManyArgs} args - Arguments to filter Plataformas to delete.
     * @example
     * // Delete a few Plataformas
     * const { count } = await prisma.plataforma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlataformaDeleteManyArgs>(args?: SelectSubset<T, PlataformaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plataformas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plataformas
     * const plataforma = await prisma.plataforma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlataformaUpdateManyArgs>(args: SelectSubset<T, PlataformaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plataformas and returns the data updated in the database.
     * @param {PlataformaUpdateManyAndReturnArgs} args - Arguments to update many Plataformas.
     * @example
     * // Update many Plataformas
     * const plataforma = await prisma.plataforma.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plataformas and only return the `id`
     * const plataformaWithIdOnly = await prisma.plataforma.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlataformaUpdateManyAndReturnArgs>(args: SelectSubset<T, PlataformaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plataforma.
     * @param {PlataformaUpsertArgs} args - Arguments to update or create a Plataforma.
     * @example
     * // Update or create a Plataforma
     * const plataforma = await prisma.plataforma.upsert({
     *   create: {
     *     // ... data to create a Plataforma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plataforma we want to update
     *   }
     * })
     */
    upsert<T extends PlataformaUpsertArgs>(args: SelectSubset<T, PlataformaUpsertArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plataformas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaCountArgs} args - Arguments to filter Plataformas to count.
     * @example
     * // Count the number of Plataformas
     * const count = await prisma.plataforma.count({
     *   where: {
     *     // ... the filter for the Plataformas we want to count
     *   }
     * })
    **/
    count<T extends PlataformaCountArgs>(
      args?: Subset<T, PlataformaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlataformaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plataforma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlataformaAggregateArgs>(args: Subset<T, PlataformaAggregateArgs>): Prisma.PrismaPromise<GetPlataformaAggregateType<T>>

    /**
     * Group by Plataforma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaGroupByArgs} args - Group by arguments.
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
      T extends PlataformaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlataformaGroupByArgs['orderBy'] }
        : { orderBy?: PlataformaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlataformaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlataformaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plataforma model
   */
  readonly fields: PlataformaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plataforma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlataformaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends Plataforma$clienteArgs<ExtArgs> = {}>(args?: Subset<T, Plataforma$clienteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    acessos<T extends Plataforma$acessosArgs<ExtArgs> = {}>(args?: Subset<T, Plataforma$acessosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcessoPlataformaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historicoSenhas<T extends Plataforma$historicoSenhasArgs<ExtArgs> = {}>(args?: Subset<T, Plataforma$historicoSenhasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoSenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    custos<T extends Plataforma$custosArgs<ExtArgs> = {}>(args?: Subset<T, Plataforma$custosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustoPlataformaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visualizacoesSenha<T extends Plataforma$visualizacoesSenhaArgs<ExtArgs> = {}>(args?: Subset<T, Plataforma$visualizacoesSenhaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisualizacaoSenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticketsSenha<T extends Plataforma$ticketsSenhaArgs<ExtArgs> = {}>(args?: Subset<T, Plataforma$ticketsSenhaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketSenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Plataforma model
   */
  interface PlataformaFieldRefs {
    readonly id: FieldRef<"Plataforma", 'String'>
    readonly nome: FieldRef<"Plataforma", 'String'>
    readonly tipo: FieldRef<"Plataforma", 'TipoPlataforma'>
    readonly urlLogin: FieldRef<"Plataforma", 'String'>
    readonly emailUtilizado: FieldRef<"Plataforma", 'String'>
    readonly senhaEncriptada: FieldRef<"Plataforma", 'String'>
    readonly custoMensal: FieldRef<"Plataforma", 'Float'>
    readonly ultimaAtualizacaoSenha: FieldRef<"Plataforma", 'DateTime'>
    readonly frequenciaAtualizacao: FieldRef<"Plataforma", 'Int'>
    readonly observacoes: FieldRef<"Plataforma", 'String'>
    readonly vinculo: FieldRef<"Plataforma", 'VinculoPlataforma'>
    readonly clienteId: FieldRef<"Plataforma", 'String'>
    readonly createdAt: FieldRef<"Plataforma", 'DateTime'>
    readonly updatedAt: FieldRef<"Plataforma", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plataforma findUnique
   */
  export type PlataformaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter, which Plataforma to fetch.
     */
    where: PlataformaWhereUniqueInput
  }

  /**
   * Plataforma findUniqueOrThrow
   */
  export type PlataformaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter, which Plataforma to fetch.
     */
    where: PlataformaWhereUniqueInput
  }

  /**
   * Plataforma findFirst
   */
  export type PlataformaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter, which Plataforma to fetch.
     */
    where?: PlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plataformas to fetch.
     */
    orderBy?: PlataformaOrderByWithRelationInput | PlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plataformas.
     */
    cursor?: PlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plataformas.
     */
    distinct?: PlataformaScalarFieldEnum | PlataformaScalarFieldEnum[]
  }

  /**
   * Plataforma findFirstOrThrow
   */
  export type PlataformaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter, which Plataforma to fetch.
     */
    where?: PlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plataformas to fetch.
     */
    orderBy?: PlataformaOrderByWithRelationInput | PlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plataformas.
     */
    cursor?: PlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plataformas.
     */
    distinct?: PlataformaScalarFieldEnum | PlataformaScalarFieldEnum[]
  }

  /**
   * Plataforma findMany
   */
  export type PlataformaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter, which Plataformas to fetch.
     */
    where?: PlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plataformas to fetch.
     */
    orderBy?: PlataformaOrderByWithRelationInput | PlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plataformas.
     */
    cursor?: PlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plataformas.
     */
    skip?: number
    distinct?: PlataformaScalarFieldEnum | PlataformaScalarFieldEnum[]
  }

  /**
   * Plataforma create
   */
  export type PlataformaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * The data needed to create a Plataforma.
     */
    data: XOR<PlataformaCreateInput, PlataformaUncheckedCreateInput>
  }

  /**
   * Plataforma createMany
   */
  export type PlataformaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plataformas.
     */
    data: PlataformaCreateManyInput | PlataformaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plataforma createManyAndReturn
   */
  export type PlataformaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * The data used to create many Plataformas.
     */
    data: PlataformaCreateManyInput | PlataformaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plataforma update
   */
  export type PlataformaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * The data needed to update a Plataforma.
     */
    data: XOR<PlataformaUpdateInput, PlataformaUncheckedUpdateInput>
    /**
     * Choose, which Plataforma to update.
     */
    where: PlataformaWhereUniqueInput
  }

  /**
   * Plataforma updateMany
   */
  export type PlataformaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plataformas.
     */
    data: XOR<PlataformaUpdateManyMutationInput, PlataformaUncheckedUpdateManyInput>
    /**
     * Filter which Plataformas to update
     */
    where?: PlataformaWhereInput
    /**
     * Limit how many Plataformas to update.
     */
    limit?: number
  }

  /**
   * Plataforma updateManyAndReturn
   */
  export type PlataformaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * The data used to update Plataformas.
     */
    data: XOR<PlataformaUpdateManyMutationInput, PlataformaUncheckedUpdateManyInput>
    /**
     * Filter which Plataformas to update
     */
    where?: PlataformaWhereInput
    /**
     * Limit how many Plataformas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plataforma upsert
   */
  export type PlataformaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * The filter to search for the Plataforma to update in case it exists.
     */
    where: PlataformaWhereUniqueInput
    /**
     * In case the Plataforma found by the `where` argument doesn't exist, create a new Plataforma with this data.
     */
    create: XOR<PlataformaCreateInput, PlataformaUncheckedCreateInput>
    /**
     * In case the Plataforma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlataformaUpdateInput, PlataformaUncheckedUpdateInput>
  }

  /**
   * Plataforma delete
   */
  export type PlataformaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter which Plataforma to delete.
     */
    where: PlataformaWhereUniqueInput
  }

  /**
   * Plataforma deleteMany
   */
  export type PlataformaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plataformas to delete
     */
    where?: PlataformaWhereInput
    /**
     * Limit how many Plataformas to delete.
     */
    limit?: number
  }

  /**
   * Plataforma.cliente
   */
  export type Plataforma$clienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
  }

  /**
   * Plataforma.acessos
   */
  export type Plataforma$acessosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoPlataforma
     */
    select?: AcessoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoPlataforma
     */
    omit?: AcessoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoPlataformaInclude<ExtArgs> | null
    where?: AcessoPlataformaWhereInput
    orderBy?: AcessoPlataformaOrderByWithRelationInput | AcessoPlataformaOrderByWithRelationInput[]
    cursor?: AcessoPlataformaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AcessoPlataformaScalarFieldEnum | AcessoPlataformaScalarFieldEnum[]
  }

  /**
   * Plataforma.historicoSenhas
   */
  export type Plataforma$historicoSenhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoSenha
     */
    select?: HistoricoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoSenha
     */
    omit?: HistoricoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoSenhaInclude<ExtArgs> | null
    where?: HistoricoSenhaWhereInput
    orderBy?: HistoricoSenhaOrderByWithRelationInput | HistoricoSenhaOrderByWithRelationInput[]
    cursor?: HistoricoSenhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoSenhaScalarFieldEnum | HistoricoSenhaScalarFieldEnum[]
  }

  /**
   * Plataforma.custos
   */
  export type Plataforma$custosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPlataforma
     */
    select?: CustoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPlataforma
     */
    omit?: CustoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustoPlataformaInclude<ExtArgs> | null
    where?: CustoPlataformaWhereInput
    orderBy?: CustoPlataformaOrderByWithRelationInput | CustoPlataformaOrderByWithRelationInput[]
    cursor?: CustoPlataformaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustoPlataformaScalarFieldEnum | CustoPlataformaScalarFieldEnum[]
  }

  /**
   * Plataforma.visualizacoesSenha
   */
  export type Plataforma$visualizacoesSenhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualizacaoSenha
     */
    select?: VisualizacaoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualizacaoSenha
     */
    omit?: VisualizacaoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizacaoSenhaInclude<ExtArgs> | null
    where?: VisualizacaoSenhaWhereInput
    orderBy?: VisualizacaoSenhaOrderByWithRelationInput | VisualizacaoSenhaOrderByWithRelationInput[]
    cursor?: VisualizacaoSenhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisualizacaoSenhaScalarFieldEnum | VisualizacaoSenhaScalarFieldEnum[]
  }

  /**
   * Plataforma.ticketsSenha
   */
  export type Plataforma$ticketsSenhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSenha
     */
    select?: TicketSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSenha
     */
    omit?: TicketSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSenhaInclude<ExtArgs> | null
    where?: TicketSenhaWhereInput
    orderBy?: TicketSenhaOrderByWithRelationInput | TicketSenhaOrderByWithRelationInput[]
    cursor?: TicketSenhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketSenhaScalarFieldEnum | TicketSenhaScalarFieldEnum[]
  }

  /**
   * Plataforma without action
   */
  export type PlataformaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
  }


  /**
   * Model AcessoPlataforma
   */

  export type AggregateAcessoPlataforma = {
    _count: AcessoPlataformaCountAggregateOutputType | null
    _min: AcessoPlataformaMinAggregateOutputType | null
    _max: AcessoPlataformaMaxAggregateOutputType | null
  }

  export type AcessoPlataformaMinAggregateOutputType = {
    id: string | null
    colaboradorId: string | null
    plataformaId: string | null
    dataInicio: Date | null
    dataFim: Date | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AcessoPlataformaMaxAggregateOutputType = {
    id: string | null
    colaboradorId: string | null
    plataformaId: string | null
    dataInicio: Date | null
    dataFim: Date | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AcessoPlataformaCountAggregateOutputType = {
    id: number
    colaboradorId: number
    plataformaId: number
    dataInicio: number
    dataFim: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AcessoPlataformaMinAggregateInputType = {
    id?: true
    colaboradorId?: true
    plataformaId?: true
    dataInicio?: true
    dataFim?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AcessoPlataformaMaxAggregateInputType = {
    id?: true
    colaboradorId?: true
    plataformaId?: true
    dataInicio?: true
    dataFim?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AcessoPlataformaCountAggregateInputType = {
    id?: true
    colaboradorId?: true
    plataformaId?: true
    dataInicio?: true
    dataFim?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AcessoPlataformaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcessoPlataforma to aggregate.
     */
    where?: AcessoPlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcessoPlataformas to fetch.
     */
    orderBy?: AcessoPlataformaOrderByWithRelationInput | AcessoPlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcessoPlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcessoPlataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcessoPlataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AcessoPlataformas
    **/
    _count?: true | AcessoPlataformaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcessoPlataformaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcessoPlataformaMaxAggregateInputType
  }

  export type GetAcessoPlataformaAggregateType<T extends AcessoPlataformaAggregateArgs> = {
        [P in keyof T & keyof AggregateAcessoPlataforma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcessoPlataforma[P]>
      : GetScalarType<T[P], AggregateAcessoPlataforma[P]>
  }




  export type AcessoPlataformaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcessoPlataformaWhereInput
    orderBy?: AcessoPlataformaOrderByWithAggregationInput | AcessoPlataformaOrderByWithAggregationInput[]
    by: AcessoPlataformaScalarFieldEnum[] | AcessoPlataformaScalarFieldEnum
    having?: AcessoPlataformaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcessoPlataformaCountAggregateInputType | true
    _min?: AcessoPlataformaMinAggregateInputType
    _max?: AcessoPlataformaMaxAggregateInputType
  }

  export type AcessoPlataformaGroupByOutputType = {
    id: string
    colaboradorId: string
    plataformaId: string
    dataInicio: Date
    dataFim: Date | null
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: AcessoPlataformaCountAggregateOutputType | null
    _min: AcessoPlataformaMinAggregateOutputType | null
    _max: AcessoPlataformaMaxAggregateOutputType | null
  }

  type GetAcessoPlataformaGroupByPayload<T extends AcessoPlataformaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcessoPlataformaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcessoPlataformaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcessoPlataformaGroupByOutputType[P]>
            : GetScalarType<T[P], AcessoPlataformaGroupByOutputType[P]>
        }
      >
    >


  export type AcessoPlataformaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    colaboradorId?: boolean
    plataformaId?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acessoPlataforma"]>

  export type AcessoPlataformaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    colaboradorId?: boolean
    plataformaId?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acessoPlataforma"]>

  export type AcessoPlataformaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    colaboradorId?: boolean
    plataformaId?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acessoPlataforma"]>

  export type AcessoPlataformaSelectScalar = {
    id?: boolean
    colaboradorId?: boolean
    plataformaId?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AcessoPlataformaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "colaboradorId" | "plataformaId" | "dataInicio" | "dataFim" | "ativo" | "createdAt" | "updatedAt", ExtArgs["result"]["acessoPlataforma"]>
  export type AcessoPlataformaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
  }
  export type AcessoPlataformaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
  }
  export type AcessoPlataformaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
  }

  export type $AcessoPlataformaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AcessoPlataforma"
    objects: {
      colaborador: Prisma.$ColaboradorPayload<ExtArgs>
      plataforma: Prisma.$PlataformaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      colaboradorId: string
      plataformaId: string
      dataInicio: Date
      dataFim: Date | null
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["acessoPlataforma"]>
    composites: {}
  }

  type AcessoPlataformaGetPayload<S extends boolean | null | undefined | AcessoPlataformaDefaultArgs> = $Result.GetResult<Prisma.$AcessoPlataformaPayload, S>

  type AcessoPlataformaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcessoPlataformaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcessoPlataformaCountAggregateInputType | true
    }

  export interface AcessoPlataformaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AcessoPlataforma'], meta: { name: 'AcessoPlataforma' } }
    /**
     * Find zero or one AcessoPlataforma that matches the filter.
     * @param {AcessoPlataformaFindUniqueArgs} args - Arguments to find a AcessoPlataforma
     * @example
     * // Get one AcessoPlataforma
     * const acessoPlataforma = await prisma.acessoPlataforma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcessoPlataformaFindUniqueArgs>(args: SelectSubset<T, AcessoPlataformaFindUniqueArgs<ExtArgs>>): Prisma__AcessoPlataformaClient<$Result.GetResult<Prisma.$AcessoPlataformaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AcessoPlataforma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcessoPlataformaFindUniqueOrThrowArgs} args - Arguments to find a AcessoPlataforma
     * @example
     * // Get one AcessoPlataforma
     * const acessoPlataforma = await prisma.acessoPlataforma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcessoPlataformaFindUniqueOrThrowArgs>(args: SelectSubset<T, AcessoPlataformaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcessoPlataformaClient<$Result.GetResult<Prisma.$AcessoPlataformaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcessoPlataforma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoPlataformaFindFirstArgs} args - Arguments to find a AcessoPlataforma
     * @example
     * // Get one AcessoPlataforma
     * const acessoPlataforma = await prisma.acessoPlataforma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcessoPlataformaFindFirstArgs>(args?: SelectSubset<T, AcessoPlataformaFindFirstArgs<ExtArgs>>): Prisma__AcessoPlataformaClient<$Result.GetResult<Prisma.$AcessoPlataformaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcessoPlataforma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoPlataformaFindFirstOrThrowArgs} args - Arguments to find a AcessoPlataforma
     * @example
     * // Get one AcessoPlataforma
     * const acessoPlataforma = await prisma.acessoPlataforma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcessoPlataformaFindFirstOrThrowArgs>(args?: SelectSubset<T, AcessoPlataformaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcessoPlataformaClient<$Result.GetResult<Prisma.$AcessoPlataformaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AcessoPlataformas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoPlataformaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AcessoPlataformas
     * const acessoPlataformas = await prisma.acessoPlataforma.findMany()
     * 
     * // Get first 10 AcessoPlataformas
     * const acessoPlataformas = await prisma.acessoPlataforma.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const acessoPlataformaWithIdOnly = await prisma.acessoPlataforma.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AcessoPlataformaFindManyArgs>(args?: SelectSubset<T, AcessoPlataformaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcessoPlataformaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AcessoPlataforma.
     * @param {AcessoPlataformaCreateArgs} args - Arguments to create a AcessoPlataforma.
     * @example
     * // Create one AcessoPlataforma
     * const AcessoPlataforma = await prisma.acessoPlataforma.create({
     *   data: {
     *     // ... data to create a AcessoPlataforma
     *   }
     * })
     * 
     */
    create<T extends AcessoPlataformaCreateArgs>(args: SelectSubset<T, AcessoPlataformaCreateArgs<ExtArgs>>): Prisma__AcessoPlataformaClient<$Result.GetResult<Prisma.$AcessoPlataformaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AcessoPlataformas.
     * @param {AcessoPlataformaCreateManyArgs} args - Arguments to create many AcessoPlataformas.
     * @example
     * // Create many AcessoPlataformas
     * const acessoPlataforma = await prisma.acessoPlataforma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcessoPlataformaCreateManyArgs>(args?: SelectSubset<T, AcessoPlataformaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AcessoPlataformas and returns the data saved in the database.
     * @param {AcessoPlataformaCreateManyAndReturnArgs} args - Arguments to create many AcessoPlataformas.
     * @example
     * // Create many AcessoPlataformas
     * const acessoPlataforma = await prisma.acessoPlataforma.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AcessoPlataformas and only return the `id`
     * const acessoPlataformaWithIdOnly = await prisma.acessoPlataforma.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AcessoPlataformaCreateManyAndReturnArgs>(args?: SelectSubset<T, AcessoPlataformaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcessoPlataformaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AcessoPlataforma.
     * @param {AcessoPlataformaDeleteArgs} args - Arguments to delete one AcessoPlataforma.
     * @example
     * // Delete one AcessoPlataforma
     * const AcessoPlataforma = await prisma.acessoPlataforma.delete({
     *   where: {
     *     // ... filter to delete one AcessoPlataforma
     *   }
     * })
     * 
     */
    delete<T extends AcessoPlataformaDeleteArgs>(args: SelectSubset<T, AcessoPlataformaDeleteArgs<ExtArgs>>): Prisma__AcessoPlataformaClient<$Result.GetResult<Prisma.$AcessoPlataformaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AcessoPlataforma.
     * @param {AcessoPlataformaUpdateArgs} args - Arguments to update one AcessoPlataforma.
     * @example
     * // Update one AcessoPlataforma
     * const acessoPlataforma = await prisma.acessoPlataforma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcessoPlataformaUpdateArgs>(args: SelectSubset<T, AcessoPlataformaUpdateArgs<ExtArgs>>): Prisma__AcessoPlataformaClient<$Result.GetResult<Prisma.$AcessoPlataformaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AcessoPlataformas.
     * @param {AcessoPlataformaDeleteManyArgs} args - Arguments to filter AcessoPlataformas to delete.
     * @example
     * // Delete a few AcessoPlataformas
     * const { count } = await prisma.acessoPlataforma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcessoPlataformaDeleteManyArgs>(args?: SelectSubset<T, AcessoPlataformaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcessoPlataformas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoPlataformaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AcessoPlataformas
     * const acessoPlataforma = await prisma.acessoPlataforma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcessoPlataformaUpdateManyArgs>(args: SelectSubset<T, AcessoPlataformaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcessoPlataformas and returns the data updated in the database.
     * @param {AcessoPlataformaUpdateManyAndReturnArgs} args - Arguments to update many AcessoPlataformas.
     * @example
     * // Update many AcessoPlataformas
     * const acessoPlataforma = await prisma.acessoPlataforma.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AcessoPlataformas and only return the `id`
     * const acessoPlataformaWithIdOnly = await prisma.acessoPlataforma.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AcessoPlataformaUpdateManyAndReturnArgs>(args: SelectSubset<T, AcessoPlataformaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcessoPlataformaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AcessoPlataforma.
     * @param {AcessoPlataformaUpsertArgs} args - Arguments to update or create a AcessoPlataforma.
     * @example
     * // Update or create a AcessoPlataforma
     * const acessoPlataforma = await prisma.acessoPlataforma.upsert({
     *   create: {
     *     // ... data to create a AcessoPlataforma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AcessoPlataforma we want to update
     *   }
     * })
     */
    upsert<T extends AcessoPlataformaUpsertArgs>(args: SelectSubset<T, AcessoPlataformaUpsertArgs<ExtArgs>>): Prisma__AcessoPlataformaClient<$Result.GetResult<Prisma.$AcessoPlataformaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AcessoPlataformas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoPlataformaCountArgs} args - Arguments to filter AcessoPlataformas to count.
     * @example
     * // Count the number of AcessoPlataformas
     * const count = await prisma.acessoPlataforma.count({
     *   where: {
     *     // ... the filter for the AcessoPlataformas we want to count
     *   }
     * })
    **/
    count<T extends AcessoPlataformaCountArgs>(
      args?: Subset<T, AcessoPlataformaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcessoPlataformaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AcessoPlataforma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoPlataformaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AcessoPlataformaAggregateArgs>(args: Subset<T, AcessoPlataformaAggregateArgs>): Prisma.PrismaPromise<GetAcessoPlataformaAggregateType<T>>

    /**
     * Group by AcessoPlataforma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoPlataformaGroupByArgs} args - Group by arguments.
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
      T extends AcessoPlataformaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcessoPlataformaGroupByArgs['orderBy'] }
        : { orderBy?: AcessoPlataformaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AcessoPlataformaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcessoPlataformaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AcessoPlataforma model
   */
  readonly fields: AcessoPlataformaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AcessoPlataforma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcessoPlataformaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    colaborador<T extends ColaboradorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ColaboradorDefaultArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plataforma<T extends PlataformaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlataformaDefaultArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AcessoPlataforma model
   */
  interface AcessoPlataformaFieldRefs {
    readonly id: FieldRef<"AcessoPlataforma", 'String'>
    readonly colaboradorId: FieldRef<"AcessoPlataforma", 'String'>
    readonly plataformaId: FieldRef<"AcessoPlataforma", 'String'>
    readonly dataInicio: FieldRef<"AcessoPlataforma", 'DateTime'>
    readonly dataFim: FieldRef<"AcessoPlataforma", 'DateTime'>
    readonly ativo: FieldRef<"AcessoPlataforma", 'Boolean'>
    readonly createdAt: FieldRef<"AcessoPlataforma", 'DateTime'>
    readonly updatedAt: FieldRef<"AcessoPlataforma", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AcessoPlataforma findUnique
   */
  export type AcessoPlataformaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoPlataforma
     */
    select?: AcessoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoPlataforma
     */
    omit?: AcessoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoPlataformaInclude<ExtArgs> | null
    /**
     * Filter, which AcessoPlataforma to fetch.
     */
    where: AcessoPlataformaWhereUniqueInput
  }

  /**
   * AcessoPlataforma findUniqueOrThrow
   */
  export type AcessoPlataformaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoPlataforma
     */
    select?: AcessoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoPlataforma
     */
    omit?: AcessoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoPlataformaInclude<ExtArgs> | null
    /**
     * Filter, which AcessoPlataforma to fetch.
     */
    where: AcessoPlataformaWhereUniqueInput
  }

  /**
   * AcessoPlataforma findFirst
   */
  export type AcessoPlataformaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoPlataforma
     */
    select?: AcessoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoPlataforma
     */
    omit?: AcessoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoPlataformaInclude<ExtArgs> | null
    /**
     * Filter, which AcessoPlataforma to fetch.
     */
    where?: AcessoPlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcessoPlataformas to fetch.
     */
    orderBy?: AcessoPlataformaOrderByWithRelationInput | AcessoPlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcessoPlataformas.
     */
    cursor?: AcessoPlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcessoPlataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcessoPlataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcessoPlataformas.
     */
    distinct?: AcessoPlataformaScalarFieldEnum | AcessoPlataformaScalarFieldEnum[]
  }

  /**
   * AcessoPlataforma findFirstOrThrow
   */
  export type AcessoPlataformaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoPlataforma
     */
    select?: AcessoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoPlataforma
     */
    omit?: AcessoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoPlataformaInclude<ExtArgs> | null
    /**
     * Filter, which AcessoPlataforma to fetch.
     */
    where?: AcessoPlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcessoPlataformas to fetch.
     */
    orderBy?: AcessoPlataformaOrderByWithRelationInput | AcessoPlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcessoPlataformas.
     */
    cursor?: AcessoPlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcessoPlataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcessoPlataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcessoPlataformas.
     */
    distinct?: AcessoPlataformaScalarFieldEnum | AcessoPlataformaScalarFieldEnum[]
  }

  /**
   * AcessoPlataforma findMany
   */
  export type AcessoPlataformaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoPlataforma
     */
    select?: AcessoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoPlataforma
     */
    omit?: AcessoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoPlataformaInclude<ExtArgs> | null
    /**
     * Filter, which AcessoPlataformas to fetch.
     */
    where?: AcessoPlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcessoPlataformas to fetch.
     */
    orderBy?: AcessoPlataformaOrderByWithRelationInput | AcessoPlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AcessoPlataformas.
     */
    cursor?: AcessoPlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcessoPlataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcessoPlataformas.
     */
    skip?: number
    distinct?: AcessoPlataformaScalarFieldEnum | AcessoPlataformaScalarFieldEnum[]
  }

  /**
   * AcessoPlataforma create
   */
  export type AcessoPlataformaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoPlataforma
     */
    select?: AcessoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoPlataforma
     */
    omit?: AcessoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoPlataformaInclude<ExtArgs> | null
    /**
     * The data needed to create a AcessoPlataforma.
     */
    data: XOR<AcessoPlataformaCreateInput, AcessoPlataformaUncheckedCreateInput>
  }

  /**
   * AcessoPlataforma createMany
   */
  export type AcessoPlataformaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AcessoPlataformas.
     */
    data: AcessoPlataformaCreateManyInput | AcessoPlataformaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AcessoPlataforma createManyAndReturn
   */
  export type AcessoPlataformaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoPlataforma
     */
    select?: AcessoPlataformaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoPlataforma
     */
    omit?: AcessoPlataformaOmit<ExtArgs> | null
    /**
     * The data used to create many AcessoPlataformas.
     */
    data: AcessoPlataformaCreateManyInput | AcessoPlataformaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoPlataformaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AcessoPlataforma update
   */
  export type AcessoPlataformaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoPlataforma
     */
    select?: AcessoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoPlataforma
     */
    omit?: AcessoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoPlataformaInclude<ExtArgs> | null
    /**
     * The data needed to update a AcessoPlataforma.
     */
    data: XOR<AcessoPlataformaUpdateInput, AcessoPlataformaUncheckedUpdateInput>
    /**
     * Choose, which AcessoPlataforma to update.
     */
    where: AcessoPlataformaWhereUniqueInput
  }

  /**
   * AcessoPlataforma updateMany
   */
  export type AcessoPlataformaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AcessoPlataformas.
     */
    data: XOR<AcessoPlataformaUpdateManyMutationInput, AcessoPlataformaUncheckedUpdateManyInput>
    /**
     * Filter which AcessoPlataformas to update
     */
    where?: AcessoPlataformaWhereInput
    /**
     * Limit how many AcessoPlataformas to update.
     */
    limit?: number
  }

  /**
   * AcessoPlataforma updateManyAndReturn
   */
  export type AcessoPlataformaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoPlataforma
     */
    select?: AcessoPlataformaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoPlataforma
     */
    omit?: AcessoPlataformaOmit<ExtArgs> | null
    /**
     * The data used to update AcessoPlataformas.
     */
    data: XOR<AcessoPlataformaUpdateManyMutationInput, AcessoPlataformaUncheckedUpdateManyInput>
    /**
     * Filter which AcessoPlataformas to update
     */
    where?: AcessoPlataformaWhereInput
    /**
     * Limit how many AcessoPlataformas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoPlataformaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AcessoPlataforma upsert
   */
  export type AcessoPlataformaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoPlataforma
     */
    select?: AcessoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoPlataforma
     */
    omit?: AcessoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoPlataformaInclude<ExtArgs> | null
    /**
     * The filter to search for the AcessoPlataforma to update in case it exists.
     */
    where: AcessoPlataformaWhereUniqueInput
    /**
     * In case the AcessoPlataforma found by the `where` argument doesn't exist, create a new AcessoPlataforma with this data.
     */
    create: XOR<AcessoPlataformaCreateInput, AcessoPlataformaUncheckedCreateInput>
    /**
     * In case the AcessoPlataforma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcessoPlataformaUpdateInput, AcessoPlataformaUncheckedUpdateInput>
  }

  /**
   * AcessoPlataforma delete
   */
  export type AcessoPlataformaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoPlataforma
     */
    select?: AcessoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoPlataforma
     */
    omit?: AcessoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoPlataformaInclude<ExtArgs> | null
    /**
     * Filter which AcessoPlataforma to delete.
     */
    where: AcessoPlataformaWhereUniqueInput
  }

  /**
   * AcessoPlataforma deleteMany
   */
  export type AcessoPlataformaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcessoPlataformas to delete
     */
    where?: AcessoPlataformaWhereInput
    /**
     * Limit how many AcessoPlataformas to delete.
     */
    limit?: number
  }

  /**
   * AcessoPlataforma without action
   */
  export type AcessoPlataformaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoPlataforma
     */
    select?: AcessoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcessoPlataforma
     */
    omit?: AcessoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoPlataformaInclude<ExtArgs> | null
  }


  /**
   * Model HistoricoSenha
   */

  export type AggregateHistoricoSenha = {
    _count: HistoricoSenhaCountAggregateOutputType | null
    _min: HistoricoSenhaMinAggregateOutputType | null
    _max: HistoricoSenhaMaxAggregateOutputType | null
  }

  export type HistoricoSenhaMinAggregateOutputType = {
    id: string | null
    plataformaId: string | null
    colaboradorId: string | null
    senhaAnterior: string | null
    novaSenha: string | null
    motivoMudanca: string | null
    dataAlteracao: Date | null
    notificouColaboradores: boolean | null
    tipoNotificacao: string | null
  }

  export type HistoricoSenhaMaxAggregateOutputType = {
    id: string | null
    plataformaId: string | null
    colaboradorId: string | null
    senhaAnterior: string | null
    novaSenha: string | null
    motivoMudanca: string | null
    dataAlteracao: Date | null
    notificouColaboradores: boolean | null
    tipoNotificacao: string | null
  }

  export type HistoricoSenhaCountAggregateOutputType = {
    id: number
    plataformaId: number
    colaboradorId: number
    senhaAnterior: number
    novaSenha: number
    motivoMudanca: number
    dataAlteracao: number
    notificouColaboradores: number
    tipoNotificacao: number
    _all: number
  }


  export type HistoricoSenhaMinAggregateInputType = {
    id?: true
    plataformaId?: true
    colaboradorId?: true
    senhaAnterior?: true
    novaSenha?: true
    motivoMudanca?: true
    dataAlteracao?: true
    notificouColaboradores?: true
    tipoNotificacao?: true
  }

  export type HistoricoSenhaMaxAggregateInputType = {
    id?: true
    plataformaId?: true
    colaboradorId?: true
    senhaAnterior?: true
    novaSenha?: true
    motivoMudanca?: true
    dataAlteracao?: true
    notificouColaboradores?: true
    tipoNotificacao?: true
  }

  export type HistoricoSenhaCountAggregateInputType = {
    id?: true
    plataformaId?: true
    colaboradorId?: true
    senhaAnterior?: true
    novaSenha?: true
    motivoMudanca?: true
    dataAlteracao?: true
    notificouColaboradores?: true
    tipoNotificacao?: true
    _all?: true
  }

  export type HistoricoSenhaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoricoSenha to aggregate.
     */
    where?: HistoricoSenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoSenhas to fetch.
     */
    orderBy?: HistoricoSenhaOrderByWithRelationInput | HistoricoSenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoricoSenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoSenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoSenhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoricoSenhas
    **/
    _count?: true | HistoricoSenhaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoricoSenhaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoricoSenhaMaxAggregateInputType
  }

  export type GetHistoricoSenhaAggregateType<T extends HistoricoSenhaAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoricoSenha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoricoSenha[P]>
      : GetScalarType<T[P], AggregateHistoricoSenha[P]>
  }




  export type HistoricoSenhaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoSenhaWhereInput
    orderBy?: HistoricoSenhaOrderByWithAggregationInput | HistoricoSenhaOrderByWithAggregationInput[]
    by: HistoricoSenhaScalarFieldEnum[] | HistoricoSenhaScalarFieldEnum
    having?: HistoricoSenhaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoricoSenhaCountAggregateInputType | true
    _min?: HistoricoSenhaMinAggregateInputType
    _max?: HistoricoSenhaMaxAggregateInputType
  }

  export type HistoricoSenhaGroupByOutputType = {
    id: string
    plataformaId: string
    colaboradorId: string | null
    senhaAnterior: string | null
    novaSenha: string
    motivoMudanca: string | null
    dataAlteracao: Date
    notificouColaboradores: boolean
    tipoNotificacao: string | null
    _count: HistoricoSenhaCountAggregateOutputType | null
    _min: HistoricoSenhaMinAggregateOutputType | null
    _max: HistoricoSenhaMaxAggregateOutputType | null
  }

  type GetHistoricoSenhaGroupByPayload<T extends HistoricoSenhaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoricoSenhaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoricoSenhaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoricoSenhaGroupByOutputType[P]>
            : GetScalarType<T[P], HistoricoSenhaGroupByOutputType[P]>
        }
      >
    >


  export type HistoricoSenhaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plataformaId?: boolean
    colaboradorId?: boolean
    senhaAnterior?: boolean
    novaSenha?: boolean
    motivoMudanca?: boolean
    dataAlteracao?: boolean
    notificouColaboradores?: boolean
    tipoNotificacao?: boolean
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
    colaborador?: boolean | HistoricoSenha$colaboradorArgs<ExtArgs>
  }, ExtArgs["result"]["historicoSenha"]>

  export type HistoricoSenhaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plataformaId?: boolean
    colaboradorId?: boolean
    senhaAnterior?: boolean
    novaSenha?: boolean
    motivoMudanca?: boolean
    dataAlteracao?: boolean
    notificouColaboradores?: boolean
    tipoNotificacao?: boolean
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
    colaborador?: boolean | HistoricoSenha$colaboradorArgs<ExtArgs>
  }, ExtArgs["result"]["historicoSenha"]>

  export type HistoricoSenhaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plataformaId?: boolean
    colaboradorId?: boolean
    senhaAnterior?: boolean
    novaSenha?: boolean
    motivoMudanca?: boolean
    dataAlteracao?: boolean
    notificouColaboradores?: boolean
    tipoNotificacao?: boolean
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
    colaborador?: boolean | HistoricoSenha$colaboradorArgs<ExtArgs>
  }, ExtArgs["result"]["historicoSenha"]>

  export type HistoricoSenhaSelectScalar = {
    id?: boolean
    plataformaId?: boolean
    colaboradorId?: boolean
    senhaAnterior?: boolean
    novaSenha?: boolean
    motivoMudanca?: boolean
    dataAlteracao?: boolean
    notificouColaboradores?: boolean
    tipoNotificacao?: boolean
  }

  export type HistoricoSenhaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plataformaId" | "colaboradorId" | "senhaAnterior" | "novaSenha" | "motivoMudanca" | "dataAlteracao" | "notificouColaboradores" | "tipoNotificacao", ExtArgs["result"]["historicoSenha"]>
  export type HistoricoSenhaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
    colaborador?: boolean | HistoricoSenha$colaboradorArgs<ExtArgs>
  }
  export type HistoricoSenhaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
    colaborador?: boolean | HistoricoSenha$colaboradorArgs<ExtArgs>
  }
  export type HistoricoSenhaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
    colaborador?: boolean | HistoricoSenha$colaboradorArgs<ExtArgs>
  }

  export type $HistoricoSenhaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoricoSenha"
    objects: {
      plataforma: Prisma.$PlataformaPayload<ExtArgs>
      colaborador: Prisma.$ColaboradorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plataformaId: string
      colaboradorId: string | null
      senhaAnterior: string | null
      novaSenha: string
      motivoMudanca: string | null
      dataAlteracao: Date
      notificouColaboradores: boolean
      tipoNotificacao: string | null
    }, ExtArgs["result"]["historicoSenha"]>
    composites: {}
  }

  type HistoricoSenhaGetPayload<S extends boolean | null | undefined | HistoricoSenhaDefaultArgs> = $Result.GetResult<Prisma.$HistoricoSenhaPayload, S>

  type HistoricoSenhaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoricoSenhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoricoSenhaCountAggregateInputType | true
    }

  export interface HistoricoSenhaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoricoSenha'], meta: { name: 'HistoricoSenha' } }
    /**
     * Find zero or one HistoricoSenha that matches the filter.
     * @param {HistoricoSenhaFindUniqueArgs} args - Arguments to find a HistoricoSenha
     * @example
     * // Get one HistoricoSenha
     * const historicoSenha = await prisma.historicoSenha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoricoSenhaFindUniqueArgs>(args: SelectSubset<T, HistoricoSenhaFindUniqueArgs<ExtArgs>>): Prisma__HistoricoSenhaClient<$Result.GetResult<Prisma.$HistoricoSenhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoricoSenha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoricoSenhaFindUniqueOrThrowArgs} args - Arguments to find a HistoricoSenha
     * @example
     * // Get one HistoricoSenha
     * const historicoSenha = await prisma.historicoSenha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoricoSenhaFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoricoSenhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoricoSenhaClient<$Result.GetResult<Prisma.$HistoricoSenhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoricoSenha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoSenhaFindFirstArgs} args - Arguments to find a HistoricoSenha
     * @example
     * // Get one HistoricoSenha
     * const historicoSenha = await prisma.historicoSenha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoricoSenhaFindFirstArgs>(args?: SelectSubset<T, HistoricoSenhaFindFirstArgs<ExtArgs>>): Prisma__HistoricoSenhaClient<$Result.GetResult<Prisma.$HistoricoSenhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoricoSenha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoSenhaFindFirstOrThrowArgs} args - Arguments to find a HistoricoSenha
     * @example
     * // Get one HistoricoSenha
     * const historicoSenha = await prisma.historicoSenha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoricoSenhaFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoricoSenhaFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoricoSenhaClient<$Result.GetResult<Prisma.$HistoricoSenhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoricoSenhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoSenhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoricoSenhas
     * const historicoSenhas = await prisma.historicoSenha.findMany()
     * 
     * // Get first 10 HistoricoSenhas
     * const historicoSenhas = await prisma.historicoSenha.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historicoSenhaWithIdOnly = await prisma.historicoSenha.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoricoSenhaFindManyArgs>(args?: SelectSubset<T, HistoricoSenhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoSenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoricoSenha.
     * @param {HistoricoSenhaCreateArgs} args - Arguments to create a HistoricoSenha.
     * @example
     * // Create one HistoricoSenha
     * const HistoricoSenha = await prisma.historicoSenha.create({
     *   data: {
     *     // ... data to create a HistoricoSenha
     *   }
     * })
     * 
     */
    create<T extends HistoricoSenhaCreateArgs>(args: SelectSubset<T, HistoricoSenhaCreateArgs<ExtArgs>>): Prisma__HistoricoSenhaClient<$Result.GetResult<Prisma.$HistoricoSenhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoricoSenhas.
     * @param {HistoricoSenhaCreateManyArgs} args - Arguments to create many HistoricoSenhas.
     * @example
     * // Create many HistoricoSenhas
     * const historicoSenha = await prisma.historicoSenha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoricoSenhaCreateManyArgs>(args?: SelectSubset<T, HistoricoSenhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistoricoSenhas and returns the data saved in the database.
     * @param {HistoricoSenhaCreateManyAndReturnArgs} args - Arguments to create many HistoricoSenhas.
     * @example
     * // Create many HistoricoSenhas
     * const historicoSenha = await prisma.historicoSenha.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistoricoSenhas and only return the `id`
     * const historicoSenhaWithIdOnly = await prisma.historicoSenha.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoricoSenhaCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoricoSenhaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoSenhaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistoricoSenha.
     * @param {HistoricoSenhaDeleteArgs} args - Arguments to delete one HistoricoSenha.
     * @example
     * // Delete one HistoricoSenha
     * const HistoricoSenha = await prisma.historicoSenha.delete({
     *   where: {
     *     // ... filter to delete one HistoricoSenha
     *   }
     * })
     * 
     */
    delete<T extends HistoricoSenhaDeleteArgs>(args: SelectSubset<T, HistoricoSenhaDeleteArgs<ExtArgs>>): Prisma__HistoricoSenhaClient<$Result.GetResult<Prisma.$HistoricoSenhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoricoSenha.
     * @param {HistoricoSenhaUpdateArgs} args - Arguments to update one HistoricoSenha.
     * @example
     * // Update one HistoricoSenha
     * const historicoSenha = await prisma.historicoSenha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoricoSenhaUpdateArgs>(args: SelectSubset<T, HistoricoSenhaUpdateArgs<ExtArgs>>): Prisma__HistoricoSenhaClient<$Result.GetResult<Prisma.$HistoricoSenhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoricoSenhas.
     * @param {HistoricoSenhaDeleteManyArgs} args - Arguments to filter HistoricoSenhas to delete.
     * @example
     * // Delete a few HistoricoSenhas
     * const { count } = await prisma.historicoSenha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoricoSenhaDeleteManyArgs>(args?: SelectSubset<T, HistoricoSenhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoricoSenhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoSenhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoricoSenhas
     * const historicoSenha = await prisma.historicoSenha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoricoSenhaUpdateManyArgs>(args: SelectSubset<T, HistoricoSenhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoricoSenhas and returns the data updated in the database.
     * @param {HistoricoSenhaUpdateManyAndReturnArgs} args - Arguments to update many HistoricoSenhas.
     * @example
     * // Update many HistoricoSenhas
     * const historicoSenha = await prisma.historicoSenha.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistoricoSenhas and only return the `id`
     * const historicoSenhaWithIdOnly = await prisma.historicoSenha.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HistoricoSenhaUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoricoSenhaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoSenhaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistoricoSenha.
     * @param {HistoricoSenhaUpsertArgs} args - Arguments to update or create a HistoricoSenha.
     * @example
     * // Update or create a HistoricoSenha
     * const historicoSenha = await prisma.historicoSenha.upsert({
     *   create: {
     *     // ... data to create a HistoricoSenha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoricoSenha we want to update
     *   }
     * })
     */
    upsert<T extends HistoricoSenhaUpsertArgs>(args: SelectSubset<T, HistoricoSenhaUpsertArgs<ExtArgs>>): Prisma__HistoricoSenhaClient<$Result.GetResult<Prisma.$HistoricoSenhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoricoSenhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoSenhaCountArgs} args - Arguments to filter HistoricoSenhas to count.
     * @example
     * // Count the number of HistoricoSenhas
     * const count = await prisma.historicoSenha.count({
     *   where: {
     *     // ... the filter for the HistoricoSenhas we want to count
     *   }
     * })
    **/
    count<T extends HistoricoSenhaCountArgs>(
      args?: Subset<T, HistoricoSenhaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoricoSenhaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoricoSenha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoSenhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoricoSenhaAggregateArgs>(args: Subset<T, HistoricoSenhaAggregateArgs>): Prisma.PrismaPromise<GetHistoricoSenhaAggregateType<T>>

    /**
     * Group by HistoricoSenha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoSenhaGroupByArgs} args - Group by arguments.
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
      T extends HistoricoSenhaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoricoSenhaGroupByArgs['orderBy'] }
        : { orderBy?: HistoricoSenhaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoricoSenhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoricoSenhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoricoSenha model
   */
  readonly fields: HistoricoSenhaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoricoSenha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoricoSenhaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plataforma<T extends PlataformaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlataformaDefaultArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    colaborador<T extends HistoricoSenha$colaboradorArgs<ExtArgs> = {}>(args?: Subset<T, HistoricoSenha$colaboradorArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HistoricoSenha model
   */
  interface HistoricoSenhaFieldRefs {
    readonly id: FieldRef<"HistoricoSenha", 'String'>
    readonly plataformaId: FieldRef<"HistoricoSenha", 'String'>
    readonly colaboradorId: FieldRef<"HistoricoSenha", 'String'>
    readonly senhaAnterior: FieldRef<"HistoricoSenha", 'String'>
    readonly novaSenha: FieldRef<"HistoricoSenha", 'String'>
    readonly motivoMudanca: FieldRef<"HistoricoSenha", 'String'>
    readonly dataAlteracao: FieldRef<"HistoricoSenha", 'DateTime'>
    readonly notificouColaboradores: FieldRef<"HistoricoSenha", 'Boolean'>
    readonly tipoNotificacao: FieldRef<"HistoricoSenha", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HistoricoSenha findUnique
   */
  export type HistoricoSenhaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoSenha
     */
    select?: HistoricoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoSenha
     */
    omit?: HistoricoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoSenhaInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoSenha to fetch.
     */
    where: HistoricoSenhaWhereUniqueInput
  }

  /**
   * HistoricoSenha findUniqueOrThrow
   */
  export type HistoricoSenhaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoSenha
     */
    select?: HistoricoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoSenha
     */
    omit?: HistoricoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoSenhaInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoSenha to fetch.
     */
    where: HistoricoSenhaWhereUniqueInput
  }

  /**
   * HistoricoSenha findFirst
   */
  export type HistoricoSenhaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoSenha
     */
    select?: HistoricoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoSenha
     */
    omit?: HistoricoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoSenhaInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoSenha to fetch.
     */
    where?: HistoricoSenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoSenhas to fetch.
     */
    orderBy?: HistoricoSenhaOrderByWithRelationInput | HistoricoSenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricoSenhas.
     */
    cursor?: HistoricoSenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoSenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoSenhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricoSenhas.
     */
    distinct?: HistoricoSenhaScalarFieldEnum | HistoricoSenhaScalarFieldEnum[]
  }

  /**
   * HistoricoSenha findFirstOrThrow
   */
  export type HistoricoSenhaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoSenha
     */
    select?: HistoricoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoSenha
     */
    omit?: HistoricoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoSenhaInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoSenha to fetch.
     */
    where?: HistoricoSenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoSenhas to fetch.
     */
    orderBy?: HistoricoSenhaOrderByWithRelationInput | HistoricoSenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricoSenhas.
     */
    cursor?: HistoricoSenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoSenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoSenhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricoSenhas.
     */
    distinct?: HistoricoSenhaScalarFieldEnum | HistoricoSenhaScalarFieldEnum[]
  }

  /**
   * HistoricoSenha findMany
   */
  export type HistoricoSenhaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoSenha
     */
    select?: HistoricoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoSenha
     */
    omit?: HistoricoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoSenhaInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoSenhas to fetch.
     */
    where?: HistoricoSenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoSenhas to fetch.
     */
    orderBy?: HistoricoSenhaOrderByWithRelationInput | HistoricoSenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoricoSenhas.
     */
    cursor?: HistoricoSenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoSenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoSenhas.
     */
    skip?: number
    distinct?: HistoricoSenhaScalarFieldEnum | HistoricoSenhaScalarFieldEnum[]
  }

  /**
   * HistoricoSenha create
   */
  export type HistoricoSenhaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoSenha
     */
    select?: HistoricoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoSenha
     */
    omit?: HistoricoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoSenhaInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoricoSenha.
     */
    data: XOR<HistoricoSenhaCreateInput, HistoricoSenhaUncheckedCreateInput>
  }

  /**
   * HistoricoSenha createMany
   */
  export type HistoricoSenhaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoricoSenhas.
     */
    data: HistoricoSenhaCreateManyInput | HistoricoSenhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoricoSenha createManyAndReturn
   */
  export type HistoricoSenhaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoSenha
     */
    select?: HistoricoSenhaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoSenha
     */
    omit?: HistoricoSenhaOmit<ExtArgs> | null
    /**
     * The data used to create many HistoricoSenhas.
     */
    data: HistoricoSenhaCreateManyInput | HistoricoSenhaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoSenhaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoricoSenha update
   */
  export type HistoricoSenhaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoSenha
     */
    select?: HistoricoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoSenha
     */
    omit?: HistoricoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoSenhaInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoricoSenha.
     */
    data: XOR<HistoricoSenhaUpdateInput, HistoricoSenhaUncheckedUpdateInput>
    /**
     * Choose, which HistoricoSenha to update.
     */
    where: HistoricoSenhaWhereUniqueInput
  }

  /**
   * HistoricoSenha updateMany
   */
  export type HistoricoSenhaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoricoSenhas.
     */
    data: XOR<HistoricoSenhaUpdateManyMutationInput, HistoricoSenhaUncheckedUpdateManyInput>
    /**
     * Filter which HistoricoSenhas to update
     */
    where?: HistoricoSenhaWhereInput
    /**
     * Limit how many HistoricoSenhas to update.
     */
    limit?: number
  }

  /**
   * HistoricoSenha updateManyAndReturn
   */
  export type HistoricoSenhaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoSenha
     */
    select?: HistoricoSenhaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoSenha
     */
    omit?: HistoricoSenhaOmit<ExtArgs> | null
    /**
     * The data used to update HistoricoSenhas.
     */
    data: XOR<HistoricoSenhaUpdateManyMutationInput, HistoricoSenhaUncheckedUpdateManyInput>
    /**
     * Filter which HistoricoSenhas to update
     */
    where?: HistoricoSenhaWhereInput
    /**
     * Limit how many HistoricoSenhas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoSenhaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoricoSenha upsert
   */
  export type HistoricoSenhaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoSenha
     */
    select?: HistoricoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoSenha
     */
    omit?: HistoricoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoSenhaInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoricoSenha to update in case it exists.
     */
    where: HistoricoSenhaWhereUniqueInput
    /**
     * In case the HistoricoSenha found by the `where` argument doesn't exist, create a new HistoricoSenha with this data.
     */
    create: XOR<HistoricoSenhaCreateInput, HistoricoSenhaUncheckedCreateInput>
    /**
     * In case the HistoricoSenha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoricoSenhaUpdateInput, HistoricoSenhaUncheckedUpdateInput>
  }

  /**
   * HistoricoSenha delete
   */
  export type HistoricoSenhaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoSenha
     */
    select?: HistoricoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoSenha
     */
    omit?: HistoricoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoSenhaInclude<ExtArgs> | null
    /**
     * Filter which HistoricoSenha to delete.
     */
    where: HistoricoSenhaWhereUniqueInput
  }

  /**
   * HistoricoSenha deleteMany
   */
  export type HistoricoSenhaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoricoSenhas to delete
     */
    where?: HistoricoSenhaWhereInput
    /**
     * Limit how many HistoricoSenhas to delete.
     */
    limit?: number
  }

  /**
   * HistoricoSenha.colaborador
   */
  export type HistoricoSenha$colaboradorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    where?: ColaboradorWhereInput
  }

  /**
   * HistoricoSenha without action
   */
  export type HistoricoSenhaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoSenha
     */
    select?: HistoricoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoSenha
     */
    omit?: HistoricoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoSenhaInclude<ExtArgs> | null
  }


  /**
   * Model VisualizacaoSenha
   */

  export type AggregateVisualizacaoSenha = {
    _count: VisualizacaoSenhaCountAggregateOutputType | null
    _min: VisualizacaoSenhaMinAggregateOutputType | null
    _max: VisualizacaoSenhaMaxAggregateOutputType | null
  }

  export type VisualizacaoSenhaMinAggregateOutputType = {
    id: string | null
    plataformaId: string | null
    colaboradorId: string | null
    dataVisualizacao: Date | null
    ip: string | null
    userAgent: string | null
  }

  export type VisualizacaoSenhaMaxAggregateOutputType = {
    id: string | null
    plataformaId: string | null
    colaboradorId: string | null
    dataVisualizacao: Date | null
    ip: string | null
    userAgent: string | null
  }

  export type VisualizacaoSenhaCountAggregateOutputType = {
    id: number
    plataformaId: number
    colaboradorId: number
    dataVisualizacao: number
    ip: number
    userAgent: number
    _all: number
  }


  export type VisualizacaoSenhaMinAggregateInputType = {
    id?: true
    plataformaId?: true
    colaboradorId?: true
    dataVisualizacao?: true
    ip?: true
    userAgent?: true
  }

  export type VisualizacaoSenhaMaxAggregateInputType = {
    id?: true
    plataformaId?: true
    colaboradorId?: true
    dataVisualizacao?: true
    ip?: true
    userAgent?: true
  }

  export type VisualizacaoSenhaCountAggregateInputType = {
    id?: true
    plataformaId?: true
    colaboradorId?: true
    dataVisualizacao?: true
    ip?: true
    userAgent?: true
    _all?: true
  }

  export type VisualizacaoSenhaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisualizacaoSenha to aggregate.
     */
    where?: VisualizacaoSenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisualizacaoSenhas to fetch.
     */
    orderBy?: VisualizacaoSenhaOrderByWithRelationInput | VisualizacaoSenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisualizacaoSenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisualizacaoSenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisualizacaoSenhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisualizacaoSenhas
    **/
    _count?: true | VisualizacaoSenhaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisualizacaoSenhaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisualizacaoSenhaMaxAggregateInputType
  }

  export type GetVisualizacaoSenhaAggregateType<T extends VisualizacaoSenhaAggregateArgs> = {
        [P in keyof T & keyof AggregateVisualizacaoSenha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisualizacaoSenha[P]>
      : GetScalarType<T[P], AggregateVisualizacaoSenha[P]>
  }




  export type VisualizacaoSenhaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisualizacaoSenhaWhereInput
    orderBy?: VisualizacaoSenhaOrderByWithAggregationInput | VisualizacaoSenhaOrderByWithAggregationInput[]
    by: VisualizacaoSenhaScalarFieldEnum[] | VisualizacaoSenhaScalarFieldEnum
    having?: VisualizacaoSenhaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisualizacaoSenhaCountAggregateInputType | true
    _min?: VisualizacaoSenhaMinAggregateInputType
    _max?: VisualizacaoSenhaMaxAggregateInputType
  }

  export type VisualizacaoSenhaGroupByOutputType = {
    id: string
    plataformaId: string
    colaboradorId: string
    dataVisualizacao: Date
    ip: string | null
    userAgent: string | null
    _count: VisualizacaoSenhaCountAggregateOutputType | null
    _min: VisualizacaoSenhaMinAggregateOutputType | null
    _max: VisualizacaoSenhaMaxAggregateOutputType | null
  }

  type GetVisualizacaoSenhaGroupByPayload<T extends VisualizacaoSenhaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisualizacaoSenhaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisualizacaoSenhaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisualizacaoSenhaGroupByOutputType[P]>
            : GetScalarType<T[P], VisualizacaoSenhaGroupByOutputType[P]>
        }
      >
    >


  export type VisualizacaoSenhaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plataformaId?: boolean
    colaboradorId?: boolean
    dataVisualizacao?: boolean
    ip?: boolean
    userAgent?: boolean
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visualizacaoSenha"]>

  export type VisualizacaoSenhaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plataformaId?: boolean
    colaboradorId?: boolean
    dataVisualizacao?: boolean
    ip?: boolean
    userAgent?: boolean
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visualizacaoSenha"]>

  export type VisualizacaoSenhaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plataformaId?: boolean
    colaboradorId?: boolean
    dataVisualizacao?: boolean
    ip?: boolean
    userAgent?: boolean
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visualizacaoSenha"]>

  export type VisualizacaoSenhaSelectScalar = {
    id?: boolean
    plataformaId?: boolean
    colaboradorId?: boolean
    dataVisualizacao?: boolean
    ip?: boolean
    userAgent?: boolean
  }

  export type VisualizacaoSenhaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plataformaId" | "colaboradorId" | "dataVisualizacao" | "ip" | "userAgent", ExtArgs["result"]["visualizacaoSenha"]>
  export type VisualizacaoSenhaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
  }
  export type VisualizacaoSenhaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
  }
  export type VisualizacaoSenhaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
  }

  export type $VisualizacaoSenhaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisualizacaoSenha"
    objects: {
      plataforma: Prisma.$PlataformaPayload<ExtArgs>
      colaborador: Prisma.$ColaboradorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plataformaId: string
      colaboradorId: string
      dataVisualizacao: Date
      ip: string | null
      userAgent: string | null
    }, ExtArgs["result"]["visualizacaoSenha"]>
    composites: {}
  }

  type VisualizacaoSenhaGetPayload<S extends boolean | null | undefined | VisualizacaoSenhaDefaultArgs> = $Result.GetResult<Prisma.$VisualizacaoSenhaPayload, S>

  type VisualizacaoSenhaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisualizacaoSenhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisualizacaoSenhaCountAggregateInputType | true
    }

  export interface VisualizacaoSenhaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisualizacaoSenha'], meta: { name: 'VisualizacaoSenha' } }
    /**
     * Find zero or one VisualizacaoSenha that matches the filter.
     * @param {VisualizacaoSenhaFindUniqueArgs} args - Arguments to find a VisualizacaoSenha
     * @example
     * // Get one VisualizacaoSenha
     * const visualizacaoSenha = await prisma.visualizacaoSenha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisualizacaoSenhaFindUniqueArgs>(args: SelectSubset<T, VisualizacaoSenhaFindUniqueArgs<ExtArgs>>): Prisma__VisualizacaoSenhaClient<$Result.GetResult<Prisma.$VisualizacaoSenhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VisualizacaoSenha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisualizacaoSenhaFindUniqueOrThrowArgs} args - Arguments to find a VisualizacaoSenha
     * @example
     * // Get one VisualizacaoSenha
     * const visualizacaoSenha = await prisma.visualizacaoSenha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisualizacaoSenhaFindUniqueOrThrowArgs>(args: SelectSubset<T, VisualizacaoSenhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisualizacaoSenhaClient<$Result.GetResult<Prisma.$VisualizacaoSenhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisualizacaoSenha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualizacaoSenhaFindFirstArgs} args - Arguments to find a VisualizacaoSenha
     * @example
     * // Get one VisualizacaoSenha
     * const visualizacaoSenha = await prisma.visualizacaoSenha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisualizacaoSenhaFindFirstArgs>(args?: SelectSubset<T, VisualizacaoSenhaFindFirstArgs<ExtArgs>>): Prisma__VisualizacaoSenhaClient<$Result.GetResult<Prisma.$VisualizacaoSenhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisualizacaoSenha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualizacaoSenhaFindFirstOrThrowArgs} args - Arguments to find a VisualizacaoSenha
     * @example
     * // Get one VisualizacaoSenha
     * const visualizacaoSenha = await prisma.visualizacaoSenha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisualizacaoSenhaFindFirstOrThrowArgs>(args?: SelectSubset<T, VisualizacaoSenhaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisualizacaoSenhaClient<$Result.GetResult<Prisma.$VisualizacaoSenhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VisualizacaoSenhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualizacaoSenhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisualizacaoSenhas
     * const visualizacaoSenhas = await prisma.visualizacaoSenha.findMany()
     * 
     * // Get first 10 VisualizacaoSenhas
     * const visualizacaoSenhas = await prisma.visualizacaoSenha.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visualizacaoSenhaWithIdOnly = await prisma.visualizacaoSenha.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisualizacaoSenhaFindManyArgs>(args?: SelectSubset<T, VisualizacaoSenhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisualizacaoSenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VisualizacaoSenha.
     * @param {VisualizacaoSenhaCreateArgs} args - Arguments to create a VisualizacaoSenha.
     * @example
     * // Create one VisualizacaoSenha
     * const VisualizacaoSenha = await prisma.visualizacaoSenha.create({
     *   data: {
     *     // ... data to create a VisualizacaoSenha
     *   }
     * })
     * 
     */
    create<T extends VisualizacaoSenhaCreateArgs>(args: SelectSubset<T, VisualizacaoSenhaCreateArgs<ExtArgs>>): Prisma__VisualizacaoSenhaClient<$Result.GetResult<Prisma.$VisualizacaoSenhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VisualizacaoSenhas.
     * @param {VisualizacaoSenhaCreateManyArgs} args - Arguments to create many VisualizacaoSenhas.
     * @example
     * // Create many VisualizacaoSenhas
     * const visualizacaoSenha = await prisma.visualizacaoSenha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisualizacaoSenhaCreateManyArgs>(args?: SelectSubset<T, VisualizacaoSenhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VisualizacaoSenhas and returns the data saved in the database.
     * @param {VisualizacaoSenhaCreateManyAndReturnArgs} args - Arguments to create many VisualizacaoSenhas.
     * @example
     * // Create many VisualizacaoSenhas
     * const visualizacaoSenha = await prisma.visualizacaoSenha.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VisualizacaoSenhas and only return the `id`
     * const visualizacaoSenhaWithIdOnly = await prisma.visualizacaoSenha.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisualizacaoSenhaCreateManyAndReturnArgs>(args?: SelectSubset<T, VisualizacaoSenhaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisualizacaoSenhaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VisualizacaoSenha.
     * @param {VisualizacaoSenhaDeleteArgs} args - Arguments to delete one VisualizacaoSenha.
     * @example
     * // Delete one VisualizacaoSenha
     * const VisualizacaoSenha = await prisma.visualizacaoSenha.delete({
     *   where: {
     *     // ... filter to delete one VisualizacaoSenha
     *   }
     * })
     * 
     */
    delete<T extends VisualizacaoSenhaDeleteArgs>(args: SelectSubset<T, VisualizacaoSenhaDeleteArgs<ExtArgs>>): Prisma__VisualizacaoSenhaClient<$Result.GetResult<Prisma.$VisualizacaoSenhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VisualizacaoSenha.
     * @param {VisualizacaoSenhaUpdateArgs} args - Arguments to update one VisualizacaoSenha.
     * @example
     * // Update one VisualizacaoSenha
     * const visualizacaoSenha = await prisma.visualizacaoSenha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisualizacaoSenhaUpdateArgs>(args: SelectSubset<T, VisualizacaoSenhaUpdateArgs<ExtArgs>>): Prisma__VisualizacaoSenhaClient<$Result.GetResult<Prisma.$VisualizacaoSenhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VisualizacaoSenhas.
     * @param {VisualizacaoSenhaDeleteManyArgs} args - Arguments to filter VisualizacaoSenhas to delete.
     * @example
     * // Delete a few VisualizacaoSenhas
     * const { count } = await prisma.visualizacaoSenha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisualizacaoSenhaDeleteManyArgs>(args?: SelectSubset<T, VisualizacaoSenhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisualizacaoSenhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualizacaoSenhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisualizacaoSenhas
     * const visualizacaoSenha = await prisma.visualizacaoSenha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisualizacaoSenhaUpdateManyArgs>(args: SelectSubset<T, VisualizacaoSenhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisualizacaoSenhas and returns the data updated in the database.
     * @param {VisualizacaoSenhaUpdateManyAndReturnArgs} args - Arguments to update many VisualizacaoSenhas.
     * @example
     * // Update many VisualizacaoSenhas
     * const visualizacaoSenha = await prisma.visualizacaoSenha.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VisualizacaoSenhas and only return the `id`
     * const visualizacaoSenhaWithIdOnly = await prisma.visualizacaoSenha.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VisualizacaoSenhaUpdateManyAndReturnArgs>(args: SelectSubset<T, VisualizacaoSenhaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisualizacaoSenhaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VisualizacaoSenha.
     * @param {VisualizacaoSenhaUpsertArgs} args - Arguments to update or create a VisualizacaoSenha.
     * @example
     * // Update or create a VisualizacaoSenha
     * const visualizacaoSenha = await prisma.visualizacaoSenha.upsert({
     *   create: {
     *     // ... data to create a VisualizacaoSenha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisualizacaoSenha we want to update
     *   }
     * })
     */
    upsert<T extends VisualizacaoSenhaUpsertArgs>(args: SelectSubset<T, VisualizacaoSenhaUpsertArgs<ExtArgs>>): Prisma__VisualizacaoSenhaClient<$Result.GetResult<Prisma.$VisualizacaoSenhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VisualizacaoSenhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualizacaoSenhaCountArgs} args - Arguments to filter VisualizacaoSenhas to count.
     * @example
     * // Count the number of VisualizacaoSenhas
     * const count = await prisma.visualizacaoSenha.count({
     *   where: {
     *     // ... the filter for the VisualizacaoSenhas we want to count
     *   }
     * })
    **/
    count<T extends VisualizacaoSenhaCountArgs>(
      args?: Subset<T, VisualizacaoSenhaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisualizacaoSenhaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisualizacaoSenha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualizacaoSenhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisualizacaoSenhaAggregateArgs>(args: Subset<T, VisualizacaoSenhaAggregateArgs>): Prisma.PrismaPromise<GetVisualizacaoSenhaAggregateType<T>>

    /**
     * Group by VisualizacaoSenha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualizacaoSenhaGroupByArgs} args - Group by arguments.
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
      T extends VisualizacaoSenhaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisualizacaoSenhaGroupByArgs['orderBy'] }
        : { orderBy?: VisualizacaoSenhaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisualizacaoSenhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisualizacaoSenhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisualizacaoSenha model
   */
  readonly fields: VisualizacaoSenhaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisualizacaoSenha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisualizacaoSenhaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plataforma<T extends PlataformaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlataformaDefaultArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    colaborador<T extends ColaboradorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ColaboradorDefaultArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VisualizacaoSenha model
   */
  interface VisualizacaoSenhaFieldRefs {
    readonly id: FieldRef<"VisualizacaoSenha", 'String'>
    readonly plataformaId: FieldRef<"VisualizacaoSenha", 'String'>
    readonly colaboradorId: FieldRef<"VisualizacaoSenha", 'String'>
    readonly dataVisualizacao: FieldRef<"VisualizacaoSenha", 'DateTime'>
    readonly ip: FieldRef<"VisualizacaoSenha", 'String'>
    readonly userAgent: FieldRef<"VisualizacaoSenha", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VisualizacaoSenha findUnique
   */
  export type VisualizacaoSenhaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualizacaoSenha
     */
    select?: VisualizacaoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualizacaoSenha
     */
    omit?: VisualizacaoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizacaoSenhaInclude<ExtArgs> | null
    /**
     * Filter, which VisualizacaoSenha to fetch.
     */
    where: VisualizacaoSenhaWhereUniqueInput
  }

  /**
   * VisualizacaoSenha findUniqueOrThrow
   */
  export type VisualizacaoSenhaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualizacaoSenha
     */
    select?: VisualizacaoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualizacaoSenha
     */
    omit?: VisualizacaoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizacaoSenhaInclude<ExtArgs> | null
    /**
     * Filter, which VisualizacaoSenha to fetch.
     */
    where: VisualizacaoSenhaWhereUniqueInput
  }

  /**
   * VisualizacaoSenha findFirst
   */
  export type VisualizacaoSenhaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualizacaoSenha
     */
    select?: VisualizacaoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualizacaoSenha
     */
    omit?: VisualizacaoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizacaoSenhaInclude<ExtArgs> | null
    /**
     * Filter, which VisualizacaoSenha to fetch.
     */
    where?: VisualizacaoSenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisualizacaoSenhas to fetch.
     */
    orderBy?: VisualizacaoSenhaOrderByWithRelationInput | VisualizacaoSenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisualizacaoSenhas.
     */
    cursor?: VisualizacaoSenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisualizacaoSenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisualizacaoSenhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisualizacaoSenhas.
     */
    distinct?: VisualizacaoSenhaScalarFieldEnum | VisualizacaoSenhaScalarFieldEnum[]
  }

  /**
   * VisualizacaoSenha findFirstOrThrow
   */
  export type VisualizacaoSenhaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualizacaoSenha
     */
    select?: VisualizacaoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualizacaoSenha
     */
    omit?: VisualizacaoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizacaoSenhaInclude<ExtArgs> | null
    /**
     * Filter, which VisualizacaoSenha to fetch.
     */
    where?: VisualizacaoSenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisualizacaoSenhas to fetch.
     */
    orderBy?: VisualizacaoSenhaOrderByWithRelationInput | VisualizacaoSenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisualizacaoSenhas.
     */
    cursor?: VisualizacaoSenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisualizacaoSenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisualizacaoSenhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisualizacaoSenhas.
     */
    distinct?: VisualizacaoSenhaScalarFieldEnum | VisualizacaoSenhaScalarFieldEnum[]
  }

  /**
   * VisualizacaoSenha findMany
   */
  export type VisualizacaoSenhaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualizacaoSenha
     */
    select?: VisualizacaoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualizacaoSenha
     */
    omit?: VisualizacaoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizacaoSenhaInclude<ExtArgs> | null
    /**
     * Filter, which VisualizacaoSenhas to fetch.
     */
    where?: VisualizacaoSenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisualizacaoSenhas to fetch.
     */
    orderBy?: VisualizacaoSenhaOrderByWithRelationInput | VisualizacaoSenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisualizacaoSenhas.
     */
    cursor?: VisualizacaoSenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisualizacaoSenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisualizacaoSenhas.
     */
    skip?: number
    distinct?: VisualizacaoSenhaScalarFieldEnum | VisualizacaoSenhaScalarFieldEnum[]
  }

  /**
   * VisualizacaoSenha create
   */
  export type VisualizacaoSenhaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualizacaoSenha
     */
    select?: VisualizacaoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualizacaoSenha
     */
    omit?: VisualizacaoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizacaoSenhaInclude<ExtArgs> | null
    /**
     * The data needed to create a VisualizacaoSenha.
     */
    data: XOR<VisualizacaoSenhaCreateInput, VisualizacaoSenhaUncheckedCreateInput>
  }

  /**
   * VisualizacaoSenha createMany
   */
  export type VisualizacaoSenhaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VisualizacaoSenhas.
     */
    data: VisualizacaoSenhaCreateManyInput | VisualizacaoSenhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisualizacaoSenha createManyAndReturn
   */
  export type VisualizacaoSenhaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualizacaoSenha
     */
    select?: VisualizacaoSenhaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisualizacaoSenha
     */
    omit?: VisualizacaoSenhaOmit<ExtArgs> | null
    /**
     * The data used to create many VisualizacaoSenhas.
     */
    data: VisualizacaoSenhaCreateManyInput | VisualizacaoSenhaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizacaoSenhaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VisualizacaoSenha update
   */
  export type VisualizacaoSenhaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualizacaoSenha
     */
    select?: VisualizacaoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualizacaoSenha
     */
    omit?: VisualizacaoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizacaoSenhaInclude<ExtArgs> | null
    /**
     * The data needed to update a VisualizacaoSenha.
     */
    data: XOR<VisualizacaoSenhaUpdateInput, VisualizacaoSenhaUncheckedUpdateInput>
    /**
     * Choose, which VisualizacaoSenha to update.
     */
    where: VisualizacaoSenhaWhereUniqueInput
  }

  /**
   * VisualizacaoSenha updateMany
   */
  export type VisualizacaoSenhaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisualizacaoSenhas.
     */
    data: XOR<VisualizacaoSenhaUpdateManyMutationInput, VisualizacaoSenhaUncheckedUpdateManyInput>
    /**
     * Filter which VisualizacaoSenhas to update
     */
    where?: VisualizacaoSenhaWhereInput
    /**
     * Limit how many VisualizacaoSenhas to update.
     */
    limit?: number
  }

  /**
   * VisualizacaoSenha updateManyAndReturn
   */
  export type VisualizacaoSenhaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualizacaoSenha
     */
    select?: VisualizacaoSenhaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisualizacaoSenha
     */
    omit?: VisualizacaoSenhaOmit<ExtArgs> | null
    /**
     * The data used to update VisualizacaoSenhas.
     */
    data: XOR<VisualizacaoSenhaUpdateManyMutationInput, VisualizacaoSenhaUncheckedUpdateManyInput>
    /**
     * Filter which VisualizacaoSenhas to update
     */
    where?: VisualizacaoSenhaWhereInput
    /**
     * Limit how many VisualizacaoSenhas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizacaoSenhaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VisualizacaoSenha upsert
   */
  export type VisualizacaoSenhaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualizacaoSenha
     */
    select?: VisualizacaoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualizacaoSenha
     */
    omit?: VisualizacaoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizacaoSenhaInclude<ExtArgs> | null
    /**
     * The filter to search for the VisualizacaoSenha to update in case it exists.
     */
    where: VisualizacaoSenhaWhereUniqueInput
    /**
     * In case the VisualizacaoSenha found by the `where` argument doesn't exist, create a new VisualizacaoSenha with this data.
     */
    create: XOR<VisualizacaoSenhaCreateInput, VisualizacaoSenhaUncheckedCreateInput>
    /**
     * In case the VisualizacaoSenha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisualizacaoSenhaUpdateInput, VisualizacaoSenhaUncheckedUpdateInput>
  }

  /**
   * VisualizacaoSenha delete
   */
  export type VisualizacaoSenhaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualizacaoSenha
     */
    select?: VisualizacaoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualizacaoSenha
     */
    omit?: VisualizacaoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizacaoSenhaInclude<ExtArgs> | null
    /**
     * Filter which VisualizacaoSenha to delete.
     */
    where: VisualizacaoSenhaWhereUniqueInput
  }

  /**
   * VisualizacaoSenha deleteMany
   */
  export type VisualizacaoSenhaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisualizacaoSenhas to delete
     */
    where?: VisualizacaoSenhaWhereInput
    /**
     * Limit how many VisualizacaoSenhas to delete.
     */
    limit?: number
  }

  /**
   * VisualizacaoSenha without action
   */
  export type VisualizacaoSenhaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualizacaoSenha
     */
    select?: VisualizacaoSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualizacaoSenha
     */
    omit?: VisualizacaoSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizacaoSenhaInclude<ExtArgs> | null
  }


  /**
   * Model TicketSenha
   */

  export type AggregateTicketSenha = {
    _count: TicketSenhaCountAggregateOutputType | null
    _min: TicketSenhaMinAggregateOutputType | null
    _max: TicketSenhaMaxAggregateOutputType | null
  }

  export type TicketSenhaMinAggregateOutputType = {
    id: string | null
    plataformaId: string | null
    colaboradorId: string | null
    descricaoProblema: string | null
    status: $Enums.StatusTicket | null
    dataAbertura: Date | null
    dataResolucao: Date | null
    observacoesResolucao: string | null
  }

  export type TicketSenhaMaxAggregateOutputType = {
    id: string | null
    plataformaId: string | null
    colaboradorId: string | null
    descricaoProblema: string | null
    status: $Enums.StatusTicket | null
    dataAbertura: Date | null
    dataResolucao: Date | null
    observacoesResolucao: string | null
  }

  export type TicketSenhaCountAggregateOutputType = {
    id: number
    plataformaId: number
    colaboradorId: number
    descricaoProblema: number
    status: number
    dataAbertura: number
    dataResolucao: number
    observacoesResolucao: number
    _all: number
  }


  export type TicketSenhaMinAggregateInputType = {
    id?: true
    plataformaId?: true
    colaboradorId?: true
    descricaoProblema?: true
    status?: true
    dataAbertura?: true
    dataResolucao?: true
    observacoesResolucao?: true
  }

  export type TicketSenhaMaxAggregateInputType = {
    id?: true
    plataformaId?: true
    colaboradorId?: true
    descricaoProblema?: true
    status?: true
    dataAbertura?: true
    dataResolucao?: true
    observacoesResolucao?: true
  }

  export type TicketSenhaCountAggregateInputType = {
    id?: true
    plataformaId?: true
    colaboradorId?: true
    descricaoProblema?: true
    status?: true
    dataAbertura?: true
    dataResolucao?: true
    observacoesResolucao?: true
    _all?: true
  }

  export type TicketSenhaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketSenha to aggregate.
     */
    where?: TicketSenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketSenhas to fetch.
     */
    orderBy?: TicketSenhaOrderByWithRelationInput | TicketSenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketSenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketSenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketSenhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketSenhas
    **/
    _count?: true | TicketSenhaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketSenhaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketSenhaMaxAggregateInputType
  }

  export type GetTicketSenhaAggregateType<T extends TicketSenhaAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketSenha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketSenha[P]>
      : GetScalarType<T[P], AggregateTicketSenha[P]>
  }




  export type TicketSenhaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketSenhaWhereInput
    orderBy?: TicketSenhaOrderByWithAggregationInput | TicketSenhaOrderByWithAggregationInput[]
    by: TicketSenhaScalarFieldEnum[] | TicketSenhaScalarFieldEnum
    having?: TicketSenhaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketSenhaCountAggregateInputType | true
    _min?: TicketSenhaMinAggregateInputType
    _max?: TicketSenhaMaxAggregateInputType
  }

  export type TicketSenhaGroupByOutputType = {
    id: string
    plataformaId: string
    colaboradorId: string
    descricaoProblema: string
    status: $Enums.StatusTicket
    dataAbertura: Date
    dataResolucao: Date | null
    observacoesResolucao: string | null
    _count: TicketSenhaCountAggregateOutputType | null
    _min: TicketSenhaMinAggregateOutputType | null
    _max: TicketSenhaMaxAggregateOutputType | null
  }

  type GetTicketSenhaGroupByPayload<T extends TicketSenhaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketSenhaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketSenhaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketSenhaGroupByOutputType[P]>
            : GetScalarType<T[P], TicketSenhaGroupByOutputType[P]>
        }
      >
    >


  export type TicketSenhaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plataformaId?: boolean
    colaboradorId?: boolean
    descricaoProblema?: boolean
    status?: boolean
    dataAbertura?: boolean
    dataResolucao?: boolean
    observacoesResolucao?: boolean
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketSenha"]>

  export type TicketSenhaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plataformaId?: boolean
    colaboradorId?: boolean
    descricaoProblema?: boolean
    status?: boolean
    dataAbertura?: boolean
    dataResolucao?: boolean
    observacoesResolucao?: boolean
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketSenha"]>

  export type TicketSenhaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plataformaId?: boolean
    colaboradorId?: boolean
    descricaoProblema?: boolean
    status?: boolean
    dataAbertura?: boolean
    dataResolucao?: boolean
    observacoesResolucao?: boolean
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketSenha"]>

  export type TicketSenhaSelectScalar = {
    id?: boolean
    plataformaId?: boolean
    colaboradorId?: boolean
    descricaoProblema?: boolean
    status?: boolean
    dataAbertura?: boolean
    dataResolucao?: boolean
    observacoesResolucao?: boolean
  }

  export type TicketSenhaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plataformaId" | "colaboradorId" | "descricaoProblema" | "status" | "dataAbertura" | "dataResolucao" | "observacoesResolucao", ExtArgs["result"]["ticketSenha"]>
  export type TicketSenhaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
  }
  export type TicketSenhaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
  }
  export type TicketSenhaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
    colaborador?: boolean | ColaboradorDefaultArgs<ExtArgs>
  }

  export type $TicketSenhaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketSenha"
    objects: {
      plataforma: Prisma.$PlataformaPayload<ExtArgs>
      colaborador: Prisma.$ColaboradorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plataformaId: string
      colaboradorId: string
      descricaoProblema: string
      status: $Enums.StatusTicket
      dataAbertura: Date
      dataResolucao: Date | null
      observacoesResolucao: string | null
    }, ExtArgs["result"]["ticketSenha"]>
    composites: {}
  }

  type TicketSenhaGetPayload<S extends boolean | null | undefined | TicketSenhaDefaultArgs> = $Result.GetResult<Prisma.$TicketSenhaPayload, S>

  type TicketSenhaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketSenhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketSenhaCountAggregateInputType | true
    }

  export interface TicketSenhaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketSenha'], meta: { name: 'TicketSenha' } }
    /**
     * Find zero or one TicketSenha that matches the filter.
     * @param {TicketSenhaFindUniqueArgs} args - Arguments to find a TicketSenha
     * @example
     * // Get one TicketSenha
     * const ticketSenha = await prisma.ticketSenha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketSenhaFindUniqueArgs>(args: SelectSubset<T, TicketSenhaFindUniqueArgs<ExtArgs>>): Prisma__TicketSenhaClient<$Result.GetResult<Prisma.$TicketSenhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketSenha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketSenhaFindUniqueOrThrowArgs} args - Arguments to find a TicketSenha
     * @example
     * // Get one TicketSenha
     * const ticketSenha = await prisma.ticketSenha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketSenhaFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketSenhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketSenhaClient<$Result.GetResult<Prisma.$TicketSenhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketSenha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketSenhaFindFirstArgs} args - Arguments to find a TicketSenha
     * @example
     * // Get one TicketSenha
     * const ticketSenha = await prisma.ticketSenha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketSenhaFindFirstArgs>(args?: SelectSubset<T, TicketSenhaFindFirstArgs<ExtArgs>>): Prisma__TicketSenhaClient<$Result.GetResult<Prisma.$TicketSenhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketSenha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketSenhaFindFirstOrThrowArgs} args - Arguments to find a TicketSenha
     * @example
     * // Get one TicketSenha
     * const ticketSenha = await prisma.ticketSenha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketSenhaFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketSenhaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketSenhaClient<$Result.GetResult<Prisma.$TicketSenhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketSenhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketSenhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketSenhas
     * const ticketSenhas = await prisma.ticketSenha.findMany()
     * 
     * // Get first 10 TicketSenhas
     * const ticketSenhas = await prisma.ticketSenha.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketSenhaWithIdOnly = await prisma.ticketSenha.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketSenhaFindManyArgs>(args?: SelectSubset<T, TicketSenhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketSenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketSenha.
     * @param {TicketSenhaCreateArgs} args - Arguments to create a TicketSenha.
     * @example
     * // Create one TicketSenha
     * const TicketSenha = await prisma.ticketSenha.create({
     *   data: {
     *     // ... data to create a TicketSenha
     *   }
     * })
     * 
     */
    create<T extends TicketSenhaCreateArgs>(args: SelectSubset<T, TicketSenhaCreateArgs<ExtArgs>>): Prisma__TicketSenhaClient<$Result.GetResult<Prisma.$TicketSenhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketSenhas.
     * @param {TicketSenhaCreateManyArgs} args - Arguments to create many TicketSenhas.
     * @example
     * // Create many TicketSenhas
     * const ticketSenha = await prisma.ticketSenha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketSenhaCreateManyArgs>(args?: SelectSubset<T, TicketSenhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketSenhas and returns the data saved in the database.
     * @param {TicketSenhaCreateManyAndReturnArgs} args - Arguments to create many TicketSenhas.
     * @example
     * // Create many TicketSenhas
     * const ticketSenha = await prisma.ticketSenha.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketSenhas and only return the `id`
     * const ticketSenhaWithIdOnly = await prisma.ticketSenha.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketSenhaCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketSenhaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketSenhaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketSenha.
     * @param {TicketSenhaDeleteArgs} args - Arguments to delete one TicketSenha.
     * @example
     * // Delete one TicketSenha
     * const TicketSenha = await prisma.ticketSenha.delete({
     *   where: {
     *     // ... filter to delete one TicketSenha
     *   }
     * })
     * 
     */
    delete<T extends TicketSenhaDeleteArgs>(args: SelectSubset<T, TicketSenhaDeleteArgs<ExtArgs>>): Prisma__TicketSenhaClient<$Result.GetResult<Prisma.$TicketSenhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketSenha.
     * @param {TicketSenhaUpdateArgs} args - Arguments to update one TicketSenha.
     * @example
     * // Update one TicketSenha
     * const ticketSenha = await prisma.ticketSenha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketSenhaUpdateArgs>(args: SelectSubset<T, TicketSenhaUpdateArgs<ExtArgs>>): Prisma__TicketSenhaClient<$Result.GetResult<Prisma.$TicketSenhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketSenhas.
     * @param {TicketSenhaDeleteManyArgs} args - Arguments to filter TicketSenhas to delete.
     * @example
     * // Delete a few TicketSenhas
     * const { count } = await prisma.ticketSenha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketSenhaDeleteManyArgs>(args?: SelectSubset<T, TicketSenhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketSenhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketSenhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketSenhas
     * const ticketSenha = await prisma.ticketSenha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketSenhaUpdateManyArgs>(args: SelectSubset<T, TicketSenhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketSenhas and returns the data updated in the database.
     * @param {TicketSenhaUpdateManyAndReturnArgs} args - Arguments to update many TicketSenhas.
     * @example
     * // Update many TicketSenhas
     * const ticketSenha = await prisma.ticketSenha.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketSenhas and only return the `id`
     * const ticketSenhaWithIdOnly = await prisma.ticketSenha.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketSenhaUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketSenhaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketSenhaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketSenha.
     * @param {TicketSenhaUpsertArgs} args - Arguments to update or create a TicketSenha.
     * @example
     * // Update or create a TicketSenha
     * const ticketSenha = await prisma.ticketSenha.upsert({
     *   create: {
     *     // ... data to create a TicketSenha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketSenha we want to update
     *   }
     * })
     */
    upsert<T extends TicketSenhaUpsertArgs>(args: SelectSubset<T, TicketSenhaUpsertArgs<ExtArgs>>): Prisma__TicketSenhaClient<$Result.GetResult<Prisma.$TicketSenhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketSenhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketSenhaCountArgs} args - Arguments to filter TicketSenhas to count.
     * @example
     * // Count the number of TicketSenhas
     * const count = await prisma.ticketSenha.count({
     *   where: {
     *     // ... the filter for the TicketSenhas we want to count
     *   }
     * })
    **/
    count<T extends TicketSenhaCountArgs>(
      args?: Subset<T, TicketSenhaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketSenhaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketSenha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketSenhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketSenhaAggregateArgs>(args: Subset<T, TicketSenhaAggregateArgs>): Prisma.PrismaPromise<GetTicketSenhaAggregateType<T>>

    /**
     * Group by TicketSenha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketSenhaGroupByArgs} args - Group by arguments.
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
      T extends TicketSenhaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketSenhaGroupByArgs['orderBy'] }
        : { orderBy?: TicketSenhaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketSenhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketSenhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketSenha model
   */
  readonly fields: TicketSenhaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketSenha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketSenhaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plataforma<T extends PlataformaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlataformaDefaultArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    colaborador<T extends ColaboradorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ColaboradorDefaultArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TicketSenha model
   */
  interface TicketSenhaFieldRefs {
    readonly id: FieldRef<"TicketSenha", 'String'>
    readonly plataformaId: FieldRef<"TicketSenha", 'String'>
    readonly colaboradorId: FieldRef<"TicketSenha", 'String'>
    readonly descricaoProblema: FieldRef<"TicketSenha", 'String'>
    readonly status: FieldRef<"TicketSenha", 'StatusTicket'>
    readonly dataAbertura: FieldRef<"TicketSenha", 'DateTime'>
    readonly dataResolucao: FieldRef<"TicketSenha", 'DateTime'>
    readonly observacoesResolucao: FieldRef<"TicketSenha", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TicketSenha findUnique
   */
  export type TicketSenhaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSenha
     */
    select?: TicketSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSenha
     */
    omit?: TicketSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSenhaInclude<ExtArgs> | null
    /**
     * Filter, which TicketSenha to fetch.
     */
    where: TicketSenhaWhereUniqueInput
  }

  /**
   * TicketSenha findUniqueOrThrow
   */
  export type TicketSenhaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSenha
     */
    select?: TicketSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSenha
     */
    omit?: TicketSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSenhaInclude<ExtArgs> | null
    /**
     * Filter, which TicketSenha to fetch.
     */
    where: TicketSenhaWhereUniqueInput
  }

  /**
   * TicketSenha findFirst
   */
  export type TicketSenhaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSenha
     */
    select?: TicketSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSenha
     */
    omit?: TicketSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSenhaInclude<ExtArgs> | null
    /**
     * Filter, which TicketSenha to fetch.
     */
    where?: TicketSenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketSenhas to fetch.
     */
    orderBy?: TicketSenhaOrderByWithRelationInput | TicketSenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketSenhas.
     */
    cursor?: TicketSenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketSenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketSenhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketSenhas.
     */
    distinct?: TicketSenhaScalarFieldEnum | TicketSenhaScalarFieldEnum[]
  }

  /**
   * TicketSenha findFirstOrThrow
   */
  export type TicketSenhaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSenha
     */
    select?: TicketSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSenha
     */
    omit?: TicketSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSenhaInclude<ExtArgs> | null
    /**
     * Filter, which TicketSenha to fetch.
     */
    where?: TicketSenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketSenhas to fetch.
     */
    orderBy?: TicketSenhaOrderByWithRelationInput | TicketSenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketSenhas.
     */
    cursor?: TicketSenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketSenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketSenhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketSenhas.
     */
    distinct?: TicketSenhaScalarFieldEnum | TicketSenhaScalarFieldEnum[]
  }

  /**
   * TicketSenha findMany
   */
  export type TicketSenhaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSenha
     */
    select?: TicketSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSenha
     */
    omit?: TicketSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSenhaInclude<ExtArgs> | null
    /**
     * Filter, which TicketSenhas to fetch.
     */
    where?: TicketSenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketSenhas to fetch.
     */
    orderBy?: TicketSenhaOrderByWithRelationInput | TicketSenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketSenhas.
     */
    cursor?: TicketSenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketSenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketSenhas.
     */
    skip?: number
    distinct?: TicketSenhaScalarFieldEnum | TicketSenhaScalarFieldEnum[]
  }

  /**
   * TicketSenha create
   */
  export type TicketSenhaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSenha
     */
    select?: TicketSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSenha
     */
    omit?: TicketSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSenhaInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketSenha.
     */
    data: XOR<TicketSenhaCreateInput, TicketSenhaUncheckedCreateInput>
  }

  /**
   * TicketSenha createMany
   */
  export type TicketSenhaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketSenhas.
     */
    data: TicketSenhaCreateManyInput | TicketSenhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketSenha createManyAndReturn
   */
  export type TicketSenhaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSenha
     */
    select?: TicketSenhaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSenha
     */
    omit?: TicketSenhaOmit<ExtArgs> | null
    /**
     * The data used to create many TicketSenhas.
     */
    data: TicketSenhaCreateManyInput | TicketSenhaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSenhaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketSenha update
   */
  export type TicketSenhaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSenha
     */
    select?: TicketSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSenha
     */
    omit?: TicketSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSenhaInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketSenha.
     */
    data: XOR<TicketSenhaUpdateInput, TicketSenhaUncheckedUpdateInput>
    /**
     * Choose, which TicketSenha to update.
     */
    where: TicketSenhaWhereUniqueInput
  }

  /**
   * TicketSenha updateMany
   */
  export type TicketSenhaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketSenhas.
     */
    data: XOR<TicketSenhaUpdateManyMutationInput, TicketSenhaUncheckedUpdateManyInput>
    /**
     * Filter which TicketSenhas to update
     */
    where?: TicketSenhaWhereInput
    /**
     * Limit how many TicketSenhas to update.
     */
    limit?: number
  }

  /**
   * TicketSenha updateManyAndReturn
   */
  export type TicketSenhaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSenha
     */
    select?: TicketSenhaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSenha
     */
    omit?: TicketSenhaOmit<ExtArgs> | null
    /**
     * The data used to update TicketSenhas.
     */
    data: XOR<TicketSenhaUpdateManyMutationInput, TicketSenhaUncheckedUpdateManyInput>
    /**
     * Filter which TicketSenhas to update
     */
    where?: TicketSenhaWhereInput
    /**
     * Limit how many TicketSenhas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSenhaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketSenha upsert
   */
  export type TicketSenhaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSenha
     */
    select?: TicketSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSenha
     */
    omit?: TicketSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSenhaInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketSenha to update in case it exists.
     */
    where: TicketSenhaWhereUniqueInput
    /**
     * In case the TicketSenha found by the `where` argument doesn't exist, create a new TicketSenha with this data.
     */
    create: XOR<TicketSenhaCreateInput, TicketSenhaUncheckedCreateInput>
    /**
     * In case the TicketSenha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketSenhaUpdateInput, TicketSenhaUncheckedUpdateInput>
  }

  /**
   * TicketSenha delete
   */
  export type TicketSenhaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSenha
     */
    select?: TicketSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSenha
     */
    omit?: TicketSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSenhaInclude<ExtArgs> | null
    /**
     * Filter which TicketSenha to delete.
     */
    where: TicketSenhaWhereUniqueInput
  }

  /**
   * TicketSenha deleteMany
   */
  export type TicketSenhaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketSenhas to delete
     */
    where?: TicketSenhaWhereInput
    /**
     * Limit how many TicketSenhas to delete.
     */
    limit?: number
  }

  /**
   * TicketSenha without action
   */
  export type TicketSenhaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSenha
     */
    select?: TicketSenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSenha
     */
    omit?: TicketSenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSenhaInclude<ExtArgs> | null
  }


  /**
   * Model CustoPlataforma
   */

  export type AggregateCustoPlataforma = {
    _count: CustoPlataformaCountAggregateOutputType | null
    _avg: CustoPlataformaAvgAggregateOutputType | null
    _sum: CustoPlataformaSumAggregateOutputType | null
    _min: CustoPlataformaMinAggregateOutputType | null
    _max: CustoPlataformaMaxAggregateOutputType | null
  }

  export type CustoPlataformaAvgAggregateOutputType = {
    valor: number | null
  }

  export type CustoPlataformaSumAggregateOutputType = {
    valor: number | null
  }

  export type CustoPlataformaMinAggregateOutputType = {
    id: string | null
    plataformaId: string | null
    valor: number | null
    moeda: string | null
    dataInicio: Date | null
    dataFim: Date | null
    ativo: boolean | null
    observacoes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustoPlataformaMaxAggregateOutputType = {
    id: string | null
    plataformaId: string | null
    valor: number | null
    moeda: string | null
    dataInicio: Date | null
    dataFim: Date | null
    ativo: boolean | null
    observacoes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustoPlataformaCountAggregateOutputType = {
    id: number
    plataformaId: number
    valor: number
    moeda: number
    dataInicio: number
    dataFim: number
    ativo: number
    observacoes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustoPlataformaAvgAggregateInputType = {
    valor?: true
  }

  export type CustoPlataformaSumAggregateInputType = {
    valor?: true
  }

  export type CustoPlataformaMinAggregateInputType = {
    id?: true
    plataformaId?: true
    valor?: true
    moeda?: true
    dataInicio?: true
    dataFim?: true
    ativo?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustoPlataformaMaxAggregateInputType = {
    id?: true
    plataformaId?: true
    valor?: true
    moeda?: true
    dataInicio?: true
    dataFim?: true
    ativo?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustoPlataformaCountAggregateInputType = {
    id?: true
    plataformaId?: true
    valor?: true
    moeda?: true
    dataInicio?: true
    dataFim?: true
    ativo?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustoPlataformaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustoPlataforma to aggregate.
     */
    where?: CustoPlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustoPlataformas to fetch.
     */
    orderBy?: CustoPlataformaOrderByWithRelationInput | CustoPlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustoPlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustoPlataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustoPlataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustoPlataformas
    **/
    _count?: true | CustoPlataformaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustoPlataformaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustoPlataformaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustoPlataformaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustoPlataformaMaxAggregateInputType
  }

  export type GetCustoPlataformaAggregateType<T extends CustoPlataformaAggregateArgs> = {
        [P in keyof T & keyof AggregateCustoPlataforma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustoPlataforma[P]>
      : GetScalarType<T[P], AggregateCustoPlataforma[P]>
  }




  export type CustoPlataformaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustoPlataformaWhereInput
    orderBy?: CustoPlataformaOrderByWithAggregationInput | CustoPlataformaOrderByWithAggregationInput[]
    by: CustoPlataformaScalarFieldEnum[] | CustoPlataformaScalarFieldEnum
    having?: CustoPlataformaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustoPlataformaCountAggregateInputType | true
    _avg?: CustoPlataformaAvgAggregateInputType
    _sum?: CustoPlataformaSumAggregateInputType
    _min?: CustoPlataformaMinAggregateInputType
    _max?: CustoPlataformaMaxAggregateInputType
  }

  export type CustoPlataformaGroupByOutputType = {
    id: string
    plataformaId: string
    valor: number
    moeda: string
    dataInicio: Date
    dataFim: Date | null
    ativo: boolean
    observacoes: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustoPlataformaCountAggregateOutputType | null
    _avg: CustoPlataformaAvgAggregateOutputType | null
    _sum: CustoPlataformaSumAggregateOutputType | null
    _min: CustoPlataformaMinAggregateOutputType | null
    _max: CustoPlataformaMaxAggregateOutputType | null
  }

  type GetCustoPlataformaGroupByPayload<T extends CustoPlataformaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustoPlataformaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustoPlataformaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustoPlataformaGroupByOutputType[P]>
            : GetScalarType<T[P], CustoPlataformaGroupByOutputType[P]>
        }
      >
    >


  export type CustoPlataformaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plataformaId?: boolean
    valor?: boolean
    moeda?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    ativo?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["custoPlataforma"]>

  export type CustoPlataformaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plataformaId?: boolean
    valor?: boolean
    moeda?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    ativo?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["custoPlataforma"]>

  export type CustoPlataformaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plataformaId?: boolean
    valor?: boolean
    moeda?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    ativo?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["custoPlataforma"]>

  export type CustoPlataformaSelectScalar = {
    id?: boolean
    plataformaId?: boolean
    valor?: boolean
    moeda?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    ativo?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustoPlataformaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plataformaId" | "valor" | "moeda" | "dataInicio" | "dataFim" | "ativo" | "observacoes" | "createdAt" | "updatedAt", ExtArgs["result"]["custoPlataforma"]>
  export type CustoPlataformaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
  }
  export type CustoPlataformaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
  }
  export type CustoPlataformaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
  }

  export type $CustoPlataformaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustoPlataforma"
    objects: {
      plataforma: Prisma.$PlataformaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plataformaId: string
      valor: number
      moeda: string
      dataInicio: Date
      dataFim: Date | null
      ativo: boolean
      observacoes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["custoPlataforma"]>
    composites: {}
  }

  type CustoPlataformaGetPayload<S extends boolean | null | undefined | CustoPlataformaDefaultArgs> = $Result.GetResult<Prisma.$CustoPlataformaPayload, S>

  type CustoPlataformaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustoPlataformaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustoPlataformaCountAggregateInputType | true
    }

  export interface CustoPlataformaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustoPlataforma'], meta: { name: 'CustoPlataforma' } }
    /**
     * Find zero or one CustoPlataforma that matches the filter.
     * @param {CustoPlataformaFindUniqueArgs} args - Arguments to find a CustoPlataforma
     * @example
     * // Get one CustoPlataforma
     * const custoPlataforma = await prisma.custoPlataforma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustoPlataformaFindUniqueArgs>(args: SelectSubset<T, CustoPlataformaFindUniqueArgs<ExtArgs>>): Prisma__CustoPlataformaClient<$Result.GetResult<Prisma.$CustoPlataformaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustoPlataforma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustoPlataformaFindUniqueOrThrowArgs} args - Arguments to find a CustoPlataforma
     * @example
     * // Get one CustoPlataforma
     * const custoPlataforma = await prisma.custoPlataforma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustoPlataformaFindUniqueOrThrowArgs>(args: SelectSubset<T, CustoPlataformaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustoPlataformaClient<$Result.GetResult<Prisma.$CustoPlataformaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustoPlataforma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoPlataformaFindFirstArgs} args - Arguments to find a CustoPlataforma
     * @example
     * // Get one CustoPlataforma
     * const custoPlataforma = await prisma.custoPlataforma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustoPlataformaFindFirstArgs>(args?: SelectSubset<T, CustoPlataformaFindFirstArgs<ExtArgs>>): Prisma__CustoPlataformaClient<$Result.GetResult<Prisma.$CustoPlataformaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustoPlataforma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoPlataformaFindFirstOrThrowArgs} args - Arguments to find a CustoPlataforma
     * @example
     * // Get one CustoPlataforma
     * const custoPlataforma = await prisma.custoPlataforma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustoPlataformaFindFirstOrThrowArgs>(args?: SelectSubset<T, CustoPlataformaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustoPlataformaClient<$Result.GetResult<Prisma.$CustoPlataformaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustoPlataformas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoPlataformaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustoPlataformas
     * const custoPlataformas = await prisma.custoPlataforma.findMany()
     * 
     * // Get first 10 CustoPlataformas
     * const custoPlataformas = await prisma.custoPlataforma.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const custoPlataformaWithIdOnly = await prisma.custoPlataforma.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustoPlataformaFindManyArgs>(args?: SelectSubset<T, CustoPlataformaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustoPlataformaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustoPlataforma.
     * @param {CustoPlataformaCreateArgs} args - Arguments to create a CustoPlataforma.
     * @example
     * // Create one CustoPlataforma
     * const CustoPlataforma = await prisma.custoPlataforma.create({
     *   data: {
     *     // ... data to create a CustoPlataforma
     *   }
     * })
     * 
     */
    create<T extends CustoPlataformaCreateArgs>(args: SelectSubset<T, CustoPlataformaCreateArgs<ExtArgs>>): Prisma__CustoPlataformaClient<$Result.GetResult<Prisma.$CustoPlataformaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustoPlataformas.
     * @param {CustoPlataformaCreateManyArgs} args - Arguments to create many CustoPlataformas.
     * @example
     * // Create many CustoPlataformas
     * const custoPlataforma = await prisma.custoPlataforma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustoPlataformaCreateManyArgs>(args?: SelectSubset<T, CustoPlataformaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustoPlataformas and returns the data saved in the database.
     * @param {CustoPlataformaCreateManyAndReturnArgs} args - Arguments to create many CustoPlataformas.
     * @example
     * // Create many CustoPlataformas
     * const custoPlataforma = await prisma.custoPlataforma.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustoPlataformas and only return the `id`
     * const custoPlataformaWithIdOnly = await prisma.custoPlataforma.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustoPlataformaCreateManyAndReturnArgs>(args?: SelectSubset<T, CustoPlataformaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustoPlataformaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustoPlataforma.
     * @param {CustoPlataformaDeleteArgs} args - Arguments to delete one CustoPlataforma.
     * @example
     * // Delete one CustoPlataforma
     * const CustoPlataforma = await prisma.custoPlataforma.delete({
     *   where: {
     *     // ... filter to delete one CustoPlataforma
     *   }
     * })
     * 
     */
    delete<T extends CustoPlataformaDeleteArgs>(args: SelectSubset<T, CustoPlataformaDeleteArgs<ExtArgs>>): Prisma__CustoPlataformaClient<$Result.GetResult<Prisma.$CustoPlataformaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustoPlataforma.
     * @param {CustoPlataformaUpdateArgs} args - Arguments to update one CustoPlataforma.
     * @example
     * // Update one CustoPlataforma
     * const custoPlataforma = await prisma.custoPlataforma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustoPlataformaUpdateArgs>(args: SelectSubset<T, CustoPlataformaUpdateArgs<ExtArgs>>): Prisma__CustoPlataformaClient<$Result.GetResult<Prisma.$CustoPlataformaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustoPlataformas.
     * @param {CustoPlataformaDeleteManyArgs} args - Arguments to filter CustoPlataformas to delete.
     * @example
     * // Delete a few CustoPlataformas
     * const { count } = await prisma.custoPlataforma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustoPlataformaDeleteManyArgs>(args?: SelectSubset<T, CustoPlataformaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustoPlataformas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoPlataformaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustoPlataformas
     * const custoPlataforma = await prisma.custoPlataforma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustoPlataformaUpdateManyArgs>(args: SelectSubset<T, CustoPlataformaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustoPlataformas and returns the data updated in the database.
     * @param {CustoPlataformaUpdateManyAndReturnArgs} args - Arguments to update many CustoPlataformas.
     * @example
     * // Update many CustoPlataformas
     * const custoPlataforma = await prisma.custoPlataforma.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustoPlataformas and only return the `id`
     * const custoPlataformaWithIdOnly = await prisma.custoPlataforma.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustoPlataformaUpdateManyAndReturnArgs>(args: SelectSubset<T, CustoPlataformaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustoPlataformaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustoPlataforma.
     * @param {CustoPlataformaUpsertArgs} args - Arguments to update or create a CustoPlataforma.
     * @example
     * // Update or create a CustoPlataforma
     * const custoPlataforma = await prisma.custoPlataforma.upsert({
     *   create: {
     *     // ... data to create a CustoPlataforma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustoPlataforma we want to update
     *   }
     * })
     */
    upsert<T extends CustoPlataformaUpsertArgs>(args: SelectSubset<T, CustoPlataformaUpsertArgs<ExtArgs>>): Prisma__CustoPlataformaClient<$Result.GetResult<Prisma.$CustoPlataformaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustoPlataformas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoPlataformaCountArgs} args - Arguments to filter CustoPlataformas to count.
     * @example
     * // Count the number of CustoPlataformas
     * const count = await prisma.custoPlataforma.count({
     *   where: {
     *     // ... the filter for the CustoPlataformas we want to count
     *   }
     * })
    **/
    count<T extends CustoPlataformaCountArgs>(
      args?: Subset<T, CustoPlataformaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustoPlataformaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustoPlataforma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoPlataformaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustoPlataformaAggregateArgs>(args: Subset<T, CustoPlataformaAggregateArgs>): Prisma.PrismaPromise<GetCustoPlataformaAggregateType<T>>

    /**
     * Group by CustoPlataforma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoPlataformaGroupByArgs} args - Group by arguments.
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
      T extends CustoPlataformaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustoPlataformaGroupByArgs['orderBy'] }
        : { orderBy?: CustoPlataformaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustoPlataformaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustoPlataformaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustoPlataforma model
   */
  readonly fields: CustoPlataformaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustoPlataforma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustoPlataformaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plataforma<T extends PlataformaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlataformaDefaultArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CustoPlataforma model
   */
  interface CustoPlataformaFieldRefs {
    readonly id: FieldRef<"CustoPlataforma", 'String'>
    readonly plataformaId: FieldRef<"CustoPlataforma", 'String'>
    readonly valor: FieldRef<"CustoPlataforma", 'Float'>
    readonly moeda: FieldRef<"CustoPlataforma", 'String'>
    readonly dataInicio: FieldRef<"CustoPlataforma", 'DateTime'>
    readonly dataFim: FieldRef<"CustoPlataforma", 'DateTime'>
    readonly ativo: FieldRef<"CustoPlataforma", 'Boolean'>
    readonly observacoes: FieldRef<"CustoPlataforma", 'String'>
    readonly createdAt: FieldRef<"CustoPlataforma", 'DateTime'>
    readonly updatedAt: FieldRef<"CustoPlataforma", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustoPlataforma findUnique
   */
  export type CustoPlataformaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPlataforma
     */
    select?: CustoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPlataforma
     */
    omit?: CustoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustoPlataformaInclude<ExtArgs> | null
    /**
     * Filter, which CustoPlataforma to fetch.
     */
    where: CustoPlataformaWhereUniqueInput
  }

  /**
   * CustoPlataforma findUniqueOrThrow
   */
  export type CustoPlataformaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPlataforma
     */
    select?: CustoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPlataforma
     */
    omit?: CustoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustoPlataformaInclude<ExtArgs> | null
    /**
     * Filter, which CustoPlataforma to fetch.
     */
    where: CustoPlataformaWhereUniqueInput
  }

  /**
   * CustoPlataforma findFirst
   */
  export type CustoPlataformaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPlataforma
     */
    select?: CustoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPlataforma
     */
    omit?: CustoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustoPlataformaInclude<ExtArgs> | null
    /**
     * Filter, which CustoPlataforma to fetch.
     */
    where?: CustoPlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustoPlataformas to fetch.
     */
    orderBy?: CustoPlataformaOrderByWithRelationInput | CustoPlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustoPlataformas.
     */
    cursor?: CustoPlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustoPlataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustoPlataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustoPlataformas.
     */
    distinct?: CustoPlataformaScalarFieldEnum | CustoPlataformaScalarFieldEnum[]
  }

  /**
   * CustoPlataforma findFirstOrThrow
   */
  export type CustoPlataformaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPlataforma
     */
    select?: CustoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPlataforma
     */
    omit?: CustoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustoPlataformaInclude<ExtArgs> | null
    /**
     * Filter, which CustoPlataforma to fetch.
     */
    where?: CustoPlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustoPlataformas to fetch.
     */
    orderBy?: CustoPlataformaOrderByWithRelationInput | CustoPlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustoPlataformas.
     */
    cursor?: CustoPlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustoPlataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustoPlataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustoPlataformas.
     */
    distinct?: CustoPlataformaScalarFieldEnum | CustoPlataformaScalarFieldEnum[]
  }

  /**
   * CustoPlataforma findMany
   */
  export type CustoPlataformaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPlataforma
     */
    select?: CustoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPlataforma
     */
    omit?: CustoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustoPlataformaInclude<ExtArgs> | null
    /**
     * Filter, which CustoPlataformas to fetch.
     */
    where?: CustoPlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustoPlataformas to fetch.
     */
    orderBy?: CustoPlataformaOrderByWithRelationInput | CustoPlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustoPlataformas.
     */
    cursor?: CustoPlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustoPlataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustoPlataformas.
     */
    skip?: number
    distinct?: CustoPlataformaScalarFieldEnum | CustoPlataformaScalarFieldEnum[]
  }

  /**
   * CustoPlataforma create
   */
  export type CustoPlataformaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPlataforma
     */
    select?: CustoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPlataforma
     */
    omit?: CustoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustoPlataformaInclude<ExtArgs> | null
    /**
     * The data needed to create a CustoPlataforma.
     */
    data: XOR<CustoPlataformaCreateInput, CustoPlataformaUncheckedCreateInput>
  }

  /**
   * CustoPlataforma createMany
   */
  export type CustoPlataformaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustoPlataformas.
     */
    data: CustoPlataformaCreateManyInput | CustoPlataformaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustoPlataforma createManyAndReturn
   */
  export type CustoPlataformaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPlataforma
     */
    select?: CustoPlataformaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPlataforma
     */
    omit?: CustoPlataformaOmit<ExtArgs> | null
    /**
     * The data used to create many CustoPlataformas.
     */
    data: CustoPlataformaCreateManyInput | CustoPlataformaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustoPlataformaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustoPlataforma update
   */
  export type CustoPlataformaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPlataforma
     */
    select?: CustoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPlataforma
     */
    omit?: CustoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustoPlataformaInclude<ExtArgs> | null
    /**
     * The data needed to update a CustoPlataforma.
     */
    data: XOR<CustoPlataformaUpdateInput, CustoPlataformaUncheckedUpdateInput>
    /**
     * Choose, which CustoPlataforma to update.
     */
    where: CustoPlataformaWhereUniqueInput
  }

  /**
   * CustoPlataforma updateMany
   */
  export type CustoPlataformaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustoPlataformas.
     */
    data: XOR<CustoPlataformaUpdateManyMutationInput, CustoPlataformaUncheckedUpdateManyInput>
    /**
     * Filter which CustoPlataformas to update
     */
    where?: CustoPlataformaWhereInput
    /**
     * Limit how many CustoPlataformas to update.
     */
    limit?: number
  }

  /**
   * CustoPlataforma updateManyAndReturn
   */
  export type CustoPlataformaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPlataforma
     */
    select?: CustoPlataformaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPlataforma
     */
    omit?: CustoPlataformaOmit<ExtArgs> | null
    /**
     * The data used to update CustoPlataformas.
     */
    data: XOR<CustoPlataformaUpdateManyMutationInput, CustoPlataformaUncheckedUpdateManyInput>
    /**
     * Filter which CustoPlataformas to update
     */
    where?: CustoPlataformaWhereInput
    /**
     * Limit how many CustoPlataformas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustoPlataformaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustoPlataforma upsert
   */
  export type CustoPlataformaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPlataforma
     */
    select?: CustoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPlataforma
     */
    omit?: CustoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustoPlataformaInclude<ExtArgs> | null
    /**
     * The filter to search for the CustoPlataforma to update in case it exists.
     */
    where: CustoPlataformaWhereUniqueInput
    /**
     * In case the CustoPlataforma found by the `where` argument doesn't exist, create a new CustoPlataforma with this data.
     */
    create: XOR<CustoPlataformaCreateInput, CustoPlataformaUncheckedCreateInput>
    /**
     * In case the CustoPlataforma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustoPlataformaUpdateInput, CustoPlataformaUncheckedUpdateInput>
  }

  /**
   * CustoPlataforma delete
   */
  export type CustoPlataformaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPlataforma
     */
    select?: CustoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPlataforma
     */
    omit?: CustoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustoPlataformaInclude<ExtArgs> | null
    /**
     * Filter which CustoPlataforma to delete.
     */
    where: CustoPlataformaWhereUniqueInput
  }

  /**
   * CustoPlataforma deleteMany
   */
  export type CustoPlataformaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustoPlataformas to delete
     */
    where?: CustoPlataformaWhereInput
    /**
     * Limit how many CustoPlataformas to delete.
     */
    limit?: number
  }

  /**
   * CustoPlataforma without action
   */
  export type CustoPlataformaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPlataforma
     */
    select?: CustoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPlataforma
     */
    omit?: CustoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustoPlataformaInclude<ExtArgs> | null
  }


  /**
   * Model ConfiguracaoSistema
   */

  export type AggregateConfiguracaoSistema = {
    _count: ConfiguracaoSistemaCountAggregateOutputType | null
    _avg: ConfiguracaoSistemaAvgAggregateOutputType | null
    _sum: ConfiguracaoSistemaSumAggregateOutputType | null
    _min: ConfiguracaoSistemaMinAggregateOutputType | null
    _max: ConfiguracaoSistemaMaxAggregateOutputType | null
  }

  export type ConfiguracaoSistemaAvgAggregateOutputType = {
    diasAvisoExpiracao: number | null
  }

  export type ConfiguracaoSistemaSumAggregateOutputType = {
    diasAvisoExpiracao: number | null
  }

  export type ConfiguracaoSistemaMinAggregateOutputType = {
    id: string | null
    chaveMestre: string | null
    webhookClickup: string | null
    webhookDiscord: string | null
    emailAlertas: string | null
    apiKeyEmail: string | null
    diasAvisoExpiracao: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfiguracaoSistemaMaxAggregateOutputType = {
    id: string | null
    chaveMestre: string | null
    webhookClickup: string | null
    webhookDiscord: string | null
    emailAlertas: string | null
    apiKeyEmail: string | null
    diasAvisoExpiracao: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfiguracaoSistemaCountAggregateOutputType = {
    id: number
    chaveMestre: number
    webhookClickup: number
    webhookDiscord: number
    emailAlertas: number
    apiKeyEmail: number
    diasAvisoExpiracao: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConfiguracaoSistemaAvgAggregateInputType = {
    diasAvisoExpiracao?: true
  }

  export type ConfiguracaoSistemaSumAggregateInputType = {
    diasAvisoExpiracao?: true
  }

  export type ConfiguracaoSistemaMinAggregateInputType = {
    id?: true
    chaveMestre?: true
    webhookClickup?: true
    webhookDiscord?: true
    emailAlertas?: true
    apiKeyEmail?: true
    diasAvisoExpiracao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfiguracaoSistemaMaxAggregateInputType = {
    id?: true
    chaveMestre?: true
    webhookClickup?: true
    webhookDiscord?: true
    emailAlertas?: true
    apiKeyEmail?: true
    diasAvisoExpiracao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfiguracaoSistemaCountAggregateInputType = {
    id?: true
    chaveMestre?: true
    webhookClickup?: true
    webhookDiscord?: true
    emailAlertas?: true
    apiKeyEmail?: true
    diasAvisoExpiracao?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConfiguracaoSistemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfiguracaoSistema to aggregate.
     */
    where?: ConfiguracaoSistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfiguracaoSistemas to fetch.
     */
    orderBy?: ConfiguracaoSistemaOrderByWithRelationInput | ConfiguracaoSistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfiguracaoSistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfiguracaoSistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfiguracaoSistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConfiguracaoSistemas
    **/
    _count?: true | ConfiguracaoSistemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfiguracaoSistemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfiguracaoSistemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfiguracaoSistemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfiguracaoSistemaMaxAggregateInputType
  }

  export type GetConfiguracaoSistemaAggregateType<T extends ConfiguracaoSistemaAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguracaoSistema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguracaoSistema[P]>
      : GetScalarType<T[P], AggregateConfiguracaoSistema[P]>
  }




  export type ConfiguracaoSistemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfiguracaoSistemaWhereInput
    orderBy?: ConfiguracaoSistemaOrderByWithAggregationInput | ConfiguracaoSistemaOrderByWithAggregationInput[]
    by: ConfiguracaoSistemaScalarFieldEnum[] | ConfiguracaoSistemaScalarFieldEnum
    having?: ConfiguracaoSistemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfiguracaoSistemaCountAggregateInputType | true
    _avg?: ConfiguracaoSistemaAvgAggregateInputType
    _sum?: ConfiguracaoSistemaSumAggregateInputType
    _min?: ConfiguracaoSistemaMinAggregateInputType
    _max?: ConfiguracaoSistemaMaxAggregateInputType
  }

  export type ConfiguracaoSistemaGroupByOutputType = {
    id: string
    chaveMestre: string | null
    webhookClickup: string | null
    webhookDiscord: string | null
    emailAlertas: string | null
    apiKeyEmail: string | null
    diasAvisoExpiracao: number
    createdAt: Date
    updatedAt: Date
    _count: ConfiguracaoSistemaCountAggregateOutputType | null
    _avg: ConfiguracaoSistemaAvgAggregateOutputType | null
    _sum: ConfiguracaoSistemaSumAggregateOutputType | null
    _min: ConfiguracaoSistemaMinAggregateOutputType | null
    _max: ConfiguracaoSistemaMaxAggregateOutputType | null
  }

  type GetConfiguracaoSistemaGroupByPayload<T extends ConfiguracaoSistemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfiguracaoSistemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfiguracaoSistemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfiguracaoSistemaGroupByOutputType[P]>
            : GetScalarType<T[P], ConfiguracaoSistemaGroupByOutputType[P]>
        }
      >
    >


  export type ConfiguracaoSistemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chaveMestre?: boolean
    webhookClickup?: boolean
    webhookDiscord?: boolean
    emailAlertas?: boolean
    apiKeyEmail?: boolean
    diasAvisoExpiracao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["configuracaoSistema"]>

  export type ConfiguracaoSistemaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chaveMestre?: boolean
    webhookClickup?: boolean
    webhookDiscord?: boolean
    emailAlertas?: boolean
    apiKeyEmail?: boolean
    diasAvisoExpiracao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["configuracaoSistema"]>

  export type ConfiguracaoSistemaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chaveMestre?: boolean
    webhookClickup?: boolean
    webhookDiscord?: boolean
    emailAlertas?: boolean
    apiKeyEmail?: boolean
    diasAvisoExpiracao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["configuracaoSistema"]>

  export type ConfiguracaoSistemaSelectScalar = {
    id?: boolean
    chaveMestre?: boolean
    webhookClickup?: boolean
    webhookDiscord?: boolean
    emailAlertas?: boolean
    apiKeyEmail?: boolean
    diasAvisoExpiracao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConfiguracaoSistemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chaveMestre" | "webhookClickup" | "webhookDiscord" | "emailAlertas" | "apiKeyEmail" | "diasAvisoExpiracao" | "createdAt" | "updatedAt", ExtArgs["result"]["configuracaoSistema"]>

  export type $ConfiguracaoSistemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConfiguracaoSistema"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chaveMestre: string | null
      webhookClickup: string | null
      webhookDiscord: string | null
      emailAlertas: string | null
      apiKeyEmail: string | null
      diasAvisoExpiracao: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["configuracaoSistema"]>
    composites: {}
  }

  type ConfiguracaoSistemaGetPayload<S extends boolean | null | undefined | ConfiguracaoSistemaDefaultArgs> = $Result.GetResult<Prisma.$ConfiguracaoSistemaPayload, S>

  type ConfiguracaoSistemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfiguracaoSistemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfiguracaoSistemaCountAggregateInputType | true
    }

  export interface ConfiguracaoSistemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConfiguracaoSistema'], meta: { name: 'ConfiguracaoSistema' } }
    /**
     * Find zero or one ConfiguracaoSistema that matches the filter.
     * @param {ConfiguracaoSistemaFindUniqueArgs} args - Arguments to find a ConfiguracaoSistema
     * @example
     * // Get one ConfiguracaoSistema
     * const configuracaoSistema = await prisma.configuracaoSistema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfiguracaoSistemaFindUniqueArgs>(args: SelectSubset<T, ConfiguracaoSistemaFindUniqueArgs<ExtArgs>>): Prisma__ConfiguracaoSistemaClient<$Result.GetResult<Prisma.$ConfiguracaoSistemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConfiguracaoSistema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfiguracaoSistemaFindUniqueOrThrowArgs} args - Arguments to find a ConfiguracaoSistema
     * @example
     * // Get one ConfiguracaoSistema
     * const configuracaoSistema = await prisma.configuracaoSistema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfiguracaoSistemaFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfiguracaoSistemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfiguracaoSistemaClient<$Result.GetResult<Prisma.$ConfiguracaoSistemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConfiguracaoSistema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoSistemaFindFirstArgs} args - Arguments to find a ConfiguracaoSistema
     * @example
     * // Get one ConfiguracaoSistema
     * const configuracaoSistema = await prisma.configuracaoSistema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfiguracaoSistemaFindFirstArgs>(args?: SelectSubset<T, ConfiguracaoSistemaFindFirstArgs<ExtArgs>>): Prisma__ConfiguracaoSistemaClient<$Result.GetResult<Prisma.$ConfiguracaoSistemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConfiguracaoSistema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoSistemaFindFirstOrThrowArgs} args - Arguments to find a ConfiguracaoSistema
     * @example
     * // Get one ConfiguracaoSistema
     * const configuracaoSistema = await prisma.configuracaoSistema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfiguracaoSistemaFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfiguracaoSistemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfiguracaoSistemaClient<$Result.GetResult<Prisma.$ConfiguracaoSistemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConfiguracaoSistemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoSistemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConfiguracaoSistemas
     * const configuracaoSistemas = await prisma.configuracaoSistema.findMany()
     * 
     * // Get first 10 ConfiguracaoSistemas
     * const configuracaoSistemas = await prisma.configuracaoSistema.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configuracaoSistemaWithIdOnly = await prisma.configuracaoSistema.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfiguracaoSistemaFindManyArgs>(args?: SelectSubset<T, ConfiguracaoSistemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracaoSistemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConfiguracaoSistema.
     * @param {ConfiguracaoSistemaCreateArgs} args - Arguments to create a ConfiguracaoSistema.
     * @example
     * // Create one ConfiguracaoSistema
     * const ConfiguracaoSistema = await prisma.configuracaoSistema.create({
     *   data: {
     *     // ... data to create a ConfiguracaoSistema
     *   }
     * })
     * 
     */
    create<T extends ConfiguracaoSistemaCreateArgs>(args: SelectSubset<T, ConfiguracaoSistemaCreateArgs<ExtArgs>>): Prisma__ConfiguracaoSistemaClient<$Result.GetResult<Prisma.$ConfiguracaoSistemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConfiguracaoSistemas.
     * @param {ConfiguracaoSistemaCreateManyArgs} args - Arguments to create many ConfiguracaoSistemas.
     * @example
     * // Create many ConfiguracaoSistemas
     * const configuracaoSistema = await prisma.configuracaoSistema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfiguracaoSistemaCreateManyArgs>(args?: SelectSubset<T, ConfiguracaoSistemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConfiguracaoSistemas and returns the data saved in the database.
     * @param {ConfiguracaoSistemaCreateManyAndReturnArgs} args - Arguments to create many ConfiguracaoSistemas.
     * @example
     * // Create many ConfiguracaoSistemas
     * const configuracaoSistema = await prisma.configuracaoSistema.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConfiguracaoSistemas and only return the `id`
     * const configuracaoSistemaWithIdOnly = await prisma.configuracaoSistema.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfiguracaoSistemaCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfiguracaoSistemaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracaoSistemaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConfiguracaoSistema.
     * @param {ConfiguracaoSistemaDeleteArgs} args - Arguments to delete one ConfiguracaoSistema.
     * @example
     * // Delete one ConfiguracaoSistema
     * const ConfiguracaoSistema = await prisma.configuracaoSistema.delete({
     *   where: {
     *     // ... filter to delete one ConfiguracaoSistema
     *   }
     * })
     * 
     */
    delete<T extends ConfiguracaoSistemaDeleteArgs>(args: SelectSubset<T, ConfiguracaoSistemaDeleteArgs<ExtArgs>>): Prisma__ConfiguracaoSistemaClient<$Result.GetResult<Prisma.$ConfiguracaoSistemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConfiguracaoSistema.
     * @param {ConfiguracaoSistemaUpdateArgs} args - Arguments to update one ConfiguracaoSistema.
     * @example
     * // Update one ConfiguracaoSistema
     * const configuracaoSistema = await prisma.configuracaoSistema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfiguracaoSistemaUpdateArgs>(args: SelectSubset<T, ConfiguracaoSistemaUpdateArgs<ExtArgs>>): Prisma__ConfiguracaoSistemaClient<$Result.GetResult<Prisma.$ConfiguracaoSistemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConfiguracaoSistemas.
     * @param {ConfiguracaoSistemaDeleteManyArgs} args - Arguments to filter ConfiguracaoSistemas to delete.
     * @example
     * // Delete a few ConfiguracaoSistemas
     * const { count } = await prisma.configuracaoSistema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfiguracaoSistemaDeleteManyArgs>(args?: SelectSubset<T, ConfiguracaoSistemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfiguracaoSistemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoSistemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConfiguracaoSistemas
     * const configuracaoSistema = await prisma.configuracaoSistema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfiguracaoSistemaUpdateManyArgs>(args: SelectSubset<T, ConfiguracaoSistemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfiguracaoSistemas and returns the data updated in the database.
     * @param {ConfiguracaoSistemaUpdateManyAndReturnArgs} args - Arguments to update many ConfiguracaoSistemas.
     * @example
     * // Update many ConfiguracaoSistemas
     * const configuracaoSistema = await prisma.configuracaoSistema.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConfiguracaoSistemas and only return the `id`
     * const configuracaoSistemaWithIdOnly = await prisma.configuracaoSistema.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConfiguracaoSistemaUpdateManyAndReturnArgs>(args: SelectSubset<T, ConfiguracaoSistemaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracaoSistemaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConfiguracaoSistema.
     * @param {ConfiguracaoSistemaUpsertArgs} args - Arguments to update or create a ConfiguracaoSistema.
     * @example
     * // Update or create a ConfiguracaoSistema
     * const configuracaoSistema = await prisma.configuracaoSistema.upsert({
     *   create: {
     *     // ... data to create a ConfiguracaoSistema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConfiguracaoSistema we want to update
     *   }
     * })
     */
    upsert<T extends ConfiguracaoSistemaUpsertArgs>(args: SelectSubset<T, ConfiguracaoSistemaUpsertArgs<ExtArgs>>): Prisma__ConfiguracaoSistemaClient<$Result.GetResult<Prisma.$ConfiguracaoSistemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConfiguracaoSistemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoSistemaCountArgs} args - Arguments to filter ConfiguracaoSistemas to count.
     * @example
     * // Count the number of ConfiguracaoSistemas
     * const count = await prisma.configuracaoSistema.count({
     *   where: {
     *     // ... the filter for the ConfiguracaoSistemas we want to count
     *   }
     * })
    **/
    count<T extends ConfiguracaoSistemaCountArgs>(
      args?: Subset<T, ConfiguracaoSistemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfiguracaoSistemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConfiguracaoSistema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoSistemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfiguracaoSistemaAggregateArgs>(args: Subset<T, ConfiguracaoSistemaAggregateArgs>): Prisma.PrismaPromise<GetConfiguracaoSistemaAggregateType<T>>

    /**
     * Group by ConfiguracaoSistema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoSistemaGroupByArgs} args - Group by arguments.
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
      T extends ConfiguracaoSistemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfiguracaoSistemaGroupByArgs['orderBy'] }
        : { orderBy?: ConfiguracaoSistemaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConfiguracaoSistemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfiguracaoSistemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConfiguracaoSistema model
   */
  readonly fields: ConfiguracaoSistemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConfiguracaoSistema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfiguracaoSistemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ConfiguracaoSistema model
   */
  interface ConfiguracaoSistemaFieldRefs {
    readonly id: FieldRef<"ConfiguracaoSistema", 'String'>
    readonly chaveMestre: FieldRef<"ConfiguracaoSistema", 'String'>
    readonly webhookClickup: FieldRef<"ConfiguracaoSistema", 'String'>
    readonly webhookDiscord: FieldRef<"ConfiguracaoSistema", 'String'>
    readonly emailAlertas: FieldRef<"ConfiguracaoSistema", 'String'>
    readonly apiKeyEmail: FieldRef<"ConfiguracaoSistema", 'String'>
    readonly diasAvisoExpiracao: FieldRef<"ConfiguracaoSistema", 'Int'>
    readonly createdAt: FieldRef<"ConfiguracaoSistema", 'DateTime'>
    readonly updatedAt: FieldRef<"ConfiguracaoSistema", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConfiguracaoSistema findUnique
   */
  export type ConfiguracaoSistemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoSistema
     */
    select?: ConfiguracaoSistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoSistema
     */
    omit?: ConfiguracaoSistemaOmit<ExtArgs> | null
    /**
     * Filter, which ConfiguracaoSistema to fetch.
     */
    where: ConfiguracaoSistemaWhereUniqueInput
  }

  /**
   * ConfiguracaoSistema findUniqueOrThrow
   */
  export type ConfiguracaoSistemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoSistema
     */
    select?: ConfiguracaoSistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoSistema
     */
    omit?: ConfiguracaoSistemaOmit<ExtArgs> | null
    /**
     * Filter, which ConfiguracaoSistema to fetch.
     */
    where: ConfiguracaoSistemaWhereUniqueInput
  }

  /**
   * ConfiguracaoSistema findFirst
   */
  export type ConfiguracaoSistemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoSistema
     */
    select?: ConfiguracaoSistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoSistema
     */
    omit?: ConfiguracaoSistemaOmit<ExtArgs> | null
    /**
     * Filter, which ConfiguracaoSistema to fetch.
     */
    where?: ConfiguracaoSistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfiguracaoSistemas to fetch.
     */
    orderBy?: ConfiguracaoSistemaOrderByWithRelationInput | ConfiguracaoSistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfiguracaoSistemas.
     */
    cursor?: ConfiguracaoSistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfiguracaoSistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfiguracaoSistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfiguracaoSistemas.
     */
    distinct?: ConfiguracaoSistemaScalarFieldEnum | ConfiguracaoSistemaScalarFieldEnum[]
  }

  /**
   * ConfiguracaoSistema findFirstOrThrow
   */
  export type ConfiguracaoSistemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoSistema
     */
    select?: ConfiguracaoSistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoSistema
     */
    omit?: ConfiguracaoSistemaOmit<ExtArgs> | null
    /**
     * Filter, which ConfiguracaoSistema to fetch.
     */
    where?: ConfiguracaoSistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfiguracaoSistemas to fetch.
     */
    orderBy?: ConfiguracaoSistemaOrderByWithRelationInput | ConfiguracaoSistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfiguracaoSistemas.
     */
    cursor?: ConfiguracaoSistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfiguracaoSistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfiguracaoSistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfiguracaoSistemas.
     */
    distinct?: ConfiguracaoSistemaScalarFieldEnum | ConfiguracaoSistemaScalarFieldEnum[]
  }

  /**
   * ConfiguracaoSistema findMany
   */
  export type ConfiguracaoSistemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoSistema
     */
    select?: ConfiguracaoSistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoSistema
     */
    omit?: ConfiguracaoSistemaOmit<ExtArgs> | null
    /**
     * Filter, which ConfiguracaoSistemas to fetch.
     */
    where?: ConfiguracaoSistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfiguracaoSistemas to fetch.
     */
    orderBy?: ConfiguracaoSistemaOrderByWithRelationInput | ConfiguracaoSistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConfiguracaoSistemas.
     */
    cursor?: ConfiguracaoSistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfiguracaoSistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfiguracaoSistemas.
     */
    skip?: number
    distinct?: ConfiguracaoSistemaScalarFieldEnum | ConfiguracaoSistemaScalarFieldEnum[]
  }

  /**
   * ConfiguracaoSistema create
   */
  export type ConfiguracaoSistemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoSistema
     */
    select?: ConfiguracaoSistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoSistema
     */
    omit?: ConfiguracaoSistemaOmit<ExtArgs> | null
    /**
     * The data needed to create a ConfiguracaoSistema.
     */
    data: XOR<ConfiguracaoSistemaCreateInput, ConfiguracaoSistemaUncheckedCreateInput>
  }

  /**
   * ConfiguracaoSistema createMany
   */
  export type ConfiguracaoSistemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConfiguracaoSistemas.
     */
    data: ConfiguracaoSistemaCreateManyInput | ConfiguracaoSistemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConfiguracaoSistema createManyAndReturn
   */
  export type ConfiguracaoSistemaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoSistema
     */
    select?: ConfiguracaoSistemaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoSistema
     */
    omit?: ConfiguracaoSistemaOmit<ExtArgs> | null
    /**
     * The data used to create many ConfiguracaoSistemas.
     */
    data: ConfiguracaoSistemaCreateManyInput | ConfiguracaoSistemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConfiguracaoSistema update
   */
  export type ConfiguracaoSistemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoSistema
     */
    select?: ConfiguracaoSistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoSistema
     */
    omit?: ConfiguracaoSistemaOmit<ExtArgs> | null
    /**
     * The data needed to update a ConfiguracaoSistema.
     */
    data: XOR<ConfiguracaoSistemaUpdateInput, ConfiguracaoSistemaUncheckedUpdateInput>
    /**
     * Choose, which ConfiguracaoSistema to update.
     */
    where: ConfiguracaoSistemaWhereUniqueInput
  }

  /**
   * ConfiguracaoSistema updateMany
   */
  export type ConfiguracaoSistemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConfiguracaoSistemas.
     */
    data: XOR<ConfiguracaoSistemaUpdateManyMutationInput, ConfiguracaoSistemaUncheckedUpdateManyInput>
    /**
     * Filter which ConfiguracaoSistemas to update
     */
    where?: ConfiguracaoSistemaWhereInput
    /**
     * Limit how many ConfiguracaoSistemas to update.
     */
    limit?: number
  }

  /**
   * ConfiguracaoSistema updateManyAndReturn
   */
  export type ConfiguracaoSistemaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoSistema
     */
    select?: ConfiguracaoSistemaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoSistema
     */
    omit?: ConfiguracaoSistemaOmit<ExtArgs> | null
    /**
     * The data used to update ConfiguracaoSistemas.
     */
    data: XOR<ConfiguracaoSistemaUpdateManyMutationInput, ConfiguracaoSistemaUncheckedUpdateManyInput>
    /**
     * Filter which ConfiguracaoSistemas to update
     */
    where?: ConfiguracaoSistemaWhereInput
    /**
     * Limit how many ConfiguracaoSistemas to update.
     */
    limit?: number
  }

  /**
   * ConfiguracaoSistema upsert
   */
  export type ConfiguracaoSistemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoSistema
     */
    select?: ConfiguracaoSistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoSistema
     */
    omit?: ConfiguracaoSistemaOmit<ExtArgs> | null
    /**
     * The filter to search for the ConfiguracaoSistema to update in case it exists.
     */
    where: ConfiguracaoSistemaWhereUniqueInput
    /**
     * In case the ConfiguracaoSistema found by the `where` argument doesn't exist, create a new ConfiguracaoSistema with this data.
     */
    create: XOR<ConfiguracaoSistemaCreateInput, ConfiguracaoSistemaUncheckedCreateInput>
    /**
     * In case the ConfiguracaoSistema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfiguracaoSistemaUpdateInput, ConfiguracaoSistemaUncheckedUpdateInput>
  }

  /**
   * ConfiguracaoSistema delete
   */
  export type ConfiguracaoSistemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoSistema
     */
    select?: ConfiguracaoSistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoSistema
     */
    omit?: ConfiguracaoSistemaOmit<ExtArgs> | null
    /**
     * Filter which ConfiguracaoSistema to delete.
     */
    where: ConfiguracaoSistemaWhereUniqueInput
  }

  /**
   * ConfiguracaoSistema deleteMany
   */
  export type ConfiguracaoSistemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfiguracaoSistemas to delete
     */
    where?: ConfiguracaoSistemaWhereInput
    /**
     * Limit how many ConfiguracaoSistemas to delete.
     */
    limit?: number
  }

  /**
   * ConfiguracaoSistema without action
   */
  export type ConfiguracaoSistemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoSistema
     */
    select?: ConfiguracaoSistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoSistema
     */
    omit?: ConfiguracaoSistemaOmit<ExtArgs> | null
  }


  /**
   * Model LogAcesso
   */

  export type AggregateLogAcesso = {
    _count: LogAcessoCountAggregateOutputType | null
    _min: LogAcessoMinAggregateOutputType | null
    _max: LogAcessoMaxAggregateOutputType | null
  }

  export type LogAcessoMinAggregateOutputType = {
    id: string | null
    usuario: string | null
    acao: string | null
    entidade: string | null
    entidadeId: string | null
    ip: string | null
    userAgent: string | null
    timestamp: Date | null
  }

  export type LogAcessoMaxAggregateOutputType = {
    id: string | null
    usuario: string | null
    acao: string | null
    entidade: string | null
    entidadeId: string | null
    ip: string | null
    userAgent: string | null
    timestamp: Date | null
  }

  export type LogAcessoCountAggregateOutputType = {
    id: number
    usuario: number
    acao: number
    entidade: number
    entidadeId: number
    ip: number
    userAgent: number
    timestamp: number
    _all: number
  }


  export type LogAcessoMinAggregateInputType = {
    id?: true
    usuario?: true
    acao?: true
    entidade?: true
    entidadeId?: true
    ip?: true
    userAgent?: true
    timestamp?: true
  }

  export type LogAcessoMaxAggregateInputType = {
    id?: true
    usuario?: true
    acao?: true
    entidade?: true
    entidadeId?: true
    ip?: true
    userAgent?: true
    timestamp?: true
  }

  export type LogAcessoCountAggregateInputType = {
    id?: true
    usuario?: true
    acao?: true
    entidade?: true
    entidadeId?: true
    ip?: true
    userAgent?: true
    timestamp?: true
    _all?: true
  }

  export type LogAcessoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogAcesso to aggregate.
     */
    where?: LogAcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAcessos to fetch.
     */
    orderBy?: LogAcessoOrderByWithRelationInput | LogAcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogAcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAcessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAcessos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogAcessos
    **/
    _count?: true | LogAcessoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogAcessoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogAcessoMaxAggregateInputType
  }

  export type GetLogAcessoAggregateType<T extends LogAcessoAggregateArgs> = {
        [P in keyof T & keyof AggregateLogAcesso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogAcesso[P]>
      : GetScalarType<T[P], AggregateLogAcesso[P]>
  }




  export type LogAcessoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogAcessoWhereInput
    orderBy?: LogAcessoOrderByWithAggregationInput | LogAcessoOrderByWithAggregationInput[]
    by: LogAcessoScalarFieldEnum[] | LogAcessoScalarFieldEnum
    having?: LogAcessoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogAcessoCountAggregateInputType | true
    _min?: LogAcessoMinAggregateInputType
    _max?: LogAcessoMaxAggregateInputType
  }

  export type LogAcessoGroupByOutputType = {
    id: string
    usuario: string
    acao: string
    entidade: string
    entidadeId: string | null
    ip: string | null
    userAgent: string | null
    timestamp: Date
    _count: LogAcessoCountAggregateOutputType | null
    _min: LogAcessoMinAggregateOutputType | null
    _max: LogAcessoMaxAggregateOutputType | null
  }

  type GetLogAcessoGroupByPayload<T extends LogAcessoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogAcessoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogAcessoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogAcessoGroupByOutputType[P]>
            : GetScalarType<T[P], LogAcessoGroupByOutputType[P]>
        }
      >
    >


  export type LogAcessoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario?: boolean
    acao?: boolean
    entidade?: boolean
    entidadeId?: boolean
    ip?: boolean
    userAgent?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["logAcesso"]>

  export type LogAcessoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario?: boolean
    acao?: boolean
    entidade?: boolean
    entidadeId?: boolean
    ip?: boolean
    userAgent?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["logAcesso"]>

  export type LogAcessoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario?: boolean
    acao?: boolean
    entidade?: boolean
    entidadeId?: boolean
    ip?: boolean
    userAgent?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["logAcesso"]>

  export type LogAcessoSelectScalar = {
    id?: boolean
    usuario?: boolean
    acao?: boolean
    entidade?: boolean
    entidadeId?: boolean
    ip?: boolean
    userAgent?: boolean
    timestamp?: boolean
  }

  export type LogAcessoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario" | "acao" | "entidade" | "entidadeId" | "ip" | "userAgent" | "timestamp", ExtArgs["result"]["logAcesso"]>

  export type $LogAcessoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogAcesso"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuario: string
      acao: string
      entidade: string
      entidadeId: string | null
      ip: string | null
      userAgent: string | null
      timestamp: Date
    }, ExtArgs["result"]["logAcesso"]>
    composites: {}
  }

  type LogAcessoGetPayload<S extends boolean | null | undefined | LogAcessoDefaultArgs> = $Result.GetResult<Prisma.$LogAcessoPayload, S>

  type LogAcessoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogAcessoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogAcessoCountAggregateInputType | true
    }

  export interface LogAcessoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogAcesso'], meta: { name: 'LogAcesso' } }
    /**
     * Find zero or one LogAcesso that matches the filter.
     * @param {LogAcessoFindUniqueArgs} args - Arguments to find a LogAcesso
     * @example
     * // Get one LogAcesso
     * const logAcesso = await prisma.logAcesso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogAcessoFindUniqueArgs>(args: SelectSubset<T, LogAcessoFindUniqueArgs<ExtArgs>>): Prisma__LogAcessoClient<$Result.GetResult<Prisma.$LogAcessoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogAcesso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogAcessoFindUniqueOrThrowArgs} args - Arguments to find a LogAcesso
     * @example
     * // Get one LogAcesso
     * const logAcesso = await prisma.logAcesso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogAcessoFindUniqueOrThrowArgs>(args: SelectSubset<T, LogAcessoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogAcessoClient<$Result.GetResult<Prisma.$LogAcessoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogAcesso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAcessoFindFirstArgs} args - Arguments to find a LogAcesso
     * @example
     * // Get one LogAcesso
     * const logAcesso = await prisma.logAcesso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogAcessoFindFirstArgs>(args?: SelectSubset<T, LogAcessoFindFirstArgs<ExtArgs>>): Prisma__LogAcessoClient<$Result.GetResult<Prisma.$LogAcessoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogAcesso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAcessoFindFirstOrThrowArgs} args - Arguments to find a LogAcesso
     * @example
     * // Get one LogAcesso
     * const logAcesso = await prisma.logAcesso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogAcessoFindFirstOrThrowArgs>(args?: SelectSubset<T, LogAcessoFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogAcessoClient<$Result.GetResult<Prisma.$LogAcessoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogAcessos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAcessoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogAcessos
     * const logAcessos = await prisma.logAcesso.findMany()
     * 
     * // Get first 10 LogAcessos
     * const logAcessos = await prisma.logAcesso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logAcessoWithIdOnly = await prisma.logAcesso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogAcessoFindManyArgs>(args?: SelectSubset<T, LogAcessoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAcessoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogAcesso.
     * @param {LogAcessoCreateArgs} args - Arguments to create a LogAcesso.
     * @example
     * // Create one LogAcesso
     * const LogAcesso = await prisma.logAcesso.create({
     *   data: {
     *     // ... data to create a LogAcesso
     *   }
     * })
     * 
     */
    create<T extends LogAcessoCreateArgs>(args: SelectSubset<T, LogAcessoCreateArgs<ExtArgs>>): Prisma__LogAcessoClient<$Result.GetResult<Prisma.$LogAcessoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogAcessos.
     * @param {LogAcessoCreateManyArgs} args - Arguments to create many LogAcessos.
     * @example
     * // Create many LogAcessos
     * const logAcesso = await prisma.logAcesso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogAcessoCreateManyArgs>(args?: SelectSubset<T, LogAcessoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogAcessos and returns the data saved in the database.
     * @param {LogAcessoCreateManyAndReturnArgs} args - Arguments to create many LogAcessos.
     * @example
     * // Create many LogAcessos
     * const logAcesso = await prisma.logAcesso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogAcessos and only return the `id`
     * const logAcessoWithIdOnly = await prisma.logAcesso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogAcessoCreateManyAndReturnArgs>(args?: SelectSubset<T, LogAcessoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAcessoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogAcesso.
     * @param {LogAcessoDeleteArgs} args - Arguments to delete one LogAcesso.
     * @example
     * // Delete one LogAcesso
     * const LogAcesso = await prisma.logAcesso.delete({
     *   where: {
     *     // ... filter to delete one LogAcesso
     *   }
     * })
     * 
     */
    delete<T extends LogAcessoDeleteArgs>(args: SelectSubset<T, LogAcessoDeleteArgs<ExtArgs>>): Prisma__LogAcessoClient<$Result.GetResult<Prisma.$LogAcessoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogAcesso.
     * @param {LogAcessoUpdateArgs} args - Arguments to update one LogAcesso.
     * @example
     * // Update one LogAcesso
     * const logAcesso = await prisma.logAcesso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogAcessoUpdateArgs>(args: SelectSubset<T, LogAcessoUpdateArgs<ExtArgs>>): Prisma__LogAcessoClient<$Result.GetResult<Prisma.$LogAcessoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogAcessos.
     * @param {LogAcessoDeleteManyArgs} args - Arguments to filter LogAcessos to delete.
     * @example
     * // Delete a few LogAcessos
     * const { count } = await prisma.logAcesso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogAcessoDeleteManyArgs>(args?: SelectSubset<T, LogAcessoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogAcessos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAcessoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogAcessos
     * const logAcesso = await prisma.logAcesso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogAcessoUpdateManyArgs>(args: SelectSubset<T, LogAcessoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogAcessos and returns the data updated in the database.
     * @param {LogAcessoUpdateManyAndReturnArgs} args - Arguments to update many LogAcessos.
     * @example
     * // Update many LogAcessos
     * const logAcesso = await prisma.logAcesso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogAcessos and only return the `id`
     * const logAcessoWithIdOnly = await prisma.logAcesso.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogAcessoUpdateManyAndReturnArgs>(args: SelectSubset<T, LogAcessoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAcessoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogAcesso.
     * @param {LogAcessoUpsertArgs} args - Arguments to update or create a LogAcesso.
     * @example
     * // Update or create a LogAcesso
     * const logAcesso = await prisma.logAcesso.upsert({
     *   create: {
     *     // ... data to create a LogAcesso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogAcesso we want to update
     *   }
     * })
     */
    upsert<T extends LogAcessoUpsertArgs>(args: SelectSubset<T, LogAcessoUpsertArgs<ExtArgs>>): Prisma__LogAcessoClient<$Result.GetResult<Prisma.$LogAcessoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogAcessos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAcessoCountArgs} args - Arguments to filter LogAcessos to count.
     * @example
     * // Count the number of LogAcessos
     * const count = await prisma.logAcesso.count({
     *   where: {
     *     // ... the filter for the LogAcessos we want to count
     *   }
     * })
    **/
    count<T extends LogAcessoCountArgs>(
      args?: Subset<T, LogAcessoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogAcessoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogAcesso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAcessoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogAcessoAggregateArgs>(args: Subset<T, LogAcessoAggregateArgs>): Prisma.PrismaPromise<GetLogAcessoAggregateType<T>>

    /**
     * Group by LogAcesso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAcessoGroupByArgs} args - Group by arguments.
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
      T extends LogAcessoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogAcessoGroupByArgs['orderBy'] }
        : { orderBy?: LogAcessoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogAcessoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogAcessoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogAcesso model
   */
  readonly fields: LogAcessoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogAcesso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogAcessoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the LogAcesso model
   */
  interface LogAcessoFieldRefs {
    readonly id: FieldRef<"LogAcesso", 'String'>
    readonly usuario: FieldRef<"LogAcesso", 'String'>
    readonly acao: FieldRef<"LogAcesso", 'String'>
    readonly entidade: FieldRef<"LogAcesso", 'String'>
    readonly entidadeId: FieldRef<"LogAcesso", 'String'>
    readonly ip: FieldRef<"LogAcesso", 'String'>
    readonly userAgent: FieldRef<"LogAcesso", 'String'>
    readonly timestamp: FieldRef<"LogAcesso", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LogAcesso findUnique
   */
  export type LogAcessoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
    /**
     * Filter, which LogAcesso to fetch.
     */
    where: LogAcessoWhereUniqueInput
  }

  /**
   * LogAcesso findUniqueOrThrow
   */
  export type LogAcessoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
    /**
     * Filter, which LogAcesso to fetch.
     */
    where: LogAcessoWhereUniqueInput
  }

  /**
   * LogAcesso findFirst
   */
  export type LogAcessoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
    /**
     * Filter, which LogAcesso to fetch.
     */
    where?: LogAcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAcessos to fetch.
     */
    orderBy?: LogAcessoOrderByWithRelationInput | LogAcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogAcessos.
     */
    cursor?: LogAcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAcessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAcessos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogAcessos.
     */
    distinct?: LogAcessoScalarFieldEnum | LogAcessoScalarFieldEnum[]
  }

  /**
   * LogAcesso findFirstOrThrow
   */
  export type LogAcessoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
    /**
     * Filter, which LogAcesso to fetch.
     */
    where?: LogAcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAcessos to fetch.
     */
    orderBy?: LogAcessoOrderByWithRelationInput | LogAcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogAcessos.
     */
    cursor?: LogAcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAcessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAcessos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogAcessos.
     */
    distinct?: LogAcessoScalarFieldEnum | LogAcessoScalarFieldEnum[]
  }

  /**
   * LogAcesso findMany
   */
  export type LogAcessoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
    /**
     * Filter, which LogAcessos to fetch.
     */
    where?: LogAcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAcessos to fetch.
     */
    orderBy?: LogAcessoOrderByWithRelationInput | LogAcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogAcessos.
     */
    cursor?: LogAcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAcessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAcessos.
     */
    skip?: number
    distinct?: LogAcessoScalarFieldEnum | LogAcessoScalarFieldEnum[]
  }

  /**
   * LogAcesso create
   */
  export type LogAcessoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
    /**
     * The data needed to create a LogAcesso.
     */
    data: XOR<LogAcessoCreateInput, LogAcessoUncheckedCreateInput>
  }

  /**
   * LogAcesso createMany
   */
  export type LogAcessoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogAcessos.
     */
    data: LogAcessoCreateManyInput | LogAcessoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogAcesso createManyAndReturn
   */
  export type LogAcessoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
    /**
     * The data used to create many LogAcessos.
     */
    data: LogAcessoCreateManyInput | LogAcessoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogAcesso update
   */
  export type LogAcessoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
    /**
     * The data needed to update a LogAcesso.
     */
    data: XOR<LogAcessoUpdateInput, LogAcessoUncheckedUpdateInput>
    /**
     * Choose, which LogAcesso to update.
     */
    where: LogAcessoWhereUniqueInput
  }

  /**
   * LogAcesso updateMany
   */
  export type LogAcessoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogAcessos.
     */
    data: XOR<LogAcessoUpdateManyMutationInput, LogAcessoUncheckedUpdateManyInput>
    /**
     * Filter which LogAcessos to update
     */
    where?: LogAcessoWhereInput
    /**
     * Limit how many LogAcessos to update.
     */
    limit?: number
  }

  /**
   * LogAcesso updateManyAndReturn
   */
  export type LogAcessoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
    /**
     * The data used to update LogAcessos.
     */
    data: XOR<LogAcessoUpdateManyMutationInput, LogAcessoUncheckedUpdateManyInput>
    /**
     * Filter which LogAcessos to update
     */
    where?: LogAcessoWhereInput
    /**
     * Limit how many LogAcessos to update.
     */
    limit?: number
  }

  /**
   * LogAcesso upsert
   */
  export type LogAcessoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
    /**
     * The filter to search for the LogAcesso to update in case it exists.
     */
    where: LogAcessoWhereUniqueInput
    /**
     * In case the LogAcesso found by the `where` argument doesn't exist, create a new LogAcesso with this data.
     */
    create: XOR<LogAcessoCreateInput, LogAcessoUncheckedCreateInput>
    /**
     * In case the LogAcesso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogAcessoUpdateInput, LogAcessoUncheckedUpdateInput>
  }

  /**
   * LogAcesso delete
   */
  export type LogAcessoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
    /**
     * Filter which LogAcesso to delete.
     */
    where: LogAcessoWhereUniqueInput
  }

  /**
   * LogAcesso deleteMany
   */
  export type LogAcessoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogAcessos to delete
     */
    where?: LogAcessoWhereInput
    /**
     * Limit how many LogAcessos to delete.
     */
    limit?: number
  }

  /**
   * LogAcesso without action
   */
  export type LogAcessoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
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


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const ColaboradorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    cargo: 'cargo',
    status: 'status',
    dataEntrada: 'dataEntrada',
    dataSaida: 'dataSaida',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ColaboradorScalarFieldEnum = (typeof ColaboradorScalarFieldEnum)[keyof typeof ColaboradorScalarFieldEnum]


  export const PlataformaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    tipo: 'tipo',
    urlLogin: 'urlLogin',
    emailUtilizado: 'emailUtilizado',
    senhaEncriptada: 'senhaEncriptada',
    custoMensal: 'custoMensal',
    ultimaAtualizacaoSenha: 'ultimaAtualizacaoSenha',
    frequenciaAtualizacao: 'frequenciaAtualizacao',
    observacoes: 'observacoes',
    vinculo: 'vinculo',
    clienteId: 'clienteId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlataformaScalarFieldEnum = (typeof PlataformaScalarFieldEnum)[keyof typeof PlataformaScalarFieldEnum]


  export const AcessoPlataformaScalarFieldEnum: {
    id: 'id',
    colaboradorId: 'colaboradorId',
    plataformaId: 'plataformaId',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AcessoPlataformaScalarFieldEnum = (typeof AcessoPlataformaScalarFieldEnum)[keyof typeof AcessoPlataformaScalarFieldEnum]


  export const HistoricoSenhaScalarFieldEnum: {
    id: 'id',
    plataformaId: 'plataformaId',
    colaboradorId: 'colaboradorId',
    senhaAnterior: 'senhaAnterior',
    novaSenha: 'novaSenha',
    motivoMudanca: 'motivoMudanca',
    dataAlteracao: 'dataAlteracao',
    notificouColaboradores: 'notificouColaboradores',
    tipoNotificacao: 'tipoNotificacao'
  };

  export type HistoricoSenhaScalarFieldEnum = (typeof HistoricoSenhaScalarFieldEnum)[keyof typeof HistoricoSenhaScalarFieldEnum]


  export const VisualizacaoSenhaScalarFieldEnum: {
    id: 'id',
    plataformaId: 'plataformaId',
    colaboradorId: 'colaboradorId',
    dataVisualizacao: 'dataVisualizacao',
    ip: 'ip',
    userAgent: 'userAgent'
  };

  export type VisualizacaoSenhaScalarFieldEnum = (typeof VisualizacaoSenhaScalarFieldEnum)[keyof typeof VisualizacaoSenhaScalarFieldEnum]


  export const TicketSenhaScalarFieldEnum: {
    id: 'id',
    plataformaId: 'plataformaId',
    colaboradorId: 'colaboradorId',
    descricaoProblema: 'descricaoProblema',
    status: 'status',
    dataAbertura: 'dataAbertura',
    dataResolucao: 'dataResolucao',
    observacoesResolucao: 'observacoesResolucao'
  };

  export type TicketSenhaScalarFieldEnum = (typeof TicketSenhaScalarFieldEnum)[keyof typeof TicketSenhaScalarFieldEnum]


  export const CustoPlataformaScalarFieldEnum: {
    id: 'id',
    plataformaId: 'plataformaId',
    valor: 'valor',
    moeda: 'moeda',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim',
    ativo: 'ativo',
    observacoes: 'observacoes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustoPlataformaScalarFieldEnum = (typeof CustoPlataformaScalarFieldEnum)[keyof typeof CustoPlataformaScalarFieldEnum]


  export const ConfiguracaoSistemaScalarFieldEnum: {
    id: 'id',
    chaveMestre: 'chaveMestre',
    webhookClickup: 'webhookClickup',
    webhookDiscord: 'webhookDiscord',
    emailAlertas: 'emailAlertas',
    apiKeyEmail: 'apiKeyEmail',
    diasAvisoExpiracao: 'diasAvisoExpiracao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConfiguracaoSistemaScalarFieldEnum = (typeof ConfiguracaoSistemaScalarFieldEnum)[keyof typeof ConfiguracaoSistemaScalarFieldEnum]


  export const LogAcessoScalarFieldEnum: {
    id: 'id',
    usuario: 'usuario',
    acao: 'acao',
    entidade: 'entidade',
    entidadeId: 'entidadeId',
    ip: 'ip',
    userAgent: 'userAgent',
    timestamp: 'timestamp'
  };

  export type LogAcessoScalarFieldEnum = (typeof LogAcessoScalarFieldEnum)[keyof typeof LogAcessoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatusColaborador'
   */
  export type EnumStatusColaboradorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusColaborador'>
    


  /**
   * Reference to a field of type 'StatusColaborador[]'
   */
  export type ListEnumStatusColaboradorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusColaborador[]'>
    


  /**
   * Reference to a field of type 'TipoPlataforma'
   */
  export type EnumTipoPlataformaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoPlataforma'>
    


  /**
   * Reference to a field of type 'TipoPlataforma[]'
   */
  export type ListEnumTipoPlataformaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoPlataforma[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'VinculoPlataforma'
   */
  export type EnumVinculoPlataformaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VinculoPlataforma'>
    


  /**
   * Reference to a field of type 'VinculoPlataforma[]'
   */
  export type ListEnumVinculoPlataformaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VinculoPlataforma[]'>
    


  /**
   * Reference to a field of type 'StatusTicket'
   */
  export type EnumStatusTicketFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusTicket'>
    


  /**
   * Reference to a field of type 'StatusTicket[]'
   */
  export type ListEnumStatusTicketFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusTicket[]'>
    
  /**
   * Deep Input Types
   */


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: StringFilter<"Cliente"> | string
    nome?: StringFilter<"Cliente"> | string
    email?: StringNullableFilter<"Cliente"> | string | null
    telefone?: StringNullableFilter<"Cliente"> | string | null
    ativo?: BoolFilter<"Cliente"> | boolean
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    plataformas?: PlataformaListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plataformas?: PlataformaOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    email?: StringNullableFilter<"Cliente"> | string | null
    telefone?: StringNullableFilter<"Cliente"> | string | null
    ativo?: BoolFilter<"Cliente"> | boolean
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    plataformas?: PlataformaListRelationFilter
  }, "id">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cliente"> | string
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    ativo?: BoolWithAggregatesFilter<"Cliente"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type ColaboradorWhereInput = {
    AND?: ColaboradorWhereInput | ColaboradorWhereInput[]
    OR?: ColaboradorWhereInput[]
    NOT?: ColaboradorWhereInput | ColaboradorWhereInput[]
    id?: StringFilter<"Colaborador"> | string
    nome?: StringFilter<"Colaborador"> | string
    email?: StringFilter<"Colaborador"> | string
    cargo?: StringFilter<"Colaborador"> | string
    status?: EnumStatusColaboradorFilter<"Colaborador"> | $Enums.StatusColaborador
    dataEntrada?: DateTimeFilter<"Colaborador"> | Date | string
    dataSaida?: DateTimeNullableFilter<"Colaborador"> | Date | string | null
    createdAt?: DateTimeFilter<"Colaborador"> | Date | string
    updatedAt?: DateTimeFilter<"Colaborador"> | Date | string
    acessos?: AcessoPlataformaListRelationFilter
    historicoSenhas?: HistoricoSenhaListRelationFilter
    visualizacoesSenha?: VisualizacaoSenhaListRelationFilter
    ticketsSenha?: TicketSenhaListRelationFilter
  }

  export type ColaboradorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cargo?: SortOrder
    status?: SortOrder
    dataEntrada?: SortOrder
    dataSaida?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    acessos?: AcessoPlataformaOrderByRelationAggregateInput
    historicoSenhas?: HistoricoSenhaOrderByRelationAggregateInput
    visualizacoesSenha?: VisualizacaoSenhaOrderByRelationAggregateInput
    ticketsSenha?: TicketSenhaOrderByRelationAggregateInput
  }

  export type ColaboradorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ColaboradorWhereInput | ColaboradorWhereInput[]
    OR?: ColaboradorWhereInput[]
    NOT?: ColaboradorWhereInput | ColaboradorWhereInput[]
    nome?: StringFilter<"Colaborador"> | string
    cargo?: StringFilter<"Colaborador"> | string
    status?: EnumStatusColaboradorFilter<"Colaborador"> | $Enums.StatusColaborador
    dataEntrada?: DateTimeFilter<"Colaborador"> | Date | string
    dataSaida?: DateTimeNullableFilter<"Colaborador"> | Date | string | null
    createdAt?: DateTimeFilter<"Colaborador"> | Date | string
    updatedAt?: DateTimeFilter<"Colaborador"> | Date | string
    acessos?: AcessoPlataformaListRelationFilter
    historicoSenhas?: HistoricoSenhaListRelationFilter
    visualizacoesSenha?: VisualizacaoSenhaListRelationFilter
    ticketsSenha?: TicketSenhaListRelationFilter
  }, "id" | "email">

  export type ColaboradorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cargo?: SortOrder
    status?: SortOrder
    dataEntrada?: SortOrder
    dataSaida?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ColaboradorCountOrderByAggregateInput
    _max?: ColaboradorMaxOrderByAggregateInput
    _min?: ColaboradorMinOrderByAggregateInput
  }

  export type ColaboradorScalarWhereWithAggregatesInput = {
    AND?: ColaboradorScalarWhereWithAggregatesInput | ColaboradorScalarWhereWithAggregatesInput[]
    OR?: ColaboradorScalarWhereWithAggregatesInput[]
    NOT?: ColaboradorScalarWhereWithAggregatesInput | ColaboradorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Colaborador"> | string
    nome?: StringWithAggregatesFilter<"Colaborador"> | string
    email?: StringWithAggregatesFilter<"Colaborador"> | string
    cargo?: StringWithAggregatesFilter<"Colaborador"> | string
    status?: EnumStatusColaboradorWithAggregatesFilter<"Colaborador"> | $Enums.StatusColaborador
    dataEntrada?: DateTimeWithAggregatesFilter<"Colaborador"> | Date | string
    dataSaida?: DateTimeNullableWithAggregatesFilter<"Colaborador"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Colaborador"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Colaborador"> | Date | string
  }

  export type PlataformaWhereInput = {
    AND?: PlataformaWhereInput | PlataformaWhereInput[]
    OR?: PlataformaWhereInput[]
    NOT?: PlataformaWhereInput | PlataformaWhereInput[]
    id?: StringFilter<"Plataforma"> | string
    nome?: StringFilter<"Plataforma"> | string
    tipo?: EnumTipoPlataformaFilter<"Plataforma"> | $Enums.TipoPlataforma
    urlLogin?: StringNullableFilter<"Plataforma"> | string | null
    emailUtilizado?: StringNullableFilter<"Plataforma"> | string | null
    senhaEncriptada?: StringFilter<"Plataforma"> | string
    custoMensal?: FloatFilter<"Plataforma"> | number
    ultimaAtualizacaoSenha?: DateTimeFilter<"Plataforma"> | Date | string
    frequenciaAtualizacao?: IntFilter<"Plataforma"> | number
    observacoes?: StringNullableFilter<"Plataforma"> | string | null
    vinculo?: EnumVinculoPlataformaFilter<"Plataforma"> | $Enums.VinculoPlataforma
    clienteId?: StringNullableFilter<"Plataforma"> | string | null
    createdAt?: DateTimeFilter<"Plataforma"> | Date | string
    updatedAt?: DateTimeFilter<"Plataforma"> | Date | string
    cliente?: XOR<ClienteNullableScalarRelationFilter, ClienteWhereInput> | null
    acessos?: AcessoPlataformaListRelationFilter
    historicoSenhas?: HistoricoSenhaListRelationFilter
    custos?: CustoPlataformaListRelationFilter
    visualizacoesSenha?: VisualizacaoSenhaListRelationFilter
    ticketsSenha?: TicketSenhaListRelationFilter
  }

  export type PlataformaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    urlLogin?: SortOrderInput | SortOrder
    emailUtilizado?: SortOrderInput | SortOrder
    senhaEncriptada?: SortOrder
    custoMensal?: SortOrder
    ultimaAtualizacaoSenha?: SortOrder
    frequenciaAtualizacao?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    vinculo?: SortOrder
    clienteId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    acessos?: AcessoPlataformaOrderByRelationAggregateInput
    historicoSenhas?: HistoricoSenhaOrderByRelationAggregateInput
    custos?: CustoPlataformaOrderByRelationAggregateInput
    visualizacoesSenha?: VisualizacaoSenhaOrderByRelationAggregateInput
    ticketsSenha?: TicketSenhaOrderByRelationAggregateInput
  }

  export type PlataformaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlataformaWhereInput | PlataformaWhereInput[]
    OR?: PlataformaWhereInput[]
    NOT?: PlataformaWhereInput | PlataformaWhereInput[]
    nome?: StringFilter<"Plataforma"> | string
    tipo?: EnumTipoPlataformaFilter<"Plataforma"> | $Enums.TipoPlataforma
    urlLogin?: StringNullableFilter<"Plataforma"> | string | null
    emailUtilizado?: StringNullableFilter<"Plataforma"> | string | null
    senhaEncriptada?: StringFilter<"Plataforma"> | string
    custoMensal?: FloatFilter<"Plataforma"> | number
    ultimaAtualizacaoSenha?: DateTimeFilter<"Plataforma"> | Date | string
    frequenciaAtualizacao?: IntFilter<"Plataforma"> | number
    observacoes?: StringNullableFilter<"Plataforma"> | string | null
    vinculo?: EnumVinculoPlataformaFilter<"Plataforma"> | $Enums.VinculoPlataforma
    clienteId?: StringNullableFilter<"Plataforma"> | string | null
    createdAt?: DateTimeFilter<"Plataforma"> | Date | string
    updatedAt?: DateTimeFilter<"Plataforma"> | Date | string
    cliente?: XOR<ClienteNullableScalarRelationFilter, ClienteWhereInput> | null
    acessos?: AcessoPlataformaListRelationFilter
    historicoSenhas?: HistoricoSenhaListRelationFilter
    custos?: CustoPlataformaListRelationFilter
    visualizacoesSenha?: VisualizacaoSenhaListRelationFilter
    ticketsSenha?: TicketSenhaListRelationFilter
  }, "id">

  export type PlataformaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    urlLogin?: SortOrderInput | SortOrder
    emailUtilizado?: SortOrderInput | SortOrder
    senhaEncriptada?: SortOrder
    custoMensal?: SortOrder
    ultimaAtualizacaoSenha?: SortOrder
    frequenciaAtualizacao?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    vinculo?: SortOrder
    clienteId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlataformaCountOrderByAggregateInput
    _avg?: PlataformaAvgOrderByAggregateInput
    _max?: PlataformaMaxOrderByAggregateInput
    _min?: PlataformaMinOrderByAggregateInput
    _sum?: PlataformaSumOrderByAggregateInput
  }

  export type PlataformaScalarWhereWithAggregatesInput = {
    AND?: PlataformaScalarWhereWithAggregatesInput | PlataformaScalarWhereWithAggregatesInput[]
    OR?: PlataformaScalarWhereWithAggregatesInput[]
    NOT?: PlataformaScalarWhereWithAggregatesInput | PlataformaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plataforma"> | string
    nome?: StringWithAggregatesFilter<"Plataforma"> | string
    tipo?: EnumTipoPlataformaWithAggregatesFilter<"Plataforma"> | $Enums.TipoPlataforma
    urlLogin?: StringNullableWithAggregatesFilter<"Plataforma"> | string | null
    emailUtilizado?: StringNullableWithAggregatesFilter<"Plataforma"> | string | null
    senhaEncriptada?: StringWithAggregatesFilter<"Plataforma"> | string
    custoMensal?: FloatWithAggregatesFilter<"Plataforma"> | number
    ultimaAtualizacaoSenha?: DateTimeWithAggregatesFilter<"Plataforma"> | Date | string
    frequenciaAtualizacao?: IntWithAggregatesFilter<"Plataforma"> | number
    observacoes?: StringNullableWithAggregatesFilter<"Plataforma"> | string | null
    vinculo?: EnumVinculoPlataformaWithAggregatesFilter<"Plataforma"> | $Enums.VinculoPlataforma
    clienteId?: StringNullableWithAggregatesFilter<"Plataforma"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Plataforma"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Plataforma"> | Date | string
  }

  export type AcessoPlataformaWhereInput = {
    AND?: AcessoPlataformaWhereInput | AcessoPlataformaWhereInput[]
    OR?: AcessoPlataformaWhereInput[]
    NOT?: AcessoPlataformaWhereInput | AcessoPlataformaWhereInput[]
    id?: StringFilter<"AcessoPlataforma"> | string
    colaboradorId?: StringFilter<"AcessoPlataforma"> | string
    plataformaId?: StringFilter<"AcessoPlataforma"> | string
    dataInicio?: DateTimeFilter<"AcessoPlataforma"> | Date | string
    dataFim?: DateTimeNullableFilter<"AcessoPlataforma"> | Date | string | null
    ativo?: BoolFilter<"AcessoPlataforma"> | boolean
    createdAt?: DateTimeFilter<"AcessoPlataforma"> | Date | string
    updatedAt?: DateTimeFilter<"AcessoPlataforma"> | Date | string
    colaborador?: XOR<ColaboradorScalarRelationFilter, ColaboradorWhereInput>
    plataforma?: XOR<PlataformaScalarRelationFilter, PlataformaWhereInput>
  }

  export type AcessoPlataformaOrderByWithRelationInput = {
    id?: SortOrder
    colaboradorId?: SortOrder
    plataformaId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    colaborador?: ColaboradorOrderByWithRelationInput
    plataforma?: PlataformaOrderByWithRelationInput
  }

  export type AcessoPlataformaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    colaboradorId_plataformaId?: AcessoPlataformaColaboradorIdPlataformaIdCompoundUniqueInput
    AND?: AcessoPlataformaWhereInput | AcessoPlataformaWhereInput[]
    OR?: AcessoPlataformaWhereInput[]
    NOT?: AcessoPlataformaWhereInput | AcessoPlataformaWhereInput[]
    colaboradorId?: StringFilter<"AcessoPlataforma"> | string
    plataformaId?: StringFilter<"AcessoPlataforma"> | string
    dataInicio?: DateTimeFilter<"AcessoPlataforma"> | Date | string
    dataFim?: DateTimeNullableFilter<"AcessoPlataforma"> | Date | string | null
    ativo?: BoolFilter<"AcessoPlataforma"> | boolean
    createdAt?: DateTimeFilter<"AcessoPlataforma"> | Date | string
    updatedAt?: DateTimeFilter<"AcessoPlataforma"> | Date | string
    colaborador?: XOR<ColaboradorScalarRelationFilter, ColaboradorWhereInput>
    plataforma?: XOR<PlataformaScalarRelationFilter, PlataformaWhereInput>
  }, "id" | "colaboradorId_plataformaId">

  export type AcessoPlataformaOrderByWithAggregationInput = {
    id?: SortOrder
    colaboradorId?: SortOrder
    plataformaId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AcessoPlataformaCountOrderByAggregateInput
    _max?: AcessoPlataformaMaxOrderByAggregateInput
    _min?: AcessoPlataformaMinOrderByAggregateInput
  }

  export type AcessoPlataformaScalarWhereWithAggregatesInput = {
    AND?: AcessoPlataformaScalarWhereWithAggregatesInput | AcessoPlataformaScalarWhereWithAggregatesInput[]
    OR?: AcessoPlataformaScalarWhereWithAggregatesInput[]
    NOT?: AcessoPlataformaScalarWhereWithAggregatesInput | AcessoPlataformaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AcessoPlataforma"> | string
    colaboradorId?: StringWithAggregatesFilter<"AcessoPlataforma"> | string
    plataformaId?: StringWithAggregatesFilter<"AcessoPlataforma"> | string
    dataInicio?: DateTimeWithAggregatesFilter<"AcessoPlataforma"> | Date | string
    dataFim?: DateTimeNullableWithAggregatesFilter<"AcessoPlataforma"> | Date | string | null
    ativo?: BoolWithAggregatesFilter<"AcessoPlataforma"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AcessoPlataforma"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AcessoPlataforma"> | Date | string
  }

  export type HistoricoSenhaWhereInput = {
    AND?: HistoricoSenhaWhereInput | HistoricoSenhaWhereInput[]
    OR?: HistoricoSenhaWhereInput[]
    NOT?: HistoricoSenhaWhereInput | HistoricoSenhaWhereInput[]
    id?: StringFilter<"HistoricoSenha"> | string
    plataformaId?: StringFilter<"HistoricoSenha"> | string
    colaboradorId?: StringNullableFilter<"HistoricoSenha"> | string | null
    senhaAnterior?: StringNullableFilter<"HistoricoSenha"> | string | null
    novaSenha?: StringFilter<"HistoricoSenha"> | string
    motivoMudanca?: StringNullableFilter<"HistoricoSenha"> | string | null
    dataAlteracao?: DateTimeFilter<"HistoricoSenha"> | Date | string
    notificouColaboradores?: BoolFilter<"HistoricoSenha"> | boolean
    tipoNotificacao?: StringNullableFilter<"HistoricoSenha"> | string | null
    plataforma?: XOR<PlataformaScalarRelationFilter, PlataformaWhereInput>
    colaborador?: XOR<ColaboradorNullableScalarRelationFilter, ColaboradorWhereInput> | null
  }

  export type HistoricoSenhaOrderByWithRelationInput = {
    id?: SortOrder
    plataformaId?: SortOrder
    colaboradorId?: SortOrderInput | SortOrder
    senhaAnterior?: SortOrderInput | SortOrder
    novaSenha?: SortOrder
    motivoMudanca?: SortOrderInput | SortOrder
    dataAlteracao?: SortOrder
    notificouColaboradores?: SortOrder
    tipoNotificacao?: SortOrderInput | SortOrder
    plataforma?: PlataformaOrderByWithRelationInput
    colaborador?: ColaboradorOrderByWithRelationInput
  }

  export type HistoricoSenhaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoricoSenhaWhereInput | HistoricoSenhaWhereInput[]
    OR?: HistoricoSenhaWhereInput[]
    NOT?: HistoricoSenhaWhereInput | HistoricoSenhaWhereInput[]
    plataformaId?: StringFilter<"HistoricoSenha"> | string
    colaboradorId?: StringNullableFilter<"HistoricoSenha"> | string | null
    senhaAnterior?: StringNullableFilter<"HistoricoSenha"> | string | null
    novaSenha?: StringFilter<"HistoricoSenha"> | string
    motivoMudanca?: StringNullableFilter<"HistoricoSenha"> | string | null
    dataAlteracao?: DateTimeFilter<"HistoricoSenha"> | Date | string
    notificouColaboradores?: BoolFilter<"HistoricoSenha"> | boolean
    tipoNotificacao?: StringNullableFilter<"HistoricoSenha"> | string | null
    plataforma?: XOR<PlataformaScalarRelationFilter, PlataformaWhereInput>
    colaborador?: XOR<ColaboradorNullableScalarRelationFilter, ColaboradorWhereInput> | null
  }, "id">

  export type HistoricoSenhaOrderByWithAggregationInput = {
    id?: SortOrder
    plataformaId?: SortOrder
    colaboradorId?: SortOrderInput | SortOrder
    senhaAnterior?: SortOrderInput | SortOrder
    novaSenha?: SortOrder
    motivoMudanca?: SortOrderInput | SortOrder
    dataAlteracao?: SortOrder
    notificouColaboradores?: SortOrder
    tipoNotificacao?: SortOrderInput | SortOrder
    _count?: HistoricoSenhaCountOrderByAggregateInput
    _max?: HistoricoSenhaMaxOrderByAggregateInput
    _min?: HistoricoSenhaMinOrderByAggregateInput
  }

  export type HistoricoSenhaScalarWhereWithAggregatesInput = {
    AND?: HistoricoSenhaScalarWhereWithAggregatesInput | HistoricoSenhaScalarWhereWithAggregatesInput[]
    OR?: HistoricoSenhaScalarWhereWithAggregatesInput[]
    NOT?: HistoricoSenhaScalarWhereWithAggregatesInput | HistoricoSenhaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HistoricoSenha"> | string
    plataformaId?: StringWithAggregatesFilter<"HistoricoSenha"> | string
    colaboradorId?: StringNullableWithAggregatesFilter<"HistoricoSenha"> | string | null
    senhaAnterior?: StringNullableWithAggregatesFilter<"HistoricoSenha"> | string | null
    novaSenha?: StringWithAggregatesFilter<"HistoricoSenha"> | string
    motivoMudanca?: StringNullableWithAggregatesFilter<"HistoricoSenha"> | string | null
    dataAlteracao?: DateTimeWithAggregatesFilter<"HistoricoSenha"> | Date | string
    notificouColaboradores?: BoolWithAggregatesFilter<"HistoricoSenha"> | boolean
    tipoNotificacao?: StringNullableWithAggregatesFilter<"HistoricoSenha"> | string | null
  }

  export type VisualizacaoSenhaWhereInput = {
    AND?: VisualizacaoSenhaWhereInput | VisualizacaoSenhaWhereInput[]
    OR?: VisualizacaoSenhaWhereInput[]
    NOT?: VisualizacaoSenhaWhereInput | VisualizacaoSenhaWhereInput[]
    id?: StringFilter<"VisualizacaoSenha"> | string
    plataformaId?: StringFilter<"VisualizacaoSenha"> | string
    colaboradorId?: StringFilter<"VisualizacaoSenha"> | string
    dataVisualizacao?: DateTimeFilter<"VisualizacaoSenha"> | Date | string
    ip?: StringNullableFilter<"VisualizacaoSenha"> | string | null
    userAgent?: StringNullableFilter<"VisualizacaoSenha"> | string | null
    plataforma?: XOR<PlataformaScalarRelationFilter, PlataformaWhereInput>
    colaborador?: XOR<ColaboradorScalarRelationFilter, ColaboradorWhereInput>
  }

  export type VisualizacaoSenhaOrderByWithRelationInput = {
    id?: SortOrder
    plataformaId?: SortOrder
    colaboradorId?: SortOrder
    dataVisualizacao?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    plataforma?: PlataformaOrderByWithRelationInput
    colaborador?: ColaboradorOrderByWithRelationInput
  }

  export type VisualizacaoSenhaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VisualizacaoSenhaWhereInput | VisualizacaoSenhaWhereInput[]
    OR?: VisualizacaoSenhaWhereInput[]
    NOT?: VisualizacaoSenhaWhereInput | VisualizacaoSenhaWhereInput[]
    plataformaId?: StringFilter<"VisualizacaoSenha"> | string
    colaboradorId?: StringFilter<"VisualizacaoSenha"> | string
    dataVisualizacao?: DateTimeFilter<"VisualizacaoSenha"> | Date | string
    ip?: StringNullableFilter<"VisualizacaoSenha"> | string | null
    userAgent?: StringNullableFilter<"VisualizacaoSenha"> | string | null
    plataforma?: XOR<PlataformaScalarRelationFilter, PlataformaWhereInput>
    colaborador?: XOR<ColaboradorScalarRelationFilter, ColaboradorWhereInput>
  }, "id">

  export type VisualizacaoSenhaOrderByWithAggregationInput = {
    id?: SortOrder
    plataformaId?: SortOrder
    colaboradorId?: SortOrder
    dataVisualizacao?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    _count?: VisualizacaoSenhaCountOrderByAggregateInput
    _max?: VisualizacaoSenhaMaxOrderByAggregateInput
    _min?: VisualizacaoSenhaMinOrderByAggregateInput
  }

  export type VisualizacaoSenhaScalarWhereWithAggregatesInput = {
    AND?: VisualizacaoSenhaScalarWhereWithAggregatesInput | VisualizacaoSenhaScalarWhereWithAggregatesInput[]
    OR?: VisualizacaoSenhaScalarWhereWithAggregatesInput[]
    NOT?: VisualizacaoSenhaScalarWhereWithAggregatesInput | VisualizacaoSenhaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VisualizacaoSenha"> | string
    plataformaId?: StringWithAggregatesFilter<"VisualizacaoSenha"> | string
    colaboradorId?: StringWithAggregatesFilter<"VisualizacaoSenha"> | string
    dataVisualizacao?: DateTimeWithAggregatesFilter<"VisualizacaoSenha"> | Date | string
    ip?: StringNullableWithAggregatesFilter<"VisualizacaoSenha"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"VisualizacaoSenha"> | string | null
  }

  export type TicketSenhaWhereInput = {
    AND?: TicketSenhaWhereInput | TicketSenhaWhereInput[]
    OR?: TicketSenhaWhereInput[]
    NOT?: TicketSenhaWhereInput | TicketSenhaWhereInput[]
    id?: StringFilter<"TicketSenha"> | string
    plataformaId?: StringFilter<"TicketSenha"> | string
    colaboradorId?: StringFilter<"TicketSenha"> | string
    descricaoProblema?: StringFilter<"TicketSenha"> | string
    status?: EnumStatusTicketFilter<"TicketSenha"> | $Enums.StatusTicket
    dataAbertura?: DateTimeFilter<"TicketSenha"> | Date | string
    dataResolucao?: DateTimeNullableFilter<"TicketSenha"> | Date | string | null
    observacoesResolucao?: StringNullableFilter<"TicketSenha"> | string | null
    plataforma?: XOR<PlataformaScalarRelationFilter, PlataformaWhereInput>
    colaborador?: XOR<ColaboradorScalarRelationFilter, ColaboradorWhereInput>
  }

  export type TicketSenhaOrderByWithRelationInput = {
    id?: SortOrder
    plataformaId?: SortOrder
    colaboradorId?: SortOrder
    descricaoProblema?: SortOrder
    status?: SortOrder
    dataAbertura?: SortOrder
    dataResolucao?: SortOrderInput | SortOrder
    observacoesResolucao?: SortOrderInput | SortOrder
    plataforma?: PlataformaOrderByWithRelationInput
    colaborador?: ColaboradorOrderByWithRelationInput
  }

  export type TicketSenhaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketSenhaWhereInput | TicketSenhaWhereInput[]
    OR?: TicketSenhaWhereInput[]
    NOT?: TicketSenhaWhereInput | TicketSenhaWhereInput[]
    plataformaId?: StringFilter<"TicketSenha"> | string
    colaboradorId?: StringFilter<"TicketSenha"> | string
    descricaoProblema?: StringFilter<"TicketSenha"> | string
    status?: EnumStatusTicketFilter<"TicketSenha"> | $Enums.StatusTicket
    dataAbertura?: DateTimeFilter<"TicketSenha"> | Date | string
    dataResolucao?: DateTimeNullableFilter<"TicketSenha"> | Date | string | null
    observacoesResolucao?: StringNullableFilter<"TicketSenha"> | string | null
    plataforma?: XOR<PlataformaScalarRelationFilter, PlataformaWhereInput>
    colaborador?: XOR<ColaboradorScalarRelationFilter, ColaboradorWhereInput>
  }, "id">

  export type TicketSenhaOrderByWithAggregationInput = {
    id?: SortOrder
    plataformaId?: SortOrder
    colaboradorId?: SortOrder
    descricaoProblema?: SortOrder
    status?: SortOrder
    dataAbertura?: SortOrder
    dataResolucao?: SortOrderInput | SortOrder
    observacoesResolucao?: SortOrderInput | SortOrder
    _count?: TicketSenhaCountOrderByAggregateInput
    _max?: TicketSenhaMaxOrderByAggregateInput
    _min?: TicketSenhaMinOrderByAggregateInput
  }

  export type TicketSenhaScalarWhereWithAggregatesInput = {
    AND?: TicketSenhaScalarWhereWithAggregatesInput | TicketSenhaScalarWhereWithAggregatesInput[]
    OR?: TicketSenhaScalarWhereWithAggregatesInput[]
    NOT?: TicketSenhaScalarWhereWithAggregatesInput | TicketSenhaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketSenha"> | string
    plataformaId?: StringWithAggregatesFilter<"TicketSenha"> | string
    colaboradorId?: StringWithAggregatesFilter<"TicketSenha"> | string
    descricaoProblema?: StringWithAggregatesFilter<"TicketSenha"> | string
    status?: EnumStatusTicketWithAggregatesFilter<"TicketSenha"> | $Enums.StatusTicket
    dataAbertura?: DateTimeWithAggregatesFilter<"TicketSenha"> | Date | string
    dataResolucao?: DateTimeNullableWithAggregatesFilter<"TicketSenha"> | Date | string | null
    observacoesResolucao?: StringNullableWithAggregatesFilter<"TicketSenha"> | string | null
  }

  export type CustoPlataformaWhereInput = {
    AND?: CustoPlataformaWhereInput | CustoPlataformaWhereInput[]
    OR?: CustoPlataformaWhereInput[]
    NOT?: CustoPlataformaWhereInput | CustoPlataformaWhereInput[]
    id?: StringFilter<"CustoPlataforma"> | string
    plataformaId?: StringFilter<"CustoPlataforma"> | string
    valor?: FloatFilter<"CustoPlataforma"> | number
    moeda?: StringFilter<"CustoPlataforma"> | string
    dataInicio?: DateTimeFilter<"CustoPlataforma"> | Date | string
    dataFim?: DateTimeNullableFilter<"CustoPlataforma"> | Date | string | null
    ativo?: BoolFilter<"CustoPlataforma"> | boolean
    observacoes?: StringNullableFilter<"CustoPlataforma"> | string | null
    createdAt?: DateTimeFilter<"CustoPlataforma"> | Date | string
    updatedAt?: DateTimeFilter<"CustoPlataforma"> | Date | string
    plataforma?: XOR<PlataformaScalarRelationFilter, PlataformaWhereInput>
  }

  export type CustoPlataformaOrderByWithRelationInput = {
    id?: SortOrder
    plataformaId?: SortOrder
    valor?: SortOrder
    moeda?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrderInput | SortOrder
    ativo?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plataforma?: PlataformaOrderByWithRelationInput
  }

  export type CustoPlataformaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustoPlataformaWhereInput | CustoPlataformaWhereInput[]
    OR?: CustoPlataformaWhereInput[]
    NOT?: CustoPlataformaWhereInput | CustoPlataformaWhereInput[]
    plataformaId?: StringFilter<"CustoPlataforma"> | string
    valor?: FloatFilter<"CustoPlataforma"> | number
    moeda?: StringFilter<"CustoPlataforma"> | string
    dataInicio?: DateTimeFilter<"CustoPlataforma"> | Date | string
    dataFim?: DateTimeNullableFilter<"CustoPlataforma"> | Date | string | null
    ativo?: BoolFilter<"CustoPlataforma"> | boolean
    observacoes?: StringNullableFilter<"CustoPlataforma"> | string | null
    createdAt?: DateTimeFilter<"CustoPlataforma"> | Date | string
    updatedAt?: DateTimeFilter<"CustoPlataforma"> | Date | string
    plataforma?: XOR<PlataformaScalarRelationFilter, PlataformaWhereInput>
  }, "id">

  export type CustoPlataformaOrderByWithAggregationInput = {
    id?: SortOrder
    plataformaId?: SortOrder
    valor?: SortOrder
    moeda?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrderInput | SortOrder
    ativo?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustoPlataformaCountOrderByAggregateInput
    _avg?: CustoPlataformaAvgOrderByAggregateInput
    _max?: CustoPlataformaMaxOrderByAggregateInput
    _min?: CustoPlataformaMinOrderByAggregateInput
    _sum?: CustoPlataformaSumOrderByAggregateInput
  }

  export type CustoPlataformaScalarWhereWithAggregatesInput = {
    AND?: CustoPlataformaScalarWhereWithAggregatesInput | CustoPlataformaScalarWhereWithAggregatesInput[]
    OR?: CustoPlataformaScalarWhereWithAggregatesInput[]
    NOT?: CustoPlataformaScalarWhereWithAggregatesInput | CustoPlataformaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustoPlataforma"> | string
    plataformaId?: StringWithAggregatesFilter<"CustoPlataforma"> | string
    valor?: FloatWithAggregatesFilter<"CustoPlataforma"> | number
    moeda?: StringWithAggregatesFilter<"CustoPlataforma"> | string
    dataInicio?: DateTimeWithAggregatesFilter<"CustoPlataforma"> | Date | string
    dataFim?: DateTimeNullableWithAggregatesFilter<"CustoPlataforma"> | Date | string | null
    ativo?: BoolWithAggregatesFilter<"CustoPlataforma"> | boolean
    observacoes?: StringNullableWithAggregatesFilter<"CustoPlataforma"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CustoPlataforma"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustoPlataforma"> | Date | string
  }

  export type ConfiguracaoSistemaWhereInput = {
    AND?: ConfiguracaoSistemaWhereInput | ConfiguracaoSistemaWhereInput[]
    OR?: ConfiguracaoSistemaWhereInput[]
    NOT?: ConfiguracaoSistemaWhereInput | ConfiguracaoSistemaWhereInput[]
    id?: StringFilter<"ConfiguracaoSistema"> | string
    chaveMestre?: StringNullableFilter<"ConfiguracaoSistema"> | string | null
    webhookClickup?: StringNullableFilter<"ConfiguracaoSistema"> | string | null
    webhookDiscord?: StringNullableFilter<"ConfiguracaoSistema"> | string | null
    emailAlertas?: StringNullableFilter<"ConfiguracaoSistema"> | string | null
    apiKeyEmail?: StringNullableFilter<"ConfiguracaoSistema"> | string | null
    diasAvisoExpiracao?: IntFilter<"ConfiguracaoSistema"> | number
    createdAt?: DateTimeFilter<"ConfiguracaoSistema"> | Date | string
    updatedAt?: DateTimeFilter<"ConfiguracaoSistema"> | Date | string
  }

  export type ConfiguracaoSistemaOrderByWithRelationInput = {
    id?: SortOrder
    chaveMestre?: SortOrderInput | SortOrder
    webhookClickup?: SortOrderInput | SortOrder
    webhookDiscord?: SortOrderInput | SortOrder
    emailAlertas?: SortOrderInput | SortOrder
    apiKeyEmail?: SortOrderInput | SortOrder
    diasAvisoExpiracao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracaoSistemaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConfiguracaoSistemaWhereInput | ConfiguracaoSistemaWhereInput[]
    OR?: ConfiguracaoSistemaWhereInput[]
    NOT?: ConfiguracaoSistemaWhereInput | ConfiguracaoSistemaWhereInput[]
    chaveMestre?: StringNullableFilter<"ConfiguracaoSistema"> | string | null
    webhookClickup?: StringNullableFilter<"ConfiguracaoSistema"> | string | null
    webhookDiscord?: StringNullableFilter<"ConfiguracaoSistema"> | string | null
    emailAlertas?: StringNullableFilter<"ConfiguracaoSistema"> | string | null
    apiKeyEmail?: StringNullableFilter<"ConfiguracaoSistema"> | string | null
    diasAvisoExpiracao?: IntFilter<"ConfiguracaoSistema"> | number
    createdAt?: DateTimeFilter<"ConfiguracaoSistema"> | Date | string
    updatedAt?: DateTimeFilter<"ConfiguracaoSistema"> | Date | string
  }, "id">

  export type ConfiguracaoSistemaOrderByWithAggregationInput = {
    id?: SortOrder
    chaveMestre?: SortOrderInput | SortOrder
    webhookClickup?: SortOrderInput | SortOrder
    webhookDiscord?: SortOrderInput | SortOrder
    emailAlertas?: SortOrderInput | SortOrder
    apiKeyEmail?: SortOrderInput | SortOrder
    diasAvisoExpiracao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConfiguracaoSistemaCountOrderByAggregateInput
    _avg?: ConfiguracaoSistemaAvgOrderByAggregateInput
    _max?: ConfiguracaoSistemaMaxOrderByAggregateInput
    _min?: ConfiguracaoSistemaMinOrderByAggregateInput
    _sum?: ConfiguracaoSistemaSumOrderByAggregateInput
  }

  export type ConfiguracaoSistemaScalarWhereWithAggregatesInput = {
    AND?: ConfiguracaoSistemaScalarWhereWithAggregatesInput | ConfiguracaoSistemaScalarWhereWithAggregatesInput[]
    OR?: ConfiguracaoSistemaScalarWhereWithAggregatesInput[]
    NOT?: ConfiguracaoSistemaScalarWhereWithAggregatesInput | ConfiguracaoSistemaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConfiguracaoSistema"> | string
    chaveMestre?: StringNullableWithAggregatesFilter<"ConfiguracaoSistema"> | string | null
    webhookClickup?: StringNullableWithAggregatesFilter<"ConfiguracaoSistema"> | string | null
    webhookDiscord?: StringNullableWithAggregatesFilter<"ConfiguracaoSistema"> | string | null
    emailAlertas?: StringNullableWithAggregatesFilter<"ConfiguracaoSistema"> | string | null
    apiKeyEmail?: StringNullableWithAggregatesFilter<"ConfiguracaoSistema"> | string | null
    diasAvisoExpiracao?: IntWithAggregatesFilter<"ConfiguracaoSistema"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ConfiguracaoSistema"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ConfiguracaoSistema"> | Date | string
  }

  export type LogAcessoWhereInput = {
    AND?: LogAcessoWhereInput | LogAcessoWhereInput[]
    OR?: LogAcessoWhereInput[]
    NOT?: LogAcessoWhereInput | LogAcessoWhereInput[]
    id?: StringFilter<"LogAcesso"> | string
    usuario?: StringFilter<"LogAcesso"> | string
    acao?: StringFilter<"LogAcesso"> | string
    entidade?: StringFilter<"LogAcesso"> | string
    entidadeId?: StringNullableFilter<"LogAcesso"> | string | null
    ip?: StringNullableFilter<"LogAcesso"> | string | null
    userAgent?: StringNullableFilter<"LogAcesso"> | string | null
    timestamp?: DateTimeFilter<"LogAcesso"> | Date | string
  }

  export type LogAcessoOrderByWithRelationInput = {
    id?: SortOrder
    usuario?: SortOrder
    acao?: SortOrder
    entidade?: SortOrder
    entidadeId?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    timestamp?: SortOrder
  }

  export type LogAcessoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogAcessoWhereInput | LogAcessoWhereInput[]
    OR?: LogAcessoWhereInput[]
    NOT?: LogAcessoWhereInput | LogAcessoWhereInput[]
    usuario?: StringFilter<"LogAcesso"> | string
    acao?: StringFilter<"LogAcesso"> | string
    entidade?: StringFilter<"LogAcesso"> | string
    entidadeId?: StringNullableFilter<"LogAcesso"> | string | null
    ip?: StringNullableFilter<"LogAcesso"> | string | null
    userAgent?: StringNullableFilter<"LogAcesso"> | string | null
    timestamp?: DateTimeFilter<"LogAcesso"> | Date | string
  }, "id">

  export type LogAcessoOrderByWithAggregationInput = {
    id?: SortOrder
    usuario?: SortOrder
    acao?: SortOrder
    entidade?: SortOrder
    entidadeId?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: LogAcessoCountOrderByAggregateInput
    _max?: LogAcessoMaxOrderByAggregateInput
    _min?: LogAcessoMinOrderByAggregateInput
  }

  export type LogAcessoScalarWhereWithAggregatesInput = {
    AND?: LogAcessoScalarWhereWithAggregatesInput | LogAcessoScalarWhereWithAggregatesInput[]
    OR?: LogAcessoScalarWhereWithAggregatesInput[]
    NOT?: LogAcessoScalarWhereWithAggregatesInput | LogAcessoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LogAcesso"> | string
    usuario?: StringWithAggregatesFilter<"LogAcesso"> | string
    acao?: StringWithAggregatesFilter<"LogAcesso"> | string
    entidade?: StringWithAggregatesFilter<"LogAcesso"> | string
    entidadeId?: StringNullableWithAggregatesFilter<"LogAcesso"> | string | null
    ip?: StringNullableWithAggregatesFilter<"LogAcesso"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"LogAcesso"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"LogAcesso"> | Date | string
  }

  export type ClienteCreateInput = {
    id?: string
    nome: string
    email?: string | null
    telefone?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    plataformas?: PlataformaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: string
    nome: string
    email?: string | null
    telefone?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    plataformas?: PlataformaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plataformas?: PlataformaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plataformas?: PlataformaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: string
    nome: string
    email?: string | null
    telefone?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColaboradorCreateInput = {
    id?: string
    nome: string
    email: string
    cargo: string
    status?: $Enums.StatusColaborador
    dataEntrada?: Date | string
    dataSaida?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acessos?: AcessoPlataformaCreateNestedManyWithoutColaboradorInput
    historicoSenhas?: HistoricoSenhaCreateNestedManyWithoutColaboradorInput
    visualizacoesSenha?: VisualizacaoSenhaCreateNestedManyWithoutColaboradorInput
    ticketsSenha?: TicketSenhaCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    cargo: string
    status?: $Enums.StatusColaborador
    dataEntrada?: Date | string
    dataSaida?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acessos?: AcessoPlataformaUncheckedCreateNestedManyWithoutColaboradorInput
    historicoSenhas?: HistoricoSenhaUncheckedCreateNestedManyWithoutColaboradorInput
    visualizacoesSenha?: VisualizacaoSenhaUncheckedCreateNestedManyWithoutColaboradorInput
    ticketsSenha?: TicketSenhaUncheckedCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusColaboradorFieldUpdateOperationsInput | $Enums.StatusColaborador
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acessos?: AcessoPlataformaUpdateManyWithoutColaboradorNestedInput
    historicoSenhas?: HistoricoSenhaUpdateManyWithoutColaboradorNestedInput
    visualizacoesSenha?: VisualizacaoSenhaUpdateManyWithoutColaboradorNestedInput
    ticketsSenha?: TicketSenhaUpdateManyWithoutColaboradorNestedInput
  }

  export type ColaboradorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusColaboradorFieldUpdateOperationsInput | $Enums.StatusColaborador
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acessos?: AcessoPlataformaUncheckedUpdateManyWithoutColaboradorNestedInput
    historicoSenhas?: HistoricoSenhaUncheckedUpdateManyWithoutColaboradorNestedInput
    visualizacoesSenha?: VisualizacaoSenhaUncheckedUpdateManyWithoutColaboradorNestedInput
    ticketsSenha?: TicketSenhaUncheckedUpdateManyWithoutColaboradorNestedInput
  }

  export type ColaboradorCreateManyInput = {
    id?: string
    nome: string
    email: string
    cargo: string
    status?: $Enums.StatusColaborador
    dataEntrada?: Date | string
    dataSaida?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColaboradorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusColaboradorFieldUpdateOperationsInput | $Enums.StatusColaborador
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColaboradorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusColaboradorFieldUpdateOperationsInput | $Enums.StatusColaborador
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlataformaCreateInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoPlataforma
    urlLogin?: string | null
    emailUtilizado?: string | null
    senhaEncriptada: string
    custoMensal?: number
    ultimaAtualizacaoSenha?: Date | string
    frequenciaAtualizacao?: number
    observacoes?: string | null
    vinculo?: $Enums.VinculoPlataforma
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente?: ClienteCreateNestedOneWithoutPlataformasInput
    acessos?: AcessoPlataformaCreateNestedManyWithoutPlataformaInput
    historicoSenhas?: HistoricoSenhaCreateNestedManyWithoutPlataformaInput
    custos?: CustoPlataformaCreateNestedManyWithoutPlataformaInput
    visualizacoesSenha?: VisualizacaoSenhaCreateNestedManyWithoutPlataformaInput
    ticketsSenha?: TicketSenhaCreateNestedManyWithoutPlataformaInput
  }

  export type PlataformaUncheckedCreateInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoPlataforma
    urlLogin?: string | null
    emailUtilizado?: string | null
    senhaEncriptada: string
    custoMensal?: number
    ultimaAtualizacaoSenha?: Date | string
    frequenciaAtualizacao?: number
    observacoes?: string | null
    vinculo?: $Enums.VinculoPlataforma
    clienteId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acessos?: AcessoPlataformaUncheckedCreateNestedManyWithoutPlataformaInput
    historicoSenhas?: HistoricoSenhaUncheckedCreateNestedManyWithoutPlataformaInput
    custos?: CustoPlataformaUncheckedCreateNestedManyWithoutPlataformaInput
    visualizacoesSenha?: VisualizacaoSenhaUncheckedCreateNestedManyWithoutPlataformaInput
    ticketsSenha?: TicketSenhaUncheckedCreateNestedManyWithoutPlataformaInput
  }

  export type PlataformaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPlataformaFieldUpdateOperationsInput | $Enums.TipoPlataforma
    urlLogin?: NullableStringFieldUpdateOperationsInput | string | null
    emailUtilizado?: NullableStringFieldUpdateOperationsInput | string | null
    senhaEncriptada?: StringFieldUpdateOperationsInput | string
    custoMensal?: FloatFieldUpdateOperationsInput | number
    ultimaAtualizacaoSenha?: DateTimeFieldUpdateOperationsInput | Date | string
    frequenciaAtualizacao?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    vinculo?: EnumVinculoPlataformaFieldUpdateOperationsInput | $Enums.VinculoPlataforma
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneWithoutPlataformasNestedInput
    acessos?: AcessoPlataformaUpdateManyWithoutPlataformaNestedInput
    historicoSenhas?: HistoricoSenhaUpdateManyWithoutPlataformaNestedInput
    custos?: CustoPlataformaUpdateManyWithoutPlataformaNestedInput
    visualizacoesSenha?: VisualizacaoSenhaUpdateManyWithoutPlataformaNestedInput
    ticketsSenha?: TicketSenhaUpdateManyWithoutPlataformaNestedInput
  }

  export type PlataformaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPlataformaFieldUpdateOperationsInput | $Enums.TipoPlataforma
    urlLogin?: NullableStringFieldUpdateOperationsInput | string | null
    emailUtilizado?: NullableStringFieldUpdateOperationsInput | string | null
    senhaEncriptada?: StringFieldUpdateOperationsInput | string
    custoMensal?: FloatFieldUpdateOperationsInput | number
    ultimaAtualizacaoSenha?: DateTimeFieldUpdateOperationsInput | Date | string
    frequenciaAtualizacao?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    vinculo?: EnumVinculoPlataformaFieldUpdateOperationsInput | $Enums.VinculoPlataforma
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acessos?: AcessoPlataformaUncheckedUpdateManyWithoutPlataformaNestedInput
    historicoSenhas?: HistoricoSenhaUncheckedUpdateManyWithoutPlataformaNestedInput
    custos?: CustoPlataformaUncheckedUpdateManyWithoutPlataformaNestedInput
    visualizacoesSenha?: VisualizacaoSenhaUncheckedUpdateManyWithoutPlataformaNestedInput
    ticketsSenha?: TicketSenhaUncheckedUpdateManyWithoutPlataformaNestedInput
  }

  export type PlataformaCreateManyInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoPlataforma
    urlLogin?: string | null
    emailUtilizado?: string | null
    senhaEncriptada: string
    custoMensal?: number
    ultimaAtualizacaoSenha?: Date | string
    frequenciaAtualizacao?: number
    observacoes?: string | null
    vinculo?: $Enums.VinculoPlataforma
    clienteId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlataformaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPlataformaFieldUpdateOperationsInput | $Enums.TipoPlataforma
    urlLogin?: NullableStringFieldUpdateOperationsInput | string | null
    emailUtilizado?: NullableStringFieldUpdateOperationsInput | string | null
    senhaEncriptada?: StringFieldUpdateOperationsInput | string
    custoMensal?: FloatFieldUpdateOperationsInput | number
    ultimaAtualizacaoSenha?: DateTimeFieldUpdateOperationsInput | Date | string
    frequenciaAtualizacao?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    vinculo?: EnumVinculoPlataformaFieldUpdateOperationsInput | $Enums.VinculoPlataforma
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlataformaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPlataformaFieldUpdateOperationsInput | $Enums.TipoPlataforma
    urlLogin?: NullableStringFieldUpdateOperationsInput | string | null
    emailUtilizado?: NullableStringFieldUpdateOperationsInput | string | null
    senhaEncriptada?: StringFieldUpdateOperationsInput | string
    custoMensal?: FloatFieldUpdateOperationsInput | number
    ultimaAtualizacaoSenha?: DateTimeFieldUpdateOperationsInput | Date | string
    frequenciaAtualizacao?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    vinculo?: EnumVinculoPlataformaFieldUpdateOperationsInput | $Enums.VinculoPlataforma
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcessoPlataformaCreateInput = {
    id?: string
    dataInicio?: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    colaborador: ColaboradorCreateNestedOneWithoutAcessosInput
    plataforma: PlataformaCreateNestedOneWithoutAcessosInput
  }

  export type AcessoPlataformaUncheckedCreateInput = {
    id?: string
    colaboradorId: string
    plataformaId: string
    dataInicio?: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcessoPlataformaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colaborador?: ColaboradorUpdateOneRequiredWithoutAcessosNestedInput
    plataforma?: PlataformaUpdateOneRequiredWithoutAcessosNestedInput
  }

  export type AcessoPlataformaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    colaboradorId?: StringFieldUpdateOperationsInput | string
    plataformaId?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcessoPlataformaCreateManyInput = {
    id?: string
    colaboradorId: string
    plataformaId: string
    dataInicio?: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcessoPlataformaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcessoPlataformaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    colaboradorId?: StringFieldUpdateOperationsInput | string
    plataformaId?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoSenhaCreateInput = {
    id?: string
    senhaAnterior?: string | null
    novaSenha: string
    motivoMudanca?: string | null
    dataAlteracao?: Date | string
    notificouColaboradores?: boolean
    tipoNotificacao?: string | null
    plataforma: PlataformaCreateNestedOneWithoutHistoricoSenhasInput
    colaborador?: ColaboradorCreateNestedOneWithoutHistoricoSenhasInput
  }

  export type HistoricoSenhaUncheckedCreateInput = {
    id?: string
    plataformaId: string
    colaboradorId?: string | null
    senhaAnterior?: string | null
    novaSenha: string
    motivoMudanca?: string | null
    dataAlteracao?: Date | string
    notificouColaboradores?: boolean
    tipoNotificacao?: string | null
  }

  export type HistoricoSenhaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senhaAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    novaSenha?: StringFieldUpdateOperationsInput | string
    motivoMudanca?: NullableStringFieldUpdateOperationsInput | string | null
    dataAlteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    notificouColaboradores?: BoolFieldUpdateOperationsInput | boolean
    tipoNotificacao?: NullableStringFieldUpdateOperationsInput | string | null
    plataforma?: PlataformaUpdateOneRequiredWithoutHistoricoSenhasNestedInput
    colaborador?: ColaboradorUpdateOneWithoutHistoricoSenhasNestedInput
  }

  export type HistoricoSenhaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plataformaId?: StringFieldUpdateOperationsInput | string
    colaboradorId?: NullableStringFieldUpdateOperationsInput | string | null
    senhaAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    novaSenha?: StringFieldUpdateOperationsInput | string
    motivoMudanca?: NullableStringFieldUpdateOperationsInput | string | null
    dataAlteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    notificouColaboradores?: BoolFieldUpdateOperationsInput | boolean
    tipoNotificacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricoSenhaCreateManyInput = {
    id?: string
    plataformaId: string
    colaboradorId?: string | null
    senhaAnterior?: string | null
    novaSenha: string
    motivoMudanca?: string | null
    dataAlteracao?: Date | string
    notificouColaboradores?: boolean
    tipoNotificacao?: string | null
  }

  export type HistoricoSenhaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    senhaAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    novaSenha?: StringFieldUpdateOperationsInput | string
    motivoMudanca?: NullableStringFieldUpdateOperationsInput | string | null
    dataAlteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    notificouColaboradores?: BoolFieldUpdateOperationsInput | boolean
    tipoNotificacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricoSenhaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plataformaId?: StringFieldUpdateOperationsInput | string
    colaboradorId?: NullableStringFieldUpdateOperationsInput | string | null
    senhaAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    novaSenha?: StringFieldUpdateOperationsInput | string
    motivoMudanca?: NullableStringFieldUpdateOperationsInput | string | null
    dataAlteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    notificouColaboradores?: BoolFieldUpdateOperationsInput | boolean
    tipoNotificacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisualizacaoSenhaCreateInput = {
    id?: string
    dataVisualizacao?: Date | string
    ip?: string | null
    userAgent?: string | null
    plataforma: PlataformaCreateNestedOneWithoutVisualizacoesSenhaInput
    colaborador: ColaboradorCreateNestedOneWithoutVisualizacoesSenhaInput
  }

  export type VisualizacaoSenhaUncheckedCreateInput = {
    id?: string
    plataformaId: string
    colaboradorId: string
    dataVisualizacao?: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type VisualizacaoSenhaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataVisualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    plataforma?: PlataformaUpdateOneRequiredWithoutVisualizacoesSenhaNestedInput
    colaborador?: ColaboradorUpdateOneRequiredWithoutVisualizacoesSenhaNestedInput
  }

  export type VisualizacaoSenhaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plataformaId?: StringFieldUpdateOperationsInput | string
    colaboradorId?: StringFieldUpdateOperationsInput | string
    dataVisualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisualizacaoSenhaCreateManyInput = {
    id?: string
    plataformaId: string
    colaboradorId: string
    dataVisualizacao?: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type VisualizacaoSenhaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataVisualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisualizacaoSenhaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plataformaId?: StringFieldUpdateOperationsInput | string
    colaboradorId?: StringFieldUpdateOperationsInput | string
    dataVisualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketSenhaCreateInput = {
    id?: string
    descricaoProblema: string
    status?: $Enums.StatusTicket
    dataAbertura?: Date | string
    dataResolucao?: Date | string | null
    observacoesResolucao?: string | null
    plataforma: PlataformaCreateNestedOneWithoutTicketsSenhaInput
    colaborador: ColaboradorCreateNestedOneWithoutTicketsSenhaInput
  }

  export type TicketSenhaUncheckedCreateInput = {
    id?: string
    plataformaId: string
    colaboradorId: string
    descricaoProblema: string
    status?: $Enums.StatusTicket
    dataAbertura?: Date | string
    dataResolucao?: Date | string | null
    observacoesResolucao?: string | null
  }

  export type TicketSenhaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTicketFieldUpdateOperationsInput | $Enums.StatusTicket
    dataAbertura?: DateTimeFieldUpdateOperationsInput | Date | string
    dataResolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoesResolucao?: NullableStringFieldUpdateOperationsInput | string | null
    plataforma?: PlataformaUpdateOneRequiredWithoutTicketsSenhaNestedInput
    colaborador?: ColaboradorUpdateOneRequiredWithoutTicketsSenhaNestedInput
  }

  export type TicketSenhaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plataformaId?: StringFieldUpdateOperationsInput | string
    colaboradorId?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTicketFieldUpdateOperationsInput | $Enums.StatusTicket
    dataAbertura?: DateTimeFieldUpdateOperationsInput | Date | string
    dataResolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoesResolucao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketSenhaCreateManyInput = {
    id?: string
    plataformaId: string
    colaboradorId: string
    descricaoProblema: string
    status?: $Enums.StatusTicket
    dataAbertura?: Date | string
    dataResolucao?: Date | string | null
    observacoesResolucao?: string | null
  }

  export type TicketSenhaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTicketFieldUpdateOperationsInput | $Enums.StatusTicket
    dataAbertura?: DateTimeFieldUpdateOperationsInput | Date | string
    dataResolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoesResolucao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketSenhaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plataformaId?: StringFieldUpdateOperationsInput | string
    colaboradorId?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTicketFieldUpdateOperationsInput | $Enums.StatusTicket
    dataAbertura?: DateTimeFieldUpdateOperationsInput | Date | string
    dataResolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoesResolucao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustoPlataformaCreateInput = {
    id?: string
    valor: number
    moeda?: string
    dataInicio: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plataforma: PlataformaCreateNestedOneWithoutCustosInput
  }

  export type CustoPlataformaUncheckedCreateInput = {
    id?: string
    plataformaId: string
    valor: number
    moeda?: string
    dataInicio: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustoPlataformaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    moeda?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plataforma?: PlataformaUpdateOneRequiredWithoutCustosNestedInput
  }

  export type CustoPlataformaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plataformaId?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    moeda?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustoPlataformaCreateManyInput = {
    id?: string
    plataformaId: string
    valor: number
    moeda?: string
    dataInicio: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustoPlataformaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    moeda?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustoPlataformaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plataformaId?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    moeda?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracaoSistemaCreateInput = {
    id?: string
    chaveMestre?: string | null
    webhookClickup?: string | null
    webhookDiscord?: string | null
    emailAlertas?: string | null
    apiKeyEmail?: string | null
    diasAvisoExpiracao?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfiguracaoSistemaUncheckedCreateInput = {
    id?: string
    chaveMestre?: string | null
    webhookClickup?: string | null
    webhookDiscord?: string | null
    emailAlertas?: string | null
    apiKeyEmail?: string | null
    diasAvisoExpiracao?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfiguracaoSistemaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chaveMestre?: NullableStringFieldUpdateOperationsInput | string | null
    webhookClickup?: NullableStringFieldUpdateOperationsInput | string | null
    webhookDiscord?: NullableStringFieldUpdateOperationsInput | string | null
    emailAlertas?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    diasAvisoExpiracao?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracaoSistemaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chaveMestre?: NullableStringFieldUpdateOperationsInput | string | null
    webhookClickup?: NullableStringFieldUpdateOperationsInput | string | null
    webhookDiscord?: NullableStringFieldUpdateOperationsInput | string | null
    emailAlertas?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    diasAvisoExpiracao?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracaoSistemaCreateManyInput = {
    id?: string
    chaveMestre?: string | null
    webhookClickup?: string | null
    webhookDiscord?: string | null
    emailAlertas?: string | null
    apiKeyEmail?: string | null
    diasAvisoExpiracao?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfiguracaoSistemaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chaveMestre?: NullableStringFieldUpdateOperationsInput | string | null
    webhookClickup?: NullableStringFieldUpdateOperationsInput | string | null
    webhookDiscord?: NullableStringFieldUpdateOperationsInput | string | null
    emailAlertas?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    diasAvisoExpiracao?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracaoSistemaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chaveMestre?: NullableStringFieldUpdateOperationsInput | string | null
    webhookClickup?: NullableStringFieldUpdateOperationsInput | string | null
    webhookDiscord?: NullableStringFieldUpdateOperationsInput | string | null
    emailAlertas?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    diasAvisoExpiracao?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAcessoCreateInput = {
    id?: string
    usuario: string
    acao: string
    entidade: string
    entidadeId?: string | null
    ip?: string | null
    userAgent?: string | null
    timestamp?: Date | string
  }

  export type LogAcessoUncheckedCreateInput = {
    id?: string
    usuario: string
    acao: string
    entidade: string
    entidadeId?: string | null
    ip?: string | null
    userAgent?: string | null
    timestamp?: Date | string
  }

  export type LogAcessoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    entidade?: StringFieldUpdateOperationsInput | string
    entidadeId?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAcessoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    entidade?: StringFieldUpdateOperationsInput | string
    entidadeId?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAcessoCreateManyInput = {
    id?: string
    usuario: string
    acao: string
    entidade: string
    entidadeId?: string | null
    ip?: string | null
    userAgent?: string | null
    timestamp?: Date | string
  }

  export type LogAcessoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    entidade?: StringFieldUpdateOperationsInput | string
    entidadeId?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAcessoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    entidade?: StringFieldUpdateOperationsInput | string
    entidadeId?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PlataformaListRelationFilter = {
    every?: PlataformaWhereInput
    some?: PlataformaWhereInput
    none?: PlataformaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PlataformaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusColaboradorFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusColaborador | EnumStatusColaboradorFieldRefInput<$PrismaModel>
    in?: $Enums.StatusColaborador[] | ListEnumStatusColaboradorFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusColaborador[] | ListEnumStatusColaboradorFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusColaboradorFilter<$PrismaModel> | $Enums.StatusColaborador
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AcessoPlataformaListRelationFilter = {
    every?: AcessoPlataformaWhereInput
    some?: AcessoPlataformaWhereInput
    none?: AcessoPlataformaWhereInput
  }

  export type HistoricoSenhaListRelationFilter = {
    every?: HistoricoSenhaWhereInput
    some?: HistoricoSenhaWhereInput
    none?: HistoricoSenhaWhereInput
  }

  export type VisualizacaoSenhaListRelationFilter = {
    every?: VisualizacaoSenhaWhereInput
    some?: VisualizacaoSenhaWhereInput
    none?: VisualizacaoSenhaWhereInput
  }

  export type TicketSenhaListRelationFilter = {
    every?: TicketSenhaWhereInput
    some?: TicketSenhaWhereInput
    none?: TicketSenhaWhereInput
  }

  export type AcessoPlataformaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoricoSenhaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisualizacaoSenhaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketSenhaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ColaboradorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cargo?: SortOrder
    status?: SortOrder
    dataEntrada?: SortOrder
    dataSaida?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColaboradorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cargo?: SortOrder
    status?: SortOrder
    dataEntrada?: SortOrder
    dataSaida?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColaboradorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cargo?: SortOrder
    status?: SortOrder
    dataEntrada?: SortOrder
    dataSaida?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStatusColaboradorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusColaborador | EnumStatusColaboradorFieldRefInput<$PrismaModel>
    in?: $Enums.StatusColaborador[] | ListEnumStatusColaboradorFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusColaborador[] | ListEnumStatusColaboradorFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusColaboradorWithAggregatesFilter<$PrismaModel> | $Enums.StatusColaborador
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusColaboradorFilter<$PrismaModel>
    _max?: NestedEnumStatusColaboradorFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumTipoPlataformaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPlataforma | EnumTipoPlataformaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPlataforma[] | ListEnumTipoPlataformaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPlataforma[] | ListEnumTipoPlataformaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPlataformaFilter<$PrismaModel> | $Enums.TipoPlataforma
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumVinculoPlataformaFilter<$PrismaModel = never> = {
    equals?: $Enums.VinculoPlataforma | EnumVinculoPlataformaFieldRefInput<$PrismaModel>
    in?: $Enums.VinculoPlataforma[] | ListEnumVinculoPlataformaFieldRefInput<$PrismaModel>
    notIn?: $Enums.VinculoPlataforma[] | ListEnumVinculoPlataformaFieldRefInput<$PrismaModel>
    not?: NestedEnumVinculoPlataformaFilter<$PrismaModel> | $Enums.VinculoPlataforma
  }

  export type ClienteNullableScalarRelationFilter = {
    is?: ClienteWhereInput | null
    isNot?: ClienteWhereInput | null
  }

  export type CustoPlataformaListRelationFilter = {
    every?: CustoPlataformaWhereInput
    some?: CustoPlataformaWhereInput
    none?: CustoPlataformaWhereInput
  }

  export type CustoPlataformaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlataformaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    urlLogin?: SortOrder
    emailUtilizado?: SortOrder
    senhaEncriptada?: SortOrder
    custoMensal?: SortOrder
    ultimaAtualizacaoSenha?: SortOrder
    frequenciaAtualizacao?: SortOrder
    observacoes?: SortOrder
    vinculo?: SortOrder
    clienteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlataformaAvgOrderByAggregateInput = {
    custoMensal?: SortOrder
    frequenciaAtualizacao?: SortOrder
  }

  export type PlataformaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    urlLogin?: SortOrder
    emailUtilizado?: SortOrder
    senhaEncriptada?: SortOrder
    custoMensal?: SortOrder
    ultimaAtualizacaoSenha?: SortOrder
    frequenciaAtualizacao?: SortOrder
    observacoes?: SortOrder
    vinculo?: SortOrder
    clienteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlataformaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    urlLogin?: SortOrder
    emailUtilizado?: SortOrder
    senhaEncriptada?: SortOrder
    custoMensal?: SortOrder
    ultimaAtualizacaoSenha?: SortOrder
    frequenciaAtualizacao?: SortOrder
    observacoes?: SortOrder
    vinculo?: SortOrder
    clienteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlataformaSumOrderByAggregateInput = {
    custoMensal?: SortOrder
    frequenciaAtualizacao?: SortOrder
  }

  export type EnumTipoPlataformaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPlataforma | EnumTipoPlataformaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPlataforma[] | ListEnumTipoPlataformaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPlataforma[] | ListEnumTipoPlataformaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPlataformaWithAggregatesFilter<$PrismaModel> | $Enums.TipoPlataforma
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoPlataformaFilter<$PrismaModel>
    _max?: NestedEnumTipoPlataformaFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumVinculoPlataformaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VinculoPlataforma | EnumVinculoPlataformaFieldRefInput<$PrismaModel>
    in?: $Enums.VinculoPlataforma[] | ListEnumVinculoPlataformaFieldRefInput<$PrismaModel>
    notIn?: $Enums.VinculoPlataforma[] | ListEnumVinculoPlataformaFieldRefInput<$PrismaModel>
    not?: NestedEnumVinculoPlataformaWithAggregatesFilter<$PrismaModel> | $Enums.VinculoPlataforma
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVinculoPlataformaFilter<$PrismaModel>
    _max?: NestedEnumVinculoPlataformaFilter<$PrismaModel>
  }

  export type ColaboradorScalarRelationFilter = {
    is?: ColaboradorWhereInput
    isNot?: ColaboradorWhereInput
  }

  export type PlataformaScalarRelationFilter = {
    is?: PlataformaWhereInput
    isNot?: PlataformaWhereInput
  }

  export type AcessoPlataformaColaboradorIdPlataformaIdCompoundUniqueInput = {
    colaboradorId: string
    plataformaId: string
  }

  export type AcessoPlataformaCountOrderByAggregateInput = {
    id?: SortOrder
    colaboradorId?: SortOrder
    plataformaId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcessoPlataformaMaxOrderByAggregateInput = {
    id?: SortOrder
    colaboradorId?: SortOrder
    plataformaId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcessoPlataformaMinOrderByAggregateInput = {
    id?: SortOrder
    colaboradorId?: SortOrder
    plataformaId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColaboradorNullableScalarRelationFilter = {
    is?: ColaboradorWhereInput | null
    isNot?: ColaboradorWhereInput | null
  }

  export type HistoricoSenhaCountOrderByAggregateInput = {
    id?: SortOrder
    plataformaId?: SortOrder
    colaboradorId?: SortOrder
    senhaAnterior?: SortOrder
    novaSenha?: SortOrder
    motivoMudanca?: SortOrder
    dataAlteracao?: SortOrder
    notificouColaboradores?: SortOrder
    tipoNotificacao?: SortOrder
  }

  export type HistoricoSenhaMaxOrderByAggregateInput = {
    id?: SortOrder
    plataformaId?: SortOrder
    colaboradorId?: SortOrder
    senhaAnterior?: SortOrder
    novaSenha?: SortOrder
    motivoMudanca?: SortOrder
    dataAlteracao?: SortOrder
    notificouColaboradores?: SortOrder
    tipoNotificacao?: SortOrder
  }

  export type HistoricoSenhaMinOrderByAggregateInput = {
    id?: SortOrder
    plataformaId?: SortOrder
    colaboradorId?: SortOrder
    senhaAnterior?: SortOrder
    novaSenha?: SortOrder
    motivoMudanca?: SortOrder
    dataAlteracao?: SortOrder
    notificouColaboradores?: SortOrder
    tipoNotificacao?: SortOrder
  }

  export type VisualizacaoSenhaCountOrderByAggregateInput = {
    id?: SortOrder
    plataformaId?: SortOrder
    colaboradorId?: SortOrder
    dataVisualizacao?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
  }

  export type VisualizacaoSenhaMaxOrderByAggregateInput = {
    id?: SortOrder
    plataformaId?: SortOrder
    colaboradorId?: SortOrder
    dataVisualizacao?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
  }

  export type VisualizacaoSenhaMinOrderByAggregateInput = {
    id?: SortOrder
    plataformaId?: SortOrder
    colaboradorId?: SortOrder
    dataVisualizacao?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
  }

  export type EnumStatusTicketFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTicket | EnumStatusTicketFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTicket[] | ListEnumStatusTicketFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTicket[] | ListEnumStatusTicketFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTicketFilter<$PrismaModel> | $Enums.StatusTicket
  }

  export type TicketSenhaCountOrderByAggregateInput = {
    id?: SortOrder
    plataformaId?: SortOrder
    colaboradorId?: SortOrder
    descricaoProblema?: SortOrder
    status?: SortOrder
    dataAbertura?: SortOrder
    dataResolucao?: SortOrder
    observacoesResolucao?: SortOrder
  }

  export type TicketSenhaMaxOrderByAggregateInput = {
    id?: SortOrder
    plataformaId?: SortOrder
    colaboradorId?: SortOrder
    descricaoProblema?: SortOrder
    status?: SortOrder
    dataAbertura?: SortOrder
    dataResolucao?: SortOrder
    observacoesResolucao?: SortOrder
  }

  export type TicketSenhaMinOrderByAggregateInput = {
    id?: SortOrder
    plataformaId?: SortOrder
    colaboradorId?: SortOrder
    descricaoProblema?: SortOrder
    status?: SortOrder
    dataAbertura?: SortOrder
    dataResolucao?: SortOrder
    observacoesResolucao?: SortOrder
  }

  export type EnumStatusTicketWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTicket | EnumStatusTicketFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTicket[] | ListEnumStatusTicketFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTicket[] | ListEnumStatusTicketFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTicketWithAggregatesFilter<$PrismaModel> | $Enums.StatusTicket
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusTicketFilter<$PrismaModel>
    _max?: NestedEnumStatusTicketFilter<$PrismaModel>
  }

  export type CustoPlataformaCountOrderByAggregateInput = {
    id?: SortOrder
    plataformaId?: SortOrder
    valor?: SortOrder
    moeda?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    ativo?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustoPlataformaAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type CustoPlataformaMaxOrderByAggregateInput = {
    id?: SortOrder
    plataformaId?: SortOrder
    valor?: SortOrder
    moeda?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    ativo?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustoPlataformaMinOrderByAggregateInput = {
    id?: SortOrder
    plataformaId?: SortOrder
    valor?: SortOrder
    moeda?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    ativo?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustoPlataformaSumOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type ConfiguracaoSistemaCountOrderByAggregateInput = {
    id?: SortOrder
    chaveMestre?: SortOrder
    webhookClickup?: SortOrder
    webhookDiscord?: SortOrder
    emailAlertas?: SortOrder
    apiKeyEmail?: SortOrder
    diasAvisoExpiracao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracaoSistemaAvgOrderByAggregateInput = {
    diasAvisoExpiracao?: SortOrder
  }

  export type ConfiguracaoSistemaMaxOrderByAggregateInput = {
    id?: SortOrder
    chaveMestre?: SortOrder
    webhookClickup?: SortOrder
    webhookDiscord?: SortOrder
    emailAlertas?: SortOrder
    apiKeyEmail?: SortOrder
    diasAvisoExpiracao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracaoSistemaMinOrderByAggregateInput = {
    id?: SortOrder
    chaveMestre?: SortOrder
    webhookClickup?: SortOrder
    webhookDiscord?: SortOrder
    emailAlertas?: SortOrder
    apiKeyEmail?: SortOrder
    diasAvisoExpiracao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracaoSistemaSumOrderByAggregateInput = {
    diasAvisoExpiracao?: SortOrder
  }

  export type LogAcessoCountOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    acao?: SortOrder
    entidade?: SortOrder
    entidadeId?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    timestamp?: SortOrder
  }

  export type LogAcessoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    acao?: SortOrder
    entidade?: SortOrder
    entidadeId?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    timestamp?: SortOrder
  }

  export type LogAcessoMinOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    acao?: SortOrder
    entidade?: SortOrder
    entidadeId?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    timestamp?: SortOrder
  }

  export type PlataformaCreateNestedManyWithoutClienteInput = {
    create?: XOR<PlataformaCreateWithoutClienteInput, PlataformaUncheckedCreateWithoutClienteInput> | PlataformaCreateWithoutClienteInput[] | PlataformaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PlataformaCreateOrConnectWithoutClienteInput | PlataformaCreateOrConnectWithoutClienteInput[]
    createMany?: PlataformaCreateManyClienteInputEnvelope
    connect?: PlataformaWhereUniqueInput | PlataformaWhereUniqueInput[]
  }

  export type PlataformaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<PlataformaCreateWithoutClienteInput, PlataformaUncheckedCreateWithoutClienteInput> | PlataformaCreateWithoutClienteInput[] | PlataformaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PlataformaCreateOrConnectWithoutClienteInput | PlataformaCreateOrConnectWithoutClienteInput[]
    createMany?: PlataformaCreateManyClienteInputEnvelope
    connect?: PlataformaWhereUniqueInput | PlataformaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlataformaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PlataformaCreateWithoutClienteInput, PlataformaUncheckedCreateWithoutClienteInput> | PlataformaCreateWithoutClienteInput[] | PlataformaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PlataformaCreateOrConnectWithoutClienteInput | PlataformaCreateOrConnectWithoutClienteInput[]
    upsert?: PlataformaUpsertWithWhereUniqueWithoutClienteInput | PlataformaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PlataformaCreateManyClienteInputEnvelope
    set?: PlataformaWhereUniqueInput | PlataformaWhereUniqueInput[]
    disconnect?: PlataformaWhereUniqueInput | PlataformaWhereUniqueInput[]
    delete?: PlataformaWhereUniqueInput | PlataformaWhereUniqueInput[]
    connect?: PlataformaWhereUniqueInput | PlataformaWhereUniqueInput[]
    update?: PlataformaUpdateWithWhereUniqueWithoutClienteInput | PlataformaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PlataformaUpdateManyWithWhereWithoutClienteInput | PlataformaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PlataformaScalarWhereInput | PlataformaScalarWhereInput[]
  }

  export type PlataformaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PlataformaCreateWithoutClienteInput, PlataformaUncheckedCreateWithoutClienteInput> | PlataformaCreateWithoutClienteInput[] | PlataformaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PlataformaCreateOrConnectWithoutClienteInput | PlataformaCreateOrConnectWithoutClienteInput[]
    upsert?: PlataformaUpsertWithWhereUniqueWithoutClienteInput | PlataformaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PlataformaCreateManyClienteInputEnvelope
    set?: PlataformaWhereUniqueInput | PlataformaWhereUniqueInput[]
    disconnect?: PlataformaWhereUniqueInput | PlataformaWhereUniqueInput[]
    delete?: PlataformaWhereUniqueInput | PlataformaWhereUniqueInput[]
    connect?: PlataformaWhereUniqueInput | PlataformaWhereUniqueInput[]
    update?: PlataformaUpdateWithWhereUniqueWithoutClienteInput | PlataformaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PlataformaUpdateManyWithWhereWithoutClienteInput | PlataformaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PlataformaScalarWhereInput | PlataformaScalarWhereInput[]
  }

  export type AcessoPlataformaCreateNestedManyWithoutColaboradorInput = {
    create?: XOR<AcessoPlataformaCreateWithoutColaboradorInput, AcessoPlataformaUncheckedCreateWithoutColaboradorInput> | AcessoPlataformaCreateWithoutColaboradorInput[] | AcessoPlataformaUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: AcessoPlataformaCreateOrConnectWithoutColaboradorInput | AcessoPlataformaCreateOrConnectWithoutColaboradorInput[]
    createMany?: AcessoPlataformaCreateManyColaboradorInputEnvelope
    connect?: AcessoPlataformaWhereUniqueInput | AcessoPlataformaWhereUniqueInput[]
  }

  export type HistoricoSenhaCreateNestedManyWithoutColaboradorInput = {
    create?: XOR<HistoricoSenhaCreateWithoutColaboradorInput, HistoricoSenhaUncheckedCreateWithoutColaboradorInput> | HistoricoSenhaCreateWithoutColaboradorInput[] | HistoricoSenhaUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: HistoricoSenhaCreateOrConnectWithoutColaboradorInput | HistoricoSenhaCreateOrConnectWithoutColaboradorInput[]
    createMany?: HistoricoSenhaCreateManyColaboradorInputEnvelope
    connect?: HistoricoSenhaWhereUniqueInput | HistoricoSenhaWhereUniqueInput[]
  }

  export type VisualizacaoSenhaCreateNestedManyWithoutColaboradorInput = {
    create?: XOR<VisualizacaoSenhaCreateWithoutColaboradorInput, VisualizacaoSenhaUncheckedCreateWithoutColaboradorInput> | VisualizacaoSenhaCreateWithoutColaboradorInput[] | VisualizacaoSenhaUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: VisualizacaoSenhaCreateOrConnectWithoutColaboradorInput | VisualizacaoSenhaCreateOrConnectWithoutColaboradorInput[]
    createMany?: VisualizacaoSenhaCreateManyColaboradorInputEnvelope
    connect?: VisualizacaoSenhaWhereUniqueInput | VisualizacaoSenhaWhereUniqueInput[]
  }

  export type TicketSenhaCreateNestedManyWithoutColaboradorInput = {
    create?: XOR<TicketSenhaCreateWithoutColaboradorInput, TicketSenhaUncheckedCreateWithoutColaboradorInput> | TicketSenhaCreateWithoutColaboradorInput[] | TicketSenhaUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: TicketSenhaCreateOrConnectWithoutColaboradorInput | TicketSenhaCreateOrConnectWithoutColaboradorInput[]
    createMany?: TicketSenhaCreateManyColaboradorInputEnvelope
    connect?: TicketSenhaWhereUniqueInput | TicketSenhaWhereUniqueInput[]
  }

  export type AcessoPlataformaUncheckedCreateNestedManyWithoutColaboradorInput = {
    create?: XOR<AcessoPlataformaCreateWithoutColaboradorInput, AcessoPlataformaUncheckedCreateWithoutColaboradorInput> | AcessoPlataformaCreateWithoutColaboradorInput[] | AcessoPlataformaUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: AcessoPlataformaCreateOrConnectWithoutColaboradorInput | AcessoPlataformaCreateOrConnectWithoutColaboradorInput[]
    createMany?: AcessoPlataformaCreateManyColaboradorInputEnvelope
    connect?: AcessoPlataformaWhereUniqueInput | AcessoPlataformaWhereUniqueInput[]
  }

  export type HistoricoSenhaUncheckedCreateNestedManyWithoutColaboradorInput = {
    create?: XOR<HistoricoSenhaCreateWithoutColaboradorInput, HistoricoSenhaUncheckedCreateWithoutColaboradorInput> | HistoricoSenhaCreateWithoutColaboradorInput[] | HistoricoSenhaUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: HistoricoSenhaCreateOrConnectWithoutColaboradorInput | HistoricoSenhaCreateOrConnectWithoutColaboradorInput[]
    createMany?: HistoricoSenhaCreateManyColaboradorInputEnvelope
    connect?: HistoricoSenhaWhereUniqueInput | HistoricoSenhaWhereUniqueInput[]
  }

  export type VisualizacaoSenhaUncheckedCreateNestedManyWithoutColaboradorInput = {
    create?: XOR<VisualizacaoSenhaCreateWithoutColaboradorInput, VisualizacaoSenhaUncheckedCreateWithoutColaboradorInput> | VisualizacaoSenhaCreateWithoutColaboradorInput[] | VisualizacaoSenhaUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: VisualizacaoSenhaCreateOrConnectWithoutColaboradorInput | VisualizacaoSenhaCreateOrConnectWithoutColaboradorInput[]
    createMany?: VisualizacaoSenhaCreateManyColaboradorInputEnvelope
    connect?: VisualizacaoSenhaWhereUniqueInput | VisualizacaoSenhaWhereUniqueInput[]
  }

  export type TicketSenhaUncheckedCreateNestedManyWithoutColaboradorInput = {
    create?: XOR<TicketSenhaCreateWithoutColaboradorInput, TicketSenhaUncheckedCreateWithoutColaboradorInput> | TicketSenhaCreateWithoutColaboradorInput[] | TicketSenhaUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: TicketSenhaCreateOrConnectWithoutColaboradorInput | TicketSenhaCreateOrConnectWithoutColaboradorInput[]
    createMany?: TicketSenhaCreateManyColaboradorInputEnvelope
    connect?: TicketSenhaWhereUniqueInput | TicketSenhaWhereUniqueInput[]
  }

  export type EnumStatusColaboradorFieldUpdateOperationsInput = {
    set?: $Enums.StatusColaborador
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AcessoPlataformaUpdateManyWithoutColaboradorNestedInput = {
    create?: XOR<AcessoPlataformaCreateWithoutColaboradorInput, AcessoPlataformaUncheckedCreateWithoutColaboradorInput> | AcessoPlataformaCreateWithoutColaboradorInput[] | AcessoPlataformaUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: AcessoPlataformaCreateOrConnectWithoutColaboradorInput | AcessoPlataformaCreateOrConnectWithoutColaboradorInput[]
    upsert?: AcessoPlataformaUpsertWithWhereUniqueWithoutColaboradorInput | AcessoPlataformaUpsertWithWhereUniqueWithoutColaboradorInput[]
    createMany?: AcessoPlataformaCreateManyColaboradorInputEnvelope
    set?: AcessoPlataformaWhereUniqueInput | AcessoPlataformaWhereUniqueInput[]
    disconnect?: AcessoPlataformaWhereUniqueInput | AcessoPlataformaWhereUniqueInput[]
    delete?: AcessoPlataformaWhereUniqueInput | AcessoPlataformaWhereUniqueInput[]
    connect?: AcessoPlataformaWhereUniqueInput | AcessoPlataformaWhereUniqueInput[]
    update?: AcessoPlataformaUpdateWithWhereUniqueWithoutColaboradorInput | AcessoPlataformaUpdateWithWhereUniqueWithoutColaboradorInput[]
    updateMany?: AcessoPlataformaUpdateManyWithWhereWithoutColaboradorInput | AcessoPlataformaUpdateManyWithWhereWithoutColaboradorInput[]
    deleteMany?: AcessoPlataformaScalarWhereInput | AcessoPlataformaScalarWhereInput[]
  }

  export type HistoricoSenhaUpdateManyWithoutColaboradorNestedInput = {
    create?: XOR<HistoricoSenhaCreateWithoutColaboradorInput, HistoricoSenhaUncheckedCreateWithoutColaboradorInput> | HistoricoSenhaCreateWithoutColaboradorInput[] | HistoricoSenhaUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: HistoricoSenhaCreateOrConnectWithoutColaboradorInput | HistoricoSenhaCreateOrConnectWithoutColaboradorInput[]
    upsert?: HistoricoSenhaUpsertWithWhereUniqueWithoutColaboradorInput | HistoricoSenhaUpsertWithWhereUniqueWithoutColaboradorInput[]
    createMany?: HistoricoSenhaCreateManyColaboradorInputEnvelope
    set?: HistoricoSenhaWhereUniqueInput | HistoricoSenhaWhereUniqueInput[]
    disconnect?: HistoricoSenhaWhereUniqueInput | HistoricoSenhaWhereUniqueInput[]
    delete?: HistoricoSenhaWhereUniqueInput | HistoricoSenhaWhereUniqueInput[]
    connect?: HistoricoSenhaWhereUniqueInput | HistoricoSenhaWhereUniqueInput[]
    update?: HistoricoSenhaUpdateWithWhereUniqueWithoutColaboradorInput | HistoricoSenhaUpdateWithWhereUniqueWithoutColaboradorInput[]
    updateMany?: HistoricoSenhaUpdateManyWithWhereWithoutColaboradorInput | HistoricoSenhaUpdateManyWithWhereWithoutColaboradorInput[]
    deleteMany?: HistoricoSenhaScalarWhereInput | HistoricoSenhaScalarWhereInput[]
  }

  export type VisualizacaoSenhaUpdateManyWithoutColaboradorNestedInput = {
    create?: XOR<VisualizacaoSenhaCreateWithoutColaboradorInput, VisualizacaoSenhaUncheckedCreateWithoutColaboradorInput> | VisualizacaoSenhaCreateWithoutColaboradorInput[] | VisualizacaoSenhaUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: VisualizacaoSenhaCreateOrConnectWithoutColaboradorInput | VisualizacaoSenhaCreateOrConnectWithoutColaboradorInput[]
    upsert?: VisualizacaoSenhaUpsertWithWhereUniqueWithoutColaboradorInput | VisualizacaoSenhaUpsertWithWhereUniqueWithoutColaboradorInput[]
    createMany?: VisualizacaoSenhaCreateManyColaboradorInputEnvelope
    set?: VisualizacaoSenhaWhereUniqueInput | VisualizacaoSenhaWhereUniqueInput[]
    disconnect?: VisualizacaoSenhaWhereUniqueInput | VisualizacaoSenhaWhereUniqueInput[]
    delete?: VisualizacaoSenhaWhereUniqueInput | VisualizacaoSenhaWhereUniqueInput[]
    connect?: VisualizacaoSenhaWhereUniqueInput | VisualizacaoSenhaWhereUniqueInput[]
    update?: VisualizacaoSenhaUpdateWithWhereUniqueWithoutColaboradorInput | VisualizacaoSenhaUpdateWithWhereUniqueWithoutColaboradorInput[]
    updateMany?: VisualizacaoSenhaUpdateManyWithWhereWithoutColaboradorInput | VisualizacaoSenhaUpdateManyWithWhereWithoutColaboradorInput[]
    deleteMany?: VisualizacaoSenhaScalarWhereInput | VisualizacaoSenhaScalarWhereInput[]
  }

  export type TicketSenhaUpdateManyWithoutColaboradorNestedInput = {
    create?: XOR<TicketSenhaCreateWithoutColaboradorInput, TicketSenhaUncheckedCreateWithoutColaboradorInput> | TicketSenhaCreateWithoutColaboradorInput[] | TicketSenhaUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: TicketSenhaCreateOrConnectWithoutColaboradorInput | TicketSenhaCreateOrConnectWithoutColaboradorInput[]
    upsert?: TicketSenhaUpsertWithWhereUniqueWithoutColaboradorInput | TicketSenhaUpsertWithWhereUniqueWithoutColaboradorInput[]
    createMany?: TicketSenhaCreateManyColaboradorInputEnvelope
    set?: TicketSenhaWhereUniqueInput | TicketSenhaWhereUniqueInput[]
    disconnect?: TicketSenhaWhereUniqueInput | TicketSenhaWhereUniqueInput[]
    delete?: TicketSenhaWhereUniqueInput | TicketSenhaWhereUniqueInput[]
    connect?: TicketSenhaWhereUniqueInput | TicketSenhaWhereUniqueInput[]
    update?: TicketSenhaUpdateWithWhereUniqueWithoutColaboradorInput | TicketSenhaUpdateWithWhereUniqueWithoutColaboradorInput[]
    updateMany?: TicketSenhaUpdateManyWithWhereWithoutColaboradorInput | TicketSenhaUpdateManyWithWhereWithoutColaboradorInput[]
    deleteMany?: TicketSenhaScalarWhereInput | TicketSenhaScalarWhereInput[]
  }

  export type AcessoPlataformaUncheckedUpdateManyWithoutColaboradorNestedInput = {
    create?: XOR<AcessoPlataformaCreateWithoutColaboradorInput, AcessoPlataformaUncheckedCreateWithoutColaboradorInput> | AcessoPlataformaCreateWithoutColaboradorInput[] | AcessoPlataformaUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: AcessoPlataformaCreateOrConnectWithoutColaboradorInput | AcessoPlataformaCreateOrConnectWithoutColaboradorInput[]
    upsert?: AcessoPlataformaUpsertWithWhereUniqueWithoutColaboradorInput | AcessoPlataformaUpsertWithWhereUniqueWithoutColaboradorInput[]
    createMany?: AcessoPlataformaCreateManyColaboradorInputEnvelope
    set?: AcessoPlataformaWhereUniqueInput | AcessoPlataformaWhereUniqueInput[]
    disconnect?: AcessoPlataformaWhereUniqueInput | AcessoPlataformaWhereUniqueInput[]
    delete?: AcessoPlataformaWhereUniqueInput | AcessoPlataformaWhereUniqueInput[]
    connect?: AcessoPlataformaWhereUniqueInput | AcessoPlataformaWhereUniqueInput[]
    update?: AcessoPlataformaUpdateWithWhereUniqueWithoutColaboradorInput | AcessoPlataformaUpdateWithWhereUniqueWithoutColaboradorInput[]
    updateMany?: AcessoPlataformaUpdateManyWithWhereWithoutColaboradorInput | AcessoPlataformaUpdateManyWithWhereWithoutColaboradorInput[]
    deleteMany?: AcessoPlataformaScalarWhereInput | AcessoPlataformaScalarWhereInput[]
  }

  export type HistoricoSenhaUncheckedUpdateManyWithoutColaboradorNestedInput = {
    create?: XOR<HistoricoSenhaCreateWithoutColaboradorInput, HistoricoSenhaUncheckedCreateWithoutColaboradorInput> | HistoricoSenhaCreateWithoutColaboradorInput[] | HistoricoSenhaUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: HistoricoSenhaCreateOrConnectWithoutColaboradorInput | HistoricoSenhaCreateOrConnectWithoutColaboradorInput[]
    upsert?: HistoricoSenhaUpsertWithWhereUniqueWithoutColaboradorInput | HistoricoSenhaUpsertWithWhereUniqueWithoutColaboradorInput[]
    createMany?: HistoricoSenhaCreateManyColaboradorInputEnvelope
    set?: HistoricoSenhaWhereUniqueInput | HistoricoSenhaWhereUniqueInput[]
    disconnect?: HistoricoSenhaWhereUniqueInput | HistoricoSenhaWhereUniqueInput[]
    delete?: HistoricoSenhaWhereUniqueInput | HistoricoSenhaWhereUniqueInput[]
    connect?: HistoricoSenhaWhereUniqueInput | HistoricoSenhaWhereUniqueInput[]
    update?: HistoricoSenhaUpdateWithWhereUniqueWithoutColaboradorInput | HistoricoSenhaUpdateWithWhereUniqueWithoutColaboradorInput[]
    updateMany?: HistoricoSenhaUpdateManyWithWhereWithoutColaboradorInput | HistoricoSenhaUpdateManyWithWhereWithoutColaboradorInput[]
    deleteMany?: HistoricoSenhaScalarWhereInput | HistoricoSenhaScalarWhereInput[]
  }

  export type VisualizacaoSenhaUncheckedUpdateManyWithoutColaboradorNestedInput = {
    create?: XOR<VisualizacaoSenhaCreateWithoutColaboradorInput, VisualizacaoSenhaUncheckedCreateWithoutColaboradorInput> | VisualizacaoSenhaCreateWithoutColaboradorInput[] | VisualizacaoSenhaUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: VisualizacaoSenhaCreateOrConnectWithoutColaboradorInput | VisualizacaoSenhaCreateOrConnectWithoutColaboradorInput[]
    upsert?: VisualizacaoSenhaUpsertWithWhereUniqueWithoutColaboradorInput | VisualizacaoSenhaUpsertWithWhereUniqueWithoutColaboradorInput[]
    createMany?: VisualizacaoSenhaCreateManyColaboradorInputEnvelope
    set?: VisualizacaoSenhaWhereUniqueInput | VisualizacaoSenhaWhereUniqueInput[]
    disconnect?: VisualizacaoSenhaWhereUniqueInput | VisualizacaoSenhaWhereUniqueInput[]
    delete?: VisualizacaoSenhaWhereUniqueInput | VisualizacaoSenhaWhereUniqueInput[]
    connect?: VisualizacaoSenhaWhereUniqueInput | VisualizacaoSenhaWhereUniqueInput[]
    update?: VisualizacaoSenhaUpdateWithWhereUniqueWithoutColaboradorInput | VisualizacaoSenhaUpdateWithWhereUniqueWithoutColaboradorInput[]
    updateMany?: VisualizacaoSenhaUpdateManyWithWhereWithoutColaboradorInput | VisualizacaoSenhaUpdateManyWithWhereWithoutColaboradorInput[]
    deleteMany?: VisualizacaoSenhaScalarWhereInput | VisualizacaoSenhaScalarWhereInput[]
  }

  export type TicketSenhaUncheckedUpdateManyWithoutColaboradorNestedInput = {
    create?: XOR<TicketSenhaCreateWithoutColaboradorInput, TicketSenhaUncheckedCreateWithoutColaboradorInput> | TicketSenhaCreateWithoutColaboradorInput[] | TicketSenhaUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: TicketSenhaCreateOrConnectWithoutColaboradorInput | TicketSenhaCreateOrConnectWithoutColaboradorInput[]
    upsert?: TicketSenhaUpsertWithWhereUniqueWithoutColaboradorInput | TicketSenhaUpsertWithWhereUniqueWithoutColaboradorInput[]
    createMany?: TicketSenhaCreateManyColaboradorInputEnvelope
    set?: TicketSenhaWhereUniqueInput | TicketSenhaWhereUniqueInput[]
    disconnect?: TicketSenhaWhereUniqueInput | TicketSenhaWhereUniqueInput[]
    delete?: TicketSenhaWhereUniqueInput | TicketSenhaWhereUniqueInput[]
    connect?: TicketSenhaWhereUniqueInput | TicketSenhaWhereUniqueInput[]
    update?: TicketSenhaUpdateWithWhereUniqueWithoutColaboradorInput | TicketSenhaUpdateWithWhereUniqueWithoutColaboradorInput[]
    updateMany?: TicketSenhaUpdateManyWithWhereWithoutColaboradorInput | TicketSenhaUpdateManyWithWhereWithoutColaboradorInput[]
    deleteMany?: TicketSenhaScalarWhereInput | TicketSenhaScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutPlataformasInput = {
    create?: XOR<ClienteCreateWithoutPlataformasInput, ClienteUncheckedCreateWithoutPlataformasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPlataformasInput
    connect?: ClienteWhereUniqueInput
  }

  export type AcessoPlataformaCreateNestedManyWithoutPlataformaInput = {
    create?: XOR<AcessoPlataformaCreateWithoutPlataformaInput, AcessoPlataformaUncheckedCreateWithoutPlataformaInput> | AcessoPlataformaCreateWithoutPlataformaInput[] | AcessoPlataformaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: AcessoPlataformaCreateOrConnectWithoutPlataformaInput | AcessoPlataformaCreateOrConnectWithoutPlataformaInput[]
    createMany?: AcessoPlataformaCreateManyPlataformaInputEnvelope
    connect?: AcessoPlataformaWhereUniqueInput | AcessoPlataformaWhereUniqueInput[]
  }

  export type HistoricoSenhaCreateNestedManyWithoutPlataformaInput = {
    create?: XOR<HistoricoSenhaCreateWithoutPlataformaInput, HistoricoSenhaUncheckedCreateWithoutPlataformaInput> | HistoricoSenhaCreateWithoutPlataformaInput[] | HistoricoSenhaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: HistoricoSenhaCreateOrConnectWithoutPlataformaInput | HistoricoSenhaCreateOrConnectWithoutPlataformaInput[]
    createMany?: HistoricoSenhaCreateManyPlataformaInputEnvelope
    connect?: HistoricoSenhaWhereUniqueInput | HistoricoSenhaWhereUniqueInput[]
  }

  export type CustoPlataformaCreateNestedManyWithoutPlataformaInput = {
    create?: XOR<CustoPlataformaCreateWithoutPlataformaInput, CustoPlataformaUncheckedCreateWithoutPlataformaInput> | CustoPlataformaCreateWithoutPlataformaInput[] | CustoPlataformaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: CustoPlataformaCreateOrConnectWithoutPlataformaInput | CustoPlataformaCreateOrConnectWithoutPlataformaInput[]
    createMany?: CustoPlataformaCreateManyPlataformaInputEnvelope
    connect?: CustoPlataformaWhereUniqueInput | CustoPlataformaWhereUniqueInput[]
  }

  export type VisualizacaoSenhaCreateNestedManyWithoutPlataformaInput = {
    create?: XOR<VisualizacaoSenhaCreateWithoutPlataformaInput, VisualizacaoSenhaUncheckedCreateWithoutPlataformaInput> | VisualizacaoSenhaCreateWithoutPlataformaInput[] | VisualizacaoSenhaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: VisualizacaoSenhaCreateOrConnectWithoutPlataformaInput | VisualizacaoSenhaCreateOrConnectWithoutPlataformaInput[]
    createMany?: VisualizacaoSenhaCreateManyPlataformaInputEnvelope
    connect?: VisualizacaoSenhaWhereUniqueInput | VisualizacaoSenhaWhereUniqueInput[]
  }

  export type TicketSenhaCreateNestedManyWithoutPlataformaInput = {
    create?: XOR<TicketSenhaCreateWithoutPlataformaInput, TicketSenhaUncheckedCreateWithoutPlataformaInput> | TicketSenhaCreateWithoutPlataformaInput[] | TicketSenhaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: TicketSenhaCreateOrConnectWithoutPlataformaInput | TicketSenhaCreateOrConnectWithoutPlataformaInput[]
    createMany?: TicketSenhaCreateManyPlataformaInputEnvelope
    connect?: TicketSenhaWhereUniqueInput | TicketSenhaWhereUniqueInput[]
  }

  export type AcessoPlataformaUncheckedCreateNestedManyWithoutPlataformaInput = {
    create?: XOR<AcessoPlataformaCreateWithoutPlataformaInput, AcessoPlataformaUncheckedCreateWithoutPlataformaInput> | AcessoPlataformaCreateWithoutPlataformaInput[] | AcessoPlataformaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: AcessoPlataformaCreateOrConnectWithoutPlataformaInput | AcessoPlataformaCreateOrConnectWithoutPlataformaInput[]
    createMany?: AcessoPlataformaCreateManyPlataformaInputEnvelope
    connect?: AcessoPlataformaWhereUniqueInput | AcessoPlataformaWhereUniqueInput[]
  }

  export type HistoricoSenhaUncheckedCreateNestedManyWithoutPlataformaInput = {
    create?: XOR<HistoricoSenhaCreateWithoutPlataformaInput, HistoricoSenhaUncheckedCreateWithoutPlataformaInput> | HistoricoSenhaCreateWithoutPlataformaInput[] | HistoricoSenhaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: HistoricoSenhaCreateOrConnectWithoutPlataformaInput | HistoricoSenhaCreateOrConnectWithoutPlataformaInput[]
    createMany?: HistoricoSenhaCreateManyPlataformaInputEnvelope
    connect?: HistoricoSenhaWhereUniqueInput | HistoricoSenhaWhereUniqueInput[]
  }

  export type CustoPlataformaUncheckedCreateNestedManyWithoutPlataformaInput = {
    create?: XOR<CustoPlataformaCreateWithoutPlataformaInput, CustoPlataformaUncheckedCreateWithoutPlataformaInput> | CustoPlataformaCreateWithoutPlataformaInput[] | CustoPlataformaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: CustoPlataformaCreateOrConnectWithoutPlataformaInput | CustoPlataformaCreateOrConnectWithoutPlataformaInput[]
    createMany?: CustoPlataformaCreateManyPlataformaInputEnvelope
    connect?: CustoPlataformaWhereUniqueInput | CustoPlataformaWhereUniqueInput[]
  }

  export type VisualizacaoSenhaUncheckedCreateNestedManyWithoutPlataformaInput = {
    create?: XOR<VisualizacaoSenhaCreateWithoutPlataformaInput, VisualizacaoSenhaUncheckedCreateWithoutPlataformaInput> | VisualizacaoSenhaCreateWithoutPlataformaInput[] | VisualizacaoSenhaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: VisualizacaoSenhaCreateOrConnectWithoutPlataformaInput | VisualizacaoSenhaCreateOrConnectWithoutPlataformaInput[]
    createMany?: VisualizacaoSenhaCreateManyPlataformaInputEnvelope
    connect?: VisualizacaoSenhaWhereUniqueInput | VisualizacaoSenhaWhereUniqueInput[]
  }

  export type TicketSenhaUncheckedCreateNestedManyWithoutPlataformaInput = {
    create?: XOR<TicketSenhaCreateWithoutPlataformaInput, TicketSenhaUncheckedCreateWithoutPlataformaInput> | TicketSenhaCreateWithoutPlataformaInput[] | TicketSenhaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: TicketSenhaCreateOrConnectWithoutPlataformaInput | TicketSenhaCreateOrConnectWithoutPlataformaInput[]
    createMany?: TicketSenhaCreateManyPlataformaInputEnvelope
    connect?: TicketSenhaWhereUniqueInput | TicketSenhaWhereUniqueInput[]
  }

  export type EnumTipoPlataformaFieldUpdateOperationsInput = {
    set?: $Enums.TipoPlataforma
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumVinculoPlataformaFieldUpdateOperationsInput = {
    set?: $Enums.VinculoPlataforma
  }

  export type ClienteUpdateOneWithoutPlataformasNestedInput = {
    create?: XOR<ClienteCreateWithoutPlataformasInput, ClienteUncheckedCreateWithoutPlataformasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPlataformasInput
    upsert?: ClienteUpsertWithoutPlataformasInput
    disconnect?: ClienteWhereInput | boolean
    delete?: ClienteWhereInput | boolean
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutPlataformasInput, ClienteUpdateWithoutPlataformasInput>, ClienteUncheckedUpdateWithoutPlataformasInput>
  }

  export type AcessoPlataformaUpdateManyWithoutPlataformaNestedInput = {
    create?: XOR<AcessoPlataformaCreateWithoutPlataformaInput, AcessoPlataformaUncheckedCreateWithoutPlataformaInput> | AcessoPlataformaCreateWithoutPlataformaInput[] | AcessoPlataformaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: AcessoPlataformaCreateOrConnectWithoutPlataformaInput | AcessoPlataformaCreateOrConnectWithoutPlataformaInput[]
    upsert?: AcessoPlataformaUpsertWithWhereUniqueWithoutPlataformaInput | AcessoPlataformaUpsertWithWhereUniqueWithoutPlataformaInput[]
    createMany?: AcessoPlataformaCreateManyPlataformaInputEnvelope
    set?: AcessoPlataformaWhereUniqueInput | AcessoPlataformaWhereUniqueInput[]
    disconnect?: AcessoPlataformaWhereUniqueInput | AcessoPlataformaWhereUniqueInput[]
    delete?: AcessoPlataformaWhereUniqueInput | AcessoPlataformaWhereUniqueInput[]
    connect?: AcessoPlataformaWhereUniqueInput | AcessoPlataformaWhereUniqueInput[]
    update?: AcessoPlataformaUpdateWithWhereUniqueWithoutPlataformaInput | AcessoPlataformaUpdateWithWhereUniqueWithoutPlataformaInput[]
    updateMany?: AcessoPlataformaUpdateManyWithWhereWithoutPlataformaInput | AcessoPlataformaUpdateManyWithWhereWithoutPlataformaInput[]
    deleteMany?: AcessoPlataformaScalarWhereInput | AcessoPlataformaScalarWhereInput[]
  }

  export type HistoricoSenhaUpdateManyWithoutPlataformaNestedInput = {
    create?: XOR<HistoricoSenhaCreateWithoutPlataformaInput, HistoricoSenhaUncheckedCreateWithoutPlataformaInput> | HistoricoSenhaCreateWithoutPlataformaInput[] | HistoricoSenhaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: HistoricoSenhaCreateOrConnectWithoutPlataformaInput | HistoricoSenhaCreateOrConnectWithoutPlataformaInput[]
    upsert?: HistoricoSenhaUpsertWithWhereUniqueWithoutPlataformaInput | HistoricoSenhaUpsertWithWhereUniqueWithoutPlataformaInput[]
    createMany?: HistoricoSenhaCreateManyPlataformaInputEnvelope
    set?: HistoricoSenhaWhereUniqueInput | HistoricoSenhaWhereUniqueInput[]
    disconnect?: HistoricoSenhaWhereUniqueInput | HistoricoSenhaWhereUniqueInput[]
    delete?: HistoricoSenhaWhereUniqueInput | HistoricoSenhaWhereUniqueInput[]
    connect?: HistoricoSenhaWhereUniqueInput | HistoricoSenhaWhereUniqueInput[]
    update?: HistoricoSenhaUpdateWithWhereUniqueWithoutPlataformaInput | HistoricoSenhaUpdateWithWhereUniqueWithoutPlataformaInput[]
    updateMany?: HistoricoSenhaUpdateManyWithWhereWithoutPlataformaInput | HistoricoSenhaUpdateManyWithWhereWithoutPlataformaInput[]
    deleteMany?: HistoricoSenhaScalarWhereInput | HistoricoSenhaScalarWhereInput[]
  }

  export type CustoPlataformaUpdateManyWithoutPlataformaNestedInput = {
    create?: XOR<CustoPlataformaCreateWithoutPlataformaInput, CustoPlataformaUncheckedCreateWithoutPlataformaInput> | CustoPlataformaCreateWithoutPlataformaInput[] | CustoPlataformaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: CustoPlataformaCreateOrConnectWithoutPlataformaInput | CustoPlataformaCreateOrConnectWithoutPlataformaInput[]
    upsert?: CustoPlataformaUpsertWithWhereUniqueWithoutPlataformaInput | CustoPlataformaUpsertWithWhereUniqueWithoutPlataformaInput[]
    createMany?: CustoPlataformaCreateManyPlataformaInputEnvelope
    set?: CustoPlataformaWhereUniqueInput | CustoPlataformaWhereUniqueInput[]
    disconnect?: CustoPlataformaWhereUniqueInput | CustoPlataformaWhereUniqueInput[]
    delete?: CustoPlataformaWhereUniqueInput | CustoPlataformaWhereUniqueInput[]
    connect?: CustoPlataformaWhereUniqueInput | CustoPlataformaWhereUniqueInput[]
    update?: CustoPlataformaUpdateWithWhereUniqueWithoutPlataformaInput | CustoPlataformaUpdateWithWhereUniqueWithoutPlataformaInput[]
    updateMany?: CustoPlataformaUpdateManyWithWhereWithoutPlataformaInput | CustoPlataformaUpdateManyWithWhereWithoutPlataformaInput[]
    deleteMany?: CustoPlataformaScalarWhereInput | CustoPlataformaScalarWhereInput[]
  }

  export type VisualizacaoSenhaUpdateManyWithoutPlataformaNestedInput = {
    create?: XOR<VisualizacaoSenhaCreateWithoutPlataformaInput, VisualizacaoSenhaUncheckedCreateWithoutPlataformaInput> | VisualizacaoSenhaCreateWithoutPlataformaInput[] | VisualizacaoSenhaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: VisualizacaoSenhaCreateOrConnectWithoutPlataformaInput | VisualizacaoSenhaCreateOrConnectWithoutPlataformaInput[]
    upsert?: VisualizacaoSenhaUpsertWithWhereUniqueWithoutPlataformaInput | VisualizacaoSenhaUpsertWithWhereUniqueWithoutPlataformaInput[]
    createMany?: VisualizacaoSenhaCreateManyPlataformaInputEnvelope
    set?: VisualizacaoSenhaWhereUniqueInput | VisualizacaoSenhaWhereUniqueInput[]
    disconnect?: VisualizacaoSenhaWhereUniqueInput | VisualizacaoSenhaWhereUniqueInput[]
    delete?: VisualizacaoSenhaWhereUniqueInput | VisualizacaoSenhaWhereUniqueInput[]
    connect?: VisualizacaoSenhaWhereUniqueInput | VisualizacaoSenhaWhereUniqueInput[]
    update?: VisualizacaoSenhaUpdateWithWhereUniqueWithoutPlataformaInput | VisualizacaoSenhaUpdateWithWhereUniqueWithoutPlataformaInput[]
    updateMany?: VisualizacaoSenhaUpdateManyWithWhereWithoutPlataformaInput | VisualizacaoSenhaUpdateManyWithWhereWithoutPlataformaInput[]
    deleteMany?: VisualizacaoSenhaScalarWhereInput | VisualizacaoSenhaScalarWhereInput[]
  }

  export type TicketSenhaUpdateManyWithoutPlataformaNestedInput = {
    create?: XOR<TicketSenhaCreateWithoutPlataformaInput, TicketSenhaUncheckedCreateWithoutPlataformaInput> | TicketSenhaCreateWithoutPlataformaInput[] | TicketSenhaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: TicketSenhaCreateOrConnectWithoutPlataformaInput | TicketSenhaCreateOrConnectWithoutPlataformaInput[]
    upsert?: TicketSenhaUpsertWithWhereUniqueWithoutPlataformaInput | TicketSenhaUpsertWithWhereUniqueWithoutPlataformaInput[]
    createMany?: TicketSenhaCreateManyPlataformaInputEnvelope
    set?: TicketSenhaWhereUniqueInput | TicketSenhaWhereUniqueInput[]
    disconnect?: TicketSenhaWhereUniqueInput | TicketSenhaWhereUniqueInput[]
    delete?: TicketSenhaWhereUniqueInput | TicketSenhaWhereUniqueInput[]
    connect?: TicketSenhaWhereUniqueInput | TicketSenhaWhereUniqueInput[]
    update?: TicketSenhaUpdateWithWhereUniqueWithoutPlataformaInput | TicketSenhaUpdateWithWhereUniqueWithoutPlataformaInput[]
    updateMany?: TicketSenhaUpdateManyWithWhereWithoutPlataformaInput | TicketSenhaUpdateManyWithWhereWithoutPlataformaInput[]
    deleteMany?: TicketSenhaScalarWhereInput | TicketSenhaScalarWhereInput[]
  }

  export type AcessoPlataformaUncheckedUpdateManyWithoutPlataformaNestedInput = {
    create?: XOR<AcessoPlataformaCreateWithoutPlataformaInput, AcessoPlataformaUncheckedCreateWithoutPlataformaInput> | AcessoPlataformaCreateWithoutPlataformaInput[] | AcessoPlataformaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: AcessoPlataformaCreateOrConnectWithoutPlataformaInput | AcessoPlataformaCreateOrConnectWithoutPlataformaInput[]
    upsert?: AcessoPlataformaUpsertWithWhereUniqueWithoutPlataformaInput | AcessoPlataformaUpsertWithWhereUniqueWithoutPlataformaInput[]
    createMany?: AcessoPlataformaCreateManyPlataformaInputEnvelope
    set?: AcessoPlataformaWhereUniqueInput | AcessoPlataformaWhereUniqueInput[]
    disconnect?: AcessoPlataformaWhereUniqueInput | AcessoPlataformaWhereUniqueInput[]
    delete?: AcessoPlataformaWhereUniqueInput | AcessoPlataformaWhereUniqueInput[]
    connect?: AcessoPlataformaWhereUniqueInput | AcessoPlataformaWhereUniqueInput[]
    update?: AcessoPlataformaUpdateWithWhereUniqueWithoutPlataformaInput | AcessoPlataformaUpdateWithWhereUniqueWithoutPlataformaInput[]
    updateMany?: AcessoPlataformaUpdateManyWithWhereWithoutPlataformaInput | AcessoPlataformaUpdateManyWithWhereWithoutPlataformaInput[]
    deleteMany?: AcessoPlataformaScalarWhereInput | AcessoPlataformaScalarWhereInput[]
  }

  export type HistoricoSenhaUncheckedUpdateManyWithoutPlataformaNestedInput = {
    create?: XOR<HistoricoSenhaCreateWithoutPlataformaInput, HistoricoSenhaUncheckedCreateWithoutPlataformaInput> | HistoricoSenhaCreateWithoutPlataformaInput[] | HistoricoSenhaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: HistoricoSenhaCreateOrConnectWithoutPlataformaInput | HistoricoSenhaCreateOrConnectWithoutPlataformaInput[]
    upsert?: HistoricoSenhaUpsertWithWhereUniqueWithoutPlataformaInput | HistoricoSenhaUpsertWithWhereUniqueWithoutPlataformaInput[]
    createMany?: HistoricoSenhaCreateManyPlataformaInputEnvelope
    set?: HistoricoSenhaWhereUniqueInput | HistoricoSenhaWhereUniqueInput[]
    disconnect?: HistoricoSenhaWhereUniqueInput | HistoricoSenhaWhereUniqueInput[]
    delete?: HistoricoSenhaWhereUniqueInput | HistoricoSenhaWhereUniqueInput[]
    connect?: HistoricoSenhaWhereUniqueInput | HistoricoSenhaWhereUniqueInput[]
    update?: HistoricoSenhaUpdateWithWhereUniqueWithoutPlataformaInput | HistoricoSenhaUpdateWithWhereUniqueWithoutPlataformaInput[]
    updateMany?: HistoricoSenhaUpdateManyWithWhereWithoutPlataformaInput | HistoricoSenhaUpdateManyWithWhereWithoutPlataformaInput[]
    deleteMany?: HistoricoSenhaScalarWhereInput | HistoricoSenhaScalarWhereInput[]
  }

  export type CustoPlataformaUncheckedUpdateManyWithoutPlataformaNestedInput = {
    create?: XOR<CustoPlataformaCreateWithoutPlataformaInput, CustoPlataformaUncheckedCreateWithoutPlataformaInput> | CustoPlataformaCreateWithoutPlataformaInput[] | CustoPlataformaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: CustoPlataformaCreateOrConnectWithoutPlataformaInput | CustoPlataformaCreateOrConnectWithoutPlataformaInput[]
    upsert?: CustoPlataformaUpsertWithWhereUniqueWithoutPlataformaInput | CustoPlataformaUpsertWithWhereUniqueWithoutPlataformaInput[]
    createMany?: CustoPlataformaCreateManyPlataformaInputEnvelope
    set?: CustoPlataformaWhereUniqueInput | CustoPlataformaWhereUniqueInput[]
    disconnect?: CustoPlataformaWhereUniqueInput | CustoPlataformaWhereUniqueInput[]
    delete?: CustoPlataformaWhereUniqueInput | CustoPlataformaWhereUniqueInput[]
    connect?: CustoPlataformaWhereUniqueInput | CustoPlataformaWhereUniqueInput[]
    update?: CustoPlataformaUpdateWithWhereUniqueWithoutPlataformaInput | CustoPlataformaUpdateWithWhereUniqueWithoutPlataformaInput[]
    updateMany?: CustoPlataformaUpdateManyWithWhereWithoutPlataformaInput | CustoPlataformaUpdateManyWithWhereWithoutPlataformaInput[]
    deleteMany?: CustoPlataformaScalarWhereInput | CustoPlataformaScalarWhereInput[]
  }

  export type VisualizacaoSenhaUncheckedUpdateManyWithoutPlataformaNestedInput = {
    create?: XOR<VisualizacaoSenhaCreateWithoutPlataformaInput, VisualizacaoSenhaUncheckedCreateWithoutPlataformaInput> | VisualizacaoSenhaCreateWithoutPlataformaInput[] | VisualizacaoSenhaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: VisualizacaoSenhaCreateOrConnectWithoutPlataformaInput | VisualizacaoSenhaCreateOrConnectWithoutPlataformaInput[]
    upsert?: VisualizacaoSenhaUpsertWithWhereUniqueWithoutPlataformaInput | VisualizacaoSenhaUpsertWithWhereUniqueWithoutPlataformaInput[]
    createMany?: VisualizacaoSenhaCreateManyPlataformaInputEnvelope
    set?: VisualizacaoSenhaWhereUniqueInput | VisualizacaoSenhaWhereUniqueInput[]
    disconnect?: VisualizacaoSenhaWhereUniqueInput | VisualizacaoSenhaWhereUniqueInput[]
    delete?: VisualizacaoSenhaWhereUniqueInput | VisualizacaoSenhaWhereUniqueInput[]
    connect?: VisualizacaoSenhaWhereUniqueInput | VisualizacaoSenhaWhereUniqueInput[]
    update?: VisualizacaoSenhaUpdateWithWhereUniqueWithoutPlataformaInput | VisualizacaoSenhaUpdateWithWhereUniqueWithoutPlataformaInput[]
    updateMany?: VisualizacaoSenhaUpdateManyWithWhereWithoutPlataformaInput | VisualizacaoSenhaUpdateManyWithWhereWithoutPlataformaInput[]
    deleteMany?: VisualizacaoSenhaScalarWhereInput | VisualizacaoSenhaScalarWhereInput[]
  }

  export type TicketSenhaUncheckedUpdateManyWithoutPlataformaNestedInput = {
    create?: XOR<TicketSenhaCreateWithoutPlataformaInput, TicketSenhaUncheckedCreateWithoutPlataformaInput> | TicketSenhaCreateWithoutPlataformaInput[] | TicketSenhaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: TicketSenhaCreateOrConnectWithoutPlataformaInput | TicketSenhaCreateOrConnectWithoutPlataformaInput[]
    upsert?: TicketSenhaUpsertWithWhereUniqueWithoutPlataformaInput | TicketSenhaUpsertWithWhereUniqueWithoutPlataformaInput[]
    createMany?: TicketSenhaCreateManyPlataformaInputEnvelope
    set?: TicketSenhaWhereUniqueInput | TicketSenhaWhereUniqueInput[]
    disconnect?: TicketSenhaWhereUniqueInput | TicketSenhaWhereUniqueInput[]
    delete?: TicketSenhaWhereUniqueInput | TicketSenhaWhereUniqueInput[]
    connect?: TicketSenhaWhereUniqueInput | TicketSenhaWhereUniqueInput[]
    update?: TicketSenhaUpdateWithWhereUniqueWithoutPlataformaInput | TicketSenhaUpdateWithWhereUniqueWithoutPlataformaInput[]
    updateMany?: TicketSenhaUpdateManyWithWhereWithoutPlataformaInput | TicketSenhaUpdateManyWithWhereWithoutPlataformaInput[]
    deleteMany?: TicketSenhaScalarWhereInput | TicketSenhaScalarWhereInput[]
  }

  export type ColaboradorCreateNestedOneWithoutAcessosInput = {
    create?: XOR<ColaboradorCreateWithoutAcessosInput, ColaboradorUncheckedCreateWithoutAcessosInput>
    connectOrCreate?: ColaboradorCreateOrConnectWithoutAcessosInput
    connect?: ColaboradorWhereUniqueInput
  }

  export type PlataformaCreateNestedOneWithoutAcessosInput = {
    create?: XOR<PlataformaCreateWithoutAcessosInput, PlataformaUncheckedCreateWithoutAcessosInput>
    connectOrCreate?: PlataformaCreateOrConnectWithoutAcessosInput
    connect?: PlataformaWhereUniqueInput
  }

  export type ColaboradorUpdateOneRequiredWithoutAcessosNestedInput = {
    create?: XOR<ColaboradorCreateWithoutAcessosInput, ColaboradorUncheckedCreateWithoutAcessosInput>
    connectOrCreate?: ColaboradorCreateOrConnectWithoutAcessosInput
    upsert?: ColaboradorUpsertWithoutAcessosInput
    connect?: ColaboradorWhereUniqueInput
    update?: XOR<XOR<ColaboradorUpdateToOneWithWhereWithoutAcessosInput, ColaboradorUpdateWithoutAcessosInput>, ColaboradorUncheckedUpdateWithoutAcessosInput>
  }

  export type PlataformaUpdateOneRequiredWithoutAcessosNestedInput = {
    create?: XOR<PlataformaCreateWithoutAcessosInput, PlataformaUncheckedCreateWithoutAcessosInput>
    connectOrCreate?: PlataformaCreateOrConnectWithoutAcessosInput
    upsert?: PlataformaUpsertWithoutAcessosInput
    connect?: PlataformaWhereUniqueInput
    update?: XOR<XOR<PlataformaUpdateToOneWithWhereWithoutAcessosInput, PlataformaUpdateWithoutAcessosInput>, PlataformaUncheckedUpdateWithoutAcessosInput>
  }

  export type PlataformaCreateNestedOneWithoutHistoricoSenhasInput = {
    create?: XOR<PlataformaCreateWithoutHistoricoSenhasInput, PlataformaUncheckedCreateWithoutHistoricoSenhasInput>
    connectOrCreate?: PlataformaCreateOrConnectWithoutHistoricoSenhasInput
    connect?: PlataformaWhereUniqueInput
  }

  export type ColaboradorCreateNestedOneWithoutHistoricoSenhasInput = {
    create?: XOR<ColaboradorCreateWithoutHistoricoSenhasInput, ColaboradorUncheckedCreateWithoutHistoricoSenhasInput>
    connectOrCreate?: ColaboradorCreateOrConnectWithoutHistoricoSenhasInput
    connect?: ColaboradorWhereUniqueInput
  }

  export type PlataformaUpdateOneRequiredWithoutHistoricoSenhasNestedInput = {
    create?: XOR<PlataformaCreateWithoutHistoricoSenhasInput, PlataformaUncheckedCreateWithoutHistoricoSenhasInput>
    connectOrCreate?: PlataformaCreateOrConnectWithoutHistoricoSenhasInput
    upsert?: PlataformaUpsertWithoutHistoricoSenhasInput
    connect?: PlataformaWhereUniqueInput
    update?: XOR<XOR<PlataformaUpdateToOneWithWhereWithoutHistoricoSenhasInput, PlataformaUpdateWithoutHistoricoSenhasInput>, PlataformaUncheckedUpdateWithoutHistoricoSenhasInput>
  }

  export type ColaboradorUpdateOneWithoutHistoricoSenhasNestedInput = {
    create?: XOR<ColaboradorCreateWithoutHistoricoSenhasInput, ColaboradorUncheckedCreateWithoutHistoricoSenhasInput>
    connectOrCreate?: ColaboradorCreateOrConnectWithoutHistoricoSenhasInput
    upsert?: ColaboradorUpsertWithoutHistoricoSenhasInput
    disconnect?: ColaboradorWhereInput | boolean
    delete?: ColaboradorWhereInput | boolean
    connect?: ColaboradorWhereUniqueInput
    update?: XOR<XOR<ColaboradorUpdateToOneWithWhereWithoutHistoricoSenhasInput, ColaboradorUpdateWithoutHistoricoSenhasInput>, ColaboradorUncheckedUpdateWithoutHistoricoSenhasInput>
  }

  export type PlataformaCreateNestedOneWithoutVisualizacoesSenhaInput = {
    create?: XOR<PlataformaCreateWithoutVisualizacoesSenhaInput, PlataformaUncheckedCreateWithoutVisualizacoesSenhaInput>
    connectOrCreate?: PlataformaCreateOrConnectWithoutVisualizacoesSenhaInput
    connect?: PlataformaWhereUniqueInput
  }

  export type ColaboradorCreateNestedOneWithoutVisualizacoesSenhaInput = {
    create?: XOR<ColaboradorCreateWithoutVisualizacoesSenhaInput, ColaboradorUncheckedCreateWithoutVisualizacoesSenhaInput>
    connectOrCreate?: ColaboradorCreateOrConnectWithoutVisualizacoesSenhaInput
    connect?: ColaboradorWhereUniqueInput
  }

  export type PlataformaUpdateOneRequiredWithoutVisualizacoesSenhaNestedInput = {
    create?: XOR<PlataformaCreateWithoutVisualizacoesSenhaInput, PlataformaUncheckedCreateWithoutVisualizacoesSenhaInput>
    connectOrCreate?: PlataformaCreateOrConnectWithoutVisualizacoesSenhaInput
    upsert?: PlataformaUpsertWithoutVisualizacoesSenhaInput
    connect?: PlataformaWhereUniqueInput
    update?: XOR<XOR<PlataformaUpdateToOneWithWhereWithoutVisualizacoesSenhaInput, PlataformaUpdateWithoutVisualizacoesSenhaInput>, PlataformaUncheckedUpdateWithoutVisualizacoesSenhaInput>
  }

  export type ColaboradorUpdateOneRequiredWithoutVisualizacoesSenhaNestedInput = {
    create?: XOR<ColaboradorCreateWithoutVisualizacoesSenhaInput, ColaboradorUncheckedCreateWithoutVisualizacoesSenhaInput>
    connectOrCreate?: ColaboradorCreateOrConnectWithoutVisualizacoesSenhaInput
    upsert?: ColaboradorUpsertWithoutVisualizacoesSenhaInput
    connect?: ColaboradorWhereUniqueInput
    update?: XOR<XOR<ColaboradorUpdateToOneWithWhereWithoutVisualizacoesSenhaInput, ColaboradorUpdateWithoutVisualizacoesSenhaInput>, ColaboradorUncheckedUpdateWithoutVisualizacoesSenhaInput>
  }

  export type PlataformaCreateNestedOneWithoutTicketsSenhaInput = {
    create?: XOR<PlataformaCreateWithoutTicketsSenhaInput, PlataformaUncheckedCreateWithoutTicketsSenhaInput>
    connectOrCreate?: PlataformaCreateOrConnectWithoutTicketsSenhaInput
    connect?: PlataformaWhereUniqueInput
  }

  export type ColaboradorCreateNestedOneWithoutTicketsSenhaInput = {
    create?: XOR<ColaboradorCreateWithoutTicketsSenhaInput, ColaboradorUncheckedCreateWithoutTicketsSenhaInput>
    connectOrCreate?: ColaboradorCreateOrConnectWithoutTicketsSenhaInput
    connect?: ColaboradorWhereUniqueInput
  }

  export type EnumStatusTicketFieldUpdateOperationsInput = {
    set?: $Enums.StatusTicket
  }

  export type PlataformaUpdateOneRequiredWithoutTicketsSenhaNestedInput = {
    create?: XOR<PlataformaCreateWithoutTicketsSenhaInput, PlataformaUncheckedCreateWithoutTicketsSenhaInput>
    connectOrCreate?: PlataformaCreateOrConnectWithoutTicketsSenhaInput
    upsert?: PlataformaUpsertWithoutTicketsSenhaInput
    connect?: PlataformaWhereUniqueInput
    update?: XOR<XOR<PlataformaUpdateToOneWithWhereWithoutTicketsSenhaInput, PlataformaUpdateWithoutTicketsSenhaInput>, PlataformaUncheckedUpdateWithoutTicketsSenhaInput>
  }

  export type ColaboradorUpdateOneRequiredWithoutTicketsSenhaNestedInput = {
    create?: XOR<ColaboradorCreateWithoutTicketsSenhaInput, ColaboradorUncheckedCreateWithoutTicketsSenhaInput>
    connectOrCreate?: ColaboradorCreateOrConnectWithoutTicketsSenhaInput
    upsert?: ColaboradorUpsertWithoutTicketsSenhaInput
    connect?: ColaboradorWhereUniqueInput
    update?: XOR<XOR<ColaboradorUpdateToOneWithWhereWithoutTicketsSenhaInput, ColaboradorUpdateWithoutTicketsSenhaInput>, ColaboradorUncheckedUpdateWithoutTicketsSenhaInput>
  }

  export type PlataformaCreateNestedOneWithoutCustosInput = {
    create?: XOR<PlataformaCreateWithoutCustosInput, PlataformaUncheckedCreateWithoutCustosInput>
    connectOrCreate?: PlataformaCreateOrConnectWithoutCustosInput
    connect?: PlataformaWhereUniqueInput
  }

  export type PlataformaUpdateOneRequiredWithoutCustosNestedInput = {
    create?: XOR<PlataformaCreateWithoutCustosInput, PlataformaUncheckedCreateWithoutCustosInput>
    connectOrCreate?: PlataformaCreateOrConnectWithoutCustosInput
    upsert?: PlataformaUpsertWithoutCustosInput
    connect?: PlataformaWhereUniqueInput
    update?: XOR<XOR<PlataformaUpdateToOneWithWhereWithoutCustosInput, PlataformaUpdateWithoutCustosInput>, PlataformaUncheckedUpdateWithoutCustosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusColaboradorFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusColaborador | EnumStatusColaboradorFieldRefInput<$PrismaModel>
    in?: $Enums.StatusColaborador[] | ListEnumStatusColaboradorFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusColaborador[] | ListEnumStatusColaboradorFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusColaboradorFilter<$PrismaModel> | $Enums.StatusColaborador
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStatusColaboradorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusColaborador | EnumStatusColaboradorFieldRefInput<$PrismaModel>
    in?: $Enums.StatusColaborador[] | ListEnumStatusColaboradorFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusColaborador[] | ListEnumStatusColaboradorFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusColaboradorWithAggregatesFilter<$PrismaModel> | $Enums.StatusColaborador
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusColaboradorFilter<$PrismaModel>
    _max?: NestedEnumStatusColaboradorFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTipoPlataformaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPlataforma | EnumTipoPlataformaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPlataforma[] | ListEnumTipoPlataformaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPlataforma[] | ListEnumTipoPlataformaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPlataformaFilter<$PrismaModel> | $Enums.TipoPlataforma
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumVinculoPlataformaFilter<$PrismaModel = never> = {
    equals?: $Enums.VinculoPlataforma | EnumVinculoPlataformaFieldRefInput<$PrismaModel>
    in?: $Enums.VinculoPlataforma[] | ListEnumVinculoPlataformaFieldRefInput<$PrismaModel>
    notIn?: $Enums.VinculoPlataforma[] | ListEnumVinculoPlataformaFieldRefInput<$PrismaModel>
    not?: NestedEnumVinculoPlataformaFilter<$PrismaModel> | $Enums.VinculoPlataforma
  }

  export type NestedEnumTipoPlataformaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPlataforma | EnumTipoPlataformaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPlataforma[] | ListEnumTipoPlataformaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPlataforma[] | ListEnumTipoPlataformaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPlataformaWithAggregatesFilter<$PrismaModel> | $Enums.TipoPlataforma
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoPlataformaFilter<$PrismaModel>
    _max?: NestedEnumTipoPlataformaFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedEnumVinculoPlataformaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VinculoPlataforma | EnumVinculoPlataformaFieldRefInput<$PrismaModel>
    in?: $Enums.VinculoPlataforma[] | ListEnumVinculoPlataformaFieldRefInput<$PrismaModel>
    notIn?: $Enums.VinculoPlataforma[] | ListEnumVinculoPlataformaFieldRefInput<$PrismaModel>
    not?: NestedEnumVinculoPlataformaWithAggregatesFilter<$PrismaModel> | $Enums.VinculoPlataforma
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVinculoPlataformaFilter<$PrismaModel>
    _max?: NestedEnumVinculoPlataformaFilter<$PrismaModel>
  }

  export type NestedEnumStatusTicketFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTicket | EnumStatusTicketFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTicket[] | ListEnumStatusTicketFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTicket[] | ListEnumStatusTicketFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTicketFilter<$PrismaModel> | $Enums.StatusTicket
  }

  export type NestedEnumStatusTicketWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTicket | EnumStatusTicketFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTicket[] | ListEnumStatusTicketFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTicket[] | ListEnumStatusTicketFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTicketWithAggregatesFilter<$PrismaModel> | $Enums.StatusTicket
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusTicketFilter<$PrismaModel>
    _max?: NestedEnumStatusTicketFilter<$PrismaModel>
  }

  export type PlataformaCreateWithoutClienteInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoPlataforma
    urlLogin?: string | null
    emailUtilizado?: string | null
    senhaEncriptada: string
    custoMensal?: number
    ultimaAtualizacaoSenha?: Date | string
    frequenciaAtualizacao?: number
    observacoes?: string | null
    vinculo?: $Enums.VinculoPlataforma
    createdAt?: Date | string
    updatedAt?: Date | string
    acessos?: AcessoPlataformaCreateNestedManyWithoutPlataformaInput
    historicoSenhas?: HistoricoSenhaCreateNestedManyWithoutPlataformaInput
    custos?: CustoPlataformaCreateNestedManyWithoutPlataformaInput
    visualizacoesSenha?: VisualizacaoSenhaCreateNestedManyWithoutPlataformaInput
    ticketsSenha?: TicketSenhaCreateNestedManyWithoutPlataformaInput
  }

  export type PlataformaUncheckedCreateWithoutClienteInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoPlataforma
    urlLogin?: string | null
    emailUtilizado?: string | null
    senhaEncriptada: string
    custoMensal?: number
    ultimaAtualizacaoSenha?: Date | string
    frequenciaAtualizacao?: number
    observacoes?: string | null
    vinculo?: $Enums.VinculoPlataforma
    createdAt?: Date | string
    updatedAt?: Date | string
    acessos?: AcessoPlataformaUncheckedCreateNestedManyWithoutPlataformaInput
    historicoSenhas?: HistoricoSenhaUncheckedCreateNestedManyWithoutPlataformaInput
    custos?: CustoPlataformaUncheckedCreateNestedManyWithoutPlataformaInput
    visualizacoesSenha?: VisualizacaoSenhaUncheckedCreateNestedManyWithoutPlataformaInput
    ticketsSenha?: TicketSenhaUncheckedCreateNestedManyWithoutPlataformaInput
  }

  export type PlataformaCreateOrConnectWithoutClienteInput = {
    where: PlataformaWhereUniqueInput
    create: XOR<PlataformaCreateWithoutClienteInput, PlataformaUncheckedCreateWithoutClienteInput>
  }

  export type PlataformaCreateManyClienteInputEnvelope = {
    data: PlataformaCreateManyClienteInput | PlataformaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type PlataformaUpsertWithWhereUniqueWithoutClienteInput = {
    where: PlataformaWhereUniqueInput
    update: XOR<PlataformaUpdateWithoutClienteInput, PlataformaUncheckedUpdateWithoutClienteInput>
    create: XOR<PlataformaCreateWithoutClienteInput, PlataformaUncheckedCreateWithoutClienteInput>
  }

  export type PlataformaUpdateWithWhereUniqueWithoutClienteInput = {
    where: PlataformaWhereUniqueInput
    data: XOR<PlataformaUpdateWithoutClienteInput, PlataformaUncheckedUpdateWithoutClienteInput>
  }

  export type PlataformaUpdateManyWithWhereWithoutClienteInput = {
    where: PlataformaScalarWhereInput
    data: XOR<PlataformaUpdateManyMutationInput, PlataformaUncheckedUpdateManyWithoutClienteInput>
  }

  export type PlataformaScalarWhereInput = {
    AND?: PlataformaScalarWhereInput | PlataformaScalarWhereInput[]
    OR?: PlataformaScalarWhereInput[]
    NOT?: PlataformaScalarWhereInput | PlataformaScalarWhereInput[]
    id?: StringFilter<"Plataforma"> | string
    nome?: StringFilter<"Plataforma"> | string
    tipo?: EnumTipoPlataformaFilter<"Plataforma"> | $Enums.TipoPlataforma
    urlLogin?: StringNullableFilter<"Plataforma"> | string | null
    emailUtilizado?: StringNullableFilter<"Plataforma"> | string | null
    senhaEncriptada?: StringFilter<"Plataforma"> | string
    custoMensal?: FloatFilter<"Plataforma"> | number
    ultimaAtualizacaoSenha?: DateTimeFilter<"Plataforma"> | Date | string
    frequenciaAtualizacao?: IntFilter<"Plataforma"> | number
    observacoes?: StringNullableFilter<"Plataforma"> | string | null
    vinculo?: EnumVinculoPlataformaFilter<"Plataforma"> | $Enums.VinculoPlataforma
    clienteId?: StringNullableFilter<"Plataforma"> | string | null
    createdAt?: DateTimeFilter<"Plataforma"> | Date | string
    updatedAt?: DateTimeFilter<"Plataforma"> | Date | string
  }

  export type AcessoPlataformaCreateWithoutColaboradorInput = {
    id?: string
    dataInicio?: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    plataforma: PlataformaCreateNestedOneWithoutAcessosInput
  }

  export type AcessoPlataformaUncheckedCreateWithoutColaboradorInput = {
    id?: string
    plataformaId: string
    dataInicio?: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcessoPlataformaCreateOrConnectWithoutColaboradorInput = {
    where: AcessoPlataformaWhereUniqueInput
    create: XOR<AcessoPlataformaCreateWithoutColaboradorInput, AcessoPlataformaUncheckedCreateWithoutColaboradorInput>
  }

  export type AcessoPlataformaCreateManyColaboradorInputEnvelope = {
    data: AcessoPlataformaCreateManyColaboradorInput | AcessoPlataformaCreateManyColaboradorInput[]
    skipDuplicates?: boolean
  }

  export type HistoricoSenhaCreateWithoutColaboradorInput = {
    id?: string
    senhaAnterior?: string | null
    novaSenha: string
    motivoMudanca?: string | null
    dataAlteracao?: Date | string
    notificouColaboradores?: boolean
    tipoNotificacao?: string | null
    plataforma: PlataformaCreateNestedOneWithoutHistoricoSenhasInput
  }

  export type HistoricoSenhaUncheckedCreateWithoutColaboradorInput = {
    id?: string
    plataformaId: string
    senhaAnterior?: string | null
    novaSenha: string
    motivoMudanca?: string | null
    dataAlteracao?: Date | string
    notificouColaboradores?: boolean
    tipoNotificacao?: string | null
  }

  export type HistoricoSenhaCreateOrConnectWithoutColaboradorInput = {
    where: HistoricoSenhaWhereUniqueInput
    create: XOR<HistoricoSenhaCreateWithoutColaboradorInput, HistoricoSenhaUncheckedCreateWithoutColaboradorInput>
  }

  export type HistoricoSenhaCreateManyColaboradorInputEnvelope = {
    data: HistoricoSenhaCreateManyColaboradorInput | HistoricoSenhaCreateManyColaboradorInput[]
    skipDuplicates?: boolean
  }

  export type VisualizacaoSenhaCreateWithoutColaboradorInput = {
    id?: string
    dataVisualizacao?: Date | string
    ip?: string | null
    userAgent?: string | null
    plataforma: PlataformaCreateNestedOneWithoutVisualizacoesSenhaInput
  }

  export type VisualizacaoSenhaUncheckedCreateWithoutColaboradorInput = {
    id?: string
    plataformaId: string
    dataVisualizacao?: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type VisualizacaoSenhaCreateOrConnectWithoutColaboradorInput = {
    where: VisualizacaoSenhaWhereUniqueInput
    create: XOR<VisualizacaoSenhaCreateWithoutColaboradorInput, VisualizacaoSenhaUncheckedCreateWithoutColaboradorInput>
  }

  export type VisualizacaoSenhaCreateManyColaboradorInputEnvelope = {
    data: VisualizacaoSenhaCreateManyColaboradorInput | VisualizacaoSenhaCreateManyColaboradorInput[]
    skipDuplicates?: boolean
  }

  export type TicketSenhaCreateWithoutColaboradorInput = {
    id?: string
    descricaoProblema: string
    status?: $Enums.StatusTicket
    dataAbertura?: Date | string
    dataResolucao?: Date | string | null
    observacoesResolucao?: string | null
    plataforma: PlataformaCreateNestedOneWithoutTicketsSenhaInput
  }

  export type TicketSenhaUncheckedCreateWithoutColaboradorInput = {
    id?: string
    plataformaId: string
    descricaoProblema: string
    status?: $Enums.StatusTicket
    dataAbertura?: Date | string
    dataResolucao?: Date | string | null
    observacoesResolucao?: string | null
  }

  export type TicketSenhaCreateOrConnectWithoutColaboradorInput = {
    where: TicketSenhaWhereUniqueInput
    create: XOR<TicketSenhaCreateWithoutColaboradorInput, TicketSenhaUncheckedCreateWithoutColaboradorInput>
  }

  export type TicketSenhaCreateManyColaboradorInputEnvelope = {
    data: TicketSenhaCreateManyColaboradorInput | TicketSenhaCreateManyColaboradorInput[]
    skipDuplicates?: boolean
  }

  export type AcessoPlataformaUpsertWithWhereUniqueWithoutColaboradorInput = {
    where: AcessoPlataformaWhereUniqueInput
    update: XOR<AcessoPlataformaUpdateWithoutColaboradorInput, AcessoPlataformaUncheckedUpdateWithoutColaboradorInput>
    create: XOR<AcessoPlataformaCreateWithoutColaboradorInput, AcessoPlataformaUncheckedCreateWithoutColaboradorInput>
  }

  export type AcessoPlataformaUpdateWithWhereUniqueWithoutColaboradorInput = {
    where: AcessoPlataformaWhereUniqueInput
    data: XOR<AcessoPlataformaUpdateWithoutColaboradorInput, AcessoPlataformaUncheckedUpdateWithoutColaboradorInput>
  }

  export type AcessoPlataformaUpdateManyWithWhereWithoutColaboradorInput = {
    where: AcessoPlataformaScalarWhereInput
    data: XOR<AcessoPlataformaUpdateManyMutationInput, AcessoPlataformaUncheckedUpdateManyWithoutColaboradorInput>
  }

  export type AcessoPlataformaScalarWhereInput = {
    AND?: AcessoPlataformaScalarWhereInput | AcessoPlataformaScalarWhereInput[]
    OR?: AcessoPlataformaScalarWhereInput[]
    NOT?: AcessoPlataformaScalarWhereInput | AcessoPlataformaScalarWhereInput[]
    id?: StringFilter<"AcessoPlataforma"> | string
    colaboradorId?: StringFilter<"AcessoPlataforma"> | string
    plataformaId?: StringFilter<"AcessoPlataforma"> | string
    dataInicio?: DateTimeFilter<"AcessoPlataforma"> | Date | string
    dataFim?: DateTimeNullableFilter<"AcessoPlataforma"> | Date | string | null
    ativo?: BoolFilter<"AcessoPlataforma"> | boolean
    createdAt?: DateTimeFilter<"AcessoPlataforma"> | Date | string
    updatedAt?: DateTimeFilter<"AcessoPlataforma"> | Date | string
  }

  export type HistoricoSenhaUpsertWithWhereUniqueWithoutColaboradorInput = {
    where: HistoricoSenhaWhereUniqueInput
    update: XOR<HistoricoSenhaUpdateWithoutColaboradorInput, HistoricoSenhaUncheckedUpdateWithoutColaboradorInput>
    create: XOR<HistoricoSenhaCreateWithoutColaboradorInput, HistoricoSenhaUncheckedCreateWithoutColaboradorInput>
  }

  export type HistoricoSenhaUpdateWithWhereUniqueWithoutColaboradorInput = {
    where: HistoricoSenhaWhereUniqueInput
    data: XOR<HistoricoSenhaUpdateWithoutColaboradorInput, HistoricoSenhaUncheckedUpdateWithoutColaboradorInput>
  }

  export type HistoricoSenhaUpdateManyWithWhereWithoutColaboradorInput = {
    where: HistoricoSenhaScalarWhereInput
    data: XOR<HistoricoSenhaUpdateManyMutationInput, HistoricoSenhaUncheckedUpdateManyWithoutColaboradorInput>
  }

  export type HistoricoSenhaScalarWhereInput = {
    AND?: HistoricoSenhaScalarWhereInput | HistoricoSenhaScalarWhereInput[]
    OR?: HistoricoSenhaScalarWhereInput[]
    NOT?: HistoricoSenhaScalarWhereInput | HistoricoSenhaScalarWhereInput[]
    id?: StringFilter<"HistoricoSenha"> | string
    plataformaId?: StringFilter<"HistoricoSenha"> | string
    colaboradorId?: StringNullableFilter<"HistoricoSenha"> | string | null
    senhaAnterior?: StringNullableFilter<"HistoricoSenha"> | string | null
    novaSenha?: StringFilter<"HistoricoSenha"> | string
    motivoMudanca?: StringNullableFilter<"HistoricoSenha"> | string | null
    dataAlteracao?: DateTimeFilter<"HistoricoSenha"> | Date | string
    notificouColaboradores?: BoolFilter<"HistoricoSenha"> | boolean
    tipoNotificacao?: StringNullableFilter<"HistoricoSenha"> | string | null
  }

  export type VisualizacaoSenhaUpsertWithWhereUniqueWithoutColaboradorInput = {
    where: VisualizacaoSenhaWhereUniqueInput
    update: XOR<VisualizacaoSenhaUpdateWithoutColaboradorInput, VisualizacaoSenhaUncheckedUpdateWithoutColaboradorInput>
    create: XOR<VisualizacaoSenhaCreateWithoutColaboradorInput, VisualizacaoSenhaUncheckedCreateWithoutColaboradorInput>
  }

  export type VisualizacaoSenhaUpdateWithWhereUniqueWithoutColaboradorInput = {
    where: VisualizacaoSenhaWhereUniqueInput
    data: XOR<VisualizacaoSenhaUpdateWithoutColaboradorInput, VisualizacaoSenhaUncheckedUpdateWithoutColaboradorInput>
  }

  export type VisualizacaoSenhaUpdateManyWithWhereWithoutColaboradorInput = {
    where: VisualizacaoSenhaScalarWhereInput
    data: XOR<VisualizacaoSenhaUpdateManyMutationInput, VisualizacaoSenhaUncheckedUpdateManyWithoutColaboradorInput>
  }

  export type VisualizacaoSenhaScalarWhereInput = {
    AND?: VisualizacaoSenhaScalarWhereInput | VisualizacaoSenhaScalarWhereInput[]
    OR?: VisualizacaoSenhaScalarWhereInput[]
    NOT?: VisualizacaoSenhaScalarWhereInput | VisualizacaoSenhaScalarWhereInput[]
    id?: StringFilter<"VisualizacaoSenha"> | string
    plataformaId?: StringFilter<"VisualizacaoSenha"> | string
    colaboradorId?: StringFilter<"VisualizacaoSenha"> | string
    dataVisualizacao?: DateTimeFilter<"VisualizacaoSenha"> | Date | string
    ip?: StringNullableFilter<"VisualizacaoSenha"> | string | null
    userAgent?: StringNullableFilter<"VisualizacaoSenha"> | string | null
  }

  export type TicketSenhaUpsertWithWhereUniqueWithoutColaboradorInput = {
    where: TicketSenhaWhereUniqueInput
    update: XOR<TicketSenhaUpdateWithoutColaboradorInput, TicketSenhaUncheckedUpdateWithoutColaboradorInput>
    create: XOR<TicketSenhaCreateWithoutColaboradorInput, TicketSenhaUncheckedCreateWithoutColaboradorInput>
  }

  export type TicketSenhaUpdateWithWhereUniqueWithoutColaboradorInput = {
    where: TicketSenhaWhereUniqueInput
    data: XOR<TicketSenhaUpdateWithoutColaboradorInput, TicketSenhaUncheckedUpdateWithoutColaboradorInput>
  }

  export type TicketSenhaUpdateManyWithWhereWithoutColaboradorInput = {
    where: TicketSenhaScalarWhereInput
    data: XOR<TicketSenhaUpdateManyMutationInput, TicketSenhaUncheckedUpdateManyWithoutColaboradorInput>
  }

  export type TicketSenhaScalarWhereInput = {
    AND?: TicketSenhaScalarWhereInput | TicketSenhaScalarWhereInput[]
    OR?: TicketSenhaScalarWhereInput[]
    NOT?: TicketSenhaScalarWhereInput | TicketSenhaScalarWhereInput[]
    id?: StringFilter<"TicketSenha"> | string
    plataformaId?: StringFilter<"TicketSenha"> | string
    colaboradorId?: StringFilter<"TicketSenha"> | string
    descricaoProblema?: StringFilter<"TicketSenha"> | string
    status?: EnumStatusTicketFilter<"TicketSenha"> | $Enums.StatusTicket
    dataAbertura?: DateTimeFilter<"TicketSenha"> | Date | string
    dataResolucao?: DateTimeNullableFilter<"TicketSenha"> | Date | string | null
    observacoesResolucao?: StringNullableFilter<"TicketSenha"> | string | null
  }

  export type ClienteCreateWithoutPlataformasInput = {
    id?: string
    nome: string
    email?: string | null
    telefone?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUncheckedCreateWithoutPlataformasInput = {
    id?: string
    nome: string
    email?: string | null
    telefone?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteCreateOrConnectWithoutPlataformasInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutPlataformasInput, ClienteUncheckedCreateWithoutPlataformasInput>
  }

  export type AcessoPlataformaCreateWithoutPlataformaInput = {
    id?: string
    dataInicio?: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    colaborador: ColaboradorCreateNestedOneWithoutAcessosInput
  }

  export type AcessoPlataformaUncheckedCreateWithoutPlataformaInput = {
    id?: string
    colaboradorId: string
    dataInicio?: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcessoPlataformaCreateOrConnectWithoutPlataformaInput = {
    where: AcessoPlataformaWhereUniqueInput
    create: XOR<AcessoPlataformaCreateWithoutPlataformaInput, AcessoPlataformaUncheckedCreateWithoutPlataformaInput>
  }

  export type AcessoPlataformaCreateManyPlataformaInputEnvelope = {
    data: AcessoPlataformaCreateManyPlataformaInput | AcessoPlataformaCreateManyPlataformaInput[]
    skipDuplicates?: boolean
  }

  export type HistoricoSenhaCreateWithoutPlataformaInput = {
    id?: string
    senhaAnterior?: string | null
    novaSenha: string
    motivoMudanca?: string | null
    dataAlteracao?: Date | string
    notificouColaboradores?: boolean
    tipoNotificacao?: string | null
    colaborador?: ColaboradorCreateNestedOneWithoutHistoricoSenhasInput
  }

  export type HistoricoSenhaUncheckedCreateWithoutPlataformaInput = {
    id?: string
    colaboradorId?: string | null
    senhaAnterior?: string | null
    novaSenha: string
    motivoMudanca?: string | null
    dataAlteracao?: Date | string
    notificouColaboradores?: boolean
    tipoNotificacao?: string | null
  }

  export type HistoricoSenhaCreateOrConnectWithoutPlataformaInput = {
    where: HistoricoSenhaWhereUniqueInput
    create: XOR<HistoricoSenhaCreateWithoutPlataformaInput, HistoricoSenhaUncheckedCreateWithoutPlataformaInput>
  }

  export type HistoricoSenhaCreateManyPlataformaInputEnvelope = {
    data: HistoricoSenhaCreateManyPlataformaInput | HistoricoSenhaCreateManyPlataformaInput[]
    skipDuplicates?: boolean
  }

  export type CustoPlataformaCreateWithoutPlataformaInput = {
    id?: string
    valor: number
    moeda?: string
    dataInicio: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustoPlataformaUncheckedCreateWithoutPlataformaInput = {
    id?: string
    valor: number
    moeda?: string
    dataInicio: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustoPlataformaCreateOrConnectWithoutPlataformaInput = {
    where: CustoPlataformaWhereUniqueInput
    create: XOR<CustoPlataformaCreateWithoutPlataformaInput, CustoPlataformaUncheckedCreateWithoutPlataformaInput>
  }

  export type CustoPlataformaCreateManyPlataformaInputEnvelope = {
    data: CustoPlataformaCreateManyPlataformaInput | CustoPlataformaCreateManyPlataformaInput[]
    skipDuplicates?: boolean
  }

  export type VisualizacaoSenhaCreateWithoutPlataformaInput = {
    id?: string
    dataVisualizacao?: Date | string
    ip?: string | null
    userAgent?: string | null
    colaborador: ColaboradorCreateNestedOneWithoutVisualizacoesSenhaInput
  }

  export type VisualizacaoSenhaUncheckedCreateWithoutPlataformaInput = {
    id?: string
    colaboradorId: string
    dataVisualizacao?: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type VisualizacaoSenhaCreateOrConnectWithoutPlataformaInput = {
    where: VisualizacaoSenhaWhereUniqueInput
    create: XOR<VisualizacaoSenhaCreateWithoutPlataformaInput, VisualizacaoSenhaUncheckedCreateWithoutPlataformaInput>
  }

  export type VisualizacaoSenhaCreateManyPlataformaInputEnvelope = {
    data: VisualizacaoSenhaCreateManyPlataformaInput | VisualizacaoSenhaCreateManyPlataformaInput[]
    skipDuplicates?: boolean
  }

  export type TicketSenhaCreateWithoutPlataformaInput = {
    id?: string
    descricaoProblema: string
    status?: $Enums.StatusTicket
    dataAbertura?: Date | string
    dataResolucao?: Date | string | null
    observacoesResolucao?: string | null
    colaborador: ColaboradorCreateNestedOneWithoutTicketsSenhaInput
  }

  export type TicketSenhaUncheckedCreateWithoutPlataformaInput = {
    id?: string
    colaboradorId: string
    descricaoProblema: string
    status?: $Enums.StatusTicket
    dataAbertura?: Date | string
    dataResolucao?: Date | string | null
    observacoesResolucao?: string | null
  }

  export type TicketSenhaCreateOrConnectWithoutPlataformaInput = {
    where: TicketSenhaWhereUniqueInput
    create: XOR<TicketSenhaCreateWithoutPlataformaInput, TicketSenhaUncheckedCreateWithoutPlataformaInput>
  }

  export type TicketSenhaCreateManyPlataformaInputEnvelope = {
    data: TicketSenhaCreateManyPlataformaInput | TicketSenhaCreateManyPlataformaInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutPlataformasInput = {
    update: XOR<ClienteUpdateWithoutPlataformasInput, ClienteUncheckedUpdateWithoutPlataformasInput>
    create: XOR<ClienteCreateWithoutPlataformasInput, ClienteUncheckedCreateWithoutPlataformasInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutPlataformasInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutPlataformasInput, ClienteUncheckedUpdateWithoutPlataformasInput>
  }

  export type ClienteUpdateWithoutPlataformasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateWithoutPlataformasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcessoPlataformaUpsertWithWhereUniqueWithoutPlataformaInput = {
    where: AcessoPlataformaWhereUniqueInput
    update: XOR<AcessoPlataformaUpdateWithoutPlataformaInput, AcessoPlataformaUncheckedUpdateWithoutPlataformaInput>
    create: XOR<AcessoPlataformaCreateWithoutPlataformaInput, AcessoPlataformaUncheckedCreateWithoutPlataformaInput>
  }

  export type AcessoPlataformaUpdateWithWhereUniqueWithoutPlataformaInput = {
    where: AcessoPlataformaWhereUniqueInput
    data: XOR<AcessoPlataformaUpdateWithoutPlataformaInput, AcessoPlataformaUncheckedUpdateWithoutPlataformaInput>
  }

  export type AcessoPlataformaUpdateManyWithWhereWithoutPlataformaInput = {
    where: AcessoPlataformaScalarWhereInput
    data: XOR<AcessoPlataformaUpdateManyMutationInput, AcessoPlataformaUncheckedUpdateManyWithoutPlataformaInput>
  }

  export type HistoricoSenhaUpsertWithWhereUniqueWithoutPlataformaInput = {
    where: HistoricoSenhaWhereUniqueInput
    update: XOR<HistoricoSenhaUpdateWithoutPlataformaInput, HistoricoSenhaUncheckedUpdateWithoutPlataformaInput>
    create: XOR<HistoricoSenhaCreateWithoutPlataformaInput, HistoricoSenhaUncheckedCreateWithoutPlataformaInput>
  }

  export type HistoricoSenhaUpdateWithWhereUniqueWithoutPlataformaInput = {
    where: HistoricoSenhaWhereUniqueInput
    data: XOR<HistoricoSenhaUpdateWithoutPlataformaInput, HistoricoSenhaUncheckedUpdateWithoutPlataformaInput>
  }

  export type HistoricoSenhaUpdateManyWithWhereWithoutPlataformaInput = {
    where: HistoricoSenhaScalarWhereInput
    data: XOR<HistoricoSenhaUpdateManyMutationInput, HistoricoSenhaUncheckedUpdateManyWithoutPlataformaInput>
  }

  export type CustoPlataformaUpsertWithWhereUniqueWithoutPlataformaInput = {
    where: CustoPlataformaWhereUniqueInput
    update: XOR<CustoPlataformaUpdateWithoutPlataformaInput, CustoPlataformaUncheckedUpdateWithoutPlataformaInput>
    create: XOR<CustoPlataformaCreateWithoutPlataformaInput, CustoPlataformaUncheckedCreateWithoutPlataformaInput>
  }

  export type CustoPlataformaUpdateWithWhereUniqueWithoutPlataformaInput = {
    where: CustoPlataformaWhereUniqueInput
    data: XOR<CustoPlataformaUpdateWithoutPlataformaInput, CustoPlataformaUncheckedUpdateWithoutPlataformaInput>
  }

  export type CustoPlataformaUpdateManyWithWhereWithoutPlataformaInput = {
    where: CustoPlataformaScalarWhereInput
    data: XOR<CustoPlataformaUpdateManyMutationInput, CustoPlataformaUncheckedUpdateManyWithoutPlataformaInput>
  }

  export type CustoPlataformaScalarWhereInput = {
    AND?: CustoPlataformaScalarWhereInput | CustoPlataformaScalarWhereInput[]
    OR?: CustoPlataformaScalarWhereInput[]
    NOT?: CustoPlataformaScalarWhereInput | CustoPlataformaScalarWhereInput[]
    id?: StringFilter<"CustoPlataforma"> | string
    plataformaId?: StringFilter<"CustoPlataforma"> | string
    valor?: FloatFilter<"CustoPlataforma"> | number
    moeda?: StringFilter<"CustoPlataforma"> | string
    dataInicio?: DateTimeFilter<"CustoPlataforma"> | Date | string
    dataFim?: DateTimeNullableFilter<"CustoPlataforma"> | Date | string | null
    ativo?: BoolFilter<"CustoPlataforma"> | boolean
    observacoes?: StringNullableFilter<"CustoPlataforma"> | string | null
    createdAt?: DateTimeFilter<"CustoPlataforma"> | Date | string
    updatedAt?: DateTimeFilter<"CustoPlataforma"> | Date | string
  }

  export type VisualizacaoSenhaUpsertWithWhereUniqueWithoutPlataformaInput = {
    where: VisualizacaoSenhaWhereUniqueInput
    update: XOR<VisualizacaoSenhaUpdateWithoutPlataformaInput, VisualizacaoSenhaUncheckedUpdateWithoutPlataformaInput>
    create: XOR<VisualizacaoSenhaCreateWithoutPlataformaInput, VisualizacaoSenhaUncheckedCreateWithoutPlataformaInput>
  }

  export type VisualizacaoSenhaUpdateWithWhereUniqueWithoutPlataformaInput = {
    where: VisualizacaoSenhaWhereUniqueInput
    data: XOR<VisualizacaoSenhaUpdateWithoutPlataformaInput, VisualizacaoSenhaUncheckedUpdateWithoutPlataformaInput>
  }

  export type VisualizacaoSenhaUpdateManyWithWhereWithoutPlataformaInput = {
    where: VisualizacaoSenhaScalarWhereInput
    data: XOR<VisualizacaoSenhaUpdateManyMutationInput, VisualizacaoSenhaUncheckedUpdateManyWithoutPlataformaInput>
  }

  export type TicketSenhaUpsertWithWhereUniqueWithoutPlataformaInput = {
    where: TicketSenhaWhereUniqueInput
    update: XOR<TicketSenhaUpdateWithoutPlataformaInput, TicketSenhaUncheckedUpdateWithoutPlataformaInput>
    create: XOR<TicketSenhaCreateWithoutPlataformaInput, TicketSenhaUncheckedCreateWithoutPlataformaInput>
  }

  export type TicketSenhaUpdateWithWhereUniqueWithoutPlataformaInput = {
    where: TicketSenhaWhereUniqueInput
    data: XOR<TicketSenhaUpdateWithoutPlataformaInput, TicketSenhaUncheckedUpdateWithoutPlataformaInput>
  }

  export type TicketSenhaUpdateManyWithWhereWithoutPlataformaInput = {
    where: TicketSenhaScalarWhereInput
    data: XOR<TicketSenhaUpdateManyMutationInput, TicketSenhaUncheckedUpdateManyWithoutPlataformaInput>
  }

  export type ColaboradorCreateWithoutAcessosInput = {
    id?: string
    nome: string
    email: string
    cargo: string
    status?: $Enums.StatusColaborador
    dataEntrada?: Date | string
    dataSaida?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    historicoSenhas?: HistoricoSenhaCreateNestedManyWithoutColaboradorInput
    visualizacoesSenha?: VisualizacaoSenhaCreateNestedManyWithoutColaboradorInput
    ticketsSenha?: TicketSenhaCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorUncheckedCreateWithoutAcessosInput = {
    id?: string
    nome: string
    email: string
    cargo: string
    status?: $Enums.StatusColaborador
    dataEntrada?: Date | string
    dataSaida?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    historicoSenhas?: HistoricoSenhaUncheckedCreateNestedManyWithoutColaboradorInput
    visualizacoesSenha?: VisualizacaoSenhaUncheckedCreateNestedManyWithoutColaboradorInput
    ticketsSenha?: TicketSenhaUncheckedCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorCreateOrConnectWithoutAcessosInput = {
    where: ColaboradorWhereUniqueInput
    create: XOR<ColaboradorCreateWithoutAcessosInput, ColaboradorUncheckedCreateWithoutAcessosInput>
  }

  export type PlataformaCreateWithoutAcessosInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoPlataforma
    urlLogin?: string | null
    emailUtilizado?: string | null
    senhaEncriptada: string
    custoMensal?: number
    ultimaAtualizacaoSenha?: Date | string
    frequenciaAtualizacao?: number
    observacoes?: string | null
    vinculo?: $Enums.VinculoPlataforma
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente?: ClienteCreateNestedOneWithoutPlataformasInput
    historicoSenhas?: HistoricoSenhaCreateNestedManyWithoutPlataformaInput
    custos?: CustoPlataformaCreateNestedManyWithoutPlataformaInput
    visualizacoesSenha?: VisualizacaoSenhaCreateNestedManyWithoutPlataformaInput
    ticketsSenha?: TicketSenhaCreateNestedManyWithoutPlataformaInput
  }

  export type PlataformaUncheckedCreateWithoutAcessosInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoPlataforma
    urlLogin?: string | null
    emailUtilizado?: string | null
    senhaEncriptada: string
    custoMensal?: number
    ultimaAtualizacaoSenha?: Date | string
    frequenciaAtualizacao?: number
    observacoes?: string | null
    vinculo?: $Enums.VinculoPlataforma
    clienteId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    historicoSenhas?: HistoricoSenhaUncheckedCreateNestedManyWithoutPlataformaInput
    custos?: CustoPlataformaUncheckedCreateNestedManyWithoutPlataformaInput
    visualizacoesSenha?: VisualizacaoSenhaUncheckedCreateNestedManyWithoutPlataformaInput
    ticketsSenha?: TicketSenhaUncheckedCreateNestedManyWithoutPlataformaInput
  }

  export type PlataformaCreateOrConnectWithoutAcessosInput = {
    where: PlataformaWhereUniqueInput
    create: XOR<PlataformaCreateWithoutAcessosInput, PlataformaUncheckedCreateWithoutAcessosInput>
  }

  export type ColaboradorUpsertWithoutAcessosInput = {
    update: XOR<ColaboradorUpdateWithoutAcessosInput, ColaboradorUncheckedUpdateWithoutAcessosInput>
    create: XOR<ColaboradorCreateWithoutAcessosInput, ColaboradorUncheckedCreateWithoutAcessosInput>
    where?: ColaboradorWhereInput
  }

  export type ColaboradorUpdateToOneWithWhereWithoutAcessosInput = {
    where?: ColaboradorWhereInput
    data: XOR<ColaboradorUpdateWithoutAcessosInput, ColaboradorUncheckedUpdateWithoutAcessosInput>
  }

  export type ColaboradorUpdateWithoutAcessosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusColaboradorFieldUpdateOperationsInput | $Enums.StatusColaborador
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historicoSenhas?: HistoricoSenhaUpdateManyWithoutColaboradorNestedInput
    visualizacoesSenha?: VisualizacaoSenhaUpdateManyWithoutColaboradorNestedInput
    ticketsSenha?: TicketSenhaUpdateManyWithoutColaboradorNestedInput
  }

  export type ColaboradorUncheckedUpdateWithoutAcessosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusColaboradorFieldUpdateOperationsInput | $Enums.StatusColaborador
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historicoSenhas?: HistoricoSenhaUncheckedUpdateManyWithoutColaboradorNestedInput
    visualizacoesSenha?: VisualizacaoSenhaUncheckedUpdateManyWithoutColaboradorNestedInput
    ticketsSenha?: TicketSenhaUncheckedUpdateManyWithoutColaboradorNestedInput
  }

  export type PlataformaUpsertWithoutAcessosInput = {
    update: XOR<PlataformaUpdateWithoutAcessosInput, PlataformaUncheckedUpdateWithoutAcessosInput>
    create: XOR<PlataformaCreateWithoutAcessosInput, PlataformaUncheckedCreateWithoutAcessosInput>
    where?: PlataformaWhereInput
  }

  export type PlataformaUpdateToOneWithWhereWithoutAcessosInput = {
    where?: PlataformaWhereInput
    data: XOR<PlataformaUpdateWithoutAcessosInput, PlataformaUncheckedUpdateWithoutAcessosInput>
  }

  export type PlataformaUpdateWithoutAcessosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPlataformaFieldUpdateOperationsInput | $Enums.TipoPlataforma
    urlLogin?: NullableStringFieldUpdateOperationsInput | string | null
    emailUtilizado?: NullableStringFieldUpdateOperationsInput | string | null
    senhaEncriptada?: StringFieldUpdateOperationsInput | string
    custoMensal?: FloatFieldUpdateOperationsInput | number
    ultimaAtualizacaoSenha?: DateTimeFieldUpdateOperationsInput | Date | string
    frequenciaAtualizacao?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    vinculo?: EnumVinculoPlataformaFieldUpdateOperationsInput | $Enums.VinculoPlataforma
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneWithoutPlataformasNestedInput
    historicoSenhas?: HistoricoSenhaUpdateManyWithoutPlataformaNestedInput
    custos?: CustoPlataformaUpdateManyWithoutPlataformaNestedInput
    visualizacoesSenha?: VisualizacaoSenhaUpdateManyWithoutPlataformaNestedInput
    ticketsSenha?: TicketSenhaUpdateManyWithoutPlataformaNestedInput
  }

  export type PlataformaUncheckedUpdateWithoutAcessosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPlataformaFieldUpdateOperationsInput | $Enums.TipoPlataforma
    urlLogin?: NullableStringFieldUpdateOperationsInput | string | null
    emailUtilizado?: NullableStringFieldUpdateOperationsInput | string | null
    senhaEncriptada?: StringFieldUpdateOperationsInput | string
    custoMensal?: FloatFieldUpdateOperationsInput | number
    ultimaAtualizacaoSenha?: DateTimeFieldUpdateOperationsInput | Date | string
    frequenciaAtualizacao?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    vinculo?: EnumVinculoPlataformaFieldUpdateOperationsInput | $Enums.VinculoPlataforma
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historicoSenhas?: HistoricoSenhaUncheckedUpdateManyWithoutPlataformaNestedInput
    custos?: CustoPlataformaUncheckedUpdateManyWithoutPlataformaNestedInput
    visualizacoesSenha?: VisualizacaoSenhaUncheckedUpdateManyWithoutPlataformaNestedInput
    ticketsSenha?: TicketSenhaUncheckedUpdateManyWithoutPlataformaNestedInput
  }

  export type PlataformaCreateWithoutHistoricoSenhasInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoPlataforma
    urlLogin?: string | null
    emailUtilizado?: string | null
    senhaEncriptada: string
    custoMensal?: number
    ultimaAtualizacaoSenha?: Date | string
    frequenciaAtualizacao?: number
    observacoes?: string | null
    vinculo?: $Enums.VinculoPlataforma
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente?: ClienteCreateNestedOneWithoutPlataformasInput
    acessos?: AcessoPlataformaCreateNestedManyWithoutPlataformaInput
    custos?: CustoPlataformaCreateNestedManyWithoutPlataformaInput
    visualizacoesSenha?: VisualizacaoSenhaCreateNestedManyWithoutPlataformaInput
    ticketsSenha?: TicketSenhaCreateNestedManyWithoutPlataformaInput
  }

  export type PlataformaUncheckedCreateWithoutHistoricoSenhasInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoPlataforma
    urlLogin?: string | null
    emailUtilizado?: string | null
    senhaEncriptada: string
    custoMensal?: number
    ultimaAtualizacaoSenha?: Date | string
    frequenciaAtualizacao?: number
    observacoes?: string | null
    vinculo?: $Enums.VinculoPlataforma
    clienteId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acessos?: AcessoPlataformaUncheckedCreateNestedManyWithoutPlataformaInput
    custos?: CustoPlataformaUncheckedCreateNestedManyWithoutPlataformaInput
    visualizacoesSenha?: VisualizacaoSenhaUncheckedCreateNestedManyWithoutPlataformaInput
    ticketsSenha?: TicketSenhaUncheckedCreateNestedManyWithoutPlataformaInput
  }

  export type PlataformaCreateOrConnectWithoutHistoricoSenhasInput = {
    where: PlataformaWhereUniqueInput
    create: XOR<PlataformaCreateWithoutHistoricoSenhasInput, PlataformaUncheckedCreateWithoutHistoricoSenhasInput>
  }

  export type ColaboradorCreateWithoutHistoricoSenhasInput = {
    id?: string
    nome: string
    email: string
    cargo: string
    status?: $Enums.StatusColaborador
    dataEntrada?: Date | string
    dataSaida?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acessos?: AcessoPlataformaCreateNestedManyWithoutColaboradorInput
    visualizacoesSenha?: VisualizacaoSenhaCreateNestedManyWithoutColaboradorInput
    ticketsSenha?: TicketSenhaCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorUncheckedCreateWithoutHistoricoSenhasInput = {
    id?: string
    nome: string
    email: string
    cargo: string
    status?: $Enums.StatusColaborador
    dataEntrada?: Date | string
    dataSaida?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acessos?: AcessoPlataformaUncheckedCreateNestedManyWithoutColaboradorInput
    visualizacoesSenha?: VisualizacaoSenhaUncheckedCreateNestedManyWithoutColaboradorInput
    ticketsSenha?: TicketSenhaUncheckedCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorCreateOrConnectWithoutHistoricoSenhasInput = {
    where: ColaboradorWhereUniqueInput
    create: XOR<ColaboradorCreateWithoutHistoricoSenhasInput, ColaboradorUncheckedCreateWithoutHistoricoSenhasInput>
  }

  export type PlataformaUpsertWithoutHistoricoSenhasInput = {
    update: XOR<PlataformaUpdateWithoutHistoricoSenhasInput, PlataformaUncheckedUpdateWithoutHistoricoSenhasInput>
    create: XOR<PlataformaCreateWithoutHistoricoSenhasInput, PlataformaUncheckedCreateWithoutHistoricoSenhasInput>
    where?: PlataformaWhereInput
  }

  export type PlataformaUpdateToOneWithWhereWithoutHistoricoSenhasInput = {
    where?: PlataformaWhereInput
    data: XOR<PlataformaUpdateWithoutHistoricoSenhasInput, PlataformaUncheckedUpdateWithoutHistoricoSenhasInput>
  }

  export type PlataformaUpdateWithoutHistoricoSenhasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPlataformaFieldUpdateOperationsInput | $Enums.TipoPlataforma
    urlLogin?: NullableStringFieldUpdateOperationsInput | string | null
    emailUtilizado?: NullableStringFieldUpdateOperationsInput | string | null
    senhaEncriptada?: StringFieldUpdateOperationsInput | string
    custoMensal?: FloatFieldUpdateOperationsInput | number
    ultimaAtualizacaoSenha?: DateTimeFieldUpdateOperationsInput | Date | string
    frequenciaAtualizacao?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    vinculo?: EnumVinculoPlataformaFieldUpdateOperationsInput | $Enums.VinculoPlataforma
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneWithoutPlataformasNestedInput
    acessos?: AcessoPlataformaUpdateManyWithoutPlataformaNestedInput
    custos?: CustoPlataformaUpdateManyWithoutPlataformaNestedInput
    visualizacoesSenha?: VisualizacaoSenhaUpdateManyWithoutPlataformaNestedInput
    ticketsSenha?: TicketSenhaUpdateManyWithoutPlataformaNestedInput
  }

  export type PlataformaUncheckedUpdateWithoutHistoricoSenhasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPlataformaFieldUpdateOperationsInput | $Enums.TipoPlataforma
    urlLogin?: NullableStringFieldUpdateOperationsInput | string | null
    emailUtilizado?: NullableStringFieldUpdateOperationsInput | string | null
    senhaEncriptada?: StringFieldUpdateOperationsInput | string
    custoMensal?: FloatFieldUpdateOperationsInput | number
    ultimaAtualizacaoSenha?: DateTimeFieldUpdateOperationsInput | Date | string
    frequenciaAtualizacao?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    vinculo?: EnumVinculoPlataformaFieldUpdateOperationsInput | $Enums.VinculoPlataforma
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acessos?: AcessoPlataformaUncheckedUpdateManyWithoutPlataformaNestedInput
    custos?: CustoPlataformaUncheckedUpdateManyWithoutPlataformaNestedInput
    visualizacoesSenha?: VisualizacaoSenhaUncheckedUpdateManyWithoutPlataformaNestedInput
    ticketsSenha?: TicketSenhaUncheckedUpdateManyWithoutPlataformaNestedInput
  }

  export type ColaboradorUpsertWithoutHistoricoSenhasInput = {
    update: XOR<ColaboradorUpdateWithoutHistoricoSenhasInput, ColaboradorUncheckedUpdateWithoutHistoricoSenhasInput>
    create: XOR<ColaboradorCreateWithoutHistoricoSenhasInput, ColaboradorUncheckedCreateWithoutHistoricoSenhasInput>
    where?: ColaboradorWhereInput
  }

  export type ColaboradorUpdateToOneWithWhereWithoutHistoricoSenhasInput = {
    where?: ColaboradorWhereInput
    data: XOR<ColaboradorUpdateWithoutHistoricoSenhasInput, ColaboradorUncheckedUpdateWithoutHistoricoSenhasInput>
  }

  export type ColaboradorUpdateWithoutHistoricoSenhasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusColaboradorFieldUpdateOperationsInput | $Enums.StatusColaborador
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acessos?: AcessoPlataformaUpdateManyWithoutColaboradorNestedInput
    visualizacoesSenha?: VisualizacaoSenhaUpdateManyWithoutColaboradorNestedInput
    ticketsSenha?: TicketSenhaUpdateManyWithoutColaboradorNestedInput
  }

  export type ColaboradorUncheckedUpdateWithoutHistoricoSenhasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusColaboradorFieldUpdateOperationsInput | $Enums.StatusColaborador
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acessos?: AcessoPlataformaUncheckedUpdateManyWithoutColaboradorNestedInput
    visualizacoesSenha?: VisualizacaoSenhaUncheckedUpdateManyWithoutColaboradorNestedInput
    ticketsSenha?: TicketSenhaUncheckedUpdateManyWithoutColaboradorNestedInput
  }

  export type PlataformaCreateWithoutVisualizacoesSenhaInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoPlataforma
    urlLogin?: string | null
    emailUtilizado?: string | null
    senhaEncriptada: string
    custoMensal?: number
    ultimaAtualizacaoSenha?: Date | string
    frequenciaAtualizacao?: number
    observacoes?: string | null
    vinculo?: $Enums.VinculoPlataforma
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente?: ClienteCreateNestedOneWithoutPlataformasInput
    acessos?: AcessoPlataformaCreateNestedManyWithoutPlataformaInput
    historicoSenhas?: HistoricoSenhaCreateNestedManyWithoutPlataformaInput
    custos?: CustoPlataformaCreateNestedManyWithoutPlataformaInput
    ticketsSenha?: TicketSenhaCreateNestedManyWithoutPlataformaInput
  }

  export type PlataformaUncheckedCreateWithoutVisualizacoesSenhaInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoPlataforma
    urlLogin?: string | null
    emailUtilizado?: string | null
    senhaEncriptada: string
    custoMensal?: number
    ultimaAtualizacaoSenha?: Date | string
    frequenciaAtualizacao?: number
    observacoes?: string | null
    vinculo?: $Enums.VinculoPlataforma
    clienteId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acessos?: AcessoPlataformaUncheckedCreateNestedManyWithoutPlataformaInput
    historicoSenhas?: HistoricoSenhaUncheckedCreateNestedManyWithoutPlataformaInput
    custos?: CustoPlataformaUncheckedCreateNestedManyWithoutPlataformaInput
    ticketsSenha?: TicketSenhaUncheckedCreateNestedManyWithoutPlataformaInput
  }

  export type PlataformaCreateOrConnectWithoutVisualizacoesSenhaInput = {
    where: PlataformaWhereUniqueInput
    create: XOR<PlataformaCreateWithoutVisualizacoesSenhaInput, PlataformaUncheckedCreateWithoutVisualizacoesSenhaInput>
  }

  export type ColaboradorCreateWithoutVisualizacoesSenhaInput = {
    id?: string
    nome: string
    email: string
    cargo: string
    status?: $Enums.StatusColaborador
    dataEntrada?: Date | string
    dataSaida?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acessos?: AcessoPlataformaCreateNestedManyWithoutColaboradorInput
    historicoSenhas?: HistoricoSenhaCreateNestedManyWithoutColaboradorInput
    ticketsSenha?: TicketSenhaCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorUncheckedCreateWithoutVisualizacoesSenhaInput = {
    id?: string
    nome: string
    email: string
    cargo: string
    status?: $Enums.StatusColaborador
    dataEntrada?: Date | string
    dataSaida?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acessos?: AcessoPlataformaUncheckedCreateNestedManyWithoutColaboradorInput
    historicoSenhas?: HistoricoSenhaUncheckedCreateNestedManyWithoutColaboradorInput
    ticketsSenha?: TicketSenhaUncheckedCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorCreateOrConnectWithoutVisualizacoesSenhaInput = {
    where: ColaboradorWhereUniqueInput
    create: XOR<ColaboradorCreateWithoutVisualizacoesSenhaInput, ColaboradorUncheckedCreateWithoutVisualizacoesSenhaInput>
  }

  export type PlataformaUpsertWithoutVisualizacoesSenhaInput = {
    update: XOR<PlataformaUpdateWithoutVisualizacoesSenhaInput, PlataformaUncheckedUpdateWithoutVisualizacoesSenhaInput>
    create: XOR<PlataformaCreateWithoutVisualizacoesSenhaInput, PlataformaUncheckedCreateWithoutVisualizacoesSenhaInput>
    where?: PlataformaWhereInput
  }

  export type PlataformaUpdateToOneWithWhereWithoutVisualizacoesSenhaInput = {
    where?: PlataformaWhereInput
    data: XOR<PlataformaUpdateWithoutVisualizacoesSenhaInput, PlataformaUncheckedUpdateWithoutVisualizacoesSenhaInput>
  }

  export type PlataformaUpdateWithoutVisualizacoesSenhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPlataformaFieldUpdateOperationsInput | $Enums.TipoPlataforma
    urlLogin?: NullableStringFieldUpdateOperationsInput | string | null
    emailUtilizado?: NullableStringFieldUpdateOperationsInput | string | null
    senhaEncriptada?: StringFieldUpdateOperationsInput | string
    custoMensal?: FloatFieldUpdateOperationsInput | number
    ultimaAtualizacaoSenha?: DateTimeFieldUpdateOperationsInput | Date | string
    frequenciaAtualizacao?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    vinculo?: EnumVinculoPlataformaFieldUpdateOperationsInput | $Enums.VinculoPlataforma
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneWithoutPlataformasNestedInput
    acessos?: AcessoPlataformaUpdateManyWithoutPlataformaNestedInput
    historicoSenhas?: HistoricoSenhaUpdateManyWithoutPlataformaNestedInput
    custos?: CustoPlataformaUpdateManyWithoutPlataformaNestedInput
    ticketsSenha?: TicketSenhaUpdateManyWithoutPlataformaNestedInput
  }

  export type PlataformaUncheckedUpdateWithoutVisualizacoesSenhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPlataformaFieldUpdateOperationsInput | $Enums.TipoPlataforma
    urlLogin?: NullableStringFieldUpdateOperationsInput | string | null
    emailUtilizado?: NullableStringFieldUpdateOperationsInput | string | null
    senhaEncriptada?: StringFieldUpdateOperationsInput | string
    custoMensal?: FloatFieldUpdateOperationsInput | number
    ultimaAtualizacaoSenha?: DateTimeFieldUpdateOperationsInput | Date | string
    frequenciaAtualizacao?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    vinculo?: EnumVinculoPlataformaFieldUpdateOperationsInput | $Enums.VinculoPlataforma
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acessos?: AcessoPlataformaUncheckedUpdateManyWithoutPlataformaNestedInput
    historicoSenhas?: HistoricoSenhaUncheckedUpdateManyWithoutPlataformaNestedInput
    custos?: CustoPlataformaUncheckedUpdateManyWithoutPlataformaNestedInput
    ticketsSenha?: TicketSenhaUncheckedUpdateManyWithoutPlataformaNestedInput
  }

  export type ColaboradorUpsertWithoutVisualizacoesSenhaInput = {
    update: XOR<ColaboradorUpdateWithoutVisualizacoesSenhaInput, ColaboradorUncheckedUpdateWithoutVisualizacoesSenhaInput>
    create: XOR<ColaboradorCreateWithoutVisualizacoesSenhaInput, ColaboradorUncheckedCreateWithoutVisualizacoesSenhaInput>
    where?: ColaboradorWhereInput
  }

  export type ColaboradorUpdateToOneWithWhereWithoutVisualizacoesSenhaInput = {
    where?: ColaboradorWhereInput
    data: XOR<ColaboradorUpdateWithoutVisualizacoesSenhaInput, ColaboradorUncheckedUpdateWithoutVisualizacoesSenhaInput>
  }

  export type ColaboradorUpdateWithoutVisualizacoesSenhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusColaboradorFieldUpdateOperationsInput | $Enums.StatusColaborador
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acessos?: AcessoPlataformaUpdateManyWithoutColaboradorNestedInput
    historicoSenhas?: HistoricoSenhaUpdateManyWithoutColaboradorNestedInput
    ticketsSenha?: TicketSenhaUpdateManyWithoutColaboradorNestedInput
  }

  export type ColaboradorUncheckedUpdateWithoutVisualizacoesSenhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusColaboradorFieldUpdateOperationsInput | $Enums.StatusColaborador
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acessos?: AcessoPlataformaUncheckedUpdateManyWithoutColaboradorNestedInput
    historicoSenhas?: HistoricoSenhaUncheckedUpdateManyWithoutColaboradorNestedInput
    ticketsSenha?: TicketSenhaUncheckedUpdateManyWithoutColaboradorNestedInput
  }

  export type PlataformaCreateWithoutTicketsSenhaInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoPlataforma
    urlLogin?: string | null
    emailUtilizado?: string | null
    senhaEncriptada: string
    custoMensal?: number
    ultimaAtualizacaoSenha?: Date | string
    frequenciaAtualizacao?: number
    observacoes?: string | null
    vinculo?: $Enums.VinculoPlataforma
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente?: ClienteCreateNestedOneWithoutPlataformasInput
    acessos?: AcessoPlataformaCreateNestedManyWithoutPlataformaInput
    historicoSenhas?: HistoricoSenhaCreateNestedManyWithoutPlataformaInput
    custos?: CustoPlataformaCreateNestedManyWithoutPlataformaInput
    visualizacoesSenha?: VisualizacaoSenhaCreateNestedManyWithoutPlataformaInput
  }

  export type PlataformaUncheckedCreateWithoutTicketsSenhaInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoPlataforma
    urlLogin?: string | null
    emailUtilizado?: string | null
    senhaEncriptada: string
    custoMensal?: number
    ultimaAtualizacaoSenha?: Date | string
    frequenciaAtualizacao?: number
    observacoes?: string | null
    vinculo?: $Enums.VinculoPlataforma
    clienteId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acessos?: AcessoPlataformaUncheckedCreateNestedManyWithoutPlataformaInput
    historicoSenhas?: HistoricoSenhaUncheckedCreateNestedManyWithoutPlataformaInput
    custos?: CustoPlataformaUncheckedCreateNestedManyWithoutPlataformaInput
    visualizacoesSenha?: VisualizacaoSenhaUncheckedCreateNestedManyWithoutPlataformaInput
  }

  export type PlataformaCreateOrConnectWithoutTicketsSenhaInput = {
    where: PlataformaWhereUniqueInput
    create: XOR<PlataformaCreateWithoutTicketsSenhaInput, PlataformaUncheckedCreateWithoutTicketsSenhaInput>
  }

  export type ColaboradorCreateWithoutTicketsSenhaInput = {
    id?: string
    nome: string
    email: string
    cargo: string
    status?: $Enums.StatusColaborador
    dataEntrada?: Date | string
    dataSaida?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acessos?: AcessoPlataformaCreateNestedManyWithoutColaboradorInput
    historicoSenhas?: HistoricoSenhaCreateNestedManyWithoutColaboradorInput
    visualizacoesSenha?: VisualizacaoSenhaCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorUncheckedCreateWithoutTicketsSenhaInput = {
    id?: string
    nome: string
    email: string
    cargo: string
    status?: $Enums.StatusColaborador
    dataEntrada?: Date | string
    dataSaida?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acessos?: AcessoPlataformaUncheckedCreateNestedManyWithoutColaboradorInput
    historicoSenhas?: HistoricoSenhaUncheckedCreateNestedManyWithoutColaboradorInput
    visualizacoesSenha?: VisualizacaoSenhaUncheckedCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorCreateOrConnectWithoutTicketsSenhaInput = {
    where: ColaboradorWhereUniqueInput
    create: XOR<ColaboradorCreateWithoutTicketsSenhaInput, ColaboradorUncheckedCreateWithoutTicketsSenhaInput>
  }

  export type PlataformaUpsertWithoutTicketsSenhaInput = {
    update: XOR<PlataformaUpdateWithoutTicketsSenhaInput, PlataformaUncheckedUpdateWithoutTicketsSenhaInput>
    create: XOR<PlataformaCreateWithoutTicketsSenhaInput, PlataformaUncheckedCreateWithoutTicketsSenhaInput>
    where?: PlataformaWhereInput
  }

  export type PlataformaUpdateToOneWithWhereWithoutTicketsSenhaInput = {
    where?: PlataformaWhereInput
    data: XOR<PlataformaUpdateWithoutTicketsSenhaInput, PlataformaUncheckedUpdateWithoutTicketsSenhaInput>
  }

  export type PlataformaUpdateWithoutTicketsSenhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPlataformaFieldUpdateOperationsInput | $Enums.TipoPlataforma
    urlLogin?: NullableStringFieldUpdateOperationsInput | string | null
    emailUtilizado?: NullableStringFieldUpdateOperationsInput | string | null
    senhaEncriptada?: StringFieldUpdateOperationsInput | string
    custoMensal?: FloatFieldUpdateOperationsInput | number
    ultimaAtualizacaoSenha?: DateTimeFieldUpdateOperationsInput | Date | string
    frequenciaAtualizacao?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    vinculo?: EnumVinculoPlataformaFieldUpdateOperationsInput | $Enums.VinculoPlataforma
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneWithoutPlataformasNestedInput
    acessos?: AcessoPlataformaUpdateManyWithoutPlataformaNestedInput
    historicoSenhas?: HistoricoSenhaUpdateManyWithoutPlataformaNestedInput
    custos?: CustoPlataformaUpdateManyWithoutPlataformaNestedInput
    visualizacoesSenha?: VisualizacaoSenhaUpdateManyWithoutPlataformaNestedInput
  }

  export type PlataformaUncheckedUpdateWithoutTicketsSenhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPlataformaFieldUpdateOperationsInput | $Enums.TipoPlataforma
    urlLogin?: NullableStringFieldUpdateOperationsInput | string | null
    emailUtilizado?: NullableStringFieldUpdateOperationsInput | string | null
    senhaEncriptada?: StringFieldUpdateOperationsInput | string
    custoMensal?: FloatFieldUpdateOperationsInput | number
    ultimaAtualizacaoSenha?: DateTimeFieldUpdateOperationsInput | Date | string
    frequenciaAtualizacao?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    vinculo?: EnumVinculoPlataformaFieldUpdateOperationsInput | $Enums.VinculoPlataforma
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acessos?: AcessoPlataformaUncheckedUpdateManyWithoutPlataformaNestedInput
    historicoSenhas?: HistoricoSenhaUncheckedUpdateManyWithoutPlataformaNestedInput
    custos?: CustoPlataformaUncheckedUpdateManyWithoutPlataformaNestedInput
    visualizacoesSenha?: VisualizacaoSenhaUncheckedUpdateManyWithoutPlataformaNestedInput
  }

  export type ColaboradorUpsertWithoutTicketsSenhaInput = {
    update: XOR<ColaboradorUpdateWithoutTicketsSenhaInput, ColaboradorUncheckedUpdateWithoutTicketsSenhaInput>
    create: XOR<ColaboradorCreateWithoutTicketsSenhaInput, ColaboradorUncheckedCreateWithoutTicketsSenhaInput>
    where?: ColaboradorWhereInput
  }

  export type ColaboradorUpdateToOneWithWhereWithoutTicketsSenhaInput = {
    where?: ColaboradorWhereInput
    data: XOR<ColaboradorUpdateWithoutTicketsSenhaInput, ColaboradorUncheckedUpdateWithoutTicketsSenhaInput>
  }

  export type ColaboradorUpdateWithoutTicketsSenhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusColaboradorFieldUpdateOperationsInput | $Enums.StatusColaborador
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acessos?: AcessoPlataformaUpdateManyWithoutColaboradorNestedInput
    historicoSenhas?: HistoricoSenhaUpdateManyWithoutColaboradorNestedInput
    visualizacoesSenha?: VisualizacaoSenhaUpdateManyWithoutColaboradorNestedInput
  }

  export type ColaboradorUncheckedUpdateWithoutTicketsSenhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusColaboradorFieldUpdateOperationsInput | $Enums.StatusColaborador
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acessos?: AcessoPlataformaUncheckedUpdateManyWithoutColaboradorNestedInput
    historicoSenhas?: HistoricoSenhaUncheckedUpdateManyWithoutColaboradorNestedInput
    visualizacoesSenha?: VisualizacaoSenhaUncheckedUpdateManyWithoutColaboradorNestedInput
  }

  export type PlataformaCreateWithoutCustosInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoPlataforma
    urlLogin?: string | null
    emailUtilizado?: string | null
    senhaEncriptada: string
    custoMensal?: number
    ultimaAtualizacaoSenha?: Date | string
    frequenciaAtualizacao?: number
    observacoes?: string | null
    vinculo?: $Enums.VinculoPlataforma
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente?: ClienteCreateNestedOneWithoutPlataformasInput
    acessos?: AcessoPlataformaCreateNestedManyWithoutPlataformaInput
    historicoSenhas?: HistoricoSenhaCreateNestedManyWithoutPlataformaInput
    visualizacoesSenha?: VisualizacaoSenhaCreateNestedManyWithoutPlataformaInput
    ticketsSenha?: TicketSenhaCreateNestedManyWithoutPlataformaInput
  }

  export type PlataformaUncheckedCreateWithoutCustosInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoPlataforma
    urlLogin?: string | null
    emailUtilizado?: string | null
    senhaEncriptada: string
    custoMensal?: number
    ultimaAtualizacaoSenha?: Date | string
    frequenciaAtualizacao?: number
    observacoes?: string | null
    vinculo?: $Enums.VinculoPlataforma
    clienteId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acessos?: AcessoPlataformaUncheckedCreateNestedManyWithoutPlataformaInput
    historicoSenhas?: HistoricoSenhaUncheckedCreateNestedManyWithoutPlataformaInput
    visualizacoesSenha?: VisualizacaoSenhaUncheckedCreateNestedManyWithoutPlataformaInput
    ticketsSenha?: TicketSenhaUncheckedCreateNestedManyWithoutPlataformaInput
  }

  export type PlataformaCreateOrConnectWithoutCustosInput = {
    where: PlataformaWhereUniqueInput
    create: XOR<PlataformaCreateWithoutCustosInput, PlataformaUncheckedCreateWithoutCustosInput>
  }

  export type PlataformaUpsertWithoutCustosInput = {
    update: XOR<PlataformaUpdateWithoutCustosInput, PlataformaUncheckedUpdateWithoutCustosInput>
    create: XOR<PlataformaCreateWithoutCustosInput, PlataformaUncheckedCreateWithoutCustosInput>
    where?: PlataformaWhereInput
  }

  export type PlataformaUpdateToOneWithWhereWithoutCustosInput = {
    where?: PlataformaWhereInput
    data: XOR<PlataformaUpdateWithoutCustosInput, PlataformaUncheckedUpdateWithoutCustosInput>
  }

  export type PlataformaUpdateWithoutCustosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPlataformaFieldUpdateOperationsInput | $Enums.TipoPlataforma
    urlLogin?: NullableStringFieldUpdateOperationsInput | string | null
    emailUtilizado?: NullableStringFieldUpdateOperationsInput | string | null
    senhaEncriptada?: StringFieldUpdateOperationsInput | string
    custoMensal?: FloatFieldUpdateOperationsInput | number
    ultimaAtualizacaoSenha?: DateTimeFieldUpdateOperationsInput | Date | string
    frequenciaAtualizacao?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    vinculo?: EnumVinculoPlataformaFieldUpdateOperationsInput | $Enums.VinculoPlataforma
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneWithoutPlataformasNestedInput
    acessos?: AcessoPlataformaUpdateManyWithoutPlataformaNestedInput
    historicoSenhas?: HistoricoSenhaUpdateManyWithoutPlataformaNestedInput
    visualizacoesSenha?: VisualizacaoSenhaUpdateManyWithoutPlataformaNestedInput
    ticketsSenha?: TicketSenhaUpdateManyWithoutPlataformaNestedInput
  }

  export type PlataformaUncheckedUpdateWithoutCustosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPlataformaFieldUpdateOperationsInput | $Enums.TipoPlataforma
    urlLogin?: NullableStringFieldUpdateOperationsInput | string | null
    emailUtilizado?: NullableStringFieldUpdateOperationsInput | string | null
    senhaEncriptada?: StringFieldUpdateOperationsInput | string
    custoMensal?: FloatFieldUpdateOperationsInput | number
    ultimaAtualizacaoSenha?: DateTimeFieldUpdateOperationsInput | Date | string
    frequenciaAtualizacao?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    vinculo?: EnumVinculoPlataformaFieldUpdateOperationsInput | $Enums.VinculoPlataforma
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acessos?: AcessoPlataformaUncheckedUpdateManyWithoutPlataformaNestedInput
    historicoSenhas?: HistoricoSenhaUncheckedUpdateManyWithoutPlataformaNestedInput
    visualizacoesSenha?: VisualizacaoSenhaUncheckedUpdateManyWithoutPlataformaNestedInput
    ticketsSenha?: TicketSenhaUncheckedUpdateManyWithoutPlataformaNestedInput
  }

  export type PlataformaCreateManyClienteInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoPlataforma
    urlLogin?: string | null
    emailUtilizado?: string | null
    senhaEncriptada: string
    custoMensal?: number
    ultimaAtualizacaoSenha?: Date | string
    frequenciaAtualizacao?: number
    observacoes?: string | null
    vinculo?: $Enums.VinculoPlataforma
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlataformaUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPlataformaFieldUpdateOperationsInput | $Enums.TipoPlataforma
    urlLogin?: NullableStringFieldUpdateOperationsInput | string | null
    emailUtilizado?: NullableStringFieldUpdateOperationsInput | string | null
    senhaEncriptada?: StringFieldUpdateOperationsInput | string
    custoMensal?: FloatFieldUpdateOperationsInput | number
    ultimaAtualizacaoSenha?: DateTimeFieldUpdateOperationsInput | Date | string
    frequenciaAtualizacao?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    vinculo?: EnumVinculoPlataformaFieldUpdateOperationsInput | $Enums.VinculoPlataforma
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acessos?: AcessoPlataformaUpdateManyWithoutPlataformaNestedInput
    historicoSenhas?: HistoricoSenhaUpdateManyWithoutPlataformaNestedInput
    custos?: CustoPlataformaUpdateManyWithoutPlataformaNestedInput
    visualizacoesSenha?: VisualizacaoSenhaUpdateManyWithoutPlataformaNestedInput
    ticketsSenha?: TicketSenhaUpdateManyWithoutPlataformaNestedInput
  }

  export type PlataformaUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPlataformaFieldUpdateOperationsInput | $Enums.TipoPlataforma
    urlLogin?: NullableStringFieldUpdateOperationsInput | string | null
    emailUtilizado?: NullableStringFieldUpdateOperationsInput | string | null
    senhaEncriptada?: StringFieldUpdateOperationsInput | string
    custoMensal?: FloatFieldUpdateOperationsInput | number
    ultimaAtualizacaoSenha?: DateTimeFieldUpdateOperationsInput | Date | string
    frequenciaAtualizacao?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    vinculo?: EnumVinculoPlataformaFieldUpdateOperationsInput | $Enums.VinculoPlataforma
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acessos?: AcessoPlataformaUncheckedUpdateManyWithoutPlataformaNestedInput
    historicoSenhas?: HistoricoSenhaUncheckedUpdateManyWithoutPlataformaNestedInput
    custos?: CustoPlataformaUncheckedUpdateManyWithoutPlataformaNestedInput
    visualizacoesSenha?: VisualizacaoSenhaUncheckedUpdateManyWithoutPlataformaNestedInput
    ticketsSenha?: TicketSenhaUncheckedUpdateManyWithoutPlataformaNestedInput
  }

  export type PlataformaUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPlataformaFieldUpdateOperationsInput | $Enums.TipoPlataforma
    urlLogin?: NullableStringFieldUpdateOperationsInput | string | null
    emailUtilizado?: NullableStringFieldUpdateOperationsInput | string | null
    senhaEncriptada?: StringFieldUpdateOperationsInput | string
    custoMensal?: FloatFieldUpdateOperationsInput | number
    ultimaAtualizacaoSenha?: DateTimeFieldUpdateOperationsInput | Date | string
    frequenciaAtualizacao?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    vinculo?: EnumVinculoPlataformaFieldUpdateOperationsInput | $Enums.VinculoPlataforma
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcessoPlataformaCreateManyColaboradorInput = {
    id?: string
    plataformaId: string
    dataInicio?: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HistoricoSenhaCreateManyColaboradorInput = {
    id?: string
    plataformaId: string
    senhaAnterior?: string | null
    novaSenha: string
    motivoMudanca?: string | null
    dataAlteracao?: Date | string
    notificouColaboradores?: boolean
    tipoNotificacao?: string | null
  }

  export type VisualizacaoSenhaCreateManyColaboradorInput = {
    id?: string
    plataformaId: string
    dataVisualizacao?: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type TicketSenhaCreateManyColaboradorInput = {
    id?: string
    plataformaId: string
    descricaoProblema: string
    status?: $Enums.StatusTicket
    dataAbertura?: Date | string
    dataResolucao?: Date | string | null
    observacoesResolucao?: string | null
  }

  export type AcessoPlataformaUpdateWithoutColaboradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plataforma?: PlataformaUpdateOneRequiredWithoutAcessosNestedInput
  }

  export type AcessoPlataformaUncheckedUpdateWithoutColaboradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    plataformaId?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcessoPlataformaUncheckedUpdateManyWithoutColaboradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    plataformaId?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoSenhaUpdateWithoutColaboradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    senhaAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    novaSenha?: StringFieldUpdateOperationsInput | string
    motivoMudanca?: NullableStringFieldUpdateOperationsInput | string | null
    dataAlteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    notificouColaboradores?: BoolFieldUpdateOperationsInput | boolean
    tipoNotificacao?: NullableStringFieldUpdateOperationsInput | string | null
    plataforma?: PlataformaUpdateOneRequiredWithoutHistoricoSenhasNestedInput
  }

  export type HistoricoSenhaUncheckedUpdateWithoutColaboradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    plataformaId?: StringFieldUpdateOperationsInput | string
    senhaAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    novaSenha?: StringFieldUpdateOperationsInput | string
    motivoMudanca?: NullableStringFieldUpdateOperationsInput | string | null
    dataAlteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    notificouColaboradores?: BoolFieldUpdateOperationsInput | boolean
    tipoNotificacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricoSenhaUncheckedUpdateManyWithoutColaboradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    plataformaId?: StringFieldUpdateOperationsInput | string
    senhaAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    novaSenha?: StringFieldUpdateOperationsInput | string
    motivoMudanca?: NullableStringFieldUpdateOperationsInput | string | null
    dataAlteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    notificouColaboradores?: BoolFieldUpdateOperationsInput | boolean
    tipoNotificacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisualizacaoSenhaUpdateWithoutColaboradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataVisualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    plataforma?: PlataformaUpdateOneRequiredWithoutVisualizacoesSenhaNestedInput
  }

  export type VisualizacaoSenhaUncheckedUpdateWithoutColaboradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    plataformaId?: StringFieldUpdateOperationsInput | string
    dataVisualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisualizacaoSenhaUncheckedUpdateManyWithoutColaboradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    plataformaId?: StringFieldUpdateOperationsInput | string
    dataVisualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketSenhaUpdateWithoutColaboradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTicketFieldUpdateOperationsInput | $Enums.StatusTicket
    dataAbertura?: DateTimeFieldUpdateOperationsInput | Date | string
    dataResolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoesResolucao?: NullableStringFieldUpdateOperationsInput | string | null
    plataforma?: PlataformaUpdateOneRequiredWithoutTicketsSenhaNestedInput
  }

  export type TicketSenhaUncheckedUpdateWithoutColaboradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    plataformaId?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTicketFieldUpdateOperationsInput | $Enums.StatusTicket
    dataAbertura?: DateTimeFieldUpdateOperationsInput | Date | string
    dataResolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoesResolucao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketSenhaUncheckedUpdateManyWithoutColaboradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    plataformaId?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTicketFieldUpdateOperationsInput | $Enums.StatusTicket
    dataAbertura?: DateTimeFieldUpdateOperationsInput | Date | string
    dataResolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoesResolucao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AcessoPlataformaCreateManyPlataformaInput = {
    id?: string
    colaboradorId: string
    dataInicio?: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HistoricoSenhaCreateManyPlataformaInput = {
    id?: string
    colaboradorId?: string | null
    senhaAnterior?: string | null
    novaSenha: string
    motivoMudanca?: string | null
    dataAlteracao?: Date | string
    notificouColaboradores?: boolean
    tipoNotificacao?: string | null
  }

  export type CustoPlataformaCreateManyPlataformaInput = {
    id?: string
    valor: number
    moeda?: string
    dataInicio: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisualizacaoSenhaCreateManyPlataformaInput = {
    id?: string
    colaboradorId: string
    dataVisualizacao?: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type TicketSenhaCreateManyPlataformaInput = {
    id?: string
    colaboradorId: string
    descricaoProblema: string
    status?: $Enums.StatusTicket
    dataAbertura?: Date | string
    dataResolucao?: Date | string | null
    observacoesResolucao?: string | null
  }

  export type AcessoPlataformaUpdateWithoutPlataformaInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colaborador?: ColaboradorUpdateOneRequiredWithoutAcessosNestedInput
  }

  export type AcessoPlataformaUncheckedUpdateWithoutPlataformaInput = {
    id?: StringFieldUpdateOperationsInput | string
    colaboradorId?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcessoPlataformaUncheckedUpdateManyWithoutPlataformaInput = {
    id?: StringFieldUpdateOperationsInput | string
    colaboradorId?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoSenhaUpdateWithoutPlataformaInput = {
    id?: StringFieldUpdateOperationsInput | string
    senhaAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    novaSenha?: StringFieldUpdateOperationsInput | string
    motivoMudanca?: NullableStringFieldUpdateOperationsInput | string | null
    dataAlteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    notificouColaboradores?: BoolFieldUpdateOperationsInput | boolean
    tipoNotificacao?: NullableStringFieldUpdateOperationsInput | string | null
    colaborador?: ColaboradorUpdateOneWithoutHistoricoSenhasNestedInput
  }

  export type HistoricoSenhaUncheckedUpdateWithoutPlataformaInput = {
    id?: StringFieldUpdateOperationsInput | string
    colaboradorId?: NullableStringFieldUpdateOperationsInput | string | null
    senhaAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    novaSenha?: StringFieldUpdateOperationsInput | string
    motivoMudanca?: NullableStringFieldUpdateOperationsInput | string | null
    dataAlteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    notificouColaboradores?: BoolFieldUpdateOperationsInput | boolean
    tipoNotificacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricoSenhaUncheckedUpdateManyWithoutPlataformaInput = {
    id?: StringFieldUpdateOperationsInput | string
    colaboradorId?: NullableStringFieldUpdateOperationsInput | string | null
    senhaAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    novaSenha?: StringFieldUpdateOperationsInput | string
    motivoMudanca?: NullableStringFieldUpdateOperationsInput | string | null
    dataAlteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    notificouColaboradores?: BoolFieldUpdateOperationsInput | boolean
    tipoNotificacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustoPlataformaUpdateWithoutPlataformaInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    moeda?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustoPlataformaUncheckedUpdateWithoutPlataformaInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    moeda?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustoPlataformaUncheckedUpdateManyWithoutPlataformaInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    moeda?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisualizacaoSenhaUpdateWithoutPlataformaInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataVisualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    colaborador?: ColaboradorUpdateOneRequiredWithoutVisualizacoesSenhaNestedInput
  }

  export type VisualizacaoSenhaUncheckedUpdateWithoutPlataformaInput = {
    id?: StringFieldUpdateOperationsInput | string
    colaboradorId?: StringFieldUpdateOperationsInput | string
    dataVisualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisualizacaoSenhaUncheckedUpdateManyWithoutPlataformaInput = {
    id?: StringFieldUpdateOperationsInput | string
    colaboradorId?: StringFieldUpdateOperationsInput | string
    dataVisualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketSenhaUpdateWithoutPlataformaInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTicketFieldUpdateOperationsInput | $Enums.StatusTicket
    dataAbertura?: DateTimeFieldUpdateOperationsInput | Date | string
    dataResolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoesResolucao?: NullableStringFieldUpdateOperationsInput | string | null
    colaborador?: ColaboradorUpdateOneRequiredWithoutTicketsSenhaNestedInput
  }

  export type TicketSenhaUncheckedUpdateWithoutPlataformaInput = {
    id?: StringFieldUpdateOperationsInput | string
    colaboradorId?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTicketFieldUpdateOperationsInput | $Enums.StatusTicket
    dataAbertura?: DateTimeFieldUpdateOperationsInput | Date | string
    dataResolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoesResolucao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketSenhaUncheckedUpdateManyWithoutPlataformaInput = {
    id?: StringFieldUpdateOperationsInput | string
    colaboradorId?: StringFieldUpdateOperationsInput | string
    descricaoProblema?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTicketFieldUpdateOperationsInput | $Enums.StatusTicket
    dataAbertura?: DateTimeFieldUpdateOperationsInput | Date | string
    dataResolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoesResolucao?: NullableStringFieldUpdateOperationsInput | string | null
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