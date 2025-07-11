import React from "react";
import { useForm, Controller } from 'react-hook-form';
import emailValidation from "../../validations/email-validations";
import passwordValidation from "../../validations/password-validation";

export default function LoginForm() {

    //criando a estrutura para declaração de formulario

    const {
        control, //capturar cada campo do formulario
        handleSubmit, // capturar o evento SUBMIT do formulario
        formState: {
             errors // capturar os erros de validação dos campos
            }, 
        reset // utilizapara limpar o modificar o valor dos campos

    } = useForm();

    // funçao para executar o evento SUBMIT do formulario

    const onSubmit = (data) => { //data -> campos preenchidos no formulário
        console.log(data);

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
                <label> E-mail de acesso: </label>
                
                {/* campo para captura do 'email' */}

                <Controller
                control={control}
                name='email'
                defaultValue=''
                rules={{
                    validate: emailValidation
                }}
                render={
                    ({field :{ onChange, onBlur, value  } }) => (
                        <input 
                        type='email' 
                        className='from-control'
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        
                        />
                    )
                }
                 />

                 { /* mensagem de erro de validação do campo 'email' */}

                 {
                   errors.email && <div className='text-danger'>
                    {errors.email.message}

                   </div> 
                 }
       
            </div>
            <div className='mb-3'>
                <label> Senha de acesso: </label>
                 {/* campo para captura de 'senha' */}

                <Controller
                control={control}
                name='senha'
                defaultValue=''
                rules={{
                    validate: passwordValidation
                }}
                render={
                    ({field :{ onChange, onBlur, value  } }) => (
                        <input 
                        type='password' 
                        className='from-control'
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        
                        />
                    )
                }
                 />

                     { /* mensagem de erro de validação do campo 'senha' */}

                 {
                   errors.senha && <div className='text-danger'>
                    {errors.senha.message}

                   </div> 
                 }
       

                </div>
                <div className='mb-3'>
                    <div className='d-grid'>
                        <input type='submit' value='Acessar Agenda'
                        className='btn btn-dark' />

                    </div>

                
            </div>



        </form>

    )
    
}