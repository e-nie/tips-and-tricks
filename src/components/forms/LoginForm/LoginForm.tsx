// Core
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

// Hooks
import { useLogin } from '../../../hooks';

// Elements
import { Input } from '../elements/Input';

// Other
import { schema } from './config';
import { ILoginFormShape } from '../types';

export const LoginForm: React.FC = () => {
    const login = useLogin();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const onSubmit = form.handleSubmit(async (credentials: ILoginFormShape) => {
        await login.mutateAsync(credentials);
        form.reset();
    });

    return (
        <section className = 'publish-tip login'>
            <form onSubmit = { onSubmit }>
                <fieldset disabled = { login.isLoading }>
                    <legend>Залогиниться</legend>
                    <Input
                        label = 'Электропочта'
                        error = { form.formState.errors.email }
                        register = { form.register('email') } />
                    <Input
                        label = 'Пароль'
                        type = 'password'
                        error = { form.formState.errors.password }
                        register = { form.register('password') } />
                    <input type = 'submit' value = 'Войти' />
                </fieldset>
                <p>Если у вас до сих пор нет учётной записи, вы можете <Link to = '/signup'>зарегистрироваться</Link></p>
            </form>
        </section>
    );
};
