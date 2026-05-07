# Why `any` is a Type Safety Hole and Why `unknown` is Safer in TypeScript

TypeScript is design for provide type safety for JavaScript language. But using the `any`type is bypass that safety. That's why is call "type safety hole.
`Unknown` is the safer alternative rather then using any, which is validate data before using it.

# About the `any` Type

It's completely disable typescript type checking system. Once a variable set as any type then there will be able to do any kind of operation without any error.

## Example of `any`

```ts
let val: number = "Hello World";

val.toUpperCase();
val.toFixed(2); // No compile-time error
val = 100; // allow to set number value
```

# About the `unknown` Type

The `unknown` type is a safer alternative to `any`. It's still allows you to store any kind of value, but it's NOT allow you to use the value directly without first checking its type.

This means TypeScript forces you to validate the data before performing any operations, which helps prevent runtime errors.

That mean `unknown` is safer to user when you do not know specify variable type rather then use any.

## Example of `unknown`

```ts
let val: unknown = "Hello World";

val.toUpperCase(); // it  gives error. need to check type before use this operation
val.toFixed(2); // it  gives error
```
