
import React from "react";

export function FormRegister({closeModal}: {closeModal: any}) {

    async function postData(event: any) {
        event.preventDefault();
        console.log(event)
        const form = event.target;
        const title = form.title.value;
        const author = form.author.value;

        const data = {
            title,
            author
        }


        const res= await fetch('/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })


        if (res.ok) {
            alert('Libro registrado')
            event.target.reset()
            closeModal(false)
            window.location.reload()
        } else {
            alert('Error al registrar libro')
        }
    }
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 tremor-Card-root set-bg-opacity rounded-tremor-default">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />

                    <h1 className="text-tremor-content flex-1 text-center text-3xl dark:text-dark-tremor-content">Registra un nuevo Libro</h1>
                </div>

                <div className="">
                    <form onSubmit={postData} className="space-y-6">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium leading-6">Titulo del Libro</label>
                            <input id="title" name="title" type="text" autoComplete="off"
                                   className="pl-2 block w-full input input-bordered py-1.5 focus:ring-indigo-600 sm:text-sm sm:leading-6 tremor-Card-root relative text-left ring-1 rounded-tremor-default bg-dark-tremor-background"/>
                        </div>

                        <div>
                            <label htmlFor="author" className="block text-sm font-medium leading-6">Nombre del Autor</label>
                            <input id="author" name="author" type="text" autoComplete="off"
                                   className="pl-2 block w-full input input-bordered py-1.5 focus:ring-indigo-600 sm:text-sm sm:leading-6 tremor-Card-root relative text-left ring-1 rounded-tremor-default bg-dark-tremor-background"/>
                        </div>
                        <button type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 ">Regitrar
                            Libro
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
