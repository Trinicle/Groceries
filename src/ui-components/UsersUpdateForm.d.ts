/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type UsersUpdateFormInputValues = {
    username?: string;
    hashedpassword?: string;
    firstname?: string;
    lastname?: string;
    picture?: string;
    title?: string;
};
export declare type UsersUpdateFormValidationValues = {
    username?: ValidationFunction<string>;
    hashedpassword?: ValidationFunction<string>;
    firstname?: ValidationFunction<string>;
    lastname?: ValidationFunction<string>;
    picture?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsersUpdateFormOverridesProps = {
    UsersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    hashedpassword?: PrimitiveOverrideProps<TextFieldProps>;
    firstname?: PrimitiveOverrideProps<TextFieldProps>;
    lastname?: PrimitiveOverrideProps<TextFieldProps>;
    picture?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsersUpdateFormProps = React.PropsWithChildren<{
    overrides?: UsersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    users?: any;
    onSubmit?: (fields: UsersUpdateFormInputValues) => UsersUpdateFormInputValues;
    onSuccess?: (fields: UsersUpdateFormInputValues) => void;
    onError?: (fields: UsersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsersUpdateFormInputValues) => UsersUpdateFormInputValues;
    onValidate?: UsersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UsersUpdateForm(props: UsersUpdateFormProps): React.ReactElement;
