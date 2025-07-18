# Microfrontends Workspace

Este é um workspace completo demonstrando arquitetura de microfrontends usando Module Federation com React e Angular.

## Estrutura do Projeto

```
microfrontends-workspace/
├── shell-mf/           # Aplicação React host (porta 4200)
├── angular-mf/         # Microfrontend Angular (porta 4201)
├── react-mf/           # Microfrontend React (porta 3001)
└── test-mf.html        # Página de teste HTML
```

## Tecnologias Utilizadas

- **Module Federation**: Webpack 5 para carregamento dinâmico de microfrontends
- **React**: Framework para aplicação shell host
- **Angular**: Framework para microfrontend Angular
- **React**: Framework para microfrontend React
- **TypeScript**: Linguagem de programação
- **Webpack**: Bundler e configuração do Module Federation

## Execução

### 1. Instalar dependências

```bash
# Shell React
cd shell-mf && npm install

# Angular MF
cd angular-mf && npm install

# React MF
cd react-mf && npm install
```

### 2. Executar todos os serviços

```bash
# Terminal 1 - Shell React (porta 4200)
cd shell-mf && npm start

# Terminal 2 - Angular MF (porta 4201)
cd angular-mf && ng serve

# Terminal 3 - React MF (porta 3001)
cd react-mf && npm start
```

### 3. Acessar a aplicação

- Shell: `http://localhost:4200`
- Angular MF: `http://localhost:4201`
- React MF: `http://localhost:3001`

## Componentes Expostos

### Angular Microfrontend
- `AngularComponent`: Componente Angular principal
- `SimpleComponent`: Componente Angular simples

### React Microfrontend
- `ReactComponent`: Componente React principal
- `SimpleComponent`: Componente React simples

## Funcionalidades

- ✅ Carregamento dinâmico de microfrontends
- ✅ Compartilhamento de dependências
- ✅ Componentes estruturados por framework
- ✅ Testes unitários implementados
- ✅ Tratamento de erros robusto
- ✅ Interface responsiva e moderna
