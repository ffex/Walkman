import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { BlankPageList } from "./blankPage/BlankPageList";
import { BlankPageCreate } from "./blankPage/BlankPageCreate";
import { BlankPageEdit } from "./blankPage/BlankPageEdit";
import { BlankPageShow } from "./blankPage/BlankPageShow";
import { TodoListList } from "./todoList/TodoListList";
import { TodoListCreate } from "./todoList/TodoListCreate";
import { TodoListEdit } from "./todoList/TodoListEdit";
import { TodoListShow } from "./todoList/TodoListShow";
import { TodoItemList } from "./todoItem/TodoItemList";
import { TodoItemCreate } from "./todoItem/TodoItemCreate";
import { TodoItemEdit } from "./todoItem/TodoItemEdit";
import { TodoItemShow } from "./todoItem/TodoItemShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Walkman"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="BlankPage"
          list={BlankPageList}
          edit={BlankPageEdit}
          create={BlankPageCreate}
          show={BlankPageShow}
        />
        <Resource
          name="TodoList"
          list={TodoListList}
          edit={TodoListEdit}
          create={TodoListCreate}
          show={TodoListShow}
        />
        <Resource
          name="TodoItem"
          list={TodoItemList}
          edit={TodoItemEdit}
          create={TodoItemCreate}
          show={TodoItemShow}
        />
      </Admin>
    </div>
  );
};

export default App;
