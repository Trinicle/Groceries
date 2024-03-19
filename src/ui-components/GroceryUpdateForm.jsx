/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getGrocery } from "../graphql/queries";
import { updateGrocery } from "../graphql/mutations";
const client = generateClient();
export default function GroceryUpdateForm(props) {
  const {
    id: idProp,
    grocery: groceryModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Nam: "",
    Checked: false,
  };
  const [Nam, setNam] = React.useState(initialValues.Nam);
  const [Checked, setChecked] = React.useState(initialValues.Checked);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = groceryRecord
      ? { ...initialValues, ...groceryRecord }
      : initialValues;
    setNam(cleanValues.Nam);
    setChecked(cleanValues.Checked);
    setErrors({});
  };
  const [groceryRecord, setGroceryRecord] = React.useState(groceryModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getGrocery.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getGrocery
        : groceryModelProp;
      setGroceryRecord(record);
    };
    queryData();
  }, [idProp, groceryModelProp]);
  React.useEffect(resetStateValues, [groceryRecord]);
  const validations = {
    Nam: [],
    Checked: [],
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
          Nam: Nam ?? null,
          Checked: Checked ?? null,
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
            query: updateGrocery.replaceAll("__typename", ""),
            variables: {
              input: {
                id: groceryRecord.id,
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
      {...getOverrideProps(overrides, "GroceryUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nam"
        isRequired={false}
        isReadOnly={false}
        value={Nam}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nam: value,
              Checked,
            };
            const result = onChange(modelFields);
            value = result?.Nam ?? value;
          }
          if (errors.Nam?.hasError) {
            runValidationTasks("Nam", value);
          }
          setNam(value);
        }}
        onBlur={() => runValidationTasks("Nam", Nam)}
        errorMessage={errors.Nam?.errorMessage}
        hasError={errors.Nam?.hasError}
        {...getOverrideProps(overrides, "Nam")}
      ></TextField>
      <SwitchField
        label="Checked"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Checked}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Nam,
              Checked: value,
            };
            const result = onChange(modelFields);
            value = result?.Checked ?? value;
          }
          if (errors.Checked?.hasError) {
            runValidationTasks("Checked", value);
          }
          setChecked(value);
        }}
        onBlur={() => runValidationTasks("Checked", Checked)}
        errorMessage={errors.Checked?.errorMessage}
        hasError={errors.Checked?.hasError}
        {...getOverrideProps(overrides, "Checked")}
      ></SwitchField>
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
          isDisabled={!(idProp || groceryModelProp)}
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
              !(idProp || groceryModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
