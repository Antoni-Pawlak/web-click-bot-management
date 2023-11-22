import { useEffect, useState } from 'react';

import Modal from "./Modal";
import Input from '../inputs/Input';
import Select from '../select/Select';

import { toast } from 'react-hot-toast'
import { Keyword } from '../../interfaces/Keyword';
import { useEditKeyword } from '../../hooks/useEditKeyword';
import { useAddKeyword } from '../../hooks/useAddKeyword';

interface EditKeywordModalProps {
    keyword?: Keyword
    isOpen: boolean
    title: string
    closeModal: () => void
    onConfimation: () => void
}




const EditKeywordModal: React.FC<EditKeywordModalProps> = ({ keyword, isOpen, title, closeModal, onConfimation }) => {

    const { mutate: eMutate, isSuccess: eSuccess, isError: eError } = useEditKeyword(keyword)
    const { mutate: aMutate, isSuccess: aSuccess, isError: aError } = useAddKeyword(keyword)

    const getFormattedDate: () => string = () => {
        const options: Intl.DateTimeFormatOptions = {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        };
      
        const dateFormatter = new Intl.DateTimeFormat('en-US', options);
        const formattedDate: string = dateFormatter.format(new Date());
      
        return formattedDate;
      };
    const editKeyword = () => {

        const updatedKeyword: Keyword = {
            _id: keyword?._id,
            keyword: (document.getElementById('keyword') as HTMLInputElement).value,
            link: (document.getElementById('link') as HTMLInputElement).value,
            amount: (document.getElementById("amount") as HTMLSelectElement).value,
            updated_date: getFormattedDate()
        }

        eMutate(updatedKeyword)
    }

    useEffect(() => {
        if (eSuccess) {
            toast.success("Keyword updated", { duration: 4000, style: { background: "rgb(220 252 231)" } })
            onConfimation()
        }
        eError && toast.error(`Error occured !`, { duration: 4000, style: { background: "rgb(254 205 211)" } })
    }, [eSuccess, eError])

    const addKeyword = () => {

        const newKeyword: Keyword = {
            keyword: (document.getElementById('keyword') as HTMLInputElement).value,
            link: (document.getElementById('link') as HTMLInputElement).value,
            amount: (document.getElementById("amount") as HTMLSelectElement).value,
            updated_date: getFormattedDate()
        }
        aMutate(newKeyword)
    }

    useEffect(() => {
        if (aSuccess) {
            toast.success("Keyword added", { duration: 4000, style: { background: "rgb(220 252 231)" } })
            onConfimation()
        }
        aError && toast.error(`Error occured !`, { duration: 4000, style: { background: "rgb(254 205 211)" } })
    }, [aSuccess, aError])


    const handleConfirmation = () => {
        if (title === "Edit Keyword") {
            editKeyword()
        } else if (title === "Add Keyword") {
            addKeyword()
        }
        closeModal()
    }


    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input id="keyword" label="Keyword" type="text" value={keyword ? keyword.keyword : ""} required />
            <Input id="link" label="Link" type="text" value={keyword ? keyword.link : ""} required />
            <Input id="amount" label="Amount" type="text" value={keyword ? keyword.amount : ""} required />
        </div>
    )

    return (
        <Modal isOpen={isOpen} title={title} label="Confirm"
            onClose={closeModal}
            onSubmit={handleConfirmation}
            body={bodyContent} />
    )
}

export default EditKeywordModal;