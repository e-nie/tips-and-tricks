// Core
import * as yup from 'yup';
import { lorem, system } from 'faker';
import { IPublishFormShape } from '../types';

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'минимальная длина — ${min} символов';
// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'максимальная длина — ${max} символов';

export const schema: yup.SchemaOf<IPublishFormShape> = yup.object().shape({
    title: yup
        .string()
        .required('*')
        .min(5, tooShortMessage)
        .max(40, tooLongMessage),
    preview: yup
        .string()
        .min(15, tooShortMessage)
        .max(200, tooLongMessage)
        .required('*'),
    body: yup
        .string()
        .min(200, tooShortMessage)
        .max(2500, tooLongMessage)
        .required('*'),
    tagId: yup.string().required('*'),
});

/* Helpers */
export const getNewTipPlaceholder = () => {
    const version = system.semver();

    return {
        title:   `Повторение мать учения! v${version}`,
        preview: `Семь раз отмерь — один раз отрежь v${version}`,
        body:    lorem.words(35),
        tagId:   '',
    };
};
