# Nest Starter

## Getting Started

Follow steps to execute this boilerplate.

1. Clone this boilerplate

```bash
$ git clone --depth 1 https://github.com/Shyam-Chen/Nest-Starter.git <PROJECT_NAME>
$ cd <PROJECT_NAME>
```

2. Install dependencies

```bash
$ npm install
```

3. Start a development server

```bash
$ yarn serve
```

4. Produce a production-ready bundle

```bash
$ yarn build
```

5. Lint and fix files

```bash
$ yarn lint
```

6. Run unit tests

```bash
$ yarn unit
```

7. Run end-to-end tests

```sh
$ yarn e2e
```

## Examples

- [Hello World](./src/hello-world)
- [CRUD Operations](./src/crud-operations)
- [Authentication](./src/authentication)
- [File Uploads](./src/file-uploads)
- [Realtime Data](./src/realtime-data)

## Directory Structure

```ts
.
├── src
│   ├── core
│   │   └── ...
│   ├── <FEATURE> -> feature module
│   │   ├── __tests__
│   │   │   ├── <FEATURE>.controller.spec.ts
│   │   │   ├── <FEATURE>.resolver.spec.ts
│   │   │   ├── <FEATURE>.collection.spec.ts
│   │   │   ├── <FEATURE>.table.spec.ts
│   │   │   ├── <FEATURE>.service.spec.ts
│   │   │   ├── <FEATURE>.rest.e2e-spec.ts
│   │   │   └── <FEATURE>.graphql.e2e-spec.ts
│   │   ├── <FEATURE>.controller.ts -> rest controller
│   │   ├── <FEATURE>.resolver.ts -> graphql resolver
│   │   ├── <FEATURE>.collection.ts -> mongodb odm
│   │   ├── <FEATURE>.table.ts -> postgresql orm
│   │   ├── <FEATURE>.service.ts -> provider
│   │   └── <FEATURE>.module.ts
│   ├── <GROUP> -> module group
│   │   └── <FEATURE> -> feature module
│   │       ├── __tests__
│   │       │   ├── <FEATURE>.controller.spec.ts
│   │       │   ├── <FEATURE>.resolver.spec.ts
│   │       │   ├── <FEATURE>.collection.spec.ts
│   │       │   ├── <FEATURE>.table.spec.ts
│   │       │   ├── <FEATURE>.service.spec.ts
│   │       │   ├── <FEATURE>.rest.e2e-spec.ts
│   │       │   └── <FEATURE>.graphql.e2e-spec.ts
│   │       ├── <FEATURE>.controller.ts -> rest controller
│   │       ├── <FEATURE>.resolver.ts -> graphql resolver
│   │       ├── <FEATURE>.collection.ts -> mongodb odm
│   │       ├── <FEATURE>.table.ts -> postgresql orm
│   │       ├── <FEATURE>.service.ts -> provider
│   │       └── <FEATURE>.module.ts
│   ├── shared
│   │   └── ...
│   ├── app.module.ts
│   └── main.ts
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .prettierrc
├── circle.yml
├── docker-compose.yml
├── Dockerfile
├── env.js
├── jest.config.js
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── webpack.config.js
```

## Microservices

> Microservice architecture – a variant of the service-oriented architecture structural style – arranges an application as a collection of loosely coupled services. In a microservices architecture, services are fine-grained and the protocols are lightweight.

See [Server-side Micro-Fullstack](https://github.com/Shyam-Chen/Micro-Fullstack/tree/master/server) for instructions on how to create microservices from source code.

