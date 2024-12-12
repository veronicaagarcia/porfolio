// import emailjs from 'emailjs-com'
// import { useState } from 'react'
// import { Toaster, toast } from 'sonner'

// function Form() {
//     const [message, setMessage] = useState('')
//     const [email, setEmail] = useState('')
//     const [nombre, setNombre] = useState('')
//     const [emailError, setEmailError] = useState('')
//     const [messageError, setMessageError] = useState('')

//     const handleNombreChange = (event) => {
//         setNombre(event.target.value)
//     }
//     const handleEmailChange = (event) => {
//         setEmail(event.target.value)
//     }
//     const handleMessageChange = (event) => {
//         setMessage(event.target.value)
//     }

//     const validateEmail = (email) => {
//         const re = /\S+@\S+\.\S+/
//         return re.test(email)
//     }

//     const handleSubmit = async (event) => {
//         event.preventDefault()

//         if (!validateEmail(email)) {
//             setEmailError('Por favor ingrese un correo electrónico válido')
//             return
//         } else {
//             setEmailError('')
//         }

//         if (message.trim() === '') {
//             setMessageError('Por favor ingrese su mensaje')
//             return
//         } else {
//             setMessageError('')
//         }

//         try {
//             await emailjs.send(
//                 'service_vsaeinm', 
//                 'template_g5rnaf7',
//                 {
//                     from_name: nombre,
//                     to_email: 'veroagarcia90@gmail.com',
//                     nombre: nombre,
//                     message: message,
//                     email: email,
//                 },
//                 'bvRdcuQXciTU5FSB1'
//             )
            
//             toast.success('Enviado con éxito, a la brevedad me estare comunicando contigo.')
//             setEmail('')
//             setMessage('')
//             setNombre('')
//         } catch (error) {
//             toast.error('Hubo un error, intente nuevamente en unos minutos o contacteme por algun otro medio.')
//         }
//     };

//     return (
//         <div className='py-1 px-0 md:px-2 h-72 bg-secondary-light dark:bg-secondary-dark rounded-lg w-full mx-auto md:w-3/5 hover:opacity-90 hover:shadow-2xl shadow-black opacity-85 transition-all duration-300'>
//             <form className='p-4 mx-auto w-11/12 h-80 flex flex-col justify-evenly' onSubmit={handleSubmit}>
//                 <input
//                     className='appearance-none border rounded w-full py-2 px-3 text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark leading-tight focus:outline-none focus:shadow-outline transition-colors duration-300'
//                     id='nombre'
//                     type='text'
//                     value={nombre}
//                     onChange={handleNombreChange}
//                     placeholder='Nombre'
//                 />

//                 <textarea
//                     className='appearance-none border rounded w-full py-2 px-3 text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark leading-tight focus:outline-none focus:shadow-outline transition-colors duration-300'
//                     id='message'
//                     value={message}
//                     onChange={handleMessageChange}
//                     placeholder='Envía tu mensaje aquí...'
//                 />
//                 {messageError && <p className='text-secondary text-sm'>{messageError}</p>}
//                 <input
//                     className='appearance-none border rounded w-full py-2 px-3 text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark leading-tight focus:outline-none focus:shadow-outline transition-colors duration-300'
//                     id='email'
//                     type='email'
//                     value={email}
//                     onChange={handleEmailChange}
//                     placeholder='Correo electrónico'
//                 />
//                 {emailError && <p className='text-secondary text-sm'>{emailError}</p>}
//                 <button
//                     type='submit'
//                     className='group relative inline-flex mb-4 h-10 items-center justify-center overflow-hidden rounded-md bg-primary-light dark:bg-primary-dark font-medium text-text-light dark:text-text-dark transition-all duration-300 hover:bg-accent-light dark:hover:bg-accent-dark hover:text-text-light dark:hover:text-text-dark hover:scale-105'
//                 >
//                     <span className='relative'>Enviar mensaje</span>
//                 </button>
//                 <Toaster richColors position="top-center" />
//             </form>
//         </div>
//     );
// }

// export default Form;

import emailjs from 'emailjs-com'
import { useState } from 'react'
import { Toaster, toast } from 'sonner'

function Form() {
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [nombre, setNombre] = useState('')
    const [emailError, setEmailError] = useState('')
    const [messageError, setMessageError] = useState('')

    const handleNombreChange = (event) => {
        setNombre(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    }

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/
        return re.test(email)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!validateEmail(email)) {
            setEmailError('Por favor ingrese un correo electrónico válido')
            return
        } else {
            setEmailError('')
        }

        if (message.trim() === '') {
            setMessageError('Por favor ingrese su mensaje')
            return
        } else {
            setMessageError('')
        }

        try {
            const result = await emailjs.send(
                'service_vsaeinm', 
                'template_g5rnaf7',
                {
                    from_name: nombre,
                    to_email: 'veroagarcia90@gmail.com',
                    nombre: nombre,
                    message: message,
                    email: email,
                },
                'bvRdcuQXciTU5FSB1'
            )
            
            if (result.status === 200) {
                toast.success('Enviado con éxito, a la brevedad me estaré comunicando contigo.')
                setEmail('')
                setMessage('')
                setNombre('')
            } else {
                throw new Error('Respuesta inesperada del servidor')
            }
        } catch (error) {
            console.error('Error al enviar el email:', error)
            toast.error('Hubo un error al enviar el mensaje. Por favor, intente nuevamente en unos minutos o contácteme por otro medio.')
        }
    };

    return (
        <div className='py-1 px-0 md:px-2 h-72 bg-secondary-light dark:bg-secondary-dark rounded-lg w-full mx-auto md:w-3/5 hover:opacity-90 hover:shadow-2xl shadow-black opacity-85 transition-all duration-300'>
            <form className='p-4 mx-auto w-11/12 h-80 flex flex-col justify-evenly' onSubmit={handleSubmit}>
                <input
                    className='appearance-none border rounded w-full py-2 px-3 text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark leading-tight focus:outline-none focus:shadow-outline transition-colors duration-300'
                    id='nombre'
                    type='text'
                    value={nombre}
                    onChange={handleNombreChange}
                    placeholder='Nombre'
                    required
                />

                <textarea
                    className='appearance-none border rounded w-full py-2 px-3 text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark leading-tight focus:outline-none focus:shadow-outline transition-colors duration-300'
                    id='message'
                    value={message}
                    onChange={handleMessageChange}
                    placeholder='Envía tu mensaje aquí...'
                    required
                />
                {messageError && <p className='text-red-500 text-sm'>{messageError}</p>}
                <input
                    className='appearance-none border rounded w-full py-2 px-3 text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark leading-tight focus:outline-none focus:shadow-outline transition-colors duration-300'
                    id='email'
                    type='email'
                    value={email}
                    onChange={handleEmailChange}
                    placeholder='Correo electrónico'
                    required
                />
                {emailError && <p className='text-red-500 text-sm'>{emailError}</p>}
                <button
                    type='submit'
                    className='group relative inline-flex mb-4 h-10 items-center justify-center overflow-hidden rounded-md bg-primary-light dark:bg-primary-dark font-medium text-text-light dark:text-text-dark transition-all duration-300 hover:bg-accent-light dark:hover:bg-accent-dark hover:text-text-light dark:hover:text-text-dark hover:scale-105'
                >
                    <span className='relative'>Enviar mensaje</span>
                </button>
                <Toaster richColors position="bottom-center" />
            </form>
        </div>
    );
}

export default Form;