// Core
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

// Hooks
import { useEffect } from 'react';
import { useCreateTip, useTags } from '../../../hooks';

// Elements
import { Input } from '../elements/Input';

// Other
import { getNewTipPlaceholder, schema } from './config';

export const PublishTipForm = () => {
    const { data: tags } = useTags();
    const createTip = useCreateTip();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const publish = form.handleSubmit(async (newTip) => {
        await createTip.mutateAsync(newTip);
        form.reset();
    });

    const tagOptions = tags?.map((tag) => {
        return {
            name:  tag.name,
            value: tag.id,
        };
    });

    useEffect(() => {
        const placeholder = getNewTipPlaceholder();

        form.setValue('title', placeholder.title);
        form.setValue('preview', placeholder.preview);
        form.setValue('body', placeholder.body);

        // eslint-disable-next-line no-mixed-operators
        form.setValue('tagId', tags && tags[ 0 ] && tags[ 0 ].id || '');
    }, [tags]);

    return (
        <section className = 'publish-tip'>
            <form onSubmit = { publish }>
                <fieldset disabled = { createTip.isLoading }>
                    <legend>Опубликовать Типс</legend>
                    <Input
                        label = 'Заголовок'
                        error = { form.formState.errors.title }
                        register = { form.register('title') } />
                    <Input
                        label = 'Превью'
                        error = { form.formState.errors.preview }
                        register = { form.register('preview') } />
                    <Input
                        label = 'Описание'
                        tag = 'textarea'
                        error = { form.formState.errors.body }
                        register = { form.register('body') } />
                    <Input
                        label = 'Тэг идентификатор'
                        tag = 'select'
                        options = { tagOptions }
                        error = { form.formState.errors.tagId }
                        register = { form.register('tagId') } />

                    <input type = 'submit' value = 'Опубликовать' />
                </fieldset>
            </form>
        </section>
    );
};
