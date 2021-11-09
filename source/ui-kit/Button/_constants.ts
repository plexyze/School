import { TextColor } from 'ui-kit/Text';

type ButtonColorVariant = {
    style: string;
    textColor: TextColor;
};

export const BUTTON_COLORS = {
    primary: { style: '-primary', textColor: 'primary-text' } as ButtonColorVariant,
    secondary: { style: '-secondary', textColor: 'secondary-text' } as ButtonColorVariant,
};
