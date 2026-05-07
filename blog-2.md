# How `Pick` and `Omit` Prevent Code Duplication in TypeScript

In TypeScript large interfaces have a full data model . But different parts of a application may only need a subset of that data. Instead of rewriting new interfaces for each time TypeScript provides utility types like `Pick` and `Omit` to create 

This helps to the code `DRY (Don't Repeat Yourself)` by reusing the same base structure instead of duplicating it.


Without utility types, you might duplicate code like this:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface User1 {
  id: number;
  name: string;
  email: string;
}
```

# using `Pick` and `Omit` utility
```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

type AllUser = Pick<User, "id" | "name" | "email">;
type AthenticateUser = Omit<User, "password">;
```
