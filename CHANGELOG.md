# todo-usecase

## 6.0.0

### Major Changes

- 791d807: feat: update repository interfaces to use specific method names

## 5.1.1

### Patch Changes

- 4328349: update todo-entity version

## 5.1.0

### Minor Changes

- 8b2f6df: add protocole for todo edition

## 5.0.1

### Patch Changes

- 758c8e8: fix input type of get all todo repository

## 5.0.0

### Major Changes

- b8a536f: Delete protocol for gettin todo not done
  Add option for filter all todo

## 4.0.1

### Patch Changes

- 629b495: fix get todo by id repo return. allow null if todo not found

## 4.0.0

### Major Changes

- 5d4e75e: remove the setter of callback setter (presenter impolementation will define how to inject in the constructor set callback setter for viewmodel)

### Patch Changes

- c3fecf3: remove get todo by id repo on common sub module
- 9a78755: add repository and presenter interface for get todo by id and fix import on interactor

## 3.7.1

### Patch Changes

- f110189: export input output for check label repository

## 3.7.0

### Minor Changes

- 1fcafe2: get label by id repository interface

## 3.6.4

### Patch Changes

- bc80d6b: delete input repository must be string to handle id

## 3.6.3

### Patch Changes

- 955cad0: fix delete label presenter name

## 3.6.2

### Patch Changes

- f6b9394: fix check label repo input type

## 3.6.1

### Patch Changes

- 3132953: fix repository name for label checking repository

## 3.6.0

### Minor Changes

- be9fd02: set interface repository to check label exist

## 3.5.0

### Minor Changes

- f294880: add protocol for label creation suppresion and retrieval

## 3.4.0

### Minor Changes

- 8953127: permit option to create label when creating todo

## 3.3.2

### Patch Changes

- d9500e2: fix all protocol name of get uncompleted todo

## 3.3.1

### Patch Changes

- ccbeee1: rename GetUncompletedTodosInteractor to IGetUncompletedTodosInteractor

## 3.3.0

### Minor Changes

- 715a9e0: protocol to get all uncompleted todo

## 3.2.0

### Minor Changes

- 7657ac0: add default ouput presenter type on all presenter

## 3.1.0

### Minor Changes

- 893acf3: set default output type for presenter

## 3.0.0

### Major Changes

- 46b3902: allow class implementor to define input type of callback

## 2.0.1

### Patch Changes

- c77fee4: setup a generic type on IPresenter interface instead of submethode setCallback

## 2.0.0

### Major Changes

- db704cc: add a callback setter to presenter

## 1.6.0

### Minor Changes

- 16b593f: remove message from validation error

## 1.5.0

### Minor Changes

- a8342e6: accept null as result for getting Todo from repository

## 1.4.2

### Patch Changes

- 634cda9: rerun CI after fail

## 1.4.1

### Patch Changes

- f171ff0: remove README and then test my CI

## 1.4.0

### Minor Changes

- repository to get todo by id

## 1.3.1

### Patch Changes

- correct save todo and label repository naming

## 1.2.0

### Minor Changes

- 0bc3c30: add all protocol about gettin all todo
  add all protocol to check uncheck todo
