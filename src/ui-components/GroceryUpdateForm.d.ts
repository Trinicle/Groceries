/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GroceryUpdateFormInputValues = {
    Nam?: string;
    Checked?: boolean;
};
export declare type GroceryUpdateFormValidationValues = {
    Nam?: ValidationFunction<string>;
    Checked?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GroceryUpdateFormOverridesProps = {
    GroceryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Nam?: PrimitiveOverrideProps<TextFieldProps>;
    Checked?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type GroceryUpdateFormProps = React.PropsWithChildren<{
    overrides?: GroceryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    grocery?: any;
    onSubmit?: (fields: GroceryUpdateFormInputValues) => GroceryUpdateFormInputValues;
    onSuccess?: (fields: GroceryUpdateFormInputValues) => void;
    onError?: (fields: GroceryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GroceryUpdateFormInputValues) => GroceryUpdateFormInputValues;
    onValidate?: GroceryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GroceryUpdateForm(props: GroceryUpdateFormProps): React.ReactElement;
