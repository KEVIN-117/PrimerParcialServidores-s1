import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Button
} from '@tremor/react';
import {Book} from "../types";

export function TableHero ({books}:{books: Book[]}) {

    async function handleDelete(id: number){
        const res = await fetch(`/api/books/${id}`, {
            method: 'DELETE'
        })
        if (res.ok) {
            alert('Libro eliminado')
            window.location.reload()
        } else {
            alert('Error al eliminar libro')
        }
    }

    return (
        <div className="mx-auto w-[80%] h-[50vh] set-bg-opacity">
            <Table className={'relative rounded-xl h-full set-bg-opacity set-box-shadow-mix-blend-mode overflow-y-scroll setSclollbar '}>
                <TableHead className={'sticky top-0 rounded-xl overflow-hidden'}>
                    <TableRow className={'tremor-Card-root rounded-tremor-default bg-tremor-background shadow-tremor-card dark:bg-dark-tremor-background dark:ring-dark-tremor-ring dark:shadow-dark-tremor-card border-indigo-500 mx-auto'}>
                        <TableHeaderCell className={'text-tremor-content text-2xl dark:text-dark-tremor-content'}>ID</TableHeaderCell>

                        <TableHeaderCell className={'text-tremor-content text-2xl dark:text-dark-tremor-content'}>Titulo</TableHeaderCell>
                        <TableHeaderCell className={'text-tremor-content text-2xl dark:text-dark-tremor-content'}>Autor</TableHeaderCell>
                        <TableHeaderCell className={'text-tremor-content text-2xl dark:text-dark-tremor-content'}>Actions</TableHeaderCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {books.map((book, index) => (
                        <TableRow key={index}>
                            <TableCell className='text-tremor-content text-xl dark:text-dark-tremor-content'>{index + 1}</TableCell>
                            <TableCell className='text-tremor-content text-xl dark:text-dark-tremor-content'>{book.title}</TableCell>
                            <TableCell className='text-tremor-content text-xl dark:text-dark-tremor-content'>{book.author}</TableCell>
                            <TableCell className='text-tremor-content text-xl dark:text-dark-tremor-content grid grid-cols-2 gap-1'>
                                <Button
                                    className={'bg-tremor-content dark:bg-green-700 hover:bg-green-800 dark:hover:bg-green-800 text-amber-50'}
                                    onClick={() => {
                                        console.log('Edit');
                                    }}
                                >
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                                    </svg>
                                </Button>
                                <Button
                                    className={'bg-tremor-content dark:bg-red-600 hover:bg-red-700 dark:hover:bg-red-700'}
                                    onClick={() => {
                                        handleDelete(book._id).then(r => console.log(r));
                                    }}
                                >
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                                    </svg>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}