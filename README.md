Best practices for app development 2022:
- Absolute imports
- Atomic Design
- ESLint
- Expo
- Functional components
- Git strategy: GitHub Flow
- HOCs
- Hooks
- Prettier
- React Native
- React Navigation
- Storybook
- Testing strategy: Unit and Integration
- Typescript

Commands used to setup the repository:
```shell
expo init -t my-beer
```

Best coding practices links:
- https://javascript.plainenglish.io/best-coding-practices-react-native-edition-2022-da833c8161de
- https://www.esparkinfo.com/blog/react-native-practices-developer-should-follow.html
- https://www.freecodecamp.org/news/best-practices-for-react/

Installation of ESLint:
```shell
yarn add --dev eslint
npx eslint --init
? How would you like to use ESLint? -> To check syntax, find problems, and enforce code style
? What type of modules does your project use? -> JavaScript modules (import/export)
? Which framework does your project use? -> React
? Does your project use TypeScript? -> Yes
? Where does your code run? -> Node
? How would you like to define a style for your project? -> Use a popular style guide -> Airbnb
? What format do you want your config file to be in? -> JavaScript
```

The setup resulted in the following dev dependencies:
```shell
eslint-plugin-react@^7.28.0 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^8.2.0 eslint-plugin-import@^2.25.3 eslint-plugin-jsx-a11y@^6.5.1 eslint-plugin-react-hooks@^4.3.0 @typescript-eslint/parser@latest
```

It's better to use the latest versions of those, thus the installation command becomes:
```shell
yarn add --dev eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@latest eslint-plugin-import@latest eslint-plugin-jsx-a11y@latest eslint-plugin-react-hooks@latest @typescript-eslint/parser@latest
```

Installation of Prettier:
```shell
yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier
```

To support absolute paths the following dependency is needed:
```shell
yarn add --dev eslint-import-resolver-typescript
```

For navigation `react-navigation` is used as this is the preferred option for Expo managed projects:
```shell
yarn add @react-navigation/native @react-navigation/native-stack
expo install react-native-screens react-native-safe-area-context
```

Installation of Jest:
```shell
expo install jest-expo jest
yarn add react-test-renderer@17 --dev
```

Installation of React Native Testing Library:
```shell
yarn add --dev @testing-library/react-native @testing-library/jest-native
```
