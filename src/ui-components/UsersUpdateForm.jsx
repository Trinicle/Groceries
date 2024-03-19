/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getUsers } from "../graphql/queries";
import { updateUsers } from "../graphql/mutations";
const client = generateClient();
export default function UsersUpdateForm(props) {
  const {
    id: idProp,
    users: usersModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Username: "",
    HashedPassword: "",
    FirstName: "",
    LastName: "",
    Favorites: "",
    Picture: "",
    Title: "",
  };
  const [Username, setUsername] = React.useState(initialValues.Username);
  const [HashedPassword, setHashedPassword] = React.useState(
    initialValues.HashedPassword
  );
  const [FirstName, setFirstName] = React.useState(initialValues.FirstName);
  const [LastName, setLastName] = React.useState(initialValues.LastName);
  const [Favorites, setFavorites] = React.useState(initialValues.Favorites);
  const [Picture, setPicture] = React.useState(initialValues.Picture);
  const [Title, setTitle] = React.useState(initialValues.Title);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = usersRecord
      ? { ...initialValues, ...usersRecord }
      : initialValues;
    setUsername(cleanValues.Username);
    setHashedPassword(cleanValues.HashedPassword);
    setFirstName(cleanValues.FirstName);
    setLastName(cleanValues.LastName);
    setFavorites(cleanValues.Favorites);
    setPicture(cleanValues.Picture);
    setTitle(cleanValues.Title);
    setErrors({});
  };
  const [usersRecord, setUsersRecord] = React.useState(usersModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUsers.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUsers
        : usersModelProp;
      setUsersRecord(record);
    };
    queryData();
  }, [idProp, usersModelProp]);
  React.useEffect(resetStateValues, [usersRecord]);
  const validations = {
    Username: [],
    HashedPassword: [],
    FirstName: [],
    LastName: [],
    Favorites: [],
    Picture: [],
    Title: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Username: Username ?? null,
          HashedPassword: HashedPassword ?? null,
          FirstName: FirstName ?? null,
          LastName: LastName ?? null,
          Favorites: Favorites ?? null,
          Picture: Picture ?? null,
          Title: Title ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateUsers.replaceAll("__typename", ""),
            variables: {
              input: {
                id: usersRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UsersUpdateForm")}
      {...rest}
    >
      <TextField
        label="Username"
        isRequired={false}
        isReadOnly={false}
        value={Username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Username: value,
              HashedPassword,
              FirstName,
              LastName,
              Favorites,
              Picture,
              Title,
            };
            const result = onChange(modelFields);
            value = result?.Username ?? value;
          }
          if (errors.Username?.hasError) {
            runValidationTasks("Username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("Username", Username)}
        errorMessage={errors.Username?.errorMessage}
        hasError={errors.Username?.hasError}
        {...getOverrideProps(overrides, "Username")}
      ></TextField>
      <TextField
        label="Hashed password"
        isRequired={false}
        isReadOnly={false}
        value={HashedPassword}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Username,
              HashedPassword: value,
              FirstName,
              LastName,
              Favorites,
              Picture,
              Title,
            };
            const result = onChange(modelFields);
            value = result?.HashedPassword ?? value;
          }
          if (errors.HashedPassword?.hasError) {
            runValidationTasks("HashedPassword", value);
          }
          setHashedPassword(value);
        }}
        onBlur={() => runValidationTasks("HashedPassword", HashedPassword)}
        errorMessage={errors.HashedPassword?.errorMessage}
        hasError={errors.HashedPassword?.hasError}
        {...getOverrideProps(overrides, "HashedPassword")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={FirstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Username,
              HashedPassword,
              FirstName: value,
              LastName,
              Favorites,
              Picture,
              Title,
            };
            const result = onChange(modelFields);
            value = result?.FirstName ?? value;
          }
          if (errors.FirstName?.hasError) {
            runValidationTasks("FirstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("FirstName", FirstName)}
        errorMessage={errors.FirstName?.errorMessage}
        hasError={errors.FirstName?.hasError}
        {...getOverrideProps(overrides, "FirstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={LastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Username,
              HashedPassword,
              FirstName,
              LastName: value,
              Favorites,
              Picture,
              Title,
            };
            const result = onChange(modelFields);
            value = result?.LastName ?? value;
          }
          if (errors.LastName?.hasError) {
            runValidationTasks("LastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("LastName", LastName)}
        errorMessage={errors.LastName?.errorMessage}
        hasError={errors.LastName?.hasError}
        {...getOverrideProps(overrides, "LastName")}
      ></TextField>
      <TextField
        label="Favorites"
        isRequired={false}
        isReadOnly={false}
        value={Favorites}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Username,
              HashedPassword,
              FirstName,
              LastName,
              Favorites: value,
              Picture,
              Title,
            };
            const result = onChange(modelFields);
            value = result?.Favorites ?? value;
          }
          if (errors.Favorites?.hasError) {
            runValidationTasks("Favorites", value);
          }
          setFavorites(value);
        }}
        onBlur={() => runValidationTasks("Favorites", Favorites)}
        errorMessage={errors.Favorites?.errorMessage}
        hasError={errors.Favorites?.hasError}
        {...getOverrideProps(overrides, "Favorites")}
      ></TextField>
      <TextField
        label="Picture"
        isRequired={false}
        isReadOnly={false}
        value={Picture}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Username,
              HashedPassword,
              FirstName,
              LastName,
              Favorites,
              Picture: value,
              Title,
            };
            const result = onChange(modelFields);
            value = result?.Picture ?? value;
          }
          if (errors.Picture?.hasError) {
            runValidationTasks("Picture", value);
          }
          setPicture(value);
        }}
        onBlur={() => runValidationTasks("Picture", Picture)}
        errorMessage={errors.Picture?.errorMessage}
        hasError={errors.Picture?.hasError}
        {...getOverrideProps(overrides, "Picture")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={Title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Username,
              HashedPassword,
              FirstName,
              LastName,
              Favorites,
              Picture,
              Title: value,
            };
            const result = onChange(modelFields);
            value = result?.Title ?? value;
          }
          if (errors.Title?.hasError) {
            runValidationTasks("Title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("Title", Title)}
        errorMessage={errors.Title?.errorMessage}
        hasError={errors.Title?.hasError}
        {...getOverrideProps(overrides, "Title")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || usersModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || usersModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
