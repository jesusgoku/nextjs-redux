# NextJS + Redux

NextJS app setting with Redux

## Features

- Redux (with @reduxjs/toolkit)
- Husky + lint-staged + commitlint (follow commit-conventional)
- Absolute imports

## Running

```bash
# For development
yarn run dev

# For production
yarn run build && yarn run start
```

## Docker

```bash
# Running for development 
docker-compose -f docker-compose.yml -f docker-compose.development.yml up --build

# Or
cp docker-compose.development.yml docker-compose.override.yml
docker-compose up --build

# Build image for production
docker-compose build
```

## References

- [Server-Side Rendered App with Next.js, React and Redux](https://dev.to/waqasabbasi/server-side-rendered-app-with-next-js-react-and-redux-38gf)
- [Redux Wrapper for Next.js](https://github.com/kirill-konshin/next-redux-wrapper)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [NextJS](https://nextjs.org/)
