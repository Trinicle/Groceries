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
export declare type IngredientsUpdateFormInputValues = {
    name?: string;
};
export declare type IngredientsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IngredientsUpdateFormOverridesProps = {
    IngredientsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type IngredientsUpdateFormProps = React.PropsWithChildren<{
    overrides?: IngredientsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ingredients?: any;
    onSubmit?: (fields: IngredientsUpdateFormInputValues) => IngredientsUpdateFormInputValues;
    onSuccess?: (fields: IngredientsUpdateFormInputValues) => void;
    onError?: (fields: IngredientsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: IngredientsUpdateFormInputValues) => IngredientsUpdateFormInputValues;
    onValidate?: IngredientsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function IngredientsUpdateForm(props: IngredientsUpdateFormProps): React.ReactElement;
