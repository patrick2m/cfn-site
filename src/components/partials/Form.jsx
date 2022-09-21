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
      </div>
      <form id="form-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="contact-info">
          <div className="contact-info-place">
            <h3 className="contact-info-title">
              Casa das Fechaduras de Niterói
            </h3>
            <h5 className="contact-info-number">Telefone: (21) 3527-3000</h5>
          </div>
          <div className="contact-info-place">
            <h3>Casa das Fechaduras de São Gonçalo</h3>
            <h5 className="contact-info-number">Telefone: (21) 2713-6161</h5>
          </div>
          <div className="contact-info-opening-hours">
            <h3>Horário de funcionamento:</h3>
            <h5>Segunda à sexta : 8h às 18h</h5>
            <h5>Sábado : 9h às 13h</h5>
          </div>
        </div>
        <div className="vertical-line-contact-page"></div>
        <hr />
        <div className="contact-form">
          <input
            type="text"
            placeholder=" Nome completo"
            {...register('Name', { required: true, maxLength: 80 })}
          />
          <input
            type="text"
            placeholder=" Email"
            {...register('Email', {
              required: true,
              maxLength: 60,
              pattern: /^\S+@\S+$/i
            })}
          />
          <input
            type="tel"
            placeholder=" Número de telefone"
            {...register('Mobile number', {
              required: true,
              minLength: 8,
              maxLength: 14
            })}
          />
          <select {...register('tipo de comentario', { required: true })}>
            <option value="tipo"> Selecione o tipo de comentário</option>
            <option value="Elogio">Elogio</option>
            <option value="Proposta">Proposta</option>
            <option value="Reclamacao">Reclamação</option>
            <option value="Sugestao">Sugestão</option>
          </select>
          <input
            className="comment"
            type="text"
            placeholder=" Comentário"
            {...register('Comment', { required: true, maxLength: 200 })}
          />
          <input type="submit" />
        </div>
      </form>
    </section>
  )
}
