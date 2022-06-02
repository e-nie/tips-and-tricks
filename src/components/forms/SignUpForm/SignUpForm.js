// Core
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

// Hooks
import { useSignUp } from '../../../hooks/useSignUp';

// Elements
import { Input } from '../elements/Input';

// Other
import { schema } from './config';

export const SignUpForm = () => {
    const signUp = useSignUp();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const onSubmit = form.handleSubmit(async (data) => {
        const { confirmPassword, ...newUser } = data;
        await signUp.mutateAsync(newUser);
        form.reset();
    });

    return (
        <section className = 'publish-tip signup'>
            <form onSubmit = { onSubmit }>
                <fieldset disabled = { signUp.isLoading }>
                    <legend>Залогиниться</legend>
                    <Input
                        label = 'Имя и фамилия'
                        error = { form.formState.errors.name }
                        register = { form.register('name') } />
                    <Input
                        label = 'Электропочта'
                        error = { form.formState.errors.email }
                        register = { form.register('email') } />
                    <Input
                        label = 'Пароль'
                        type = 'password'
                        error = { form.formState.errors.password }
                        register = { form.register('password') } />
                    <Input
                        label = 'Подтверждение пароля'
                        type = 'password'
                        error = { form.formState.errors.confirmPassword }
                        register = { form.register('confirmPassword') } />
                    <input type = 'submit' value = 'Зарегистрироваться' />
                </fieldset>
                <p>Перейти к <Link to = '/login'>логину</Link></p>
            </form>
        </section>
    );
};
