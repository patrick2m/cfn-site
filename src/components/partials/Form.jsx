import './Form.scss'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = data => console.log(data)
  console.log(errors)

  return (
    <section id="form-container">
      <div id="form-header">
        <h1 className="section-title">Contate-nos</h1>
        <h2>Página em produção!</h2>
      </div>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <span>Digite seu nome:</span>
          <input
            type="text"
            placeholder="Nome completo"
            {...register('First name', { required: true, maxLength: 80 })}
          />
        </div>

        <div>
          <span>Digite seu Email:</span>
          <input
            type="text"
            placeholder="Email"
            {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
          />
        </div>

        <div>
          <span>Digite seu Telefone:</span>
          <input
            type="tel"
            placeholder="(XX)XXXXXXXXX"
            {...register('Mobile number', {
              required: true,
              minLength: 6,
              maxLength: 12
            })}
          />
        </div>

        <div>
          <span>Digite seu comentário:</span>
          <input
            type="text"
            placeholder="Comentário"
            {...register('Last name', { required: true, maxLength: 100 })}
          />
        </div>

        <div>
          <span>Assunto:</span>
          <select {...register('Civil status', { required: true })}>
            <option value="Elogioi">Elogio</option>
            <option value="Reclamacao">Reclamação</option>
            <option value="Sugestao">Sugestão</option>
            <option value="ComentárioLivre">Comentário Livre</option>
          </select>
        </div>

        <div>
          <span>Já é cliente?</span>
        </div>
        <div>
          <span>Sim:</span>
          <input
            {...register('Cliente?', { required: true })}
            type="radio"
            value="Yes"
          />
          <span>Não:</span>
          <input
            {...register('Cliente?', { required: true })}
            type="radio"
            value="No"
          />
        </div>

        <input type="submit" />
      </form>
    </section>
  )
}
