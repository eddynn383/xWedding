

export interface IPropsInput {
    id: string;
    name: string;
    type: React.HTMLInputTypeAttribute;
    innerRef?: any;
    placeholder?: string;
    label?: string;
    value?: string;
    required?: boolean;
    autoComplete?: any;
    ariaInvalid?: any;
    ariaDescribedBy?: any;
    style?: React.CSSProperties;
    variant?: "solid" | "outline" | "opposite" | "text";
    shade?: any;
    size?: any;
    status?: any;
    iconBefore?: React.ReactElement;
    iconAfter?: React.ReactElement;
    focus?: boolean;
    onClick?: any;
    onChange?: any;
    onFocus?: any;
    onBlur?: any;
} 