import { useEffect, useState } from 'react';

import Modal from "./Modal";
import Input from '../inputs/Input';
import Select from '../select/Select';

import { toast } from 'react-hot-toast'
import { Keyword } from '../../interfaces/Keyword';
import { useEditKeyword } from '../../hooks/useEditKeyword';
import { useAddKeyword } from '../../hooks/useAddKeyword';

interface EditKeywordModalProps{
    keyword?: Keyword
    isOpen: boolean
    title: string
    closeModal: () => void
    onConfimation: () => void
}

const EditKeywordModal:React.FC<EditKeywordModalProps> = ({keyword, isOpen, title, closeModal, onConfimation}) =>{

    const { mutate: eMutate, isSuccess: eSuccess, isError: eError } = useEditKeyword(keyword)
    const { mutate: aMutate, isSuccess: aSuccess, isError: aError } = useAddKeyword(keyword)

    const editKeyword = () =>{
        const updatedKeyword: Keyword = {
            id: keyword?.id,
            keyword: (document.getElementById('keyword') as HTMLInputElement).value,
            img: keyword?.img,
            link: (document.getElementById('link') as HTMLInputElement).value,
            amount: (document.getElementById("amount") as HTMLSelectElement).value,
            last_login: keyword?.last_login
        }

        eMutate(updatedKeyword)
    }

    useEffect(() => {
        if(eSuccess){ 
            toast.success("Keyword updated" , {duration: 4000, style:{background:"rgb(220 252 231)"}})
            onConfimation()
        }      
        eError && toast.error(`Error occured !`, {duration: 4000, style:{background:"rgb(254 205 211)"}})        
    }, [eSuccess, eError])

    const addKeyword = () =>{
        const newKeyword: Keyword = {
            id: Math.floor(Math.random() * (400 - 40 + 1)) + 40,
            keyword: (document.getElementById('keyword') as HTMLInputElement).value,
            img: (document.getElementById('img') as HTMLInputElement).value,
            link: (document.getElementById('link') as HTMLInputElement).value,
            amount: (document.getElementById("amount") as HTMLSelectElement).value,
            last_login: "Not /logged in yet"
        }

        aMutate(newKeyword)
    }

    useEffect(() => {
        if(aSuccess){ 
            toast.success("Keyword added" , {duration: 4000, style:{background:"rgb(220 252 231)"}})
            onConfimation()
        }      
        aError && toast.error(`Error occured !`, {duration: 4000, style:{background:"rgb(254 205 211)"}})        
    }, [aSuccess, aError])
    

    const handleConfirmation = () => {
        if(title==="Edit Keyword"){
            editKeyword()
        }else if(title==="Add Keyword"){
            addKeyword()
        }
        closeModal()
    }
    

    const bodyContent = (
        <div className="flex flex-col gap-4">
             <Input id="keyword" label="Keyword" type="text" value={keyword? keyword.keyword: ""} required/>
             <Input id="link" label="Link" type="text" value={keyword? keyword.link: ""} required/>
             <Input id="amount" label="Amount" type="text" value={keyword? keyword.amount: ""} required/>
        </div>
    )

    return (
        <Modal isOpen={isOpen} title={title} label="Confirm" 
        onClose={closeModal} 
        onSubmit={handleConfirmation} 
        body={bodyContent}/> 
    )
}

export default EditKeywordModal;