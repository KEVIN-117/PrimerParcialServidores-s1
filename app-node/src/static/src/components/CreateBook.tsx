import { Button, Dialog, DialogPanel } from '@tremor/react';
import React from 'react';
import {FormRegister} from "./FormRegister";

export function CreateBook() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <Button className="mx-auto block" onClick={() => setIsOpen(true)}>registrar</Button>
            <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
                <DialogPanel className={'tremor-Card-root relative text-left ring-1 rounded-tremor-default bg-dark-tremor-background ring-dark-tremor-ring shadow-dark-tremor-card border-indigo-500 border-t-4 mx-auto w-[80%] flex flex-col gap-4 p-4 set-box-shadow-mix-blend-mode'}>

                    <FormRegister closeModal={setIsOpen}/>
                    <Button className="mt-8 w-full" onClick={() => setIsOpen(false)}>
                        Cancelar
                    </Button>
                </DialogPanel>
            </Dialog>
        </>
    );
}