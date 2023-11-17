import { useEffect } from 'react';

import Modal from "./Modal";
import Select from '../select/Select';

import Input from '../inputs/Input';
import { toast } from 'react-hot-toast'
import { Keyword } from '../../interfaces/Keyword';
import { useDeleteKeyword } from '../../hooks/useDeleteKeyword';

interface DeleteModalProps{
    keyword?: Keyword
    isOpen: boolean
    closeModal: () => void
    onConfimation: () => void
}

const DeleteModal:React.FC<DeleteModalProps> = ({keyword, isOpen, closeModal, onConfimation}) =>{

    const { mutate, isSuccess, isError } = useDeleteKeyword(keyword?.id)

    const deleteKeyword = (id?:number) =>{
        mutate()
    }

    useEffect(() => {
        if(isSuccess){ 
            toast.success("Keyword deleted" , {duration: 4000, style:{background:"rgb(220 252 231)"}})
            onConfimation()
        }      
        isError && toast.error(`Error occured !`, {duration: 4000, style:{background:"rgb(254 205 211)"}})        
    }, [isSuccess, isError])
    

    const handleConfirmation = () => {
        deleteKeyword(keyword?.id)
        closeModal()
    }
    
    const bodyContent = (
        <div className="flex flex-col gap-4">
             <Input id="keyword" label="Keyword" type="text" value={keyword?.keyword} disabled required/>
             <Input id="link" label="Link" type="text" value={keyword?.link} disabled required/>
             <Input id="amount" label="Amount" type="text" value={keyword?.amount} disabled required/>
             {/* <Select list={["Active","Invited"]} disabled text="Status" value={keyword?.status}/> */}
        </div>
    )

    return (
        <Modal disabled={false} isOpen={isOpen} title="Delete Keyword" label="Confirm" 
        onClose={closeModal} 
        onSubmit={handleConfirmation} 
        body={bodyContent}/>
    )
}

export default DeleteModal;