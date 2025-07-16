# Angular Microfrontend

Este é um microfrontend Angular que expõe componentes via Module Federation.

## Componentes Expostos

- `AngularComponent`: Componente Angular principal
- `SimpleComponent`: Componente Angular simples

## Execução

```bash
ng serve
```

O microfrontend estará disponível em `http://localhost:4201`.

## Estrutura

```
src/
├── app/
│   ├── components/
│   │   └── simple-component/
│   │       ├── simple-component.html
│   │       ├── simple-component.scss
│   │       ├── simple-component.spec.ts
│   │       └── simple-component.ts
│   ├── angular-component.ts
│   ├── simple-component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── bootstrap.ts
└── main.ts
```
