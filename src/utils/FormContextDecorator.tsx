import React from "react";
import {FormProvider, useForm} from "react-hook-form";

interface FormContextDecoratorProps {
    children: React.ReactNode;
}
export const FormContextDecorator = ({children}: FormContextDecoratorProps):React.ReactElement => {
    const methods = useForm<any>()
    return (<FormProvider {...methods}>{children}</FormProvider>);
};