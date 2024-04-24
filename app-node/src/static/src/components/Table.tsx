import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@tremor/react';
import {Book} from "../types";

export function TableHero ({books}:{books: Book[]}) {
    return (
        <div className="mx-auto w-[80%] h-[50vh] set-bg-opacity">
            <Table className={'relative rounded-xl h-full set-bg-opacity set-box-shadow-mix-blend-mode overflow-y-scroll setSclollbar '}>
                <TableHead className={'sticky top-0 rounded-xl overflow-hidden'}>
                    <TableRow className={'tremor-Card-root rounded-tremor-default bg-tremor-background shadow-tremor-card dark:bg-dark-tremor-background dark:ring-dark-tremor-ring dark:shadow-dark-tremor-card border-indigo-500 mx-auto'}>
                        <TableHeaderCell className={'text-tremor-content text-2xl dark:text-dark-tremor-content'}>ID</TableHeaderCell>

                        <TableHeaderCell className={'text-tremor-content text-2xl dark:text-dark-tremor-content'}>Titulo</TableHeaderCell>
                        <TableHeaderCell className={'text-tremor-content text-2xl dark:text-dark-tremor-content'}>Autor</TableHeaderCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {books.map((book, index) => (
                        <TableRow key={index}>
                            <TableCell className='text-tremor-content text-xl dark:text-dark-tremor-content'>{index + 1}</TableCell>
                            <TableCell className='text-tremor-content text-xl dark:text-dark-tremor-content'>{book.title}</TableCell>
                            <TableCell className='text-tremor-content text-xl dark:text-dark-tremor-content'>{book.author}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}