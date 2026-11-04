export type RequestResult<T> =
  | {
      ok: true
      data: T
    }
  | {
      ok: false
      data: T
    }
