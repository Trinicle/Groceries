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
export declare type UsersCreateFormInputValues = {
    Username?: string;
    HashedPassword?: string;
    FirstName?: string;
    LastName?: string;
    Favorites?: string;
    Picture?: string;
    Title?: string;
};
export declare type UsersCreateFormValidationValues = {
    Username?: ValidationFunction<string>;
    HashedPassword?: ValidationFunction<string>;
    FirstName?: ValidationFunction<string>;
    LastName?: ValidationFunction<string>;
    Favorites?: ValidationFunction<string>;
    Picture?: ValidationFunction<string>;
    Title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsersCreateFormOverridesProps = {
    UsersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Username?: PrimitiveOverrideProps<TextFieldProps>;
    HashedPassword?: PrimitiveOverrideProps<TextFieldProps>;
    FirstName?: PrimitiveOverrideProps<TextFieldProps>;
    LastName?: PrimitiveOverrideProps<TextFieldProps>;
    Favorites?: PrimitiveOverrideProps<TextFieldProps>;
    Picture?: PrimitiveOverrideProps<TextFieldProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsersCreateFormProps = React.PropsWithChildren<{
    overrides?: UsersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UsersCreateFormInputValues) => UsersCreateFormInputValues;
    onSuccess?: (fields: UsersCreateFormInputValues) => void;
    onError?: (fields: UsersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsersCreateFormInputValues) => UsersCreateFormInputValues;
    onValidate?: UsersCreateFormValidationValues;
} & React.CSSProperties>;
export default function UsersCreateForm(props: UsersCreateFormProps): React.ReactElement;
